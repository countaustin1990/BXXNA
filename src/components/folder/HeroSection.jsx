import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social icons
import './style.css';  // Make sure to link to your CSS file or Tailwind
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('dark'); // Default to dark mode
    }
  }, []);

  return (
    <div className={`app ${theme}-mode`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="font-extrabold">Welcome to Our Website</h1>
          <p className="lead font-semibold">Experience the best content, tailored for you. Switch between light and dark mode!</p>
          <button className="cta-button">Learn More</button>

          {/* Social Media Icons */}
          <div className="flex justify-center mt-6 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-400 hover:text-blue-300">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl text-pink-600 hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-700 hover:text-blue-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </section>

      {/* Dark/Light Mode Toggle */}
      <label className="switch mb-5 ml-5">
        <input 
          type="checkbox" 
          checked={theme === 'light'} 
          onChange={toggleTheme} 
        />
        <span className="slider"></span>
        <span className="decoration"></span>
      </label>
    </div>
  );
};

export default HeroSection;
