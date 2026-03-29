import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// ===== TYPESCRIPT TYPES =====
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
  info: {
    Client: string;
    Industry: string;
    Service: string;
    Platform: string;
    Role: string;
    Timeline: string;
  };
  sections: ProjectSection[];
}

// ===== PROJECT DATA =====
const projectsData: Record<string, Project> = {
  "PandaPlay-movie-app": {
    title: "Movie Streaming App with Explore-style Discover & Live TV",
    subtitle:
      "PandaPlay is a simple and user-friendly movie streaming app designed to provide a smooth and enjoyable viewing experience. The app allows users to browse, search, and watch movies easily without unnecessary complexity. PandaPlay focuses on clean design, intuitive navigation, and fast access to content, making movie watching convenient for everyday users.",
    category: "Mobile App",
    year: "2026",
    heroImage: "/images/cover.png",
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
          "Many movie streaming apps today feel overloaded with features, complicated navigation, and cluttered interfaces. Users often struggle to quickly find movies they want to watch due to overwhelming layouts, poor categorization, or distracting elements. There is a need for a simple, easy-to-use streaming app that prioritizes clarity, accessibility, and a seamless viewing experience without unnecessary distractions.",
      },
      {
        number: 2,
        title: "Possible Solution",
        content:
          "PandaPlay offers a clean and straightforward streaming experience. The app provides clear categories, an efficient search function, and an easy-to-navigate interface. Users can quickly browse trending movies, explore genres, and start watching with minimal steps. By focusing on simplicity and usability, PandaPlay ensures that users can enjoy their favorite movies without confusion or friction.",
        // image: "/images/cover.png",
      },
      {
        number: 3,
        title: "Design Thinking Process",
        // content: "Created an Instagram-style Explore feed.",
        images: ["/images/projectpandaplay/design-thinking.png"],
      },
      {
        number: 4,
        title: "Empathy Map",
        // content: "Created an Instagram-style Explore feed.",
        images: ["/images/projectpandaplay/empathy-map.png"],
      },
      {
        number: 5,
        title: "User Personas",
        // content: "Created an Instagram-style Explore feed.",
        images: ["/images/projectpandaplay/user-personas.png"],
      },
      {
        number: 6,
        title: "User Flow",
        // content: "Created an Instagram-style Explore feed.",
        images: ["/images/projectpandaplay/user-flow.png"],
      },
      {
        number: 7,
        title: "Mid-Fidelity Wireframe",
        // content: "Created an Instagram-style Explore feed.",
        images: ["/images/projectpandaplay/mid-wireframe.png"],
      },
      {
        number: 8,
        title: "UI Design",
        // content: "Created an Instagram-style Explore feed.",
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
      "This app simplifies the in-store milk tea ordering experience. Customers scan a QR code at the cafe to instantly access the menu, customize their drinks, and place orders without waiting in line. The solution focuses on speed, convenience, and a smooth digital experience for both customers and shop owners. ",
    category: "Web Dashboard",
    year: "2026",
    heroImage: "/images/cover teaee.png",
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
          "Teaee is a QR-based ordering system that allows customers to scan, customize, and place drink orders directly from their phones. Orders are sent instantly to a staff dashboard with clear details, helping tea shops reduce errors, speed up service, and create a smoother experience for both customers and staff.",
        // image: "/images/cover.png",
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
        // content:
        //   "The design process of Teaee followed a user-centered approach, focusing on understanding both customer and staff needs in a fast-paced tea shop environment.",
        image: "/images/teaee/user-personas-teaee.png",
      },
      {
        number: 5,
        title: "User Flow",
        // content:
        //   "The design process of Teaee followed a user-centered approach, focusing on understanding both customer and staff needs in a fast-paced tea shop environment.",
        image: "/images/teaee/user-flow-teaee.png",
      },
      {
        number: 6,
        title: "UI Design (Web - Customer)",
        // content: "Created an Instagram-style Explore feed.",
        images: [
          "/images/teaee/web-customer-1.png",
          "/images/teaee/web-customer-2.png",
          "/images/teaee/web-customer-3.png",
        ],
      },
      {
        number: 7,
        title: "UI Design (Mobile - Customer)",
        // content: "Created an Instagram-style Explore feed.",
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
    subtitle: "Making online learning feel human.",
    category: "EdTech",
    year: "2023",
    heroImage: "/images/cover.png",
    info: {
      Client: "Personal Project",
      Industry: "Education",
      Service: "Product Design",
      Platform: "Web",
      Role: "UX/UI Designer",
      Timeline: "2 weeks",
    },
    sections: [
      { number: 1, title: "Challenge", content: "Learning feels impersonal." },
      {
        number: 2,
        title: "Approach",
        content: "Human-centered design.",
        image: "/images/cover.png",
      },
    ],
  },
};

// ===== COMPONENT =====
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
      {/* Back Button */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-full mb-12">
            {project.subtitle}
          </p>

          <div className="rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-4 gap-16 mt-16">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase">
                Project Info
              </h3>
              <div className="space-y-6">
                {Object.entries(project.info).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-xs text-gray-400 uppercase mb-1">
                      {key}
                    </div>
                    <div className="text-base text-gray-900">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="lg:col-span-3 space-y-16">
            {project.sections.map((section) => (
              <div key={section.number} className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {section.number}. {section.title}
                </h2>

                {section.content && (
                  <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                )}

                {section.image && (
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {section.images &&
                  section.images.map((img, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden shadow-lg"
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

      {/* Footer */}
      <div className="border-t border-gray-100 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested?</h2>
          <p className="text-gray-600 mb-8">
            Check out more work or get in touch.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/work"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
            >
              More Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-gray-200 rounded-lg font-medium hover:border-gray-900"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
