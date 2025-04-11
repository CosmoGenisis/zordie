
import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Loader2 className="h-12 w-12 text-zordie-600 animate-spin" />
      <p className="mt-4 text-lg text-zordie-600">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
