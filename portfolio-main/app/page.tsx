"use client";

import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import BackgroundOrbs from './components/BackgroundOrbs';

export default function HomePage() {
  const projects = [
  {
    title: "FitLog",
    description: "Fitness tracking app",
    screenshot: "/screenshots/fitlog-home-screenshot.png",
    skills: ["Android", "Java", "SQLite", "XML", "UI/UX", "RecyclerView", "LiveData", "ViewModel", "Fragments", 
      "Intents", "Activities", "Custom Adapters", "Charts", "Graphs", "Animations", "Material Design", "GitHub",],
    link: "https://github.com/one-ill-griff/FitLog4.0",
  },
  {
    title: "Placeholder 1",
    description: "Coming soon",
    screenshot: "/screenshots/placeholder1.png",
    skills: ["React"],
  },
];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <BackgroundOrbs />

      <Hero />

      <section
        id="projects"
        className="relative mt-32 space-y-10 z-10 px-6"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Projects
        </h2>

        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              screenshot={project.screenshot}
              skills={project.skills}
              link={project.link}
            />
          ))}
        </div>

        <div className="text-center mb-30 mt-16 md:mt-24">
          <a
            href="/about"
            className="px-10 py-5 text-lg bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
          >
            About Me
          </a>
        </div>
      </section>
    </div>
  );
}