"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* ── Main row ──────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 mb-8">
          {/* Brand + tagline */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -6 }}
                whileTap={{ scale: 0.92 }}
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "#1a1a1a",
                  border: "2px solid #1a1a1a",
                  boxShadow: "2px 2px 0px #3B5BDB",
                }}
              >
                <span
                  className="text-white font-black text-sm"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  V
                </span>
              </motion.div>
            </Link>
            <div>
              <p
                className="font-black text-[#1a1a1a] text-sm"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Viet Hoang
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-neutral-400 font-semibold">
                  Available for internship
                </span>
              </div>
            </div>
          </div>

          {/* Nav links */}
          {/* <nav className="flex flex-wrap gap-x-5 gap-y-1.5">
            {[
              { href: "/work", label: "Work" },
              { href: "/about", label: "About" },
              { href: "/#contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.span
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="flex items-center gap-1 text-sm font-semibold text-neutral-500 hover:text-[#3B5BDB] transition-colors"
                >
                  <span className="text-[#3B5BDB] text-xs">↗</span>
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </nav> */}

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {[
              {
                href: "mailto:lvithong31@gmail.com",
                label: "Email",
                icon: <Mail className="w-4 h-4" />,
              },
              {
                href: "https://linkedin.com",
                label: "LinkedIn",
                icon: <Linkedin className="w-4 h-4" />,
              },
              {
                href: "https://behance.net",
                label: "Behance",
                icon: <span className="font-black text-xs">Bē</span>,
              },
              {
                href: "https://github.com",
                label: "GitHub",
                icon: <Github className="w-4 h-4" />,
              },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  s.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={s.label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-500 hover:text-[#3B5BDB] transition-colors"
                style={{ border: "1.5px solid #e0e0e0" }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ────────────────── */}
        <div className="pt-6 border-t border-[#ebebeb] flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-neutral-400 font-semibold">
            © {new Date().getFullYear()} Viet Hoang. All rights reserved.
          </p>
          <p
            className="text-xs text-neutral-400 font-black"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Designed & built with ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
