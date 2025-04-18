import mainImage from '@/assets/images/main_image.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from'@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (<section id="home">
  <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
    <div className='absolute inset-0 -z-30 opacity-5' style={{
      backgroundImage: `url(${grainImage.src})`
    }}></div>
    <div className='size-[620px] hero-ring'></div>
    <div className='size-[820px] hero-ring'></div>
    <div className='size-[1020px] hero-ring'></div>
    <div className='size-[1220px] hero-ring'></div>

    <HeroOrbit size={860} rotation={-150} orbitDuration={20} shouldSpin shouldOrbit spinDuration={20}>
      <StarIcon className="size-28 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={880} rotation={-100} shouldOrbit shouldSpin orbitDuration={22} spinDuration={5}>
      <StarIcon className="size-12 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={900} rotation={-50} shouldOrbit shouldSpin orbitDuration={24} spinDuration={4}>
      <StarIcon className="size-8 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={500} rotation={0} shouldOrbit shouldSpin orbitDuration={26} spinDuration={2}>
      <SparkleIcon className="size-2 text-emerald-300 opacity-20" />
    </HeroOrbit>
    <HeroOrbit size={678} rotation={50} shouldOrbit shouldSpin orbitDuration={28} spinDuration={5}>
      <div className="size-3 rounded-full bg-emerald-300/20"></div>
    </HeroOrbit>
    <HeroOrbit size={897} rotation={100} orbitDuration={30} shouldSpin shouldOrbit spinDuration={20}>
      <StarIcon className="size-28 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={890} rotation={150} shouldOrbit shouldSpin orbitDuration={32} spinDuration={5}>
      <StarIcon className="size-12 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={676} rotation={-125} shouldOrbit shouldSpin orbitDuration={34} spinDuration={4}>
      <StarIcon className="size-8 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={987} rotation={-75} shouldOrbit shouldSpin orbitDuration={36} spinDuration={2}>
      <SparkleIcon className="size-8 text-emerald-300 opacity-20" />
    </HeroOrbit>
    <HeroOrbit size={900} rotation={-25} shouldOrbit shouldSpin orbitDuration={38} spinDuration={5}>
      <div className="size-3 rounded-full bg-emerald-300/20"></div>
    </HeroOrbit>
    <HeroOrbit size={679} rotation={25} orbitDuration={40} shouldSpin shouldOrbit spinDuration={20}>
      <StarIcon className="size-28 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={840} rotation={-25} shouldOrbit orbitDuration={44} spinDuration={1}>
      <div className="size-4 rounded-full bg-emerald-300/20"></div>
    </HeroOrbit>
    <HeroOrbit size={500} rotation={-25} shouldOrbit shouldSpin orbitDuration={44} spinDuration={5}>
      <div className="size-5 rounded-full bg-emerald-300/20"></div>
    </HeroOrbit>


    </div>
    <div className="container">
  <div className='flex flex-col items-center'>
    <Image 
      src={mainImage} 
      className='size-[100px] rounded-full' 
      alt="computer memoji"
    />
    <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
      <div className='bg-red-500 size-2.5 rounded-full relative '>
        <div className='bg-red-500 absolute inset-0 rounded-full animate-ping-large'></div>
      </div>
      <div className='text-sm font-medium'>END SEM EXAMS</div>
    </div>
  </div>
  <div className='max-w-lg mx-auto'>
    <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Jaideep Dahiya</h1>
    <p className='mt-4 text-center text-white/60 md:text-lg'>
      Btech. student at IIITD pursuing CSD
    </p>
  </div>
  <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
    <a href="#projects" className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl relative z-10'>
      <span className='font-semibold'>Explore More </span>
    </a>
    <a href="mailto:jaideepdahiyaaa@gmail.com" className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl relative z-10'>
      <span>👋</span>
      <span className='font-semibold'>Contact Me</span>
    </a>
  </div>
</div>

  </div>
  </section>
  )
};
