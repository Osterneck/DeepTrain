import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import LandingScreen from "@/components/landing-screen";

// Intro Video Welcome Screen Component
const IntroVideoScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-5xl p-4">
        {/* Welcome video */}
        <video
          className="w-full rounded-lg shadow-xl"
          autoPlay
          muted
          playsInline
          controls
          onEnded={onComplete}
        >
          <source src="videos/rrg.mp4" type="video/mp4" />
          <source src="./videos/rrg.mp4" type="video/mp4" />
          <source src="/videos/rrg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Skip button */}
        <Button
          className="absolute bottom-8 right-8 bg-primary text-white font-bold px-6 py-3 rounded-lg shadow-lg z-10 hover:bg-primary-dark transition-colors"
          onClick={onComplete}
        >
          SKIP VID GO TO APP
        </Button>
      </div>
    </div>
  );
};

// Custom Router that coordinates the application flow
function AppRouter() {
  // This will allow us to programmatically change the URL
  const [location, setLocation] = useLocation();
  
  // Start with the intro video
  const [appStage, setAppStage] = useState<'intro' | 'landing' | 'app'>('intro');
  
  // Selected domain data that will be passed to the main app
  const [selectedDomain, setSelectedDomain] = useState<{id: string; name: string} | null>(null);
  
  // Auto-transition to landing page after video ends or times out
  useEffect(() => {
    if (appStage === 'intro') {
      // Allow the video to play fully without a short timeout
      const timer = setTimeout(() => {
        setAppStage('landing');
      }, 90000); // Long timeout to ensure video plays fully
      
      return () => clearTimeout(timer);
    }
  }, [appStage]);
  
  // Handle video skip
  const handleSkipIntro = () => {
    setAppStage('landing');
  };
  
  // Handle domain selection from landing screen
  const handleDomainSelect = (domainId: string, domainName: string) => {
    setSelectedDomain({ id: domainId, name: domainName });
    setAppStage('app');
    
    // Optionally pass the selected domain through URL params or state
    // For now, we'll just navigate to the home page
    setLocation('/');
  };
  
  // Conditionally render the appropriate stage
  if (appStage === 'intro') {
    return <IntroVideoScreen onComplete={handleSkipIntro} />;
  }
  
  if (appStage === 'landing') {
    return <LandingScreen onDomainSelect={handleDomainSelect} />;
  }
  
  // Main app with routes
  return (
    <Switch>
      <Route path="/" component={() => <Home initialDomain={selectedDomain} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
