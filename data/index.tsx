import {
  SiAngular,
  SiAstro,
  SiDocker,
  SiDotnet,
  SiExpo,
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiReactrouter,
  SiRedis,
  SiRender,
  SiSlack,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaAws, FaDigitalOcean, FaNodeJs } from "react-icons/fa6";
import {
  TbBrandCSharp,
  TbBrandJavascript,
  TbBrandPython,
  TbBrandReactNative,
} from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { RiFirebaseFill } from "react-icons/ri";
import { IPost, IProfile } from "@/types";
import { BriefcaseBusiness } from "lucide-react";
import { ReactNode } from "react";

export interface IStack {
  label: string;
  icon: ReactNode;
  tags: string[];
}
export interface IStackGroup {
  name: string;
  items: IStack[];
}
const currentStack: IStackGroup[] = [
  {
    name: "Languages & Frameworks",
    items: [
      {
        label: "JavaScript",
        icon: <TbBrandJavascript />,
        tags: ["general"],
      },
      { label: "TypeScript", icon: <SiTypescript />, tags: ["general"] },
      { label: "C#", icon: <TbBrandCSharp />, tags: ["gtbank"] },
      {
        label: "Python",
        icon: <TbBrandPython />,
        tags: ["viuhealth", "pensehealth"],
      },
      {
        label: "React",
        icon: <SiReact />,
        tags: ["all", "gtbank", "mova", "mallyhealth", "origosoftware"],
      },
      {
        label: "Next.js",
        icon: <SiNextdotjs />,
        tags: ["mova", "mallyhealth"],
      },
      {
        label: "Angular",
        icon: <SiAngular />,
        tags: ["viuhealth", "pensehealth"],
      },
      { label: "Astro", icon: <SiAstro />, tags: [] },
      { label: "React Router", icon: <SiReactrouter />, tags: ["origosoftware"] },
      { label: "React Native", icon: <TbBrandReactNative />, tags: ["gtbank"] },
      { label: "Expo", icon: <SiExpo />, tags: ["gtbank"] },
      {
        label: "Tailwind CSS",
        icon: <SiTailwindcss />,
        tags: ["gtbank", "mova", "mallyhealth"],
      },
      {
        label: "Node.js",
        icon: <FaNodeJs />,
        tags: [
          "viuhealth",
          "pensehealth",
          "origosoftware",
          "mova",
          "mallyhealth",
        ],
      },
      {
        label: "Express",
        icon: <SiExpress />,
        tags: [
          "viuhealth",
          "pensehealth",
          "origosoftware",
          "mova",
          "mallyhealth",
        ],
      },
      {
        label: "MongoDB",
        icon: <SiMongodb />,
        tags: [
          "viuhealth",
          "pensehealth",
          "origosoftware",
          "mova",
          "mallyhealth",
        ],
      },
      {
        label: "Firebase",
        icon: <RiFirebaseFill />,
        tags: [
          "viuhealth",
          "pensehealth",
          "origosoftware",
          "mova",
          "mallyhealth",
        ],
      },
      { label: "Supabase", icon: <SiSupabase />, tags: [] },
      { label: ".NET", icon: <SiDotnet />, tags: ["gtbank"] },
    ],
  },
  {
    name: "Tools & Others",
    items: [
      { label: "Git", icon: <SiGit />, tags: ["general"] },
      { label: "GitHub", icon: <SiGithub />, tags: ["general"] },
      {
        label: "Slack",
        icon: <SiSlack />,
        tags: ["mova", "mallyhealth", "viuhealth", "pensehealth"],
      },
      {
        label: "Redis",
        icon: <SiRedis />,
        tags: ["mova", "mallyhealth", "viuhealth", "pensehealth"],
      },
      {
        label: "Docker",
        icon: <SiDocker />,
        tags: ["origosoftware", "viuhealth", "pensehealth"],
      },
      { label: "AWS", icon: <FaAws />, tags: ["viuhealth", "pensehealth"] },
      {
        label: "DigitalOcean",
        icon: <FaDigitalOcean />,
        tags: ["mova", "mallyhealth"],
      },
      { label: "Vercel", icon: <SiVercel />, tags: ["mova", "mallyhealth"] },
      { label: "Render", icon: <SiRender />, tags: ["mallyhealth"] },
    ],
  },
];

