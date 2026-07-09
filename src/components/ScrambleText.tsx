import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+[]{}|;:,.<>?";

interface ScrambleTextProps {
  text: string;
  className?: string;
  shuffle: boolean;
}

export default function ScrambleText({ text, className, shuffle }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (shuffle) {
      let interval: NodeJS.Timeout;
      let iteration = 0;
      
      interval = setInterval(() => {
        setDisplayText(prev => 
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
      
      return () => clearInterval(interval);
    } else {
      setDisplayText(text);
    }
  }, [shuffle, text]);

  return (
    <span className={className}>
      {displayText}
    </span>
  );
}