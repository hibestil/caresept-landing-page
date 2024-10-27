import React from 'react';
import CardComponent, { CardComponentProps } from './card-component';
import { Database, Monitor, Settings2, Zap } from 'lucide-react';
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
    image: '/c5.jpg', // Replace with appropriate image path
    color: '',
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
    image: '/c8.jpg', // Replace with appropriate image path
    color: '',
    isImageLeft: true,
  },
  {
    title: 'Step 3: Enhance Human Interaction',
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
    color: '',
    isImageLeft: false,
  },
];

function HowItWorks() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-full bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 pt-10">
        <h1 className="text-4xl lg:text-6xl font-bold w-full flex items-center justify-center bg-gradient-to-r from-white/90 via-slate-50/90 to-slate-200/90 text-transparent bg-clip-text">
          How It Works ?
        </h1>
        {cardData.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
