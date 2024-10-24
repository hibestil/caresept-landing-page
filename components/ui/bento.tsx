import { CalendarIcon, FileTextIcon } from '@radix-ui/react-icons';
import { BellIcon, Share2Icon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { AnimatedListDemo } from '../example/animated-list-demo';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import Marquee from './marquee';
import { AnimatedBeamMultipleOutput } from '../animated-beam';
import Image from 'next/image';
import ShineBorder from './shine-border';

const files = [
  {
    name: 'bitcoin.pdf',
    body: 'Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.',
  },
  {
    name: 'finances.xlsx',
    body: 'A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.',
  },
  {
    name: 'logo.svg',
    body: 'Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.',
  },
  {
    name: 'keys.gpg',
    body: 'GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.',
  },
  {
    name: 'seed.txt',
    body: 'A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.',
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: 'Connect with Customers from Anywhere',
    description: 'We automatically save your files as you type.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <Image
        src="/c4.jpg"
        alt="Manage all your Modules"
        width={400}
        height={400}
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
    ),
  },
  {
    Icon: BellIcon,
    name: 'Instant Notifications',
    description: 'Get notified when something happens.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: <></>,
  },
  {
    Icon: Share2Icon,
    name: 'Seamless Integrations with 10+ Apps',
    description: 'Supports 100+ integrations and counting.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <AnimatedBeamMultipleOutput className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: 'AI Event Scheduling',
    description: 'Advanced AI scheduling for your events.',
    className: 'col-span-3 lg:col-span-1',
    href: '#',
    cta: 'Learn more',
    background: (
      <Image
        src="/c2.jpg"
        alt="AI Event Scheduling"
        width={400}
        height={400}
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02] "
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

export default function BentoFeatures() {
  return (
    <section className="relative w-screen flex flex-col items-center justify-center gap-8 px-4 mt-5 lg:mt-10">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Main center radial gradient for depth */}
        <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-purple-600 via-blue-600 to-pink-500 rounded-full blur-4xl opacity-50 animate-slow-pulse"></div>

        {/* Floating orbs with smooth movements */}
        <div className="absolute w-[320px] h-[320px] bg-gradient-radial from-blue-300 to-purple-400 rounded-full blur-3xl opacity-40 animate-floating-orb1"></div>
        <div className="absolute w-[270px] h-[270px] bg-gradient-radial from-blue-300 to-pink-300 rounded-full blur-3xl opacity-40 animate-floating-orb2"></div>
        <div className="absolute w-[370px] h-[370px] bg-gradient-radial from-pink-300 to-rose-300 rounded-full blur-3xl opacity-40 animate-floating-orb3"></div>
      </div>

      {/* Heading with subtle gradient text */}
      <ShineBorder className="shine w-full lg:px-12" color={'blue'}>
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 lg:my-5">
          All-in-one platform for your business, customer, and team.
        </h1>
      </ShineBorder>

      <div className="w-full px-5 lg:px-32">
        <BentoDemo />
      </div>
    </section>
  );
}
