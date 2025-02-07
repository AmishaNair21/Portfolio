"use client"
import DynamicCard from '@/components/cards/DynamicCard';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const AudioPlayer = dynamic(() => import('@/components/AudioPlayer'), {
  ssr: false,
  loading: () => null
});

const Navigation = dynamic(() => import('@/components/Navigation'));

const SnowAnimation = dynamic(() => import('@/components/SnowAnimation'), {
  ssr: false,
  loading: () => null
});

const HeroSection = dynamic(() => import('@/components/HeroSection'));

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Suspense fallback={null}>
        <SnowAnimation />
      </Suspense>
      
      <Suspense fallback={null}>
        <AudioPlayer />
      </Suspense>

      <Navigation />
      
      <HeroSection />
   <h1 className="text-center text-6xl 2xl:text-9xl drop-shadow-md mt-4  2xl:drop-shadow-xl text-[#FFE5E5] hero-heading font-bold">
        Portfolio Under Construction
      </h1>
      <div className="w-full gap-7 p-4 items-center justify-center grid grid-cols-1 md:grid-cols-2 overflow-hidden min-h-screen">
      <div className='text-xl'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum similique maxime perspiciatis quasi, quae corrupti nihil tempora ad recusandae cupiditate facilis totam sunt non beatae delectus at. Quidem, sequi sapiente!
      </div>
       <DynamicCard
       image="/1.jpeg"
       title="Example Card"
       description="This is a dynamic card component."
       />
   
       <DynamicCard
       image="/2.jpeg"
       title="Example Card"
       description="This is a dynamic card component."
       />
         <div className='text-xl'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum similique maxime perspiciatis quasi, quae corrupti nihil tempora ad recusandae cupiditate facilis totam sunt non beatae delectus at. Quidem, sequi sapiente!
      </div>
  
      </div>
    </main>
  );
}