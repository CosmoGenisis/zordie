
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { plan, billingCycle } = await req.json();
    
    // Create Supabase client using the anon key for user authentication
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Retrieve authenticated user
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data } = await supabaseClient.auth.getUser(token);
    const user = data.user;
    
    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Set up pricing based on plan and billing cycle
    let priceAmount;
    let planName;
    
    switch (plan) {
      case "Free":
        return new Response(
          JSON.stringify({ 
            error: false, 
            message: "Free plan doesn't require payment",
            url: `${req.headers.get("origin")}/dashboard`
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      case "Startup":
        planName = "Startup Plan";
        priceAmount = billingCycle === "annual" ? 14390 : 1499;
        break;
      case "Business":
        planName = "Business Plan";
        priceAmount = billingCycle === "annual" ? 47990 : 4999;
        break;
      case "Enterprise":
        return new Response(
          JSON.stringify({ 
            error: false, 
            message: "Enterprise plan requires contacting sales",
            url: `${req.headers.get("origin")}/contact`
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      default:
        planName = "Basic Plan";
        priceAmount = billingCycle === "annual" ? 14390 : 1499;
    }

    // Check if a Stripe customer record exists for this user
    let customerId;
    if (user?.email) {
      const customers = await stripe.customers.list({ email: user.email, limit: 1 });
      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
      }
    }

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : (user?.email || undefined),
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: { name: planName },
            unit_amount: priceAmount,
            recurring: billingCycle === "annual" ? { interval: "year" } : { interval: "month" },
          },
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/pricing`,
    });

    // Also track the user selection in a separate table for analytics
    if (user) {
      try {
        const serviceClient = createClient(
          Deno.env.get("SUPABASE_URL") ?? "",
          Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
          { auth: { persistSession: false } }
        );
        
        await serviceClient
          .from('user_actions')
          .insert({
            user_id: user.id,
            action_type: 'plan_selected',
            action_details: JSON.stringify({
              plan_name: plan,
              billing_cycle: billingCycle
            })
          });
      } catch (err) {
        console.error("Error logging plan selection:", err);
      }
    }

    return new Response(
      JSON.stringify({ error: false, url: session.url }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
    
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return new Response(
      JSON.stringify({ error: true, message: error.message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
