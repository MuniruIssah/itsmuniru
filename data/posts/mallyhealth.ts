import { IPost } from "@/types";
import { profiles } from "../profiles";
import { replyFactory } from "@/utils/replyFactory";

const MALLY_PROFILE = profiles.filter(
  (item) => item.handle === "mallyhealth"
)[0];

const mallyhealthAbout: IPost = {
  id: "mallyhealth",
  tags: ["mallyhealth"],
  profile: MALLY_PROFILE,
  content: ` Mally Health is a care management platform designed to help users stay proactive about their wellness. It offers daily health tips, personalized reminders, and access to medical records in one secure place.`,
  images: [
    {
      src: "/images/mally-branding.png",
      alt: "Mally Health",
      link: "https://www.mallyhealth.com",
    },
  ],
  pinned: false,
};

const about_replies: { content: string; images?: string[] }[] = [
  {
    content: `Mally provides smart notifications for medication, vaccinations, and lifestyle tips. It also tracks your health trends and offers personalized insights to manage chronic conditions effectively. It is built on two main components at the moment:
    
    - The Web App (user-facing platform)
    - The Backend (handles APIs, data, and business logic) `,
  },
  {
    content: `The Mally Health platform revolves around three core user types:

    - 🧑‍⚕️ Patients
    - 👥 Care Members
    - 🩺 Specialists`,
  },
  {
    content: `📦 Core Features:

    - Book appointments with care teams & specialists
    - Track vitals easily
    - Chat with medical professionals.
    - Set medication reminders.
    - Receive scheduled reminders from a care member.
    - Get personalized health plans & recommendations
    - Organize medical records`,
  },
  {
    content: `Stack Used:
       🖥️ Web App
        - Languages & Frameworks: Javascript, ReactJS, NextJS
        - Deployment & Collaboration: Git, Github, Vercel
        
       🧠 Backend
        - Communication Protocols: REST, Socket(Socket.IO)
        - Languages & Markup: Javascript, HTML(for email templates)
        - Frameworks: NodeJS, ExpressJS
        - Database & Caching: MongoDB, Redis
        - Queue System: Bull Queues
        - Notifications: Socket.IO
        - Email Service & Templating Engine: Resend, Handlebars
        - Calendar Services: Google Calendar
        - Deployment & Collaboration: Git, Github, Digital Ocean
          `,
  },
];

const mallyAboutReplies = about_replies.map((item, index) =>
  replyFactory(
    `mally_about_${index}`,
    mallyhealthAbout,
    MALLY_PROFILE,
    item.content,
    ["mallyhealth"]
  )
);

export const mallyAbout = [...mallyAboutReplies, mallyhealthAbout];

const mallyhealthFrontend: IPost = {
  id: "mallyhealth_frontend",
  tags: ["mallyhealth"],
  profile: MALLY_PROFILE,
  content: ` 🩺 Mally Health Dashboard: A high-level breakdown of the platform's key features — role by role. (A thread 👇)`,
  images: [
    {
      src: "/images/stats.gif",
      alt: "Mally Health",
      link: "https://www.mallyhealth.com",
    },
  ],
  pinned: false,
};

