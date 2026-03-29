"use client";

import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-primary-100 mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-neutral-600 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. Maybe it was moved
            or deleted.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/">
              <Home className="w-4 h-4" />
              Go Home
            </Button>
            <Button href="/work" variant="outline">
              View Work
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
