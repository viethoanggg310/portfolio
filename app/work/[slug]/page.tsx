import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";

interface ProjectSection {
  number: number;
  title: string;
  content?: string;
  image?: string;
  images?: string[];
}

interface Project {
  title: string;
  subtitle: string;
  category: string;
  year: string;
  heroImage: string;
  accentColor: string;
  info: Record<string, string>;
  sections: ProjectSection[];
}

const projectsData: Record<string, Project> = {
  "PandaPlay-movie-app": {
    title: "Movie Streaming App with Explore-style Discover & Live TV",
    subtitle:
      "PandaPlay is a simple and user-friendly movie streaming app designed to provide a smooth and enjoyable viewing experience. The app allows users to browse, search, and watch movies easily without unnecessary complexity.",
    category: "Mobile App",
    year: "2026",
    heroImage: "/images/cover.png",
    accentColor: "#1a1a2e",
    info: {
      Client: "Concept project",
      Industry: "Entertainment / Media Streaming",
      Service: "Movie Streaming, Content Discovery",
      Platform: "Mobile App (iOS & Android)",
      Role: "UX/UI Designer",
      Timeline: "5 weeks",
    },
    sections: [
      {
        number: 1,
        title: "Problem Statement",
        content:
          "Many movie streaming apps today feel overloaded with features, complicated navigation, and cluttered interfaces. Users often struggle to quickly find movies they want to watch due to overwhelming layouts, poor categorization, or distracting elements.",
      },
      {
        number: 2,
        title: "Possible Solution",
        content:
          "PandaPlay offers a clean and straightforward streaming experience. The app provides clear categories, an efficient search function, and an easy-to-navigate interface. Users can quickly browse trending movies, explore genres, and start watching with minimal steps.",
      },
      {
        number: 3,
        title: "Design Thinking Process",
        images: ["/images/projectpandaplay/design-thinking.png"],
      },
      {
        number: 4,
        title: "Empathy Map",
        images: ["/images/projectpandaplay/empathy-map.png"],
      },
      {
        number: 5,
        title: "User Personas",
        images: ["/images/projectpandaplay/user-personas.png"],
      },
      {
        number: 6,
        title: "User Flow",
        images: ["/images/projectpandaplay/user-flow.png"],
      },
      {
        number: 7,
        title: "Mid-Fidelity Wireframe",
        images: ["/images/projectpandaplay/mid-wireframe.png"],
      },
      {
        number: 8,
        title: "UI Design",
        images: [
          "/images/projectpandaplay/ui1.png",
          "/images/projectpandaplay/ui2.png",
          "/images/projectpandaplay/ui3.png",
        ],
      },
    ],
  },
  "teaee-dashboard": {
    title: "Teaee - Tea Ordering System",
    subtitle:
      "This app simplifies the in-store milk tea ordering experience. Customers scan a QR code at the cafe to instantly access the menu, customize their drinks, and place orders without waiting in line.",
    category: "Web Dashboard",
    year: "2026",
    heroImage: "/images/cover teaee.png",
    accentColor: "#e8f5e4",
    info: {
      Client: "Personal Project",
      Industry: "Food & Beverage",
      Service: "Product Design",
      Platform: "Web Dashboard & Mobile",
      Role: "UX/UI Designer",
      Timeline: "6 weeks",
    },
    sections: [
      {
        number: 1,
        title: "Problem Statement",
        content:
          "During busy hours, customers often face long waiting times and ordering mistakes when ordering drinks verbally. Staff are under pressure handling multiple orders at once, leading to miscommunication, slower service, and a stressful in-store experience.",
      },
      {
        number: 2,
        title: "Solution",
        content:
          "Teaee is a QR-based ordering system that allows customers to scan, customize, and place drink orders directly from their phones. Orders are sent instantly to a staff dashboard with clear details, helping tea shops reduce errors, speed up service, and create a smoother experience.",
      },
      {
        number: 3,
        title: "Design Process",
        content:
          "The design process of Teaee followed a user-centered approach, focusing on understanding both customer and staff needs in a fast-paced tea shop environment.",
        image: "/images/teaee/design-process.png",
      },
      {
        number: 4,
        title: "User Personas",
        image: "/images/teaee/user-personas-teaee.png",
      },
      {
        number: 5,
        title: "User Flow",
        image: "/images/teaee/user-flow-teaee.png",
      },
      {
        number: 6,
        title: "UI Design (Web - Customer)",
        images: [
          "/images/teaee/web-customer-1.png",
          "/images/teaee/web-customer-2.png",
          "/images/teaee/web-customer-3.png",
        ],
      },
      {
        number: 7,
        title: "UI Design (Mobile - Customer)",
        images: [
          "/images/teaee/web-staff-1.png",
          "/images/teaee/web-staff-2.png",
          "/images/teaee/web-staff-3.png",
          "/images/teaee/web-staff-4.png",
        ],
      },
    ],
  },
  "LearnSpace-platform": {
    title: "LearnSpace Platform",
    subtitle:
      "Making online learning feel human with a clean, accessible educational platform.",
    category: "EdTech",
    year: "2023",
    heroImage: "/images/cover.png",
    accentColor: "#e8f0ff",
    info: {
      Client: "Personal Project",
      Industry: "Education",
      Service: "Product Design",
      Platform: "Web",
      Role: "UX/UI Designer",
      Timeline: "2 weeks",
    },
    sections: [
      {
        number: 1,
        title: "Challenge",
        content:
          "Learning feels impersonal. Existing platforms prioritize content delivery over learner experience, making it hard for users to stay engaged and motivated.",
      },
      {
        number: 2,
        title: "Approach",
        content:
          "Human-centered design with a focus on community, progress visibility, and clean content hierarchy.",
        image: "/images/cover.png",
      },
    ],
  },
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-white">
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      {/* sticky back */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-[#ebebeb]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-[#1a1a1a] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>
          <span
            className="text-xs font-black px-4 py-1.5 rounded-full"
            style={{
              background: "#F5A623",
              color: "#1a1a1a",
              border: "2px solid #1a1a1a",
              boxShadow: "2px 2px 0px #1a1a1a",
              fontFamily: "'Georgia', serif",
            }}
          >
            {project.category} · {project.year}
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-12 relative z-10">
        <div className="mb-10">
          <h1
            className="font-black text-[#1a1a1a] leading-tight mb-6"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontFamily: "'Georgia', serif",
            }}
          >
            {project.title}
          </h1>
          <p className="text-neutral-500 text-[16px] leading-relaxed max-w-3xl mb-10">
            {project.subtitle}
          </p>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: project.accentColor,
              border: "2px solid #1a1a1a",
              boxShadow: "6px 6px 0px #1a1a1a",
            }}
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 mt-16">
          {/* sidebar — larger info text */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "#ebebeb",
                  border: "2px solid #1a1a1a",
                  boxShadow: "4px 4px 0px #1a1a1a",
                }}
              >
                <h3 className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-5">
                  Project Info
                </h3>
                <div className="space-y-5">
                  {Object.entries(project.info).map(([key, value]) => (
                    <div key={key}>
                      {/* ✅ smaller label */}
                      <p className="text-[10px] font-black uppercase tracking-wider text-neutral-400 mb-0.5">
                        {key}
                      </p>
                      {/* ✅ larger value */}
                      <p className="text-base font-bold text-[#1a1a1a]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* sections */}
          <div className="lg:col-span-3 space-y-16">
            {project.sections.map((section) => (
              <div key={section.number} className="space-y-5">
                <div className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white"
                    style={{ background: "#1a1a1a" }}
                  >
                    {section.number}
                  </span>
                  <h2
                    className="text-xl font-black text-[#1a1a1a]"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {section.title}
                  </h2>
                </div>
                {section.content && (
                  <p className="text-[15px] text-neutral-600 leading-relaxed pl-11 whitespace-pre-line">
                    {section.content}
                  </p>
                )}
                {section.image && (
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      border: "2px solid #1a1a1a",
                      boxShadow: "4px 4px 0px #1a1a1a",
                    }}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-auto"
                    />
                  </div>
                )}
                {section.images?.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden"
                    style={{
                      border: "2px solid #1a1a1a",
                      boxShadow: "4px 4px 0px #1a1a1a",
                    }}
                  >
                    <img
                      src={img}
                      alt={`${section.title} ${i + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Footer — white bg, contact style, avatar LEFT + buttons RIGHT */}
      <div className="relative z-10 border-t-2 border-[#ebebeb] mt-24 bg-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
            backgroundSize: "52px 52px",
          }}
        />
        <div className="relative z-10 max-w-lg mx-auto px-6 py-24">
          {/* heading — smaller than homepage */}
          <div className="text-center mb-10">
            <span className="inline-block text-[#3B5BDB] text-xl mb-3 select-none">
              ✦
            </span>
            <h2
              className="font-black text-[#1a1a1a] leading-tight mb-1"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontFamily: "'Georgia', serif",
              }}
            >
              Don&apos;t be a{" "}
              <span
                className="inline-block px-3 py-0.5 rounded-xl align-middle"
                style={{
                  background: "#F5A623",
                  color: "#1a1a1a",
                  border: "2px solid #1a1a1a",
                  boxShadow: "3px 3px 0px #1a1a1a",
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(1.2rem, 3vw, 2rem)",
                }}
              >
                Stranger
              </span>
            </h2>
            <h2
              className="font-black text-[#1a1a1a] leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontFamily: "'Georgia', serif",
              }}
            >
              let&apos;s Chat
            </h2>
          </div>

          {/* avatar LEFT + contact RIGHT */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden"
              style={{
                border: "3px solid #1a1a1a",
                boxShadow: "4px 4px 0px #1a1a1a",
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#3B5BDB] to-indigo-800 flex items-center justify-center">
                <span
                  className="text-white font-black text-2xl"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  V
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <a
                href="mailto:lvithong31@gmail.com"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-white text-sm hover:opacity-90 transition-opacity"
                style={{
                  background: "#3B5BDB",
                  border: "2px solid #1a1a1a",
                  boxShadow: "3px 3px 0px #1a1a1a",
                }}
              >
                <Mail className="w-4 h-4" /> lvithong31@gmail.com
              </a>
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                    icon: <Linkedin className="w-5 h-5" />,
                  },
                  {
                    href: "https://behance.net",
                    label: "Behance",
                    icon: <span className="font-black text-sm">Bē</span>,
                  },
                  {
                    href: "https://github.com",
                    label: "GitHub",
                    icon: <Github className="w-5 h-5" />,
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center justify-center py-3.5 rounded-2xl text-white hover:opacity-90 transition-opacity"
                    style={{
                      background: "#3B5BDB",
                      border: "2px solid #1a1a1a",
                      boxShadow: "2px 2px 0px #1a1a1a",
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* More projects */}
          <div className="text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 font-black rounded-full text-[#1a1a1a] text-sm bg-white hover:bg-[#ebebeb] transition-colors"
              style={{
                border: "2px solid #1a1a1a",
                boxShadow: "3px 3px 0px #1a1a1a",
                fontFamily: "'Georgia', serif",
              }}
            >
              More Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
