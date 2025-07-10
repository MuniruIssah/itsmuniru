import { IPost } from "@/types";
import { profiles } from "../profiles";
import { replyFactory } from "@/utils/replyFactory";

const GTBANK_PROFILE = profiles.filter((item) => item.handle === "gtbank")[0];



// SELF ONBOARDING
const self_onboarding: IPost = {
  id: "self-onboarding",
  profile: GTBANK_PROFILE,
  tags: ["gtbank"],
  content: `GTBank Internet Banking Self Onboarding is a web application that allows customers to onboard to the bank's internet banking service by themselves.`,
  pinned: false,
  images: [
    {
      src: "/images/selfonboard4.png",
      alt: "Self Onboarding 1",
    },

    {
      src: "/images/selfonboard3.png",
      alt: "Self Onboarding 2",
    },

    {
      src: "/images/selfonboard2.png",
      alt: "Self Onboarding 3",
    },
    {
      src: "/images/selfonboard.png",
      alt: "Self Onboarding 4",
    },
  ],
};

const self_onboarding_replies: { content: string; images?: string[] }[] = [
  {
    content: `Previously, customers were required to visit a physical bank branch to onboard onto the bank's internet banking services. With this platform, the majority of customers can now complete the onboarding process from the comfort of their homes.`,
  },
  {
    content: ` After receiving the project request, I collaborated with my Team Lead to thoroughly review the existing manual onboarding process. Together, we brainstormed and mapped out what would eventually become the current digital solution.`,
  },
  {
    content: `I singlehandedly designed and developed the entire product — from the frontend user interface to the backend architecture — with a focus on delivering a minimalistic, user-friendly experience.`,
  },
  {
    content: `The system integrates directly with the bank's core banking platform (previously BASIS) to automatically validate and retrieve customer information required to complete the onboarding process.`,
  },
  {
    content: `Stack Used:
        Frontend:
        - Language, Styling: Javascript, CSS
        - Framework: ReactJS
        
        Backend:
        - Language: C#
        - Framework: ASP.Net CORE
        - Databases: MSSQL, Oracle
        - Services: Email & SMS
        - Deployment: Internet Information Services (IIS)`,
  },
];

const selfOnboardingReplies = self_onboarding_replies.map((item, index) =>
  replyFactory(
    `self_onboarding_${index}`,
    self_onboarding,
    GTBANK_PROFILE,
    item.content,
    ["gtbank"],
    item.images
  )
);

// CHECKOUT
const checkout: IPost = {
    id: "checkout",
    profile: GTBANK_PROFILE,
    tags: ["gtbank"],
    content: `Myghpay Checkout is a payment gateway for merchants to accept payments from their customers.
    (Thread 👇)`,
    pinned: false,
  };

const ch_replies:{ content: string; images?: string[] }[] =[
    {content:`Designed and developed the customer checkout interface for the checkout API.`},
    {content:`Implemented payment status polling to update the customer on the status of their payment.`},
    {content:`Collaborated with the team to build the checkout API.`},
    {content:`Stack Used:
    Frontend:
    - Language: Javascript
    - Framework: React JS
    
    Backend:
    - Language: C#
    - Framework: ASP .Net Core
    - Communication Protocols: REST, WebSockets (via SignalR)
    - Payment Integrations: Mastercard, GTBank Momo Payment Gateway`},
]

const checkoutReplies = ch_replies.map((item, index) =>
  replyFactory(
    `checkout_${index}`,
    checkout,
    GTBANK_PROFILE,
    item.content,
    ["gtbank"],
    item.images
  )
);


