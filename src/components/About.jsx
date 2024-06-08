import React from "react";
import aboutImg from "../assets/aboutImg.jpg";
import about2 from "../assets/about2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 ">
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto">
        <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1, delay:0}} className="p-8 flex justify-center items-center">
          <img src={aboutImg} alt="" />
        </motion.div>
        <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1, delay:0}} className="p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center text-gray-950">
            About Us
          </h2>
          <p className="mt-4 text-center md:text-left text-lg text-gray-800">
            Your trustworthy source for interior design information. We invite
            you to immerse yourself in our elegant and stylish universe, where
            everyone may find motivation to makeover their living space. Our
            goal is to impart cutting-edge methods and fashionable ideas that
            will enable you to design a room that expresses your individuality
            and sense of flair. 
          </p>
          <p className="mt-4 text-center md:text-left text-lg text-gray-800">
            “Timeless Trends” was founded by a group of
            design aficionados and is a place where imagination and reality
            collide. We take great pride in offering practical guidance, expert
            suggestions, and imaginative fixes that help create a peaceful and
            comfortable home.</p>
        </motion.div>
      </div>

      <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1, delay:0}} className="grid md:grid-cols-3 max-w-6xl mx-auto mt-20">
        <div className="flex flex-col items-center justify-between gap-5 p-4">
            <div>
                <h2 className="text-2xl text-center font-bold text-gray-950">EXPERTISE AND EXPERIENCE</h2>
                <p className="text-center">Experienced interior designers and décor aficionados who are always up to date on the newest developments in the field make up our team. We make use of this information to give you the best advice and suggestions.</p>
            </div>
            <div>
                <h2 className="text-2xl text-center font-bold text-gray-950">PRACTICALITY AND AFFORDABILITY</h2>
                <p className="text-center">We are aware that exquisite design must to be not only eye-catching but also reasonably priced and practical. Regardless of your budget, "Digital-Dazzle" offers practical recommendations that you may use in your home.</p>
            </div>
        </div>
        <div className="flex justify-center items-center p-8">
            <img src={about2} alt="" />
        </div>
        <div className="flex flex-col items-center justify-between gap-5 p-4">
            <div>
                <h2 className="text-2xl text-center font-bold text-gray-950">INNOVATIVE AND CREATIVE SOLUTIONS</h2>
                <p className="text-center">"Timeless Trends" gives particular emphasis on cutting-edge design solutions that enable our readers to build distinctive rooms. Our blog serves as a venue for original concepts that can bring life to any area.</p>
            </div>
            <div>
                <h2 className="text-2xl text-center font-bold text-gray-950">COMMUNITY INVOLVEMENT</h2>
                <p className="text-center">We take great pride in having a vibrant and friendly reader community that shares ideas, projects, and triumphs related to interior design. Interacting with our community offers anybody interested in decorating helpful support and opportunities to share experiences.</p>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
