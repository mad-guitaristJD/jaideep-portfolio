import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import {Card} from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Guy 1",
    position: "working professional",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare, urna nec tempor viverra, enim magna tristique purus, nec ornare nisi urna sit amet leo.",
    avatar: memojiAvatar1,
  },
  {
    name: "Guy 2",
    position: "working professional",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare, urna nec tempor viverra, enim magna tristique purus, nec ornare nisi urna sit amet leo.",
    avatar: memojiAvatar2,
  },
  {
    name: "Guy 3",
    position: "working professional",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare, urna nec tempor viverra, enim magna tristique purus, nec ornare nisi urna sit amet leo.",
    avatar: memojiAvatar3,
  },
  {
    name: "Guy 4",
    position: "working professional",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare, urna nec tempor viverra, enim magna tristique purus, nec ornare nisi urna sit amet leo. ",
    avatar: memojiAvatar4,
  },
  {
    name: "Guy 5",
    position: "working professional",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare, urna nec tempor viverra, enim magna tristique purus, nec ornare nisi urna sit amet leo.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return( 
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Testimonials" title="What clients say about me" description=" These are generated testimonials and only for testing purpose hover over them to stop and read">
        </SectionHeader>
        <div className="mt-12 lg: mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_90%,_transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index)=>(
              <Fragment key={index}>
                {testimonials.map(testimonial => (
                  <Card key={testimonial.name} className="max-w-xs p-6 md:max-w-md md:p-8 hover:-rotate-3 transistion duration-300">
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
