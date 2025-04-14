
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import Layout from '@/components/layout/Layout';
import ResumeUploader from '@/components/resume/ResumeUploader';
import LoadingScreen from '@/components/auth/LoadingScreen';

const ResumeManager = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);
  
  if (isLoading) {
    return <LoadingScreen />;
  }
  
  return (
    <Layout>
      <div className="container max-w-4xl py-12">
        <h1 className="text-3xl font-bold mb-8">Resume Management</h1>
        <p className="text-gray-600 mb-8">
          Upload and manage your resumes to apply for jobs faster. 
          We support PDF, DOC, and DOCX formats with a maximum file size of 5MB.
        </p>
        
        <ResumeUploader />
      </div>
    </Layout>
  );
};

export default ResumeManager;
