import { Reveal } from "./Reveal";

const SEMESTERS = [
  {
    label: "First Semester",
    courses: [
      "Islamiat",
      "Technology, Environment and Society",
      "Geometry and Differential Calculus",
      "Physics I (+ Lab)",
      "Computing for Engineers",
      "Structured Programming I (+ Lab)",
      "Arabic I / English I",
      "Engineering Drawing Lab",
    ],
  },
  {
    label: "Second Semester",
    courses: [
      "Islamic History, Science and Culture",
      "Integral Calculus and Differential Equations",
      "Physics II (+ Lab)",
      "Chemistry (+ Lab)",
      "Discrete Mathematics",
      "Digital Logic Design (+ Lab)",
      "Arabic II / English II",
      "Structured Programming II Lab",
    ],
  },
  {
    label: "Third Semester",
    courses: [
      "Linear Algebra",
      "Electronic Devices and Circuits (+ Lab)",
      "Object Oriented Programming (+ Lab)",
      "Data Structures (+ Lab)",
      "Computer Organization and Architecture",
      "Database Management Systems (+ Lab)",
    ],
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="border-t border-hairline py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-4xl font-bold sm:text-5xl">Courses completed so far.</h2>
        </Reveal>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {SEMESTERS.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <h3 className="font-mono text-[0.68rem] tracking-widest text-muted-foreground uppercase">
                {s.label}
              </h3>
              <ul className="mt-3 space-y-2">
                {s.courses.map((c) => (
                  <li
                    key={c}
                    className="rounded-md border border-border bg-card px-3 py-2 text-[0.82rem] font-semibold leading-snug"
                  >
                    {c}
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
