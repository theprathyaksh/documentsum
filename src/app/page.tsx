'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SparklesCore } from '@/components/ui/sparkles';





export default function Home() {
  return (
    <>
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12 bg-gray-800 text-white">
        <section className="text-center mb-8 md:mb-12 py-11">
          <h2 className="text-3xl md:text-5xl font-bold">
            Document Summarization Web Application 
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg">
            Document Summarization - From Complexity to Clarity
          </p>
        </section>
        <div className="w-[40rem] h-40 relative ">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
      
        {/* <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        /> */}

        <div className="absolute inset-0 w-full h-full bg-gray-800[mask-image:radial-gradient(350px_200px_at_top,transparent_50%,white)]"></div> 
      </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 md:p-6 bg-gray-900 text-white">
        © 2024 Document Summarization. All rights reserved.
      </footer>
    </>
  );
}