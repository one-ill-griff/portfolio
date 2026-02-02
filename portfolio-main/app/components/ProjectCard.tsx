"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ProjectLinks = {
  github?: string;
  live?: string;
  docs?: string;
};

interface ProjectCardProps {
  title: string;
  description: string;
  screenshot: string;
  skills?: string[];
  link?: ProjectLinks; 
}

export default function ProjectCard({
  title,
  description,
  screenshot,
  skills = [],
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl p-8 flex flex-col md:flex-row items-center gap-6"
    >
      {/* Text Section */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-gray-300 mt-3">{description}</p>

        {skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200 border border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {(link?.github || link?.live || link?.docs) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {link?.github && (
              <a
                href={link.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition shadow-md text-white text-sm border border-white/10"
              >
                GitHub
              </a>
            )}

            {link?.live && (
              <a
                href={link.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition shadow-md text-white text-sm"
              >
                Live
              </a>
            )}

            {link?.docs && (
              <a
                href={link.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition shadow-md text-white text-sm border border-white/10"
              >
                Docs
              </a>
            )}
          </div>
        )}
      </div>

      {/* Screenshot */}
      <div className="w-full md:w-96 h-56 relative shrink-0">
        <Image
          src={screenshot}
          alt={title}
          width={384}
          height={224}
          className="rounded-xl shadow-lg object-cover border border-white/10"
        />
      </div>
    </motion.div>
  );
}