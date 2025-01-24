"use client"
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

      <section className="min-h-screen w-full flex items-center justify-center">
        <h1 className="text-center text-4xl text-[#5F4793]">Coming Soon...</h1>
      </section>
    </main>
  );
}