
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, MapPin, Clock, ChevronRight } from 'lucide-react';

const Careers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zordie-50 to-zordie-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zordie-800">
              Join Our Mission to Transform Hiring
            </h1>
            <p className="text-lg text-zordie-600 mb-8">
              Be part of a team building the future of AI-powered recruitment. We're looking for passionate individuals to help us change how companies hire talent.
            </p>
            <Button className="btn-gradient text-lg py-6 px-8">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Culture & Values"
            subtitle="What makes Zordie a great place to work"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 px-6 pb-8">
                <div className="w-14 h-14 rounded-full bg-zordie-100 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-zordie-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19.128C15.853 19.3757 16.7368 19.5009 17.625 19.5C19.0534 19.5 20.5106 19.0216 21.75 18.1185M21.75 18.1185C21.1216 15.0974 19.1716 12 15.375 12C13.5813 12 12.0609 12.6751 11 13.7185M21.75 18.1185C21.75 18.1185 24 16.5 24 12C24 4.5 18 1.5 12 1.5C6 1.5 0 4.5 0 12C0 19.5 6 22.5 12 22.5C12.5171 22.5 13.0255 22.4747 13.5225 22.4271M11 13.7185C10.4477 14.2285 10.0366 14.8773 9.82162 15.5993C9.5317 16.571 9.5317 17.6116 9.82162 18.5833C10.0366 19.3053 10.4477 19.9541 11 20.4641M11 13.7185C11 13.7185 8.25 11.25 9 7.5C11.25 9.75 14.25 9.75 15.375 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
                <p className="text-gray-600">
                  We embrace new ideas and technologies to create solutions that transform the recruitment industry.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 px-6 pb-8">
                <div className="w-14 h-14 rounded-full bg-zordie-100 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-zordie-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59001 18.3099 9.35 16.9399 9.59" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 14.44C5.63 14.67 4.12 14.43 3.06 13.72C1.65 12.78 1.65 11.24 3.06 10.3C4.13 9.59001 5.66 9.35 7.03 9.59" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.47 11.91 9.47C13.34 9.47 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Teamwork</h3>
                <p className="text-gray-600">
                  We collaborate across teams, valuing diverse perspectives to achieve our collective goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 px-6 pb-8">
                <div className="w-14 h-14 rounded-full bg-zordie-100 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-zordie-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12.2H15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 16.2H12.38" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">User-Centered</h3>
                <p className="text-gray-600">
                  We put our users' needs at the core of every decision, creating intuitive solutions that solve real problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Open Positions"
            subtitle="Join our team and make an impact"
            align="center"
          />
          
          <div className="mt-12 space-y-6 max-w-4xl mx-auto">
            <JobCard 
              title="Senior Frontend Developer"
              department="Engineering"
              location="Remote (US/Europe)"
              type="Full-time"
            />
            
            <JobCard 
              title="AI/ML Engineer"
              department="AI Research"
              location="New York, NY"
              type="Full-time"
            />
            
            <JobCard 
              title="Product Manager"
              department="Product"
              location="Remote (US/Europe)"
              type="Full-time"
            />
            
            <JobCard 
              title="UX/UI Designer"
              department="Design"
              location="San Francisco, CA"
              type="Full-time"
            />
            
            <JobCard 
              title="Customer Success Manager"
              department="Operations"
              location="Remote (Worldwide)"
              type="Full-time"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Benefits & Perks"
            subtitle="What we offer to our team members"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-zordie-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-zordie-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Competitive Salary</h3>
              <p className="text-gray-600">
                We offer competitive compensation packages to attract and retain top talent.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-zordie-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-zordie-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.5 9.08997H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.6947 13.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.6947 16.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.9955 13.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.9955 16.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.29431 13.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible PTO</h3>
              <p className="text-gray-600">
                We trust our team to manage their time and take vacation when needed.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-zordie-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-zordie-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.5 19.5L16.9 16.9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.5 22H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Remote Work</h3>
              <p className="text-gray-600">
                Work from anywhere with flexible hours and remote-first environment.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-zordie-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-zordie-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 2H15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.9 18.5V17.8C14.9 16.11 16.11 14.9 17.8 14.9H18.5C20.19 14.9 21.4 16.11 21.4 17.8V18.5C21.4 20.19 20.19 21.4 18.5 21.4H17.8C16.11 21.4 14.9 20.19 14.9 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22.8995 16.8999L19.8995 19.8999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.8995 16.8999L22.8995 19.8999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Health Benefits</h3>
              <p className="text-gray-600">
                Comprehensive health, dental, and vision coverage for you and your family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zordie-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-lg text-zordie-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about transforming the recruitment industry with AI.
          </p>
          <Button className="bg-white text-zordie-700 hover:bg-zordie-50 text-lg py-6 px-8">
            View All Open Positions
          </Button>
        </div>
      </section>
    </Layout>
  );
};

interface JobCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
}

const JobCard = ({ title, department, location, type }: JobCardProps) => {
  return (
    <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <div className="text-zordie-600 mb-4">{department}</div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-gray-500">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{type}</span>
              </div>
            </div>
          </div>
          <Button className="mt-4 md:mt-0 flex items-center">
            View Job
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Careers;
