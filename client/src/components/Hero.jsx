import { motion } from 'framer-motion';
import { useState } from 'react';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCTAClick = () => {
    setShowModal(true);
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Turn Unused Software Licenses into Cash
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            SoftSell helps businesses monetize their surplus software licenses quickly and securely.
          </p>
          <motion.button
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            onClick={handleCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sell My Licenses
          </motion.button>
        </motion.div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Getting Started</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's get you started with the process of selling your software licenses. 
              Follow our simple 3-step process to get the best value for your licenses.
            </p>
            <div className="flex justify-between">
              <button 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded dark:bg-gray-700 dark:text-white"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                onClick={() => {
                  setShowModal(false);
                  document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See How It Works
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero; 