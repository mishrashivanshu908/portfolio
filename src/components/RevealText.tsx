import { useState } from "react";
import ScrambleText from "./ScrambleText";

interface RevealTextProps {
  text: string;
  className?: string;
}

export default function RevealText({ text, className }: RevealTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      className={`cursor-default ${className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ScrambleText text={text} shuffle={isHovered} />
    </span>
  );
}