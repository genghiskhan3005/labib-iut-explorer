import { Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { LINKS } from "./data";

const REPOS = [
  {
    name: "GestureLink — Rock Paper",
    note: "Ongoing — Non-academic",
    text: "A gesture-controlled cross-device content transfer system I'm currently building outside of coursework.",
    url: "https://github.com/genghiskhan3005/GestureLink---Rock-Paper",
  },
  {
    name: "Machine Learning",
    note: "Learning log",
    text: "Where I track and update my machine learning learning progress as I work through it.",
    url: "https://github.com/genghiskhan3005/Machine-Learning",
  },
];

export function Repos() {
  return (
    <section id="repos" className="border-t border-hairline bg-surface py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 border-b border-hairline pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="max-w-xl text-4xl font-bold sm:text-5xl">
              Most of my learning happens in public repositories.
            </h2>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
              My GitHub is where I keep smaller experiments and things I&rsquo;m working through
              while learning. The four featured academic projects live in private team
              repositories.
            </p>
          </div>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
          >
            <Github className="h-4 w-4" />
            View GitHub Profile
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {REPOS.map((r, i) => (
            <Reveal key={r.url} delay={i * 70}>
              <a
                href={r.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold">{r.name}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </div>
                <span className="mt-1 font-mono text-[0.62rem] tracking-widest text-muted-foreground uppercase">
                  {r.note}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
