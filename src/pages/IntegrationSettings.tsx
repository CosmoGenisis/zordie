
import React from "react";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WebhookSetup from "@/components/integration/WebhookSetup";
import { Webhook, CalendarDays, Mail, Settings } from "lucide-react";
import LoadingScreen from "@/components/auth/LoadingScreen";

const IntegrationSettings = () => {
  const { isLoading, userProfile } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Integration Settings</h1>
          <p className="text-gray-600">Connect your existing tools and services with Zordie</p>
        </div>

        <Tabs defaultValue="webhooks" className="space-y-6">
          <TabsList className="w-full max-w-md">
            <TabsTrigger value="webhooks" className="flex-1">
              <Webhook className="mr-2 h-4 w-4" />
              Webhooks
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex-1">
              <CalendarDays className="mr-2 h-4 w-4" />
              Calendar
            </TabsTrigger>
            <TabsTrigger value="email" className="flex-1">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </TabsTrigger>
          </TabsList>

          <TabsContent value="webhooks" className="space-y-6">
            <WebhookSetup />
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Webhook Event Types</CardTitle>
                <CardDescription>Customize which events trigger your webhooks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Currently, all webhook integrations receive all event types. In the future, you'll be able to customize which events are sent to each webhook endpoint.
                  </p>
                  
                  <div className="border p-4 rounded-md bg-gray-50">
                    <h3 className="font-medium mb-2">Available Event Types:</h3>
                    <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                      <li>candidate.created - A new candidate profile is created</li>
                      <li>job.published - A new job is published</li>
                      <li>application.submitted - A candidate applies for a job</li>
                      <li>interview.scheduled - An interview is scheduled</li>
                      <li>candidate.status_changed - A candidate's status changes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Calendar Integration</CardTitle>
                <CardDescription>Connect your Google or Microsoft Calendar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-gray-500">
                  Calendar integration is coming soon. Stay tuned for updates!
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="email" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>Configure your email notification preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-gray-500">
                  Email notification settings will be available in an upcoming update.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default IntegrationSettings;
