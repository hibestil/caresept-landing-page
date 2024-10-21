'use client'

import { Book, Timer, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';

const DocsComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here you would typically handle the subscription logic
    setIsSubscribed(true);
    setEmail('');
  };

  const features = [
    {
      title: "Comprehensive API Documentation",
      description: "Detailed guides and references for integrating with our healthcare platform"
    },
    {
      title: "Interactive Examples",
      description: "Live code samples and implementation guides for common use cases"
    },
    {
      title: "Best Practices",
      description: "Security guidelines and optimization techniques for healthcare applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Book className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Documentation Coming Soon
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;re working hard to create comprehensive documentation for Caresept&apos;s healthcare platform.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Timer className="h-4 w-4" />
            <span>Expected launch: Q4 2024</span>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Notification Form */}
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Bell className="h-5 w-5 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold">Get Notified When We Launch</h2>
          </div>
          
          {isSubscribed ? (
            <div className="bg-green-50 text-green-700 p-4 rounded-lg">
              Thanks for subscribing! We&apos;ll notify you when the documentation launches.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit">
                  Notify Me
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                We&apos;ll only notify you when the documentation is ready.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocsComingSoon;