// components/SnowAnimation.tsx
import { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';

const SnowCircle = memo(({ left, delay }: { left: number; delay: number }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!circleRef.current) return;
    
    const duration = 8 + Math.random() * 4;
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.fromTo(circleRef.current,
      {
        y: -20,
        x: left,
      },
      {
        y: '110vh',
        x: left + (Math.random() * 100 - 40),
        duration,
        delay,
        ease: "none",
      }
    );

    return () => {
      tl.kill();
    };
  }, [left, delay]);

  return (
    <div
      ref={circleRef}
      className="absolute w-2 h-2 rounded-full bg-white blur-[1px] drop-shadow-custom"
      style={{ left: `${left}%` }}
    />
  );
});

SnowCircle.displayName = 'SnowCircle';

const SnowAnimation = () => {
  const circles = useRef(Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5
  })));

  return (
    <div className="fixed inset-0 z-[-40] overflow-hidden pointer-events-none">
      {circles.current.map(circle => (
        <SnowCircle 
          key={circle.id} 
          left={circle.left} 
          delay={circle.delay}
        />
      ))}
    </div>
  );
};

export default memo(SnowAnimation);