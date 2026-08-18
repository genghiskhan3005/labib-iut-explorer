import { Swords, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export function BeyondCode() {
  return (
    <section className="border-t border-hairline bg-surface py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-4xl font-bold sm:text-5xl">Beyond Code.</h2>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="group h-full rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-soft">
              <Swords
                className="h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-accent"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-4 text-base font-bold">Story-Driven Games</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I enjoy story-driven games and the way strong narratives, characters, and
                interactive systems can come together to create memorable experiences.
              </p>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <div className="group h-full rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-soft">
              <Sparkles
                className="h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-accent"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-4 text-base font-bold">Naruto Card Collecting</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I collect Naruto cards and enjoy the artwork, the rarity, and the process of
                gradually building a personal collection.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
