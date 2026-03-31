"use client";

import { useState, useRef } from "react";
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

// ✅ 3D Tilt card
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
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: cy * -14, y: cx * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
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
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "800px" }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <motion.div
          animate={{
            rotateX: tilt.x,
            rotateY: tilt.y,
            scale: hovered ? 1.02 : 1,
            boxShadow: hovered ? "8px 8px 0px #3B5BDB" : "4px 4px 0px #1a1a1a",
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

          {/* slide-up overlay */}
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

      {/* ✅ Contact — same style as homepage: avatar LEFT + buttons RIGHT */}
      <section
        id="contact"
        className="py-24 px-6 bg-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: "52px 52px",
          }}
        />

        <div className="relative z-10 max-w-lg mx-auto">
          {/* ── heading — font nhỏ hơn trước ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            {/* line 1: "Don't be a" + spinning star */}
            <div className="flex items-start justify-center gap-2 mb-0.5">
              <h2
                className="font-black text-[#1a1a1a] leading-[1.05]"
                style={{
                  fontSize: "clamp(2rem, 5.5vw, 3.8rem)",
                  fontFamily: "'Georgia', serif",
                }}
              >
                Don&apos;t be a
              </h2>
              <motion.span
                className="text-[#3B5BDB] text-xl select-none mt-1.5 flex-shrink-0"
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✦
              </motion.span>
            </div>

            {/* line 2: ✌️ badge + "Stranger" */}
            <div className="flex items-center justify-center gap-2.5 mb-0.5">
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-xl font-black"
                style={{
                  background: "#F5A623",
                  color: "#1a1a1a",
                  border: "2px solid #1a1a1a",
                  boxShadow: "3px 3px 0px #1a1a1a",
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(1.1rem, 3vw, 1.8rem)",
                }}
              >
                Stranger
              </span>
            </div>

            {/* line 3: "let's Chat" */}
            <h2
              className="font-black text-[#1a1a1a] leading-[1.05] text-center"
              style={{
                fontSize: "clamp(2rem, 5.5vw, 3.8rem)",
                fontFamily: "'Georgia', serif",
              }}
            >
              let&apos;s Chat
            </h2>
          </motion.div>

          {/* ── avatar LEFT (big, tilted) + contact RIGHT (bigger than before) ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex items-stretch gap-4"
          >
            {/* avatar — tall, tilted left, 3D shadow blue */}
            <motion.div
              initial={{ rotate: -5 }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="flex-shrink-0"
            >
              <div
                className="w-[100px] rounded-2xl overflow-hidden"
                style={{
                  height: "100%",
                  minHeight: "136px",
                  border: "3px solid #1a1a1a",
                  boxShadow:
                    "6px 6px 0px #3B5BDB, 9px 9px 0px rgba(59,91,219,0.2)",
                }}
              >
                <div
                  className="w-full h-full bg-gradient-to-br from-[#3B5BDB] to-indigo-800 flex items-center justify-center"
                  style={{ minHeight: "136px" }}
                >
                  <span
                    className="text-white font-black text-3xl"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    V
                  </span>
                </div>
              </div>
            </motion.div>

            {/* contact links — to hơn */}
            <div className="flex flex-col gap-3 flex-1">
              {/* email button — cao hơn, font lớn hơn */}
              <motion.a
                href="mailto:lvithong31@gmail.com"
                whileHover={{ scale: 1.02, x: 3 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2.5 px-5 py-[18px] rounded-2xl font-bold text-white w-full"
                style={{
                  background: "#3B5BDB",
                  border: "2px solid #1a1a1a",
                  boxShadow: "3px 3px 0px #1a1a1a",
                  fontSize: "15px",
                }}
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>lvithong31@gmail.com</span>
              </motion.a>

              {/* social icons — cao hơn */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                    icon: <Linkedin className="w-6 h-6" />,
                  },
                  {
                    href: "https://behance.net",
                    label: "Behance",
                    icon: (
                      <span className="font-black text-lg leading-none">
                        Bē
                      </span>
                    ),
                  },
                  {
                    href: "https://github.com",
                    label: "GitHub",
                    icon: <Github className="w-6 h-6" />,
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
                    className="flex items-center justify-center rounded-2xl text-white"
                    style={{
                      background: "#3B5BDB",
                      border: "2px solid #1a1a1a",
                      boxShadow: "2px 2px 0px #1a1a1a",
                      paddingTop: "18px",
                      paddingBottom: "18px",
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
