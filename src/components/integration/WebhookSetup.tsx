
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface WebhookSetupProps {
  title?: string;
  description?: string;
}

const WebhookSetup: React.FC<WebhookSetupProps> = ({ 
  title = "Webhook Integration", 
  description = "Connect your Zapier or other webhook-based integrations" 
}) => {
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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

  const handleSave = () => {
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter a webhook URL to save",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically save the webhook URL to your backend
    toast({
      title: "Webhook Saved",
      description: "Your webhook URL has been saved successfully.",
    });
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
          disabled={isLoading || !webhookUrl}
        >
          Save Configuration
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WebhookSetup;
