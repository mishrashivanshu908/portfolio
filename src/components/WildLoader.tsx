import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const loadingTexts = [
  "INITIALIZING_RUNTIME_ENVIRONMENT...",
  "CONNECTING_TO_CONVEX_BACKEND...",
  "FETCHING_USER_DATA...",
  "HYDRATING_COMPONENTS...",
  "OPTIMIZING_GRAPHICS_PIPELINE...",
  "READY_FOR_INTERACTION..."
];

export default function WildLoader() {
  const [textIndex, setTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 10;
      });
    }, 100);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden font-mono text-primary">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff00_1px,transparent_1px),linear-gradient(to_bottom,#00ff00_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Central Loader */}
      <div className="relative z-10 w-full max-w-md p-4 md:p-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-primary/50 p-2 relative"
        >
          {/* Corner Accents */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary" />

          <div className="bg-black/80 backdrop-blur-sm p-6 border border-primary/20">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold tracking-widest animate-pulse">SYSTEM_BOOT</span>
              <span className="text-2xl font-black">{Math.min(100, Math.floor(progress))}%</span>
            </div>

            {/* Glitchy Progress Bar */}
            <div className="h-4 bg-primary/10 w-full overflow-hidden relative border border-primary/30">
              <motion.div 
                className="h-full bg-primary relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </motion.div>
            </div>

            <div className="mt-4 h-6 overflow-hidden">
              <motion.p 
                key={textIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-xs md:text-sm font-bold tracking-widest text-primary/80"
              >
                {">"} {loadingTexts[textIndex]}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 hidden md:block">
          <div className="flex flex-col gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                className="w-2 h-2 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>
        
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 hidden md:block">
          <div className="flex flex-col gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                className="w-2 h-2 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Status */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-[10px] text-primary/40 tracking-[0.5em]">SECURE_CONNECTION_ESTABLISHED</p>
      </div>
    </div>
  );
}