const experience = [
  {
    company: "Viuhealth",
    role: "Senior Fullstack Developer",
    duration: "Aug 2023 - Jan 2025",
    description:
      "Collaborated with the team to restructure key applications for improved efficiency and scalability. Built internal component and icon libraries for reuse across projects. Contributed new features while supporting the mobile team with backend integration. Managed and maintained the company’s CI/CD pipeline.",
    technologies: [
      { label: "Angular", icon: <SiAngular /> },
      { label: "Node.js", icon: <FaNodeJs /> },
      { label: "Express", icon: <SiExpress /> },
      { label: "MongoDB", icon: <SiMongodb /> },
      { label: "Firebase", icon: <RiFirebaseFill /> },
      { label: "AWS", icon: <FaAws /> },
    ],
  },
  {
    company: "GTBank Ghana",
    role: "Applications Developer",
    duration: "Mar 2022 - Aug 2023",
    description:
      "As a utility developer, I was responsible for developing and maintaining over six applications — ranging from internal tools that streamlined operations to customer-facing platforms that generated revenue for the bank.",
    technologies: [
      { label: "React", icon: <SiReact /> },
      { label: "React Native", icon: <TbBrandReactNative /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss /> },
      { label: "TypeScript", icon: <SiTypescript /> },
      { label: "C#", icon: <TbBrandCSharp /> },
      { label: ".NET", icon: <SiDotnet /> },
      { label: "Redis", icon: <SiRedis /> },
      { label: "Azure", icon: <VscAzure /> },
    ],
  },
  {
    company: "origosoftware",
    role: "Frontend Developer",
    duration: "Sep 2021 - Mar 2023",
    description:
      "Collaborated with the team to develop and maintain the company’s dashboards and backend services, ensuring reliability and performance across core systems.",
    technologies: [
      { label: "React", icon: <SiReact /> },
      { label: "Node.js", icon: <FaNodeJs /> },
      { label: "Express", icon: <SiExpress /> },
      { label: "MongoDB", icon: <SiMongodb /> },
      { label: "Docker", icon: <SiDocker /> },
    ],
  },
];

