import { motion } from 'framer-motion';
import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUpload className="text-4xl mb-4 text-blue-500" />,
      title: 'Upload License',
      description: 'Securely upload your unused software license information through our encrypted platform.'
    },
    {
      icon: <FaSearchDollar className="text-4xl mb-4 text-blue-500" />,
      title: 'Get Valuation',
      description: 'Our advanced algorithm analyzes market demand and provides you with a competitive valuation.'
    },
    {
      icon: <FaMoneyBillWave className="text-4xl mb-4 text-blue-500" />,
      title: 'Get Paid',
      description: 'Accept our offer and receive payment via your preferred method within 48 hours.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 md:px-10 lg:px-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our streamlined process makes selling your software licenses simple and efficient.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 