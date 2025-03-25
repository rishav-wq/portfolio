"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Link from 'next/link';
import Image from "next/image";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "MRI Tumor Detector",
    desc: "Engineered a cutting-edge MRI tumor detection system leveraging VGG16-based transfer learning. Trained using TensorFlow/Keras, the model achieves high precision in tumor identification. Seamlessly integrated into a Flask-powered web application, enabling real-time diagnostic predictions for enhanced medical analysis.",
    img: "/mri.png",
    link: "https://github.com/rishav-wq/mri_tumor_detector",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Medicine Recommender",
    desc: "Developed an intelligent medicine recommendation system designed to provide personalized medication, diet plans, and precautionary measures based on user symptoms. Built with Flask and powered by scikit-learn for accurate disease prediction, the system features a user-friendly interface for seamless health consultations.",
    img: "/med.png",
    link: "https://github.com/rishav-wq/medicine_recommendation",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Fake News Predictor",
    desc: "Designed an advanced Fake News Detection system utilizing NLP and machine learning methodologies. Leveraged TF-IDF vectorization and Logistic Regression with scikit-learn to classify misinformation effectively. Deployed as a responsive Flask web application, allowing real-time verification of news authenticity.",
    img: "/news.png",
    link: "https://github.com/rishav-wq/fake_news_predictor",
  },
  {
    "id": 4,
    "color": "from-blue-300 to-green-300",
    "title": "Buzz Chat - Real-Time Chat Application",
    "desc": "Built a real-time chat application using Firebase for instant messaging and seamless user authentication. Integrated Firebase Realtime Database for real-time message syncing and Cloudinary for efficient media storage. Designed an interactive and responsive UI with React.js, ensuring a smooth chat experience.",
    "img": "/buzz.jpeg",
    "link": "https://github.com/rishav-wq/buzz_chat"
  },
  {
    id: 5,
    color: "from-green-300 to-blue-300",
    title: "InfoGenie AI",
    desc: "Developed InfoGenie AI, an advanced conversational assistant powered by state-of-the-art NLP and machine learning techniques. Integrated Gemini AI for real-time intelligent responses and knowledge retrieval, enabling dynamic and context-aware interactions for users seeking instant information.",
    img: "https://elearningindustry.com/wp-content/uploads/2023/03/Shutterstock_1825096265.jpg",
    link: "https://github.com/rishav-wq/infogenie_ai",
  }
];

const PortfolioPage = () => {

  const ref = useRef()
  const {scrollYProgress} = useScroll({target:ref})
  const x = useTransform(scrollYProgress, [0, 1], ["0%","-80%"]);

  return (
    <motion.div
    className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}
  >
    <div className="h-[600vh] relative" ref={ref}>
      <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
        My Works
      </div>
      <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
          {items.map((item) => (
            <div
              className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
              key={item.id}
            >
              <div className="flex flex-col gap-8  text-white">
                <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl xl:text-7xl">
                  {item.title}
                </h1>
                <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px]">
                  <Image src={item.img} alt="" fill />
                </div>
                <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                  {item.desc}
                </p>
                <Link href={item.link} className="flex justify-end">
                  <button className="p-3 md:p-4 lg:p-6 bg-white text-gray-700 font-semibold rounded-lg">See Demo</button>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
    <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-white">
      <h1 className="text-8xl">Do you have a project?</h1>
      <div className="relative">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          viewBox="0 0 300 300"
          className="w-64 h-64 md:w-[500px] md:h-[500px] "
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <text fill="#000">
            <textPath xlinkHref="#circlePath" className="text-xl">
              Front-end Developer and UI Designer
            </textPath>
          </text>
        </motion.svg>
        <Link
          href="/contact"
          className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
        >
          Hire Me
        </Link>
      </div>
    </div>
  </motion.div>
  )
}

export default PortfolioPage
