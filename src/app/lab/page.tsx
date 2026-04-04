import { Terminal, Database, Code2 } from "lucide-react";

export default function LabPage() {
  const notes = [
    {
      id: "001",
      title: "Optimizing State in React",
      date: "2026-03-15",
      type: "Frontend",
      excerpt: "Exploring the differences between Context API, Zustand, and standard state for complex applications.",
      icon: Code2
    },
    {
      id: "002",
      title: "Receipt Parsing with Gemini Vision",
      date: "2026-02-28",
      type: "AI/ML",
      excerpt: "Deep dive into prompting strategies and structured output from Gemini for the SmartSplit AI project.",
      icon: Terminal
    },
    {
      id: "003",
      title: "PostgreSQL vs MongoDB for P2P Systems",
      date: "2026-01-10",
      type: "Backend",
      excerpt: "Analyzing trade-offs of relational schemas vs document stores for the debt resolution logic.",
      icon: Database
    }
  ];

  return (
    <div className="max-w-4xl mx-auto min-h-screen pb-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 font-mono">
          <span className="text-primary mr-2">{">"}</span>Lab Notes
        </h1>
        <p className="text-neutral-400 font-mono text-sm">
          Research logs, architecture decisions, and scattered thoughts.
        </p>
      </header>

      <div className="space-y-6">
        {notes.map((note) => (
          <article 
            key={note.id} 
            className="group flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 hover:border-neutral-700 transition-colors"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-400 group-hover:text-primary transition-colors">
              <note.icon className="w-6 h-6" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                  {note.type}
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  {note.date}
                </span>
              </div>
              <h2 className="text-xl font-bold text-neutral-200 mb-2 group-hover:text-white transition-colors">
                {note.title}
              </h2>
              <p className="text-sm text-neutral-400">
                {note.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
