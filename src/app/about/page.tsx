import { Download, Cpu, Activity, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen pb-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 font-mono">
          <span className="text-primary mr-2">{">"}</span>About System
        </h1>
        <p className="text-neutral-400 font-mono text-sm">
          Operator profile and technical specifications.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-2 space-y-6 text-neutral-300 leading-relaxed">
          <p>
            I am <strong className="text-white">Aaron Berlit</strong>, an AI Engineer and Full Stack Developer
            passionate about building intelligent, scalable, and highly performant digital systems.
          </p>
          <p>
            My work sits at the intersection of deep learning and modern web architecture. 
            Whether it's designing a peer-to-peer debt resolution algorithm for <em>SmartSplit AI</em> or 
            implementing telemetry for an electric solar car, I focus on robust engineering and clean user experiences.
          </p>
          <p>
            Currently open to opportunities where I can leverage machine learning and full-stack architecture
            to solve complex problems.
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 bg-neutral-800 rounded-full mb-4 border-2 border-primary/50 relative overflow-hidden flex items-center justify-center">
            <span className="text-3xl font-bold text-neutral-500 font-mono">AB</span>
          </div>
          <h3 className="font-bold text-lg text-neutral-200 mb-1">Aaron Berlit</h3>
          <p className="text-xs font-mono text-primary mb-6">SYS.OP_01</p>
          
          <a 
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-white text-neutral-900 rounded-md transition-colors text-sm font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)] w-full justify-center"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-6 font-mono text-neutral-200">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border border-neutral-800 rounded-lg bg-neutral-900/30">
          <Cpu className="w-6 h-6 text-primary mb-3" />
          <h4 className="font-bold mb-2">AI & Machine Learning</h4>
          <p className="text-xs text-neutral-400 font-mono">Python, TensorFlow, OpenCV, Gemini API, YOLO</p>
        </div>
        <div className="p-4 border border-neutral-800 rounded-lg bg-neutral-900/30">
          <Zap className="w-6 h-6 text-primary mb-3" />
          <h4 className="font-bold mb-2">Frontend Engineering</h4>
          <p className="text-xs text-neutral-400 font-mono">React, Next.js, Tailwind CSS, Framer Motion, Three.js</p>
        </div>
        <div className="p-4 border border-neutral-800 rounded-lg bg-neutral-900/30">
          <Activity className="w-6 h-6 text-primary mb-3" />
          <h4 className="font-bold mb-2">Backend & Systems</h4>
          <p className="text-xs text-neutral-400 font-mono">Node.js, PostgreSQL, MongoDB, Prisma, C++</p>
        </div>
      </div>
    </div>
  );
}
