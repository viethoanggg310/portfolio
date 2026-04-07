"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const lines = ["From ideas to", "meaningful, user-centered", "experiences."];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const headY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const bottomY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[#ebebeb] flex flex-col overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.055) 1px, transparent 1px),linear-gradient(90deg, rgba(0,0,0,0.055) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col flex-1 w-full">
        {/* badge */}
        <div className="flex justify-center pt-24 pb-2">
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
              UI/UX Designer
            </span>
            <span className="absolute -top-2 -right-2 text-[#5C7CFA] text-xs">
              ✦
            </span>
          </motion.div>
        </div>

        {/* Headline */}
        <motion.div
          style={{ y: headY }}
          className="flex-1 flex items-center justify-center px-6"
        >
          <h1
            className="font-black text-[#1a1a1a] tracking-tighter text-center w-full"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              lineHeight: 1.0,
            }}
          >
            {lines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={wordReveal}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  style={{
                    fontSize: "clamp(2.6rem, 9vw, 7rem)",
                    display: "block",
                  }}
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </h1>
        </motion.div>

        {/* BOTTOM ROW — avatar to hơn, giống hình ref */}
        <motion.div style={{ y: bottomY }} className="w-full pb-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="max-w-5xl mx-auto flex items-end justify-end gap-8"
          >
            {/* Avatar — to hơn, nghiêng nhẹ như hình mẫu */}
            <motion.div
              initial={{ rotate: -8 }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex-shrink-0"
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  width: "160px",
                  height: "240px",
                  border: "3px solid #1a1a1a",
                  boxShadow: "6px 6px 0px #5C7CFA",
                }}
              >
                <img
                  src="/images/avt.png"
                  alt="Viet Hoang"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* arrow */}
            <svg
              className="flex-shrink-0 mb-14"
              width="60"
              height="52"
              viewBox="0 0 60 52"
              fill="none"
            >
              <path
                d="M4 8 C18 6, 46 26, 56 48"
                stroke="#1a1a1a"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M49 42 L56 48 L48 48"
                stroke="#1a1a1a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>

            {/* text + buttons */}
            <div className="text-left max-w-[300px] mb-4">
              <p className="text-neutral-500 text-[16px] leading-relaxed mb-5">
                Hi, I&apos;m{" "}
                <span className="font-black" style={{ color: "#5C7CFA" }}>
                  Viet Hoang
                </span>
                , a UX/UI Designer turning ideas into simple, user-friendly
                experiences.
              </p>
              <div className="flex items-center gap-2.5 flex-nowrap">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0"
                >
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold rounded-full whitespace-nowrap"
                    style={{
                      background: "#1a1a1a",
                      color: "#fff",
                      border: "1.5px solid #1a1a1a",
                      fontFamily: "'Georgia', serif",
                      letterSpacing: "0.01em",
                    }}
                  >
                    View Work <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0"
                >
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold rounded-full whitespace-nowrap"
                    style={{
                      background: "transparent",
                      color: "#1a1a1a",
                      border: "1.5px solid #1a1a1a",
                      fontFamily: "'Georgia', serif",
                      letterSpacing: "0.01em",
                    }}
                  >
                    Contact Me
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* stars */}
      <motion.div
        className="absolute top-[22%] left-[7%] text-[#5C7CFA] select-none pointer-events-none"
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
        className="absolute bottom-[25%] right-[5%] text-[#5C7CFA] select-none pointer-events-none"
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
          className="w-11 h-11 rounded-full bg-[#5C7CFA] flex items-center justify-center text-white font-bold text-base"
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
