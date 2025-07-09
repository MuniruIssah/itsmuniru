import { IPost } from "@/types";
import { profiles } from "../profiles";
import { replyFactory } from "@/utils/replyFactory";

const VIUHEALTH_PROFILE = profiles.filter(
  (item) => item.handle === "viuhealth"
)[0];

const viuhealthAppCI: IPost = {
  id: "viuhealth_ci",
  tags: ["viuhealth"],
  profile: VIUHEALTH_PROFILE,
  content: `Task: 
  Liaised with the Mobile Development team to set up CI/CD pipelines using GitHub Actions and Fastlane for automated deployments to the App Store and Google Play Store`,
  pinned: false,
};

export const viuhealthCIThread = [viuhealthAppCI];

const viuhealthWebApps: IPost = {
  id: "viuhealth_webapps",
  tags: ["viuhealth"],
  profile: VIUHEALTH_PROFILE,
  content: `🌐 ViuHealth Web Apps:
    Here’s what I worked on as a Senior Frontend Engineer — covering everything from UI development to system integration.
    (Thread 👇)`,
  pinned: false,
};

const replies: { content: string; images?: string[] }[] = [
  {
    content: `🔧 Consolidated Multiple Angular Projects into a Monorepo:

        Originally, the team maintained three separate Angular web applications, which made development and maintenance challenging.
        I was tasked with merging all projects into a unified monorepo, simplifying dependency management, improving collaboration, and streamlining the development workflow. `,
    images: ["/images/merge.JPG"],
  },
  {
    content: `⚙️ Configured Per-Project CI/CD Pipelines:

        After consolidating the projects into a monorepo, I set up CI/CD pipelines using GitHub Actions to trigger deployments per project folder.
        Each project now automatically deploys to its designated AWS S3 bucket, ensuring seamless and independent releases.`,
  },
  {
    content: `🧩 Developed Shared Component & Icon Libraries:

        Built and maintained shared component and icon libraries within the monorepo, enabling consistent UI across all projects and reducing duplicated effort.`,
  },
  {
    content: `🔍 Code Reviews & Quality Assurance:

        Regularly conducted code reviews to maintain high code quality, enforce coding standards, and ensure consistency across the entire development team.`,
  },
  {
    content: `📣 Product Collaboration & Communication:

        Served as the development team representative in weekly product meetings — providing updates on application status, sharing technical feedback, and aligning on roadmap priorities with product stakeholders.`,
  },
  {
    content: `Stack Used:
        
        - Languages, Markup, Styling: Javascript, HTML, CSS, SCSS, Bootstrap
        - Framework: Angular
        - Tools & Deployment: Git, Github, Github Actions, AWS S3
        `,
  },
];

const webappsReplies = replies.map((item, index) =>
  replyFactory(
    `viuhealth_web_${index}`,
    viuhealthWebApps,
    VIUHEALTH_PROFILE,
    item.content,
    ["viuhealth"],
    item.images
  )
);

export const viuhealthWebAppsThread = [...webappsReplies, viuhealthWebApps];

const trialViu: IPost = {
  id: "trialviu",
  tags: ["viuhealth"],
  profile: VIUHEALTH_PROFILE,
  content: `🔬 TrialViu — Powered by ViuHealth:
    TrialViu is a HIPAA-compliant platform that connects people living with autoimmune conditions to relevant clinical trials.
    In this thread, I’ll walk through my role in building and supporting this platform.
    (A thread 👇)`,
  pinned: false,
};

const tvReplies: { content: string; images?: string[] }[] = [
  {
    content: `🏗️ Platform Architecture & Development:

I architected and developed the entire TrialViu platform, which includes:
- A Patient Onboarding Portal
- A Sponsor Portal for trial sponsors
- A Clinical Trial Site Member Portal
- An Admin Dashboard for internal operations`,
  },
  {
    content:`Reused and extended components from the existing ViuHealth WebApps monorepo to maintain consistency and speed up development.`
  },
  {
    content:`Integrated the TrialViu platform with backend services to ensure seamless data flow and reliable functionality across all user portals and workflows.`
  },
  {
    content:`Digitized the clinical trial workflow for sites, enabling patients to participate more efficiently.`
  },
  {
    content:`Implemented performance dashboards for sponsors to monitor site metrics and trial progress.`
  },
  {
    content: `Stack Used:
        
        - Languages, Markup, Styling: Javascript, HTML, CSS, SCSS, Bootstrap
        - Framework: Angular
        - Tools & Deployment: Git, Github, Github Actions, AWS S3
        `,
  },
];

