import { motion } from 'framer-motion';
import { FaLock, FaBolt, FaStar, FaGlobe } from 'react-icons/fa';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <FaLock className="text-4xl mb-4 text-blue-500" />,
      title: 'Secure Transactions',
      description: 'Your license data and financial transactions are protected with bank-level encryption.'
    },
    {
      icon: <FaBolt className="text-4xl mb-4 text-blue-500" />,
      title: 'Fast Payments',
      description: 'Once validated, we transfer payments within 48 hours to your preferred payment method.'
    },
    {
      icon: <FaStar className="text-4xl mb-4 text-blue-500" />,
      title: 'Best Market Rates',
      description: 'Our network of enterprise buyers ensures you get top dollar for your licenses.'
    },
    {
      icon: <FaGlobe className="text-4xl mb-4 text-blue-500" />,
      title: 'Global Reach',
      description: 'Access international markets and buyers that wouldnt be available to you otherwise.'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Us</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            SoftSell provides industry-leading service and value for your software license transactions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 