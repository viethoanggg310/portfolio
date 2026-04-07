"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { Mail, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";

const DESIGN_SKILLS = [
  { label: "UI Design", icon: "🎨" },
  { label: "UX Research", icon: "🔍" },
  { label: "Prototyping", icon: "⚡" },
  { label: "Wireframing", icon: "✏️" },
  { label: "User Flow", icon: "🗺️" },
  { label: "Design Thinking", icon: "💡" },
];

const FigmaLogo = () => (
  <svg width="20" height="20" viewBox="0 0 38 57" fill="none">
    <path
      d="M19 28.5C19 24.9 21.9 22 25.5 22C29.1 22 32 24.9 32 28.5C32 32.1 29.1 35 25.5 35C21.9 35 19 32.1 19 28.5Z"
      fill="#1ABCFE"
    />
    <path
      d="M6 41.5C6 37.9 8.9 35 12.5 35H19V41.5C19 45.1 16.1 48 12.5 48C8.9 48 6 45.1 6 41.5Z"
      fill="#0ACF83"
    />
    <path
      d="M19 9V22H25.5C29.1 22 32 19.1 32 15.5C32 11.9 29.1 9 25.5 9H19Z"
      fill="#FF7262"
    />
    <path
      d="M6 15.5C6 19.1 8.9 22 12.5 22H19V9H12.5C8.9 9 6 11.9 6 15.5Z"
      fill="#F24E1E"
    />
    <path
      d="M6 28.5C6 32.1 8.9 35 12.5 35H19V22H12.5C8.9 22 6 24.9 6 28.5Z"
      fill="#A259FF"
    />
  </svg>
);

const CanvaLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="20" fill="#7D2AE7" />
    <path
      d="M50 15C30.7 15 15 30.7 15 50C15 69.3 30.7 85 50 85C56.2 85 62 83.3 67 80.3C65.3 78.2 64.3 75.5 64.3 72.6C64.3 65.9 69.7 60.5 76.4 60.5C78.6 60.5 80.6 61.1 82.3 62.2C84.1 58.4 85 54.3 85 50C85 30.7 69.3 15 50 15Z"
      fill="white"
    />
    <circle cx="50" cy="45" r="10" fill="#7D2AE7" />
  </svg>
);

const CapCutLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="22" fill="#000" />
    <rect x="20" y="20" width="28" height="60" rx="5" fill="white" />
    <rect x="52" y="20" width="28" height="28" rx="5" fill="#00C2FF" />
    <rect x="52" y="52" width="28" height="28" rx="5" fill="white" />
  </svg>
);

const PhotoshopLogo = () => (
  <svg width="20" height="20" viewBox="0 0 50 50" fill="none">
    <rect width="50" height="50" rx="9" fill="#001E36" />
    <text
      x="5"
      y="36"
      fontSize="28"
      fontWeight="bold"
      fill="#31A8FF"
      fontFamily="Arial"
    >
      Ps
    </text>
  </svg>
);

const TOOL_SKILLS = [
  { label: "Figma", logo: <FigmaLogo /> },
  { label: "Canva", logo: <CanvaLogo /> },
  { label: "CapCut", logo: <CapCutLogo /> },
  { label: "Photoshop", logo: <PhotoshopLogo /> },
];

