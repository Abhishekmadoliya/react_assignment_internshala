import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const licenseTypes = [
    'Microsoft Office',
    'Adobe Creative Cloud',
    'AutoCAD',
    'Windows Server',
    'Oracle Database',
    'SAP',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.licenseType) newErrors.licenseType = 'Please select a license type';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Form is valid - in a real app you would send the data to a server here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: ''
    });
  };

  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to unlock the value of your unused software licenses? Contact us today.
          </p>
        </motion.div>
        
        {submitted ? (
          <motion.div 
            className="bg-green-100 dark:bg-green-900 p-6 rounded-lg shadow-md text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-green-800 dark:text-green-200">Thank You!</h3>
            <p className="text-green-700 dark:text-green-300">
              We've received your message and will get back to you shortly.
            </p>
            <button 
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md"
              onClick={() => setSubmitted(false)}
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form 
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700 dark:text-gray-300">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-300">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                />
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="company" className="block mb-2 text-gray-700 dark:text-gray-300">Company *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md border ${errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                />
                {errors.company && <p className="mt-1 text-red-500 text-sm">{errors.company}</p>}
              </div>
              
              <div>
                <label htmlFor="licenseType" className="block mb-2 text-gray-700 dark:text-gray-300">License Type *</label>
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md border ${errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                >
                  <option value="">Select license type</option>
                  {licenseTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                {errors.licenseType && <p className="mt-1 text-red-500 text-sm">{errors.licenseType}</p>}
              </div>
            </div>
            
            <div className="mt-6">
              <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              ></textarea>
            </div>
            
            <div className="mt-8">
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md font-bold transition duration-300"
              >
                Submit
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactForm; 