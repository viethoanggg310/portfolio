"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden flex items-center py-20">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-blue-50 via-transparent to-transparent opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Available for Projects
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-4"
              >
                <p className="text-lg text-gray-600">
                  Hello, I'm{" "}
                  <span className="font-semibold text-blue-600">
                    Viet Hoang
                  </span>
                </p>
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
                  UI/UX Designer
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
              >
                Crafting beautiful, intuitive digital experiences that make a
                difference. Based in Vietnam, working with clients worldwide.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/work">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2"
                  >
                    View My Work
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all"
                  >
                    Let's Talk
                  </motion.button>
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex items-center gap-4 pt-4"
              >
                <span className="text-sm text-gray-500 font-medium">
                  Connect:
                </span>
                <div className="flex gap-3">
                  {[
                    {
                      icon: <Github className="w-5 h-5" />,
                      href: "#",
                      color: "hover:bg-gray-900 hover:text-white",
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      href: "#",
                      color: "hover:bg-blue-600 hover:text-white",
                    },
                    {
                      icon: <Twitter className="w-5 h-5" />,
                      href: "#",
                      color: "hover:bg-sky-500 hover:text-white",
                    },
                    {
                      icon: <Mail className="w-5 h-5" />,
                      href: "#",
                      color: "hover:bg-red-500 hover:text-white",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 transition-all ${social.color}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Visual Card (NO STATS) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Container with Border */}
              <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-blue-500 p-12 overflow-hidden ">
                {/* Subtle Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />

                {/* Floating Tool Icons */}
                <motion.div
                  animate={{
                    y: [-12, 12, -12],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-16 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <span className="text-2xl">💻</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [12, -12, 12],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute top-24 right-16 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <span className="text-2xl">🎨</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-20 left-16 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <span className="text-2xl">✏️</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    rotate: [0, -3, 0],
                  }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                  className="absolute bottom-24 right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <span className="text-2xl">⭐</span>
                </motion.div>

                {/* Center Portrait Circle */}
                <div className="relative z-10 flex flex-col items-center justify-center py-8">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Main Circle */}
                    <div className="relative flex flex-col items-center">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-20 scale-110" />

                      {/* Circle with white border */}
                      <div className="relative w-64 h-64 bg-white rounded-full p-3 shadow-2xl">
                        <div className="w-full h-full rounded-full overflow-hidden">
                          {/* TO ADD YOUR PHOTO: */}
                          {/* 1. Put your photo in public/portrait.jpg */}
                          {/* 2. Uncomment the Image below */}
                          {/* 3. Delete the emoji */}

                          {/* Character Placeholder - DELETE THIS */}
                          {/* REPLACE WITH YOUR IMAGE - UNCOMMENT BELOW */}
                          <div className="w-full h-full rounded-full overflow-hidden">
                            <img
                              src="/vh.png"
                              alt="Viet Hoang"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Name Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      className="mt-8 px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg shadow-xl mx-auto"
                    >
                      Viet Hoang - UI/UX Designer
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
}
