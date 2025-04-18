import idsImage from "@/assets/images/ids.png";
import bankImage from "@/assets/images/bank_image.png";
import angryImage from "@/assets/images/ang1.png";
import ppic from "@/assets/dark-saas-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import { SectionHeader } from "@/components/SectionHeader";
import {Card} from "@/components/Card";


const portfolioProjects = [
  {
    company: "April",
    year: "2025",
    title: "Nova Bank",
    results: [
      { title: "Developed a desktop banking application" },
      { title: "Integrated MySQL for DB" },
      { title: "GUI made using JavaFX" },
    ],
    link: "https://github.com/Satvik1924/BankingSystemDBMS",
    image: bankImage,
  },
  {
    company: "March",
    year: "2025",
    title: "Intrusion Detection System",
    results: [
      { title: "Signature Based IDS" },
      { title: "Detects network threats" },
      { title: "Real-time alerting via Telegram" },
    ],
    link: "https://github.com/mad-guitaristJD/intrusion-detection-system",
    image: idsImage,
  },
  {
    company: "November",
    year: "2024",
    title: "Angry Birds",
    results: [
      { title: "Recreated angry birds using LibGDX" },
      { title: "Custom game levels" },
      { title: "Optimized performance" },
    ],
    link: "https://github.com/mad-guitaristJD/AngryBirds",
    image: angryImage,
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="" title="Featured Projects" description="My favourite/top 3 current projects"></SectionHeader>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{
              top: `calc(64px + ${index * 40}px)`
            }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2  md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result,i) => (
                    <li key={i} className="flex gap-2 text-sm text-white/50 md:text-base">
                      <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                    </li>
                  ))}

                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold 
                    inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>Github</span>
                      <ArrowUpRightIcon className="size-4"/>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
