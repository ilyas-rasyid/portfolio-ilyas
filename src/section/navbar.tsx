import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const menus = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  // Track scroll untuk navbar effect dan section aktif
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active menu berdasarkan scroll position
      const sections = menus.map((menu) => {
        let sectionId = menu.toLowerCase();
        if (menu === 'Projects') sectionId = 'project';
        if (menu === 'Skills') sectionId = 'skills';
        const element = document.getElementById(sectionId);
        if (!element) return null;

        const rect = element.getBoundingClientRect();
        return {
          name: menu,
          distance: Math.abs(rect.top - 100), // 100px dari top navbar
        };
      });

      const visibleSection = sections
        .filter((s) => s !== null)
        .reduce((closest, current) => {
          if (!closest) return current;
          return current && current.distance < closest.distance
            ? current
            : closest;
        });

      if (visibleSection) {
        setActiveMenu(visibleSection.name);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Panggil sekali saat mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menutup menu mobile saat resize window ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Menutup menu mobile saat klik ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Handle klik menu
  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    setIsOpen(false);

    // Smooth scroll ke section
    let sectionId = menu.toLowerCase();
    if (menu === 'Projects') sectionId = 'project';
    if (menu === 'Skills') sectionId = 'skills';
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 sm:px-8 md:px-12 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        }`}
      >
        {/* Logo / Name */}
        <a 
          href="#home" 
          className="text-lg sm:text-xl font-bold text-primary truncate flex-shrink-0 hover:opacity-80 transition-opacity"
          onClick={() => handleMenuClick('Home')}
        >
          Ilyas Rasyid
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 lg:gap-8">
          {menus.map((menu) => (
            <button 
              key={menu} 
              onClick={() => handleMenuClick(menu)}
              className={`text-base lg:text-lg font-medium transition-all relative group whitespace-nowrap ${
                activeMenu === menu 
                  ? 'text-primary' 
                  : 'text-gray-800 hover:text-primary'
              }`}
            >
              {menu}
              <span 
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeMenu === menu ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button 
          className="md:hidden z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <svg 
            className="w-6 h-6 text-primary" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Sidebar (Slide-in dari Kanan) */}
      <div 
        className={`
          fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl z-40 p-6 overflow-y-auto
          transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Mobile Menu Header
        <div className="pt-4 pb-6 border-b border-gray-200">
          <div className="text-xl font-bold text-primary">Ilyas Rasyid</div>
          <div className="text-sm text-gray-500 mt-1">Portfolio</div>
        </div> */}
        <div className='mt-20'></div>
        {/* Mobile Menu Items */}
        <div className="flex flex-col gap-2 mt-6">
          {menus.map((menu) => (
            <button
              key={menu}
              onClick={() => handleMenuClick(menu)}
              className={`
                text-left px-4 py-3 rounded-lg transition-all
                ${activeMenu === menu 
                  ? 'bg-primary text-white' 
                  : 'text-gray-800 hover:bg-gray-100'
                }
              `}
            >
              <span className="text-lg font-medium">{menu}</span>
            </button>
          ))}
        </div>


      </div>

      {/* Overlay (Latar Belakang Gelap saat Menu Buka) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;