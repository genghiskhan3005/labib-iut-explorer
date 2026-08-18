import { User } from "lucide-react";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-hairline py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">01 — About</p>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
          <Reveal>
            <figure className="group relative">
              <div className="aspect-4/5 overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lift">
                {/* Replace this placeholder with a portrait photograph. */}
                <div className="dots-faint flex h-full w-full flex-col items-center justify-center gap-3 text-muted-foreground">
                  <User className="h-9 w-9" strokeWidth={1.2} aria-hidden="true" />
                  <span className="font-mono text-[0.65rem] tracking-widest uppercase">
                    Portrait
                  </span>
                </div>
              </div>
              <figcaption className="mt-3 font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                Dhaka, Bangladesh
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal delay={80}>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Currently focused on machine learning.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-muted-foreground">
                <p>
                  I&rsquo;m a 4th semester Computer Science and Engineering student at Islamic
                  University of Technology (IUT), and machine learning is where most of my attention
                  goes right now. I enjoy exploring how software, intelligent systems, games, and
                  emerging technologies can be used to solve interesting problems.
                </p>
                <p>
                  Alongside ML, I&rsquo;m curious about cybersecurity and quantum computing —
                  areas I haven&rsquo;t explored deeply yet, but keep coming back to. More recently
                  I&rsquo;ve started learning game development with Godot and experimenting with
                  n8n workflow automation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
