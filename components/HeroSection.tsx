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
          backgroundImage: `
          linear-gradient(rgba(0,0,0,0.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.055) 1px, transparent 1px)
        `,
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

        {/* headline fills middle */}
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

        {/* ── BOTTOM: avatar LEFT, arrow, description RIGHT ── */}
        <motion.div style={{ y: bottomY }} className="w-full pb-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="max-w-5xl mx-auto flex items-end justify-start gap-8"
          >
            {/* ✅ avatar LEFT */}
            <motion.div
              initial={{ rotate: -6 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex-shrink-0"
            >
              <div
                className="w-[100px] h-[120px] rounded-2xl overflow-hidden shadow-xl"
                style={{ border: "3px solid #fff" }}
              >
                {/* 👉 Replace: <Image src="/avatar.jpg" alt="Viet Hoang" fill className="object-cover" /> */}
                <div className="w-full h-full bg-gradient-to-br from-[#3B5BDB] to-indigo-800 flex items-center justify-center">
                  <span
                    className="text-white font-black text-4xl"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    V
                  </span>
                </div>
              </div>
            </motion.div>

            {/* curved arrow pointing left→right toward description */}
            <svg
              className="flex-shrink-0 text-[#1a1a1a] mb-6"
              width="52"
              height="40"
              viewBox="0 0 52 40"
              fill="none"
            >
              <path
                d="M48 4 C38 4, 14 20, 4 36"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M10 30 L4 36 L12 36"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>

            {/* ✅ description RIGHT of avatar */}
            <div className="text-left max-w-[260px] mb-2">
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                Hi, I&apos;m{" "}
                <strong className="text-[#1a1a1a] font-bold">Viet Hoang</strong>{" "}
                and I design intuitive, user-centered experiences that simplify
                complexity.
              </p>
              <div className="flex items-center gap-2.5 flex-wrap">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a1a1a] text-white text-xs font-bold rounded-full"
                  >
                    View Work <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-bold rounded-full hover:bg-[#1a1a1a] hover:text-white transition-colors"
                  >
                    Let&apos;s Talk
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* stars */}
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

      {/* scroll indicator */}
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
