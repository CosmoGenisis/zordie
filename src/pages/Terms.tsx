import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { Separator } from '@/components/ui/separator';

const Terms = () => {
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
              Terms of <span className="text-zordie-600 dark:text-zordie-400">Service</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-600 dark:text-gray-300">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="py-24 bg-white dark:bg-zordie-950 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none dark:prose-invert"
          >
            <SectionHeading
              title="Terms of Service"
              subtitle="Last updated: April 11, 2025"
              align="left"
            />
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                These Terms of Service ("Terms") govern your access to and use of the Zordie AI platform, website, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Zordie AI ("we", "us", or "our") may revise these Terms at any time by posting an updated version on our website. Your continued use of the Services after such changes constitutes your acceptance of the revised Terms.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. Account Registration</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                To access certain features of the Services, you must register for an account. When you register, you agree to provide accurate and complete information. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                You must immediately notify us of any unauthorized use of your account or any other breach of security. We will not be liable for any loss or damage arising from your failure to comply with this section.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. Subscription and Payments</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Some of our Services require payment of fees. By subscribing to a paid plan, you agree to pay all fees in accordance with the pricing and payment terms presented to you.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Subscriptions will automatically renew for the same subscription period unless you cancel your subscription before the next renewal date. You may cancel your subscription at any time through your account settings or by contacting customer support.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We reserve the right to change our pricing at any time. If we change the pricing for your subscription, we will provide notice before the change takes effect.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. User Content</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Our Services may allow you to upload, submit, store, send, or receive content ("User Content"). You retain ownership of any intellectual property rights that you hold in that User Content.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                By uploading User Content, you grant Zordie AI a worldwide, royalty-free, non-exclusive license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in connection with providing and improving our Services.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                You represent and warrant that: (1) you own or have the necessary rights to the User Content and the right to grant the license above, and (2) the User Content does not violate any third-party rights or applicable laws.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">5. Prohibited Conduct</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                You agree not to misuse our Services. For example, you must not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Use the Services for any unlawful purpose or in violation of these Terms</li>
                <li>Post or transmit harmful, fraudulent, or deceptive content</li>
                <li>Attempt to circumvent security features or gain unauthorized access</li>
                <li>Interfere with the operation of the Services or other users' enjoyment</li>
                <li>Use automated methods to access or use the Services without our permission</li>
                <li>Infringe the intellectual property rights of others</li>
                <li>Violate the privacy or publicity rights of others</li>
              </ul>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">6. Intellectual Property Rights</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                The Services and their contents, including but not limited to text, graphics, logos, icons, images, audio, video, software, and algorithms, are owned by Zordie AI or its licensors and are protected by copyright, trademark, patent, and other intellectual property laws.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                You may not copy, modify, distribute, sell, or lease any part of our Services or included software, nor may you reverse engineer or attempt to extract the source code of that software, unless laws prohibit those restrictions or you have our written permission.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">7. Termination</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We may suspend or terminate your access to the Services at any time, with or without cause, and with or without notice. Upon termination, your right to use the Services will immediately cease.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                If you wish to terminate your account, you may simply discontinue using the Services or delete your account through the account settings.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">8. Disclaimer of Warranties</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We do not warrant that the Services will be uninterrupted, error-free, or secure, or that any defects will be corrected.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">9. Limitation of Liability</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ZORDIE AI BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA, OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SERVICES.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">10. Contact Information</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Email: legal@zordieai.com<br />
                Address: 123 Innovation Drive, London, UK
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
