"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface SectionTitleProps {
  badge: string;
  badgeVariant?: "orange" | "blue";
  title?: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionTitle({
  badge,
  badgeVariant = "orange",
  title,
  description,
  center = false,
  className = "",
}: SectionTitleProps) {
  const isOrange = badgeVariant === "orange";
  const [badgeHovered, setBadgeHovered] = useState(false);

  return (
    <div
      className={`mb-10 ${center ? "text-center flex flex-col items-center" : ""} ${className}`}
    >
      {/* ── Badge ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -10, rotate: -3 }}
        whileInView={{ opacity: 1, y: 0, rotate: isOrange ? -2 : -1.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{
          rotate: 0,
          scale: 1.06,
          y: -3,
        }}
        className="inline-block mb-4 cursor-default"
        onMouseEnter={() => setBadgeHovered(true)}
        onMouseLeave={() => setBadgeHovered(false)}
      >
        <motion.span
          animate={{
            boxShadow: badgeHovered
              ? isOrange
                ? "5px 5px 0px 0px #3B5BDB"
                : "5px 5px 0px 0px #F5A623"
              : "3px 3px 0px 0px #1a1a1a",
          }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-black tracking-wide select-none"
          style={{
            background: isOrange ? "#F5A623" : "#3B5BDB",
            color: isOrange ? "#1a1a1a" : "#ffffff",
            border: "2px solid #1a1a1a",
            fontFamily: "'Georgia', serif",
          }}
        >
          {badge}
        </motion.span>
      </motion.div>

      {/* ── Title ─────────────────────── */}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ x: 4 }}
          className="text-3xl md:text-5xl font-black text-[#1a1a1a] leading-tight mb-3 cursor-default transition-colors"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {title}
        </motion.h2>
      )}

      {/* ── Description ───────────────── */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className={`text-neutral-500 text-base `}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
