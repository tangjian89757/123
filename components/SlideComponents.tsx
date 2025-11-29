import React from 'react';
import { motion } from 'framer-motion';
import { SlideData } from '../types';
import { Scale, Book, Heart, Flame, Sparkles, Wind } from 'lucide-react';

// Animation variants
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.6 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

interface SlideProps {
  data: SlideData;
}

// --- VISUAL EFFECTS COMPONENTS ---

const CandleFlame = () => {
  return (
    <div className="relative w-20 h-32 flex justify-center items-end mb-8 z-20">
      {/* Dynamic Glow */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 w-64 h-64 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none"
      />
      
      {/* Wick */}
      <div className="w-1 h-4 bg-stone-800 mb-0.5 opacity-60"></div>

      {/* Flame Container */}
      <motion.div
        className="absolute bottom-4 w-8 h-20 origin-bottom"
        animate={{ 
          scaleY: [1, 1.15, 0.95, 1.05, 1],
          scaleX: [1, 0.9, 1.1, 0.95, 1],
          rotate: [0, -1.5, 1.5, -0.5, 0],
          x: [0, -1, 1, 0] 
        }}
        transition={{ 
          duration: 0.6, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatType: "reverse"
        }}
      >
        {/* Outer Flame (Orange/Red) */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-300 rounded-[50%] rounded-t-[50%] rounded-b-[30%] blur-[2px] shadow-[0_0_15px_rgba(255,140,0,0.6)]"></div>
        
        {/* Inner Flame (White/Blue) */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-8 bg-gradient-to-t from-blue-400/30 to-white rounded-full blur-[2px] opacity-90"></div>
      </motion.div>
    </div>
  );
};

const GodRays = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-gradient-to-b from-gold/5 via-transparent to-transparent blur-[80px] rotate-12 transform origin-top"></div>
    <div className="absolute -top-[20%] left-1/3 w-[20%] h-[100%] bg-gradient-to-b from-white/5 via-transparent to-transparent blur-[40px] -rotate-12 transform origin-top"></div>
    <div className="absolute -top-[20%] right-1/3 w-[30%] h-[100%] bg-gradient-to-b from-gold/5 via-transparent to-transparent blur-[60px] rotate-6 transform origin-top"></div>
  </div>
);

const DustParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
    {[...Array(8)].map((_, i) => (
      <motion.div 
        key={i}
        className="absolute w-1 h-1 bg-gold/40 rounded-full blur-[1px]"
        initial={{ 
          x: Math.random() * 100 + "%", 
          y: Math.random() * 100 + "%", 
          opacity: 0,
          scale: 0 
        }}
        animate={{ 
          y: [null, Math.random() * -100 - 50],
          x: [null, (Math.random() - 0.5) * 50],
          opacity: [0, 0.6, 0],
          scale: [0, Math.random() * 1.5 + 0.5, 0]
        }}
        transition={{ 
          duration: Math.random() * 10 + 10, 
          repeat: Infinity, 
          delay: Math.random() * 10,
          ease: "linear"
        }}
      />
    ))}
  </div>
);

// --- SLIDE COMPONENTS ---

export const TitleSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full w-full text-center z-10 relative px-4 md:px-8 py-10 md:py-0 overflow-hidden">
      <GodRays />
      <DustParticles />

      {/* Decorative Border Frame */}
      <div className="absolute inset-4 md:inset-8 border border-gold/10 pointer-events-none md:block hidden"></div>
      <div className="absolute inset-4 md:inset-8 top-10 md:top-20 bottom-10 md:bottom-20 border-x border-gold/5 pointer-events-none md:block hidden"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <CandleFlame />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-8 md:mb-12 relative z-20"
      >
        <h1 className="text-5xl md:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-gold to-yellow-900 tracking-tighter mb-4 md:mb-6 drop-shadow-[0_4px_30px_rgba(217,119,6,0.5)] leading-none">
          {data.title.split(':')[0]}
        </h1>
        <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
           <div className="h-px w-8 md:w-20 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
           <h2 className="text-lg md:text-3xl font-serif text-stone-300 tracking-[0.3em] uppercase drop-shadow-lg">
             {data.title.split(':')[1]}
           </h2>
           <div className="h-px w-8 md:w-20 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col items-center max-w-full z-20"
      >
         <h2 className="text-xl md:text-3xl font-serif text-stone-400 italic mb-6 md:mb-8 tracking-wider font-light break-words text-center px-4 mix-blend-screen opacity-80">
          {data.subtitle}
        </h2>
        
        <p className="max-w-xs md:max-w-xl text-stone-500 font-sans font-light tracking-widest leading-relaxed text-xs md:text-sm uppercase border-t border-stone-800 pt-6">
          {data.content.details}
        </p>
      </motion.div>
    </div>
  );
};

