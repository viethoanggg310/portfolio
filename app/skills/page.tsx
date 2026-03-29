"use client";

import { motion } from "framer-motion";
import { Users, Palette, Wrench, Code } from "lucide-react";

// Types
interface SkillItem {
  name: string;
  level?: string;
}

interface SkillCategory {
  emoji: string;
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

// ✏️ SKILLS DATA - PHÙ HỢP CHO FRESHER
const skillCategories: SkillCategory[] = [
  {
    emoji: "1️⃣",
    title: "UX Skills",
    icon: <Users className="w-6 h-6" />,
    skills: [
      { name: "User Research", level: "Basic" },
      { name: "User Flow" },
      { name: "Wireframing" },
      { name: "Information Architecture" },
      { name: "User Testing", level: "Basic" },
    ],
  },
  {
    emoji: "2️⃣",
    title: "UI & Visual Design",
    icon: <Palette className="w-6 h-6" />,
    skills: [
      { name: "Interface Design" },
      { name: "Design Systems", level: "Basic" },
      { name: "Typography & Layout" },
      { name: "Responsive Design" },
    ],
  },
  {
    emoji: "3️⃣",
    title: "Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "Figma" },
      { name: "Photoshop" },
      { name: "Illustrator" },
      { name: "FigJam" },
    ],
  },
  {
    emoji: "4️⃣",
    title: "Front-End Knowledge",
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Responsive Layout" },
      { name: "Basic JavaScript", level: "Basic" },
    ],
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

export default function Skill() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            My Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Tools and methodologies I use to craft exceptional user experiences
          </p>
        </motion.div>
      </section>

      {/* Skills Categories */}
      <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-lg transition-all"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.emoji}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    className="flex items-center justify-between text-gray-700"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">•</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    {skill.level && (
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {skill.level}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Learning Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Always Learning
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm continuously improving my skills and staying updated with the
            latest design trends and tools. Currently learning more about design
            systems and advanced prototyping.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Design Systems",
              "Advanced Prototyping",
              "Motion Design",
              "Accessibility",
            ].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
              >
                📚 {topic}
              </span>
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
            Let's work together
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm eager to learn and contribute to meaningful projects
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