const projects = [
  {
    company: "Viuhealth",
    title: "Viuhealth WebApps",
    stack: [
      { label: "Angular", icon: <SiAngular /> },
      { label: "Node.js", icon: <FaNodeJs /> },
      { label: "Express", icon: <SiExpress /> },
      { label: "MongoDB", icon: <SiMongodb /> },
      { label: "Firebase", icon: <RiFirebaseFill /> },
      { label: "AWS", icon: <FaAws /> },
    ],
    description:
      "A suite of web applications designed to support the management of patients with chronic conditions. This included a patient onboarding portal, an admin dashboard, a clinical trial site, and a sponsor portal.",
    roles: [
      "Consolidated all applications into a single monorepo to improve development efficiency and reduce maintenance overhead.",
      "Configured CI/CD pipelines to automate builds and deployments, with workflows triggered by changes within each application's folder.",
      "Developed a shared components and icon library to establish a consistent design system across all applications.",
      "Conducted code reviews to maintain code quality, enforce standards, and ensure consistency across the team.",
      "Acted as the development team representative in weekly product meetings, providing updates on application status and aligning on roadmap priorities.",
    ],
  },
  {
    company: "Viuhealth",
    title: "TrialViu",
    stack: [
      { label: "Angular", icon: <SiAngular /> },
      { label: "Node.js", icon: <FaNodeJs /> },
      { label: "Express", icon: <SiExpress /> },
      { label: "MongoDB", icon: <SiMongodb /> },
      { label: "AWS", icon: <FaAws /> },
    ],
    description:
      "TrialViu is a HIPAA-compliant platform powered by Viuhealth and plays a critical role in connecting people living with autoimmune conditions to relevant clinical trials.",
    roles: [
      "Architected and developed the entire TrialViu platform, including a patient onboarding portal, sponsor portal, clinical trial site member portal, and admin dashboard.",
      "Reused and extended components from the existing ViuHealth WebApps monorepo to maintain consistency and speed up development.",
      "Configured CI/CD pipelines to automate builds and deployments of the backend services to an AWS EC2 instance.",
      "Integrated the platform with ViuHealth's backend services to ensure seamless data flow and functionality.",
      "Digitized the clinical trial workflow for sites, enabling patients to participate more efficiently.",
      "Implemented performance dashboards for sponsors to monitor site metrics and trial progress.",
    ],
  },

  {
    company: "Viuhealth",
    title: "Clinical Trial Matching Algorithm (MAE)",
    stack: [
      { label: "Python", icon: <SiPython /> },
      { label: "AWS", icon: <FaAws /> },
      { label: "Node.js", icon: <FaNodeJs /> },
      { label: "Docker", icon: <SiDocker /> },
    ],
    description:
      "The team at Viuhealth collaborated with LOKA, to build an extraction and matching algorithm, which leveraged the power of LLMs to automatically assess the likelihood of a specific patient being accepted to a clinical trial based on the trial's eligibility criteria.",
    roles: [
      "Contributed to the setup and maintenance of the algorithm on the ViuHealth AWS account.",
      "Made pull requests to the shared codebase while enforcing clear and consistent commit standards.",
      "Built backend endpoints to enable the algorithm's interaction with ViuHealth's services.",
      "Implemented a CI/CD pipeline to automate deployment for manual algorithm runs.",
      "Set up and deployed the algorithm in the production environment.",
      "Integrated the algorithm into the frontend application, enabling it to be triggered directly from the UI.",
    ],
  },
  {
    company: "GTBank Ghana",
    title: "Myghpay Tickets Infrastructure",
    stack: [
      { label: "React", icon: <SiReact /> },
      { label: "ASP.NET", icon: <SiDotnet /> },
    ],
    description:
      "An events ecosystem that enables organizers to create and manage events, while end users can pay through a client-facing web application, embeddable widget, or USSD long code. It also includes an internal administrative portal for managing event organizers.",
    roles: [
      "Independently designed and implemented the entire frontend and backend infrastructure.",
      "Built a client-facing web application for browsing and purchasing event tickets.",
      "Developed an embeddable payment widget for event organizers to embed in their websites for seamless event checkout experiences.",
      "Integrated USSD support for event ticket payments via long codes.",
      "Created an internal administrative portal for managing event organizers.",
    ],
  },

  {
    company: "GTBank Ghana",
    title: "Myghpay Mobile App",
    stack: [
      { label: "React Native", icon: <TbBrandReactNative /> },
      { label: "Expo", icon: <SiExpo /> },
    ],
    description:
      "Myghpay is the safest and most robust online payment and collections platform designed to enable individuals, businesses and institutions to make or receive payments online, from the comfort of their homes, offices and on-the-go.",
    roles: [
      "Integrated the Ghana Revenue Authority's E-Levy service into the mobile application.",
      "Redesigned the payment flow to enhance transparency for customers.",
      "Implemented quick payment features, allowing users to purchase airtime and send mobile money instantly.",
    ],
  },
  {
    company: "GTBank Ghana",
    title: "Paperless Banking",
    stack: [
      { label: "React Native", icon: <TbBrandReactNative /> },
      { label: "Expo", icon: <SiExpo /> },
    ],
    description:
      "Paperless Banking is a customer-centric initiative that provides safe, secure, and swift transactions. This initiative involves using state-of-the-art user-friendly computers in their branches to facilitate various services such as money transfers, account management, and more, all available at the click of a button.",
    roles: [
      "Collaborated on the design and development of a frontend web application for customers to perform banking transactions.",
      "Contributed to the development of a backend application to store and support processing of customer requests by banking officers.",
      "Helped build a frontend application for banking officers to manage and process transactions.",
      "Integrated the customer-facing application with Wacom signature pads to capture digital signatures.",
      "Worked on a frontend application for internal auditors to review transactions and access banking analytics.",
    ],
  },
  {
    company: "GTBank Ghana",
    title: "Internet Banking Self Onboarding",
    stack: [
      { label: "React", icon: <SiReact /> },
      { label: "C#", icon: <TbBrandCSharp /> },
      { label: ".NET", icon: <SiDotnet /> },
    ],
    description:
      "The Internet Banking Self Onboarding is an application that allows customers to onboard to the bank's internet banking service by themselves.",
    roles: [
      "Designed and developed the entire application from scratch, both the frontend and backend.",
      "Integrated with the core banking system to validate customer details before completing the onboarding process.",
    ],
  },
  {
    company: "GTBank Ghana",
    title: "Myghpay Checkout",
    stack: [
      { label: "React", icon: <SiReact /> },
      { label: "C#", icon: <TbBrandCSharp /> },
      { label: ".NET", icon: <SiDotnet /> },
    ],
    description:
      "Myghpay Checkout is a payment gateway for merchants to accept payments from their customers.",
    roles: [
      "Designed and developed a customer checkout interface for the checkout API.",
      "Implemented payment status polling to update the customer on the status of their payment.",
      "Collaborated with the team to build the checkout API.",
    ],
  },
];

const tempProfile: IProfile = {
  name: "Issah Muniru",
  handle: "ningen_dewa_nai",
  avatarUrl: "/images/issah.jpg",
  description:
    "A Fullstack Applications Developer with 6 years of experience building healthcare and banking products — recently at ViuHealth.",
  infoOrLink: [
    {
      icon: <BriefcaseBusiness size={18} />,
      label: "Applications Developer",
    },
  ],
  stats: [
    { value: 6, label: "Years of Experience" },
    { value: 4, label: "Companies" },
  ],
  tabs: ["all", "projects", "stack"],
};

const tempPost: IPost = {
  id: "3",
  content: "Designed and developed a customer checkout interface for the checkout API.",
  profile: tempProfile,
  pinned: true
};

export { currentStack, experience, projects, tempPost };
