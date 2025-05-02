import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { CloudUpload, FileType, X, Check, FileCheck, Trash2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

interface UploadedFile {
  name: string;
  size: number;
  type: string;
  status: 'uploading' | 'success' | 'error';
  progress: number;
}

const ResumeUploader = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const fileArray = Array.from(files);

    fileArray.forEach(file => {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "File size must be less than 5MB.",
          variant: "destructive",
        });
        return;
      }

      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "File type must be PDF, DOC, or DOCX.",
          variant: "destructive",
        });
        return;
      }

      const newFile: UploadedFile = {
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'uploading',
        progress: 0,
      };

      setUploadedFiles(prevFiles => [...prevFiles, newFile]);
      uploadFile(file, newFile);
    });
  };

  const uploadFile = (file: File, uploadedFile: UploadedFile) => {
    setIsUploading(true);
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      setUploadedFiles(prevFiles =>
        prevFiles.map(f =>
          f.name === uploadedFile.name ? { ...f, progress: progress } : f
        )
      );

      if (progress >= 100) {
        clearInterval(interval);
        setUploadedFiles(prevFiles =>
          prevFiles.map(f =>
            f.name === uploadedFile.name ? { ...f, status: 'success', progress: 100 } : f
          )
        );
        setIsUploading(false);
        toast({
          title: "Upload complete",
          description: `${file.name} has been uploaded successfully.`,
        });
      }
    }, 200);
  };

  const handleRemoveFile = (fileName: string) => {
    setUploadedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
  };

  const getFileTypeIcon = (fileType: string) => {
    if (fileType === 'application/pdf') {
      return <FileType className="h-4 w-4 mr-2 text-red-500" />;
    } else if (fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      return <FileType className="h-4 w-4 mr-2 text-blue-500" />;
    } else {
      return <FileType className="h-4 w-4 mr-2 text-gray-500" />;
    }
  };

  const getTotalUploadedSize = () => {
    const totalSize = uploadedFiles.reduce((acc, file) => acc + file.size, 0);
    return (totalSize / (1024 * 1024)).toFixed(2); // Convert to MB
  };

  return (
    <Card className="border-gray-200 shadow-sm">
      <CardContent className="p-6">
        <div className="mb-4">
          <label htmlFor="resume-upload" className="block text-sm font-medium text-gray-700">
            Upload Resumes
          </label>
          <p className="text-sm text-gray-500 mt-1">
            Supported formats: PDF, DOC, DOCX (Max. 5MB)
          </p>
        </div>

        <input
          type="file"
          id="resume-upload"
          className="hidden"
          multiple
          onChange={handleFileSelect}
        />

        <label htmlFor="resume-upload">
          <Button asChild variant="outline" disabled={isUploading}>
            <span className="flex items-center">
              <CloudUpload className="h-4 w-4 mr-2" />
              <span>Choose Files</span>
            </span>
          </Button>
        </label>

        {uploadedFiles.length > 0 && (
          <div className="mt-6">
            <Separator />
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Uploaded Files</h4>
              <ul className="space-y-3">
                {uploadedFiles.map((file) => (
                  <li key={file.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      {getFileTypeIcon(file.type)}
                      <span>{file.name}</span>
                      {file.status === 'success' && <Check className="h-4 w-4 ml-1 text-green-500" />}
                    </div>
                    <div className="flex items-center">
                      {file.status === 'uploading' && (
                        <Progress value={file.progress} className="w-24 mr-2" />
                      )}
                      <Button variant="ghost" size="icon" onClick={() => handleRemoveFile(file.name)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Total uploaded size: {getTotalUploadedSize()} MB
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResumeUploader;
