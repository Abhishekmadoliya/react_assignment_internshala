import { useState } from 'react';
import { FaComment, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi there! 👋 How can I help you today?', sender: 'bot' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Predefined responses for the AI assistant
  const botResponses = [
    "Thanks for your message! Our team will get back to you shortly.",
    "I'd be happy to help you sell your software licenses. Could you tell me what type of licenses you have?",
    "SoftSell typically processes payments within 48 hours of verifying your licenses.",
    "We accept all major software licenses, including Microsoft, Adobe, AutoCAD, and many more!",
    "Our valuation process is automated and considers current market demand for your specific licenses.",
    "Feel free to call us at +1 (555) 123-4567 for more immediate assistance."
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (newMessage.trim() === '') return;
    
    // Add user message
    const updatedMessages = [
      ...messages,
      { text: newMessage, sender: 'user' }
    ];
    
    setMessages(updatedMessages);
    setNewMessage('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prevMessages => [
        ...prevMessages,
        { text: randomResponse, sender: 'bot' }
      ]);
    }, 1000);
  };

  return (
    <div>
      <motion.div 
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaComment size={24} />}
      </motion.div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed bottom-20 right-4 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden z-10"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="bg-blue-600 text-white p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">SoftSell Support</h3>
                  <p className="text-xs text-blue-100">We typically reply in a few minutes</p>
                </div>
                <button 
                  onClick={toggleChat}
                  className="text-white hover:bg-blue-700 rounded-full p-1"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            
            <div className="p-4 h-80 overflow-y-auto flex flex-col space-y-3 bg-gray-50 dark:bg-gray-700">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`max-w-3/4 ${
                    message.sender === 'user' 
                      ? 'ml-auto bg-blue-600 text-white rounded-tl-lg rounded-bl-lg rounded-tr-lg' 
                      : 'mr-auto bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-white rounded-tr-lg rounded-br-lg rounded-tl-lg'
                  } p-3 rounded-lg`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSendMessage} className="p-4 border-t dark:border-gray-600 bg-white dark:bg-gray-800 flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-md"
              >
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget; 