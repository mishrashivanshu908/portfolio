import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  BookOpen,
  Award,
  Code2,
  MessageCircle,
  Send,
  ArrowLeft,
  ExternalLink,
  LucideIcon
} from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import RevealText from "@/components/RevealText";
import Background3D from "@/components/Background3D";
import SEO from "@/components/SEO";

// Map icon strings to Lucide icon components
const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Twitter,
  BookOpen,
  Award,
  Code2,
  MessageCircle,
  Send,
};

export default function Socials() {
  const navigate = useNavigate();
  const socials = [
    {
      _id: "1",
      platform: "GitHub",
      username: "mishrashivanshu908",
      url: "https://github.com/mishrashivanshu908",
      icon: "Github",
      description: "My open-source projects and contributions.",
      featured: true
    },
    {
      _id: "2",
      platform: "LinkedIn",
      username: "shivanshu-mishra-b77156297",
      url: "https://www.linkedin.com/in/shivanshu-mishra-b77156297/",
      icon: "Linkedin",
      description: "Professional network and career updates.",
      featured: true
    },
    {
      _id: "3",
      platform: "LeetCode",
      username: "shivanshu_m",
      url: "https://leetcode.com/u/shivanshu_m/",
      icon: "Code2",
      description: "Algorithmic problem solving profile.",
      featured: true
    },
    {
      _id: "4",
      platform: "CodeChef",
      username: "shivanshum",
      url: "https://www.codechef.com/users/shivanshum",
      icon: "Award",
      description: "Competitive programming profile.",
      featured: true
    },
    
  ]; 

  const getIcon = (iconName?: string) => {
    if (!iconName) return ExternalLink;
    return iconMap[iconName] || ExternalLink;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-mono selection:bg-primary selection:text-black">
      <SEO
        title="Connect with Shivanshu Mishra | Social Links"
        description="Connect with Shivanshu Mishra on GitHub, LinkedIn, LeetCode, and CodeChef. Open for collaboration on software engineering projects and full-stack development."
        keywords={[
          "Shivanshu Mishra GitHub",
          "Shivanshu Mishra LinkedIn",
          "Shivanshu Mishra LeetCode",
          "Shivanshu Mishra CodeChef",
          "connect software engineer",
          "fullstack developer social"
        ]}
        section="Social"
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
          <span className="text-xs font-bold tracking-widest opacity-50">SOCIAL_LINKS</span>
        </header>

        {/* Main Content */}
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Title Section */}
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <Send className="w-5 h-5" />
                <span className="text-xs font-bold tracking-widest">CONNECT_WITH_ME</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                <RevealText text="SOCIAL LINKS" />
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's connect! Find me on various platforms where I share code, insights, and collaborate on innovative projects.
              </p>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {socials ? (
                socials.length > 0 ? (
                  socials.map((social, index) => {
                    const Icon = getIcon(social.icon);
                    return (
                      <motion.a
                        key={social._id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative border border-white/10 p-6 hover:border-primary/50 transition-all bg-background/50 backdrop-blur-sm overflow-hidden"
                      >
                        {/* Background gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-4">
                            <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                            {social.featured && (
                              <span className="text-xs bg-primary text-black px-2 py-1 rounded font-bold">
                                FEATURED
                              </span>
                            )}
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                              {social.platform}
                            </h3>

                            <p className="text-sm font-mono text-muted-foreground">
                              {social.username}
                            </p>

                            {social.description && (
                              <p className="text-sm text-muted-foreground pt-2">
                                {social.description}
                              </p>
                            )}

                            <div className="flex items-center gap-2 text-xs text-primary pt-3 font-bold">
                              <span>VISIT_PROFILE</span>
                              <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </motion.a>
                    );
                  })
                ) : (
                  <div className="col-span-full py-20 text-center border border-dashed border-white/10">
                    <Send className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground font-mono">NO_SOCIAL_LINKS_FOUND</p>
                  </div>
                )
              ) : (
                // Loading skeletons
                Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-64 border border-white/10 animate-pulse bg-white/5"
                  />
                ))
              )}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <p className="text-muted-foreground mb-6">Want to collaborate?</p>
              <Button
                onClick={() => navigate("/#contact")}
                size="lg"
                className="font-bold tracking-widest"
              >
                GET_IN_TOUCH
              </Button>
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
