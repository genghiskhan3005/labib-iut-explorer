export const LINKS = {
  email: "labibbinmonsur19@gmail.com",
  github: "https://github.com/genghiskhan3005",
  linkedin: "http://linkedin.com/in/labib-bin-monsur-b887a1316",
  location: "Dhaka, Bangladesh",
};

export type Project = {
  id: string;
  title: string;
  context: string;
  summary: string;
  tags: string[];
  badges: string[];
  overview: string;
  coreIdea: string;
  focus: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "al-mirath",
    title: "Al-Mirath",
    context: "4th Semester — Visual Programming Project",
    summary:
      "An Islamic Golden Age life simulator built around dynamic life paths and emergent storytelling. Players can begin life anywhere from royalty to extreme poverty, with decisions and random events shaping political conflicts, relationships, conspiracies, rebellion, survival, and social mobility.",
    tags: ["Visual Programming", "Simulation", "Emergent Storytelling", "Game Design"],
    badges: ["Academic Project", "Private Repository"],
    overview:
      "Al-Mirath is a life simulation game set in the Islamic Golden Age. The player may be born into drastically different social circumstances — a royal prince, an orphan, the child of a poor family, the child of a beggar, or another procedurally determined background.",
    coreIdea:
      "Life unfolds through choices, circumstances, social position, relationships, and unpredictable events. Political rivalry, rebellion, conspiracy, shifts in social status, conflict, punishment, imprisonment, and execution are all possible turns — the game is built around emergent storytelling rather than one fixed story.",
    focus: ["Procedural starting conditions", "Choice-driven progression", "Event systems", "Visual programming"],
  },
  {
    id: "hall-management-system",
    title: "Hall Management System",
    context: "3rd Semester — Object-Oriented Programming Project",
    summary:
      "A C++ object-oriented system inspired by the administrative structure of IUT's hall management authority. The project translates real-world roles and responsibilities into a structured software model while applying core OOP principles.",
    tags: ["C++", "Object-Oriented Programming", "System Modelling"],
    badges: ["Academic Project", "Private Repository"],
    overview:
      "The system models the structure and responsibilities of the IUT hall management authority, mapping an existing organisational hierarchy onto software components.",
    coreIdea:
      "Its primary academic purpose was to turn a real organisational structure into an object-oriented software model — expressing roles, responsibilities and relationships through classes and their interactions.",
    focus: ["OOP architecture", "Encapsulation & abstraction", "Domain modelling", "C++"],
  },
  {
    id: "crediflow",
    title: "CrediFlow",
    context: "4th Semester — System Analysis and Design Project",
    summary:
      "A credit management and workflow automation system designed to replace slow paper-based processes with a structured digital workflow. CrediFlow focuses on faster verification, streamlined processing, and more efficient management of credit-related operations.",
    tags: ["System Analysis", "Process Design", "Workflow Automation", "Digital Transformation"],
    badges: ["Academic Project", "Private Repository"],
    overview:
      "CrediFlow digitises credit processing workflows that are traditionally handled on paper, reducing manual paperwork and giving each step of the process clearer visibility.",
    coreIdea:
      "The design goals were reducing manual paperwork, digitising the workflow, making verification faster and more immediate, improving process visibility, and creating a more structured credit-management process.",
    focus: ["Process design", "Workflow automation", "System analysis", "Digital transformation"],
  },
  {
    id: "react-o-ball",
    title: "React-o-ball",
    context: "1st Semester — Structured Programming Project",
    summary:
      "A DX-Ball-inspired game that replaces conventional brick interactions with an elemental reaction system. Fire, water, wind, ice, and electricity interact dynamically, turning a simple brick-breaking mechanic into a more experimental, strategy-driven experience.",
    tags: ["Structured Programming", "Game Logic", "Systems Design"],
    badges: ["Academic Project", "Private Repository"],
    overview:
      "Both the bricks and the ball can carry natural elements — fire, water, wind, ice, or electricity. Instead of bricks simply breaking, elements interact with one another and cause different reactions.",
    coreIdea:
      "Water and electricity let current spread; wind can intensify or influence fire; ice and water react with each other; fire and electricity produce explosive results. The classic brick-breaker becomes an experiment in elemental interaction.",
    focus: ["Elemental reaction rules", "Game loop & collision logic", "Structured programming"],
  },
];

export const SKILL_GROUPS = [
  { title: "Programming Languages", items: ["C", "C++", "Java", "Python"] },
  { title: "Application / UI Development", items: ["JavaFX", "HTML", "CSS"] },
  { title: "Database", items: ["PostgreSQL"] },
  { title: "Tools & Version Control", items: ["Git", "GitHub"] },
  { title: "Machine Learning", items: ["Machine Learning fundamentals"] },
];

export const EXPLORING = ["Godot", "n8n", "Cybersecurity", "Quantum Computing"];

export const EDUCATION = [
  {
    school: "Islamic University of Technology (IUT)",
    detail: "Computer Science and Engineering",
    meta: "4th Semester Student",
    current: true,
  },
  {
    school: "Notre Dame College, Dhaka",
    detail: "Higher Secondary Certificate (HSC)",
    meta: "GPA 5.00 / 5.00",
    current: false,
  },
  {
    school: "Dhaka Residential Model College (DRMC)",
    detail: "Secondary School Certificate (SSC)",
    meta: "GPA 5.00 / 5.00",
    current: false,
  },
];
