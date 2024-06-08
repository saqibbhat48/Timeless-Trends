import React from 'react';
import homeImg from '../assets/home.jpg'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${homeImg})` }}>
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-10 rounded-lg text-center">
        <motion.div initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:0}}>
          <h1 className="text-5xl font-bold text-gray-900">Welcome to Timeless Trends</h1>
        </motion.div>
        <motion.div initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:0}}>
          <p className="mt-4 text-xl text-gray-900">Transforming spaces into beautiful experiences</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
