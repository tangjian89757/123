import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Printer, X, Grid } from 'lucide-react';
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
  const [isExportMode, setIsExportMode] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlideIdx((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIdx((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    if (isExportMode) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isExportMode]);

  const renderSlideContent = (slide: typeof SLIDES[0]) => {
    switch (slide.type) {
      case SlideType.TITLE:
        return <TitleSlide data={slide} />;
      case SlideType.SPLIT_IMAGE_TEXT:
        return <SplitSlide data={slide} />;
      case SlideType.CARDS:
        return <CardsSlide data={slide} />;
      case SlideType.CONCEPT_BALANCE:
        return <ConceptBalanceSlide data={slide} />;
      case SlideType.DIAGRAM:
        return <DiagramSlide data={slide} />;
      case SlideType.ICONS_GRID:
        return <IconsGridSlide data={slide} />;
      case SlideType.SCRIPT_TABLE:
        return <TableSlide data={slide} />;
      case SlideType.CONCLUSION:
        return <ConclusionSlide data={slide} />;
      default:
        return <CardsSlide data={slide} />;
    }
  };

  // Background Component to avoid repetition
  const SlideBackground = ({ image }: { image?: string }) => (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {image && (
        <img 
          src={image} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      )}
      {/* Overlays */}
      <div className="absolute inset-0 bg-void/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent"></div>
      <div className="absolute inset-0 bg-vignette opacity-80"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );

  // --- EXPORT / GRID VIEW ---
  if (isExportMode) {
    return (
      <div className="w-full bg-void min-h-screen text-stone-200 p-8 print:p-0">
        <div className="fixed top-4 right-4 z-50 flex gap-4 print:hidden">
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-gold hover:bg-gold-light text-black px-4 py-2 rounded-full font-bold shadow-lg transition-all"
          >
            <Printer size={20} />
            <span>Save as PDF</span>
          </button>
          <button 
            onClick={() => setIsExportMode(false)}
            className="flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white px-4 py-2 rounded-full font-bold shadow-lg transition-all"
          >
            <X size={20} />
            <span>Close View</span>
          </button>
        </div>

        <div className="flex flex-col gap-8 print:gap-0 max-w-[1280px] mx-auto">
          {SLIDES.map((slide, idx) => (
            <div key={slide.id} className="relative w-full aspect-video bg-black overflow-hidden shadow-2xl print:break-after-page print:shadow-none print:w-[100vw] print:h-[100vh]">
               <SlideBackground image={slide.backgroundImage} />
               <div className="relative z-10 w-full h-full">
                  {renderSlideContent(slide)}
               </div>
               <div className="absolute bottom-2 right-4 text-stone-500 text-xs z-20 print:hidden">Slide {idx + 1}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- PRESENTATION VIEW ---
  const currentSlide = SLIDES[currentSlideIdx];

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
         
         <div className="absolute inset-0 bg-void/70 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent"></div>
         <div className="absolute inset-0 bg-vignette opacity-80"></div>
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
          className="relative z-10 w-full h-full flex flex-col overflow-y-auto" 
        >
          {/* Slide Content */}
          <main className="flex-grow relative min-h-0">
             {renderSlideContent(currentSlide)}
          </main>

        </motion.div>
      </AnimatePresence>

      {/* Navigation Bar (Sticky Bottom) */}
      <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-50 flex justify-between items-end pointer-events-none">
        
        {/* Progress Indicator */}
        <div className="flex flex-col gap-1 pointer-events-auto">
           <div className="text-xs font-mono text-stone-400 mb-1 drop-shadow-md">
             {currentSlideIdx + 1} / {SLIDES.length}
           </div>
           <div className="w-24 md:w-32 h-1 bg-stone-900/50 backdrop-blur-sm rounded-full overflow-hidden border border-stone-800/50">
             <div 
               className="h-full bg-gold shadow-[0_0_10px_rgba(217,119,6,0.5)] transition-all duration-300"
               style={{ width: `${((currentSlideIdx + 1) / SLIDES.length) * 100}%` }}
             ></div>
           </div>
        </div>

        {/* Controls */}
        <div className="flex gap-2 md:gap-4 pointer-events-auto">
           <button 
            onClick={() => setIsExportMode(true)}
            className="p-2 md:p-3 rounded-full bg-black/40 backdrop-blur-md border border-stone-700/50 text-stone-400 hover:text-stone-100 hover:bg-black/60 transition-all group"
            title="Export / View All"
          >
            <Grid size={20} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform"/>
          </button>

          <div className="w-px h-6 md:h-8 bg-stone-800/50 mx-1 md:mx-2 self-center"></div>

          <button 
            onClick={prevSlide}
            disabled={currentSlideIdx === 0}
            className="p-2 md:p-3 rounded-full bg-black/40 backdrop-blur-md border border-stone-700/50 text-stone-400 hover:text-gold hover:border-gold hover:bg-black/60 disabled:opacity-30 disabled:hover:text-stone-400 transition-all"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlideIdx === SLIDES.length - 1}
            className="p-2 md:p-3 rounded-full bg-black/40 backdrop-blur-md border border-stone-700/50 text-stone-400 hover:text-gold hover:border-gold hover:bg-black/60 disabled:opacity-30 disabled:hover:text-stone-400 transition-all"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </div>

        {/* Footer Note - Hidden on mobile */}
        <div className="hidden md:block text-stone-500 text-xs font-serif italic max-w-xs text-right pointer-events-auto opacity-70 hover:opacity-100 transition-opacity drop-shadow-md">
           Ecce Homo: Capstone Presentation
        </div>
      </div>
    </div>
  );
};

export default App;