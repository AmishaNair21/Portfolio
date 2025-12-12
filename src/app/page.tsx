"use client"

import SecondSection from '@/components/sections/SecondSection';
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
    <main className=" overflow-x-hidden">
      <Suspense fallback={null}>
        <SnowAnimation />
      </Suspense>
      
      <Suspense fallback={null}>
        <AudioPlayer />
      </Suspense>

      <Navigation />
      <HeroSection />
      
     <SecondSection/>
    </main>
  );
}