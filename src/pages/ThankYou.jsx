import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const ThankYou = () => {
    const navigate = useNavigate();
    const gotohome = () => {
        navigate('/');
    };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
        delay: 0.5, // Delay for the icon to appear after text
      },
    },
  };

  return (
    <div className="z-40 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 p-4">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={iconVariants} className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-green-500 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Thank You!
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-6"
          variants={itemVariants}
        >
          Your submission has been received successfully.
        </motion.p>
        <motion.p
          className="text-md text-gray-500 mb-8"
          variants={itemVariants}
        >
          We appreciate your time and effort.
        </motion.p>
        <motion.button
          className="bg-[#0066ff] hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={gotohome} // Replace with actual navigation
        >
          Go to Homepage
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ThankYou;