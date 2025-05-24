import Image from "next/image";
import { Slackey } from 'next/font/google'
import { SquareArrowOutUpRight } from "lucide-react";
import { currentStack, experience, projects } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiGithub, SiLinkedin } from "react-icons/si";

const slackey = Slackey({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center max-w-4xl mx-auto min-h-screen px-4 py-6 gap-6 sm:px-8 sm:py-10 md:px-20 md:py-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm sm:text-base"
            href="/Issah-Muniru-Resume-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Resume
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm sm:text-base"
            href="https://github.com/MuniruIssah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="text-muted-foreground"/>
            Github
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm sm:text-base"
            href="https://www.linkedin.com/in/issah-muniru-b3715a206/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="text-muted-foreground"/>
            LinkedIn
          </a>
        </div>
      </header>
      <main className="flex flex-col gap-6 sm:gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-secondary-foreground text-sm sm:text-base">Hi! I'm</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight" style={slackey.style}>Muniru Issah</h1>
          <p className="font-mono text-secondary-foreground text-sm sm:text-base max-w-2xl">I'm a Fullstack Applications Developer with 6 years of experience building products in the healthcare and banking industries — most recently at ViuHealth.</p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-xl sm:text-2xl font-extrabold" style={slackey.style}>Current Stack</h2>
          <p className="font-mono text-secondary-foreground text-sm sm:text-base">My tech stack adapts based on the specific needs of each project and the environment of the organization I&apos;m working with.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground font-mono text-xs sm:text-sm">Languages & Frameworks</span>
              <div className="flex gap-2 flex-wrap mt-2">
                {currentStack[0].items.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 border border-stone-400 rounded-full py-1 px-2 sm:py-1.5 sm:px-3 hover:bg-foreground hover:text-background transition-colors duration-300 cursor-pointer">
                    {item.icon}
                    <span className="text-xs sm:text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground font-mono text-xs sm:text-sm">Tools & Others</span>
              <div className="flex gap-2 flex-wrap mt-2">
                {currentStack[1].items.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 border border-stone-400 rounded-full py-1 px-2 sm:py-1.5 sm:px-3 hover:bg-foreground hover:text-background transition-colors duration-300 cursor-pointer">
                    {item.icon}
                    <span className="text-xs sm:text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full mt-2">
          <h2 className="text-xl sm:text-2xl font-extrabold" style={slackey.style}>Experience</h2>
          <p className="font-mono text-secondary-foreground text-sm sm:text-base">Here's a brief overview of my professional journey.</p>
          <div className="flex flex-col gap-6 w-full mt-2 divide-y divide-dashed divide-stone-400">
            {experience.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 w-full pb-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-1">
                  <span className="text-muted-foreground font-mono text-xs sm:text-sm">{item.company} - {item.role}</span>
                  <span className="text-muted-foreground font-mono text-xs sm:text-sm">{item.duration}</span>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex gap-2 flex-wrap">
                    {item.technologies.map((tech) => (
                      <div key={tech.label} className="flex items-center cursor-pointer text-muted-foreground text-base sm:text-lg">
                        {tech.icon}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    <span className="text-muted-foreground font-mono text-xs sm:text-sm">My Role:</span>
                    <span className="text-secondary-foreground font-mono text-sm sm:text-base">{item.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full mt-2">
          <h2 className="text-xl sm:text-2xl font-extrabold" style={slackey.style}>Projects</h2>
          <p className="font-mono text-secondary-foreground text-sm sm:text-base">A lot of my work is not public so the code is not accessible. However, i'm working on a few projects that are open source and will be available soon.</p>

          <div className="flex flex-col gap-4 w-full mt-2">
            <span className="text-muted-foreground font-mono text-xs sm:text-sm">Currently working on:</span>
            <div className="flex flex-col sm:flex-row sm:divide-x sm:divide-stone-400 gap-2 sm:gap-0 mt-1">
              <a href="https://movanow.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 sm:pr-2 text-sm sm:text-base"
              >Mova <SquareArrowOutUpRight size={14} className="text-muted-foreground" /></a>
              <a href="https://mallyhealth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 sm:px-2 text-sm sm:text-base "
              >Mally Health <SquareArrowOutUpRight size={14} className="text-muted-foreground" /></a>
              <a href="https://mallyhealth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm sm:text-base sm:px-2"
              >Pense Health <SquareArrowOutUpRight size={14} className="text-muted-foreground" /></a>
            </div>
            <span className="text-muted-foreground font-mono text-xs sm:text-sm block mt-3">Previously worked on:</span>

            <div className="flex flex-col gap-6 w-full mt-2">
              {projects.map((project, index) => (
                <div key={index} className="flex flex-col gap-2 w-full">
                  <Badge className="font-mono text-xs sm:text-sm">{project.company}</Badge>
                  <div className="flex flex-col gap-2 p-2">
                    <span className="text-foreground font-mono font-bold text-sm sm:text-base">{project.title}</span>
                    <span className="text-secondary-foreground font-mono font-light text-sm sm:text-base">{project.description}</span>
                    <Accordion type="single" collapsible className="w-full border border-muted-foreground rounded-md mt-2 px-3 text-sm sm:text-base">
                      <AccordionItem value="item-1">
                        <AccordionTrigger> 
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full">
                            <span className="text-muted-foreground font-mono text-xs sm:text-sm">My Roles</span>
                            <div className="flex items-center gap-2">
                              {project.stack.map((stack) => (
                                <div key={stack.label} className="flex items-center gap-2 text-base sm:text-lg">
                                  {stack.icon}
                                </div>
                              ))}
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-3 text-sm sm:text-base">
                            {project.roles.map((role) => (
                              <li key={role} className="text-secondary-foreground font-mono">
                                {role}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
