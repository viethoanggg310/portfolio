import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "PandaPlay-movie-app",
    title: "PandaPlay - Movie Streaming App",
    subtitle: "Movie Streaming Apps",
    thumbnail: "/images/cover.png",
    category: "Mobile App",
    year: "2026",
    duration: "4 months",
    role: "Lead Product Designer",
    team: ["1 PM", "2 Engineers", "1 Designer (me)"],
    overview: {
      product:
        "A mobile banking app helping millennials manage finances with smart budgeting tools and real-time spending insights.",
      challenge:
        "Traditional banking apps overwhelm users with features. We needed to simplify without losing functionality.",
    },
    problem: {
      userProblem:
        "Users feel anxious checking their finances. Complex interfaces make budgeting feel like a chore, leading to avoidance behavior.",
      businessGoal:
        "Increase daily active users by 40% and reduce customer support tickets related to navigation by 60%.",
    },
    process: {
      research:
        "Conducted 15 user interviews, analyzed 500+ app reviews from competitors, and ran a diary study with 20 participants over 2 weeks.",
      insights: [
        "Users check balance 3x more than any other feature",
        "73% abandon budgeting setup midway",
        "Users want proactive alerts, not reactive reports",
      ],
      ideation:
        "Ran 3 design sprints with cross-functional team. Explored 12 concepts, narrowed to 3 for usability testing.",
      design:
        "Created a dashboard-first approach with progressive disclosure. Budget setup reduced from 8 steps to 3.",
    },
    designDecisions: [
      {
        title: "Dashboard-first navigation",
        description:
          "Balance and recent transactions visible immediately on launch. No login friction for quick checks.",
        tradeoff:
          "Sacrificed feature discoverability for speed. Mitigated with smart suggestions based on usage patterns.",
      },
      {
        title: "Conversational budget setup",
        description:
          "Replaced form-heavy setup with chat-like interface asking one question at a time.",
        tradeoff:
          "Takes slightly longer for power users, but completion rate jumped from 27% to 84%.",
      },
      {
        title: "Proactive notifications",
        description:
          "AI-powered alerts warn users before overspending, not after.",
      },
    ],
    results: {
      metrics: [
        { label: "DAU Increase", value: "+47%" },
        { label: "Budget Completion", value: "84%" },
        { label: "Support Tickets", value: "-62%" },
        { label: "App Store Rating", value: "4.8★" },
      ],
      feedback:
        "Finally, a banking app that doesn't make me feel stupid. - User Review",
      impact:
        "Featured in App Store 'Apps We Love'. Acquired 50K new users in first month post-launch.",
    },
    reflection: {
      learnings: [
        "Simplicity requires hard choices - every feature kept means cognitive load added",
        "User anxiety is a real design constraint that traditional metrics don't capture",
        "Cross-functional collaboration early prevents costly pivots later",
      ],
      improvements: [
        "Would involve engineering earlier in ideation to understand technical constraints",
        "Would run more A/B tests on notification frequency to reduce alert fatigue",
      ],
    },
    images: [
      "/images/case-studies/finflow-1.jpg",
      "/images/case-studies/finflow-2.jpg",
      "/images/case-studies/finflow-3.jpg",
    ],
  },
  {
    id: "2",
    slug: "teaee-dashboard",
    title: "Teaee - Tea Ordering System",
    subtitle: "Modern Tea House Ordering Experience",
    thumbnail: "/images/cover teaee.png",
    category: "Web Dashboard",
    year: "2026",
    duration: "6 months",
    role: "Senior UX Designer",
    team: ["1 PM", "3 Engineers", "2 Designers"],
    overview: {
      product:
        "A B2B analytics dashboard helping clinic managers track patient flow, staff utilization, and revenue metrics.",
      challenge:
        "Existing system required 5+ clicks to access critical metrics. Managers were making decisions on gut feeling, not data.",
    },
    problem: {
      userProblem:
        "Clinic managers spend 2+ hours daily compiling reports from multiple systems. Critical insights buried in spreadsheets.",
      businessGoal:
        "Reduce time-to-insight by 70% and increase platform adoption across 200+ clinics.",
    },
    process: {
      research:
        "Shadowed 8 clinic managers for full work days. Mapped existing workflows and identified 23 pain points.",
      insights: [
        "Managers check 4 different tools before 9 AM",
        "Most urgent decisions happen between 8-10 AM",
        "Staff scheduling is the #1 time sink",
      ],
      ideation:
        "Co-design sessions with 5 power users. Prioritized features using MoSCoW method with stakeholders.",
      design:
        "Built a morning briefing view showing only what changed since yesterday. Introduced smart alerts for anomalies.",
    },
    designDecisions: [
      {
        title: "Morning Briefing as default view",
        description:
          "Auto-generated summary of key changes, anomalies, and action items for the day.",
        tradeoff:
          "Less control for users who prefer custom dashboards. Added quick toggle to classic view.",
      },
      {
        title: "Predictive staff scheduling",
        description:
          "ML-powered suggestions based on historical patient flow patterns.",
      },
      {
        title: "One-click report generation",
        description:
          "Pre-built templates for common reports (weekly, monthly, quarterly).",
      },
    ],
    results: {
      metrics: [
        { label: "Time to Insight", value: "-73%" },
        { label: "Platform Adoption", value: "89%" },
        { label: "Report Generation", value: "2 min → 10 sec" },
        { label: "User Satisfaction", value: "+45 NPS" },
      ],
      feedback:
        "This changed how I start my day. I actually look forward to checking the dashboard now. - Clinic Manager",
      impact:
        "Rolled out to 180 clinics within 3 months. Became flagship product feature in sales demos.",
    },
    reflection: {
      learnings: [
        "Shadowing users in their environment reveals insights surveys never capture",
        "B2B doesn't mean boring - emotional design matters for enterprise too",
        "Default views are powerful - most users never change settings",
      ],
      improvements: [
        "Would push harder for mobile companion app for on-the-go checks",
        "Would establish design system earlier to speed up iteration",
      ],
    },
    images: [
      "/images/case-studies/healthtrack-1.jpg",
      "/images/case-studies/healthtrack-2.jpg",
      "/images/case-studies/healthtrack-3.jpg",
    ],
  },
  {
    id: "3",
    slug: "learnspace-education",
    title: "LearnSpace Platform",
    subtitle: "Making online learning feel human",
    thumbnail: "/images/case-studies/learnspace-thumb.jpg",
    category: "EdTech Platform",
    year: "2023",
    duration: "5 months",
    role: "Product Designer",
    team: ["1 PM", "4 Engineers", "1 Designer (me)"],
    overview: {
      product:
        "An online learning platform for professional development courses with focus on peer collaboration.",
      challenge:
        "Online courses have 90% dropout rates. We needed to make learning feel engaging and social, not lonely.",
    },
    problem: {
      userProblem:
        "Learners feel isolated in online courses. No accountability, no community, no motivation to continue.",
      businessGoal:
        "Increase course completion rate from 8% to 40% and build sustainable learning communities.",
    },
    process: {
      research:
        "Analyzed completion data from 50K learners. Interviewed 20 completers and 20 dropouts to understand the difference.",
      insights: [
        "Completers had at least one 'learning buddy' they connected with",
        "Dropout happens most in week 2, not week 1",
        "Progress visibility motivates more than badges",
      ],
      ideation:
        "Hackathon with engineering team generated 30+ social feature concepts. User voting narrowed to top 5.",
      design:
        "Introduced cohort-based learning with built-in discussion prompts, peer matching, and visible progress tracks.",
    },
    designDecisions: [
      {
        title: "Cohort-based enrollment",
        description:
          "Fixed start dates with groups of 30. Creates natural peer pressure and community.",
        tradeoff:
          "Less flexibility for self-paced learners. Offered async option at premium price.",
      },
      {
        title: "Week 2 intervention system",
        description:
          "Automated check-ins and peer nudges specifically targeting the dropout danger zone.",
      },
      {
        title: "Public progress streaks",
        description:
          "Visible learning streaks within cohort. Celebration moments for milestones.",
      },
    ],
    results: {
      metrics: [
        { label: "Completion Rate", value: "8% → 52%" },
        { label: "Peer Connections", value: "3.2 per learner" },
        { label: "Week 2 Retention", value: "+67%" },
        { label: "Course NPS", value: "+38" },
      ],
      feedback:
        "I've tried 10 online courses and finished none. This is the first one I actually completed. - Learner",
      impact:
        "Model adopted by 3 other course providers. Featured in EdTech publication as innovation case study.",
    },
    reflection: {
      learnings: [
        "Social features aren't nice-to-have for learning - they're essential",
        "Timing interventions is as important as the intervention itself",
        "Constraints (fixed cohorts) can actually improve user outcomes",
      ],
      improvements: [
        "Would add more async social features for different time zones",
        "Would explore gamification more carefully - some elements felt gimmicky",
      ],
    },
    images: [
      "/images/case-studies/learnspace-1.jpg",
      "/images/case-studies/learnspace-2.jpg",
      "/images/case-studies/learnspace-3.jpg",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
