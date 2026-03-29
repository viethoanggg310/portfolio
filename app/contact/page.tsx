"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  CheckCircle,
  Globe,
  MessageSquare,
} from "lucide-react";

// Types
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  username: string;
  color: string;
}

// Data
const contactInfo = {
  email: "lvithong31@gmail.com",
  availability: "Open to internship & junior opportunities",
  responseTime: "Available for freelance collaborations",
};

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: <Github className="w-6 h-6" />,
    url: "https://github.com/iluvserna",
    username: "@viethoang",
    color: "hover:bg-gray-900 hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    url: "https://linkedin.com/in/alexjohnson",
    username: "@viethoang",
    color: "hover:bg-blue-600 hover:text-white",
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-6 h-6" />,
    url: "https://twitter.com/alexjohnson",
    username: "@viethoang",
    color: "hover:bg-sky-500 hover:text-white",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    url: "https://www.instagram.com/vhoang.310/",
    username: "@vhoang.310",
    color: "hover:bg-pink-600 hover:text-white",
  },
  {
    name: "Portfolio",
    icon: <Globe className="w-6 h-6" />,
    url: "https://alexjohnson.design",
    username: "alexjohnson.design",
    color: "hover:bg-purple-600 hover:text-white",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Let's Talk
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Interested in working together or discussing a product idea? Let’s
            create something meaningful.
          </p>
        </motion.div>
      </section>

      <div className="px-6 pb-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Social */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Email Card */}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Email Me
                  </h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors block mb-3"
                  >
                    {contactInfo.email}
                  </a>
                  <div className="space-y-1 text-sm text-gray-500">
                    <p>✓ {contactInfo.availability}</p>
                    <p>✓ {contactInfo.responseTime}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-xl border-2 border-gray-200 transition-all duration-300 flex items-center gap-4 ${social.color}`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">{social.name}</h4>
                      <p className="text-sm opacity-75">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 text-white"
            >
              <MessageSquare className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Let's Collaborate</h3>
              <p className="text-gray-300 leading-relaxed">
                Available for freelance projects and full-time opportunities.
                Let’s create meaningful digital products.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-green-50 border-2 border-green-200 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="Viet Hoang"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="lvithong31@gmail.com"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>

                  <p className="text-sm text-gray-500 text-center">
                    * This is a demo form. In production, connect it to your
                    backend or email service.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Quick Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What's your typical response time?",
                a: "I usually respond to inquiries within 24 hours on business days.",
              },
              {
                q: "What types of projects do you work on?",
                a: "I specialize in UI/UX design for web and mobile applications, design systems, and user research projects.",
              },
              {
                q: "Do you work remotely?",
                a: "Yes, I’m open to remote internships, freelance collaborations, and full-time opportunities.",
              },
              {
                q: "What's your availability?",
                a: "I’m currently open to internship, junior, and freelance opportunities. Feel free to reach out to discuss further",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gray-50"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
