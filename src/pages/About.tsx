import Background3D from "@/components/Background3D";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, Gamepad2, Car, Coffee } from "lucide-react";
import { useNavigate } from "react-router";
import SEO from "@/components/SEO";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground font-mono selection:bg-primary selection:text-black">
      <SEO
        title="About Shivanshu Mishra | Fullstack Developer | Ml ops Engineer"
        description="Meet Shivanshu Mishra - Professional full-stack developer and software engineer. Expert in React, Next.js, Node.js, AI integration and Cloud Infrastructure. Specialized in scalable architectures and algorithmic problem-solving."
        keywords={[
          "about Shivanshu Mishra",
          "shivanshu mishra biography",
          "fullstack developer bio",
          "software engineer about",
          "Shivanshu Mishra background"
        ]}
        section="About"
      />
      <Background3D />

      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
        <div className="flex flex-col pointer-events-auto">
          <Button
            variant="ghost"
            className="p-0 hover:bg-transparent hover:text-primary text-white transition-colors"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> BACK_TO_BASE
          </Button>
        </div>
      </header>

      <main className="pt-24 md:pt-32 px-6 pb-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              WHO_IS_THIS_GUY?
            </h1>
            <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Hey there! 👋 I'm Shivanshu Mishra,
                an <span className="text-primary font-bold">engineering student</span> who loves 
                building scalable web applications and solving complex algorithmic challenges.
              </p>
              <p>
                I thrive on turning complex problems into elegant code. Whether it's architecting
                a new microservice or optimizing a database query, I'm always looking for ways
                to improve performance and user experience.
              </p>
              <p>
                When I'm not pushing code to GitHub or participating in competitive programming contests, you'll find me
                exploring new technologies or sharing my knowledge with the community.
              </p>
            </div>
          </div>

          {/* Fun Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-white/10 p-6 bg-gradient-to-br from-primary/10 to-transparent hover:border-primary/30 transition-all duration-300">
              <Code2 className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-2xl font-bold mb-2">10000+</h3>
              <p className="text-sm text-muted-foreground">Lines of Code (mostly bugs), Obviously Vibe coding</p>
            </div>
            <div className="border border-white/10 p-6 bg-gradient-to-br from-primary/10 to-transparent hover:border-primary/30 transition-all duration-300">
              <Coffee className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-2xl font-bold mb-2">∞</h3>
              <p className="text-sm text-muted-foreground">Cups of Coffee Consumed</p>
            </div>
            <div className="border border-white/10 p-6 bg-gradient-to-br from-primary/10 to-transparent hover:border-primary/30 transition-all duration-300">
              <Gamepad2 className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-2xl font-bold mb-2">0</h3>
              <p className="text-sm text-muted-foreground">Hours of Sleep (who needs that?)</p>
            </div>
          </div>

          {/* What I'm About */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">THE_MISSION</h2>
              <p className="text-muted-foreground">
                Build high-performance web applications, master advanced algorithms, and create
                software that solves real-world problems efficiently.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">THE_DREAM</h2>
              <p className="text-muted-foreground">
                To become a world-class software engineer, contribute significantly to open-source,
                and build systems that scale to millions of users.
              </p>
            </div>
          </div>

          {/* Current Status */}
          <div className="border border-primary/30 p-8 bg-primary/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-primary">CURRENT_STATUS.exe</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-primary text-2xl">🎓</div>
                <div>
                  <h4 className="font-bold">Engineering Student at IIIT Bhopal</h4>
                  <p className="text-sm text-muted-foreground">
                    Pursuing B.Tech in Computer Science and Technology (CGPA: 8.1/10).
                    Focused on Data Structures, Algorithms, Databases, and ML.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-primary text-2xl">💻</div>
                <div>
                  <h4 className="font-bold">CP Executive & Outreach Lead</h4>
                  <p className="text-sm text-muted-foreground">
                    Leading competitive programming initiatives at Codame and
                    managing campus outreach for Arunoday club.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-primary text-2xl">🏆</div>
                <div>
                  <h4 className="font-bold">Competitive Programmer</h4>
                  <p className="text-sm text-muted-foreground">
                    Solved 700+ algorithmic problems across LeetCode and CodeChef.
                    Achieved Global Rank 226 in CodeChef Starters 225.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="border border-white/10 p-8 bg-black/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">TECHNICAL_SKILLS</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm text-primary font-bold mb-2">LANGUAGES & DEVOPS</h4>
                <p className="text-sm text-muted-foreground">
                  JavaScript, TypeScript, C, C++, Python, SQL, HTML, CSS, Git, Docker, Linux
                </p>
              </div>
              <div>
                <h4 className="text-sm text-primary font-bold mb-2">FRAMEWORKS & CLOUD</h4>
                <p className="text-sm text-muted-foreground">
                  React.js, Next.js 15, Node.js, Express.js, Tailwind CSS, MongoDB, AWS, PostgreSQL, Redis
                </p>
              </div>
            </div>
          </div>

          {/* The Real Talk */}
          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold mb-4">THE_REAL_TALK</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am deeply passionate about computer science and problem-solving. My journey
                has led me to build scalable full-stack applications and tackle complex algorithmic
                challenges on competitive programming platforms.
              </p>
              <p>
                I believe in writing clean, maintainable code and continuously expanding my skill set.
                Whether it's mastering a new framework or optimizing a system's architecture, I approach
                every challenge with dedication and a desire to learn.
              </p>
              <p className="text-primary font-bold">
                TL;DR: Engineering student. Full-stack developer. Competitive programmer. Constant learner.
              </p>
            </div>
          </div>

          {/* Final Statement */}
          <div className="border border-primary/30 p-8 md:p-12 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm text-center">
            <div className="max-w-2xl mx-auto">
              <p className="text-base md:text-lg leading-relaxed">
                Code is poetry. Architecture is art.{" "}
                <span className="text-primary font-bold">I write both.</span>
              </p>
            </div>
          </div>

          {/* Connect Section */}
          <div className="border-t border-white/10 pt-8 text-center">
            <h3 className="text-2xl font-bold mb-4">WANT_TO_COLLABORATE?</h3>
            <p className="text-muted-foreground mb-6">
              If you've read this far and still want to work with me, you're either brave or crazy.
              Either way, I like you already. Let's build something cool!
            </p>
            <Button
              onClick={() => navigate("/socials")}
              size="lg"
              className="font-bold tracking-widest group"
            >
              FIND_ME_ONLINE
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
