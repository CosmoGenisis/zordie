
import { useState, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, Upload, File, Trash2 } from 'lucide-react';

interface ResumeFile {
  id: string;
  name: string;
  size: number;
  type: string;
  created_at: string;
  url?: string;
}

const ResumeUploader = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [resumes, setResumes] = useState<ResumeFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { user } = useAuth();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load user's resumes on component mount
  useState(() => {
    if (user) {
      loadUserResumes();
    }
  });

  const loadUserResumes = async () => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      // Fetch resumes from the database
      const { data, error } = await supabase
        .from('user_resumes')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      // Get signed URLs for each resume
      const resumesWithUrls = await Promise.all(
        data.map(async (resume) => {
          const { data: urlData } = await supabase
            .storage
            .from('resumes')
            .createSignedUrl(`${user.id}/${resume.file_name}`, 60 * 60); // 1 hour expiry
          
          return {
            ...resume,
            url: urlData?.signedUrl
          };
        })
      );
      
      setResumes(resumesWithUrls);
    } catch (error) {
      console.error('Error loading resumes:', error);
      toast({
        title: 'Error loading resumes',
        description: 'Failed to load your resumes. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    
    // Validate file type (PDF, DOC, DOCX)
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: 'Invalid file type',
        description: 'Please upload a PDF, DOC, or DOCX file.',
        variant: 'destructive',
      });
      return;
    }
    
    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      toast({
        title: 'File too large',
        description: 'Maximum file size is 5MB.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsUploading(true);
    try {
      // 1. Upload file to storage
      const filePath = `${user.id}/${file.name}`;
      const { error: uploadError } = await supabase
        .storage
        .from('resumes')
        .upload(filePath, file, { upsert: true });
      
      if (uploadError) {
        throw uploadError;
      }
      
      // 2. Create record in user_resumes table
      const { data, error: dbError } = await supabase
        .from('user_resumes')
        .insert({
          user_id: user.id,
          file_path: filePath,
          file_name: file.name,
          file_type: file.type,
          file_size: file.size
        })
        .select('*')
        .single();
      
      if (dbError) {
        throw dbError;
      }
      
      // 3. Get signed URL for the file
      const { data: urlData } = await supabase
        .storage
        .from('resumes')
        .createSignedUrl(filePath, 60 * 60); // 1 hour expiry
      
      // 4. Update the resumes list with the new resume
      setResumes(prev => [{
        ...data,
        url: urlData?.signedUrl
      }, ...prev]);
      
      // 5. Show success message
      toast({
        title: 'Resume uploaded',
        description: 'Your resume has been uploaded successfully.'
      });
      
      // 6. Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error: any) {
      console.error('Error uploading resume:', error);
      toast({
        title: 'Upload failed',
        description: error.message || 'Failed to upload resume. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteResume = async (resumeId: string, filePath: string) => {
    if (!user) return;
    
    try {
      // 1. Delete file from storage
      const { error: storageError } = await supabase
        .storage
        .from('resumes')
        .remove([filePath]);
      
      if (storageError) {
        throw storageError;
      }
      
      // 2. Delete record from user_resumes table
      const { error: dbError } = await supabase
        .from('user_resumes')
        .delete()
        .eq('id', resumeId);
      
      if (dbError) {
        throw dbError;
      }
      
      // 3. Update the resumes list
      setResumes(prev => prev.filter(resume => resume.id !== resumeId));
      
      // 4. Show success message
      toast({
        title: 'Resume deleted',
        description: 'Your resume has been deleted successfully.'
      });
    } catch (error: any) {
      console.error('Error deleting resume:', error);
      toast({
        title: 'Delete failed',
        description: error.message || 'Failed to delete resume. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Resume Management</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Upload Button */}
        <div className="flex items-center justify-center w-full">
          <label htmlFor="resume-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-3 text-gray-500" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PDF, DOC, or DOCX (Max 5MB)</p>
            </div>
            <input 
              id="resume-upload" 
              type="file" 
              className="hidden" 
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              disabled={isUploading}
            />
          </label>
        </div>
        
        {isUploading && (
          <div className="flex items-center justify-center p-4">
            <Loader2 className="h-6 w-6 animate-spin mr-2" />
            <span>Uploading resume...</span>
          </div>
        )}
        
        {/* Resumes List */}
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Your Resumes</h3>
          
          {isLoading ? (
            <div className="flex items-center justify-center p-4">
              <Loader2 className="h-6 w-6 animate-spin mr-2" />
              <span>Loading resumes...</span>
            </div>
          ) : resumes.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-6">
              You haven't uploaded any resumes yet.
            </p>
          ) : (
            <div className="space-y-3">
              {resumes.map((resume) => (
                <div 
                  key={resume.id} 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                >
                  <div className="flex items-center">
                    <File className="h-5 w-5 mr-3 text-blue-500" />
                    <div>
                      <p className="font-medium text-sm">{resume.name}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(resume.created_at).toLocaleDateString()} • {(resume.size / 1024 / 1024).toFixed(2)}MB
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {resume.url && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                      >
                        <a href={resume.url} target="_blank" rel="noopener noreferrer">View</a>
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDeleteResume(resume.id, resume.file_path)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeUploader;
