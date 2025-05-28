import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface IntroVideoProps {
  videoPath: string;
  onComplete: () => void;
}

const IntroVideo = ({ videoPath, onComplete }: IntroVideoProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-4xl">
        {/* Video element */}
        <video 
          className="w-full rounded-lg shadow-xl"
          controls
          autoPlay
          src={videoPath}
          onEnded={onComplete}
        >
          Your browser does not support the video tag.
        </video>
        
        {/* Skip button */}
        <Button
          className="absolute bottom-6 right-6 bg-primary text-white font-bold px-6 py-3 rounded-lg shadow-lg z-10 hover:bg-primary-dark transition-colors"
          onClick={onComplete}
        >
          SKIP VID GO TO APP
        </Button>
      </div>
      
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="text-white text-xl">Loading video...</div>
        </div>
      )}
    </div>
  );
};

export default IntroVideo;