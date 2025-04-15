
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";

interface WebhookSetupProps {
  title?: string;
  description?: string;
}

interface WebhookConfig {
  id?: string;
  user_id: string;
  webhook_url: string;
  created_at?: string;
}

const WebhookSetup: React.FC<WebhookSetupProps> = ({ 
  title = "Webhook Integration", 
  description = "Connect your Zapier or other webhook-based integrations" 
}) => {
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [webhookId, setWebhookId] = useState<string | null>(null);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchExistingWebhook();
    }
  }, [user]);

  const fetchExistingWebhook = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('webhooks')
        .select('*')
        .eq('user_id', user.id)
        .single();
      
      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching webhook:', error);
        return;
      }
      
      if (data) {
        setWebhookUrl(data.webhook_url);
        setWebhookId(data.id);
      }
    } catch (error) {
      console.error('Error in fetchExistingWebhook:', error);
    }
  };

  const handleTrigger = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Triggering webhook:", webhookUrl);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Add this to handle CORS
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
          event: "test_webhook",
          data: {
            message: "This is a test webhook from Zordie"
          }
        }),
      });

      // Since we're using no-cors, we won't get a proper response status
      toast({
        title: "Request Sent",
        description: "The webhook test was sent. Please check your integration to confirm it was triggered.",
      });
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast({
        title: "Error",
        description: "Failed to trigger the webhook. Please check the URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter a webhook URL to save",
        variant: "destructive",
      });
      return;
    }

    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to save webhook settings",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);

    try {
      // Prepare webhook configuration
      const webhookConfig: WebhookConfig = {
        user_id: user.id,
        webhook_url: webhookUrl,
      };

      let result;
      
      if (webhookId) {
        // Update existing webhook
        result = await supabase
          .from('webhooks')
          .update({ webhook_url: webhookUrl })
          .eq('id', webhookId);
      } else {
        // Insert new webhook
        result = await supabase
          .from('webhooks')
          .insert(webhookConfig);
      }

      if (result.error) {
        throw result.error;
      }

      // If this was an insert, get the new ID
      if (!webhookId && result.data) {
        const { data } = await supabase
          .from('webhooks')
          .select('id')
          .eq('user_id', user.id)
          .single();
          
        if (data) {
          setWebhookId(data.id);
        }
      }

      toast({
        title: "Webhook Saved",
        description: "Your webhook URL has been saved successfully.",
      });
    } catch (error) {
      console.error("Error saving webhook:", error);
      toast({
        title: "Error",
        description: "Failed to save webhook configuration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleTrigger}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="webhookUrl">Webhook URL</Label>
              <Input
                id="webhookUrl"
                type="url"
                placeholder="https://hooks.zapier.com/hooks/catch/..."
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                Enter the webhook URL from your integration platform (e.g., Zapier, Integromat)
              </p>
            </div>
            
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium">When this webhook will be triggered:</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li>New candidate applies for a job</li>
                <li>Interview is scheduled</li>
                <li>Candidate status is updated</li>
              </ul>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={handleTrigger}
          disabled={isLoading || !webhookUrl}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Test Webhook
        </Button>
        <Button
          type="button"
          onClick={handleSave}
          disabled={isSaving || !webhookUrl}
        >
          {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save Configuration
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WebhookSetup;
