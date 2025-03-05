"use client";
import { motion, useInView, useScroll } from "framer-motion";
import React, { useRef } from "react";

const AboutPage = () => {
  const {} = () => {
    const containerRef = useRef();
    const { scrollProgress } = useScroll({ container: containerRef });
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex">
        {/* text container */}
        <div className="p-4 sm:px-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* bibliography */}
          <div className="flex flex-col gap-12 justify-center">
            {/* title */}
            <h1 className="font-bold text-2xl">BIBLIOGRAPHY</h1>
            {/* description */}
            <p className="text-lg">
              Driven by innovation and problem-solving, I am dedicated to
              building impactful solutions through technology. Each project I
              undertake is an opportunity to push boundaries, refine my skills,
              and contribute meaningfully to the ever-evolving tech landscape. I
              believe in continuous learning and collaboration, striving to turn
              ideas into reality through creativity and technical expertise.
              With every challenge, I aim to grow and make a difference in the
              world of technology.
            </p>

            <span className="italic">
              "Innovation thrives where curiosity meets determination."
            </span>

            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* skills */}
          <div className="flex flex-col gap-12  justify-center">
            {/* skill title */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* skills list */}
            <div className="flex gap-4  flex-wrap">
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </div>
            {/* skill scroll svg */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* experience */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* experience title */}
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/* experience list */}
            <div className="">
              {/* EXPERIENCE LIST ITEM - AI-based Smart Diet Planner */}
              <div className="flex justify-between h-48">
                <div className="w-1/3 flex flex-col justify-center">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    AI-based Smart Diet Planner
                  </div>
                  <div className="p-3 text-sm italic">
                    Developed an AI-powered diet planner leveraging Gemini NLP
                    and ML for personalized meal recommendations.
                  </div>
                  <div className="p-3 text-blue-400 text-sm font-semibold">
                    2023 - Present
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    AI & ML
                  </div>
                </div>
                <div className="w-1/6 flex justify-center relative">
                  <div className="w-1 h-full bg-gray-600 rounded"></div>
                  {/* <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div> */}
                </div>
                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE LIST ITEM - MRI Tumor Detection */}
              <div className="flex justify-between h-48">
                <div className="w-1/3"></div>
                <div className="w-1/6 flex justify-center relative">
                  <div className="w-1 h-full bg-gray-600 rounded"></div>
                  {/* <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div> */}
                </div>
                <div className="w-1/3 flex flex-col justify-center">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    MRI Tumor Detection System
                  </div>
                  <div className="p-3 text-sm italic">
                    Implemented deep learning for MRI-based brain tumor
                    classification.
                  </div>
                  <div className="p-3 text-blue-400 text-sm font-semibold">
                    2023 - Present
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Deep Learning
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM - Infogenie AI */}
              <div className="flex justify-between h-48">
                <div className="w-1/3 flex flex-col justify-center">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Infogenie AI
                  </div>
                  <div className="p-3 text-sm italic">
                    Gained hands-on AI experience by collaborating on an
                    AI-based startup.
                  </div>
                  <div className="p-3 text-blue-400 text-sm font-semibold">
                    2023 - 2024
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    AI Startup
                  </div>
                </div>
                <div className="w-1/6 flex justify-center relative">
                  <div className="w-1 h-full bg-gray-600 rounded"></div>
                  {/* <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div> */}
                </div>
                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE LIST ITEM - Shortest Path Visualizer */}
              <div className="flex justify-between h-48">
                <div className="w-1/3"></div>
                <div className="w-1/6 flex justify-center relative">
                  <div className="w-1 h-full bg-gray-600 rounded"></div>
                  {/* <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div> */}
                </div>
                <div className="w-1/3 flex flex-col justify-center">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Shortest Path Visualizer
                  </div>
                  <div className="p-3 text-sm italic">
                    Built an interactive DSA learning tool for visualizing
                    shortest path algorithms.
                  </div>
                  <div className="p-3 text-blue-400 text-sm font-semibold">
                    2023
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Algorithm Visualization
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM - Medicine Recommendation System */}
              <div className="flex justify-between h-48">
                <div className="w-1/3 flex flex-col justify-center">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Medicine Recommendation System
                  </div>
                  <div className="p-3 text-sm italic">
                    Created an AI-based system that suggests medicines based on
                    symptoms.
                  </div>
                  <div className="p-3 text-blue-400 text-sm font-semibold">
                    2023
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    AI & Healthcare
                  </div>
                </div>
                <div className="w-1/6 flex justify-center relative">
                  <div className="w-1 h-full bg-gray-600 rounded"></div>
                  {/* <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div> */}
                </div>
                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE LIST ITEM - Smart India Hackathon */}
              <div className="flex justify-between h-48">
                <div className="w-1/3"></div>
                <div className="w-1/6 flex justify-center relative">
                  <div className="w-1 h-full bg-gray-600 rounded"></div>
                  {/* <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div> */}
                </div>
                <div className="w-1/3 flex flex-col justify-center">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Smart India Hackathon
                  </div>
                  <div className="p-3 text-sm italic">
                    Worked on "Future Ready Paperless Scholarship" solution as
                    part of a hackathon challenge.
                  </div>
                  <div className="p-3 text-blue-400 text-sm font-semibold">
                    2023
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Hackathon Project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
