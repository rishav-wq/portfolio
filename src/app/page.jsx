"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image container */}
        <motion.div
          className="h-1/2 lg:h-full lg:w-1/2 relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* Glowing background circle */}
          <div className="absolute w-[110%] h-[110%] bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />

          {/* Image with advanced effects */}
          <motion.div
            className="w-60 h-60 sm:w-72 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] relative rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 z-10" />

            {/* Image */}
            <Image
              src="/hero1.png" // Replace with your image path
              alt="Your Name"
              fill
              className="object-cover"
              priority // Ensures the image loads first
            />

            {/* Glowing border */}
            <div className="absolute inset-0 rounded-full border-4 border-white/10 shadow-[0_0_30px_15px_rgba(99,102,241,0.4)]" />
          </motion.div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                initial={{ y: 0, x: Math.random() * 100 - 50, opacity: 0 }}
                animate={{
                  y: [0, Math.random() * 100 - 50, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  delay: Math.random() * 2,
                }}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Text container */}
        <div className="h-1/2 flex flex-col gap-8 lg:h-full lg:w-1/2 items-center justify-center mt-8 sm:mt-15">
          <h1 className="text-4xl font-bold  md:text-6xl text-center">
            Transforming Ideas into Scalable & Intelligent Digital Solutions
          </h1>
          <p className="md:text-xl text-gray-700 text-center">
            I specialize in building AI-driven applications, automation tools, and intelligent solutions that enhance user experience and drive efficiency.  
            From full-stack development to machine learning integration, I turn complex challenges into seamless digital products.
          </p>

          {/* Buttons */}
          <div className="w-full flex gap-4 justify-center">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-gray-900 transition-all">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black hover:bg-gray-100 transition-all">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Homepage