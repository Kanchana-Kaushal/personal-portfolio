type Work = {
  name: string;
  imagePath: string;
  role: string;
  fromDate: string;
  toDate: string;
  experience: [string];
};

type Education = {
  name: string;
  imagePath: string;
  courseName: string;
  fromDate: string;
  toDate: string;
  experience: [string];
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
  {
    name: "Meta",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png",
    role: "Frontend Developer Intern",
    fromDate: "May 2021",
    toDate: "Jun 2022",
    experience: [
      "Assisted in building reusable UI components for internal dashboards.",
    ],
  },
];

export const educationData: Education[] = [
  {
    name: "Harvard University",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/2104px-Harvard_University_coat_of_arms.svg.png",
    courseName: "Master of Science in Computer Science",
    fromDate: "Sep 2021",
    toDate: "May 2023",
    experience: ["Specialized in AI and scalable system architecture."],
  },
  {
    name: "Stanford University",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/1200px-Seal_of_Leland_Stanford_Junior_University.svg.png",
    courseName: "Bachelor of Science in Computer Science",
    fromDate: "Sep 2017",
    toDate: "Jun 2021",
    experience: [
      "Focused on software systems, machine learning, and human-computer interaction.",
    ],
  },
];
