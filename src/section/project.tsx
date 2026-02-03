import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const titleRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const buttonRef = useScrollReveal();

  // Show 4 featured projects only (one per category for variety)
  const projectData = [
    {
      id: 1,
      title: 'Redesigning a B2B Procurement Platform',
      desc: 'Enhancing the user experience for enterprise buyers by streamlining the ordering process.',
      category: 'UI/UX Design',
      image: new URL('../assets/projects/uix-design/companies.png', import.meta.url).href,
      buttons: [
        { label: 'View Project', url: '#' },
        { label: 'View Interactive', url: '#' }
      ]
    },
    {
      id: 5,
      title: 'Hsertif Certificate Generator',
      desc: 'A lightweight service to generate printable certificates.',
      category: 'Web Development',
      image: new URL('../assets/projects/web-developer/hsertif.jpeg', import.meta.url).href,
      buttons: [
        { label: 'View', url: '#' }
      ]
    },
    {
      id: 7,
      title: 'Strawberry Detection Model',
      desc: 'Computer vision pipeline to detect defects on strawberries.',
      category: 'AI',
      image: new URL('../assets/projects/AI/detection-strawberry.jpeg', import.meta.url).href,
      buttons: [
        { label: 'View', url: '#' }
      ]
    },
    {
      id: 11,
      title: 'Sales Funnel Analytics',
      desc: 'Tracking and visualizing conversion funnels for product teams.',
      category: 'Analytics',
      image: '',
      buttons: [
        { label: 'View', url: '#' }
      ]
    }
  ];

  return (
    <section id="project" className="py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Title Section */}
        <div ref={titleRef} className="scroll-reveal text-center mb-8 sm:mb-12 space-y-2 sm:space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Selected Work</h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto px-4">
            A closer look at my process in solving real-world design challenges.
          </p>
        </div>

        {/* Projects Grid - Featured (4 only) */}
        <div ref={projectsRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12">
          {projectData.map((project, idx) => (
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
                <div className="flex items-center gap-2">
                  <span className="px-2.5 sm:px-3 py-1 bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                
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
                          : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
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

        {/* View More Button */}
        <div ref={buttonRef} className="scroll-reveal text-center">
          <Link to="/full-projects" className="inline-block">
            <button className="btn-filled rounded-lg sm:rounded-xl py-2.5 sm:py-3 px-6 sm:px-8 hover:opacity-90 transition-opacity text-sm sm:text-base font-medium">
              View More Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;