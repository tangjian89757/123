import React from 'react';
import { motion } from 'framer-motion';
import { SlideData } from '../types';
import { Scale, Book, Heart, Flame } from 'lucide-react';

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

export const TitleSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center z-10 relative px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-8 p-12 border-y border-gold/40 bg-black/50 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        <h1 className="text-5xl md:text-8xl font-serif text-gold tracking-wide mb-6 drop-shadow-[0_4px_15px_rgba(217,119,6,0.6)]">
          {data.title}
        </h1>
        <h2 className="text-2xl md:text-4xl font-serif text-stone-200 italic mb-2 tracking-wider">
          {data.subtitle}
        </h2>
      </motion.div>
      
      <motion.div 
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="max-w-2xl text-stone-300 font-sans bg-black/30 p-6 backdrop-blur-sm rounded-sm border-l-4 border-blood"
      >
        <p className="text-xl mb-6 font-light">
          {data.content.details}
        </p>
        <div className="flex flex-col items-center gap-2 text-sm uppercase tracking-widest text-stone-400">
          <span>{data.content.author}</span>
          <span className="text-gold-light font-bold">{data.content.role}</span>
        </div>
      </motion.div>

      {/* Atmospheric Element: A faint lantern glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse pointer-events-none"></div>
    </div>
  );
};

export const SplitSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* Text Side - Glassmorphism */}
      <div className="flex flex-col justify-center p-12 md:p-20 bg-black/70 backdrop-blur-md z-10 border-r border-stone-800/50">
        <motion.div variants={fadeIn} initial="initial" animate="animate">
          <h2 className="text-5xl font-serif text-gold mb-2 drop-shadow-lg">{data.title}</h2>
          <h3 className="text-2xl text-stone-400 mb-10 font-serif">{data.subtitle}</h3>
          
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-stone-100 border-b border-blood pb-2 inline-block shadow-black drop-shadow-md">
              {data.content.left.title}
            </h4>
            <ul className="space-y-5">
              {data.content.left.points.map((point: string, idx: number) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="flex items-start text-xl text-stone-300 font-light"
                >
                  <span className="text-blood mr-4 mt-1.5 text-sm">♦</span>
                  <span className="drop-shadow-sm">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Image Side */}
      <div className="relative h-full overflow-hidden hidden md:block group">
        <div className="absolute inset-0 bg-stone-900/40 z-10 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent z-20"></div>
        <img 
          src={data.content.image} 
          alt="Visualization" 
          className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105" 
        />
      </div>
    </div>
  );
};

