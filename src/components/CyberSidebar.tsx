import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Menu, X, Home, FolderOpen, Image as ImageIcon, 
  Award, Share2, User, Terminal, Settings, LogOut 
} from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "BASE", icon: Home, path: "/" },
  { label: "PROJECTS", icon: FolderOpen, path: "/projects" },
  { label: "MEMORY_DUMP", icon: ImageIcon, path: "/gallery" },
  { label: "CREDENTIALS", icon: Award, path: "/certifications" },
  { label: "NETWORK", icon: Share2, path: "/socials" },
  { label: "PROFILE", icon: User, path: "/about" },
];

export default function CyberSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Toggle Button - Fixed Top Left */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-[60] p-2 bg-black/50 backdrop-blur-md border border-primary/20 text-primary hover:bg-primary hover:text-black transition-all rounded-sm group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55]"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="fixed top-0 left-0 bottom-0 w-[85vw] sm:w-80 bg-black border-r border-primary/30 z-[60] flex flex-col shadow-[0_0_50px_rgba(0,255,0,0.1)]"
            >
              {/* Header */}
              <div className="p-8 border-b border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,0,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[background-position_3s_infinite]" />
                <h2 className="text-2xl font-black tracking-tighter text-white relative z-10">
                  SHIVANSHU<span className="text-primary">.NEXUS</span>
                </h2>
                <p className="text-[10px] text-muted-foreground tracking-widest mt-1 font-mono">
                  SYSTEM_VERSION_2.0
                </p>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-8 px-4 space-y-2">
                {menuItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.button
                      key={item.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => navigate(item.path)}
                      className={cn(
                        "w-full flex items-center gap-4 p-4 rounded-sm transition-all duration-300 group relative overflow-hidden border border-transparent",
                        isActive 
                          ? "bg-primary/10 border-primary/50 text-primary" 
                          : "hover:bg-white/5 hover:border-white/10 text-muted-foreground hover:text-white"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                        />
                      )}
                      <item.icon className={cn("w-5 h-5 transition-transform group-hover:scale-110", isActive && "animate-pulse")} />
                      <span className="font-mono font-bold tracking-widest text-sm">
                        {item.label}
                      </span>
                      
                      {/* Hover Effect Glitch */}
                      <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 pointer-events-none" />
                    </motion.button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/10 bg-black/50">
                <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                  <span>STATUS: ONLINE</span>
                </div>
                <div className="mt-4 text-[10px] text-white/20 text-center tracking-[0.2em]">
                  // END_OF_LINE
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}