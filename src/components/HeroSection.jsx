import { ArrowDown, Download, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import bgImage from '../assets/hero-bg.png';
import resumePDF from '../assets/resume.pdf';

export const HeroSection = () => {
  const [canScroll, setCanScroll] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "Mrunal Mehar";
  const typingSpeed = 150; // milliseconds per letter

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);

    // Continuous typing animation for "Mrunal Mehar"
    if (animationStarted) {
      let currentIndex = 0;
      let isDeleting = false;
      let typewriterTimeout;

      const typeWriter = () => {
        if (!isDeleting && currentIndex <= fullText.length) {
          // Typing phase
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
          
          if (currentIndex > fullText.length) {
            // Pause before starting to delete
            typewriterTimeout = setTimeout(() => {
              isDeleting = true;
              typeWriter();
            }, 2000); // Wait 2 seconds before deleting
          } else {
            typewriterTimeout = setTimeout(typeWriter, typingSpeed);
          }
        } else if (isDeleting && currentIndex >= 0) {
          // Deleting phase
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex--;
          
          if (currentIndex < 0) {
            // Pause before starting to type again
            isDeleting = false;
            currentIndex = 0;
            typewriterTimeout = setTimeout(typeWriter, 500); // Wait 0.5 seconds before typing again
          } else {
            typewriterTimeout = setTimeout(typeWriter, typingSpeed / 2); // Delete faster than typing
          }
        }
      };

      // Start the continuous typing effect
      typeWriter();

      return () => {
        if (typewriterTimeout) {
          clearTimeout(typewriterTimeout);
        }
      };
    }

    return () => clearTimeout(timer);
  }, [animationStarted, fullText, typingSpeed]);

  // Enhanced scroll prevention effect
  useEffect(() => {
    const preventScroll = (e) => {
      if (isScrollLocked) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const preventKeyboardScroll = (e) => {
      if (isScrollLocked) {
        // Prevent arrow keys, page up/down, home, end, and spacebar
        const scrollKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
        if (scrollKeys.includes(e.keyCode)) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
    };

    const preventTouchScroll = (e) => {
      if (isScrollLocked) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    if (isScrollLocked) {
      // Prevent all forms of scrolling
      document.addEventListener('wheel', preventScroll, { passive: false });
      document.addEventListener('touchmove', preventTouchScroll, { passive: false });
      document.addEventListener('keydown', preventKeyboardScroll, { passive: false });
      document.addEventListener('scroll', preventScroll, { passive: false });
      window.addEventListener('scroll', preventScroll, { passive: false });
      
      // Also prevent scrolling via CSS
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      // Reset scroll position to top when locked
      window.scrollTo(0, 0);
    } else {
      // Re-enable scrolling
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      // Cleanup event listeners
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventTouchScroll);
      document.removeEventListener('keydown', preventKeyboardScroll);
      document.removeEventListener('scroll', preventScroll);
      window.removeEventListener('scroll', preventScroll);
      
      // Restore scrolling when component unmounts
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isScrollLocked]);

  const handleScrollClick = () => {
    setIsScrollLocked(false);
    setCanScroll(true);
    
    // Small delay to ensure scroll lock is fully released before scrolling
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleNavigation = (sectionId) => {
    setIsScrollLocked(false);
    setCanScroll(true);
    
    // Small delay to ensure scroll lock is fully released before scrolling
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const downloadCV = () => {
    // Create a link to download from the public folder
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Mrunal_Mehar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Full Screen Background Image - Mobile Optimized */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            minWidth: '100vw'
          }}
        ></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          
          {/* Name - Text Shadow and Animation */}
          <div className="relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-normal relative overflow-hidden">
              
              {/* "I'M" Text with slide-in animation */}
              <div className={`inline-block transition-all duration-1000 ease-out ${
                animationStarted ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}>
                <span 
                  className="text-white mr-4"
                  style={{
                    fontFamily: "'Orbitron', 'sans-serif'",
                    textShadow: "0 0 20px rgba(255,255,255,0.5), 0 4px 8px rgba(0,0,0,0.3)"
                  }}
                >
                  I'M
                </span>
              </div>

              {/* "Mrunal Mehar" with realistic typing effect */}
              <div className="inline-block relative">
                <span 
                  className={`bg-gradient-to-r from-violet-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 ease-out ${
                    animationStarted ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    fontFamily: "'Orbitron', 'sans-serif'",
                    textShadow: "0 0 30px rgba(139,92,246,0.8), 0 0 60px rgba(79,70,229,0.6)",
                    filter: 'brightness(1.3)',
                    minWidth: '1ch' // Prevents layout shift during typing
                  }}
                >
                  {displayedText}
                  {/* Blinking cursor */}
                  <span 
                    className="inline-block w-1 bg-violet-400 ml-1 animate-pulse"
                    style={{
                      height: '0.8em',
                      animation: 'cursor-blink 1s infinite'
                    }}
                  ></span>
                </span>
              </div>

              {/* Subtle glow effect behind text */}
              <span 
                className={`absolute inset-0 bg-gradient-to-r from-violet-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent blur-sm transition-opacity duration-2000 ${
                  animationStarted ? 'opacity-10' : 'opacity-0'
                }`}
                style={{
                  fontFamily: "'Orbitron', 'sans-serif'",
                  animation: animationStarted ? 'glow-pulse 4s ease-in-out infinite' : 'none'
                }}
              >
                I'M Mrunal Mehar
              </span>
            </h1>

          </div>

          {/* Professional Title/Tagline  */}
          <div className="opacity-0 animate-fade-in-delay-1">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8 shadow-lg"></div>

              <p
                className="text-lg md:text-xl lg:text-2xl font-medium tracking-widest uppercase text-yellow-300 drop-shadow-lg"
                style={{
                  fontFamily: "'Montserrat', 'Arial', sans-serif",
                  textShadow:
                  '0 2px 10px rgba(0,0,0,0.7), 0 0 15px rgba(255,185,0,0.3)',
                  letterSpacing: '0.2em',
                }}
              >
                Curious and Innovative Software Developer
              </p>

            <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-8 shadow-lg"></div>

          </div>

          {/* Action Buttons*/}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 opacity-0 animate-fade-in-delay-3">
            <button 
              onClick={() => handleNavigation('projects')} 
              className="relative px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/40 font-bold hover:bg-white/20 hover:border-white/60 transition-all duration-300 rounded-lg uppercase tracking-wider text-sm shadow-2xl hover:shadow-violet-500/20 cursor-pointer group overflow-hidden"
              style={{
                boxShadow: '0 8px 32px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
              }}
            >
              <span 
                className="bg-gradient-to-r from-violet-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent relative z-10"
                style={{
                  fontFamily: "'Orbitron', 'sans-serif'",
                  textShadow: "0 0 15px rgba(139,92,246,0.5), 0 0 30px rgba(79,70,229,0.4)",
                  filter: 'brightness(1.2)'
                }}
              >
                View Portfolio
              </span>
              {/* Glow effect behind text */}
              <span 
                className="absolute inset-0 bg-gradient-to-r from-violet-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent blur-sm opacity-20 flex items-center justify-center"
                style={{
                  fontFamily: "'Orbitron', 'sans-serif'",
                }}
              >
                View Portfolio
              </span>
            </button>
            
            <button 
              onClick={downloadCV}
              className="relative px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/40 font-bold hover:bg-white/20 hover:border-white/60 transition-all duration-300 rounded-lg uppercase tracking-wider text-sm shadow-2xl hover:shadow-violet-500/20 cursor-pointer group overflow-hidden"
              style={{
                boxShadow: '0 8px 32px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
              }}
            >
              <span 
                className="bg-gradient-to-r from-violet-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent relative z-10"
                style={{
                  fontFamily: "'Orbitron', 'sans-serif'",
                  textShadow: "0 0 15px rgba(139,92,246,0.5), 0 0 30px rgba(79,70,229,0.4)",
                  filter: 'brightness(1.2)'
                }}
              >
                Download Resume
              </span>
              {/* Glow effect behind text */}
              <span 
                className="absolute inset-0 bg-gradient-to-r from-violet-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent blur-sm opacity-20 flex items-center justify-center"
                style={{
                  fontFamily: "'Orbitron', 'sans-serif'",
                }}
              >
                Download Resume
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator*/}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group z-20 animate-bounce"
        onClick={handleScrollClick}
      >
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center items-start pt-2 group-hover:border-yellow-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-400/30">
            <div className="w-1 h-3 bg-yellow-300 rounded-full animate-bounce group-hover:bg-yellow-400 transition-all duration-300"></div>
          </div>
          <ArrowDown className="h-4 w-4 text-yellow-300 mt-3 group-hover:text-yellow-400 transition-colors duration-300 animate-pulse" />
          <p className="text-xs text-yellow-300/70 mt-2 group-hover:text-yellow-300 transition-colors duration-300 font-light">
            Click to scroll
          </p>
        </div>
      </div>

      {/* Animated background elements for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Name Animations and Mobile Background Fix */}
      <style jsx>{`
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes glow-pulse {
          0%, 100% { 
            filter: brightness(1.3) blur(1px);
            transform: scale(1);
          }
          50% { 
            filter: brightness(1.6) blur(2px);
            transform: scale(1.02);
          }
        }
        
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(90deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-90deg); }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(270deg); }
        }
        
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(-270deg); }
        }

        /* Force proper background sizing on all devices */
        #hero {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        /* Mobile background fix - ensure full coverage */
        @media (max-width: 768px) {
          #hero {
            min-height: 100vh;
            min-height: 100dvh; /* For mobile browsers that support dvh */
          }
          
          /* Force background to cover full area on mobile */
          #hero > div:first-child > div:first-child {
            background-size: cover !important;
            background-position: center center !important;
            width: 100% !important;
            height: 100% !important;
          }
        }

        /* Very small screens */
        @media (max-width: 480px) {
          #hero > div:first-child > div:first-child {
            background-size: cover !important;
            background-position: center center !important;
            width: 100% !important;
            height: 100% !important;
          }
        }

        /* Portrait orientation - ensure full coverage */
        @media (orientation: portrait) {
          #hero > div:first-child > div:first-child {
            background-size: cover !important;
            background-position: center center !important;
            width: 100% !important;
            height: 100% !important;
          }
        }

        /* Landscape mobile orientation */
        @media (max-width: 768px) and (orientation: landscape) {
          #hero > div:first-child > div:first-child {
            background-size: cover !important;
            background-position: center center !important;
            width: 100% !important;
            height: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};