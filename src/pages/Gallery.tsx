import Background3D from "@/components/Background3D";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Search } from "lucide-react";
import { useNavigate } from "react-router";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Gallery() {
  const navigate = useNavigate();
  // Using explicit typing for the empty array to avoid TypeScript inference issues
  const galleryItems: { _id: string, caption: string, imageUrl: string, location?: string, date?: string }[] = [];
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGallery = galleryItems?.filter(item => {
    const searchLower = searchQuery.toLowerCase();
    return (
      item.caption.toLowerCase().includes(searchLower) ||
      (item.location && item.location.toLowerCase().includes(searchLower)) ||
      (item.date && item.date.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-dvh bg-background text-foreground font-mono selection:bg-primary selection:text-black">
      <SEO
        title="Memory Dump | Shivanshu Mishra | Gallery"
        description="A visual archive of events and moments from Shivanshu Mishra's journey in tech."
        keywords={["developer lifestyle", "coding journey", "shivanshu mishra gallery"]}
        section="Gallery"
      />
      <Background3D />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
        <div className="flex flex-col pointer-events-auto pl-12 md:pl-0">
          <Button 
            variant="ghost" 
            className="p-0 hover:bg-transparent hover:text-primary text-white transition-colors"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> BACK_TO_BASE
          </Button>
        </div>
        <div className="flex flex-col items-end text-right">
          <span className="text-xs font-bold tracking-widest opacity-50">VISUAL_LOGS</span>
          <span className="text-primary font-bold">ONLINE</span>
        </div>
      </header>

      <main className="pt-24 md:pt-32 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 md:mb-20"
          >
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-center md:text-left">
              MEMORY_DUMP
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-between items-end">
              <p className="text-muted-foreground max-w-xl text-base md:text-lg text-center md:text-left">
                Visual fragments from the physical realm. Hackathons, deployments, and caffeine-fueled nights.
              </p>
              
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="SEARCH_MEMORIES..." 
                  className="pl-10 bg-black/20 border-white/10 focus:border-primary/50 h-12 font-mono"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredGallery ? (
              filteredGallery.length > 0 ? (
                filteredGallery.map((item, index) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, rotate: (index % 2 === 0 ? -2 : 2) }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    whileHover={{ scale: 1.02, rotate: (index % 2 === 0 ? 1 : -1), zIndex: 10 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4 }}
                    className="group relative bg-white p-4 pb-16 shadow-2xl transform transition-all duration-300"
                    style={{
                      transform: `rotate(${index % 3 === 0 ? -2 : index % 3 === 1 ? 1 : 3}deg)`
                    }}
                  >
                    {/* Tape effect */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm rotate-1 shadow-sm z-10 border-l border-r border-white/40" />
                    
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-4 relative">
                      <img 
                        src={item.imageUrl} 
                        alt={item.caption}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        {(item.date || item.location) && (
                          <div className="flex justify-between text-white text-xs font-bold tracking-widest">
                            {item.date && <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>}
                            {item.location && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {item.location}</span>}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="font-handwriting text-black text-center">
                      <p className="font-bold text-lg leading-tight font-mono uppercase tracking-tighter">{item.caption}</p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 border border-dashed border-white/10">
                  <p className="text-muted-foreground">NO_VISUAL_DATA_FOUND</p>
                </div>
              )
            ) : (
              // Loading skeletons
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-white/5 p-4 pb-16 animate-pulse">
                  <div className="aspect-[4/3] bg-white/10 mb-4" />
                  <div className="h-4 bg-white/10 w-3/4 mx-auto" />
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest text-muted-foreground">
          <div className="flex flex-col gap-2">
            <p>© 2026 SHIVANSHU MISHRA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}