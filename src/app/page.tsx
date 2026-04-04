import { ThreeCanvas } from "@/components/ThreeCanvas";
import { ArrowRight, TerminalSquare } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
      <ThreeCanvas />

      <div className="relative z-10 text-center flex flex-col items-center max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-primary mb-8 animate-pulse">
          <TerminalSquare className="w-4 h-4" />
          <span>SYS.MSG: INIT_WORKSPACE</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-neutral-100 drop-shadow-lg">
          Aaron <span className="text-primary">Berlit</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed">
          AI Engineer & Full Stack Developer. Building intelligent systems, 
          scalable web applications, and experimental digital tools.
        </p>

        <div className="flex items-center gap-6">
          <Link 
            href="/projects" 
            className="group relative px-6 py-3 font-mono text-sm bg-primary text-primary-foreground font-bold rounded-md overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Experiments <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link 
            href="/lab" 
            className="px-6 py-3 font-mono text-sm border border-neutral-700 text-neutral-300 rounded-md hover:bg-neutral-900 hover:border-neutral-500 transition-all hover:text-white"
          >
            Enter Lab
          </Link>
        </div>
      </div>
    </div>
  );
}
