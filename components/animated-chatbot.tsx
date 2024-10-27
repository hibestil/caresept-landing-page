'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Typewriter from 'typewriter-effect';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const initialMessages: Message[] = [
  { id: 1, text: 'Hello! How can I assist you today?', sender: 'bot' },
];

export default function AnimatedChatbot() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const chatbotResponses = [
    "That's an interesting question! Let me think about it.",
    "I'm here to help. Could you provide more details?",
    "I understand your concern. Here's what I can suggest...",
    "That's a great point! Have you considered this perspective?",
    "I'm processing your request. Give me a moment, please.",
  ];

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = { id: messages.length + 1, text: input, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInput('');
      setIsTyping(true);

      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)],
          sender: 'bot',
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full max-w-lg h-[600px] md:h-[700px] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-4 flex items-center">
        <FiMessageSquare className="w-6 h-6 mr-2" />
        <h2 className="text-xl font-bold">Demo Carebot</h2>
      </div>

      <ScrollArea className="h-[calc(100%-8rem)] p-4" ref={scrollAreaRef}>
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`mb-4 flex items-end gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <FiMessageSquare className="w-4 h-4 text-primary" />
                </div>
              )}
              <div
                className={`max-w-[70%] p-3 rounded-2xl shadow-sm ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.sender === 'bot' ? (
                  <div className="min-h-[20px]">
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter.typeString(message.text).start();
                      }}
                      options={{
                        delay: 30,
                        cursor: '',
                      }}
                    />
                  </div>
                ) : (
                  message.text
                )}
              </div>
              {message.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <FiUser className="w-4 h-4 text-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-gray-500"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <FiMessageSquare className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-gray-100 rounded-2xl px-4 py-2">
              <span className="flex gap-1">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce delay-100">●</span>
                <span className="animate-bounce delay-200">●</span>
              </span>
            </div>
          </motion.div>
        )}
      </ScrollArea>

      <div className="p-4 bg-gray-50 border-t">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-grow rounded-full border-gray-200 focus:border-primary focus:ring-primary"
          />
          <Button onClick={handleSendMessage} className="rounded-full px-3 hover:bg-primary/90">
            <FiSend className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
