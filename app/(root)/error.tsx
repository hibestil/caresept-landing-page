'use client';

import { AlertCircle, Home, RefreshCw } from "lucide-react";
import React from "react";

/* eslint-disable react/no-unescaped-entities */
const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-4">
      <div className="text-center space-y-6 max-w-lg">
        <div className="inline-block p-4 bg-red-100 rounded-full">
          <AlertCircle className="w-12 h-12 text-red-600" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-800">Oops! Something went wrong</h1>
          <p className="text-gray-600">
            Don't worry, it's not you - it's us! Our hamsters probably need a coffee break.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-500 font-mono">
            {error.message || 'An unexpected error occurred'}
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
