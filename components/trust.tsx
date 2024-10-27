'use client';

import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content:
      "Caresept's AI agents have revolutionized our customer service. Clients receive instant, personalized responses 24/7, significantly reducing our team's manual workload.",
    featured: true,
  },
  {
    id: 2,
    name: 'Mike Peters',
    role: 'Product Manager',
    content:
      "The no-code data module builder allowed us to tailor the system to our exact needs without any technical expertise. It's been a game-changer for our operations.",
    featured: false,
  },
  {
    id: 3,
    name: 'Lisa Chen',
    role: 'Developer',
    content:
      'ntegrating all our communication channels into one platform has streamlined our customer interactions. Managing messages from WhatsApp, Facebook, and Instagram is now seamless.',
    featured: false,
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Marketing Director',
    content:
      "With Caresept's AI Agent Workers, we've automated repetitive tasks, freeing up our team to focus on strategic initiatives. The efficiency gains are remarkable",
    featured: false,
  },
  {
    id: 5,
    name: 'Emily Brown',
    role: 'Startup Founder',
    content:
      'The granular access control features give us peace of mind. We can securely share data with our employees, knowing that sensitive information is protected.',
    rating: 5,
    featured: false,
  },
  {
    id: 6,
    name: 'Emily Brown',
    role: 'Startup Founder',
    content:
      'The granular access control features give us peace of mind. We can securely share data with our employees, knowing that sensitive information is protected.',
    rating: 5,
    featured: false,
  },
  {
    id: 7,
    name: 'Emily Brown',
    role: 'Startup Founder',
    content:
      'The granular access control features give us peace of mind. We can securely share data with our employees, knowing that sensitive information is protected.',
    rating: 5,
    featured: false,
  },
  {
    id: 8,
    name: 'Robert Martinez',
    role: 'Enterprise Client',
    content: 'Our customer engagement has improved dramatically since adopting Caresept.',
    featured: true,
  },
];

const SocialProofGrid = () => {
  return (
    <div className="w-screen mx-auto px-10 text-sm mt-12 ">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-8 primary-text">
          What Our Customers Say About Us
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
        {testimonials.map((testimonial, index) => {
          // Calculate if this card should be featured (taller)
          const isFeatured = index === 0 || index === 7;

          return (
            <Card
              key={testimonial.id}
              className={`
                flex flex-col
                ${isFeatured ? 'row-span-2 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 text-white' : ''}
                transition-transform duration-300 hover:scale-105
              `}
            >
              <CardHeader className="flex-none">
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className={cn('text-sm text-gray-500', isFeatured ? 'text-white/70' : '')}>
                  {testimonial.role}
                </p>
              </CardHeader>

              <CardContent className="flex-grow">
                <p
                  className={`
                  text-gray-700
                  ${isFeatured ? 'text-base text-white/90' : 'text-sm'}
                `}
                >
                  &apos;{testimonial.content}&apos;
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SocialProofGrid;
