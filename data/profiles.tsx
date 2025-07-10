import { IProfile } from "@/types";
import { BriefcaseBusiness, Globe, MapPin, XCircle } from "lucide-react";
import Image from "next/image";
import { RiUserSettingsLine } from "react-icons/ri";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const profiles: IProfile[] = [
  {
    name: "Issah Muniru",
    handle: "ningen_dewa_nai",
    avatarUrl: "/images/issah.jpg",
    coverGradient:"bg-linear-to-r from-gray-500 to-slate-200",
    description:
      "A Fullstack Applications Developer with 6 years of experience building healthcare and banking products — recently at ViuHealth.",
    infoOrLink: [
      {
        icon: <BriefcaseBusiness size={18} />,
        label: "Applications Developer",
      },
      {
        icon: (
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
        ),
        label: "Resume",
        link:"/Issah-Muniru-Resume-2024.pdf"
      },
      {
        icon: (
            <SiGithub className="text-muted-foreground" />
        ),
        label: "Github",
        link:"https://github.com/MuniruIssah"
      },
      {
        icon: (
            <SiLinkedin className="text-muted-foreground" />
        ),
        label: "LinkedIn",
        link:"https://www.linkedin.com/in/issah-muniru-b3715a206/"
      },
      {
        icon: <MapPin size={18} />,
        label: "Accra,Ghana",
      },

    ],
    stats: [
      { value: 6, label: "Years of Experience" },
      { value: 4, label: "Companies Worked At" },
    ],
    tabs: ["projects", "companies", "stack"],
  },
  {
    name: "GTBank Ghana",
    handle: "gtbank",
    coverGradient:"bg-linear-to-r from-rose-500 to-amber-500",
    avatarUrl: "/images/gtbank-logo.png",
    description:
      "Guaranty Trust Bank is a leading African Bank that offers Internet Banking, Retail Banking, Corporate Banking, Investment Banking and many other banking services.",
    infoOrLink: [
      {
        icon: <Globe size={18} />,
        label: "Website",
        link:"https://www.gtbghana.com/"
      },
      {
        icon: <MapPin size={18} />,
        label: "Accra,Ghana",
      },
      {
        icon: <RiUserSettingsLine size={18} />,
        label: "Applications Developer",
      },

    ],
    stats: [
      { value: 2, label: "Years" },
      { value: 5, label: "Projects" },
    ],
    tabs: ["all", "projects", "stack"],
  },
  {
    name: "Viuhealth",
    handle: "viuhealth",
    coverGradient:"bg-linear-to-r from-sky-500 to-green-800",
    avatarUrl: "/images/viuhealth-logo.jpeg",
    description:
      "Day-to-Day Autoimmune Care, Simplified. Improving the lives of people living with autoimmune disease through personalized support and clinician-led care management.",
    infoOrLink: [
      {
        icon: <Globe size={18} />,
        label: "Website",
        link:"https://www.viuhealth.com/"
      },
      {
        icon: <MapPin size={18} />,
        label: "New York, USA",
      },
      {
        icon: <RiUserSettingsLine size={18} />,
        label: "Sofware Engineering Consultant",
      },

    ],
    stats: [
      { value: 2, label: "Years" },
      { value: 4, label: "Projects" },
    ],
    tabs: ["all", "projects", "stack"],
  },
  {
    name: "Mova",
    handle: "mova",
    coverGradient:"bg-linear-to-r from-green-800 to-lime-300",
    avatarUrl: "/images/mova-icon.png",
    description:
      "Mova is an on-demand moving and delivery platform that connects users to reliable moving vans, laborers, and trailers.",
    infoOrLink: [
      {
        icon: <Globe size={18} />,
        label: "Website",
        link:"https://www.movanow.co/"
      },
      {
        icon: <MapPin size={18} />,
        label: "Accra, Ghana",
      },
      {
        icon: <RiUserSettingsLine size={18} />,
        label: "Senior Fullstack Engineer",
      },

    ],
    stats: [
      { value: 1, label: "Year" },
      { value: 2, label: "Projects" },
    ],
    tabs: ["all", "projects", "stack"],
  },
  {
    name: "Mally Health",
    handle: "mallyhealth",
    coverGradient:"bg-linear-to-r from-green-600 to-white",
    avatarUrl: "/images/mally-health-logo.png",
    description:
      "Mally Health is a care management platform designed to help users stay proactive about their wellness. It offers daily health tips, personalized reminders, and access to medical records in one secure place.",
    infoOrLink: [
      {
        icon: <Globe size={18} />,
        label: "Website",
        link:"https://www.mallyhealth.com/"
      },
      {
        icon: <MapPin size={18} />,
        label: "Accra, Ghana",
      },
      {
        icon: <RiUserSettingsLine size={18} />,
        label: "Senior Fullstack Engineer",
      },

    ],
    stats: [
      { value: 1, label: "Year" },
      { value: 1, label: "Project" },
    ],
    tabs: ["all", "projects", "stack"],
  },
  {
    name: "Origo Software",
    handle: "origosoftware",
    coverGradient:"bg-linear-to-r from-orange-500 to-gray-500",
    avatarUrl: "/images/origo-logo.jpg",
    description:
      "Origo Software is a software company with products spanning various industries — from logistics to healthcare and more.",
    infoOrLink: [
      {
        icon: <XCircle size={18} className="text-red-600" />,
        label: "Permanently Closed",
      },
      {
        icon: <MapPin size={18} />,
        label: "Washington DC, USA",
      },
      {
        icon: <RiUserSettingsLine size={18} />,
        label: "FullStack Developer",
      },

    ],
    stats: [
      { value: 5, label: "Months" },
      { value: 2, label: "Projects" },
    ],
    tabs: ["all", "projects", "stack"],
  },
];