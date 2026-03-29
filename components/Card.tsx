"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hoverable?: boolean;
}

export function Card({
  children,
  className,
  href,
  hoverable = true,
}: CardProps) {
  const cardContent = (
    <motion.div
      whileHover={hoverable ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-white rounded-2xl border border-neutral-200 overflow-hidden",
        hoverable &&
          "hover:shadow-lg hover:border-primary-200 transition-shadow",
        className,
      )}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
}

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  category: string;
  year: string;
  thumbnail: string;
  slug: string;
  index: number;
}

export function CaseStudyCard({
  title,
  subtitle,
  category,
  year,
  thumbnail,
  slug,
  index,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/work/${slug}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] mb-4">
          {/* Actual image */}
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-300 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
            >
              <ArrowUpRight className="w-5 h-5 text-primary-600" />
            </motion.div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span>{category}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
            <span>{year}</span>
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-neutral-600 line-clamp-2">{subtitle}</p>
        </div>
      </Link>
    </motion.div>
  );
}
