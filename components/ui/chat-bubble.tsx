'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Bot } from 'lucide-react';
import { PersonIcon } from '@radix-ui/react-icons';

interface ChatBubbleProps {
  message: string;
  isBot?: boolean;
  delay?: number;
}

export function ChatBubble({ message, isBot = false, delay = 0 }: ChatBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'flex items-start gap-2.5 w-full max-w-md',
        isBot ? 'self-start pl-4' : 'self-end flex-row-reverse pr-4'
      )}
    >
      {isBot && (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-primary p-2 z-30 shadow-lg">
          <Bot />
        </div>
      )}
      {!isBot && (
        <div className="flex items-center justify-center min-w-8 h-8 rounded-full bg-primary text-white z-30 shadow-lg">
          <PersonIcon />
        </div>
      )}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
        className={cn(
          'px-4 py-2 rounded-lg',
          isBot ? 'bg-muted' : 'bg-primary text-primary-foreground'
        )}
      >
        <p className="text-sm">{message}</p>
      </motion.div>
    </motion.div>
  );
}