function DesignSkillPill({
  label,
  icon,
  index,
}: {
  label: string;
  icon: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-default"
    >
      <motion.div
        animate={{
          y: hovered ? -5 : 0,
          boxShadow: hovered ? "5px 5px 0px #3B5BDB" : "3px 3px 0px #1a1a1a",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 20 }}
        className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white"
        style={{ border: "2px solid #1a1a1a" }}
      >
        <motion.span
          animate={{ scale: hovered ? 1.3 : 1, rotate: hovered ? 12 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="text-xl select-none"
        >
          {icon}
        </motion.span>
        <motion.span
          animate={{ color: hovered ? "#3B5BDB" : "#1a1a1a" }}
          className="text-sm font-black"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {label}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

function ToolPill({
  label,
  logo,
  index,
}: {
  label: string;
  logo: React.ReactNode;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-default"
    >
      <motion.div
        animate={{
          y: hovered ? -5 : 0,
          boxShadow: hovered ? "5px 5px 0px #F5A623" : "3px 3px 0px #1a1a1a",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 20 }}
        className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white"
        style={{ border: "2px solid #1a1a1a" }}
      >
        <motion.div
          animate={{ scale: hovered ? 1.15 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="flex-shrink-0"
        >
          {logo}
        </motion.div>
        <motion.span
          animate={{ color: hovered ? "#F5A623" : "#1a1a1a" }}
          className="text-sm font-black"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {label}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

const experiences = [
  {
    year: "2026",
    title: "UX/UI Designer (Personal Project)",
    company: "PandaPlay – Movie Streaming App",
    desc: "Conducted user research and competitor analysis. Designed user flows, wireframes, and high-fidelity mobile prototypes in Figma.",
  },
  {
    year: "2026",
    title: "UX/UI Designer (Personal Project)",
    company: "Teaee – Tea Ordering System",
    desc: "Designed a QR-based ordering system for bubble tea shops. Created customer-facing web UI and staff dashboard.",
  },
];

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

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      {/* ✅ Hero — 2 cột: text trái, ảnh phải */}
      <section className="relative z-10 pt-28 pb-12">
        <Container>
          <SectionTitle badge="About ✦ Me" badgeVariant="blue" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Cột trái — text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="font-black text-[#1a1a1a] mb-6"
                style={{
                  fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                  fontFamily: "'Georgia', serif",
                  lineHeight: 1.05,
                }}
              >
                Hi, I&apos;m Viet Hoang
              </h1>
              <div className="space-y-3 max-w-xl">
                <p className="text-neutral-600 leading-relaxed text-sm">
                  I&apos;m a UX/UI designer passionate about creating simple,
                  intuitive, and meaningful digital experiences.
                </p>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  My journey started with a curiosity about how people interact
                  with products — and how design can make those interactions
                  smoother and more enjoyable. Over the past 6 months, I've been
                  learning and practicing through self-initiated projects,
                  focusing on solving real user problems with thoughtful design
                  decisions.
                </p>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  I've worked on projects in areas like food delivery, movie
                  streaming, and productivity tools — where I explored user
                  behavior, refined user flows, and designed clean,
                  user-friendly interfaces.
                </p>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  Currently, I'm looking for opportunities to grow as a
                  designer, contribute to real products, and continue building
                  meaningful digital experiences.
                </p>
              </div>
            </motion.div>

            {/* ✅ Cột phải — ảnh của bạn
                Bước 1: Đặt ảnh vào /public/images/about.jpg (ảnh dọc đẹp hơn, tỉ lệ 3:4)
                Bước 2: Xóa div placeholder bên dưới
                Bước 3: Uncomment thẻ <Image> */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                whileHover={{ rotate: 0, scale: 1.02 }}
                initial={{ rotate: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative"
              >
                <div
                  className="w-[280px] h-[360px] rounded-3xl overflow-hidden relative"
                  style={{
                    border: "3px solid #1a1a1a",
                    boxShadow: "8px 8px 0px #3B5BDB",
                  }}
                >
                  {/* 👇 PLACEHOLDER — xóa div này khi đã có ảnh
                  <div className="w-full h-full bg-gradient-to-br from-[#3B5BDB] to-indigo-800 flex flex-col items-center justify-center gap-3">
                    <span
                      className="text-white font-black text-7xl"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      V
                    </span>
                    <span className="text-white/60 text-xs font-semibold text-center px-4">
                      Thay bằng ảnh của bạn tại
                      <br />
                      /public/images/about.jpg
                    </span>
                  </div> */}

                  {/* 👇 THAY ẢNH — uncomment đoạn này và xóa div placeholder ở trên */}
                  <Image
                    src="/images/vh.png"
                    alt="Viet Hoang"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* badge nhỏ góc dưới trái */}
                <div
                  className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl text-xs font-black"
                  style={{
                    background: "#F5A623",
                    color: "#1a1a1a",
                    border: "2px solid #1a1a1a",
                    boxShadow: "2px 2px 0px #1a1a1a",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  UI/UX Designer ✦
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="relative z-10 py-12 bg-white">
        <Container>
          <SectionTitle
            badge="Skills ✦"
            badgeVariant="blue"
            title="Design Skills"
            description="Key areas I focus on when designing digital experiences."
          />
          <div className="flex flex-wrap gap-3 mb-10">
            {DESIGN_SKILLS.map((s, i) => (
              <DesignSkillPill
                key={s.label}
                label={s.label}
                icon={s.icon}
                index={i}
              />
            ))}
          </div>
          <SectionTitle
            badge="Tools ✦"
            badgeVariant="orange"
            title="Tools I Use"
            description="Tools I use to bring ideas to life."
          />
          <div className="flex flex-wrap gap-3 mb-10">
            {TOOL_SKILLS.map((s, i) => (
              <ToolPill key={s.label} label={s.label} logo={s.logo} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="relative z-10 py-12">
        <Container>
          <SectionTitle
            badge="Journey ✦"
            badgeVariant="blue"
            title="Experience"
            description="My journey in the world of design."
          />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center pt-1 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-3.5 h-3.5 rounded-full bg-[#3B5BDB]"
                    style={{
                      border: "2px solid #1a1a1a",
                      boxShadow: "2px 2px 0px #1a1a1a",
                    }}
                  />
                  {i < experiences.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#d0d0d0] mt-1.5" />
                  )}
                </div>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="pb-6"
                >
                  <span className="text-xs font-black text-[#3B5BDB] uppercase tracking-widest">
                    {exp.year}
                  </span>
                  <h3
                    className="text-base font-black text-[#1a1a1a] mt-0.5 mb-0.5"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-semibold mb-1.5">
                    {exp.company}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {exp.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <ContactSection />
    </div>
  );
}
