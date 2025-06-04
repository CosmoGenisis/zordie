
import React from 'react';
import Layout from '@/components/layout/Layout';
import ContactInfo from '@/components/contact/ContactInfo';
import PreAccessForm from '@/components/contact/PreAccessForm';
import ContactForm from '@/components/contact/ContactForm';
import { SectionHeading } from '@/components/ui/section-heading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Zap, MessageSquare, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              <Zap className="w-4 h-4 mr-1" />
              Get Early Access
            </Badge>
            <SectionHeading
              title="Join the Future of Recruitment"
              subtitle="Get exclusive early access to Zordie's AI-powered recruitment platform and transform your hiring process"
              align="center"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs defaultValue="preaccess" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="preaccess" className="flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Pre-Access Program
                </TabsTrigger>
                <TabsTrigger value="contact" className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  General Contact
                </TabsTrigger>
                <TabsTrigger value="info" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </TabsTrigger>
              </TabsList>

              <TabsContent value="preaccess" className="mt-8">
                <PreAccessForm />
              </TabsContent>

              <TabsContent value="contact" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Send us a Message</h3>
                    <p className="text-gray-600 mb-6">
                      Have questions about Zordie? Want to schedule a demo? We'd love to hear from you.
                    </p>
                    <ContactForm />
                  </div>
                  <div>
                    <ContactInfo />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="info" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <ContactInfo />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Why Choose Zordie?</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">10 Specialized AI Agents</h4>
                        <p className="text-gray-600 text-sm">Our ARC system features dedicated AI agents for every aspect of recruitment.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Advanced Analytics</h4>
                        <p className="text-gray-600 text-sm">Get deep insights into your hiring process with AI-powered analytics.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Seamless Integration</h4>
                        <p className="text-gray-600 text-sm">Integrate with your existing tools and workflows effortlessly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
