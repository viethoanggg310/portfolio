"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Linkedin, Globe, ArrowUpRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/constants/profile";

const iconMap: { [key: string]: React.ElementType } = {
  Mail,
  Linkedin,
  Globe,
  Dribbble: Globe,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="relative z-50">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-xl">
                  Viet Hoang
                </span>
                <span className="text-blue-600">.</span>
              </motion.div>
            </Link>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Product Designer crafting thoughtful digital experiences that
              solve real problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/work", label: "Case Studies" },
                { href: "/about", label: "About" },
                { href: "/resume", label: "Resume" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-600 hover:text-primary-600 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wider">
              Let's Connect
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || Globe;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target={
                      link.url.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel={
                      link.url.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors text-sm group"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © {currentYear} VietHoang. All rights reserved.
          </p>
          <p className="text-sm text-neutral-400">Designed & built with 💙</p>
        </div>
      </div>
    </footer>
  );
}
