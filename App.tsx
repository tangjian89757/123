import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { SLIDES } from './constants';
import { SlideType } from './types';
import { 
  TitleSlide, 
  SplitSlide, 
  CardsSlide, 
  ConceptBalanceSlide, 
  DiagramSlide, 
  IconsGridSlide,
  TableSlide,
  ConclusionSlide
} from './components/SlideComponents';

const App: React.FC = () => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlideIdx((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIdx((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentSlide = SLIDES[currentSlideIdx];

  // Renderer Switch
  const renderSlideContent = () => {
    switch (currentSlide.type) {
      case SlideType.TITLE:
        return <TitleSlide data={currentSlide} />;
      case SlideType.SPLIT_IMAGE_TEXT:
        return <SplitSlide data={currentSlide} />;
      case SlideType.CARDS:
        return <CardsSlide data={currentSlide} />;
      case SlideType.CONCEPT_BALANCE:
        return <ConceptBalanceSlide data={currentSlide} />;
      case SlideType.DIAGRAM:
        return <DiagramSlide data={currentSlide} />;
      case SlideType.ICONS_GRID:
        return <IconsGridSlide data={currentSlide} />;
      case SlideType.SCRIPT_TABLE:
        return <TableSlide data={currentSlide} />;
      case SlideType.CONCLUSION:
        return <ConclusionSlide data={currentSlide} />;
      default:
        return <CardsSlide data={currentSlide} />;
    }
  };

  return (
    <div className="w-full h-screen bg-void text-stone-200 overflow-hidden relative selection:bg-blood selection:text-white">
      
      {/* Dynamic Background System */}
      <div className="absolute inset-0 z-0">
         <AnimatePresence mode="popLayout">
            {currentSlide.backgroundImage && (
              <motion.div
                key={currentSlide.backgroundImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <img 
                  src={currentSlide.backgroundImage} 
                  alt="Background" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
         </AnimatePresence>
         
         {/* Heavy overlays to ensure text is always readable against game art */}
         <div className="absolute inset-0 bg-void/70 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent"></div>
         <div className="absolute inset-0 bg-vignette opacity-80"></div>
         
         {/* Subtle Noise Grain Texture */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      {/* Main Slide Container */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative z-10 w-full h-full flex flex-col"
        >
          {/* Slide Content */}
          <main className="flex-grow relative">
             {renderSlideContent()}
          </main>

        </motion.div>
      </AnimatePresence>

      {/* Navigation Bar (Sticky Bottom) */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-50 flex justify-between items-end pointer-events-none">
        
        {/* Progress Indicator */}
        <div className="flex flex-col gap-1 pointer-events-auto">
           <div className="text-xs font-mono text-stone-400 mb-1 drop-shadow-md">
             {currentSlideIdx + 1} / {SLIDES.length}
           </div>
           <div className="w-32 h-1 bg-stone-900/50 backdrop-blur-sm rounded-full overflow-hidden border border-stone-800/50">
             <div 
               className="h-full bg-gold shadow-[0_0_10px_rgba(217,119,6,0.5)] transition-all duration-300"
               style={{ width: `${((currentSlideIdx + 1) / SLIDES.length) * 100}%` }}
             ></div>
           </div>
        </div>

        {/* Controls */}
        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={prevSlide}
            disabled={currentSlideIdx === 0}
            className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-stone-700/50 text-stone-400 hover:text-gold hover:border-gold hover:bg-black/60 disabled:opacity-30 disabled:hover:text-stone-400 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlideIdx === SLIDES.length - 1}
            className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-stone-700/50 text-stone-400 hover:text-gold hover:border-gold hover:bg-black/60 disabled:opacity-30 disabled:hover:text-stone-400 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Footer Note */}
        <div className="hidden md:block text-stone-500 text-xs font-serif italic max-w-xs text-right pointer-events-auto opacity-70 hover:opacity-100 transition-opacity drop-shadow-md">
           Ecce Homo: Capstone Presentation
        </div>
      </div>
    </div>
  );
};

export default App;