"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Filter, ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";

const projects = [
  {
    id: 1,
    title: "PandaPlay",
    slug: "PandaPlay-movie-app",
    category: "App Design",
    description:
      "A modern movie streaming app focused on personalized recommendations and seamless viewing experience.",
    image: "/images/cover.png",
    tags: ["UI/UX", "Mobile", "Figma"],
    year: "2026",
    accentBg: "#1a1a2e",
  },
  {
    id: 2,
    title: "Teaee",
    slug: "teaee-dashboard",
    category: "Web Design",
    description:
      "A dual-interface ordering system designed for both customers and staff, streamlining in-store purchases.",
    image: "/images/cover teaee.png",
    tags: ["UI/UX", "Web App", "Ordering System", "Dashboard"],
    year: "2026",
    accentBg: "#e8f5e4",
  },
  {
    id: 3,
    title: "LearnSpace",
    slug: "LearnSpace-platform",
    category: "App Design",
    description:
      "Health and fitness app with personalized workout plans and progress tracking.",
    image: "/projects/project3.jpg",
    tags: ["UI/UX", "Mobile", "Health"],
    year: "2023",
    accentBg: "#e8f0ff",
  },
];

const categories = ["All", "App Design", "Web Design"];

const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 32, scale: 0.96 },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      layout
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          animate={{
            y: hovered ? -8 : 0,
            boxShadow: hovered ? "8px 8px 0px #3B5BDB" : "4px 4px 0px #1a1a1a",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-3"
          style={{ background: project.accentBg, border: "2px solid #1a1a1a" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-[#1a1a1a]/60 flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: hovered ? 1 : 0.8,
                y: hovered ? 0 : 14,
                opacity: hovered ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
                style={{ border: "2px solid #1a1a1a" }}
              >
                <ArrowUpRight className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <span className="text-white font-bold text-sm bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
                View Case Study
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ opacity: hovered ? 0 : 0.35 }}
            className="absolute top-4 left-12 text-white text-base select-none"
          >
            ✦
          </motion.div>
          <motion.div
            animate={{ y: hovered ? -2 : 0 }}
            className="absolute top-3 right-3"
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-black"
              style={{
                background: "#F5A623",
                color: "#1a1a1a",
                border: "1.5px solid #1a1a1a",
                boxShadow: "2px 2px 0px #1a1a1a",
                fontFamily: "'Georgia', serif",
              }}
            >
              {project.year}
            </span>
          </motion.div>
        </motion.div>
        <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-0.5">
          {project.category}
        </p>
        <motion.h3
          animate={{ color: hovered ? "#3B5BDB" : "#1a1a1a" }}
          transition={{ duration: 0.2 }}
          className="text-xl font-black mb-1"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {project.title}
        </motion.h3>
        <p className="text-sm text-neutral-500 leading-relaxed mb-2.5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              animate={{
                background: hovered ? "#3B5BDB" : "#f0f0f0",
                color: hovered ? "#fff" : "#1a1a1a",
              }}
              transition={{ duration: 0.2 }}
              className="px-3 py-1 text-xs font-semibold rounded-full"
              style={{ border: "1.5px solid #d0d0d0" }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

export default function Work() {
  const [selected, setSelected] = useState("All");
  const filtered =
    selected === "All"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <div className="min-h-screen bg-white">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Header — NO border */}
      <section className="relative z-10 px-6 pt-24 pb-8 max-w-5xl mx-auto">
        <SectionTitle
          badge="Case ✦ Studies"
          badgeVariant="orange"
          title="Case Studies"
          description="Thoughtful UX decisions. Clean UI execution."
        />
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18 }}
          className="mt-5 flex flex-wrap gap-2.5 items-center"
        >
          <Filter className="w-4 h-4 text-neutral-400" />
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelected(cat)}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full text-sm font-black"
              style={
                selected === cat
                  ? {
                      background: "#1a1a1a",
                      color: "#fff",
                      border: "2px solid #1a1a1a",
                      boxShadow: "3px 3px 0px #3B5BDB",
                      fontFamily: "'Georgia', serif",
                    }
                  : {
                      background: "#fff",
                      color: "#888",
                      border: "2px solid #d0d0d0",
                      fontFamily: "'Georgia', serif",
                    }
              }
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Grid — NO border */}
      <section className="relative z-10 px-6 pb-16 max-w-5xl mx-auto">
        <motion.div layout className="grid sm:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-neutral-400 text-lg font-medium">
              No projects in this category yet.
            </p>
          </motion.div>
        )}
      </section>

      {/* Contact — NO border */}
      <section className="relative z-10 px-6 py-16 bg-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
            backgroundSize: "52px 52px",
          }}
        />
        <div className="relative z-10 max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block text-[#3B5BDB] text-xl mb-3 select-none"
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✦
            </motion.span>
            <h2
              className="font-black text-[#1a1a1a] leading-tight mb-1"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontFamily: "'Georgia', serif",
              }}
            >
              Don&apos;t be a{" "}
              <span
                className="inline-block px-3 py-0.5 rounded-xl align-middle"
                style={{
                  background: "#F5A623",
                  color: "#1a1a1a",
                  border: "2px solid #1a1a1a",
                  boxShadow: "3px 3px 0px #1a1a1a",
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(1.2rem, 3vw, 2rem)",
                }}
              >
                Stranger
              </span>
            </h2>
            <h2
              className="font-black text-[#1a1a1a] leading-tight mb-8"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontFamily: "'Georgia', serif",
              }}
            >
              let&apos;s Chat
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              initial={{ rotate: -6 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              <div
                className="w-20 h-20 rounded-2xl overflow-hidden"
                style={{
                  border: "3px solid #1a1a1a",
                  boxShadow: "4px 4px 0px #1a1a1a",
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#3B5BDB] to-indigo-800 flex items-center justify-center">
                  <span
                    className="text-white font-black text-2xl"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    V
                  </span>
                </div>
              </div>
            </motion.div>
            <div className="flex flex-col gap-2.5 w-full max-w-xs">
              <motion.a
                href="mailto:lvithong31@gmail.com"
                whileHover={{ scale: 1.02, x: 3 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-sm"
                style={{
                  background: "#3B5BDB",
                  border: "2px solid #1a1a1a",
                  boxShadow: "3px 3px 0px #1a1a1a",
                }}
              >
                <Mail className="w-4 h-4" /> lvithong31@gmail.com
              </motion.a>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  {
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                    icon: <Linkedin className="w-5 h-5" />,
                  },
                  {
                    href: "https://behance.net",
                    label: "Behance",
                    icon: <span className="font-black text-sm">Bē</span>,
                  },
                  {
                    href: "https://github.com",
                    label: "GitHub",
                    icon: <Github className="w-5 h-5" />,
                  },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center py-3 rounded-xl text-white"
                    style={{
                      background: "#3B5BDB",
                      border: "2px solid #1a1a1a",
                      boxShadow: "2px 2px 0px #1a1a1a",
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
