import React from 'react';
import CardComponent, { CardComponentProps } from './card-component';
import { Database, LucideSmilePlus, Monitor, Settings2, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';
import { PersonIcon } from '@radix-ui/react-icons';

const cardData: CardComponentProps[] = [
  {
    title: 'Step 1: Customize Your Data Modules',
    points: [
      {
        subtitle: 'Tailored Data Structures',
        description: [
          {
            description:
              'Use our no-code builder to create data modules that align perfectly with your business processes—be it leads, sales orders, invoices, inventory, or any custom data type.',
          },
        ],
        icon: <Database />,
      },
      {
        subtitle: 'Intuitive Interface',
        description: [
          {
            description:
              'Simply drag and drop fields to build your modules without any coding expertise.',
          },
        ],
        icon: <Monitor />,
      },
    ],
    image: '/c1.jpg', // Replace with appropriate image path
    color: 'bg-gradient-to-br from-blue-200 to-blue-600',
    isImageLeft: false,
  },
  {
    title: 'Step 2: Design Automated Workflows',
    points: [
      {
        subtitle: 'Streamline Operations',
        description: [
          {
            description:
              'Set up automated workflows to handle repetitive tasks like data updates, email notifications, and conditional actions.',
          },
        ],
        icon: <Database />,
      },
      {
        subtitle: 'Efficiency and Consistency',
        description: [
          {
            description:
              'Ensure tasks are executed accurately and timely, enhancing productivity and reducing errors.',
          },
        ],
        icon: <Zap />,
      },
    ],
    image: '/c2.jpg', // Replace with appropriate image path
    color: 'bg-gradient-to-r from-green-500 via-green-300 to-green-200',
    isImageLeft: true,
  },
  {
    title: 'Step 3: Deploy AI Agent Workers',
    points: [
      {
        subtitle: 'Empower Customer Engagement',
        description: [
          {
            description:
              'Train AI agents using our drag-and-drop tools to interact with customers across your chosen channels—WhatsApp, Facebook, Instagram, and live chat.',
          },
        ],
        icon: <Sparkles />,
      },
      {
        subtitle: 'Natural Conversations',
        description: [
          {
            description:
              'Deploy AI agents that engage customers in human-like interactions, collecting necessary information seamlessly.',
          },
        ],
        icon: <LucideSmilePlus />,
      },
    ],
    image: '/c3.jpg', // Replace with appropriate image path
    color: 'bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-200',
    isImageLeft: false,
  },
  {
    title: 'Step 4: Enhance Human Interaction',
    points: [
      {
        subtitle: 'Seamless Handoffs',
        description: [
          {
            description:
              'When necessary, AI agents can transfer conversations to human representatives, providing them with all the collected information for a smooth transition.',
          },
        ],
        icon: <PersonIcon />,
      },
      {
        subtitle: 'Focus on Complex Issues',
        description: [
          {
            description:
              'Allow your team to concentrate on more critical tasks, as routine inquiries are efficiently handled by AI agents.',
          },
        ],
        icon: <Settings2 />,
      },
    ],
    image: '/c3.jpg', // Replace with appropriate image path
    color: 'bg-gradient-to-r from-red-300 via-red-100 to-red-50',
    isImageLeft: true,
  },
];

function HowItWorks() {
  return (
    <section className="w-screen flex flex-col items-center justify-center">
      <h1>How It Works ?</h1>
      <div>
        {cardData.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
