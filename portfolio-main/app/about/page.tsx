"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import profilePic from "../../public/screenshots/profile.png";

export default function AboutPage() {

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const skills = [
    "Android Studio",
    "C++",
    "Eclipse IDE",
    "GitHub",
    "HTML",
    "Java",
    "Next.js",
    "Python",
    "React",
    "SQL",
    "SQLite",
    "Tailwind CSS",
    "UI/UX",
    "XML",
  ];

  const stars = useMemo(() => {
    return Array.from({ length: 22 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900 text-white">
      {/* Background Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -60, 0], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-[15%] left-[10%] w-[350px] h-[350px] bg-purple-600 blur-[120px] rounded-full opacity-40"
        />

        <motion.div
          animate={{ y: [0, 70, 0], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute bottom-[15%] right-[12%] w-[420px] h-[420px] bg-blue-500 blur-[140px] rounded-full opacity-40"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {mounted &&
          stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
              style={{ top: star.top, left: star.left }}
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: star.delay }}
            />
          ))}
      </div>

      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-6xl p-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-8"
      >
        {/* Profile Picture */}
        <div className="shrink-0 w-65 h-100 relative rounded-xl overflow-hidden border border-white/10 shadow-lg self-start">
          <Image
            src={profilePic}
            alt="Griffin O'Neill"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Nice to meet you!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-gray-300 text-lg leading-relaxed mb-4"
          >
            Hi, I’m Griffin. I’m passionate about building software that’s thoughtful, fast, and impactful. 
            My interests span Android development, data analysis, GIS platforms, and fitness tech. 
            I love exploring the intersections of technology, environmental insight, and human experience.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-gray-400 text-base leading-relaxed mb-10"
          >
            I work with tools like Java, SQL, Android Studio, React, and Next.js. I enjoy experimenting, 
            building both large and small projects, and finding creative ways to solve problems. 
            I value clean architecture, efficient code, and making apps both useful and enjoyable to use.
          </motion.p>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200 border border-white/10"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