const trialviuReplies = tvReplies.map((item, index) =>
  replyFactory(
    `trialviu_${index}`,
    trialViu,
    VIUHEALTH_PROFILE,
    item.content,
    ["viuhealth"],
    item.images
  )
);

export const trialViuThread = [...trialviuReplies, trialViu];


const viuhealthBackend:IPost={
    id: "viuhealth_backend",
    profile:VIUHEALTH_PROFILE,
    tags:['viuhealth'],
    content: `After a colleague left the team, I took on backend development responsibilities in addition to my frontend work.
    While challenging, it became a great opportunity for growth — and I was able to prove my worth.
    In this thread, I’ll walk through my day-to-day work on the ViuHealth Backend API project.
    (A thread 👇)`,
    pinned: false
}

const bc_replies:{ content: string; images?: string[] }[]=[
{
    content:`⚙️ CI/CD Automation:

    Configured CI/CD pipelines to automate the build, testing, and deployment processes for backend services, enabling seamless deployments to an AWS EC2 instance.`
},
{
    content:`Implemented Husky pre-commit hooks to enforce good coding standards, ensuring consistent code quality and preventing bad commits across the backend codebase.`
},
{
    content:`Spearheaded the migration from Bull + Redis queues to Agenda.js, which integrates more effectively with our MongoDB-based infrastructure.
    This change simplified our stack, improved reliability, and reduced operational overhead.`
},
{
    content:`Stack Used:
        - Communication Protocols: REST, Socket(Socket.IO)
        - Languages & Markup: Javascript, HTML(for email templates)
        - Frameworks: NodeJS, ExpressJS
        - Database & Caching: MongoDB, Redis
        - Queue System: Agenda
        - Notifications: Firebase Messaging
        - SMS Service: AWS SNS
        - Email Service: AWS SES
        - Deployment & Collaboration: Git, Github, Amazon EC2`
}
]

const viuBCReplies = bc_replies.map((item, index) =>
  replyFactory(
    `viuhealth_backend_${index}`,
    viuhealthBackend,
    VIUHEALTH_PROFILE,
    item.content,
    ["viuhealth"],
    item.images
  )
);

export const viuhealthBackendThread=[...viuBCReplies,viuhealthBackend]

const mae:IPost={
    id: "mae",
    profile:VIUHEALTH_PROFILE,
    tags:['viuhealth'],
    content: `🤝 ViuHealth x LOKA — AI-Powered Clinical Trial Matching:
    At ViuHealth, we collaborated with LOKA to develop an advanced extraction and matching algorithm that leverages LLMs (Large Language Models) to automatically assess a patient’s eligibility for clinical trials based on specific trial criteria.
    
    In this thread, I'll walk through my responsibilities and contributions to this project.
    (A thread 👇)`,
    pinned: false
}

const mae_replies:{ content: string; images?: string[] }[]=[
    {
        content:`Contributed to the setup and maintenance of the algorithm on the ViuHealth AWS account.`
    },
    {
        content:`Made pull requests to the shared codebase while enforcing clear and consistent commit standards.`
    },
    {
        content:`Built backend endpoints to enable the algorithm's interaction with ViuHealth's services.`
    },
    {
        content:`Implemented a CI/CD pipeline to automate deployment for manual algorithm runs.`
    },
    {
        content:`Set up and deployed the algorithm in the production environment.`
    },
    {
        content:`Integrated the algorithm into the frontend application, enabling it to be triggered directly from the UI.`
    },
    {
        content:`Stack Used:
        
        Languages: Python & Javascript
        Frameworks: NodeJS
        Deployment: Docker, AWS
        Others: AWS Bedrock, AWS CloudFormation`
    },
    
    ]
    
    const maeThreadReplies = mae_replies.map((item, index) =>
      replyFactory(
        `mae_${index}`,
        mae,
        VIUHEALTH_PROFILE,
        item.content,
        ["viuhealth"],
        item.images
      )
    );

export const maeThread=[...maeThreadReplies,mae]