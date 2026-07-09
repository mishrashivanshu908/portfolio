import Background3D from "@/components/Background3D";
import Terminal from "@/components/Terminal";
import NavbarItem from "@/components/NavbarItem";
import RevealText from "@/components/RevealText";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Cpu, FolderOpen, Globe, Layers, Mail, Terminal as TerminalIcon, User, Code2, ExternalLink, Award, Image as ImageIcon } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import SEO from "@/components/SEO";
import MapVisual from "@/components/MapVisual";

const skills = {
  "LANGUAGES": ["JavaScript", "TypeScript", "C", "C++", "Python", "SQL", "HTML", "CSS"],
  "FRAMEWORKS": ["React.js", "Next.js 15", "Node.js", "Express.js", "Tailwind CSS"],
  "DEVOPS_AI": ["Git", "Docker", "scikit-learn", "pandas", "NumPy", "Matplotlib"],
  "CLOUD_DB": ["MongoDB", "AWS", "PostgreSQL", "MySQL", "Linux", "Redis"],
};

const techStack = [
  "C++", "JAVASCRIPT", "TYPESCRIPT", "REACT", "NODE.JS", "PYTHON", "AWS", "NEXT.JS", "DOCKER", "MONGODB", "MONGOOSE"
];

export default function Landing() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const featuredProjects = [
    {
      _id: "1",
      title: "Bandhan",
      credentialId: "1",
      credentialUrl: "https://bandhan-matchmaker-mvp.vercel.app/",
      description:
        "AI-driven matchmaking dashboard with SSR for low latency, featuring strict db schemas and LLM pipeline for compatibility emails.",
      category: "Full Stack",
      tech: "Next.js 15 / React / TypeScript / Tailwind CSS / MongoDB / Gemini API",
      year: "2024",
      isPhantomCode: true,
    },
    {
      _id: "2",
      title: "CodeVerdict",
      credentialId: "2",
      credentialUrl: "https://github.com/mishrashivanshu908/code-verdict",
      description:
        "Microservices-based Online Judge platform with secure Docker sandboxed execution engine and Gemini API space-time complexity analysis.",
      category: "Full Stack",
      tech: "React / Node.js / Express / MongoDB / Docker / AWS",
      year: "2024",
      isPhantomCode: true,
    },
    {
      _id: "3",
      title: "Mentor-Mentee matcher",
      credentialId: "3",
      credentialUrl:
        "https://github.com/mishrashivanshu908/mentor-mentee-matching-system",
      description:
        "Built a capacity-constrained allocation engine using cosine similarity, assigning all 120 students across 10 faculty mentors with 15 student cap, achieving 93.3% top-choice assignments and zero third-choice reassignments via a greedy overflow cascade. Addressed the System Cold Start Problem by designing a Cascade Hybrid architecture that sequentially builds a peer-similarity interaction matrix, generating a collaborative signal for 90.8% students and outperforming the baseline Content-Based model in mean match score (0.8614 vs 0.8196). Validated model superiority using Wilcoxon Signed-Rank Test (p = 0) and Spearman Rank Correlation (ρ = 0.716).",
      category: "Data Science / ML",
      tech: "Python / scikit-learn / pandas / NumPy / SciPy / Matplotlib / OpenPyXL",
      year: "2024",
      isPhantomCode: false,
    },
  ];

  const featuredCertifications = [
    {
      _id: "1",
      credentialId: "1",
      credentialUrl: "",
      title: "GATE 2026 (CS & IT)",
      issuer: "GATE",
      date: "2026",
      description:
        "Secured full marks in Aptitude, DBMS, C-Programming and Algorithms.",
      skills: ["CS Fundamentals", "Algorithms", "DBMS", "C-Programming"],
    },
    {
      _id: "2",
      credentialId: "2",
      credentialUrl: "",
      title: "JEE Mains & Advanced (2023)",
      issuer: "NTA",
      date: "2023",
      description: "Ranked under 22,000 out of 1.1M+ candidates nationwide.",
      skills: ["Problem Solving", "Mathematics", "Physics", "Chemistry"],
    },
    {
      _id: "3",
      credentialId: "3",
      credentialUrl: "",
      title: "AlgoUniversity Fellowship (ATF)",
      issuer: "AlgoUniversity",
      date: "2024",
      description: "Top 7% of 20,000+ applicants across India.",
      skills: ["Data Structures", "Algorithms"],
    },
  ];

  return (
    <div ref={containerRef} className="min-h-dvh bg-transparent text-foreground font-mono selection:bg-primary selection:text-black">
      <SEO
        title="Shivanshu Mishra | Fullstack Developer | Software Engineer"
        description="Shivanshu Mishra - Professional full-stack developer and software engineer. Specializing in React, Next.js, Node.js, and Cloud Infrastructure. Portfolio showcasing innovative projects and applications."
        keywords={[
          "Shivanshu Mishra portfolio",
          "mishrashivanshu908 github",
          "shivanshu mishra developer",
          "full stack developer portfolio",
          "software engineer",
          "React developer",
          "TypeScript developer"
        ]}
      />

      {/* Hidden SEO Content - Keyword Rich */}
      <div className="sr-only" aria-hidden="true">
        <h1>Shivanshu Mishra - Professional Full-stack Developer</h1>
        <h2>About Shivanshu Mishra</h2>
        <p>Shivanshu Mishra is a professional full-stack software engineer specializing in modern web technologies, scalable architectures, and algorithms.</p>
      </div>

      <Background3D />

      {/* Fixed Header / HUD */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
        <div className="flex flex-col pl-12 md:pl-0">
          <span className="px-20 text-xs font-bold tracking-widest opacity-50 animate-glitch">PORTFOLIO_V2.0</span>
        </div>
        <div className="flex flex-col items-end text-right">
          <span className="text-xs font-bold tracking-widest opacity-50">STATUS</span>
          <span className="flex items-center gap-2 text-primary font-bold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            ONLINE
          </span>
        </div>
      </header>

      {/* Floating Glassmorphic Nav - Bottom Centered */}
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1.5 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-primary/10"
      >
        {[
          { label: "SKILLS", icon: Cpu, href: "#skills" },
          { label: "PROJECTS", icon: FolderOpen, href: "#projects" },
          { label: "GALLERY", icon: ImageIcon, href: "/gallery" },
          { label: "CERTS", icon: Award, href: "#certifications" },
          { label: "ABOUT", icon: User, href: "/about" },
          { label: "CONTACT", icon: Mail, href: "#contact" }
        ].map((item) => (
          <NavbarItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="border-l-2 border-primary/50 pl-6">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-bold tracking-widest mb-2 text-sm md:text-base"
              >
                FULLSTACK with AI INTEGRATION
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-[13vw] lg:text-[8vw] leading-[0.8] font-black tracking-tighter mb-6 break-words"
              >
                <span className="animate-glitch inline-block">SHIVANSHU</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">MISHRA</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-2xl text-muted-foreground max-w-2xl font-bold"
              >
                BUILDING SCALABLE FULLSTACK SYSTEMS
              </motion.p>
            </div>

            <div className="hidden lg:flex justify-center w-full">
              <Terminal />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8"
          >
            <div className="space-y-4">
              <TerminalIcon className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">ENGINEERING</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Architecting scalable systems with clean, maintainable code. 
                Specializing in high-performance web applications.
              </p>
            </div>
            <div className="space-y-4">
              <Layers className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">ALGORITHMS</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Optimizing performance with robust data structures and 
                advanced algorithmic problem-solving.
              </p>
            </div>
            <div className="space-y-4">
              <Globe className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">AI INTEGRATION</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Integrating LLMs and AI pipelines to create intelligent, 
                data-driven application features.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-6 text-xs font-bold tracking-widest opacity-50"
        >
          SCROLL_TO_EXPLORE ↓
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 px-6 relative z-10 bg-background border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              <RevealText text="TECHNICAL_ARSENAL" />
            </h2>
            <p className="text-muted-foreground max-w-xl">
              A curated stack of technologies used to build robust, scalable, and decentralized applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 p-6 hover:border-primary/50 transition-colors group"
              >
                <h3 className="text-primary font-bold tracking-widest mb-6 border-b border-white/10 pb-2">
                  <RevealText text={category} />
                </h3>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                      <span className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List Section */}
      <section id="projects" className="py-20 md:py-32 px-6 relative z-10 bg-background/80 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <div>
              <div className="flex items-center gap-2 text-primary mb-2">
                <FolderOpen className="w-4 h-4" />
                <span className="text-xs font-bold tracking-widest">DIRECTORY_ROOT</span>
              </div>
              <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50">
                <RevealText text="PHANTOM_CODES" />
              </h2>
              <p className="text-muted-foreground max-w-xl text-base md:text-lg border-l-2 border-primary/30 pl-4">
                My personal collection of apps and systems engineered to scale, perform, and solve real-world challenges.
              </p>
            </div>
            <span className="text-primary font-bold text-xl hidden md:block opacity-50">
              // SYSTEM_READY
            </span>
          </div>

          <div className="flex flex-col">
            {featuredProjects ? (
              featuredProjects.length > 0 ? (
                featuredProjects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative border-t border-white/10 py-10 hover:bg-white/5 transition-colors cursor-pointer"
                    onClick={() => navigate("/projects")}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-2 pl-4 border-l-2 border-transparent group-hover:border-primary transition-colors">
                        <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-muted-foreground">
                          <span className="text-primary">0{index + 1}</span>
                          <span>// {project.category.toUpperCase()}</span>
                          <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                          <span>{project.year || "2024"}</span>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center gap-3">
                          <RevealText text={project.title} />
                          {project.isPhantomCode && (
                            <span className="text-[10px] md:text-xs border border-primary/50 text-primary px-1.5 py-0.5 rounded-full tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                              PHANTOM
                            </span>
                          )}
                        </h3>
                        <p className="text-muted-foreground line-clamp-1 max-w-xl text-sm md:text-base group-hover:text-foreground/80 transition-colors">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-12 md:text-right">
                        <div className="hidden md:block space-y-1">
                          <p className="text-[10px] font-bold text-muted-foreground tracking-widest">STACK_TRACE</p>
                          <p className="text-xs font-bold text-primary/70 font-mono">
                            {project.tech.split("/").slice(0, 3).join(" / ")}
                            {project.tech.split("/").length > 3 && "..."}
                          </p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-4 transition-all duration-300" />
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="py-20 text-center border-y border-dashed border-white/10">
                  <p className="text-muted-foreground font-mono">NO_ARCHIVES_FOUND</p>
                </div>
              )
            ) : (
              // Loading Skeletons
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-32 border-t border-white/10 animate-pulse flex items-center">
                  <div className="space-y-2 w-full">
                    <div className="h-4 w-24 bg-white/10 rounded" />
                    <div className="h-12 w-1/2 bg-white/5 rounded" />
                  </div>
                </div>
              ))
            )}
          </div>
            
          <div className="mt-16 flex justify-center">
            <Button 
              onClick={() => navigate("/projects")}
              size="lg" 
              variant="outline"
              className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 border-primary/50 text-primary hover:bg-primary hover:text-black rounded-none group"
            >
              ACCESS_FULL_ARCHIVE <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack Ticker */}
      <section className="py-5 md:py-5 bg-primary text-black overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-4xl md:text-8xl font-black tracking-tighter mx-4 md:mx-8">
              {tech} <span className="text-black/20">/</span>
            </span>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 md:py-32 px-6 relative z-10 bg-background/80 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Award className="w-4 h-4" />
              <span className="text-xs font-bold tracking-widest">VERIFIED_CREDENTIALS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              <RevealText text="Achievements" />
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Industry-recognized Achievements validating expertise across CS Fundamental, aptitutde, programming and software engineering domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCertifications ? (
              featuredCertifications.length > 0 ? (
                featuredCertifications.map((cert, index) => (
                  <motion.div
                    key={cert._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-white/10 p-6 hover:border-primary/50 transition-all group bg-background/50"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Award className="w-8 h-8 text-primary" />
                      <span className="text-xs font-bold text-muted-foreground">{cert.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                    {cert.description && (
                      <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{cert.description}</p>
                    )}
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded font-bold">
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="text-xs text-muted-foreground self-center">+{cert.skills.length - 3}</span>
                      )}
                    </div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-xs text-primary hover:underline font-bold"
                      >
                        View Credential <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center border-y border-dashed border-white/10">
                  <p className="text-muted-foreground font-mono">NO_CERTIFICATIONS_FOUND</p>
                </div>
              )
            ) : (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-64 border border-white/10 animate-pulse bg-white/5" />
              ))
            )}
          </div>

          {featuredCertifications && featuredCertifications.length > 0 && (
            <div className="mt-16 flex justify-center">
              <Button
                onClick={() => navigate("/certifications")}
                size="lg"
                variant="outline"
                className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 border-primary/50 text-primary hover:bg-primary hover:text-black rounded-none group"
              >
                VIEW_ALL_CERTIFICATIONS <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-[60vh] md:min-h-[80vh] flex items-center px-6 relative py-20 md:py-0">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8">
              <RevealText text="LET'S BUILD" /><br />
              <RevealText text="THE IMPOSSIBLE" />
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-md">
              Open for collaborations on ambitious full-stack applications and high-scale systems.
            </p>
            
            <div className="flex flex-col gap-4 items-start">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-primary hover:text-black rounded-none h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold tracking-tight transition-all"
                onClick={() => window.location.href = "mailto:mishrashivanshu908@gmail.com"}
              >
                INITIATE_CONTACT <ArrowRight className="ml-2" />
              </Button>
              
              <div className="flex gap-6 mt-8">
                {[
                  { label: "GITHUB", href: "https://github.com/mishrashivanshu908" },
                  { label: "LINKEDIN", href: "https://www.linkedin.com/in/shivanshu-mishra-b77156297/" },
                  { label: "LEETCODE", href: "https://leetcode.com/u/shivanshu_m/" }
                ].map((social) => (
                  <a 
                    key={social.label} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold tracking-widest hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative hidden md:block h-full min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 pointer-events-none z-10" />
            <div className="h-full w-full border border-white/10 flex flex-col">
              {/* Map Visual Component */}
              <div className="flex-1 relative overflow-hidden">
                <MapVisual />
              </div>
              
              {/* Location Info Footer */}
              <div className="p-6 bg-black/50 backdrop-blur-sm border-t border-white/10">
                <div className="font-mono text-xs text-muted-foreground grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-white/40">LOCATION</p>
                    <p className="text-white font-bold">BHOPAL, INDIA</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white/40">TIMEZONE</p>
                    <p className="text-white font-bold">IST (UTC+5:30)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white/40">AVAILABILITY</p>
                    <p className="text-white font-bold">2026</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white/40">STATUS</p>
                    <p className="text-primary animate-pulse font-bold">_OPEN_TO_WORK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Me Section */}
      <section className="py-20 md:py-32 px-6 relative z-10 bg-background/80 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Mail className="w-5 h-5" />
              <span className="text-xs font-bold tracking-widest">CONNECT_WITH_ME</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              <RevealText text="LET'S CONNECT" />
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Find me across various platforms where I share code, insights, and solve algorithmic challenges.
              Open for full-stack engineering roles and exciting collaborations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => navigate("/socials")}
                size="lg"
                className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 font-bold tracking-widest rounded-none group"
              >
                VIEW_ALL_SOCIALS
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => window.location.href = "mailto:mishrashivanshu908@gmail.com"}
                size="lg"
                variant="outline"
                className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 border-primary/50 text-primary hover:bg-primary hover:text-black rounded-none font-bold tracking-widest"
              >
                EMAIL_ME
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Quick Social Links */}
            <div className="flex flex-wrap gap-4 justify-center items-center mt-12 pt-8 border-t border-white/10">
              {[
                { label: "GITHUB", href: "https://github.com/mishrashivanshu908", icon: "💻" },
                { label: "LINKEDIN", href: "https://www.linkedin.com/in/shivanshu-mishra-b77156297/", icon: "💼" },
                { label: "LEETCODE", href: "https://leetcode.com/u/shivanshu_m/", icon: "🧠" },
                { label: "CODECHEF", href: "https://www.codechef.com/users/shivanshum", icon: "🏆" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-primary/50 transition-all bg-white/5 hover:bg-primary/10"
                >
                  <span className="text-lg">{social.icon}</span>
                  <span className="text-xs font-bold tracking-widest group-hover:text-primary transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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