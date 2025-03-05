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
    img: "https://private-user-images.githubusercontent.com/145801777/408846488-53121a4c-cc69-4f95-b838-df0d12f3eb51.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDExODQ2ODQsIm5iZiI6MTc0MTE4NDM4NCwicGF0aCI6Ii8xNDU4MDE3NzcvNDA4ODQ2NDg4LTUzMTIxYTRjLWNjNjktNGY5NS1iODM4LWRmMGQxMmYzZWI1MS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMwNVQxNDE5NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04Y2I5ZDlkYmEwNjdhOTY1OWQ2Y2ZjMGViNzY5ZTAzYTI4YjY4ZTA4ZGE0Y2NlMDBiOTYzYjUwYjg3MGY2MTBlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ua49aAsNEMmiv1Sp_D4Pg7bl5T-TocKWOoCMu4HEb1w",
    link: "https://github.com/rishav-wq/mri_tumor_detector",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Medicine Recommender",
    desc: "Developed an intelligent medicine recommendation system designed to provide personalized medication, diet plans, and precautionary measures based on user symptoms. Built with Flask and powered by scikit-learn for accurate disease prediction, the system features a user-friendly interface for seamless health consultations.",
    img: "https://private-user-images.githubusercontent.com/145801777/408846798-d306cbb9-0e78-48fc-9376-4cad14745d9c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDExODQ5NzYsIm5iZiI6MTc0MTE4NDY3NiwicGF0aCI6Ii8xNDU4MDE3NzcvNDA4ODQ2Nzk4LWQzMDZjYmI5LTBlNzgtNDhmYy05Mzc2LTRjYWQxNDc0NWQ5Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMwNVQxNDI0MzZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYzdlMmEyODlhMmMyYjY0Nzg5NzliZThhYTA3ODBlYTFlMmJhZTJhMTJjMWE0OTQ2N2E4ZTdjN2ExMjQwMTE2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.nK7lgNhVkwiyRcLutC9F8s6Z_MTF-5mLBvH6BrrcHq4",
    link: "https://github.com/rishav-wq/medicine_recommendation",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Fake News Predictor",
    desc: "Designed an advanced Fake News Detection system utilizing NLP and machine learning methodologies. Leveraged TF-IDF vectorization and Logistic Regression with scikit-learn to classify misinformation effectively. Deployed as a responsive Flask web application, allowing real-time verification of news authenticity.",
    img: "https://private-user-images.githubusercontent.com/145801777/408847074-e4eaa4c8-0e3b-4e63-bca1-36e969dc7565.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDExODQ3ODYsIm5iZiI6MTc0MTE4NDQ4NiwicGF0aCI6Ii8xNDU4MDE3NzcvNDA4ODQ3MDc0LWU0ZWFhNGM4LTBlM2ItNGU2My1iY2ExLTM2ZTk2OWRjNzU2NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMwNVQxNDIxMjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYjJiYzEzNmFmZTcwNmQ3NGI1ZjViZTU2ZDJlN2YwNDllMTFjNWJmZDgzODFmNWMyODBkZjQ2OTI0Y2VlNmQ0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.jgQO1k_UUsTEmAvWP2HKk_nqeojTo-_CO-Juy26zgrc",
    link: "https://github.com/rishav-wq/fake_news",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "AI Smart Diet Planner",
    desc: "Developed a state-of-the-art AI-powered diet planning system utilizing Gemini AI for tailored meal recommendations. Integrated real-time nutritional data from the USDA FoodData Central API to ensure scientifically backed meal suggestions. Designed with an intuitive web interface for a seamless user experience.",
    img: "data:image/jpeg;base64,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",
    link: "https://github.com/rishav-wq/ai_smart_diet_planner",
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
