"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Filter, ArrowUpRight, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import ContactSection from "@/components/ContactSection";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - rect.top) / rect.height - 0.5) * -10,
      y: ((e.clientX - rect.left) / rect.width - 0.5) * 10,
    });
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      layout
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setHovered(false);
      }}
      style={{ perspective: "800px" }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <motion.div
          animate={{
            rotateX: tilt.x,
            rotateY: tilt.y,
            scale: hovered ? 1.02 : 1,
            boxShadow: hovered ? "8px 8px 0px #5C7CFA" : "4px 4px 0px #1a1a1a",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-3"
          style={{
            background: project.accentBg,
            border: "2px solid #1a1a1a",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.4 }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <motion.div
            animate={{ y: hovered ? 0 : "100%", opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 bottom-0 h-1/2 flex items-end justify-between p-4"
            style={{
              background:
                "linear-gradient(to top, rgba(26,26,26,0.92) 0%, transparent 100%)",
            }}
          >
            <span className="text-white font-bold text-sm">
              View Case Study
            </span>
            <div
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0"
              style={{ border: "2px solid rgba(255,255,255,0.3)" }}
            >
              <ArrowUpRight className="w-4 h-4 text-[#1a1a1a]" />
            </div>
          </motion.div>
          <motion.div
            animate={{ opacity: hovered ? 0 : 0.35 }}
            className="absolute top-4 left-4 text-white text-base select-none"
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
                background: "#FF8E53",
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
          animate={{ color: hovered ? "#5C7CFA" : "#1a1a1a" }}
          transition={{ duration: 0.2 }}
          className="text-lg font-black mb-1"
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
                background: hovered ? "#5C7CFA" : "#f0f0f0",
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

      <section className="relative z-10 px-6 sm:px-10 lg:px-16 pt-24 pb-8 max-w-7xl mx-auto">
        <SectionTitle
          badge="Case ✦ Studies"
          badgeVariant="orange"
          title="Case Studies"
          description="From problem to solution — through thoughtful UX and clean UI."
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
                      boxShadow: "3px 3px 0px #5C7CFA",
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

      <section className="relative z-10 px-6 sm:px-10 lg:px-16 pb-16 max-w-7xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
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

      {/* ── Contact ── */}
      <ContactSection />
    </div>
  );
}