export const CardsSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="flex flex-col h-full w-full p-8 md:p-16 justify-center">
      <div className="mb-12 text-center relative z-10">
        <h2 className="text-5xl font-serif text-gold drop-shadow-lg">{data.title}</h2>
        <p className="text-stone-400 mt-2 font-serif tracking-widest uppercase text-lg">{data.subtitle}</p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full"
      >
        {data.content.map((item: any, idx: number) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={idx}
              variants={fadeIn}
              className="bg-stone-950/60 backdrop-blur-md border border-stone-800 p-8 rounded-sm hover:border-gold/50 transition-all duration-500 group relative overflow-hidden hover:bg-stone-900/80"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-700">
                <Icon size={120} className="text-stone-200" />
              </div>
              <div className="relative z-10">
                <div className="text-blood mb-6 p-3 bg-black/30 w-fit rounded-full border border-stone-800/50">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-stone-100 mb-1">{item.title}</h3>
                <h4 className="text-sm text-gold mb-6 italic font-serif">{item.en}</h4>
                <p className="text-stone-300 text-base leading-relaxed">{item.desc}</p>
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
    <div className="flex flex-col h-full items-center justify-center p-8 relative">
       {/* Background glow for the scale */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

       <h2 className="text-5xl font-serif text-gold mb-20 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] z-10">{data.title}</h2>
       
       <div className="relative w-full max-w-4xl h-64 flex items-center justify-center mb-20 z-10">
          {/* Scale Visualization */}
          <div className="absolute w-full h-1 bg-stone-600 top-1/2 transform -translate-y-1/2 shadow-[0_0_10px_rgba(0,0,0,1)]"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gold rounded-full z-10 shadow-[0_0_20px_rgba(217,119,6,0.6)]"></div>
          
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: -30, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute left-[10%] top-0 transform -translate-y-full flex flex-col items-center group"
          >
             <div className="w-40 h-40 border-2 border-stone-600 rounded-full flex items-center justify-center bg-black/80 backdrop-blur-sm mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-stone-400 transition-colors">
               <Book size={56} className="text-stone-500 group-hover:text-stone-300 transition-colors" />
             </div>
             <p className="text-stone-300 font-serif text-xl text-center font-bold bg-black/40 px-4 py-1 rounded-full">{data.content.leftSide}</p>
          </motion.div>

          <motion.div 
             initial={{ y: -50, opacity: 0 }}
             animate={{ y: 40, opacity: 1 }}
             transition={{ delay: 0.8, type: 'spring' }}
            className="absolute right-[10%] bottom-0 transform translate-y-full flex flex-col items-center group"
          >
             <div className="w-40 h-40 border-2 border-blood rounded-full flex items-center justify-center bg-black/80 backdrop-blur-sm mb-6 shadow-[0_0_50px_rgba(127,29,29,0.5)] group-hover:border-red-600 transition-colors">
               <Heart size={56} className="text-blood group-hover:text-red-600 transition-colors" />
             </div>
             <p className="text-gold font-serif text-xl text-center font-bold bg-black/40 px-4 py-1 rounded-full">{data.content.rightSide}</p>
          </motion.div>
       </div>

       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5 }}
         className="max-w-3xl text-center bg-black/60 backdrop-blur-md p-8 border-l-4 border-gold shadow-2xl z-10"
       >
         <h3 className="text-2xl text-stone-100 mb-4 font-serif">The Message</h3>
         <p className="text-stone-300 italic text-xl leading-relaxed">"{data.content.message}"</p>
       </motion.div>
    </div>
  );
};

export const DiagramSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-8 md:p-16">
      <h2 className="text-5xl font-serif text-gold mb-16 drop-shadow-md">{data.title}</h2>
      
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl items-center justify-center">
        {/* Time Logic */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex-1 bg-stone-950/70 backdrop-blur-md p-8 border-t-2 border-stone-600 w-full hover:bg-stone-900/80 transition-colors shadow-xl"
        >
          <h3 className="text-2xl text-stone-100 font-serif mb-6 border-b border-stone-800 pb-2">Time: Linear</h3>
          <p className="text-blood text-3xl font-mono mb-4 tracking-widest">00:00 → 10:00</p>
          <p className="text-stone-400 text-base">{data.content.time.split('|')[1]}</p>
        </motion.div>

        {/* Space Logic */}
        <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 0.3 }}
           className="relative w-64 h-64 flex-shrink-0"
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
           className="flex-1 space-y-6 w-full"
        >
           {data.content.layers.map((layer: any, idx: number) => (
             <div key={idx} className={`p-6 border-l-4 shadow-lg backdrop-blur-md transition-transform hover:translate-x-2 ${idx === 0 ? 'border-stone-500 bg-stone-900/50' : 'border-gold bg-stone-800/60'}`}>
                <h4 className="text-xl font-bold text-stone-100 mb-2">{layer.name}</h4>
                <p className="text-stone-300 text-sm">{layer.desc}</p>
             </div>
           ))}
        </motion.div>
      </div>
    </div>
  );
};

