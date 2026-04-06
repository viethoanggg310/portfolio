"use client";

import HeroSection from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { motion, useAnimationFrame } from "framer-motion";
import { ArrowUpRight, Mail, Facebook, Instagram } from "lucide-react";
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
  { text: "UX/UI ✦ DESIGNER", color: "orange" },
  { text: "VIET ✦ HOANG", color: "blue" },
  { text: "UX/UI ✦ DESIGNER", color: "orange" },
  { text: "VIET ✦ HOANG", color: "blue" },
  { text: "UX/UI ✦ DESIGNER", color: "orange" },
  { text: "UX/UI ✦ DESIGNER", color: "blue" },
];

// ✅ Chỉ cần sửa array này để thay đổi text contact — style tự giữ nguyên
// const contactLines = [
//   { text: "Don’t be shy", highlight: false },
//   { text: "Hello", highlight: true },
//   { text: "Let's talk", highlight: false },
// ];

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
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: cy * -10, y: cx * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
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
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "900px", transformStyle: "preserve-3d" }}
    >
      <Link href={`/work/${project.slug}`} className="block">
        <motion.div
          animate={{
            rotateX: tilt.x,
            rotateY: tilt.y,
            scale: hovered ? 1.02 : 1,
            boxShadow: hovered ? "8px 8px 0px #3B5BDB" : "4px 4px 0px #1a1a1a",
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

        <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-1">
          {project.category} · {project.year}
        </p>
        <motion.h3
          animate={{ color: hovered ? "#3B5BDB" : "#1a1a1a" }}
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
                background: hovered ? "#3B5BDB" : "#f0f0f0",
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
      whileHover={{ y: -4, boxShadow: "4px 4px 0px #3B5BDB" }}
      className="bg-white rounded-xl p-5"
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
              <p className="text-neutral-600 leading-relaxed mb-6 text-m max-w-2xl text-justify [hyphens:auto]">
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

      {/* ── Contact ── */}
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

        <div className="relative z-10">
          {/* heading — không giới hạn width, whitespace-nowrap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <div className="flex items-start justify-center gap-2 mb-0.5">
              <h2
                className="font-black text-[#1a1a1a] leading-[1.05] whitespace-nowrap"
                style={{
                  fontSize: "clamp(2rem, 5.5vw, 3.8rem)",
                  fontFamily: "'Georgia', serif",
                }}
              >
                Don’t be shy
              </h2>
              <motion.span
                className="text-[#3B5BDB] text-xl select-none mt-1.5 flex-shrink-0"
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✦
              </motion.span>
            </div>
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
                Hello
              </span>
            </div>
            <h2
              className="font-black text-[#1a1a1a] leading-[1.05] text-center whitespace-nowrap"
              style={{
                fontSize: "clamp(2rem, 5.5vw, 3.8rem)",
                fontFamily: "'Georgia', serif",
              }}
            >
              let&apos;s Talk
            </h2>
          </motion.div>

          {/* social — giữ max-w-lg */}
          <div className="max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex items-stretch gap-4"
            >
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
              <div className="flex flex-col gap-3 flex-1">
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
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      href: "https://www.facebook.com/Brazes.3110/",
                      label: "Facebook",
                      icon: <Facebook className="w-6 h-6" />,
                    },
                    {
                      href: "https://www.behance.net/vhoang310",
                      label: "Behance",
                      icon: (
                        <span className="font-black text-lg leading-none">
                          Bē
                        </span>
                      ),
                    },
                    {
                      href: "https://www.instagram.com/vhoang.310/",
                      label: "Instagram",
                      icon: <Instagram className="w-6 h-6" />,
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
        </div>
      </section>
    </>
  );
}
