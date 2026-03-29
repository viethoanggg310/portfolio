// Case Study Types
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  category: string;
  year: string;
  duration: string;
  role: string;
  team: string[];
  overview: {
    product: string;
    challenge: string;
  };
  problem: {
    userProblem: string;
    businessGoal: string;
  };
  process: {
    research: string;
    insights: string[];
    ideation: string;
    design: string;
  };
  designDecisions: {
    title: string;
    description: string;
    tradeoff?: string;
  }[];
  results: {
    metrics: { label: string; value: string }[];
    feedback: string;
    impact: string;
  };
  reflection: {
    learnings: string[];
    improvements: string[];
  };
  images: string[];
}

// Skill Types
export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

// Experience Types
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  caseStudySlug?: string;
}

// Social Links
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
