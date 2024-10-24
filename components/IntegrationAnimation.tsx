'use client';

import { motion } from 'framer-motion';
import {
  MessageSquare,
  Mail,
  Phone,
  Slack,
  Zap,
  MessagesSquare,
  Smartphone,
  Building2,
  Users,
  Bot,
  Mic,
} from 'lucide-react';

const apps = [
  { name: 'WhatsApp', icon: MessageSquare, color: 'bg-green-500' },
  { name: 'Email', icon: Mail, color: 'bg-blue-500' },
  { name: 'Microsoft 365', icon: Mic, color: 'bg-indigo-500' },
  { name: 'Phone', icon: Phone, color: 'bg-purple-500' },
  { name: 'Slack', icon: Slack, color: 'bg-red-500' },
];

const IntegrationAnimation = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-background/50 backdrop-blur-sm rounded-xl">
      {/* Central Caresept Hub */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Bot className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Orbiting Integration Paths */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20" />
          </div>
        </div>
      </motion.div>

      {/* Integration Cards */}
      {apps.map((app, index) => (
        <motion.div
          key={app.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="absolute"
          style={{
            top: `${50 + 35 * Math.sin((2 * Math.PI * index) / apps.length)}%`,
            left: `${50 + 35 * Math.cos((2 * Math.PI * index) / apps.length)}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className={`relative group cursor-pointer`}>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-primary/50 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative p-4 bg-card rounded-xl shadow-xl">
              <app.icon className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm font-medium">{app.name}</p>
            </div>

            {/* Connection Beam */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
              className="absolute top-1/2 left-1/2 w-[200px] h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent"
              style={{
                transformOrigin: '0 0',
                transform: `rotate(${-(360 * index) / apps.length + 180}deg)`,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Flying Integration Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          initial={{
            opacity: 0,
            x: '50%',
            y: '50%',
          }}
          animate={{
            opacity: [0, 1, 0],
            x: ['50%', `${50 + (Math.random() - 0.5) * 100}%`],
            y: ['50%', `${50 + (Math.random() - 0.5) * 100}%`],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Integration Success Messages */}
      {['Data synced', 'Integration complete', 'Connected', 'Real-time sync', 'AI optimized'].map(
        (text, index) => (
          <motion.div
            key={text}
            className="absolute left-1/2 top-1/2"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -40],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm">
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-xs font-medium text-primary">{text}</span>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
};

export default IntegrationAnimation;
