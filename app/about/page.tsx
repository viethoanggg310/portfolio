"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Palette,
  Figma,
  Users,
  Coffee,
  Music,
  Camera,
  BookOpen,
} from "lucide-react";

// Types
interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}

// ✏️ SKILLS - ĐÃ THAY ĐỔI
const skills: Skill[] = [
  { name: "UI Design", level: 75, icon: <Palette className="w-5 h-5" /> },
  { name: "Figma", level: 80, icon: <Figma className="w-5 h-5" /> },
  { name: "UX Research", level: 65, icon: <Users className="w-5 h-5" /> },
  { name: "HTML/CSS", level: 60, icon: <Code className="w-5 h-5" /> },
];

const experiences: Experience[] = [
  {
    year: "2026",
    role: "UX/UI Designer (Personal Project)",
    company: "PandaPlay – Movie Streaming App Case Study",
    description:
      "Conducted user research and competitor analysis on streaming platforms to improve content discovery and engagement. Designed user flows, wireframes, and high-fidelity mobile prototypes in Figma. Focused on personalized recommendations, intuitive navigation, and an immersive viewing experience.",
  },
  {
    year: "2026",
    role: "UX/UI Designer (Personal Project)",
    company: "Teaee – Integrated Tea Ordering System Case Study",
    description:
      "Researched in-store ordering behaviors and operational workflows to design a dual-interface system for customers and staff. Developed user journeys, wireframes, and interactive prototypes in Figma. Focused on streamlining QR-based ordering, enhancing customer convenience, and optimizing staff efficiency.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Hi, I'm Viet Hoang
          </h1>
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
            <p>
              I'm a UX/UI designer passionate about crafting intuitive and
              meaningful digital experiences. Through self-initiated projects
              and case studies, I focus on solving real user problems with
              thoughtful design decisions.
            </p>
            <p>
              I enjoy turning research insights into clean, functional
              interfaces — balancing usability with strong visual design.
            </p>
            <p>
              Currently seeking internship or junior UX/UI opportunities to
              grow, contribute, and build impactful products.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            Tools and methodologies I use to craft exceptional user experiences
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-gray-700">{skill.icon}</div>
                    <span className="font-medium text-gray-900">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gray-900 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            My journey in the world of design
          </p>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-gray-200 hover:border-gray-900 transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-900 rounded-full" />

                <div className="space-y-2">
                  <span className="text-sm font-medium text-gray-500">
                    {exp.year}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-gray-700 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's create something amazing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/work"
              className="px-8 py-4 bg-gray-100 text-gray-900 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
