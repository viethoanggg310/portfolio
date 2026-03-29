"use client";

import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/Card";
import HeroSection from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { caseStudies } from "@/constants/case-studies";
import { personalInfo } from "@/constants/profile";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section - Bento Grid Style */}
      <HeroSection />

      {/* Featured Work Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Featured Work"
            title="My Projects"
            description="Dive into the design process behind products I've helped bring to life."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((study, index) => (
              <CaseStudyCard
                key={study.id}
                title={study.title}
                subtitle={study.subtitle}
                category={study.category}
                year={study.year}
                thumbnail={study.thumbnail}
                slug={study.slug}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Button href="/work" variant="outline">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Brief About Section with Skills */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-medium text-primary-600 mb-2 tracking-wide uppercase">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Designer who learns asdasdsd,
                <br />
                <span className="text-primary-600">builds faster.</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                {personalInfo.about.intro}
              </p>
              <Button
                href="/about"
                className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
              >
                More About Me
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Skills Categories - White with Blue Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                {
                  title: "UX/UI Design",
                  skills: "User Research • Wireframe • Prototype",
                },
                {
                  title: "Front-End Basics",
                  skills: "HTML • CSS • Responsive",
                },
                {
                  title: "Visual & Editing",
                  skills: "Photoshop • Video Editing",
                },
                {
                  title: "Self-Initiated Projects",
                  skills: "Case Studies & Concept Apps",
                },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-bold text-blue-600 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600">{category.skills}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's chat and
              see how I can help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href="/contact"
                className="bg-white text-primary-600 hover:bg-primary-50"
                size="lg"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>

              {/* Email button với thẻ <a> thuần để mailto: work */}
              <a
                href="mailto:lvithong31@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all text-lg font-semibold"
              >
                <Mail className="w-5 h-5" />
                lvithong31@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
