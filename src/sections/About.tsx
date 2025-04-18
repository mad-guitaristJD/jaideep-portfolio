'use client';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import mainImage from "@/assets/images/main_image.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import {motion} from 'framer-motion';
import { useRef } from "react";


const toolboxItems = [
  {
    title: ' JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: ' HTML5',
    iconType: HTMLIcon,
  },
  {
    title: ' CSS3',
    iconType: CssIcon,
  },
  {
    title: ' React',
    iconType: ReactIcon,
  },
  {
    title: ' Github',
    iconType: GithubIcon,
  },
  {
    title: ' Chrome',
    iconType: ChromeIcon,
  },
]

const hobbies =[
  {
    title: 'Painting',
    emoji: "🎨",
    left:'5%',
    top:'5%',
  },
  {
    title: 'Photography',
    emoji: "📸",
    left:'50%',
    top:'5%',
  },
  {
    title: 'Guitar',
    emoji: "🎸",
    left:'10%',
    top:'35%',
  },
  {
    title: 'BasketBall',
    emoji: "🏀",
    left:'35%',
    top:'40%',
  },
  {
    title: 'CTFs',
    emoji: "🏁",
    left:'70%',
    top:'45%',
  },
  {
    title: 'Reading',
    emoji: "📚",
    left:'5%',
    top:'65%',
  },
  {
    title: 'Music',
    emoji: "🎶",
    left:'45%',
    top:'70%',
  } 

]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return( 
    <section id="about">
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="What more?" description="Get to know a little more about me :)"></SectionHeader>
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid gird-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Latest Acheivement" description="Google cybersecurity professional certificate"/>
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>
            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader title="My Toolbox" description="Tools I know how to use!" className=""/>
              <ToolBoxItems toolboxItems={toolboxItems} itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
              <ToolBoxItems toolboxItems={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:20s]"/>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the code is it?" description="(try to drag 'em out of the box)" className="px-6 py-6"/>
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" 
                    style={{
                      left:hobby.left,
                      top:hobby.top
                    }}
                    drag
                    dragConstraints={constraintRef}
                    >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full 
                  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image src={mainImage} alt="smiling" className="size-20 rounded-full"/>
                </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
