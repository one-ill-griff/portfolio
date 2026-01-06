"use client";

import ProjectCard from "../components/ProjectCard";
import BackgroundOrbs from "../components/BackgroundOrbs";

type ProjectLinks = {
  github?: string;
  live?: string;
  docs?: string;
};

type Project = {
  title: string;
  description: string;
  screenshot: string;
  skills?: string[];
  link?: ProjectLinks;
};

const projects: Project[] = [
  {
    title: "FitLog – Android Fitness Tracker",
    description:
      "A fully native Android app for logging workouts, tracking exercise progress, visualizing performance over time, and analyzing fitness trends.",
    screenshot: "/screenshots/fitlog-home-screenshot.png",
    skills: ["Android", "Kotlin", "SQLite", "MVVM", "UI/UX"],
    link: {
      github: "https://github.com/one-ill-griff/FitLog4.0",
    },
  },
  {
    title: "Environmental Insight Dashboard",
    description:
      "Coming soon. A full-stack platform that visualizes environmental data and sustainability metrics using clean UI and interactive GIS layers.",
    screenshot: "/screenshots/placeholder1.png",
    skills: ["React", "GIS", "Data Visualization"],
    // no link yet (omit it)
  },
  {
  title: "Hendricks County Urban Growth (2001–2021)",
  description:
    "Geospatial change detection project measuring developed and impervious surface expansion over time in Hendricks County, Indiana using a reproducible analysis pipeline and exported metrics.",
  screenshot: "/screenshots/hendricks_urban_growth.png",
  skills: ["Python", "GeoPandas", "Raster/Vector GIS", "Remote Sensing", "Change Detection", "Data Visualization", "GitHub"],
  },
  {
  title: "Calorie Calculator",
  description:
    "Interactive dashboard for tracking calories, macros, weight, steps, sleep, and training. Includes trend visualizations, insights, and goal planning using a clean Streamlit UI.",
  screenshot: "/screenshots/calorie-dashboard.png",
  skills: ["Python", "Streamlit", "pandas", "Plotly", "Data Visualization", "UX",],
  },
];

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900 text-white">
      <BackgroundOrbs />

      <div className="w-full max-w-6xl">
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
      </div>
    </section>
  );
}

