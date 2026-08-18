import { Github, Linkedin, Mail } from "lucide-react";
import { LINKS } from "./data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:px-8">
        <p className="text-xs text-muted-foreground">
          Designed &amp; built by Labib Bin Monsur. &copy; {year}
        </p>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${LINKS.email}`}
            aria-label="Send an email"
            className="transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
