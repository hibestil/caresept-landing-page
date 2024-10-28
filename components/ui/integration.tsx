'use client';

import Image from 'next/image';
import { Card, CardContent } from './card';
import OrbitingCircles from './orbiting-circles';
import SalesForce from '@/public/icons/salesforce.svg';
import Outlook from '@/public/icons/outlook.svg';
import Zoho from '@/public/icons/zoho.svg';
import Teams from '@/public/icons/teams.svg';
import Paypal from '@/public/icons/paypal.svg';
import Twilio from '@/public/icons/twilio.svg';
import Gmail from '@/public/icons/gmail.svg';
import Shopify from '@/public/icons/shopify.svg';
import Slack from '@/public/icons/slack.svg';
import Caresept from '@/public/caresept-e.svg';
import Drive from '@/public/icons/drive.svg';
import Github from '@/public/icons/git.svg';
import Notion from '@/public/icons/notion.svg';
import Whatsapp from '@/public/icons/wa.svg';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from './badge';
import { LinkIcon, Settings2, Sparkles, Zap } from 'lucide-react';

export default function Integration() {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: 'Lightning-fast setup' },
    { icon: <LinkIcon className="w-5 h-5" />, text: 'Seamless integration' },
    { icon: <Settings2 className="w-5 h-5" />, text: 'Easy configuration' },
    { icon: <Sparkles className="w-5 h-5" />, text: 'Smart automation' },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-background to-background/80 py-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between px-4">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <Badge variant="secondary" className="text-sm mb-4 hover:bg-primary/20 transition-colors">
            Integration Made Simple
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Integrate with your favorite tools in seconds
          </h1>

          <p className="text-lg text-muted-foreground">
            Connect and automate your workflow with our seamless integration system.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    {feature.icon}
                    <p className="font-medium">{feature.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Orbit Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 h-[550px] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <Orbit />
        </motion.div>
      </div>
    </section>
  );
}

function Orbit() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden h-full z-30">
      <Card className="flex items-center justify-center p-4 rounded-full shadow-primary">
        <Image src={Caresept} alt="Carespt Beam" className="w-20" />
      </Card>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Image src={Whatsapp} alt="Whatsapp" className="masked-icon" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Image src={Notion} alt="Notion" className="masked-icon" />
      </OrbitingCircles>
      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={170}
        duration={20}
        reverse
      >
        <Image src={Drive} alt="Drive" className="masked-icon" />
      </OrbitingCircles>
      {/* <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={170}
        duration={20}
        delay={20}
        reverse
      >
        <Image src={Github} alt="Github" className="masked-icon" />
      </OrbitingCircles> */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={170}
        duration={20}
        delay={20}
        reverse
      >
        <Image src={Github} alt="Github" className="masked-icon" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={170}
        duration={20}
        delay={25}
        reverse
      >
        <Image src={SalesForce} alt="SalesForce" className="masked-icon" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={170}
        duration={20}
        delay={35}
        reverse
      >
        <Image src={Outlook} alt="Outlook" className="masked-icon" />
      </OrbitingCircles>

      {/* Outer Circles */}

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={250}
        duration={20}
        delay={4}
      >
        <Image src={Teams} alt="Teams" className="masked-icon" />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={250}
        duration={20}
        delay={6}
      >
        <Image src={Twilio} alt="Twilio" className="masked-icon" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={250}
        duration={20}
        delay={8}
      >
        <Image src={Zoho} alt="Teams" className="masked-icon" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={250}
        duration={20}
        delay={10}
      >
        <Image src={Paypal} alt="Paypal" className="masked-icon" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={250}
        duration={20}
        delay={12}
      >
        <Image src={Gmail} alt="Gmail" className="masked-icon" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={250}
        duration={20}
        delay={22}
      >
        <Image src={Shopify} alt="Shopify" className="masked-icon" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={250}
        duration={20}
        delay={19}
      >
        <Image src={Slack} alt="Slack" className="masked-icon" />
      </OrbitingCircles>
    </div>
  );
}
