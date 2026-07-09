import { motion } from "framer-motion";
import { Award, ExternalLink, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import RevealText from "@/components/RevealText";
import Background3D from "@/components/Background3D";
import SEO from "@/components/SEO";

export default function Certifications() {
  const navigate = useNavigate();
  const certifications = [
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
      featured: true,
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
      featured: true,
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
      featured: true,
    },
    {
      _id: "4",
      credentialId: "4",
      credentialUrl: "",
      title: "CodeChef Starters 225",
      issuer: "CodeChef",
      date: "2024",
      description:
        "Achieved a Global Rank of 226 among active competitive programmers.",
      skills: ["Competitive Programming", "Graph Algorithms", "DP"],
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-mono selection:bg-primary selection:text-black">
      <SEO
        title="Professional Certifications | Shivanshu Mishra | Software Engineering"
        description="Verified professional certifications and achievements of Shivanshu Mishra. GATE, JEE, Competitive Programming, algorithms and data structures."
        keywords={[
          "Shivanshu Mishra achievements",
          "GATE 2026 CS",
          "JEE Advanced",
          "CodeChef Global Rank",
          "AlgoUniversity Fellowship",
          "algorithms and data structures",
        ]}
        section="Certifications"
      />
      <Background3D />

      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center border-b border-white/10 bg-background/80 backdrop-blur-xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> <span className="px-5">BACK_TO_BASE</span>
          </Button>
          <span className="text-xs font-bold tracking-widest opacity-50">
            ACHIEVEMENTS
          </span>
        </header>

        {/* Main Content */}
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Title Section */}
            <div className="mb-16">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Award className="w-5 h-5" />
                <span className="text-xs font-bold tracking-widest">
                  VERIFIED_CREDENTIALS
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                <RevealText text="ACHIEVEMENTS" />
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Industry-recognized Achievements validating expertise across CS
                Fundamental, aptitutde, programming and software engineering
                domains.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications ? (
                certifications.length > 0 ? (
                  certifications.map((cert, index) => (
                    <motion.div
                      key={cert._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-white/10 p-6 hover:border-primary/50 transition-all group bg-background/50 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <Award className="w-8 h-8 text-primary" />
                        {cert.featured && (
                          <span className="text-xs bg-primary text-black px-2 py-1 rounded font-bold">
                            FEATURED
                          </span>
                        )}
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>

                        <div className="space-y-1">
                          <p className="text-sm font-bold text-muted-foreground">
                            {cert.issuer}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {cert.date}
                          </p>
                        </div>

                        {cert.credentialId && (
                          <div className="pt-2 border-t border-white/10">
                            <p className="text-xs text-muted-foreground mb-1">
                              Credential ID
                            </p>
                            <p className="text-xs font-mono text-foreground">
                              {cert.credentialId}
                            </p>
                          </div>
                        )}

                        {cert.description && (
                          <p className="text-sm text-muted-foreground pt-2">
                            {cert.description}
                          </p>
                        )}

                        <div className="pt-3">
                          <p className="text-xs text-muted-foreground mb-2">
                            Skills
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.map((skill) => (
                              <span
                                key={skill}
                                className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded font-bold"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline font-bold pt-3 border-t border-white/10"
                          >
                            View Credential <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center border border-dashed border-white/10">
                    <Award className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground font-mono">
                      NO_CERTIFICATIONS_FOUND
                    </p>
                  </div>
                )
              ) : (
                // Loading skeletons
                Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-96 border border-white/10 animate-pulse bg-white/5"
                  />
                ))
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 px-6">
          <div className="max-w-7xl mx-auto text-center text-xs font-bold tracking-widest text-muted-foreground">
            <p>© 2026 SHIVANSHU MISHRA</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
