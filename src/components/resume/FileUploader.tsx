
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

interface FileUploaderProps {
  onUpload: (files: File[]) => void;
}

export const FileUploader = ({ onUpload }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length > 0) {
      onUpload(acceptedFiles);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/rtf': ['.rtf']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    maxFiles: 1
  });

  return (
    <div>
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-zordie-600 bg-zordie-50/20' : 'border-gray-300 hover:border-zordie-400'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="h-12 w-12 mx-auto mb-4 text-zordie-600" />
        <p className="font-medium mb-1">
          {isDragActive ? 'Drop the file here' : 'Drag and drop your resume here'}
        </p>
        <p className="text-sm text-gray-500 mb-4">or</p>
        <Button 
          type="button" 
          variant="outline"
          className="mx-auto"
        >
          Browse files
        </Button>
      </div>
    </div>
  );
};
