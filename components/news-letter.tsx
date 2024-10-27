import React from 'react';
import { Input } from './ui/input';

function NewsLetter() {
  return (
    <section className="w-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-white via-blue-500/50 to-white min-h-[400px]">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-cente r">
        <h2 className="text-3xl font-semibold text-start primary-text">
          Subscribe to our newsletter
        </h2>
        <p className="text-center text-gray-700 mt-4">
          Get the latest news, updates, and resources delivered straight to your inbox.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center mt-8 md:mt-0">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-[90%] md:w-1/2 px-4 py-2 border border-gray-200  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-l-md"
        />
        <button className="bg-primary text-white px-6 py-2 rounded-r-md">Subscribe</button>
      </div>
    </section>
  );
}

export default NewsLetter;