// TICKETS
const tickets: IPost = {
    id: "tickets",
    profile: GTBANK_PROFILE,
    tags: ["gtbank"],
    content: `An events ecosystem that enables organizers to create and manage events, while end users can pay through a client-facing web application, embeddable widget, or USSD long code. It also includes an internal administrative portal for managing event organizers.
    (Thread 👇)`,
    pinned: false,
  };

  const tickets_replies:{ content: string; images?: string[] }[] =[
    {content:`Independently designed and implemented the entire frontend and backend infrastructure.`},
    {content:`Built a client-facing web application for browsing and purchasing event tickets.`},
    {content:`Developed an embeddable payment widget for event organizers to embed in their websites for seamless event checkout experiences.`},
    {content:`Integrated USSD support for event ticket payments via long codes.`},
    {content:`Created an internal administrative portal for managing event organizers.`},

    {content:`Stack Used:
    Frontend
    - Language: Javascript
    - Framework: ReactJS
    - Deployment: IIS

    Backend
    - Language: C#
    - Framework: ASP .Net Core, ASP .Net Framework(for USSD)
    - Database: MSSQL
    - Deployment: IIS
    - Payment Integration: Mastercard, GTBank Momo Payment Gateway

    `},
]

const ticketsReplies = tickets_replies.map((item, index) =>
  replyFactory(
    `tickets_${index}`,
    tickets,
    GTBANK_PROFILE,
    item.content,
    ["gtbank"],
    item.images
  )
);

// MYGHPAY APP
const mobileApp: IPost = {
    id: "mobileapp",
    profile: GTBANK_PROFILE,
    tags: ["gtbank"],
    content: `Myghpay is the safest and most robust online payment and collections platform designed to enable individuals, businesses and institutions to make or receive payments online, from the comfort of their homes, offices and on-the-go.
    (Thread 👇)`,
    pinned: false,
    images:[{
        src:'/images/ghpay.png',
        alt:'GH Pay 1'
    },{
        src:'/images/ghpay2.png',
        alt:'GH Pay 2'
    }]
  };

  const mobile_replies:{ content: string; images?: string[] }[] =[
    {content:`💰 E-Levy Service Integration:
    Integrated the Ghana Revenue Authority’s E-Levy service into the mobile banking application, enabling seamless tax deductions on eligible transactions — a feature that contributed significantly to national revenue generation.`},
    {content:`Redesigned the payment flow to enhance transparency for customers.`},
    {content:`Implemented quick payment features, allowing users to purchase airtime and send mobile money instantly.`},
    {content:`Stack Used:

    - Language: Javascript
    - Framework: React Native, Expo
    - Deployment: EAS
    `},
]

const mobileReplies = mobile_replies.map((item, index) =>
  replyFactory(
    `mobile_${index}`,
    mobileApp,
    GTBANK_PROFILE,
    item.content,
    ["gtbank"],
    item.images
  )
);


// PAPERLESS BANKING
const paperless: IPost = {
    id: "paperless",
    profile: GTBANK_PROFILE,
    tags: ["gtbank"],
    content: `Paperless Banking is a customer-centric initiative that provides safe, secure, and swift transactions. This initiative involves using state-of-the-art user-friendly computers in their branches to facilitate various services such as money transfers, account management, and more, all available at the click of a button.
    (Thread 👇)`,
    pinned: false,
  };

  const paperless_replies:{ content: string; images?: string[] }[] =[
    {content:`Collaborated on the design and development of a frontend web application for customers to perform banking transactions.`},
    {content:`Contributed to the development of a backend application to store and support processing of customer requests by banking officers.`},
    {content:`Helped build a frontend application for banking officers to manage and process transactions.`},
    {content:`Integrated the customer-facing application with Wacom signature pads to capture digital signatures.`},
    {content:`Worked on a frontend application for internal auditors to review transactions and access banking analytics.`},
    {content:`Stack Used:
    Frontend
    - Language: Javascript
    - Framework: VueJS
    - Deployment: IIS

    Backend
    - Language: C#
    - Framework: ASP .Net Core
    - Database: MSSQL
    - Deployment: IIS

    `},
]

const paperlessReplies = paperless_replies.map((item, index) =>
  replyFactory(
    `paperless_${index}`,
    paperless,
    GTBANK_PROFILE,
    item.content,
    ["gtbank"],
    item.images
  )
);








const gtbankThreads = [...ticketsReplies,tickets,...checkoutReplies,checkout,...selfOnboardingReplies,self_onboarding,...paperlessReplies,paperless,...mobileReplies,mobileApp];
export { gtbankThreads };
