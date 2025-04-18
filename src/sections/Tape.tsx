import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Passionate",
  "Problem Solver",
  "Tech Enthusiast",
  "Creative Thinker",
  "Team Player",
  "Fast Learner",
  "Detail-Oriented",
  "Adaptable",
  "Driven",
  "Curious"
];

export const TapeSection = () => {
  return (
    <div className="relative py-16 lg:py-24 overflow-x-clip">

      <div className="absolute w-full top-1/3 left-0 z-10">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_90%,_transparent)]">
            <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map(word => (
                    <div key={word} className="inline-flex gap-4 items-center">
                      <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                      <StarIcon className="size-6 text-gray-900 -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full bottom-1/3 left-0 z-0">
        <div className="bg-gradient-to-r from-sky-400 to-emerald-300 rotate-3 -mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_90%,_transparent)]">
            <div className="flex flex-none gap-4 pr-4 py-3 animate-move-right [animation-duration:30s]">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map(word => (
                    <div key={word} className="inline-flex gap-4 items-center">
                      <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                      <StarIcon className="size-6 text-gray-900 -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
