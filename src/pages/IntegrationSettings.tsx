
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Webhook, Calendar, Mail, Database } from "lucide-react";
import WebhookSetup from "@/components/integration/WebhookSetup";
import LoadingScreen from "@/components/auth/LoadingScreen";

const IntegrationSettings = () => {
  const { user, userProfile, isLoading } = useAuth();
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            className="mr-4" 
            onClick={() => userProfile?.user_type === "company" ? navigate("/company-dashboard") : navigate("/job-seeker-dashboard")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          <h1 className="text-2xl font-bold">Integration Settings</h1>
        </div>

        <Tabs defaultValue="webhooks" className="space-y-6">
          <TabsList className="mb-4">
            <TabsTrigger value="webhooks" className="flex items-center">
              <Webhook className="mr-2 h-4 w-4" />
              Webhooks
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Calendar
            </TabsTrigger>
            <TabsTrigger value="email" className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center">
              <Database className="mr-2 h-4 w-4" />
              Data Import/Export
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="webhooks" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <WebhookSetup 
                title="Job Application Webhook" 
                description="Receive notifications when candidates apply for your jobs"
              />
              
              <WebhookSetup 
                title="Interview Scheduling Webhook" 
                description="Get notified when interviews are scheduled or updated"
              />
              
              <WebhookSetup 
                title="Candidate Status Webhook" 
                description="Trigger actions when candidate statuses change"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="calendar">
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-lg font-medium mb-4">Calendar Integration</h2>
              <p className="mb-4 text-gray-600">
                Connect your calendar to automatically schedule and sync interviews with your existing workflow.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9.5L12 15.5L18 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Connect Google Calendar
                </Button>
                <Button variant="outline" className="justify-start">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9.5L12 15.5L18 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Connect Microsoft Outlook
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="email">
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-lg font-medium mb-4">Email Notification Settings</h2>
              <p className="mb-4 text-gray-600">
                Configure when and how you receive email notifications.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <div>
                    <p className="font-medium">New Job Applications</p>
                    <p className="text-sm text-gray-500">Get notified when candidates apply to your jobs</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <div>
                    <p className="font-medium">Interview Reminders</p>
                    <p className="text-sm text-gray-500">Receive reminders about upcoming interviews</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Weekly Digest</p>
                    <p className="text-sm text-gray-500">Receive a weekly summary of recruitment activities</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="data">
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-lg font-medium mb-4">Data Import/Export Tools</h2>
              <p className="mb-4 text-gray-600">
                Import or export data to integrate with your existing systems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Import Candidates
                </Button>
                <Button variant="outline" className="justify-start">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20V4M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Export Jobs Data
                </Button>
                <Button variant="outline" className="justify-start">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Import Jobs
                </Button>
                <Button variant="outline" className="justify-start">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20V4M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Export Candidates Data
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default IntegrationSettings;
