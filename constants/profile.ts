import { SkillGroup, Experience, SocialLink } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "UX Skills",
    icon: "Users",
    skills: [
      "User Research",
      "Information Architecture",
      "User Flow Design",
      "Usability Testing",
      "Journey Mapping",
      "Persona Development",
      "A/B Testing",
      "Heuristic Evaluation",
    ],
  },
  {
    title: "UI Skills",
    icon: "Palette",
    skills: [
      "Visual Design",
      "Design Systems",
      "Responsive Design",
      "Accessibility (WCAG)",
      "Typography",
      "Color Theory",
      "Iconography",
      "Motion Design",
    ],
  },
  {
    title: "Product Thinking",
    icon: "Lightbulb",
    skills: [
      "Problem Framing",
      "Business Goals Alignment",
      "Metrics & KPIs",
      "Constraints Management",
      "Prioritization Frameworks",
      "Stakeholder Management",
      "Roadmap Planning",
      "Feature Scoping",
    ],
  },
  {
    title: "Tools & Methods",
    icon: "Wrench",
    skills: [
      "Figma",
      "FigJam",
      "Framer",
      "Principle",
      "Jira",
      "Notion",
      "Miro",
      "Hotjar",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp Inc.",
    role: "Senior Product Designer",
    period: "2023 - Present",
    description:
      "Leading design for B2B SaaS products. Established design system used across 5 products. Mentoring 2 junior designers.",
    caseStudySlug: "healthtrack-dashboard",
  },
  {
    id: "2",
    company: "StartupXYZ",
    role: "Product Designer",
    period: "2021 - 2023",
    description:
      "End-to-end design for mobile and web products. Led redesign that increased conversion by 35%.",
    caseStudySlug: "finflow-banking-app",
  },
  {
    id: "3",
    company: "Design Agency",
    role: "UI/UX Designer",
    period: "2019 - 2021",
    description:
      "Worked with 15+ clients across fintech, healthcare, and e-commerce. Developed rapid prototyping skills.",
  },
  {
    id: "4",
    company: "Freelance",
    role: "UI Designer",
    period: "2018 - 2019",
    description:
      "Built portfolio through freelance projects. Learned client communication and project management.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:lvithong31@gmail.com",
    icon: "Mail",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourname",
    icon: "Linkedin",
  },
  {
    name: "Behance",
    url: "https://behance.net/yourname",
    icon: "Globe",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/yourname",
    icon: "Dribbble",
  },
];

export const personalInfo = {
  name: "Viet Hoang",
  role: "Product / UI/UX Designer",
  tagline: "I transform complex problems into simple, delightful experiences.",
  email: "lvithong31@gmail.com",
  location: "Quang Ninh, Vietnam",
  availability: "Open to opportunities",
  about: {
    intro: `I’m a junior product designer passionate about crafting intuitive digital experiences.
I’ve worked on self-initiated projects across e-commerce, education, and productivity tools—focusing on usability, research, and clean UI. Currently improving my skills in UX research, interaction design, and front-end development.`,
    passion: `What drives me isn't pixels or tools—it's understanding why people struggle and finding elegant solutions. I believe the best design is invisible: it just works, and users never have to think about it.`,
    approach: `I thrive in collaborative environments where designers, engineers, and PMs work as partners, not silos. I ask a lot of questions, sketch a lot of bad ideas before finding good ones, and always advocate for the user—even when it's uncomfortable`,
    fun: `When I'm not designing, you'll find me experimenting with film photography, attempting to grow tomatoes on my apartment balcony, or getting lost in design Twitter threads at 2 AM.`,
  },
};
