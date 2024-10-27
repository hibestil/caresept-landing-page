import React from 'react';

function NewsLetter() {
  return (
    <section className="w-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-white via-blue-500/50 to-white min-h-[400px]">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-cente r">
        <h2 className="text-3xl font-semibold text-start">Subscribe to our newsletter</h2>
        <p className="text-center text-gray-500 mt-4">
          Get the latest news, updates, and resources delivered straight to your inbox.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center mt-8 md:mt-0">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-1/2 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button className="bg-primary text-white px-6 py-2 rounded-lg mt-4">Subscribe</button>
      </div>
    </section>
  );
}

export default NewsLetter;
