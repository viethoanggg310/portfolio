"use client";

import { motion } from "framer-motion";
import { Mail, Facebook, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      <div className="relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="flex items-start justify-center gap-2 mb-0.5">
            <h2
              className="font-black text-[#1a1a1a] leading-[1.05] whitespace-nowrap"
              style={{
                fontSize: "clamp(2rem, 5.5vw, 3rem)",
                fontFamily: "'Georgia', serif",
              }}
            >
              Don&apos;t be shy
            </h2>
            <motion.span
              className="text-[#5C7CFA] text-xl select-none mt-1.5 flex-shrink-0"
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✦
            </motion.span>
          </div>
          <div className="flex items-center justify-center gap-2.5 mb-0.5">
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-xl font-black"
              style={{
                background: "#FF8E53",
                color: "#1a1a1a",
                border: "2px solid #1a1a1a",
                boxShadow: "3px 3px 0px #1a1a1a",
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
              }}
            >
              Hello
            </span>
          </div>
          <h2
            className="font-black text-[#1a1a1a] leading-[1.05] text-center whitespace-nowrap"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3rem)",
              fontFamily: "'Georgia', serif",
            }}
          >
            let&apos;s Talk
          </h2>
        </motion.div>

        {/* ── avatar to hơn + contact links ── */}
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex items-stretch gap-5"
          >
            {/* avatar — to hơn, giống hình ref */}
            <motion.div
              initial={{ rotate: 5 }}
              whileHover={{ rotate: -5, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="flex-shrink-0"
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  width: "130px",
                  height: "100%",
                  minHeight: "200px",
                  border: "3px solid #1a1a1a",
                  boxShadow:
                    "6px 6px 0px #5C7CFA, 9px 9px 0px rgba(92,124,250,0.2)",
                }}
              >
                <img
                  src="/images/avt.png"
                  alt="Viet Hoang"
                  className="w-full h-full object-cover object-top"
                  style={{ minHeight: "168px" }}
                />
              </div>
            </motion.div>

            {/* links */}
            <div className="flex flex-col gap-3 flex-1">
              <motion.a
                href="mailto:lvithong31@gmail.com"
                whileHover={{ scale: 1.02, x: 3 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2.5 px-5 rounded-3xl font-bold text-white w-[460px] h-[100px]"
                style={{
                  background: "#5C7CFA",
                  border: "2px solid #1a1a1a",
                  boxShadow: "3px 3px 0px #1a1a1a",
                  fontSize: "26px",
                  // paddingTop: "36px",
                  // paddingBottom: "36px",
                  // paddingLeft: "36px",
                  // paddingRight: "36px",
                }}
              >
                <Mail className="w-8 h-8 flex-shrink-0" />
                <span>lvithong31@gmail.com</span>
              </motion.a>
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    href: "https://www.facebook.com/Brazes.3110/",
                    label: "Facebook",
                    icon: <Facebook className="w-8 h-8" />,
                  },
                  {
                    href: "https://www.behance.net/vhoang310",
                    label: "Behance",
                    icon: (
                      <span className="font-black text-2xl leading-none">
                        Bē
                      </span>
                    ),
                  },
                  {
                    href: "https://www.instagram.com/vhoang.310/",
                    label: "Instagram",
                    icon: <Instagram className="w-8 h-8" />,
                  },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center rounded-2xl text-white"
                    style={{
                      background: "#5C7CFA",
                      border: "2px solid #1a1a1a",
                      boxShadow: "2px 2px 0px #1a1a1a",
                      paddingTop: "22px",
                      paddingBottom: "22px",
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
