import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-zordie-50 to-white dark:from-zordie-900 dark:to-zordie-950 transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        </div>
        <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Get in <span className="text-zordie-600 dark:text-zordie-400">Touch</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-600 dark:text-gray-300">
              Have questions about Zordie AI? Our team is here to help you get started with authentic hiring.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-24 bg-white dark:bg-zordie-950 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Contact Us"
                subtitle="We'd love to hear from you"
                align="left"
              />
              
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                Whether you're curious about our features, pricing, or need a demo, we're ready to answer all your questions.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="dark:bg-zordie-800 dark:border-zordie-700" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" className="dark:bg-zordie-800 dark:border-zordie-700" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" className="dark:bg-zordie-800 dark:border-zordie-700" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help..." 
                    rows={6}
                    className="dark:bg-zordie-800 dark:border-zordie-700"
                  />
                </div>
                
                <Button type="submit" className="btn-gradient w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:mt-12"
            >
              <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:mt-0">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="bg-gray-50 dark:bg-zordie-800 border-0 hover-card-effect">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-zordie-100 dark:bg-zordie-700">
                          <item.icon className="w-5 h-5 text-zordie-600 dark:text-zordie-200" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{item.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 overflow-hidden rounded-lg shadow-xl">
                <iframe 
                  title="Zordie AI Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.23982788336!2d80.22156075381184!3d26.449636589762694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1681461476689!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Details Update */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
        <ul className="space-y-2">
          <li>
            <div className="flex items-center text-gray-600">
              <Mail className="mr-2 h-5 w-5" />
              <span>support@zordie.in</span>
            </div>
          </li>
          <li>
            <div className="flex items-center text-gray-600">
              <Mail className="mr-2 h-5 w-5" />
              <span>customersupport@zordie.com</span>
            </div>
          </li>
          <li>
            <div className="flex items-center text-gray-600">
              <Phone className="mr-2 h-5 w-5" />
              <span>+91 63840 40088</span>
            </div>
          </li>
          <li>
            <div className="flex items-center text-gray-600">
              <MapPin className="mr-2 h-5 w-5" />
              <span>273 Naveen nagar, Kakadeo, Kanpur, India 208025</span>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "support@zordie.in"
  },
  {
    icon: Mail,
    title: "Customer Support",
    details: "customersupport@zordie.com"
  },
  {
    icon: MapPin,
    title: "Office",
    details: "Kanpur, India"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Monday-Friday: 9AM-6PM"
  }
];

export default Contact;
