import React from 'react';
import AnimatedChatbot from '../animated-chatbot';

function Chatbot() {
  return (
    <section className="w-full h-full flex flex-col-reverse md:flex-row items-center justify-center mt-8 md:mt-12">
      <div className="w-full md:w-1/3 px-6 md:px-0">
        <AnimatedChatbot />
      </div>
      <div className="w-full md:w-1/2 px-5 mb-5">
        <h1 className="text-3xl lg:text-6xl font-bold primary-text mb-4">
          Chatbots that treat your customer just like you
        </h1>
        <p className="text-sm md:text-md text-gray-700">
          Our chatbots are designed to be human-like, with natural language processing and
          context-aware responses.
        </p>
      </div>
    </section>
  );
}

export default Chatbot;
