type Work = {
  name: string;
  imagePath: string;
  role: string;
  fromDate: string;
  toDate: string;
  experience: string[];
};

type Education = {
  name: string;
  imagePath: string;
  courseName: string;
  fromDate: string;
  toDate: string;
  experience: string[];
};

type Project = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    label: string;
    url: string;
  }[];
};

export const workData: Work[] = [
  {
    name: "Google",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    role: "Software Engineer",
    fromDate: "Aug 2022",
    toDate: "Present",
    experience: [
      "Developed and maintained scalable web applications using TypeScript and React.",
    ],
  },
];

export const educationData: Education[] = [
  {
    name: "Pearson BTEC",
    imagePath:
      "https://logosandtypes.com/wp-content/uploads/2020/07/Pearson.png",
    courseName: "HND in Computing, Software Engineering",
    fromDate: "Feb 2024",
    toDate: "Present",
    experience: [
      "Developed robust programming and software engineering skills, including designing, building, and testing applications across multiple platforms.",
      "Gained practical experience , database management, OOP concepts and scalable system architecture for real-world problem-solving.",
    ],
  },
];

export const projectData: Project[] = [
  {
    image: "/cbc.png",
    title: "Crystal Beauty Clear",
    description:
      "A beauty e-commerce platform with secure authentication, product management, orders, and reviews, featuring smart inventory and smooth UX",
    technologies: [
      "ReactJS",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "react-router-dom",
      "Framer-Motion",
      "MongoDB",
      "Supabase",
      "JWT Auth",
      "Argon2",
      "Nodemailer",
    ],
    links: [
      {
        label: "Website",
        url: "https://cbc-frontend-swart.vercel.app/",
      },
      {
        label: "Source",
        url: "https://github.com/Kanchana-Kaushal/cbc-backend",
      },
      {
        label: "Source (UI)",
        url: "https://github.com/Kanchana-Kaushal/cbc-frontend",
      },
    ],
  },
  {
    image: "/chef-claude.jpeg",
    title: "Chef Claude",
    description:
      "An AI recipe generator that takes your ingredients and creates a simple, tasty recipe. Features a clean interface with smooth animations.",
    technologies: ["ReactJS", "TailwindCSS", "GSAP", "OpenAI API"],
    links: [
      {
        label: "Website",
        url: "https://chef-claude-sage-gamma.vercel.app/",
      },
      {
        label: "Source",
        url: "https://github.com/Kanchana-Kaushal/chef-claude",
      },
    ],
  },
  {
    image: "/portfolio_site.jpeg",
    title: "Personal Portfolio",
    description:
      "A clean, responsive portfolio showcasing projects, skills, and experience. Features a dynamic project display, work and education timeline, and seamless navigation.",
    technologies: ["ReactJS", "TypeScript", "TailwindCSS", "Framer Motion"],
    links: [
      {
        label: "Website",
        url: "https://chef-claude-sage-gamma.vercel.app/",
      },
      {
        label: "Source",
        url: "https://github.com/Kanchana-Kaushal/chef-claude",
      },
    ],
  },
  {
    image: "/frontend-mentor.jpg",
    title: "20+ Frontend Mentor Challenges",
    description:
      "Converted Figma designs into responsive, pixel-perfect UIs with attention to detail and clean code practices across real-world challenges.",
    technologies: [
      "ReactJS",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    links: [
      {
        label: "Frontend Mentor Profile",
        url: "https://www.frontendmentor.io/profile/Kanchana-Kaushal",
      },
    ],
  },
];
