export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  url: string;
  description: string;
  color: string;
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "faculty-recruit",
    title: "FacultyRecruit",
    category: "Academic Recruitment Platform",
    year: "2026",
    image: "/images/project-facultyrecruit.png",
    url: "https://www.facultyrecruit.com/",
    description: "A multi-role recruitment platform connecting academic professionals with universities across India.",
    color: "#d6ff52",
    stack: ["Next.js", "Supabase", "Vercel", "Render"],
    highlights: [
      "Built role-based dashboards for Admin, University, and Candidate users.",
      "Implemented profile management, resume uploads, candidate search, and filters.",
      "Designed subscription access and AI-assisted natural-language candidate filtering.",
    ],
  },
  {
    slug: "manscripts",
    title: "ManScripts",
    category: "Web Development Service Website",
    year: "2026",
    image: "/images/project-manscripts.png",
    url: "https://man-scripts.vercel.app/",
    description: "A modern service website presenting web development packages, work, and client enquiries.",
    color: "#ff684f",
    stack: ["Next.js", "Supabase", "Vercel", "UI/UX"],
    highlights: [
      "Created a modern website for a full stack development service startup.",
      "Included service packages, a project showcase, and an enquiry form.",
      "Planned an admin notification workflow for new client enquiries.",
    ],
  },
  {
    slug: "prime-design-india",
    title: "Prime Design India",
    category: "Engineering Services Website",
    year: "2026",
    image: "/images/project-prime-design.png",
    url: "https://prime-design-india-1.vercel.app/",
    description: "A polished corporate website for an engineering services provider serving global industries.",
    color: "#baa8ff",
    stack: ["Next.js", "Responsive UI", "Vercel"],
    highlights: [
      "Created a strong visual introduction for the company's engineering services.",
      "Structured service, customer, company, and contact information for easy discovery.",
      "Built a responsive corporate presentation for international audiences.",
    ],
  },
  {
    slug: "leadpower-resource",
    title: "LeadPower Resources",
    category: "OEM Engineering Website",
    year: "2026",
    image: "/images/project-leadpower.png",
    url: "https://leadpower-resource.vercel.app/",
    description: "A high-impact engineering website presenting specialist resources and capabilities for OEMs.",
    color: "#6bdff2",
    stack: ["Next.js", "Motion UI", "Vercel"],
    highlights: [
      "Designed a dark, technical visual system for an engineering resource company.",
      "Presented capabilities, industries, and resource models through clear navigation.",
      "Used motion and dimensional visuals to create a distinctive industrial experience.",
    ],
  },
];
