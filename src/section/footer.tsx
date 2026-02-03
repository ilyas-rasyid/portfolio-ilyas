import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const menus = ['Home', 'About', 'Skills', 'Work', 'Contact'];
  
  const contentRef = useScrollReveal();

  const socialLinks = [
    {
      name: 'YouTube',
      url: 'http://www.youtube.com/@muhammadilyasrasyid5817',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ilyasrasyid._',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ilyas-rasyid-991a23384/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.833 0-9.749h3.554v1.383c.43-.664 1.199-1.608 2.928-1.608 2.136 0 3.745 1.393 3.745 4.385v5.589zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.708 0-.951.771-1.71 1.954-1.71 1.182 0 1.915.759 1.915 1.71 0 .95-.733 1.708-1.954 1.708zm1.581 11.597H3.635V9.558h3.283v10.894zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      )
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@ilyasrasyid._?_r=1&_t=ZS-93bhST8o6oE',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 11-4.33-2.06A2.41 2.41 0 018.26 9.26c0 .26-.05.52-.15.75H4.49a5.88 5.88 0 105.87 5.87V9.85a7.6 7.6 0 004.72 1.72v-3.88a4.85 4.85 0 01-.88-.05z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 px-4 sm:px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div ref={contentRef} className="scroll-reveal flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 mb-12">

          {/* Logo / Name */}
          <div className="flex flex-col items-center md:items-start gap-2 animate-fade-in">
            <span className="text-2xl sm:text-3xl font-bold text-primary tracking-tighter">Ilyas Rasyid</span>
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              UI/UX Designer & Web Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
            {menus.map((menu) => (
              <a
                key={menu}
                href={`#${menu.toLowerCase()}`}
                className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {menu}
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-sosmed w-10 h-10 sm:w-11 sm:h-11 hover:scale-110 transition-transform duration-300"
                aria-label={social.name}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 sm:pt-10 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {currentYear} Ilyas Rasyid. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-gray-600 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-gray-600 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;