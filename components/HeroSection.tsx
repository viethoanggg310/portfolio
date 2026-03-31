"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 80, skewY: 4 },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const headY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const bottomY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const words = [
    "Making",
    "beautiful,",
    "intuitive",
    "digital",
    "experiences.",
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[#ebebeb] flex flex-col overflow-hidden"
    >
      {/* grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.055) 1px, transparent 1px),linear-gradient(90deg, rgba(0,0,0,0.055) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col flex-1 w-full">
        {/* badge top center */}
        <div className="flex justify-center pt-24 pb-4">
          <motion.div
            initial={{ opacity: 0, y: -14, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="relative inline-flex items-center px-5 py-2 rounded-xl cursor-default"
            style={{
              background: "#F5A623",
              boxShadow: "3px 3px 0px #1a1a1a",
              border: "2px solid #1a1a1a",
            }}
          >
            <span
              className="font-black text-[#1a1a1a] text-sm"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              A UI/UX Designer
            </span>
            <span className="absolute -top-2 -right-2 text-[#3B5BDB] text-xs">
              ✦
            </span>
          </motion.div>
        </div>

        {/* headline */}
        <motion.div
          style={{ y: headY }}
          className="flex-1 flex items-center justify-center px-4"
        >
          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="font-black text-[#1a1a1a] leading-[0.88] tracking-tighter text-center"
            style={{
              fontSize: "clamp(3rem, 10vw, 8.5rem)",
              fontFamily: "'Georgia', 'Times New Roman', serif",
            }}
          >
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.1em]">
                <motion.span className="inline-block" variants={wordReveal}>
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>
        </motion.div>

        {/* ── BOTTOM ROW: text LEFT · arrow · avatar RIGHT (ref style) ── */}
        <motion.div style={{ y: bottomY }} className="w-full pb-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="max-w-5xl mx-auto flex items-end justify-end gap-5"
          >
            {/* ── intro text + buttons ── */}
            <div className="text-left max-w-[250px] mb-3">
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                Hi, I&apos;m{" "}
                <span
                  className="font-black"
                  style={{
                    color: "#3B5BDB",
                    textShadow: "1px 1px 0px rgba(59,91,219,0.18)",
                  }}
                >
                  Viet Hoang
                </span>{" "}
                and I design intuitive, user-centered experiences that simplify
                complexity.
              </p>

              <div className="flex items-center gap-2 flex-wrap">
                {/* View Work — blue filled */}
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-black rounded-full"
                    style={{
                      background: "#3B5BDB",
                      color: "#fff",
                      border: "2px solid #1a1a1a",
                      boxShadow: "3px 3px 0px #1a1a1a",
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    View Work <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>

                {/* Let's Talk — orange outlined */}
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-black rounded-full"
                    style={{
                      background: "#F5A623",
                      color: "#1a1a1a",
                      border: "2px solid #1a1a1a",
                      boxShadow: "3px 3px 0px #1a1a1a",
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    Let&apos;s Talk ✦
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* curved arrow pointing to avatar */}
            <svg
              className="flex-shrink-0 mb-10"
              width="52"
              height="44"
              viewBox="0 0 52 44"
              fill="none"
            >
              <path
                d="M4 8 C16 6, 38 22, 48 40"
                stroke="#1a1a1a"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M42 34 L48 40 L40 40"
                stroke="#1a1a1a"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>

            {/* ── avatar card, tilted right ── */}
            <motion.div
              initial={{ rotate: 6 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex-shrink-0"
            >
              <div
                className="w-[118px] h-[148px] rounded-3xl overflow-hidden"
                style={{
                  border: "3px solid #fff",
                  boxShadow: "5px 5px 0px #3B5BDB",
                }}
              >
                {/* 👉 Replace: <Image src="/avatar.jpg" alt="Viet Hoang" fill className="object-cover" /> */}
                <div className="w-full h-full bg-gradient-to-br from-[#3B5BDB] to-indigo-800 flex items-center justify-center">
                  <span
                    className="text-white font-black text-5xl"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    V
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* spinning stars */}
      <motion.div
        className="absolute top-[22%] left-[7%] text-[#3B5BDB] select-none pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{
          opacity: { duration: 0.3, delay: 1 },
          scale: { duration: 0.3, delay: 1 },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
        style={{ fontSize: 52 }}
      >
        ✦
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] right-[5%] text-[#3B5BDB] select-none pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: -360 }}
        transition={{
          opacity: { duration: 0.3, delay: 1.2 },
          scale: { duration: 0.3, delay: 1.2 },
          rotate: { duration: 13, repeat: Infinity, ease: "linear" },
        }}
        style={{ fontSize: 34 }}
      >
        ✦
      </motion.div>

      {/* scroll button */}
      <motion.div
        className="absolute bottom-8 left-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.button
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-11 h-11 rounded-full bg-[#3B5BDB] flex items-center justify-center text-white font-bold text-base"
          style={{
            border: "2px solid #1a1a1a",
            boxShadow: "3px 3px 0px #1a1a1a",
          }}
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          ↓
        </motion.button>
      </motion.div>
    </section>
  );
}
