import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Shield, Users, BarChart, CheckCircle, Zap, Lock, Globe, Cpu, Layers } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
const EnterpriseSolutions = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zordie-700 to-zordie-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Building className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise Recruitment Solutions
            </h1>
            <p className="text-lg text-zordie-100 mb-8">
              Scalable AI-powered hiring solutions designed for large organizations with complex recruitment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-zordie-700 hover:bg-zordie-50 text-lg py-6 px-8">
                Request Demo
              </Button>
              <Button variant="outline" className="border-white/30 text-lg py-6 px-8 bg-zordie-950 hover:bg-zordie-800">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-zordie-700 mb-2">500+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zordie-700 mb-2">85%</div>
              <div className="text-gray-600">Reduction in Time-to-Hire</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zordie-700 mb-2">3.2M+</div>
              <div className="text-gray-600">Candidates Screened</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zordie-700 mb-2">98%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Enterprise-Grade Features" subtitle="Built for scale and security" align="center" />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-zordie-100 flex items-center justify-center mb-6">
                  <Cpu className="h-6 w-6 text-zordie-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced AI Screening</h3>
                <p className="text-gray-600">
                  Our enterprise-grade AI screening engine can process thousands of applications simultaneously, evaluating candidates based on customizable criteria specific to your organization.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-zordie-100 flex items-center justify-center mb-6">
                  <BarChart className="h-6 w-6 text-zordie-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive Analytics</h3>
                <p className="text-gray-600">
                  Gain deep insights into your recruitment funnel with advanced analytics dashboards, custom reports, and predictive hiring metrics.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-zordie-100 flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-zordie-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Talent Sourcing</h3>
                <p className="text-gray-600">
                  Access a worldwide talent pool with multi-language support, localized job distribution, and regional compliance features.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-zordie-100 flex items-center justify-center mb-6">
                  <Layers className="h-6 w-6 text-zordie-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Integration</h3>
                <p className="text-gray-600">
                  Seamlessly integrate with your existing HR systems, HRIS platforms, and other enterprise tools through our robust API and pre-built connectors.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-zordie-100 flex items-center justify-center mb-6">
                  <Lock className="h-6 w-6 text-zordie-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise-Grade Security</h3>
                <p className="text-gray-600">
                  Industry-leading security protocols including SOC 2 compliance, GDPR readiness, data encryption, and advanced access controls.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-zordie-100 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-zordie-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dedicated Support Team</h3>
                <p className="text-gray-600">
                  Enterprise clients receive a dedicated customer success manager, priority support, and regular strategic consultations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Tailored Enterprise Solutions" subtitle="Customized to your specific needs" align="left" />
              <p className="text-gray-600 mb-6">
                We understand that enterprise organizations have unique recruitment challenges. Our solutions are fully customizable to address your specific needs:
              </p>
              <ul className="space-y-4 mb-8">
                <EnterpriseListItem text="Custom AI models trained on your historical hiring data" />
                <EnterpriseListItem text="Specialized workflows for different departments and hiring processes" />
                <EnterpriseListItem text="Branded candidate experience aligned with your company identity" />
                <EnterpriseListItem text="Custom reporting and analytics dashboards" />
                <EnterpriseListItem text="Tailored compliance features for your industry and regions" />
              </ul>
              <Button className="btn-gradient">Learn More About Customization</Button>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Enterprise Solutions" className="rounded-lg shadow-lg" />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">SOC 2 Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Enterprise Pricing" subtitle="Flexible solutions for large organizations" align="center" />
          
          <Card className="max-w-4xl mx-auto mt-12 border-gray-200">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Custom Enterprise Plans</h3>
                <p className="text-gray-600">
                  Tailored pricing based on your organization's specific needs and scale
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">All Enterprise Plans Include:</h4>
                  <ul className="space-y-3">
                    <EnterpriseListItem text="Unlimited job postings" />
                    <EnterpriseListItem text="Advanced AI screening tools" />
                    <EnterpriseListItem text="Custom workflow automation" />
                    <EnterpriseListItem text="Enterprise-grade security" />
                    <EnterpriseListItem text="Dedicated account manager" />
                    <EnterpriseListItem text="Priority technical support" />
                    <EnterpriseListItem text="Custom integration options" />
                    <EnterpriseListItem text="Regular platform updates" />
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Optional Add-ons:</h4>
                  <ul className="space-y-3">
                    <EnterpriseListItem text="Custom AI model training" />
                    <EnterpriseListItem text="Advanced analytics package" />
                    <EnterpriseListItem text="Multi-language support" />
                    <EnterpriseListItem text="White-labeled candidate portal" />
                    <EnterpriseListItem text="On-site implementation support" />
                    <EnterpriseListItem text="Strategy consulting sessions" />
                    <EnterpriseListItem text="Enhanced compliance features" />
                    <EnterpriseListItem text="Executive reporting package" />
                  </ul>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Contact our sales team to get a customized quote based on your organization's size and needs
                </p>
                <Button className="btn-gradient text-lg py-6 px-8">
                  Request Custom Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-zordie-50">
        <div className="container mx-auto px-4">
          <SectionHeading title="Success Stories" subtitle="How enterprises succeed with Zordie" align="center" />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Global Tech Corp" className="w-full h-40 object-cover rounded-lg mb-6" />
                <div className="text-sm text-zordie-600 font-medium mb-2">CASE STUDY</div>
                <h3 className="text-xl font-bold mb-2">Global Tech Corp</h3>
                <p className="text-gray-600 mb-4">Reduced time-to-hire by 73% while improving quality of hires across 24 global offices.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <Zap className="h-4 w-4 mr-1 text-zordie-600" />
                    <span>Tech</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-1 text-zordie-600" />
                    <span>Global</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="FinServe Holdings" className="w-full h-40 object-cover rounded-lg mb-6" />
                <div className="text-sm text-zordie-600 font-medium mb-2">CASE STUDY</div>
                <h3 className="text-xl font-bold mb-2">FinServe Holdings</h3>
                <p className="text-gray-600 mb-4">Implemented AI screening to hire 2,000+ employees in compliance with financial regulations.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <Shield className="h-4 w-4 mr-1 text-zordie-600" />
                    <span>Finance</span>
                  </div>
                  <div className="flex items-center">
                    <Lock className="h-4 w-4 mr-1 text-zordie-600" />
                    <span>Compliance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="HealthCare Network" className="w-full h-40 object-cover rounded-lg mb-6" />
                <div className="text-sm text-zordie-600 font-medium mb-2">CASE STUDY</div>
                <h3 className="text-xl font-bold mb-2">HealthCare Network</h3>
                <p className="text-gray-600 mb-4">Streamlined healthcare professional hiring across 120+ facilities while ensuring credential verification.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <CheckCircle className="h-4 w-4 mr-1 text-zordie-600" />
                    <span>Healthcare</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-zordie-600" />
                    <span>High Volume</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8 py-6">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zordie-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Enterprise Hiring?</h2>
          <p className="text-lg text-zordie-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how Zordie's enterprise solutions can help you meet your organization's recruitment challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-zordie-700 hover:bg-zordie-50 text-lg py-6 px-8">
              Request Demo
            </Button>
            <Button variant="outline" className="border-white/30 hover:bg-white/10 text-lg py-6 px-8">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
const EnterpriseListItem = ({
  text
}: {
  text: string;
}) => {
  return <li className="flex items-start">
      <CheckCircle className="h-5 w-5 text-zordie-600 mr-3 shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>;
};
export default EnterpriseSolutions;