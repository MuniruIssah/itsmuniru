import { IPost } from "@/types";
import { profiles } from "../profiles";
import { replyFactory } from "@/utils/replyFactory";

const MOVA_PROFILE = profiles.filter((item) => item.handle === "mova")[0];

const movaBackend: IPost = {
  id: "mova_backend",
  tags:['mova'],
  profile: MOVA_PROFILE,
  content: `🚚 Introducing Mova — an on-demand moving & delivery platform connecting users with moving vans, laborers, and trailers for seamless transport. 
    `,
  images: [
    {
      src: "/images/mova-branding-image.jpg",
      alt: "Mova Brand",
      link: "https://www.movanow.co",
    },
  ],
  pinned: false,
};

const replies: { content: string; images?: string[] }[] = [
  {
    content: `Moving can be stressful. Mova solves this by letting users instantly book trusted movers, track deliveries, and manage payments — all in-app.`,
  },
  {
    content: `📦 Core Features:
    - Instant and Scheduled bookings
    - Real-time trip tracking
    - Price estimations
    - Customer & driver ratings`,
  },
  {
    content: `My role in this project:
    - Backend Developer for the Mova user platform
    - Designed booking & dispatch APIs
    - Integrated payment systems
    - Built notification & tracking service`,
  },
  {
    content: `Stack Used:
        - Communication Protocols: REST, Socket(Socket.IO)
        - Languages & Markup: Javascript, HTML(for email templates)
        - Frameworks: NodeJS, ExpressJS
        - Database & Caching: MongoDB, Redis
        - Queue System: Bull Queues
        - Notifications: Firebase Messaging
        - SMS Service: Twillio
        - Email Service & Templating Engine: Resend, Handlebars
        - Deployment & Collaboration: Git, Github, Digital Ocean
          `,
  },
];

const movaBackendReplies = replies.map((item, id) =>
  replyFactory(`mova_backend_${id}`, movaBackend, MOVA_PROFILE, item.content,["mova"])
);

export const movaBackendThread = [...movaBackendReplies, movaBackend];

const movaFrontend: IPost = {
  id: "mova_admin_dashboard",
  profile: MOVA_PROFILE,
  tags:['mova'],
  content: `📊 Behind every smooth delivery is a powerful admin tool.
  Here's a look at the Mova Admin Dashboard — built for operational control and analytics.`,
  images: [
    {
      src: "/images/couriers.png",
      alt: "Mova Brand",
      link: "https://www.movanow.co",
    },
    {
        src: "/images/trips.png",
        alt: "Mova Brand",
        link: "https://www.movanow.co",
      },
      {
        src: "/images/completed.png",
        alt: "Mova Brand",
        link: "https://www.movanow.co",
      },
  ],
  pinned: false,
};

const admin_replies: { content: string; images?: string[] }[] = [
    {
      content: `The Admin Dashboard allows Mova staff to:
      - Manage driver onboarding
      - Monitor live trips
      - Follow up on cancelled trips
      - Assign drivers to users in the scheduling flow
      - Generate business reports
      - Review customer feedback
      `,
    },
    {
      content: `📦 Core Features:
      - Instant and Scheduled bookings
      - Real-time trip tracking
      - Price estimations
      - Customer & driver ratings`,
    },
    {
      content: `My role in the Admin Dashboard:
      - Senior Fullstack Engineer
      - Built all admin APIs
      - Developed admin authentication & roles
      - Integrated analytics and monitoring systems
      - Implemented queues to alert admins of every step in the ride ordering cycle`,
    },
    {
      content: `Stack Used:
          - Communication Protocols: REST, Socket(Socket.IO)
          - Languages, Markup & Styling : Javascript, HTML, CSS
          - Frameworks: NextJS, ReactJS, NodeJS, ExpressJS
          - Database & Caching: MongoDB, Redis
          - Queue System: Bull Queues
          - Notifications: Firebase Messaging
          - Email Service & Templating Engine: Resend, Handlebars
          - Deployment & Collaboration: Git, Github, Digital Ocean, Vercel
            `,
    },
  ];


  const movaAdminReplies = admin_replies.map((item, id) =>
  replyFactory(`mova_admin_${id}`, movaFrontend, MOVA_PROFILE, item.content,["mova"])
);

  export const movaAdminPortalThread = [...movaAdminReplies, movaFrontend];
