import { FaTwitter, FaLinkedinIn, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">SoftSell</h3>
            <p className="text-gray-400 mb-6">
              The premier marketplace for buying and selling software licenses. Convert unused licenses into cash quickly and securely.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 w-8 h-8 rounded-full flex items-center justify-center transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 w-8 h-8 rounded-full flex items-center justify-center transition duration-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 w-8 h-8 rounded-full flex items-center justify-center transition duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 w-8 h-8 rounded-full flex items-center justify-center transition duration-300">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition duration-300">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">123 Tech Plaza, Noida </p>
            <p className="text-gray-400 mb-2">UP, 94103</p>
            <p className="text-gray-400 mb-2">contact@softsell.com</p>
            <p className="text-gray-400">+91 1234567891</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>© {currentYear} SoftSell. All rights reserved.</p>
          <div className="mt-2 space-x-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition duration-300">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 