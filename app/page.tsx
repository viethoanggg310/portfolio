"use client";

import HeroSection from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import ContactSection from "@/components/ContactSection";
import { motion, useAnimationFrame } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
  // {
  //   id: 3,
  //   title: "LearnSpace",
  //   slug: "LearnSpace-platform",
  //   category: "EdTech",
  //   description:
  //     "Making online learning feel human with a clean, accessible platform.",
  //   image: "/projects/project3.jpg",
  //   tags: ["UI/UX", "Web"],
  //   year: "2023",
  //   accentBg: "#e8f0ff",
  // },
];

const PILLS = [
  { text: "UX/UI ✦ DESIGNER", color: "orange" },
  { text: "VIET ✦ HOANG", color: "blue" },
  { text: "UX/UI ✦ DESIGNER", color: "orange" },
  { text: "VIET ✦ HOANG", color: "blue" },
  { text: "UX/UI ✦ DESIGNER", color: "orange" },
  { text: "UX/UI ✦ DESIGNER", color: "blue" },
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
              background: p.color === "orange" ? "#FF8E53" : "#5C7CFA",
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setHovered(false);
      }}
      style={{ perspective: "900px", transformStyle: "preserve-3d" }}
    >
      <Link href={`/work/${project.slug}`} className="block">
        <motion.div
          animate={{
            rotateX: tilt.x,
            rotateY: tilt.y,
            scale: hovered ? 1.02 : 1,
            boxShadow: hovered ? "8px 8px 0px #5C7CFA" : "4px 4px 0px #1a1a1a",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4"
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
            className="absolute inset-x-0 bottom-0 h-1/2 flex items-end justify-between px-5 pb-5"
            style={{
              background:
                "linear-gradient(to top, rgba(26,26,26,0.92) 0%, transparent 100%)",
            }}
          >
            <span className="text-white font-bold text-sm">
              View Case Study
            </span>
            <div
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0"
              style={{ border: "2px solid rgba(255,255,255,0.3)" }}
            >
              <ArrowUpRight className="w-5 h-5 text-[#1a1a1a]" />
            </div>
          </motion.div>
          <motion.div
            animate={{ opacity: hovered ? 0 : 0.4 }}
            className="absolute top-4 left-4 text-white text-base select-none"
          >
            ✦
          </motion.div>
          <motion.div
            animate={{ y: hovered ? -2 : 0 }}
            className="absolute top-3 right-3"
          >
            <span
              className="inline-block px-3 py-1.5 rounded-lg text-xs font-black"
              style={{
                background: "#FF8E53",
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
        <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-1">
          {project.category} · {project.year}
        </p>
        <motion.h3
          animate={{ color: hovered ? "#5C7CFA" : "#1a1a1a" }}
          transition={{ duration: 0.18 }}
          className="text-lg font-black mb-1.5"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {project.title}
        </motion.h3>
        <p className="text-sm text-neutral-500 leading-relaxed mb-3">
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
              transition={{ duration: 0.18 }}
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
      whileHover={{ y: -4, boxShadow: "4px 4px 0px #5C7CFA" }}
      className="bg-white rounded-xl p-5"
      style={{ border: "2px solid #1a1a1a", boxShadow: "3px 3px 0px #1a1a1a" }}
    >
      <h3
        className="text-sm font-black text-[#5C7CFA] mb-1"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {title}
      </h3>
      <p className="text-xs text-neutral-500">{skills}</p>
    </motion.div>
  );
}

const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 ${className}`}
  >
    {children}
  </div>
);

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

      <div className="overflow-hidden bg-white py-8">
        <Marquee />
      </div>

      {/* Projects */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            badge="Selected ✦ Works"
            badgeVariant="orange"
            title="My Projects"
            description="A selection of personal projects showcasing my UX/UI design process and problem-solving approach."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block"
            >
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-7 py-3 font-black rounded-full text-[#1a1a1a] bg-white text-sm"
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
        </Container>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            badge="About ✦ Me"
            badgeVariant="blue"
            title="Designing simple, meaningful digital experiences"
          />
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-neutral-600 leading-relaxed mb-6 text-base max-w-2xl text-justify">
                I&apos;m a UX/UI Designer with 6 months of experience, driven by
                a passion for solving user problems and creating simple,
                meaningful digital experiences. Through self-initiated projects
                in food delivery and entertainment, I focus on understanding
                user needs, refining interactions, and delivering clean,
                intuitive interfaces.
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
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "UX/UI Design",
                  skills: "Research · Wireframe · Prototype",
                },
                {
                  title: "Interaction Design",
                  skills: "User Flows · Usability · Micro-interactions",
                },
                {
                  title: "Visual Design",
                  skills: "Layout · Typography · Color Systems",
                },
                {
                  title: "Product Thinking",
                  skills: "Problem Solving · Iteration · User-Centered",
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
        </Container>
      </section>

      {/* ✅ Dùng chung ContactSection — giống y hệt slug page */}
      <ContactSection />
    </>
  );
}
