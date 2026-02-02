"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-gray-900/80 border-b border-gray-700 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-semibold"
        >
          <Link href="/" className="hover:opacity-70 transition">
            Griffin O’Neill
          </Link>
        </motion.h1>

        <div className="flex gap-6 items-center">
          <Link href="/#projects" className="hover:opacity-70 transition">
            Projects
          </Link>
          <Link href="/about" className="hover:opacity-70 transition">
            About
          </Link>

          <a
            href="/screenshots/Griffin O'Neill Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

