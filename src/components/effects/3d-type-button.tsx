import React, { useState, useRef, useEffect } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  handleclick?: () => void;
}

const Button = ({ children, handleclick }: ButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    // Create audio instance once on mount
    audioRef.current = new Audio('/mouse-click-2.mp3');
    audioRef.current.preload = 'auto';
    
    // Handle errors silently
    audioRef.current.addEventListener('error', (e) => {
      console.warn('Audio loading failed:', e);
    });

    // Track playing state
    audioRef.current.addEventListener('playing', () => {
      isPlayingRef.current = true;
    });
    
    audioRef.current.addEventListener('ended', () => {
      isPlayingRef.current = false;
    });

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playSound = () => {
    if (!audioRef.current) return;

    try {
      // Reset to start for rapid clicks
      audioRef.current.currentTime = 0;
      
      // Use play() with promise handling
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Handle autoplay policy errors silently
          console.warn('Audio playback failed:', error);
        });
      }
    } catch (error) {
      console.warn('Audio error:', error);
    }
  };

  return (
    <button
      type="button"
      className="relative"
      onClick={handleclick}
      onMouseDown={() => {
        setPressed(true);
        playSound();
      }}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
    >
      {/* top layer */}
      <div
        className={`w-full z-50 relative bg-[#fcecec] text-black h-full px-6 py-2 flex justify-center items-center rounded-full outline outline-1 outline-[#aa9999] transition-all duration-75 ${
          pressed ? "top-2 left-1" : ""
        }`}
      >
        {children}
      </div>

      {/* bottom layer */}
      <div className="w-full absolute bg-[#eecaca] text-black h-full px-6 py-2 flex justify-center items-center rounded-full outline outline-1 outline-[#726161] top-2 left-1"></div>
    </button>
  );
};

export default Button;
