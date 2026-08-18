import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import { PROJECTS, type Project } from "./data";
import { CrediArt, HallArt, MirathArt, ReactoArt } from "./ProjectArt";

const ART: Record<string, React.ComponentType<{ className?: string }>> = {
  "al-mirath": MirathArt,
  "hall-management-system": HallArt,
  crediflow: CrediArt,
  "react-o-ball": ReactoArt,
};

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" className="border-t border-hairline bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">02 — Projects</p>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Four academic projects I&rsquo;ve built so far.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => {
            const Art = ART[p.id];
            return (
              <Reveal key={p.id} delay={i * 70} as="article">
                <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift">
                  <div className="relative overflow-hidden border-b border-hairline bg-background">
                    <Art className="h-44 w-full transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      {p.badges.map((b) => (
                        <span
                          key={b}
                          className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.6rem] tracking-widest text-muted-foreground uppercase"
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                    <p className="mt-1 text-[0.78rem] text-muted-foreground">{p.context}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {p.summary}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-md bg-secondary px-2.5 py-1 text-[0.72rem] text-secondary-foreground transition-colors duration-200 group-hover:bg-accent-soft"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => setOpen(p)}
                      className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent"
                    >
                      <span className="link-underline">Explore project</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {open && (
            <>
              <DialogHeader>
                <p className="font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                  {open.context}
                </p>
                <DialogTitle className="font-display text-2xl tracking-tight">
                  {open.title}
                </DialogTitle>
                <DialogDescription className="text-left leading-relaxed">
                  {open.overview}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-2">
                <div>
                  <h4 className="text-sm font-semibold">Core idea</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {open.coreIdea}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Technical focus</h4>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {open.focus.map((f) => (
                      <li
                        key={f}
                        className="rounded-md border border-border px-2.5 py-1 text-[0.72rem] text-muted-foreground"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="border-t border-hairline pt-4 font-mono text-[0.68rem] tracking-wide text-muted-foreground">
                  {open.badges.join(" · ")}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