export const SplitSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-full w-full overflow-y-auto md:overflow-hidden">
      {/* Image Side - Now visible on mobile at top or bottom */}
      <div className="relative w-full h-64 md:h-full overflow-hidden block md:order-2 group shrink-0">
        <div className="absolute inset-0 bg-stone-900/40 z-10 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/80 to-transparent z-20"></div>
        <img 
          src={data.content.image} 
          alt="Visualization" 
          className="w-full h-full object-cover opacity-90 transition-all duration-1000 transform hover:scale-105" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1516575334481-f85287c2c81d?q=80&w=1000&auto=format&fit=crop"; // Fallback
          }}
        />
      </div>

      {/* Text Side - Glassmorphism */}
      <div className="flex flex-col justify-center p-6 md:p-20 bg-black/70 backdrop-blur-md z-10 border-r-0 md:border-r border-stone-800/50 md:order-1 min-h-fit">
        <motion.div variants={fadeIn} initial="initial" animate="animate">
          <h2 className="text-3xl md:text-5xl font-serif text-gold mb-2 drop-shadow-lg">{data.title}</h2>
          <h3 className="text-lg md:text-2xl text-stone-400 mb-6 md:mb-10 font-serif">{data.subtitle}</h3>
          
          <div className="space-y-6 md:space-y-8 pb-20 md:pb-0">
            <h4 className="text-xl md:text-2xl font-bold text-stone-100 border-b border-blood pb-2 inline-block shadow-black drop-shadow-md">
              {data.content.left.title}
            </h4>
            <ul className="space-y-3 md:space-y-5">
              {data.content.left.points.map((point: string, idx: number) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="flex items-start text-base md:text-xl text-stone-300 font-light"
                >
                  <span className="text-blood mr-3 md:mr-4 mt-1.5 text-xs md:text-sm">♦</span>
                  <span className="drop-shadow-sm">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const CardsSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="flex flex-col h-full w-full p-6 md:p-16 justify-start md:justify-center overflow-y-auto">
      <div className="mb-8 md:mb-12 text-center relative z-10 shrink-0 pt-10 md:pt-0">
        <h2 className="text-3xl md:text-5xl font-serif text-gold drop-shadow-lg">{data.title}</h2>
        <p className="text-stone-400 mt-2 font-serif tracking-widest uppercase text-sm md:text-lg">{data.subtitle}</p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full pb-20 md:pb-0"
      >
        {data.content.map((item: any, idx: number) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={idx}
              variants={fadeIn}
              className="bg-stone-950/60 backdrop-blur-md border border-stone-800 p-6 md:p-8 rounded-sm hover:border-gold/50 transition-all duration-500 group relative overflow-hidden hover:bg-stone-900/80"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-700">
                <Icon size={120} className="text-stone-200" />
              </div>
              <div className="relative z-10">
                <div className="text-blood mb-4 md:mb-6 p-3 bg-black/30 w-fit rounded-full border border-stone-800/50">
                  <Icon size={24} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-stone-100 mb-1">{item.title}</h3>
                <h4 className="text-xs md:text-sm text-gold mb-4 md:mb-6 italic font-serif">{item.en}</h4>
                <p className="text-stone-300 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 bg-blood w-0 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export const ConceptBalanceSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="flex flex-col h-full items-center justify-center p-6 md:p-8 relative overflow-y-auto">
       {/* Background glow for the scale */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[400px] bg-gold/5 rounded-full blur-[50px] md:blur-[100px] pointer-events-none"></div>

       <h2 className="text-3xl md:text-5xl font-serif text-gold mb-10 md:mb-20 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] z-10 text-center mt-10 md:mt-0">{data.title}</h2>
       
       <div className="relative w-full max-w-4xl h-48 md:h-64 flex items-center justify-center mb-10 md:mb-20 z-10 shrink-0">
          {/* Scale Visualization */}
          <div className="absolute w-full h-1 bg-stone-600 top-1/2 transform -translate-y-1/2 shadow-[0_0_10px_rgba(0,0,0,1)]"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-10 md:h-10 bg-gold rounded-full z-10 shadow-[0_0_20px_rgba(217,119,6,0.6)]"></div>
          
          <motion.div 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute left-[5%] md:left-[10%] top-0 transform -translate-y-full flex flex-col items-center group"
          >
             <div className="w-24 h-24 md:w-40 md:h-40 border-2 border-stone-600 rounded-full flex items-center justify-center bg-black/80 backdrop-blur-sm mb-2 md:mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-stone-400 transition-colors">
               <Book size={32} className="md:w-14 md:h-14 text-stone-500 group-hover:text-stone-300 transition-colors" />
             </div>
             <p className="text-stone-300 font-serif text-sm md:text-xl text-center font-bold bg-black/40 px-2 md:px-4 py-1 rounded-full">{data.content.leftSide}</p>
          </motion.div>

          <motion.div 
             initial={{ y: -30, opacity: 0 }}
             animate={{ y: 30, opacity: 1 }}
             transition={{ delay: 0.8, type: 'spring' }}
            className="absolute right-[5%] md:right-[10%] bottom-0 transform translate-y-full flex flex-col items-center group"
          >
             <div className="w-24 h-24 md:w-40 md:h-40 border-2 border-blood rounded-full flex items-center justify-center bg-black/80 backdrop-blur-sm mb-2 md:mb-6 shadow-[0_0_50px_rgba(127,29,29,0.5)] group-hover:border-red-600 transition-colors">
               <Heart size={32} className="md:w-14 md:h-14 text-blood group-hover:text-red-600 transition-colors" />
             </div>
             <p className="text-gold font-serif text-sm md:text-xl text-center font-bold bg-black/40 px-2 md:px-4 py-1 rounded-full">{data.content.rightSide}</p>
          </motion.div>
       </div>

       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5 }}
         className="max-w-3xl text-center bg-black/60 backdrop-blur-md p-6 md:p-8 border-l-4 border-gold shadow-2xl z-10 mb-20 md:mb-0 mx-4"
       >
         <h3 className="text-lg md:text-2xl text-stone-100 mb-2 md:mb-4 font-serif">The Message</h3>
         <p className="text-stone-300 italic text-base md:text-xl leading-relaxed">"{data.content.message}"</p>
       </motion.div>
    </div>
  );
};

export const DiagramSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-start md:justify-center h-full w-full p-6 md:p-16 overflow-y-auto">
      <h2 className="text-3xl md:text-5xl font-serif text-gold mb-8 md:mb-16 drop-shadow-md pt-10 md:pt-0 text-center">{data.title}</h2>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-6xl items-center justify-center pb-24 md:pb-0">
        {/* Time Logic */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex-1 bg-stone-950/70 backdrop-blur-md p-6 md:p-8 border-t-2 border-stone-600 w-full hover:bg-stone-900/80 transition-colors shadow-xl"
        >
          <h3 className="text-xl md:text-2xl text-stone-100 font-serif mb-4 md:mb-6 border-b border-stone-800 pb-2">Time: Linear</h3>
          <p className="text-blood text-2xl md:text-3xl font-mono mb-2 md:mb-4 tracking-widest">00:00 → 10:00</p>
          <p className="text-stone-400 text-sm md:text-base">{data.content.time.split('|')[1]}</p>
        </motion.div>

        {/* Space Logic */}
        <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 0.3 }}
           className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
        >
          {/* Spiral SVG representation */}
          <div className="absolute inset-0 bg-black/50 rounded-full blur-xl"></div>
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold relative z-10 opacity-80 animate-spin-slow drop-shadow-[0_0_10px_rgba(217,119,6,0.5)]">
            <path d="M50,50 m0,-45 a45,45 0 1,1 0,90 a45,45 0 1,1 0,-90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" />
            <path d="M50,50 m0,-30 a30,30 0 1,1 0,60 a30,30 0 1,1 0,-60" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M50,50 m0,-15 a15,15 0 1,1 0,30 a15,15 0 1,1 0,-30" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm text-center text-stone-100 font-serif font-bold drop-shadow-md z-20">
            Spiral Descent
          </div>
        </motion.div>

        {/* Mapping Logic */}
        <motion.div 
           initial={{ x: 50, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ delay: 0.6 }}
           className="flex-1 space-y-4 md:space-y-6 w-full"
        >
           {data.content.layers.map((layer: any, idx: number) => (
             <div key={idx} className={`p-4 md:p-6 border-l-4 shadow-lg backdrop-blur-md transition-transform hover:translate-x-2 ${idx === 0 ? 'border-stone-500 bg-stone-900/50' : 'border-gold bg-stone-800/60'}`}>
                <h4 className="text-lg md:text-xl font-bold text-stone-100 mb-1 md:mb-2">{layer.name}</h4>
                <p className="text-stone-300 text-xs md:text-sm">{layer.desc}</p>
             </div>
           ))}
        </motion.div>
      </div>
    </div>
  );
};

