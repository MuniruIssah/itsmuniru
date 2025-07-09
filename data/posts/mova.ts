import { IPost } from "@/types";
import { profiles } from "../profiles";
import { replyFactory } from "@/utils/replyFactory";

const MOVA_PROFILE = profiles.filter((item) => item.handle === "mova")[0];

// ABOUT MOVA
const movaAbout: IPost = {
  id: "mova",
  tags: ["mova"],
  profile: MOVA_PROFILE,
  content: `🚚 Introducing Mova — an on-demand moving & delivery platform connecting users with moving vans, laborers, and trailers for seamless transport. (A thread 👇)`,
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
    content: `Mova is built on four interdependent components that work together to enable a seamless moving and delivery experience:

    - User App: Allows customers to book on-demand or scheduled rides with ease.
    - Driver & Courier App: Enables drivers and couriers to receive, accept, and manage ride requests from users.
    - Admin Portal: Provides internal teams with tools for operational monitoring, driver management, and customer support.
    - Backend Server: Powers all three applications by handling core business logic, data management, and system integrations.
    `,
    images: ["/images/components.png"],
  },
  {
    content: `📦 Core Features:
    - Instant and Scheduled bookings
    - Real-time trip tracking
    - Price estimations
    - Payment with Cash or Mobile Money (with Paystack)
    - Customer & driver ratings`,
  },
  {
    content: `Stack Used:
       📱 Mobile Apps
        - Languages & Frameworks: Dart, Flutter
        - Deployment & Collaboration: Git, Github, App Store, PlayStore

       🖥️ Admin Portal
        - Languages & Frameworks: Javascript, ReactJS, NextJS
        - Deployment & Collaboration: Git, Github, Vercel
        
       🧠 Backend
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

const movaAboutReplies = replies.map((item, id) =>
  replyFactory(
    `mova_${id}`,
    movaAbout,
    MOVA_PROFILE,
    item.content,
    ["mova"],
    item.images
  )
);

export const movaAboutThread = [...movaAboutReplies, movaAbout];

// MOVA FRONTEND THREAD
const movaFrontend: IPost = {
  id: "mova_admin_dashboard",
  profile: MOVA_PROFILE,
  tags: ["mova"],
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
    content: `📦 The Admin Dashboard allows Mova staff to:
      - Manage driver onboarding
      - Monitor live trips
      - Follow up on cancelled trips
      - Assign drivers to users in the scheduling flow
      - Generate business reports
      - Review customer feedback
      `,
  },
  {
    content: `🛠️ My Role in the Mova Admin Dashboard:
 
    - Designed and developed the entire Admin Dashboard from the ground up
    - Exposed CRUD operations for authorized admins to manage platform operations and user activities
    - Built bulk notification tools for broadcasting system-wide updates
    - Integrated analytics and monitoring systems for real-time operational insights
    - Implemented queue-based alerts to notify admins at every stage of the ride ordering process
    `,
    images:['/images/work.gif']
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
  replyFactory(`mova_admin_${id}`, movaFrontend, MOVA_PROFILE, item.content, [
    "mova",
  ],item.images)
);

export const movaAdminPortalThread = [...movaAdminReplies, movaFrontend];

// MOVA BACKEND THREAD
const movaBackend: IPost = {
  id: "mova_backend",
  profile: MOVA_PROFILE,
  tags: ["mova"],
  content: `🧠 Behind every seamless app experience is a brain working tirelessly behind the scenes. Here’s a look at Mova’s backend — the core engine that keeps it all moving. (Thread 👇)`,
  images: [
    {
      src: "/images/backend-development.jpg",
      alt: "Mova Brand",
      link: "https://www.movanow.co",
    },
  ],
  pinned: false,
};

const backend_replies: { content: string; images?: string[] }[] = [
  {
    content: `The backend delivers APIs for the User and Driver Apps, the Admin Portal, and external integrations, serving as the core of the entire platform.`,
  },
  {
    content: `📦 Core Backend Features:

    - Authentication & Authorization for all apps
    - Full CRUD operations for managing system entities
    - Notification services via SMS, Email, and Push Notifications
    - Distance, duration, and price estimation for rides
    - WebSockets for real-time, on-demand services
    - Payment integration with Paystack for secure transactions
    - Background job queueing with Bull for tasks like delayed notifications, retries, and heavy processing`,
  },
  {
    content: `👨‍💻 My Role in Mova's Backend Development:

    - Built all admin APIs powering the Admin Dashboard
    - Designed and implemented the delayed ride scheduling system, which drove 80% of the company's revenue
    - Enhanced WebSocket communication for smoother interactions between users and drivers
    - Led quality assurance (QA) efforts to resolve critical issues before launch, contributing to over 500 users in the first month`,
  },
  {
    content: `Stack Used:
          - Communication Protocols: REST, Socket(Socket.IO)
          - Languages, Markup & Styling : Javascript, HTML, CSS
          - Frameworks: NodeJS, ExpressJS
          - Database & Caching: MongoDB, Redis
          - Queue System: Bull Queues
          - Notifications: Firebase Messaging
          - Email Service & Templating Engine: Resend, Handlebars
          - Deployment & Collaboration: Git, Github, Digital Ocean, Vercel
            `,
  },
];

const movaBackendReplies = backend_replies.map((item, id) =>
  replyFactory(`mova_backend_${id}`, movaBackend, MOVA_PROFILE, item.content, [
    "mova",
  ])
);

export const movaBackendThread = [...movaBackendReplies, movaBackend];
