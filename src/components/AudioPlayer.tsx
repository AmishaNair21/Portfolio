"use client"
import { useRef, useState, memo } from "react";
import { Volume2, VolumeX } from "lucide-react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        void audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="/Adventure.mp3"
      />
      <button 
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50  text-[#490f35] p-2 rounded-full shadow-lg hover:bg-[#542379] transition-colors"
        aria-label={isPlaying ? "Mute audio" : "Play audio"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </>
  );
};

export default memo(AudioPlayer);