"use client";

import { motion } from "framer-motion";

export default function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none -z-10  bg-gray-900 text-white">

      {/* Purple orb */}
      <motion.div
        animate={{ y: [0, -40, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-[10%] left-[10%] w-96 h-96 bg-purple-600 blur-3xl rounded-full opacity-40"
      />
      {/* Blue orb */}
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[60%] left-[70%] w-96 h-96 bg-blue-500 blur-3xl rounded-full opacity-40"
      />
      {/* Optional third orb for depth */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[40%] left-[30%] w-80 h-80 bg-pink-500 blur-3xl rounded-full opacity-30"
      />
    </div>
  );
}
