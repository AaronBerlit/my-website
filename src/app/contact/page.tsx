import { Mail, Code, Globe, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto min-h-screen pb-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 font-mono">
          <span className="text-primary mr-2">{">"}</span>Initialize Contact
        </h1>
        <p className="text-neutral-400 font-mono text-sm">
          Open communication channels. Ready for transmission.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <a href="mailto:contact@example.com" className="group p-6 flex flex-col items-center justify-center text-center border border-neutral-800 rounded-xl bg-neutral-900/30 hover:border-primary/50 hover:bg-neutral-900/80 transition-all">
          <Mail className="w-8 h-8 text-neutral-400 group-hover:text-primary mb-4 transition-colors" />
          <h3 className="font-bold text-neutral-200 mb-1">Email Protocol</h3>
          <p className="text-xs text-neutral-500 font-mono">contact@aaronberlit.com</p>
        </a>

        <a href="https://github.com/aaronberlit" target="_blank" rel="noopener noreferrer" className="group p-6 flex flex-col items-center justify-center text-center border border-neutral-800 rounded-xl bg-neutral-900/30 hover:border-primary/50 hover:bg-neutral-900/80 transition-all">
          <Code className="w-8 h-8 text-neutral-400 group-hover:text-primary mb-4 transition-colors" />
          <h3 className="font-bold text-neutral-200 mb-1">GitHub Repositories</h3>
          <p className="text-xs text-neutral-500 font-mono">@aaronberlit</p>
        </a>

        <a href="#" className="group p-6 flex flex-col items-center justify-center text-center border border-neutral-800 rounded-xl bg-neutral-900/30 hover:border-primary/50 hover:bg-neutral-900/80 transition-all">
          <Globe className="w-8 h-8 text-neutral-400 group-hover:text-primary mb-4 transition-colors" />
          <h3 className="font-bold text-neutral-200 mb-1">LinkedIn Network</h3>
          <p className="text-xs text-neutral-500 font-mono">in/aaronberlit</p>
        </a>

        <a href="#" className="group p-6 flex flex-col items-center justify-center text-center border border-neutral-800 rounded-xl bg-neutral-900/30 hover:border-primary/50 hover:bg-neutral-900/80 transition-all">
          <MessageSquare className="w-8 h-8 text-neutral-400 group-hover:text-primary mb-4 transition-colors" />
          <h3 className="font-bold text-neutral-200 mb-1">Direct Message</h3>
          <p className="text-xs text-neutral-500 font-mono">Start a transmission</p>
        </a>
      </div>

      <form className="p-8 border border-neutral-800 rounded-xl bg-neutral-900/40 space-y-4">
        <h2 className="text-xl font-bold mb-6 font-mono border-b border-neutral-800 pb-4">
          <span className="text-primary animate-pulse mr-2">_</span>Send Signal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-mono text-neutral-400">IDENTIFIER</label>
            <input type="text" className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-4 py-2 text-sm text-neutral-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-neutral-400">RETURN ADDRESS</label>
            <input type="email" className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-4 py-2 text-sm text-neutral-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="john@example.com" />
          </div>
        </div>
        
        <div className="space-y-2 pt-2">
          <label className="text-xs font-mono text-neutral-400">PAYLOAD</label>
          <textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-4 py-3 text-sm text-neutral-200 min-h-[120px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y" placeholder="Enter message payload..." />
        </div>

        <button type="button" className="w-full py-3 bg-neutral-100 hover:bg-white text-neutral-950 font-bold font-mono text-sm rounded-md transition-colors shadow-[0_0_10px_rgba(255,255,255,0.1)] mt-4">
          TRANSMIT
        </button>
      </form>
    </div>
  );
}
