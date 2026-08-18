import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { LINKS } from "./data";

const ROWS = [
  { icon: Mail, label: "Email", value: LINKS.email, href: `mailto:${LINKS.email}`, ext: false },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/labib-bin-monsur",
    href: LINKS.linkedin,
    ext: true,
  },
  { icon: Github, label: "GitHub", value: "github.com/genghiskhan3005", href: LINKS.github, ext: true },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-hairline py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-4xl font-bold sm:text-5xl">Let&rsquo;s connect.</h2>
        </Reveal>
        <Reveal delay={110}>
          <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
            I&rsquo;m always interested in learning, collaborating on interesting ideas, and
            connecting with people working on technology.
          </p>
        </Reveal>

        <div className="mt-6 max-w-2xl divide-y divide-hairline border-y border-hairline">
          {ROWS.map((r, i) => (
            <Reveal key={r.label} delay={i * 60}>
              <a
                href={r.href}
                {...(r.ext ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                className="group flex items-center gap-4 py-4 transition-colors duration-200 hover:text-accent"
              >
                <r.icon className="h-[18px] w-[18px] text-muted-foreground transition-colors duration-200 group-hover:text-accent" strokeWidth={1.5} aria-hidden="true" />
                <span className="w-24 shrink-0 font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                  {r.label}
                </span>
                <span className="truncate text-sm font-semibold">{r.value}</span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            </Reveal>
          ))}
          <Reveal delay={180}>
            <div className="flex items-center gap-4 py-4">
              <MapPin className="h-[18px] w-[18px] text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
              <span className="w-24 shrink-0 font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                Location
              </span>
              <span className="text-sm font-semibold">{LINKS.location}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
