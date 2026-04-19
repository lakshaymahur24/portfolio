"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section h-screen flex flex-col justify-center">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        Designing products <br />
        <span className="text-purple-500">that scale</span>
      </motion.h1>

      <p className="mt-6 text-gray-400 max-w-xl text-lg">
        Product Designer @ Justdial. I combine UX, product strategy,
        and data-driven thinking to build meaningful experiences.
      </p>

      <div className="mt-8 flex gap-4">
        <a href="#work" className="bg-purple-600 px-6 py-3 rounded-xl hover:scale-105 transition">
          View Work
        </a>

        <a href="/resume.pdf" className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
          Resume
        </a>
      </div>

    </section>
  );
}
