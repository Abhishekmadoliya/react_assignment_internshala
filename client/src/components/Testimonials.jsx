import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SoftSell transformed our IT budget management. We recovered over $50,000 from unused licenses that were gathering digital dust in our system. The process was incredibly smooth and transparent.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "Innovate Tech Solutions"
    },
    {
      quote: "As a software asset manager, I'm always looking for ways to optimize our license portfolio. SoftSell provided an excellent platform to monetize our surplus licenses with minimal administrative overhead.",
      name: "Michael Chen",
      role: "IT Asset Manager",
      company: "Global Enterprise Inc."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by businesses of all sizes to recoup value from their software investments.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FaQuoteLeft className="text-4xl text-blue-500 opacity-30 mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 