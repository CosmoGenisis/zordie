
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WebhookSetup from "@/components/integration/WebhookSetup";
import { SectionHeading } from "@/components/ui/section-heading";

// Removed useAuth import - no authentication needed

const IntegrationSettings = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <SectionHeading
          title="Integrations & API Settings"
          subtitle="Configure and manage integrations with external services"
          align="center"
        />

        <Tabs defaultValue="webhooks" className="mt-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl mx-auto mb-8">
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="api">API Keys</TabsTrigger>
            <TabsTrigger value="zapier">Zapier</TabsTrigger>
            <TabsTrigger value="services">Service Connections</TabsTrigger>
          </TabsList>
          
          <TabsContent value="webhooks">
            <Card>
              <CardHeader>
                <CardTitle>Webhook Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <WebhookSetup />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="mb-4 text-gray-500">API Key management functionality will be available soon.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="zapier">
            <Card>
              <CardHeader>
                <CardTitle>Zapier Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="mb-4 text-gray-500">Zapier integration will be available soon.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Service Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="mb-4 text-gray-500">Third-party service connections will be available soon.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default IntegrationSettings;
