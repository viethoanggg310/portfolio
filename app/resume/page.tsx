"use client";

import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  ExternalLink,
} from "lucide-react";

// Types
interface Project {
  title: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface Language {
  name: string;
  proficiency: string;
  icon: string;
}

// Data
const contactInfo = {
  name: "Viet Hoang",
  title: "Product Designer (UI/UX)",
  email: "lvithong31@gmail.com",
  phone: "+84 868 468 976",
  location: "Ha Long, Quang Ninh, Viet Nam",
  website: "viethoang.design",
  github: "github.com/viethoang",
  linkedin: "linkedin.com/in/viethoang",
};

const summary =
  "UI/UX Designer focused on creating intuitive and user-centered digital experiences. Passionate about solving real user problems through research-driven design and clean interface solutions.";

const projects: Project[] = [
  {
    title: "PandaPlay - Movie Streaming App",
    role: "UX/UI Designer (Personal Project)",
    period: "2024",
    description:
      "Redesigned the content discovery experience for a movie streaming app to reduce browsing friction. Conducted competitor analysis and user research to identify navigation pain points. Created user flows and high-fidelity mobile prototypes in Figma focusing on personalized recommendations and simplified browsing.",
    technologies: ["Figma", "User Research", "UI Design"],
  },
  {
    title: "Teaee - Tea Ordering System",
    role: "UX/UI Designer (Personal Project)",
    period: "2024",
    description:
      "Designed a dual-interface ordering system for both customers and store staff. Mapped service workflows and user journeys to optimize ordering speed and reduce operational confusion. Developed interactive prototypes to test usability and flow efficiency.",
    technologies: ["Figma", "Service Design", "User Flows", "Wireframing"],
  },
];

const languages: Language[] = [
  { name: "Vietnamese", proficiency: "Native", icon: "🇻🇳" },
  { name: "English", proficiency: "Professional", icon: "🇬🇧" },
];

export default function Resume() {
  const handleDownload = () => {
    alert("Download functionality - Connect to your actual CV PDF file.");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Actions */}
      <section className="px-6 py-8 md:px-12 lg:px-24 max-w-7xl mx-auto border-b border-gray-200 print:border-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Resume
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-3 print:hidden"
          >
            <button
              onClick={handlePrint}
              className="px-6 py-3 bg-gray-100 text-gray-900 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Print
            </button>
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </motion.div>
        </div>
      </section>

      {/* Resume Content */}
      <div className="px-6 py-12 md:px-12 lg:px-24 max-w-5xl mx-auto">
        {/* Contact Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            {contactInfo.name}
          </h2>
          <p className="text-xl text-gray-600 mb-6">{contactInfo.title}</p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 hover:text-gray-900"
            >
              <Mail className="w-4 h-4" />
              {contactInfo.email}
            </a>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {contactInfo.phone}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {contactInfo.location}
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-600">
            <a
              href={`https://${contactInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900"
            >
              <Globe className="w-4 h-4" />
              {contactInfo.website}
            </a>
            <a
              href={`https://${contactInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={`https://${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.section>

        {/* Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 pb-12 border-b border-gray-200 print:border-gray-300"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </motion.section>

        {/* Skills - CATEGORIZED TAGS STYLE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 pb-12 border-b border-gray-200 print:border-gray-300"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills</h3>

          <div className="space-y-6">
            {/* Design Skills */}
            <div>
              <h4 className="text-base font-semibold text-gray-700 mb-3">
                Design Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "UI Design",
                  "UX Research",
                  "Wireframing",
                  // "Prototyping",
                  "Design Systems",
                  // "Visual Design",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-base font-semibold text-gray-700 mb-3">
                Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Photoshop", "Illustrator", "FigJam", "Miro"].map(
                  (skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ),
                )}
              </div>
            </div>

            {/* Development */}
            <div>
              <h4 className="text-base font-semibold text-gray-700 mb-3">
                Development
              </h4>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript Basics"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            {/* <div>
              <h4 className="text-base font-semibold text-gray-700 mb-3">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "User Testing",
                  "Presentation",
                  "Collaboration",
                  "Problem Solving",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div> */}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 pb-12 border-b border-gray-200 print:border-gray-300"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h3>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 font-medium">{project.role}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">
                      {project.period}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition-colors print:hidden"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Languages */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Languages</h3>

          <div className="grid grid-cols-2 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-gray-50"
              >
                <div className="text-4xl mb-2">{language.icon}</div>
                <h4 className="font-bold text-gray-900 mb-1">
                  {language.name}
                </h4>
                <p className="text-sm text-gray-600">{language.proficiency}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          @page {
            margin: 1.5cm;
          }
        }
      `}</style>
    </div>
  );
}
