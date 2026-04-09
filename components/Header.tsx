"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/work", label: "work" },
  { href: "/about", label: "about" },
  { href: "/#contact", label: "contact", isAnchor: true },
];

const RESUME_DRIVE_LINK = "https://drive.google.com/your-cv-link-here";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  // ✅ Logo click: scroll to top on home, navigate to home on other pages
  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // else: default Link behavior navigates to "/"
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-lg border-b-2 border-[#ebebeb]"
            : "bg-transparent",
        )}
      >
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* ── Logo ──────────────────── */}
            {/* ── Logo ──────────────────── */}
            <Link href="/" className="relative z-50" onClick={handleLogoClick}>
              <motion.div
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="inline-flex items-center gap-1.5"
              >
                <span
                  className="font-black text-xl text-[#1a1a1a]"
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontStyle: "italic",
                    letterSpacing: "-0.04em",
                  }}
                >
                  viethoang
                </span>
                <span
                  className="text-sm font-black text-[#3B5BDB]"
                  style={{ lineHeight: 1 }}
                >
                  ✦
                </span>
              </motion.div>
            </Link>

            {/* ── Desktop Nav ───────────── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = link.isAnchor ? false : pathname === link.href;
                const isHov = hoveredLink === link.href;

                const sharedStyle = {
                  color: isActive || isHov ? "#1a1a1a" : "#888",
                };

                const innerContent = (
                  <>
                    <AnimatePresence>
                      {(isHov || isActive) && (
                        <motion.span
                          key="bg"
                          layoutId="navBg"
                          className="absolute inset-0 rounded-lg"
                          style={{ background: "#ebebeb" }}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.85 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 28,
                          }}
                        />
                      )}
                    </AnimatePresence>

                    <span className="relative z-10 flex items-center gap-1.5">
                      <motion.span
                        animate={{
                          opacity: isActive || isHov ? 1 : 0.3,
                          x: isActive || isHov ? 0 : -3,
                          rotate: isHov ? 0 : -15,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-[#3B5BDB] text-xs font-bold"
                      >
                        ↗
                      </motion.span>
                      <motion.span
                        animate={{
                          letterSpacing: isHov ? "0.04em" : "0em",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.label}
                      </motion.span>
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-[#1a1a1a]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                );

                return link.isAnchor ? (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleContactClick}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    whileHover={{ y: -1 }}
                    className="relative px-4 py-2 text-sm font-bold cursor-pointer flex items-center gap-1 rounded-lg overflow-hidden"
                    style={sharedStyle}
                  >
                    {innerContent}
                  </motion.a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative px-4 py-2 text-sm font-bold flex items-center gap-1 rounded-lg overflow-hidden"
                    style={sharedStyle}
                  >
                    <motion.span
                      className="absolute inset-0 flex items-center"
                      whileHover={{ y: -1 }}
                    />
                    {innerContent}
                  </Link>
                );
              })}

              {/* Resume CTA */}
              <motion.a
                href={
                  "https://drive.google.com/drive/folders/1PihT0_2HnNRbAQ_hpiVZjQExTQiGQeO2?usp=drive_link"
                }
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.06,
                  y: -2,
                  boxShadow: "5px 5px 0px #3B5BDB",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="ml-2 inline-flex items-center gap-2 px-4 py-2 text-white text-sm font-black rounded-full"
                style={{
                  background: "#1a1a1a",
                  border: "2px solid #1a1a1a",
                  boxShadow: "3px 3px 0px #3B5BDB",
                  fontFamily: "'Georgia', serif",
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 0] }}
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.span>
                Resume
              </motion.a>
            </div>

            {/* ── Mobile Toggle ─────────── */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 md:hidden p-2 text-neutral-600 hover:text-neutral-900"
              whileTap={{ scale: 0.88 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* ── Mobile Menu ───────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-[#1a1a1a]/25 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-white"
              style={{
                borderLeft: "2px solid #1a1a1a",
                boxShadow: "-6px 0px 0px #3B5BDB",
              }}
            >
              <nav className="flex flex-col pt-24 px-6 gap-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {link.isAnchor ? (
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 6 }}
                        onClick={(e) => {
                          handleContactClick(e);
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-2 py-3 text-lg font-black border-b-2 border-[#ebebeb] text-neutral-600"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        <span className="text-[#3B5BDB] text-sm">↗</span>
                        {link.label}
                      </motion.a>
                    ) : (
                      <Link href={link.href}>
                        <motion.span
                          whileHover={{ x: 6 }}
                          className={cn(
                            "flex items-center gap-2 py-3 text-lg font-black border-b-2 border-[#ebebeb] transition-colors",
                            pathname === link.href
                              ? "text-[#1a1a1a]"
                              : "text-neutral-500",
                          )}
                          style={{ fontFamily: "'Georgia', serif" }}
                        >
                          <span className="text-[#3B5BDB] text-sm">↗</span>
                          {link.label}
                        </motion.span>
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6"
                >
                  <motion.a
                    href={RESUME_DRIVE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-black rounded-full"
                    style={{
                      background: "#1a1a1a",
                      border: "2px solid #1a1a1a",
                      boxShadow: "3px 3px 0px #3B5BDB",
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    <ArrowUpRight className="w-4 h-4" /> Resume
                  </motion.a>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
