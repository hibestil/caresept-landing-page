import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChatBubble } from "./chat-bubble";
import Image from "next/image";

const conversation = [
  { message: "Hey there! 👋 Need help with your next project?", isBot: true },
  { message: "Yes! I'm looking for a hair transplant", isBot: false },
  { message: "OK, I can help you with that. Can you tell me more about your requirements?", isBot: true },
  { message: "Sure, I want to get a hair transplant done in the next 2 months, and attached are some prescription from my doctor", isBot: false },
  { message: "Great! I'll need to know your location to find the nearest clinic for you. Can you share your location?", isBot: true },
  { message: "Sure, here is my location", isBot: false },
  { message: "Thanks! I have found a clinic near you. Would you like to book an appointment?", isBot: true },
  { message: "Yes, I would like to book an appointment", isBot: false },
  { message: "Great! I have booked an appointment for you. You will receive a confirmation shortly. Is there anything else I can help you with?", isBot: true },
];

const EnhancedChatbot = () => {
  const [messages, setMessages] = useState([]);
  const controls = useAnimation();
  const chatRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          controls.start("visible");
          startChatAnimation();
        }
      },
      {
        threshold: 0.3,
        rootMargin: "50px",
      }
    );

    if (chatRef.current) {
      observer.observe(chatRef.current);
    }

    return () => {
      if (chatRef.current) {
        observer.unobserve(chatRef.current);
      }
    };
  }, [controls]);

  const startChatAnimation = () => {
    setMessages([]); // Reset messages
    conversation.forEach((msg, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, msg]);
      }, index * 2000);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const glowVariants = {
    hidden: {
      boxShadow: "0 0 0 rgba(244, 63, 94, 0)",
    },
    visible: {
      boxShadow: [
        "0 0 20px rgba(244, 63, 94, 0.2)",
        "0 0 40px rgba(244, 63, 94, 0.3)",
        "0 0 20px rgba(244, 63, 94, 0.2)",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-background to-muted" >
      <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.2 }
            }
          }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Create chatbots that help your customers just like you
          </h2>
        </motion.div>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main content container */}
        <div className="relative items-center min-h-[600px]" >
          {/* Left side - Chatbot */}
          <motion.div
            ref={chatRef}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="relative z-10"
          >
            <motion.div
              variants={glowVariants}
              className="backdrop-blur-xl rounded-2xl p-6 border border-muted-foreground/10 "
              style={{ 
                backgroundImage: "url('/c3.jpg')",
                backgroundSize: "cover",           // Ensures the image covers the div completely
                backgroundPosition: "center",      // Centers the image
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="flex flex-col gap-4 h-[600px] overflow-y-auto custom-scrollbar lg:w-[50%] backdrop-blur-md bg-transparent">
                {messages.map((msg, index) => (
                  <ChatBubble
                    key={index}
                    message={msg.message}
                    isBot={msg.isBot}
                    delay={0.3}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(244, 63, 94, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(244, 63, 94, 0.5);
        }
      `}</style>
    </section>
  );
};

export default EnhancedChatbot;