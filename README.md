## Live Demo

Check out the live version here: [https://softsell.vercel.app](https://react-assignment-internshala.vercel.app/)

# SoftSell - Software License Marketplace

A modern, responsive single-page marketing website for SoftSell, a fictional company that helps businesses monetize their surplus software licenses.

![Screenshot 2025-05-16 133535](https://github.com/user-attachments/assets/e4b22924-2000-40ed-afae-ef995e34a526)
![Screenshot 2025-05-16 133513](https://github.com/user-attachments/assets/0977c105-b646-4579-8bfe-b4bd23fdc5ad)
![Screenshot 2025-05-16 133453](https://github.com/user-attachments/assets/21f7dd42-48d7-4ada-8ae7-d99a7aa570bb)
![Screenshot 2025-05-16 133420](https://github.com/user-attachments/assets/87f80154-cbdb-488f-9ff5-9a74c426efc6)
![Screenshot 2025-05-16 133342](https://github.com/user-attachments/assets/905619e6-20bf-4359-a058-65c9af11b5b6)
![Screenshot 2025-05-16 133612](https://github.com/user-attachments/assets/eb7acace-652b-4047-830d-16abd438a810)



## Overview

This project is a React-based marketing landing page for SoftSell, featuring a clean, modern design with interactive elements and responsive layout. It serves as a demonstration of frontend development skills using React and Tailwind CSS.

## Time Spent

The total time spent on this assignment is **2 days**, including planning, development, testing, and refinements.

## Features

- **Responsive Design**: Fully optimized for all screen sizes (mobile, tablet, desktop)
- **Interactive UI Elements**: 
  - Modal dialogs
  - Form validation
  - Smooth scrolling
  - Animated section transitions
- **Dark/Light Mode Toggle**: Complete theme switching functionality
- **Chat Widget**: Interactive AI support chat simulation with:
  - Predefined prompt suggestions for quick user inquiries
  - Interactive buttons for common questions
  - Fallback messaging for empty inputs
- **Accessibility**: Semantic HTML and proper focus management
- **Optimized Performance**: Fast loading and rendering

## Technology Stack

- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS (via CDN)
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: Custom React hooks with validation

## Project Structure

```
client/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── Hero.jsx             # Hero section
│   │   ├── HowItWorks.jsx       # Process explanation section
│   │   ├── WhyChooseUs.jsx      # Benefits section
│   │   ├── Testimonials.jsx     # Customer reviews section
│   │   ├── ContactForm.jsx      # Lead capture form
│   │   ├── Footer.jsx           # Site footer
│   │   └── ChatWidget.jsx       # Interactive chat widget
│   ├── App.jsx      # Main application component
│   ├── main.jsx     # Application entry point
│   ├── styles.css   # Custom CSS styles
│   └── index.css    # Global CSS styles
└── index.html       # HTML entry point
```

## Key Components

1. **Hero Section**: Captivating headline with call-to-action button
2. **How It Works**: 3-step process explanation with icons
3. **Why Choose Us**: Key benefits presented with icons and descriptions
4. **Testimonials**: Customer reviews with attribution
5. **Contact Form**: Lead capture form with validation
6. **Chat Widget**: Interactive AI support chat simulation with predefined prompts and fallback messaging

## Design Choices

- **Color Scheme**: Blue and purple gradient for primary elements, with appropriate dark mode alternatives
- **Typography**: System font stack optimized for readability with well-defined hierarchy
- **Spacing**: Consistent padding and margins for visual harmony
- **Animations**: Subtle animations to enhance user experience without being distracting
- **Dark Mode**: Complete dark theme implementation for user preference

- **SEO Optimized**: Meta tags and page title for better discoverability
- **Favicon**: Custom favicon added for branding


## Getting Started

### Prerequisites

- Node.js (v14+)
- npm 



### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Abhishekmadoliya/react_assignment_internshala.git
   cd softsell
   ```

2. Install dependencies:
   ```
   cd client
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```



## Deployment

The site is deployed on:

- **Vercel**: Recommended for simplicity





## Acknowledgements

- Design inspiration from modern landing pages
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
