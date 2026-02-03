import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import heroImage from '../assets/ilyas.svg';

const Hero = () => {
  const contentRef = useScrollReveal();
  const imageRef = useScrollReveal();
  
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'http://www.youtube.com/@muhammadilyasrasyid5817',
      icon: (
        <svg className="w-4 sm:w-5 h-4 sm:h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
      color: 'hover:bg-red-100 hover:text-red-600 text-gray-700'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ilyasrasyid._',
      icon: (
        <svg className="w-4 sm:w-5 h-4 sm:h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: 'hover:bg-pink-100 hover:text-pink-600 text-gray-700'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ilyas-rasyid-991a23384/',
      icon: (
        <svg className="w-4 sm:w-5 h-4 sm:h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.833 0-9.749h3.554v1.383c.43-.664 1.199-1.608 2.928-1.608 2.136 0 3.745 1.393 3.745 4.385v5.589zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.708 0-.951.771-1.71 1.954-1.71 1.182 0 1.915.759 1.915 1.71 0 .95-.733 1.708-1.954 1.708zm1.581 11.597H3.635V9.558h3.283v10.894zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      color: 'hover:bg-blue-100 hover:text-blue-700 text-gray-700'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@ilyasrasyid._?_r=1&_t=ZS-93bhST8o6oE',
      icon: (
        <svg className="w-4 sm:w-5 h-4 sm:h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 11-4.33-2.06A2.41 2.41 0 018.26 9.26c0 .26-.05.52-.15.75H4.49a5.88 5.88 0 105.87 5.87V9.85a7.6 7.6 0 004.72 1.72v-3.88a4.85 4.85 0 01-.88-.05z" />
        </svg>
      ),
      color: 'hover:bg-black hover:text-white text-gray-700'
    }
  ];

  // Fungsi untuk handle error gambar
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://via.placeholder.com/450x500/3B82F6/FFFFFF?text=Ilyas+Rasyid';
    e.currentTarget.alt = 'Ilyas Rasyid - Placeholder Image';
  };

  return (
    <section 
      id="home" 
      className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-20 min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white pt-24 md:pt-32"
    >
      {/* Left Content */}
      <div ref={contentRef} className="scroll-reveal flex-1 space-y-4 sm:space-y-6 w-full max-w-2xl md:order-first">
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Hello, welcome to my portfolio!
        </div>

        {/* Title Section */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
            Hi, I'm <span className="text-primary">Ilyas Rasyid!</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">
            I design, develop, and analyze digital products
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
            Combining UI/UX, web development, SEO, data analytics, and AI to turn ideas into measurable digital solutions.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center pt-4 sm:pt-6">
          <a href="#work" className="inline-block w-full sm:w-auto">
            <button className="btn-filled w-full sm:w-auto px-6 py-3 rounded-xl text-sm sm:text-base">
              View Work
            </button>
          </a>
          <a href="#contact" className="inline-block w-full sm:w-auto">
            <button className="btn-outlined w-full sm:w-auto px-6 py-3 rounded-xl text-sm sm:text-base">
              Contact Me
            </button>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-3 sm:gap-4 pt-6 sm:pt-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 shadow-sm ${social.color} transition-all duration-300 hover:scale-110`}
              aria-label={`Follow me on ${social.name}`}
              title={`Follow me on ${social.name}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Stats or Quick Info */}
        <div className="flex flex-wrap gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-100">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
            <div className="text-xs sm:text-sm text-gray-600">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">4+</div>
            <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div ref={imageRef} className="scroll-reveal flex-1 flex justify-center md:justify-end relative w-full max-w-lg mx-auto md:mx-0 mt-8 md:mt-0">
        <div className="relative w-full md:w-[480px] h-72 md:h-[550px] overflow-hidden rounded-3xl md:rounded-bl-[120px] shadow-2xl shadow-blue-200/50">
          <img
            src={heroImage}
            alt="Ilyas Rasyid - Digital Product Developer"
            className="w-full h-full object-cover object-center"
            onError={handleImageError}
          />
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-purple-400 rounded-full opacity-20 blur-xl"></div>
        
        </div>

        {/* Background Pattern */}
        <div className="absolute -z-10 top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;