export const IconsGridSlide: React.FC<SlideProps> = ({ data }) => {
    return (
      <div className="flex flex-col h-full w-full p-6 md:p-16 justify-start md:justify-center overflow-y-auto">
        <div className="mb-10 md:mb-16 border-b border-stone-600/50 pb-4 md:pb-6 w-full max-w-4xl mx-auto text-center backdrop-blur-sm bg-black/20 rounded-t-lg pt-10 md:pt-0 shrink-0">
          <h2 className="text-3xl md:text-5xl font-serif text-gold drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">{data.title}</h2>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto pb-24 md:pb-0">
          {data.content.map((item: any, idx: number) => {
             const Icon = item.icon;
             return (
              <div key={idx} className="flex flex-col items-center text-center group bg-black/40 backdrop-blur-sm p-6 rounded-lg hover:bg-black/60 transition-all duration-300">
                 <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-stone-900/80 border-2 border-stone-600 flex items-center justify-center mb-4 md:mb-6 group-hover:border-gold group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_25px_rgba(217,119,6,0.3)]">
                    <Icon size={32} className="md:w-12 md:h-12 text-stone-400 group-hover:text-gold transition-colors" />
                 </div>
                 <h3 className="text-xl md:text-2xl font-bold text-stone-100 mb-1">{item.title}</h3>
                 <h4 className="text-xs md:text-sm text-stone-500 uppercase tracking-widest mb-2 md:mb-4 font-bold">{item.subtitle}</h4>
                 <p className="text-stone-300 leading-relaxed text-sm max-w-xs">{item.desc}</p>
              </div>
             )
          })}
        </div>
      </div>
    );
};

