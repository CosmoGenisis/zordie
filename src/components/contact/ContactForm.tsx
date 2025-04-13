
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionHeading } from '@/components/ui/section-heading';

const ContactForm: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default ContactForm;
