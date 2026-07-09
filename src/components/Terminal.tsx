import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface TerminalProps {
  className?: string;
}

interface CommandHistory {
  type: "input" | "output";
  content: string;
}

const BOOT_SEQUENCE = [
  "INITIALIZING NEXUS KERNEL v2.0...",
  "LOADING MODULES: [CORE] [NET] [CRYPTO] [AI]...",
  "MOUNTING FILESYSTEM... [OK]",
  "ESTABLISHING SECURE CONNECTION... [OK]",
  "WELCOME TO SIDDHU'S TERMINAL.",
  "Type 'help' to access system data."
];

export default function Terminal({ className = "" }: TerminalProps) {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [input, setInput] = useState("");
  const [isBooting, setIsBooting] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Boot sequence effect
  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    
    BOOT_SEQUENCE.forEach((line, index) => {
      const id = setTimeout(() => {
        setHistory(prev => [...prev, { type: "output", content: line }]);
        if (index === BOOT_SEQUENCE.length - 1) {
          setIsBooting(false);
        }
      }, index * 600);
      timeoutIds.push(id);
    });

    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on click
  const handleTerminalClick = () => {
    if (!isBooting && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const args = trimmedCmd.split(" ");
    const command = args[0];

    let output = "";

    switch (command) {
      case "help":
        output = "AVAILABLE COMMANDS:\n> fetchuserdetail\n> fetchskills\n> fetchprojects\n> fetchcontact\n> clear";
        break;
      case "fetchuserdetail":
        output = "IDENTITY VERIFIED:\nName: Siddhu Singh\nRole: Fullstack & Blockchain Architect\nStatus: Online\nMission: Building the decentralized future";
        break;
      case "fetchskills":
        output = "LOADING SKILL MATRIX...\n[+] LANGUAGES: C, C++, JavaScript, TypeScript, Rust, Solidity\n[+] FRONTEND: React 19, Next.js\n[+] BACKEND: Node.js, Convex\n[+] BLOCKCHAIN: Ethereum, Solana, Hardhat";
        break;
      case "fetchprojects":
        output = "RETRIEVING ARCHIVES...\n[1] ROOMBRO (Web3)\n[2] COLLABHUB (Web2)\n[3] AGGLAYER AI (AI)\n[4] ARENA X (DeFi)\n\nType 'fetchprojects [id]' for details (Coming Soon)";
        break;
      case "fetchcontact":
        output = "COMMUNICATION CHANNELS:\n> Email: siddhu3116@gmail.com\n> GitHub: @SIDDHUX9\n> Location: Global (Remote)";
        break;
      case "whoami":
        output = "guest@nexus-portfolio";
        break;
      case "clear":
        setHistory([]);
        return;
      case "sudo":
        output = "PERMISSION DENIED: User is not in the sudoers file.";
        break;
      case "":
        break;
      default:
        output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    if (output) {
      setHistory(prev => [...prev, { type: "output", content: output }]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setHistory(prev => [...prev, { type: "input", content: input }]);
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-lg bg-[#0c0c0c] border border-white/10 rounded-md overflow-hidden shadow-2xl font-mono text-sm ${className}`}
      onClick={handleTerminalClick}
    >
      {/* Terminal Header */}
      <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-muted-foreground font-bold tracking-widest">
          guest@nexus:~
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="h-64 p-4 overflow-y-auto scrollbar-hide text-primary/90 space-y-1 cursor-text"
      >
        {history.map((entry, i) => (
          <div key={i} className={`${entry.type === "input" ? "text-white" : "text-primary/80"} whitespace-pre-wrap`}>
            {entry.type === "input" ? (
              <span className="mr-2 text-green-500">➜ ~</span>
            ) : null}
            {entry.content}
          </div>
        ))}
        
        {!isBooting && (
          <div className="flex items-center">
            <span className="mr-2 text-green-500">➜ ~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 text-white placeholder-white/20"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        )}
        
        {isBooting && (
          <div className="animate-pulse text-primary">_</div>
        )}
      </div>
    </motion.div>
  );
}