export const TableSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="flex flex-col h-full w-full p-6 md:p-12 justify-center overflow-y-auto">
       <div className="mb-6 md:mb-10 text-center md:text-left bg-black/30 backdrop-blur-md p-4 md:p-6 rounded-lg inline-block w-fit mt-10 md:mt-0 shrink-0 mx-auto md:mx-0">
         <h2 className="text-2xl md:text-4xl font-serif text-gold drop-shadow-md">{data.title}</h2>
         <p className="text-stone-300 mt-2 text-base md:text-xl font-light">{data.subtitle}</p>
       </div>

       <div className="w-full overflow-x-auto rounded-sm border border-stone-700 bg-stone-950/70 backdrop-blur-xl shadow-2xl mb-24 md:mb-0">
         <table className="w-full text-left border-collapse min-w-[600px]">
           <thead>
             <tr className="bg-black/60 text-stone-400 uppercase text-xs tracking-wider border-b border-stone-700">
               <th className="p-3 md:p-5 w-20 md:w-24 text-center">Time</th>
               <th className="p-3 md:p-5 w-1/3">Reality (Audio)</th>
               <th className="p-3 md:p-5 w-1/3">VR World (Visual)</th>
               <th className="p-3 md:p-5">Narrator (Inner Voice)</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-stone-800/60">
             {data.content.map((row: any, idx: number) => (
               <motion.tr 
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 + 0.5 }}
                  className="hover:bg-stone-900/50 transition-colors group"
               >
                 <td className="p-3 md:p-5 text-blood font-mono font-bold text-sm md:text-base text-center bg-black/20 group-hover:text-red-500">{row.time}</td>
                 <td className="p-3 md:p-5 text-stone-400 text-xs md:text-sm italic border-r border-stone-800/30">{row.reality}</td>
                 <td className="p-3 md:p-5 text-gold-light text-xs md:text-sm border-r border-stone-800/30 font-medium">{row.vr}</td>
                 <td className="p-3 md:p-5 text-stone-300 font-serif text-xs md:text-sm pl-4 md:pl-6 relative">
                    <div className="absolute left-0 top-4 bottom-4 w-1 bg-stone-700 group-hover:bg-gold transition-colors"></div>
                   "{row.monologue.replace(/“|”/g, '')}"
                 </td>
               </motion.tr>
             ))}
           </tbody>
         </table>
       </div>
    </div>
  );
};

