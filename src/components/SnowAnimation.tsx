// components/SnowAnimation.tsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface SnowCircleProps {
  left: number;
  delay: number;
}

const SnowCircle: React.FC<SnowCircleProps> = ({ left, delay }) => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!circleRef.current) return;

    const duration = 8 + Math.random() * 4;
    
    gsap.fromTo(circleRef.current,
      {
        y: -20,
        x: left,
      },
      {
        y: '110vh',
        x: left + (Math.random() * 100 - 40),
        duration: duration,
        delay: delay,
        ease: "none",
        repeat: -1,
        repeatDelay: 0,
      }
    );
  }, [left, delay]);

  return (
    <div
      ref={circleRef}
      className="absolute w-2 h-2 rounded-full  bg-white blur-[1px] drop-shadow-custom"
      style={{ left: `${left}%` }}
    />
  );
};

const SnowAnimation: React.FC = () => {
  const [circles, setCircles] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    // Generate circles only on the client side
    const newCircles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setCircles(newCircles);
  }, []);

  return (
    <div className="fixed inset-0 z-[-40] z-0overflow-hidden pointer-events-none">
      {circles.map(circle => (
        <SnowCircle 
          key={circle.id} 
          left={circle.left} 
          delay={circle.delay}
        />
      ))}
    </div>
  );
};

export default SnowAnimation;