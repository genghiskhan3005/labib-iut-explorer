import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";
import { Education } from "@/components/site/Education";
import { Interests } from "@/components/site/Interests";
import { GithubBeyond } from "@/components/site/GithubBeyond";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "Labib Bin Monsur | Computer Science Student";
const DESC =
  "Portfolio of Labib Bin Monsur, a Computer Science and Engineering student at IUT exploring machine learning, software development, game development, and emerging technologies.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Labib Bin Monsur",
          jobTitle: "Computer Science and Engineering Student",
          affiliation: { "@type": "CollegeOrUniversity", name: "Islamic University of Technology" },
          address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
          email: "mailto:labibbinmonsur19@gmail.com",
          sameAs: [
            "https://github.com/genghiskhan3005",
            "http://linkedin.com/in/labib-bin-monsur-b887a1316",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Interests />
        <GithubBeyond />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
