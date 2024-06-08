import React from "react";
import int1 from "../assets/int1.jpg";
import int2 from "../assets/int2.webp";
import int3 from "../assets/int3.jpg";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gray-400">
      <motion.div  initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1, delay:0}} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-950">
          Our Services
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileTap={{
              scale: 0.8,
              rotate: 90,
              borderRadius: "100%",
            }}
            className="bg-white max-w-96 mx-auto bg-opacity-30 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg shadow-gray-800 hover:scale-105 duration-300 ease-linear"
          >
            <div className="h-48 rounded-lg overflow-hidden bg-center bg-cover">
              <img src={int1} alt="Interior Design" />
            </div>
            <h3 className="text-2xl font-bold text-gray-950 mt-4">
              Interior Design
            </h3>
            <p className="mt-2 text-gray-950">
              Creating stunning interiors for your home or office.
            </p>
          </motion.div>
          <motion.div
            whileTap={{
              scale: 0.8,
              rotate: 90,
              borderRadius: "100%",
            }}
            className="bg-white max-w-96 mx-auto bg-opacity-30 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg shadow-gray-800 hover:scale-105 duration-300 ease-linear"
          >
            <div className="h-48 rounded-lg overflow-hidden bg-center bg-cover">
              <img src={int2} alt="Furniture Design" />
            </div>
            <h3 className="text-2xl font-bold text-gray-950 mt-4">
              Furniture Design
            </h3>
            <p className="mt-2 text-gray-950">
              Custom-designed furniture to fit your style.
            </p>
          </motion.div>
          <motion.div
            whileTap={{
              scale: 0.8,
              rotate: 90,
              borderRadius: "100%",
            }}
            className="bg-white max-w-96 mx-auto bg-opacity-30 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg shadow-gray-800 hover:scale-105 duration-300 ease-linear"
          >
            <div className="h-48 rounded-lg overflow-hidden bg-center bg-cover">
              <img src={int3} alt="Space Planning" />
            </div>
            <h3 className="text-2xl font-bold text-gray-950 mt-4">
              Space Planning
            </h3>
            <p className="mt-2 text-gray-950">
              Optimizing your space for functionality and aesthetics.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
