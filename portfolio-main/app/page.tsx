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
    title: "Municipal Climate Scenario Explorer",
    description:
      "Interactive geospatial decision-support tool for exploring climate exposure and social vulnerability by census tract. Scenario engine supports AND/OR logic across metrics and exports planning-ready CSV + GeoJSON outputs.",
    screenshot: "/screenshots/ui_map_tooltip.png",
    skills: ["Python", "GeoPandas", "Rasterio", "Streamlit", "Pandas", "Census ACS", "GeoJSON", "Spatial Analysis", "Data Pipeline", "UI/UX", "GitHub",],
    link: {
      github: "https://github.com/one-ill-griff/Climate-Vulnerability-Tool",
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
    title: "Cloud Geospatial API: Invasive Species Sightings",
    description: "Cloud-deployed geospatial API for invasive species point sightings. Supports bbox/near/within spatial queries and summary reporting; returns GeoJSON for GIS tooling.",
    screenshot: "/screenshots/cloud-api-screenshot.png",
    skills: ["Node.js", "Express", "PostgreSQL", "PostGIS", "GeoJSON", "Render", "Supabase", "Serverless"],
    link: {
      github: "https://github.com/one-ill-griff/invasive-sightings-api",
      live: "https://invasive-sightings-api.onrender.com/"
    }
  },
  {
  title: "Hendricks County Urban Growth (2001–2021)",
  description:
    "Geospatial change detection project measuring developed and impervious surface expansion over time in Hendricks County, Indiana using a reproducible analysis pipeline and exported metrics.",
  screenshot: "/screenshots/hendricks_urban_growth.png",
  skills: ["Python", "GeoPandas", "Raster/Vector GIS", "Remote Sensing", "Change Detection", "Data Visualization", "GitHub"],
  link: {
    github: "https://github.com/one-ill-griff/one-ill-griff-hendricks-urban-growth-nlcd",
  },
  },
  {
  title: "Calorie Calculator",
  description:
    "Interactive dashboard for tracking calories, macros, weight, steps, sleep, and training. Includes trend visualizations, insights, and goal planning using a clean Streamlit UI.",
  screenshot: "/screenshots/dashboard.png",
  skills: ["Python", "Streamlit", "pandas", "Plotly", "Data Visualization", "UX",],
  link: {
    github: "https://github.com/one-ill-griff/MaintenanceCalorieEstimator-Data-Driven-",
  },
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
