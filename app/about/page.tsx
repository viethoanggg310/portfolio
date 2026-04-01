"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { Mail, Linkedin, Github } from "lucide-react";
import { useRef, useState } from "react";

const DESIGN_SKILLS = [
  { label: "UI Design", icon: "🎨" },
  { label: "UX Research", icon: "🔍" },
  { label: "Prototyping", icon: "⚡" },
  { label: "Wireframing", icon: "✏️" },
  { label: "User Flow", icon: "🗺️" },
  { label: "Design Thinking", icon: "💡" },
  { label: "Interaction Design", icon: "🖱️" },
  { label: "Information Arch.", icon: "🏗️" },
  { label: "UX Strategy", icon: "📐" },
  { label: "Usability Testing", icon: "🧪" },
];

const TOOL_SKILLS = [
  { label: "Figma", icon: "🖊️" },
  { label: "Canva", icon: "🎭" },
  { label: "Capcut", icon: "✂️" },
  { label: "Photoshop", icon: "🖼️" },
  { label: "Framer", icon: "⚙️" },
  { label: "Gen AI", icon: "🤖" },
];

function SkillPill({
  label,
  icon,
  index,
  variant = "design",
}: {
  label: string;
  icon: string;
  index: number;
  variant?: "design" | "tool";
}) {
  const [hovered, setHovered] = useState(false);
  const isDesign = variant === "design";
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
          boxShadow: hovered
            ? isDesign
              ? "5px 5px 0px #3B5BDB"
              : "5px 5px 0px #F5A623"
            : "3px 3px 0px #1a1a1a",
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
          animate={{
            color: hovered ? (isDesign ? "#3B5BDB" : "#F5A623") : "#1a1a1a",
          }}
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

// ✅ Đồng bộ Container với home + work
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

      {/* Hero */}
      <section className="relative z-10 pt-28 pb-12">
        <Container>
          <SectionTitle badge="About ✦ Me" badgeVariant="blue" />
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-black text-[#1a1a1a] mb-6"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              fontFamily: "'Georgia', serif",
              lineHeight: 1.05,
            }}
          >
            Hi, I&apos;m Viet Hoang
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-3 max-w-2xl"
          >
            <p className="text-neutral-600 leading-relaxed text-sm">
              I&apos;m a UX/UI designer passionate about crafting intuitive and
              meaningful digital experiences. Through self-initiated projects
              and case studies, I focus on solving real user problems with
              thoughtful design decisions.
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm">
              I enjoy turning research insights into clean, functional
              interfaces — balancing usability with strong visual design.
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm">
              Currently seeking internship or junior UX/UI opportunities to
              grow, contribute, and build impactful products.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Skills */}
      <section className="relative z-10 py-12 bg-white">
        <Container>
          <SectionTitle
            badge="Skills ✦"
            badgeVariant="blue"
            title="Design Skills"
            description="Core competencies I bring to every project"
          />
          <div className="flex flex-wrap gap-3 mb-10">
            {DESIGN_SKILLS.map((s, i) => (
              <SkillPill
                key={s.label}
                label={s.label}
                icon={s.icon}
                index={i}
                variant="design"
              />
            ))}
          </div>
          <SectionTitle
            badge="Tools ✦"
            badgeVariant="orange"
            title="Tools I Use"
            description="The toolkit that powers my design workflow"
          />
          <div className="flex flex-wrap gap-3 mb-10">
            {TOOL_SKILLS.map((s, i) => (
              <SkillPill
                key={s.label}
                label={s.label}
                icon={s.icon}
                index={i}
                variant="tool"
              />
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
            description="My journey in the world of design"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
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
