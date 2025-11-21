"use client";

import ProjectCard from "../components/ProjectCard";
import BackgroundOrbs from "../components/BackgroundOrbs";

const projects = [
  {
    title: "FitLog – Android Fitness Tracker",
    description:
      "A fully native Android app for logging workouts, tracking exercise progress, visualizing performance over time, and analyzing fitness trends.",
    screenshot: "/screenshots/fitlog-home-screenshot.png",
    skills: ["Android", "Kotlin", "SQLite", "MVVM", "UI/UX"],
    link: "#",
  },
  {
    title: "Environmental Insight Dashboard",
    description:
      "Coming soon. A full-stack platform that visualizes environmental data and sustainability metrics using clean UI and interactive GIS layers.",
    screenshot: "/screenshots/placeholder1.png",
    skills: ["React", "GIS", "Data Visualization"],
  },
  {
    title: "Smart Routine Planner",
    description:
      "Coming soon. A personal productivity app that learns user habits and intelligently organizes daily tasks using adaptive algorithms.",
    screenshot: "/screenshots/placeholder2.png",
    skills: ["Android", "Machine Learning", "UX Design"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900 text-white">
      <BackgroundOrbs />

      <h1 className="text-5xl font-extrabold text-white text-center mb-16">
        Projects
      </h1>

      <div className="flex flex-col gap-16 w-full">
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
    </section>
  );
}