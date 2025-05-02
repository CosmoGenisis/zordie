
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileUploader } from './FileUploader';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const ResumeUploader = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();
  
  // Since auth has been removed, use demo data
  const userEmail = "demo@example.com";

  const handleUpload = async (files: File[]) => {
    if (files.length === 0) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate file upload with progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          // Simulate processing delay at 100%
          setTimeout(() => {
            toast({
              title: "Resume uploaded successfully",
              description: "Your resume is ready for use in job applications.",
            });
            setIsUploading(false);
          }, 500);
        }
      }, 300);
    } catch (error) {
      console.error('Error uploading resume:', error);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your resume. Please try again.",
        variant: "destructive",
      });
      setIsUploading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        {isUploading ? (
          <div className="text-center py-10">
            <Loader2 className="animate-spin h-10 w-10 text-zordie-600 mx-auto mb-4" />
            <p className="font-medium mb-2">Uploading resume...</p>
            <p className="text-sm text-gray-500 mb-4">{uploadProgress}% complete</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-zordie-600 h-2.5 rounded-full" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <FileUploader onUpload={handleUpload} />
        )}
        
        <div className="mt-6 text-sm text-gray-500">
          <p className="mb-2">Supported file formats: PDF, DOCX, RTF</p>
          <p className="mb-2">Maximum file size: 5MB</p>
          <p>Uploading as: {userEmail}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeUploader;
