import { meta, shopify, starbucks, tesla, ai, yeha } from "../assets/images";
import {
  car,
  contact,
  css,
  express,
  git,
  github,
  html,
  flutter,
  vue,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nuxt,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  laravel,
  threads,
  chartered,
} from "../assets/icons";
import { Point } from "@react-three/drei";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: flutter,
    name: "Flutter",
    type: "Mobile",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: laravel,
    name: "Laravel",
    type: "Backend",
  },
  {
    imageUrl: nuxt,
    name: "Nuxt.js",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  // {
  //     imageUrl: nodejs,
  //     name: "Node.js",
  //     type: "Backend",
  // },
  {
    imageUrl: vue,
    name: "Vue.js",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Digital Assistant",
    company_name: "Chartered Advisory Service",
    iconBg: "#b7e4c7",
    icon: chartered,
    date: "Aug 2023 - present",
    points: [
      "Give advice to clients on how to use digital tools to improve their business.",
      "Develop and maintain the company's website.",
      ,
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Cheetah Delivery Service",
    iconBg: "#fbc3bc",
    icon: nextjs,
    date: "Aug 2023 - present",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Working on the front-end and back-end of the application.",
      "Collaborating with cross-functional teams including UI designers and other developers to create high-quality products.",
    ],
  },
  {
    title: "Vue.js Developer",
    company_name: "Gundan Tech",
    iconBg: "#b7e4c7",
    icon: vue,
    date: "Sep 2023 - present",
    points: [
      "Developing and maintaining Admin dashboard web applications using Vue.js and React and other related technologies.",
      "Collaborating with cross-functional teams including UI designer and other developers to create high-quality products.",
      "Implementing responsive web app which compatable cross-browser.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Ethiopian Arteficial Intellegence Institute",
    iconBg: "#accbe1",
    icon: ai,
    date: "July 2023 - Nov 2023",
    points: [
      "I had internship for 3 months.",
      "Building responsive cardiography website design which integraate with AI model",
      "Develop UI design for this website and Collaborating with other designers and developers.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Yeha Tech",
    iconBg: "#3492eb",
    icon: yeha,
    date: "Jan 2023 - present",
    points: [
      "Developing landing pages and web-apps for different purpose using React.",
      "Collaborating with cross-functional teams including UI designers and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers in my team.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Personal",
    iconBg: "#fbc3bc",
    icon: flutter,
    date: "Jan 2024 - Mar 2024",
    points: [
      "Developing and maintaining mobile applications using Flutter and other related technologies.",
      "Collaborating with cross-functional teams including UI designers and other developers to create high-quality products.",
    ],
  },
];

export const socialLinks = [
  // {
  //     name: 'Contact',
  //     iconUrl: contact,
  //     link: '/contact',
  // },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/getsh91",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/israel-eshetu-01712b252/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-green",
    name: "E-commerce App",
    description:
      "Developed a mobile app that used for helping users find the best deals in local markets.",
    link: "https://github.com/getsh91/my_eccomerce",
  },
  {
    iconUrl: threads,
    theme: "btn-back-red",
    name: "Electric Bill Payment App",
    description:
      "Developed a mobile app that used for helping users to pay their electric bill online. This app is developed using Flutter,Laravel,Firebase and Ardunio(for prototype).It is user friendly and easy to use.",
    link: "https://github.com/getsh91/final_project.git",
  },
  // {
  //     iconUrl: car,
  //     theme: 'btn-back-blue',
  //     name: 'Car Finding App',
  //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
  //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  // },
  // {
  //     iconUrl: snapgram,
  //     theme: 'btn-back-pink',
  //     name: 'Full Stack Instagram Clone',
  //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
  //     link: 'https://github.com/adrianhajdin/social_media_app',
  // },
  // {
  //     iconUrl: estate,
  //     theme: 'btn-back-black',
  //     name: 'Real-Estate Application',
  //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
  //     link: 'https://github.com/adrianhajdin/projects_realestate',
  // },
  // {
  //     iconUrl: summiz,
  //     theme: 'btn-back-yellow',
  //     name: 'AI Summarizer Application',
  //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
  //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  // }
];
