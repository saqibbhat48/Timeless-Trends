import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            toast.error("Please fill out all fields.");
            return;
        }

        try {
            // If the form submission is successful
            console.log(formData);
            toast.success("Your message has been sent!");

            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            // If there's an error during form submission
            toast.error("An error occurred while sending your message. Please try again.");
        }
    };

    return (
        <>
            <div  id='contact' className="min-h-screen bg-gray-800 py-40 flex flex-col justify-center">
                <div  className="relative py-3 sm:max-w-xl sm:mx-auto px-4">
                    <motion.div initial={{rotate:-30, opacity:0}} whileInView={{rotate:-10, opacity:1}} transition={{duration:1, delay:0}} className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-right-6 rounded-3xl"></motion.div >
                    <motion.div initial={{rotate:30, opacity:0}} whileInView={{rotate:0, opacity:1}} transition={{duration:1, delay:0}} className="text-white relative px-4 py-12 bg-indigo-400 shadow-lg rounded-3xl sm:p-12">
                        <div className="text-center pb-6">
                            <h1 className="text-3xl">Contact Us!</h1>
                            <p className="text-gray-100">
                                Fill up the form below to send us a message.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Name" name="name" required="" value={formData.name} onChange={handleChange} />
                            <input
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Email" name="email" required="" value={formData.email} onChange={handleChange} />
                            <input
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="number" placeholder="Phone" name="phone" required="" value={formData.phone} onChange={handleChange} />
                            <textarea
                                className="shadow mb-4 min-h-0 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-28"
                                type="text" placeholder="Type your message here..." value={formData.message} onChange={handleChange} name="message" required=""
                            />
                            <input
                                className="shadow bg-purple-700 hover:bg-indigo-700 duration-300 ease-linear text-white w-half py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit" value="Send Message ➤" />
                            
                        </form>
                    </motion.div>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={5000} />
        </>
    );
}

export default ContactForm;