const frontend_replies: { content: string; images?: string[] }[] = [
  {
    content: ` Before we get into the features, here's what I worked on:

    - Designed & built every dashboard screen from scratch
    - Integrated backend APIs with the frontend
    - Deployed all updates via Vercel
    - Set up CI/CD for seamless, automated deployments`,
  },
  {
    content: `👩‍⚕️ Patient Dashboard Features:
    Patients on Mally Health can:

    - Log in and sign up securely
    - Book medical appointments
    - Track vitals
    - Set medication reminders
    - Manage medical records
    - View health plans & history
    - Upgrade or renew their subscription`,
    images: [
      "/images/login.png",
      "/images/user-dash.png",
      "/images/user-med-summary.png",
    ],
  },
  {
    content: `👥 Care Member Dashboard Features:
    Care Members on Mally Health can:

    - Log in and sign up securely
    - Create and manage patient and specialist profiles
    - Verify specialist credentials
    - Schedule appointments between patients and specialists
    - Set reminders and tag patients for follow-ups
    - Upload medical records on behalf of patients
    - Maintain and update each patient’s medical history
    - Track patient risk factors and recommend preventive care measures
    `,
    images: [
      "/images/mally-admin.png",
      "/images/admin-patient.png",
      "/images/admin-patient-history.png",
    ],
  },
  {
    content: `🩺 Specialist Dashboard Features:
    Specialists on Mally Health can:
    
    - Log in and sign up securely
    - Configure their weekly availability for consultations
    - Set their consultation fees
    - Join scheduled appointments with patients
    - Update the medical history of patients after consultations
    `,
    images: ["/images/specialist-dash.png", "/images/specialist.png"],
  },
  {
    content: `Stack Used:
          - Languages & Frameworks: Javascript, ReactJS, NextJS
          - Deployment & Collaboration: Git, Github, Vercel
            `,
  },
];

const mallyFrontendReplies = frontend_replies.map((item, index) =>
  replyFactory(
    `mally_frontend_${index}`,
    mallyhealthFrontend,
    MALLY_PROFILE,
    item.content,
    ["mallyhealth"],
    item.images
  )
);

export const mallyFrontendThread = [
  ...mallyFrontendReplies,
  mallyhealthFrontend,
];

const mallyhealthBackend: IPost = {
  id: "mallyhealth_backend",
  tags: ["mallyhealth"],
  profile: MALLY_PROFILE,
  content: `🏥 Project: Mally Health Backend — built with Node.js & Express.js
  In this thread, I'll break down my role in architecting and developing its core features and backend infrastructure.
  (Thread 👇)`,
  images:[{
    src:"/images/backend.jpg",
    alt:'mallybackend'
  }],
  pinned: false,
};

const backend_replies: { content: string; images?: string[] }[] = [
  {
    content: ` 👨‍💻 My Role as Senior Backend Developer:

      - Collaborated with stakeholders to brainstorm and refine feature requirements
      - Designed and architected the entire backend system
      - Took key technical decisions that helped reduce project costs by 90%
      - Established and enforced clean coding standards for maintainable, readable code
      - Integrated essential services, including notifications, chat, emails, background queues, and Google Calendar events
      - Set up CI/CD pipelines for smooth, automated deployments to a DigitalOcean droplet
      - Configured SSL certificates with Certbot and NGINX for secure HTTPS access
      - Connected the DigitalOcean server to a secured, custom domain
      - Implemented daily API key rotations to prevent unauthorized access and enhance API security`,
  },
  {
    content: `⚙️ Core Backend Features:

      - Authentication & Authorization for secure access
      - Medical Records Consolidation using Firebase
      - Medical History Updates for continuous care tracking
      - Medical Vitals Monitoring to track health metrics
      - Prescriptions & Medication Reminders for patient adherence
      - Payment Integration with Paystack for subscription and service billing
      - Admin Reminders to support operational workflows
      - Notification Services for email, SMS, and push alerts
      - Chat Services for real-time communication between users and care teams
      `,
  },
  {
    content: `Stack Used:
      - Communication Protocols: REST, Socket(Socket.IO)
      - Languages & Markup: Javascript, HTML(for email templates)
      - Frameworks: NodeJS, ExpressJS
      - Database & Caching: MongoDB, Redis
      - Queue System: Bull Queues
      - Notifications: Socket.IO
      - Email Service & Templating Engine: Resend, Handlebars
      - Calendar Services: Google Calendar
      - Deployment & Collaboration: Git, Github, Digital Ocean
              `,
  },
];

const mallyBackendReplies = backend_replies.map((item, index) =>
  replyFactory(
    `mally_frontend_${index}`,
    mallyhealthBackend,
    MALLY_PROFILE,
    item.content,
    ["mallyhealth"],
    item.images
  )
);

export const mallyBackendThread = [...mallyBackendReplies, mallyhealthBackend];
