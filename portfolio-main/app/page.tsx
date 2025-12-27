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
      "Intents", "Activities", "Custom Adapters", "Charts", "Graphs", "Animations", "Material Design", "GitHub"],
    link: {
      github: "https://github.com/one-ill-griff/FitLog4.0",
    },
  },
  {
    title: "Oak Seedling Regeneration & Browsing Analysis",
    description:
      "Ecological data analysis comparing oak seedling regeneration, browsing pressure, and recruitment structure across two forest sites using a reproducible Python pipeline.",
    screenshot: "/screenshots/red_oak_height_by_site.png",
    skills: ["Python", "pandas", "NumPy", "matplotlib", "seaborn", "Ecology"],
    link: {
      github: "https://github.com/one-ill-griff/Oak-Seedling-Data-Analysis",
    },
  },
  {
    title: "Cloud Geospatial API – Invasive Species Sightings",
    description: "Cloud-deployed geospatial API for invasive species point sightings. Supports bbox/near/within spatial queries and summary reporting; returns GeoJSON for GIS tooling.",
    screenshot: "/screenshots/cloud-api-screenshot.png",
    skills: ["Node.js", "Express", "PostgreSQL", "PostGIS", "GeoJSON", "Render", "Supabase", "Serverless"],
    link: {
      github: "https://github.com/one-ill-griff/invasive-sightings-api",
      live: "https://invasive-sightings-api.onrender.com/"
    }
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
