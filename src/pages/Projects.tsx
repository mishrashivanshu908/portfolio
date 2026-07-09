import Background3D from "@/components/Background3D";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Projects() {
  const navigate = useNavigate();
  const allProjects = [
    {
      _id: "1",
      title: "Bandhan",
      description:
        "Implemented an AI-driven matchmaking dashboard backed by pre-rendered infrastructure, utilizing SSR to bypass client-side network waterfalls and decrease initial payload latency by 40%. Engineered strict database schemas mapped to native backend procedures, orchestrating targeted cache invalidation to guarantee state synchronization across 100+ user records. Integrated a LLM pipeline to evaluate parameters, auto-generate matching Reports, and draft customized compatibility emails, coupling the feature with Toast notifications for instant visual feedback, shrinking manual task duration by 95% to 2 seconds per match.",
      category: "Full Stack / AI",
      tech: "Next.js 15 / React / TypeScript / Tailwind CSS / MongoDB / Mongoose / Gemini API / Node.js",
      year: "2024",
      isPhantomCode: true,
      link: "https://bandhan-matchmaker-mvp.vercel.app/",
    },
    {
      _id: "2",
      title: "CodeVerdict",
      description:
        "Architected a microservices-based Online Judge platform using React, Node.js/Express, and MongoDB to manage and execute code submissions for 100+ concurrent users. Constructed a secure, sandboxed execution engine for C++, Java, and Python using Docker containers with strict CPU/memory boundaries, delivering instant test-case feedback via Monaco Editor. Deployed infrastructure on AWS with robust authentication (JWT, httpOnly cookies) and integrated the Google Gemini API to provide AI-driven space-time complexity analysis.",
      category: "Full Stack / Cloud",
      tech: "React / Node.js / Express / MongoDB / Docker / REST APIs / AWS",
      year: "2024",
      isPhantomCode: true,
      link: "https://github.com/mishrashivanshu908/code-verdict",
    },
    {
      _id: "3",
      title: "Mentor-Mentee matcher",
      description:
        "Built a capacity-constrained allocation engine using cosine similarity, assigning all 120 students across 10 faculty mentors with 15 student cap, achieving 93.3% top-choice assignments and zero third-choice reassignments via a greedy overflow cascade. Addressed the System Cold Start Problem by designing a Cascade Hybrid architecture that sequentially builds a peer-similarity interaction matrix, generating a collaborative signal for 90.8% students and outperforming the baseline Content-Based model in mean match score (0.8614 vs 0.8196). Validated model superiority using Wilcoxon Signed-Rank Test (p = 0) and Spearman Rank Correlation (ρ = 0.716).",
      category: "Data Science / ML",
      tech: "Python / scikit-learn / pandas / NumPy / SciPy / Matplotlib / OpenPyXL",
      year: "2024",
      isPhantomCode: false,
      link: "https://github.com/mishrashivanshu908/mentor-mentee-matching-system",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects?.filter(project => {
    const searchLower = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.tech.toLowerCase().includes(searchLower) ||
      project.category.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-mono selection:bg-primary selection:text-black">
      <SEO
        title="Projects Portfolio | Shivanshu Mishra | Full-Stack & Software Engineering"
        description="Explore innovative software engineering projects by Shivanshu Mishra. Scalable full-stack applications, ML integrations, algorithms, and microservices architecture."
        keywords={[
          "Shivanshu Mishra projects",
          "software engineering portfolio",
          "full-stack projects",
          "microservices projects",
          "machine learning portfolio",
          "React developer portfolio",
          "Node.js developer work",
          "AWS deployment projects"
        ]}
        section="Projects"
      />
      <Background3D />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
        <div className="flex flex-col pointer-events-auto gap-4">
          <Button 
            variant="ghost" 
            className="p-0 hover:bg-transparent hover:text-primary text-white transition-colors w-fit"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> BACK_TO_BASE
          </Button>
        </div>
        <div className="flex flex-col items-end text-right">
          <span className="text-xs font-bold tracking-widest opacity-50">ARCHIVE_STATUS</span>
          <span className="text-primary font-bold">UNLOCKED</span>
        </div>
      </header>

      <main className="pt-24 md:pt-32 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 md:mb-20"
          >
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">
              PROJECT_ARCHIVE
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-between items-end">
              <p className="text-muted-foreground max-w-xl text-base md:text-lg">
                Complete database of deployed protocols, experiments, and production systems.
              </p>
              
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="SEARCH_DATABASE..." 
                  className="pl-10 bg-black/20 border-white/10 focus:border-primary/50 h-12 font-mono"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {filteredProjects ? (
              filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative border border-white/10 bg-black/20 backdrop-blur-sm p-8 hover:border-primary/50 transition-all hover:bg-white/5"
                  >
                    <div className="flex flex-col md:flex-row gap-8 justify-between">
                      <div className="space-y-4 flex-1">
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-bold text-primary/50 border border-primary/20 px-2 py-1 rounded-full">
                            {project.category}
                          </span>
                          <span className="text-xs font-bold text-muted-foreground">
                            {project.year}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-primary transition-colors flex items-center gap-3">
                          {project.title}
                          {project.isPhantomCode && (
                            <span className="text-xs border border-primary/50 text-primary px-2 py-0.5 rounded-full tracking-widest">
                              PHANTOM
                            </span>
                          )}
                        </h3>
                        
                        <p className="text-muted-foreground max-w-2xl leading-relaxed">
                          {project.description}
                        </p>

                        <div className="pt-4">
                          <span className="text-xs font-bold tracking-widest text-muted-foreground border-t border-white/10 pt-4 inline-block">
                            {project.tech}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start justify-end">
                        <Button 
                          variant="outline" 
                          className="rounded-none border-white/20 hover:bg-primary hover:text-black hover:border-primary transition-all group-hover:translate-x-2"
                          onClick={() => project.link && window.open(project.link, "_blank")}
                        >
                          VIEW_SOURCE <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-20 border border-dashed border-white/10">
                  <p className="text-muted-foreground">NO_MATCHING_RECORDS_FOUND</p>
                </div>
              )
            ) : (
              <div className="text-center text-muted-foreground animate-pulse">
                LOADING_DATABASE...
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest text-muted-foreground">
          <div className="flex flex-col gap-2">
            <p>© 2026 SHIVANSHU MISHRA</p>
            <p className="text-[10px] opacity-50 font-normal normal-case max-w-md">
              A personal collection of scalable apps and algorithmic solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}