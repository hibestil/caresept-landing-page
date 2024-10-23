'use client';

// import React, { useEffect, useRef } from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import { Button } from './ui/button';
// import { ArrowRight, Sparkles } from 'lucide-react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

// interface AnimatedTextProps {
//   children: React.ReactNode;
//   delay?: number;
// }

// const AnimatedText: React.FC<AnimatedTextProps> = ({ children, delay = 0 }) => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref);

//   useEffect(() => {
//     if (isInView) {
//       controls.start('visible');
//     }
//   }, [controls, isInView]);

//   return (
//     <motion.span
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0 },
//       }}
//       transition={{ duration: 0.5, delay }}
//     >
//       {children}
//     </motion.span>
//   );
// };

// const GradientBackground = () => (
//   <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//     <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
//   </div>
// );

// const AnimatedSphere = () => (
//   <Canvas className="absolute inset-0 -z-10">
//     <OrbitControls enableZoom={false} />
//     <ambientLight intensity={0.5} />
//     <directionalLight position={[-2, 5, 2]} intensity={1} />
//     <Sphere args={[1, 100, 200]} scale={2.4}>
//       <MeshDistortMaterial
//         color="#8B5CF6"
//         attach="material"
//         distort={0.3}
//         speed={1.5}
//         roughness={0}
//       />
//     </Sphere>
//   </Canvas>
// );

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden py-20 sm:py-32 md:py-40">
//       <GradientBackground />
//       {/* <AnimatedSphere /> */}
//       <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-8 flex items-center justify-center"
//         >
//           <span className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-800">
//             <Sparkles className="mr-1.5 h-4 w-4" />
//             Introducing Care AI
//           </span>
//         </motion.div>
//         <div className="text-center">
//           <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
//             <AnimatedText>Revolutionize Your</AnimatedText>{' '}
//             <AnimatedText delay={0.1}>Customer Experiences</AnimatedText>
//           </h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl md:text-2xl"
//           >
//             Caresept brings you the future of CRM with{' '}
//             <span className="font-semibold text-purple-600">Advanced AI</span>,{' '}
//             <span className="font-semibold text-pink-600">Intelligent chatbots</span>, and seamless
//             workflow management. Stay ahead of the competition with our end-to-end{' '}
//             <span className="font-semibold text-indigo-600">Modern CRM system</span>.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
//           >
//             <Button
//               size="lg"
//               className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 text-lg font-semibold text-white transition-all hover:from-purple-700 hover:to-pink-700 sm:w-auto"
//             >
//               Get Started
//               <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="w-full text-lg font-semibold text-gray-800 sm:w-auto"
//             >
//               View Demo
//             </Button>
//           </motion.div>
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className="mt-16 flex justify-center"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
//             alt="Caresept Dashboard"
//             className="rounded-lg shadow-2xl"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from './ui/button';
// import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

// interface FeatureCardProps {
//   icon: JSX.Element;
//   title: string;
//   description: string;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//     className="flex flex-col items-center rounded-xl bg-white p-6 shadow-lg"
//   >
//     {icon}
//     <h3 className="mt-4 text-lg font-semibold">{title}</h3>
//     <p className="mt-2 text-center text-sm text-gray-600">{description}</p>
//   </motion.div>
// );

// const Hero = () => {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 sm:py-32 md:py-40">
//       <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
//       <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-8 flex items-center justify-center"
//         >
//           <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1.5 text-sm font-medium text-white">
//             <Sparkles className="mr-1.5 h-4 w-4" />
//             Introducing Care AI
//           </span>
//         </motion.div>
//         <div className="text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
//           >
//             Transform Your Customer <br /> Relationships with AI
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl md:text-2xl"
//           >
//             Caresept revolutionizes CRM with cutting-edge AI, intelligent chatbots, and seamless
//             workflow automation. Experience the future of customer management today.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
//           >
//             <Button
//               size="lg"
//               className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 text-lg font-semibold text-white transition-all hover:from-purple-700 hover:to-pink-700 sm:w-auto"
//             >
//               Start Free Trial
//               <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="w-full bg-white text-lg font-semibold text-gray-800 sm:w-auto"
//               onClick={() => setIsVideoPlaying(true)}
//             >
//               Watch Demo
//             </Button>
//           </motion.div>
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
//         >
//           <FeatureCard
//             icon={<CheckCircle className="h-10 w-10 text-purple-600" />}
//             title="AI-Powered Insights"
//             description="Gain deep customer insights with our advanced AI analytics"
//           />
//           <FeatureCard
//             icon={<CheckCircle className="h-10 w-10 text-fuchsia-600" />}
//             title="Intelligent Chatbots"
//             description="Provide 24/7 support with our smart, conversational AI"
//           />
//           <FeatureCard
//             icon={<CheckCircle className="h-10 w-10 text-pink-600" />}
//             title="Seamless Integration"
//             description="Easily connect with your existing tools and workflows"
//           />
//         </motion.div>
//         {isVideoPlaying && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
//             onClick={() => setIsVideoPlaying(false)}
//           >
//             <div className="relative aspect-video w-full max-w-4xl">
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
//                 title="Caresept Demo Video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, CheckCircle, Users, Lock, BarChart3, GitGraph, MessageSquare, Brain } from 'lucide-react';
import { Canvas } from '@react-three/fiber';

