"use client";

import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">

      {/* ===== PRIMARY HERO CARD ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-6xl p-16 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_-10px_rgba(255,255,255,0.15)]"
      >
        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-3xl border border-transparent pointer-events-none"
          animate={{
            background: [
              "conic-gradient(from 0deg, rgba(255,0,255,0.35), rgba(0,150,255,0.35), rgba(255,0,255,0.35))",
              "conic-gradient(from 360deg, rgba(255,0,255,0.35), rgba(0,150,255,0.35), rgba(255,0,255,0.35))",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{
            mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "2px",
          }}
        />

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-6xl md:text-7xl font-extrabold text-white bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-400"
        >
          Griffin O’Neill
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="text-gray-300 text-xl mt-5"
        >
          Android Developer • Data • GIS • Fitness Tech
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-gray-400 mt-6 text-base max-w-2xl"
        >
          Building clean, efficient, and thoughtful software, especially where tech
          meets fitness, data visualization, and environmental insight.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 flex gap-6"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition shadow-md"
          >
            View Projects
          </a>
          <a
            href="/about"
            className="px-7 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition shadow-md"
          >
            About Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
