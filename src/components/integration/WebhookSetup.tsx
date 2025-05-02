
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Copy, Key, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Removed useAuth import

interface Webhook {
  id: string;
  name: string;
  url: string;
  events: string[];
  created_at: string;
  is_active: boolean;
}

const WebhookSetup = () => {
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [webhookName, setWebhookName] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [selectedEvents, setSelectedEvents] = useState<string[]>(["application.created"]);
  const [isCreating, setIsCreating] = useState(false);
  const [secretKey, setSecretKey] = useState("");
  const [showSecret, setShowSecret] = useState(false);
  
  const { toast } = useToast();
  
  // Dummy user ID for demo purposes
  const demoUserId = "demo-user-id";

  useEffect(() => {
    fetchWebhooks();
  }, []);

  const fetchWebhooks = async () => {
    setIsLoading(true);
    try {
      // In a real app, this would fetch from the database
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data
      const mockWebhooks: Webhook[] = [
        {
          id: "1",
          name: "Application Notifications",
          url: "https://example.com/webhooks/applications",
          events: ["application.created", "application.updated"],
          created_at: new Date().toISOString(),
          is_active: true
        },
        {
          id: "2",
          name: "Candidate Updates",
          url: "https://example.com/webhooks/candidates",
          events: ["candidate.created", "interview.scheduled"],
          created_at: new Date().toISOString(),
          is_active: false
        }
      ];
      
      setWebhooks(mockWebhooks);
    } catch (error) {
      console.error("Error fetching webhooks:", error);
      toast({
        title: "Error",
        description: "Failed to load webhooks. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const createWebhook = async () => {
    if (!webhookName || !webhookUrl || selectedEvents.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsCreating(true);
    try {
      // In a real app, this would save to the database
      // Generate webhook secret
      const newSecret = Array(32).fill(0).map(() => Math.random().toString(36).charAt(2)).join('');
      setSecretKey(newSecret);
      
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newWebhook: Webhook = {
        id: `webhook-${Date.now()}`,
        name: webhookName,
        url: webhookUrl,
        events: selectedEvents,
        created_at: new Date().toISOString(),
        is_active: true
      };
      
      setWebhooks([...webhooks, newWebhook]);
      
      toast({
        title: "Webhook Created",
        description: "Your new webhook has been created successfully."
      });
      
      // Reset form
      setWebhookName("");
      setWebhookUrl("");
      setSelectedEvents(["application.created"]);
      setShowSecret(true);
    } catch (error) {
      console.error("Error creating webhook:", error);
      toast({
        title: "Error",
        description: "Failed to create webhook. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsCreating(false);
    }
  };
  
  const toggleWebhookStatus = async (webhookId: string, currentStatus: boolean) => {
    try {
      // In a real app, this would update the database
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setWebhooks(webhooks.map(webhook => 
        webhook.id === webhookId 
          ? {...webhook, is_active: !currentStatus} 
          : webhook
      ));
      
      toast({
        title: currentStatus ? "Webhook Disabled" : "Webhook Enabled",
        description: `The webhook has been ${currentStatus ? "disabled" : "enabled"} successfully.`
      });
    } catch (error) {
      console.error("Error updating webhook status:", error);
      toast({
        title: "Error",
        description: "Failed to update webhook status. Please try again.",
        variant: "destructive"
      });
    }
  };
  
  const deleteWebhook = async (webhookId: string) => {
    try {
      // In a real app, this would delete from the database
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setWebhooks(webhooks.filter(webhook => webhook.id !== webhookId));
      
      toast({
        title: "Webhook Deleted",
        description: "The webhook has been deleted successfully."
      });
    } catch (error) {
      console.error("Error deleting webhook:", error);
      toast({
        title: "Error",
        description: "Failed to delete webhook. Please try again.",
        variant: "destructive"
      });
    }
  };
  
  const copySecret = () => {
    navigator.clipboard.writeText(secretKey);
    toast({
      title: "Secret Copied",
      description: "The webhook secret has been copied to clipboard."
    });
  };
  
  const events = [
    { value: "application.created", label: "Application Created" },
    { value: "application.updated", label: "Application Updated" },
    { value: "application.status_changed", label: "Application Status Changed" },
    { value: "candidate.created", label: "Candidate Created" },
    { value: "candidate.updated", label: "Candidate Updated" },
    { value: "interview.scheduled", label: "Interview Scheduled" },
    { value: "interview.completed", label: "Interview Completed" },
    { value: "offer.created", label: "Offer Created" },
    { value: "offer.accepted", label: "Offer Accepted" },
    { value: "offer.rejected", label: "Offer Rejected" }
  ];
  
  const toggleEvent = (event: string) => {
    if (selectedEvents.includes(event)) {
      setSelectedEvents(selectedEvents.filter(e => e !== event));
    } else {
      setSelectedEvents([...selectedEvents, event]);
    }
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Create Webhook</CardTitle>
          <CardDescription>
            Set up webhooks to receive real-time updates about events in your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="webhook-name">Webhook Name</Label>
              <Input 
                id="webhook-name" 
                placeholder="e.g., Application Notifications" 
                value={webhookName}
                onChange={(e) => setWebhookName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="webhook-url">Payload URL</Label>
              <Input 
                id="webhook-url" 
                placeholder="https://example.com/webhook" 
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
              />
              <p className="text-sm text-gray-500">
                The URL where webhook payloads will be delivered.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label>Webhook Events</Label>
              <div className="border rounded-md p-4 space-y-2">
                <p className="text-sm text-gray-500 mb-3">
                  Select the events that should trigger this webhook.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {events.map((event) => (
                    <div key={event.value} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`event-${event.value}`}
                        checked={selectedEvents.includes(event.value)}
                        onChange={() => toggleEvent(event.value)}
                        className="rounded border-gray-300 text-zordie-600 focus:ring-zordie-500"
                      />
                      <Label htmlFor={`event-${event.value}`} className="text-sm cursor-pointer">
                        {event.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full" 
            onClick={createWebhook}
            disabled={isCreating}
          >
            {isCreating ? "Creating..." : "Create Webhook"}
          </Button>
        </CardFooter>
      </Card>
      
      {showSecret && (
        <Card className="bg-gray-50 border-gray-300 border-dashed">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Key className="w-5 h-5 mr-2" />
              Webhook Secret
            </CardTitle>
            <CardDescription>
              Store this secret safely. It will be used to validate webhook payloads.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-white p-3 border rounded-md flex justify-between items-center">
              <code className="text-sm">
                {secretKey}
              </code>
              <Button variant="ghost" size="sm" onClick={copySecret}>
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-red-500 mt-2">
              Note: This secret will only be shown once.
            </p>
          </CardContent>
        </Card>
      )}
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Your Webhooks</h3>
        
        {isLoading ? (
          <div className="text-center py-8">Loading webhooks...</div>
        ) : webhooks.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No webhooks configured yet. Create one to get started.
          </div>
        ) : (
          <div className="space-y-4">
            {webhooks.map((webhook) => (
              <Card key={webhook.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{webhook.name}</CardTitle>
                      <CardDescription className="truncate max-w-md">{webhook.url}</CardDescription>
                    </div>
                    <Badge variant={webhook.is_active ? "default" : "outline"}>
                      {webhook.is_active ? "Active" : "Disabled"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-2">
                    {webhook.events.map((event, index) => (
                      <Badge key={index} variant="secondary">
                        {event.replace('.', ' ')}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center">
                      <Switch 
                        checked={webhook.is_active} 
                        onCheckedChange={() => toggleWebhookStatus(webhook.id, webhook.is_active)}
                      />
                      <span className="ml-2 text-sm">
                        {webhook.is_active ? "Enabled" : "Disabled"}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => deleteWebhook(webhook.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WebhookSetup;
