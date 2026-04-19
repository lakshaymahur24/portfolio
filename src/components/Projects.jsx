"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Spotify Case Study",
    desc: "Product strategy, KPI dashboards & UX improvements",
  },
  {
    title: "Splitwise Redesign",
    desc: "Improving financial tracking experience",
  },
  {
    title: "Learn It",
    desc: "Learning platform UX & product thinking",
  },
];

export default function Projects() {
  return (
    <section id="work" className="section">

      <h2 className="text-4xl font-bold mb-12">
        Selected Work
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-8 border border-gray-800 rounded-2xl bg-[#111] hover:border-purple-500 transition"
          >
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-3">{p.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
