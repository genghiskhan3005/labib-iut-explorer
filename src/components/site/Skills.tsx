import { Reveal } from "./Reveal";
import { SKILL_GROUPS } from "./data";

export function Skills() {
  return (
    <section id="skills" className="border-t border-hairline py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">03 — Skills</p>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Technologies I&rsquo;ve worked with.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <h3 className="font-mono text-[0.68rem] tracking-widest text-muted-foreground uppercase">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-border bg-card px-3 py-1.5 text-[0.82rem] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              {g.title === "Machine Learning" && (
                <p className="mt-3 text-xs text-muted-foreground">
                  Specific libraries and frameworks will be added here as I work with them.
                </p>
              )}
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
