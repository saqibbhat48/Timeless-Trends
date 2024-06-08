import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const [subscribe, setSubscribe] = useState({
        email: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubscribe({
            ...subscribe,
            [name]: value
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(subscribe);
    }

  return (
    <footer className="bg-gray-950 text-gray-400 py-10">
      <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1, delay:0}} className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:max-w-6xl">
        <div className='text-center lg:text-left '>
          <h3 className="text-white mb-4">Products</h3>
          <ul className='cursor-pointer'>
            {["Floor Planner", "Kitchen & Bath Design", "Closet Design", "3D Lighting Design", "3D Viewer & AR", "Photo & Video Studio", "AI Visual Studio", "Virtual Showroom"].map((product, index) => (
              <li key={index} className="hover:text-white">
                {product}
              </li>
            ))}
          </ul>
        </div>
        <div className='text-center lg:text-left'>
          <h3 className="text-white mb-4">Company</h3>
          <ul className='cursor-pointer'>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
              <li className="hover:text-white">Affiliate Program</li>
              <li className="hover:text-white">Careers</li>
          </ul>
        </div>
        <div className='text-center lg:text-left'>
          <h3 className="text-white mb-4">Contact</h3>
          <ul className='cursor-pointer'>
            {["Sales@timelesstrends.com", "New Delhi Office", "Bangalore", "Mumbai"].map((contact, index) => (
              <li key={index} className="hover:text-white">
                {contact}
              </li>
            ))}
          </ul>
        </div>
        <div className='text-center lg:text-left'>
          <div >
            <p className="mb-2">Subscribe to the Timeless Trends Weekly and enjoy seven days of Interior Design news in one newsletter with worldwide delivery.</p>
            <form className="flex bg-white gap-2 p-1 rounded-lg" onSubmit={handleSubmit}>
              <input
                type="email"
                className="w-full p-1 text-sm rounded-md focus:outline-none text-black"
                placeholder="Email"
                name='email'
                onChange={handleChange}
                value={subscribe.email}
                required
              />
              <button type='submit' className="bg-gray-950 text-white px-2 py-1 rounded-md hover:bg-gray-900 duration-300 ease-linear">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </motion.div>
      <div className="container max-w-6xl mx-auto mt-10 px-4">
        <div className="flex justify-between flex-col sm:flex-row items-center text-gray-500">
          <p>© 2024 Timeless Trends, Inc. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              User Agreement
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
