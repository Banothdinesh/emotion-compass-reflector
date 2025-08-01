import React from 'react';

export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
      <span>Analyzing...</span>
    </div>
  );
};