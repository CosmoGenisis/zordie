
import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-zordie-700">Zordie</span>
              <span className="ml-1 text-2xl font-bold text-accent1">.</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              AI-powered verified hiring platform that eliminates fake resumes and brings trust to the hiring process.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com"
                className="text-gray-500 hover:text-zordie-700"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-500 hover:text-zordie-700"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                className="text-gray-500 hover:text-zordie-700"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:support@zordie.in"
                className="text-gray-500 hover:text-zordie-700"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-zordie-700">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-zordie-700">Contact</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-zordie-700">Careers</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-zordie-700">Blog</Link>
              </li>
            </ul>
          </div>

          {/* For companies */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Companies</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/post-job" className="text-gray-600 hover:text-zordie-700">Post a Job</Link>
              </li>
              <li>
                <Link to="/ai-screening" className="text-gray-600 hover:text-zordie-700">AI Screening</Link>
              </li>
              <li>
                <Link to="/verification" className="text-gray-600 hover:text-zordie-700">Verification</Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-gray-600 hover:text-zordie-700">Enterprise Solutions</Link>
              </li>
            </ul>
          </div>

          {/* For job seekers */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/find-jobs" className="text-gray-600 hover:text-zordie-700">Find Jobs</Link>
              </li>
              <li>
                <Link to="/verify-profile" className="text-gray-600 hover:text-zordie-700">Verify Profile</Link>
              </li>
              <li>
                <Link to="/practice" className="text-gray-600 hover:text-zordie-700">Practice Interviews</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-zordie-700">Resources</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-sm text-gray-600">
              © {currentYear} Zordie. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-zordie-700">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-zordie-700">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-zordie-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