interface FeatureCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  description: string;
}

const features = [
  {
    title: 'Advanced AI Integration',
    description:
      'Leverage cutting-edge AI to analyze customer data, predict trends, and provide actionable insights.',
    icon: <Brain className="h-8 w-8 stroke-[1.5] [stroke:url(#icon-gradient)]" />,
  },
  {
    title: 'Intelligent Chatbots',
    description:
      'Enhance customer support with AI-powered chatbots that learn and improve over time.',
    icon: <MessageSquare className="h-8 w-8 stroke-[1.5] [stroke:url(#icon-gradient)]" />,
  },
  {
    title: 'Streamlined Workflows',
    description:
      'Automate and optimize your business processes with our intuitive workflow management system.',
    icon: <GitGraph className="h-8 w-8 stroke-[1.5] [stroke:url(#icon-gradient)]" />,
  },
  {
    title: 'Comprehensive Analytics',
    description:
      'Gain deep insights into your customer relationships with our powerful analytics tools.',
    icon: <BarChart3 className="h-8 w-8 stroke-[1.5] [stroke:url(#icon-gradient)]" />,
  },
  {
    title: 'Customer Segmentation',
    description:
      'Automatically group customers based on behavior and preferences for targeted marketing.',
    icon: <Users className="h-8 w-8 stroke-[1.5] [stroke:url(#icon-gradient)]" />,
  },
  {
    title: 'Data Security',
    description: 'Keep your customer data safe with our advanced encryption and security measures.',
    icon: <Lock className="h-8 w-8 stroke-[1.5] [stroke:url(#icon-gradient)]" />,
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="group flex flex-col items-center rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm dark:bg-black/20"
  >
    <div className="relative transition-transform duration-300 ease-in-out group-hover:scale-110">
      {icon}
    </div>
    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">{description}</p>
  </motion.div>
);

// SVG gradient definition component
const IconGradient = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" className="text-purple-600" style={{ stopColor: 'rgb(147, 51, 234)' }} />
        <stop offset="50%" className="text-fuchsia-600" style={{ stopColor: 'rgb(192, 38, 211)' }} />
        <stop offset="100%" className="text-pink-600" style={{ stopColor: 'rgb(219, 39, 119)' }} />
      </linearGradient>
    </defs>
  </svg>
);


const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-32">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#BB5CF6_0%,_#EC4899_25%,_#ffffff_50%)] opacity-30 blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      ></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center"
        >
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1.5 text-sm font-medium text-white shadow-lg">
            <Sparkles className="mr-1.5 h-4 w-4" />
            Introducing Care AI
          </span>
        </motion.div>
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Transform Your Customer <br /> Relationships with AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-700 sm:text-xl md:text-2xl"
          >
            Caresept revolutionizes CRM with cutting-edge AI, intelligent chatbots, and seamless
            workflow automation. Experience the future of customer management today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <Button
              size="lg"
              className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 text-lg font-semibold text-white transition-all hover:from-purple-700 hover:to-pink-700 sm:w-auto"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full bg-white text-lg font-semibold text-gray-800 shadow-md transition-all hover:bg-gray-50 sm:w-auto"
              onClick={() => setIsVideoPlaying(true)}
            >
              Watch Demo
            </Button>
          </motion.div>
        </div>
        <section className="relative py-20">
          <IconGradient />
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
            onClick={() => setIsVideoPlaying(false)}
          >
            <div className="relative aspect-video w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Caresept Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </div>

      
    </section>
  );
};

export default Hero;