import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import { Button } from '@/components/ui/button';

const sentance = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      staggerChildren: 0.04,
      default: { type: "spring" },
      opacity: { ease: "linear" },
    },
  },
};

const colorArray = [
  "hsl(209, 95%, 36%)",
  "hsl(199, 89%, 48%)",
  "hsl(187, 100%, 42%)",
  "hsl(209, 95%, 50%)",
  "hsl(199, 89%, 60%)",
];

const animateProps = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 0.3, scale: 1.1 },
  transition: { duration: 1.3, ease: easeInOut },
};

const title = "FLUTTER STORE";
const delayDuration = 0.2;

export default function HeroSection() {
  return (
    <div className="my-10 mt-20 md:m-0 md:h-[85vh] grid relative place-items-center overflow-x-clip">
      <LineSvg />
      <div className="mx-auto p-10 md:p-0 flex-col flex items-center justify-center w-auto relative">
        <Blobs />
        <Content />
      </div>
    </div>
  );
}

const LineSvg = () => {
  return (
    <svg
      width="647"
      height="600"
      viewBox="0 0 647 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-[-5rem] right-0 hidden lg:block"
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0, filter: "blur(10px)" }}
        animate={{ pathLength: 1, opacity: 0.5, filter: "blur(2px)" }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        d="M0.891053 -13.3811C449.423 -6.20799 147.901 545.07 676.577 553.525"
        stroke="url(#paint0_linear_75_2)"
        strokeWidth="18"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_2"
          x1="-0.686107"
          y1="-9.16238"
          x2="535.586"
          y2="664.913"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="hsl(209, 95%, 36%)" />
          <stop offset="0.217598" stopColor="hsl(199, 89%, 48%)" />
          <stop offset="0.478654" stopColor="hsl(187, 100%, 42%)" />
          <stop offset="0.73971" stopColor="hsl(209, 95%, 50%)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Blobs = () => {
  return (
    <>
      <motion.div
        {...animateProps}
        className="blob-1 bg-primary/30 size-40 sm:size-80 rounded-full absolute mix-blend-multiply left-[-2rem] opacity-50 blur-2xl"
      ></motion.div>
      <motion.div
        {...animateProps}
        className="blob-1 bg-secondary/30 size-40 sm:size-80 rounded-full absolute mix-blend-multiply right-[-1.5rem] opacity-50 blur-2xl"
      ></motion.div>
      <motion.div
        {...animateProps}
        className="blob-1 bg-gradient-to-b from-accent/30 to-primary/30 size-40 sm:size-80 rounded-full mix-blend-multiply absolute top-[-2rem] opacity-50 blur-2xl"
      ></motion.div>
      <motion.div
        {...animateProps}
        className="blob-1 bg-secondary/40 size-40 sm:size-80 rounded-full mix-blend-multiply absolute bottom-[-4rem] blur-2xl"
      ></motion.div>
    </>
  );
};

const Content = () => {
  return (
    <>
      <div className="flex gap-[3rem] items-baseline">
        <Left />
        <Logo />
        <Right />
      </div>
      <Title />
      <Desc />
      <Buttons />
    </>
  );
};

const Left = () => {
  return (
    <div className="space-y-[2rem] sm:mb-2">
      <motion.img
        initial={{
          x: 80,
          y: "50%",
          rotate: -20,
          opacity: 0,
        }}
        animate={{
          x: 0,
          y: "0",
          rotate: 0,
          opacity: 1,
        }}
        transition={{ delay: delayDuration + 0.2 }}
        src="/3.jpg"
        alt=""
        className="w-10 sm:w-14 rounded drop-shadow-md drop-shadow-black/20 rotate-[-20deg]"
      />
      <motion.img
        initial={{
          x: 80,
          y: "50%",
          rotate: -20,
          opacity: 0,
        }}
        animate={{
          x: 0,
          y: "0",
          rotate: 0,
          opacity: 1,
        }}
        transition={{ delay: delayDuration + 0.4 }}
        src="/2.jpg"
        alt=""
        className="w-10 sm:w-14 rounded drop-shadow-md drop-shadow-black/20 rotate-[-20deg]"
      />
    </div>
  );
};

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", scale: 0.5, rotate: -90 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1, rotate: 0 }}
      transition={{ delay: delayDuration }}
      className="size-40 sm:size-56 md:size-64 rounded-full overflow-hidden shadow-flutter border-4 border-primary/20"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/fly.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

const Right = () => {
  return (
    <div className="space-y-[2rem] sm:mb-2">
      <motion.img
        initial={{ x: -80, y: "100%", rotate: -20, opacity: 0 }}
        animate={{ x: 0, y: "0", rotate: 0, opacity: 1 }}
        transition={{ delay: delayDuration + 0.3 }}
        src="/4.jpg"
        alt=""
        className="w-10 sm:w-14 rounded drop-shadow-md drop-shadow-black/20 rotate-[20deg]"
      />
      <motion.img
        initial={{ x: -80, y: "100%", rotate: -20, opacity: 0 }}
        animate={{ x: 0, y: "0", rotate: 0, opacity: 1 }}
        transition={{ delay: delayDuration + 0.5 }}
        src="/1.jpg"
        alt=""
        className="w-10 sm:w-14 rounded drop-shadow-md drop-shadow-black/20 rotate-[20deg]"
      />
    </div>
  );
};

const Title = () => {
  return (
    <motion.h1
      variants={sentance}
      initial="hidden"
      animate="visible"
      className="text-[3rem] sm:text-[6rem] -mt-8 sm:-mt-0 lg:text-[8rem] leading-[8rem] font-black tracking-tighter"
    >
      {title.split("").map((char, index) => {
        const randomColor =
          colorArray[Math.floor(Math.random() * colorArray.length)];

        const letterVariant = {
          hidden: {
            opacity: 0,
            y: 40,
            transform: "skewX(-20deg)",
            filter: "blur(10px)",
            color: randomColor,
          },
          visible: {
            filter: "blur(0px)",
            transform: "skewX(0deg)",
            opacity: 1,
            color: "hsl(215, 25%, 15%)",
            y: 0,
            transition: {
              duration: 0.8,
              default: { type: "spring" },
            },
          },
        };

        return (
          <motion.span
            key={char + "-" + index}
            variants={letterVariant}
            className="inline-block"
          >
            {char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

const Desc = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: delayDuration + 0.2 }}
      className="text-center text-balance max-w-sm -mt-10 sm:-mt-0 sm:max-w-xl md:max-w-[50rem] text-[9px] sm:text-xs lg:text-sm opacity-80 font-medium lg:mt-1"
    >
      Official merchandise from the Namma Flutter Chennai community. Premium hoodies and t-shirts designed for Flutter enthusiasts.
    </motion.p>
  );
};

const Buttons = () => {
  return (
    <div className="flex items-center mt-4 gap-5">
      <Link to="/products">
        <motion.div
          initial={{
            opacity: 0,
            x: 20,
            filter: "blur(2px)",
          }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          transition={{ delay: delayDuration + 0.8 }}
        >
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group px-8 py-6 text-lg">
            Explore
            <ArrowRight className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </Link>
    </div>
  );
};
