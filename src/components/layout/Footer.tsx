import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-white dark:bg-zordie-900 border-t dark:border-zordie-800 mt-auto relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-zordie-100/50 dark:bg-zordie-800/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent1/10 dark:bg-accent1/5 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 bg-inherit">
        {/* Newsletter */}
        <div className="mb-16 bg-gradient-to-r from-zordie-50 to-zordie-100 dark:from-zordie-800 dark:to-zordie-900 p-8 rounded-xl border border-zordie-200 dark:border-zordie-700 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-zordie-800 dark:text-white mb-2">
                Stay up to date with Zordie
              </h3>
              <p className="text-zordie-600 dark:text-zordie-300">
                Get the latest news and updates on AI-powered hiring
              </p>
            </div>
            <div className="flex w-full md:w-auto flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Enter your email" className="min-w-[240px] bg-white dark:bg-zordie-800" />
              <Button className="bg-gradient-to-r from-zordie-600 to-accent1 hover:from-zordie-700 hover:to-accent1-hover relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  Subscribe
                  <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.span className="absolute top-0 left-0 w-full h-full bg-white opacity-20" initial={{
                x: '-100%'
              }} whileHover={{
                x: '100%'
              }} transition={{
                duration: 0.7
              }} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-5">
              <span className="text-2xl font-bold bg-gradient-to-r from-zordie-700 to-accent1 bg-clip-text text-transparent dark:from-zordie-400 dark:to-accent1">Zordie</span>
              <span className="ml-1 text-2xl font-bold text-accent1">.</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              AI-powered verified hiring platform that eliminates fake resumes and brings trust to the hiring process. Our mission is to connect the right talent with the right opportunities.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com" icon={<Twitter />} label="Twitter" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
              <SocialLink href="mailto:support@zordie.in" icon={<Mail />} label="Email" />
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold text-lg text-zordie-800 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink to="/about" text="About Us" />
              <FooterLink to="/contact" text="Contact" />
              <FooterLink to="/careers" text="Careers" />
              <FooterLink to="/blog" text="Blog" />
            </ul>
          </div>

          {/* For companies */}
          <div>
            <h3 className="font-semibold text-lg text-zordie-800 dark:text-white mb-4">For Companies</h3>
            <ul className="space-y-3">
              <FooterLink to="/post-job" text="Post a Job" />
              <FooterLink to="/ai-screening" text="AI Screening" />
              <FooterLink to="/verification" text="Verification" />
              <FooterLink to="/enterprise" text="Enterprise Solutions" />
            </ul>
          </div>

          {/* For job seekers */}
          <div>
            <h3 className="font-semibold text-lg text-zordie-800 dark:text-white mb-4">For Job Seekers</h3>
            <ul className="space-y-3">
              <FooterLink to="/find-jobs" text="Find Jobs" />
              <FooterLink to="/verify-profile" text="Verify Profile" />
              <FooterLink to="/practice-interview" text="Practice Interviews" />
              <FooterLink to="/resources" text="Resources" />
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 dark:border-zordie-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zordie. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-zordie-700 dark:hover:text-zordie-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-zordie-700 dark:hover:text-zordie-300 transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-zordie-700 dark:hover:text-zordie-300 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
const SocialLink = ({
  href,
  icon,
  label
}) => {
  return <a href={href} className="w-10 h-10 bg-zordie-100 dark:bg-zordie-800 rounded-full flex items-center justify-center text-zordie-600 dark:text-zordie-400 hover:bg-zordie-200 dark:hover:bg-zordie-700 transition-colors" target="_blank" rel="noreferrer" aria-label={label}>
      {icon}
    </a>;
};
const FooterLink = ({
  to,
  text
}) => {
  return <li>
      <Link to={to} className="text-gray-600 dark:text-gray-300 hover:text-zordie-700 dark:hover:text-zordie-300 transition-colors flex items-center group">
        <span className="mr-1 text-zordie-500/0 group-hover:text-zordie-500 transition-colors">
          <ChevronRight className="h-3 w-3" />
        </span>
        {text}
      </Link>
    </li>;
};
export default Footer;