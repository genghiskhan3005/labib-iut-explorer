import { Reveal } from "./Reveal";
import { EDUCATION } from "./data";

export function Education() {
  return (
    <section id="education" className="border-t border-hairline bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">04 — Education</p>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Academic progression.
          </h2>
        </Reveal>

        <ol className="mt-12 space-y-12 border-l border-border pl-6 sm:pl-8">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.school} delay={i * 80} as="li">
              <div className="relative pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className={
                    "absolute top-1.5 -left-[calc(1.5rem+4.5px)] h-[9px] w-[9px] rounded-full sm:-left-[calc(2rem+4.5px)] " +
                    (e.current ? "bg-accent" : "bg-border")
                  }
                />
                <p className="font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                  {e.meta}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{e.school}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
