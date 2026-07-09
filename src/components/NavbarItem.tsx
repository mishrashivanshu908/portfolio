import { useState } from "react";
import { LucideIcon } from "lucide-react";
import ScrambleText from "./ScrambleText";
import { useNavigate, useLocation } from "react-router";

interface NavbarItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
}

export default function NavbarItem({ label, icon: Icon, href }: NavbarItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
    } else if (href.startsWith("#") && location.pathname !== "/") {
      // If we are not on home page and clicking a hash link, go to home + hash
      e.preventDefault();
      navigate("/" + href);
    }
    // Otherwise (hash link on home page), let default behavior happen
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className="group flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-widest text-muted-foreground hover:text-primary hover:bg-white/5 transition-all rounded-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
      <span className="hidden md:inline-block">
        <ScrambleText text={label} shuffle={isHovered} />
      </span>
    </a>
  );
}