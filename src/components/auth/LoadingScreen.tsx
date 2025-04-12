
import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-zordie-600 mx-auto mb-4" />
        <h2 className="text-xl font-medium text-zordie-700">Loading...</h2>
        <p className="text-gray-500 mt-2">Please wait while we set things up for you</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
