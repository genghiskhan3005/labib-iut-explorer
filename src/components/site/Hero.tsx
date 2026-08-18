import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { LINKS } from "./data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-faint mask-fade-b pointer-events-none absolute inset-0 -z-10" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.53 0.145 250 / 0.10), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Hello, I&rsquo;m</p>
        </Reveal>

        <Reveal delay={70}>
          <h1 className="mt-4 text-[2.6rem] leading-[1.02] font-semibold sm:text-6xl lg:text-7xl">
            Labib Bin Monsur
          </h1>
        </Reveal>

        <Reveal delay={130}>
          <p className="mt-5 font-display text-lg font-medium text-muted-foreground sm:text-xl">
            Computer Science Student at IUT
          </p>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
            Exploring machine learning, software systems, game development, and emerging
            technologies.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${LINKS.email}`}
              aria-label="Send an email"
              className="transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
            <span className="ml-2 inline-flex items-center gap-1.5 text-xs">
              <MapPin className="h-3.5 w-3.5" />
              Dhaka, Bangladesh
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
