
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, Building, Users, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PreAccessForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    companySize: '',
    industry: '',
    currentTools: '',
    useCase: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Pre-access form submitted:', formData);
    
    setIsSubmitted(true);
    toast({
      title: "Welcome to the Pre-Access Program!",
      description: "We'll be in touch soon with your early access invitation.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Zordie Pre-Access!</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Thank you for joining our exclusive pre-access program. We'll be in touch soon with your early access invitation and special pricing details.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
          <p className="text-sm text-blue-700 font-medium">What happens next?</p>
          <ul className="text-sm text-blue-600 mt-2 space-y-1">
            <li>• Personal onboarding session</li>
            <li>• Early access to all ARC agents</li>
            <li>• Special pre-launch pricing</li>
            <li>• Direct feedback channel to our team</li>
          </ul>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
          <Zap className="w-4 h-4 mr-1" />
          Pre-Access Program
        </Badge>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Join the Future of AI Recruitment
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get exclusive early access to Zordie's revolutionary ARC system and be among the first to transform your hiring process with AI-powered recruitment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="text-center">
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <CardTitle className="text-lg">Early Access</CardTitle>
            <CardDescription>Be first to use our platform</CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardHeader className="text-center">
            <Building className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <CardTitle className="text-lg">Special Pricing</CardTitle>
            <CardDescription>Exclusive pre-launch rates</CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader className="text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <CardTitle className="text-lg">Direct Support</CardTitle>
            <CardDescription>Personal onboarding & feedback</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pre-Access Application</CardTitle>
          <CardDescription>
            Tell us about your hiring needs and we'll set you up with early access to Zordie.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title *</Label>
                <Input
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companySize">Company Size *</Label>
                <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-1000">201-1000 employees</SelectItem>
                    <SelectItem value="1000+">1000+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentTools">Current Recruitment Tools</Label>
              <Input
                id="currentTools"
                placeholder="e.g., LinkedIn Recruiter, Workday, Greenhouse..."
                value={formData.currentTools}
                onChange={(e) => handleInputChange('currentTools', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="useCase">What's your biggest hiring challenge?</Label>
              <Textarea
                id="useCase"
                placeholder="Tell us about your current hiring process and what you'd like to improve..."
                value={formData.useCase}
                onChange={(e) => handleInputChange('useCase', e.target.value)}
                rows={4}
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Join Pre-Access Program
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreAccessForm;
