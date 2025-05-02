
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, FileText, MapPin, Briefcase, Calendar, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const VerifyProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'verified' | 'rejected'>('pending');

  // Demo profile data (in a real app, this would come from the database)
  const profileData = {
    name: "John Doe",
    email: "john.doe@example.com",
    location: "San Francisco, CA",
    title: "Senior Frontend Developer",
    experience: "7+ years",
    skills: ["React", "TypeScript", "UI/UX", "Node.js", "GraphQL"],
    education: "Bachelor of Science in Computer Science",
    resumeUploaded: true,
    joinedDate: "May 2025",
  };

  const handleVerifyClick = () => {
    setVerificationStatus('verified');
    toast({
      title: "Profile verified",
      description: "Your profile has been successfully verified."
    });
  };

  const handleRejectClick = () => {
    setVerificationStatus('rejected');
    toast({
      title: "Verification rejected",
      description: "Your profile verification has been rejected. Please update your information and try again."
    });
  };

  const handleCompleteProfile = () => {
    navigate('/resumes');
  };

  const handleReturnToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <Layout>
      <div className="container max-w-4xl py-12">
        <SectionHeading
          title="Profile Verification"
          subtitle="Complete your profile verification to access more features"
          align="center"
        />
        
        <Card className="mt-8">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/42.jpg" />
                  <AvatarFallback><User className="h-6 w-6" /></AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{profileData.name}</CardTitle>
                  <CardDescription>{profileData.email}</CardDescription>
                </div>
              </div>
              {verificationStatus === 'verified' ? (
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  <CheckCircle className="h-4 w-4 mr-1" /> Verified
                </Badge>
              ) : verificationStatus === 'rejected' ? (
                <Badge variant="destructive">Rejected</Badge>
              ) : (
                <Badge variant="outline">Pending Verification</Badge>
              )}
            </div>
          </CardHeader>
          
          <Separator />
          
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-lg mb-3">Professional Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2 text-zordie-600" />
                    <span className="text-gray-700">{profileData.title}</span>
                  </li>
                  <li className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-zordie-600" />
                    <span className="text-gray-700">{profileData.experience} experience</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-zordie-600" />
                    <span className="text-gray-700">{profileData.location}</span>
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-zordie-600" />
                    <span className="text-gray-700">Resume: {profileData.resumeUploaded ? 'Uploaded' : 'Not uploaded'}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-3">Skills & Education</h3>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {profileData.skills.map((skill, index) => (
                      <Badge key={index} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700">{profileData.education}</p>
                  <p className="text-sm text-gray-500 mt-1">Joined: {profileData.joinedDate}</p>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Verification Status</h3>
              
              {verificationStatus === 'verified' ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <p className="text-green-800 font-medium">Your profile has been verified!</p>
                  </div>
                  <p className="text-green-700 mt-1 text-sm">You now have full access to all job application features.</p>
                </div>
              ) : verificationStatus === 'rejected' ? (
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <p className="text-red-800 font-medium">Your profile verification was rejected.</p>
                  <p className="text-red-700 mt-1 text-sm">Please update your information and try again.</p>
                </div>
              ) : (
                <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                  <p className="text-amber-800 font-medium">Your profile is pending verification.</p>
                  <p className="text-amber-700 mt-1 text-sm">This usually takes 1-2 business days.</p>
                </div>
              )}
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
              {verificationStatus === 'pending' && (
                <>
                  {/* Demo buttons for showcasing verification states */}
                  <Button variant="outline" onClick={handleRejectClick}>
                    Demo: Reject
                  </Button>
                  <Button className="bg-zordie-600 hover:bg-zordie-700" onClick={handleVerifyClick}>
                    Demo: Verify
                  </Button>
                </>
              )}
              {!profileData.resumeUploaded && (
                <Button onClick={handleCompleteProfile}>
                  <FileText className="h-4 w-4 mr-2" />
                  Upload Resume
                </Button>
              )}
              <Button variant={verificationStatus === 'verified' ? 'default' : 'outline'} onClick={handleReturnToDashboard}>
                Return to Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default VerifyProfile;
