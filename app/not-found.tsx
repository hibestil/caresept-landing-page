/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Home, RefreshCw } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-4">
      <div className="text-center space-y-6 max-w-lg">
        <div className="relative">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-4xl font-bold text-gray-800">Page Lost in Space</div>
          </div>
        </div>

        <p className="text-gray-600 text-lg">
          Houston, we have a problem! The page you&apos;re looking for has floated away into the
          digital void.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Mission Control
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
