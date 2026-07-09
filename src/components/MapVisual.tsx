import { motion } from "framer-motion";

export default function MapVisual() {
  return (
    <div className="relative w-full h-full min-h-[300px] bg-[#0a0a0a] border border-white/10 overflow-hidden group">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
      
      {/* Stylized Map Outline (Abstract) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 400">
        <path 
          d="M150,100 Q200,50 250,100 T350,150 T450,100 T550,150 T650,100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-primary"
        />
        <path 
          d="M100,200 Q200,250 300,200 T500,250 T700,200" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-primary"
        />
        {/* Abstract Continents */}
        <path d="M50,150 L100,100 L150,150 L100,200 Z" fill="currentColor" className="text-white/10" />
        <path d="M600,100 L650,50 L700,100 L650,150 Z" fill="currentColor" className="text-white/10" />
        <path d="M300,250 L350,200 L400,250 L350,300 Z" fill="currentColor" className="text-white/10" />
      </svg>

      {/* Location Pin for Indore, India (Approximate relative position) */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="absolute top-[38%] left-[70%] transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_20px_rgba(0,255,0,0.8)]" />
          <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping opacity-75" />
          
          {/* Connecting Lines */}
          <svg className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible">
            <motion.circle 
              cx="128" cy="128" r="60" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              className="text-primary/20"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M128,128 L200,80"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/40"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 1 }}
            />
            <motion.path
              d="M128,128 L60,180"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/40"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            />
          </svg>
        </div>
        
        {/* Label */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-sm border border-primary/30 px-2 py-1 rounded text-[10px] font-bold text-primary tracking-widest"
        >
          INDORE_HQ
        </motion.div>
      </motion.div>

      {/* Overlay Info */}
      <div className="absolute bottom-4 left-4 text-[10px] font-mono text-muted-foreground">
        <p>COORDINATES: 22.7196° N, 75.8577° E</p>
        <p>STATUS: ACTIVE_NODE</p>
      </div>
    </div>
  );
}
