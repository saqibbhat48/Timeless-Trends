import React from "react";
import DesignCard from "./DesignCard";
import offer from "../assets/offer.png";
import { motion } from "framer-motion";

const Offers = () => {
  return (
    <div className="py-28 bg-gray-300">
      <motion.div initial={{y:-100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1, delay:0}} >
        <h2 className="text-3xl text-center pb-10 font-bold max-w-7xl mx-auto">
          Our interior design services are tailored to your space, style, and
          budget.
        </h2>
      </motion.div>
      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4">
        <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1, delay:0}}  className="flex flex-col sm:flex-row gap-8">
          <DesignCard
            title="Design Online"
            desc="Your designer will work with you 1:1 to bring your vision to life, complete with a 3D rendering of your actual space."
            price="199"
            discount="109.45"
            btn="GET STARTED ONLINE"
          />

          <DesignCard
            title="Design In-Person"
            desc="Our in-person offering allows you to collaborate with your designer 1:1 in your home to bring your vision to life."
            price="699"
            discount="384.45"
            btn="GET STARTED IN-PERSON"
          />
        </motion.div>
        <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1, delay:0}} >
          <img src={offer} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Offers;
