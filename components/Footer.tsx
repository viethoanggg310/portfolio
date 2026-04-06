"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-white" style={{ borderTop: "0.5px solid #c4c4c4" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="inline-flex items-center gap-1.5"
            >
              <span
                className="font-black text-lg text-[#1a1a1a]"
                style={{
                  fontFamily: "'Georgia', serif",
                  fontStyle: "italic",
                  letterSpacing: "-0.04em",
                }}
              >
                viethoang
              </span>
              <span className="text-sm font-black text-[#3B5BDB]">✦</span>
            </motion.div>
          </Link>

          {/* Copyright */}
          <p className="text-xs text-neutral-400 font-semibold text-center">
            © {new Date().getFullYear()} · Designed & built with{" "}
            <span className="text-[#3B5BDB]">✦</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