export const IconsGridSlide: React.FC<SlideProps> = ({ data }) => {
    return (
      <div className="flex flex-col h-full w-full p-8 md:p-16 justify-center">
        <div className="mb-16 border-b border-stone-600/50 pb-6 w-full max-w-4xl mx-auto text-center backdrop-blur-sm bg-black/20 rounded-t-lg">
          <h2 className="text-5xl font-serif text-gold drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">{data.title}</h2>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {data.content.map((item: any, idx: number) => {
             const Icon = item.icon;
             return (
              <div key={idx} className="flex flex-col items-center text-center group bg-black/40 backdrop-blur-sm p-6 rounded-lg hover:bg-black/60 transition-all duration-300">
                 <div className="w-28 h-28 rounded-full bg-stone-900/80 border-2 border-stone-600 flex items-center justify-center mb-6 group-hover:border-gold group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_25px_rgba(217,119,6,0.3)]">
                    <Icon size={48} className="text-stone-400 group-hover:text-gold transition-colors" />
                 </div>
                 <h3 className="text-2xl font-bold text-stone-100 mb-1">{item.title}</h3>
                 <h4 className="text-sm text-stone-500 uppercase tracking-widest mb-4 font-bold">{item.subtitle}</h4>
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
    <div className="flex flex-col h-full w-full p-8 md:p-12 justify-center">
       <div className="mb-10 text-center md:text-left bg-black/30 backdrop-blur-md p-6 rounded-lg inline-block w-fit">
         <h2 className="text-4xl font-serif text-gold drop-shadow-md">{data.title}</h2>
         <p className="text-stone-300 mt-2 text-xl font-light">{data.subtitle}</p>
       </div>

       <div className="overflow-hidden rounded-sm border border-stone-700 bg-stone-950/70 backdrop-blur-xl shadow-2xl">
         <table className="w-full text-left border-collapse">
           <thead>
             <tr className="bg-black/60 text-stone-400 uppercase text-xs tracking-wider border-b border-stone-700">
               <th className="p-5 w-24 text-center">Time</th>
               <th className="p-5 w-1/3">Reality (Audio)</th>
               <th className="p-5 w-1/3">VR World (Visual)</th>
               <th className="p-5">Narrator (Inner Voice)</th>
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
                 <td className="p-5 text-blood font-mono font-bold text-base text-center bg-black/20 group-hover:text-red-500">{row.time}</td>
                 <td className="p-5 text-stone-400 text-sm italic border-r border-stone-800/30">{row.reality}</td>
                 <td className="p-5 text-gold-light text-sm border-r border-stone-800/30 font-medium">{row.vr}</td>
                 <td className="p-5 text-stone-300 font-serif text-sm pl-6 relative">
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
    <div className="flex flex-col items-center justify-center h-full text-center p-8 relative">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="mb-12 relative z-10"
      >
        <div className="relative">
             <div className="absolute inset-0 bg-red-900/20 blur-xl rounded-full animate-pulse"></div>
             <Flame size={80} className="text-stone-500 mx-auto mb-6 relative z-10" />
        </div>
        <div className="w-1 h-24 bg-gradient-to-t from-stone-500/50 to-transparent mx-auto"></div>
      </motion.div>

      <div className="bg-black/40 backdrop-blur-sm p-12 rounded-full border border-stone-800/50 shadow-2xl z-10">
          <h2 className="text-7xl font-serif text-stone-200 mb-8 tracking-widest drop-shadow-xl">{data.subtitle}</h2>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            <p className="text-3xl font-serif text-stone-400 font-light">{data.content.vision}</p>
            <div className="h-px w-32 bg-gold/50 mx-auto my-10"></div>
            <p className="text-5xl font-serif text-gold tracking-widest drop-shadow-[0_0_15px_rgba(217,119,6,0.5)]">{data.content.metaphor}</p>
          </div>
      </div>

      <div className="mt-24 z-10">
        <span className="text-stone-500 text-xl border border-stone-700/50 bg-black/50 px-8 py-3 rounded-full hover:border-gold hover:text-gold transition-all cursor-default">
           {data.note}
        </span>
      </div>
    </div>
  );
};