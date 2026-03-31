"use client";

import HeroSection from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { motion, useAnimationFrame } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "PandaPlay",
    slug: "PandaPlay-movie-app",
    category: "Mobile App",
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
      "A QR-based ordering system for bubble tea shops that helps customers customize drinks easily.",
    image: "/images/cover teaee.png",
    tags: ["UI/UX", "Web App", "Dashboard"],
    year: "2026",
    accentBg: "#e8f5e4",
  },
  {
    id: 3,
    title: "LearnSpace",
    slug: "LearnSpace-platform",
    category: "EdTech",
    description:
      "Making online learning feel human with a clean, accessible platform.",
    image: "/projects/project3.jpg",
    tags: ["UI/UX", "Web"],
    year: "2023",
    accentBg: "#e8f0ff",
  },
];

const PILLS = [
  { text: "Project ✦ Pixel", color: "orange" },
  { text: "Project ✦ Pixel", color: "blue" },
  { text: "Project ✦ Pixel", color: "orange" },
  { text: "Project ✦ Pixel", color: "blue" },
  { text: "Project ✦ Pixel", color: "orange" },
  { text: "Project ✦ Pixel", color: "blue" },
];

function Marquee() {
  const x = useRef(0);
  const [offset, setOffset] = useState(0);
  useAnimationFrame((_, delta) => {
    x.current -= delta * 0.05;
    if (x.current < -820) x.current = 0;
    setOffset(x.current);
  });
  const items = [...PILLS, ...PILLS, ...PILLS];
  return (
    <div
      className="overflow-hidden py-4 border-y-2 border-[#1a1a1a]"
      style={{ transform: "rotate(-1.5deg)", margin: "0 -80px" }}
    >
      <div
        className="flex gap-4 whitespace-nowrap w-max"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {items.map((p, i) => (
          <span
            key={i}
            className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-black flex-shrink-0"
            style={{
              fontFamily: "'Georgia', serif",
              background: p.color === "orange" ? "#F5A623" : "#3B5BDB",
              color: p.color === "orange" ? "#1a1a1a" : "#fff",
              border: "2px solid #1a1a1a",
              boxShadow: "3px 3px 0px #1a1a1a",
            }}
          >
            {p.text}
          </span>
        ))}
      </div>
    </div>
  );
}

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          animate={{
            y: hovered ? -6 : 0,
            boxShadow: hovered ? "6px 6px 0px #3B5BDB" : "4px 4px 0px #1a1a1a",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3"
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
                scale: hovered ? 1 : 0.85,
                y: hovered ? 0 : 10,
                opacity: hovered ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
                style={{ border: "2px solid #1a1a1a" }}
              >
                <ArrowUpRight className="w-5 h-5 text-[#1a1a1a]" />
              </div>
              <span className="text-white font-bold text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                View Case Study
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ opacity: hovered ? 0 : 0.4 }}
            className="absolute top-3 left-3 text-white text-base select-none"
          >
            ✦
          </motion.div>
          <motion.div
            animate={{ y: hovered ? -2 : 0 }}
            className="absolute top-3 right-3"
          >
            <span
              className="inline-block px-2.5 py-1 rounded-lg text-xs font-black"
              style={{
                background: "#F5A623",
                color: "#1a1a1a",
                border: "2px solid #1a1a1a",
                boxShadow: "2px 2px 0px #1a1a1a",
                fontFamily: "'Georgia', serif",
              }}
            >
              {project.title}
            </span>
          </motion.div>
        </motion.div>
        <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-0.5">
          {project.category} · {project.year}
        </p>
        <motion.h3
          animate={{ color: hovered ? "#3B5BDB" : "#1a1a1a" }}
          transition={{ duration: 0.18 }}
          className="text-lg font-black mb-1"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {project.title}
        </motion.h3>
        <p className="text-sm text-neutral-500 leading-relaxed mb-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              animate={{
                background: hovered ? "#3B5BDB" : "#f0f0f0",
                color: hovered ? "#fff" : "#1a1a1a",
              }}
              transition={{ duration: 0.18 }}
              className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
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

function SkillCard({
  title,
  skills,
  index,
}: {
  title: string;
  skills: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -4, boxShadow: "4px 4px 0px #3B5BDB" }}
      className="bg-white rounded-xl p-4"
      style={{ border: "2px solid #1a1a1a", boxShadow: "3px 3px 0px #1a1a1a" }}
    >
      <h3
        className="text-sm font-black text-[#3B5BDB] mb-1"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {title}
      </h3>
      <p className="text-xs text-neutral-500">{skills}</p>
    </motion.div>
  );
}

export default function Home() {
  useEffect(() => {
    if (window.location.hash === "#contact") {
      setTimeout(
        () =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" }),
        300,
      );
    }
  }, []);

  return (
    <>
      <HeroSection />

      {/* Marquee */}
      <div className="overflow-hidden bg-white py-8">
        <Marquee />
      </div>

      {/* My Projects — bg white, NO border */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            badge="Project ✦ Pixel"
            badgeVariant="orange"
            title="My Projects"
            description="Dive into the design process behind products I've helped bring to life."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block"
            >
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-2.5 font-black rounded-full text-[#1a1a1a] bg-white text-sm"
                style={{
                  border: "2px solid #1a1a1a",
                  boxShadow: "3px 3px 0px #1a1a1a",
                  fontFamily: "'Georgia', serif",
                }}
              >
                View All Projects <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ✅ About Me — bg WHITE (not grey), NO border */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            badge="About ✦ Me"
            badgeVariant="blue"
            title="Designer who learns fast, builds faster."
          />
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-neutral-600 leading-relaxed mb-6 text-sm">
                I&apos;m a junior product designer passionate about crafting
                intuitive and meaningful digital experiences. I&apos;ve worked
                on self-initiated projects across e-commerce, education, and
                productivity tools — focusing on usability, research, and clean
                UI.
              </p>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white font-bold rounded-full text-sm"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  More About Me <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  title: "UX/UI Design",
                  skills: "Research · Wireframe · Prototype",
                },
                {
                  title: "Front-End Basics",
                  skills: "HTML · CSS · Responsive",
                },
                {
                  title: "Visual & Editing",
                  skills: "Photoshop · Video Editing",
                },
                {
                  title: "Self-Initiated",
                  skills: "Case Studies & Concept Apps",
                },
              ].map((c, i) => (
                <SkillCard
                  key={c.title}
                  title={c.title}
                  skills={c.skills}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact — NO border */}
      <section
        id="contact"
        className="py-16 px-6 bg-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
            backgroundSize: "52px 52px",
          }}
        />
        <div className="relative z-10 max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
                className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0"
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
    </>
  );
}