export const ConclusionSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 relative overflow-hidden">
      
      {/* Aesthetic Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/10 rounded-full blur-[80px] md:blur-[150px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10 relative max-w-full"
      >
        <div className="mb-6 flex justify-center">
            <motion.div 
               animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
               transition={{ duration: 4, repeat: Infinity }}
            >
               <Sparkles size={40} className="text-gold/60" />
            </motion.div>
        </div>

        <h2 className="text-5xl md:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-t from-stone-400 to-stone-100 tracking-tighter opacity-90 drop-shadow-2xl px-4">
            {data.subtitle}
        </h2>
        
        <motion.div 
           initial={{ width: 0 }}
           animate={{ width: "200px" }}
           transition={{ delay: 1, duration: 1.5 }}
           className="h-px bg-gold mx-auto my-8 md:my-12"
        ></motion.div>

        <div className="space-y-4 md:space-y-6 px-4">
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.5 }}
               className="text-lg md:text-2xl font-serif text-stone-400 tracking-wide font-light"
            >
               {data.content.vision}
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 2.5, duration: 1 }}
               className="text-2xl md:text-5xl font-serif text-gold tracking-widest drop-shadow-[0_0_20px_rgba(217,119,6,0.6)] font-normal"
            >
               {data.content.metaphor}
            </motion.p>
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 4 }}
           className="mt-12 md:mt-20"
        >
           <p className="text-stone-600 text-xs md:text-sm tracking-[0.5em] uppercase hover:text-gold transition-colors cursor-default">
              Fin.
           </p>
        </motion.div>
      </motion.div>
    </div>
  );
};