import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FullProjects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  const titleRef = useScrollReveal();
  const filtersRef = useScrollReveal();
  const projectsRef = useScrollReveal();

  const categories = ['All', 'UI/UX Design', 'Web Development', 'Analytics', 'AI'];

  const projectData = [
    // UI/UX Design
    {
      id: 1,
      title: 'Mobile Datatable Optimization',
      desc: 'Transforming a complex desktop datatable into an intuitive mobile-first experience.',
      category: 'UI/UX Design',
      image: new URL('../assets/projects/uix-design/companies.png', import.meta.url).href,
      buttons: [
        { label: 'View Project', url: 'https://www.figma.com/design/vHEWpm7XwpfDsgJzB2C1vM/PT-Ambisius-Lab_Muhammad-Ilyas-Rasyid?node-id=1-2&p=f&t=k1ln6mSIrVWzsQM3-0' },
        { label: 'View Interactive', url: 'https://www.figma.com/proto/vHEWpm7XwpfDsgJzB2C1vM/PT-Ambisius-Lab_Muhammad-Ilyas-Rasyid?node-id=1-2&p=f&t=k1ln6mSIrVWzsQM3-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=1%3A7' }
      ]
    },
    {
      id: 2,
      title: 'E-Commerce Dashboard Optimization',
      desc: 'An intuitive dashboard for sellers to manage inventory and sales analytics in real-time.',
      category: 'UI/UX Design',
      image: new URL('../assets/projects/uix-design/Dashboard-Desktop.png', import.meta.url).href,
      buttons: [
        { label: 'View Project', url: 'https://www.figma.com/design/0Lg8Rsul4glSCiPpEmMXf1/properties?node-id=0-1&p=f&t=1OmQG95lHtaVcQEF-0' },
        { label: 'View Interactive', url: 'https://www.figma.com/proto/0Lg8Rsul4glSCiPpEmMXf1/properties?node-id=0-1&p=f&t=1OmQG95lHtaVcQEF-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13%3A972' }
      ]
    },
    {
      id: 3,
      title: 'Costku - Expense Flow',
      desc: 'A payment/expense flow crafted.',
      category: 'UI/UX Design',
      image: new URL('../assets/projects/uix-design/costku.png', import.meta.url).href,
      buttons: [
        { label: 'View Project', url: 'https://www.figma.com/design/gh8LI53HE7is4s69kluQL4/CostKu_Projek?node-id=0-1&p=f&t=1y47zbzIlkTlvDAs-0' },
        { label: 'View Interactive', url: 'https://www.figma.com/proto/gh8LI53HE7is4s69kluQL4/CostKu_Projek?node-id=0-44&p=f&t=1y47zbzIlkTlvDAs-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A44' }
      ]
    },
    {
      id: 4,
      title: 'GPlants Product Page',
      desc: 'Product detail and onboarding experience for a plant retail app.',
      category: 'UI/UX Design',
      image: new URL('../assets/projects/uix-design/gplants.png', import.meta.url).href,
      buttons: [
        { label: 'View Project', url: 'https://www.figma.com/design/8SpEU9VoLa3H2CGJ6LDij4/gplants?node-id=0-1&p=f&t=qngyvjCVMBWfRWK5-0' },
        { label: 'View Interactive', url: 'https://www.figma.com/proto/8SpEU9VoLa3H2CGJ6LDij4/gplants?node-id=0-1&p=f&t=qngyvjCVMBWfRWK5-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1' }
      ]
    },

    // Web Development
    {
      id: 5,
      title: 'Hsertif Certificate Generator',
      desc: 'A simple tool to create certificates instantly.',
      category: 'Web Development',
      image: new URL('../assets/projects/web-developer/hsertif.jpeg', import.meta.url).href,
      buttons: [
        { label: 'View', url: 'https://hsertif.vercel.app/' }
      ]
    },
    {
      id: 6,
      title: 'Rotenbi Portfolio Site',
      desc: 'A small business site with static generation and responsive layout.',
      category: 'Web Development',
      image: new URL('../assets/projects/web-developer/rotenbi.jpeg', import.meta.url).href,
      buttons: [
        { label: 'View', url: 'https://rotenbi.com/' }
      ]
    },

    // AI
    {
      id: 7,
      title: 'Strawberry Detection Model',
      desc: 'A computer vision pipeline for detecting strawberry ripeness.',
      category: 'AI',
      image: new URL('../assets/projects/AI/detection-strawberry.jpeg', import.meta.url).href,
      buttons: [
        { label: 'View', url: 'https://huggingface.co/spaces/rasyid-ilyas/stroberi-web' }
      ]
    },
    {
      id: 8,
      title: 'Platform Detection PoC',
      desc: 'A lightweight proof of concept for detecting vehicle number plates',
      category: 'AI',
      image: new URL('../assets/projects/AI/detection-plat.jpeg', import.meta.url).href,
      buttons: [
        { label: 'View', url: 'https://colab.research.google.com/drive/1TAPOLmDOC_NLfd8HVXv_x3Y9bwQjpapk?authuser=6' }
      ]
    },
    {
      id: 9,
      title: 'Social Sentiment Analyzer',
      desc: 'NLP pipeline extracting sentiment signals from social media.',
      category: 'AI',
      image: new URL('../assets/projects/AI/sentiment-socialmedia.jpeg', import.meta.url).href,
      buttons: [
        { label: 'View', url: 'https://colab.research.google.com/drive/1BkiFYfzD76kaA5tsFgPUfzegh8K0qDe1' }
      ]
    },
    {
      id: 10,
      title: 'Organic and Inorganic Waste Detector',
      desc: 'to detect organic and inorganic waste in the surrounding environment.',
      category: 'AI',
      image: new URL('../assets/projects/AI/trash.jpeg', import.meta.url).href,
      buttons: [
        { label: 'View', url: 'https://colab.research.google.com/drive/18mvSfGuBa4dq6VXObABVao5uQYuc9AxT?authuser=2' }
      ]
    },

    // Analytics
    {
      id: 11,
      title: 'SEO Analysis',
      desc: 'Comprehensive analysis of website SEO performance, keywords, and optimization opportunities.',
      category: 'Analytics',
      image: new URL('../assets/projects/analytics/SEO.png', import.meta.url).href,
      buttons: []
    },
    {
      id: 12,
      title: 'Google Analytics Dashboard',
      desc: 'Real-time analytics dashboard tracking user behavior and traffic sources.',
      category: 'Analytics',
      image: new URL('../assets/projects/analytics/Google-Analytics.png', import.meta.url).href,
      buttons: []
    },
    {
      id: 13,
      title: 'Meta Business Analytics',
      desc: 'Facebook/Instagram ad performance tracking and audience insights.',
      category: 'Analytics',
      image: new URL('../assets/projects/analytics/Meta-Business.png', import.meta.url).href,
      buttons: []
    }
  ];

  // Filter projects
  const filtered = useMemo(() => {
    return activeFilter === 'All'
      ? projectData
      : projectData.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  // Paginate
  const totalPages = Math.ceil(filtered.length / projectsPerPage);
  const startIdx = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filtered.slice(startIdx, startIdx + projectsPerPage);

  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of project grid
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  return (
    <section id="project" className="py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Title Section */}
        <div ref={titleRef} className="scroll-reveal text-center mb-8 sm:mb-12 space-y-2 sm:space-y-4 animate-fade-in">
          <button
            onClick={() => navigate('/')}
            className="inline-block mt-12 md:mt-0 mb-2 sm:mb-4 text-primary hover:text-blue-800 transition text-sm sm:text-base font-medium"
          >
            ← Back to Home
          </button>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">All Projects</h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto px-4">
            Complete showcase of my work across design, development, and AI.
          </p>
        </div>

        {/* Filter Tabs */}
        <div ref={filtersRef} className="scroll-reveal flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-3 sm:px-4 md:px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                activeFilter === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12">
          {paginatedProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image Area */}
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100 relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                    <span className="text-gray-400 text-sm">Image coming soon</span>
                  </div>
                )}
              </div>

              {/* Text Content Area */}
              <div className="p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed line-clamp-2">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {project.buttons.map((btn, btnIdx) => (
                    <a
                      key={btnIdx}
                      href={btn.url}
                      className="flex-1 inline-block"
                    >
                      <button className={`w-full rounded-lg py-2 sm:py-2.5 px-3 sm:px-4 font-medium transition-all duration-300 text-sm sm:text-base ${
                        btnIdx === 0
                          ? 'btn-filled hover:opacity-90'
                          : 'border border-primary text-primary hover:bg-blue-50'
                      }`}>
                        {btn.label}
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 items-center mb-6 sm:mb-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition text-sm sm:text-base ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-9 sm:w-10 h-9 sm:h-10 rounded-lg font-medium transition text-sm sm:text-base ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition text-sm sm:text-base ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Next →
            </button>
          </div>
        )}

        {/* Result Count */}
        <div className="text-center text-gray-500 text-xs sm:text-sm">
          Showing {startIdx + 1}-{Math.min(startIdx + projectsPerPage, filtered.length)} of{' '}
          {filtered.length} projects
        </div>
      </div>
    </section>
  );
};

export default FullProjects;
