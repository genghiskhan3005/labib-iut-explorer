import { Reveal } from "./Reveal";
import { SKILL_GROUPS } from "./data";

export function Skills() {
  return (
    <section id="skills" className="border-t border-hairline py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-4xl font-bold sm:text-5xl">
            Technologies I&rsquo;ve worked with.
          </h2>
        </Reveal>

        <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <h3 className="font-mono text-[0.68rem] tracking-widest text-muted-foreground uppercase">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-border bg-card px-3 py-1.5 text-[0.82rem] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
