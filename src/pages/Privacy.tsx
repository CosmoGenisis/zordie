
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/context/ThemeContext';

const Privacy = () => {
  const { theme } = useTheme();
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white dark:bg-zordie-950 transition-colors duration-300">
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
              Privacy <span className="text-zordie-600 dark:text-zordie-400">Policy</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-600 dark:text-gray-300">
              At Zordie AI, we take your privacy seriously. This policy outlines how we collect, use, and protect your data.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Policy Content */}
      <div className="py-24 bg-white dark:bg-zordie-950 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none dark:prose-invert"
          >
            <SectionHeading
              title="Privacy Policy"
              subtitle="Last updated: April 13, 2025"
              align="left"
            />
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                This Privacy Policy explains how Zordie AI ("we", "us", or "our") collects, uses, shares, and protects personal information when you use our website, products, and services (collectively, the "Services"). We respect your privacy and are committed to protecting your personal information.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                By accessing or using our Services, you agree to this Privacy Policy. If you do not agree with our policies and practices, you should not use our Services.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. Information We Collect</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We collect information that you provide directly to us, information we collect automatically when you use our Services, and information from third-party sources.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">2.1 Information You Provide</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We collect information you provide when you register for an account, subscribe to our newsletter, fill out a form, or otherwise communicate with us:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Contact information (name, email address, phone number)</li>
                <li>Account credentials (username, password)</li>
                <li>Company information (company name, job title, industry)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Profile information (profile picture, professional background)</li>
                <li>Content you upload (resumes, job descriptions, assessments)</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">2.2 Information We Collect Automatically</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                When you use our Services, we automatically collect certain information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, features used, actions taken)</li>
                <li>Log data (access times, error reports)</li>
                <li>Location information (based on IP address)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">2.3 Information from Third Parties</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We may receive information about you from third parties:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Social media platforms if you connect your account</li>
                <li>Business partners with whom we offer co-branded services</li>
                <li>Recruiters or employers who use our platform</li>
                <li>Background check providers (with your consent)</li>
              </ul>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. How We Use Your Information</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We use your information for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Providing and maintaining our Services</li>
                <li>Processing transactions and billing</li>
                <li>Personalizing your experience</li>
                <li>Analyzing usage to improve our Services</li>
                <li>Communicating with you about our Services</li>
                <li>Providing customer support</li>
                <li>Ensuring the security of our Services</li>
                <li>Complying with legal obligations</li>
                <li>Verifying the authenticity of uploaded credentials</li>
                <li>Matching job seekers with appropriate opportunities</li>
                <li>Conducting AI-powered interviews and assessments</li>
              </ul>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. How We Share Your Information</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Service providers who assist in delivering our Services</li>
                <li>Employers or recruiters (for job applicants)</li>
                <li>Job seekers (for employers, limited to job-related information)</li>
                <li>Business partners with your consent</li>
                <li>Legal authorities when required by law</li>
                <li>In connection with a business transaction (merger, acquisition, etc.)</li>
              </ul>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We do not sell your personal information to third parties.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">5. Your Rights and Choices</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction or objection to processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                To exercise these rights, please contact us at privacy@zordie.ai.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">5.1 Account Settings</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                You can update, correct, or delete certain personal information through your account settings. If you cannot make these changes yourself, please contact us.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">5.2 Communications Preferences</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                You can opt out of receiving promotional emails by following the unsubscribe instructions in those emails. You may still receive service-related communications.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">5.3 Cookies and Tracking Technologies</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Most web browsers are set to accept cookies by default. You can usually change your browser settings to remove or reject cookies. Note that removing or rejecting cookies could affect the availability and functionality of our Services.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">6. Data Security</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Our security measures include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and vulnerability testing</li>
                <li>Access controls and authentication requirements</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">7. International Data Transfers</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We may transfer, store, and process your information in countries other than your own. We ensure appropriate safeguards are in place to protect your information when transferred internationally, including using standard contractual clauses approved by relevant authorities.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">8. Data Retention</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When determining retention periods, we consider:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>The amount, nature, and sensitivity of the information</li>
                <li>The potential risk of harm from unauthorized use or disclosure</li>
                <li>The purposes for which we process the information</li>
                <li>Legal, regulatory, and contractual requirements</li>
              </ul>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">9. Children's Privacy</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Our Services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us. If we discover that a child under 16 has provided us with personal information, we will delete such information from our servers.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">10. Changes to this Privacy Policy</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. For significant changes, we may provide additional notice, such as an email notification. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">11. Contact Us</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Email: privacy@zordie.ai<br />
                Address: 123 Tech Park, Bangalore, India 560001<br />
                Phone: +91 80 1234 5678
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                For data protection inquiries specifically, you can contact our Data Protection Officer at dpo@zordie.ai.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
