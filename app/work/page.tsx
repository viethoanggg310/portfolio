"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import Link from "next/link";

// Types
interface Project {
  id: number;
  title: string;
  slug: string; // ← THÊM SLUG
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
}

// ✏️ PROJECTS DATA - ĐÃ THÊM SLUG
const projects: Project[] = [
  {
    id: 1,
    title: "PandaPlay",
    slug: "PandaPlay-movie-app", // ← PHẢI KHỚP VỚI [slug]/page.tsx
    category: "App Design",
    description:
      "A modern movie streaming app focused on personalized recommendations and seamless viewing experience.",
    image: "/images/cover.png",
    tags: ["UI/UX", "Mobile", "Figma"],
    year: "2026",
  },
  {
    id: 2,
    title: "Teaee",
    slug: "teaee-dashboard", // ← PHẢI KHỚP VỚI [slug]/page.tsx
    category: "Web Design",
    description:
      "A dual-interface ordering system designed for both customers and staff, streamlining in-store purchases.",
    image: "/images/cover teaee.png",
    tags: ["UI/UX", "Web App", "Ordering System", "Dashboard"],
    year: "2026",
  },
  {
    id: 3,
    title: "LearnSpace",
    slug: "LearnSpace-platform", // ← PHẢI KHỚP VỚI [slug]/page.tsx
    category: "App Design",
    description:
      "Health and fitness app with personalized workout plans and progress tracking.",
    image: "/projects/project3.jpg",
    tags: ["UI/UX", "Mobile", "Health"],
    year: "2023",
  },
];

const categories = ["All", "App Design", "Web Design"];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Thoughtful UX decisions. Clean UI execution.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-3 items-center"
        >
          <Filter className="w-5 h-5 text-gray-400" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* ✅ WRAP CARD VỚI LINK */}
                <Link
                  href={`/work/${project.slug}`}
                  className="block group cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-6">
                    <motion.div
                      animate={{
                        scale: hoveredId === project.id ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-full"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </motion.div>

                    {/* Overlay on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center"
                    >
                      <span className="text-white font-semibold text-lg">
                        View Project
                      </span>
                    </motion.div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-900">
                      {project.year}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 font-medium">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-400">
              No projects found in this category
            </p>
          </motion.div>
        )}
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's build meaningful products together!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm currently looking for an internship or junior UX/UI position.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-700 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
