import { Brain, Gamepad2, Shield, Atom, Workflow } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: Brain,
    title: "Machine Learning",
    note: "Main focus",
    text: "My primary area of study right now — learning how models are built, trained, and reasoned about.",
    primary: true,
  },
  {
    icon: Gamepad2,
    title: "Game Development with Godot",
    note: "Learning",
    text: "Recently started building small things in Godot to understand how game systems come together.",
    primary: false,
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    note: "Experimenting",
    text: "Trying out workflow automation and how repetitive processes can be wired together.",
    primary: false,
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    note: "Curious",
    text: "An area I find genuinely interesting, though I haven't explored it deeply yet.",
    primary: false,
  },
  {
    icon: Atom,
    title: "Quantum Computing",
    note: "Curious",
    text: "Reading around the ideas and possibilities, still early in understanding them.",
    primary: false,
  },
];

export function Interests() {
  return (
    <section id="interests" className="border-t border-hairline py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">05 — Currently Exploring</p>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Beyond the classroom.
          </h2>
        </Reveal>
        <Reveal delay={110}>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground">
            My current focus is machine learning, while I&rsquo;m also gradually exploring game
            development, automation, cybersecurity, and the possibilities of quantum computing.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 60} className={it.primary ? "lg:col-span-3" : ""}>
              <div
                className={
                  "group flex h-full gap-4 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft " +
                  (it.primary
                    ? "border-accent/30 bg-accent-soft/40"
                    : "border-border bg-card hover:border-accent/25")
                }
              >
                <it.icon
                  className={
                    "h-5 w-5 shrink-0 " + (it.primary ? "text-accent" : "text-muted-foreground")
                  }
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold">{it.title}</h3>
                    <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[0.58rem] tracking-widest text-muted-foreground uppercase">
                      {it.note}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
