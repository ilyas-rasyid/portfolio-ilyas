import { useScrollReveal } from '../hooks/useScrollReveal';
import aboutImage from '../assets/about.png';

const About = () => {
  const sectionRef = useScrollReveal();
  const cardsRef = useScrollReveal();
  
  const cards = [
    {
      number: "1",
      title: "User-Driven Decisions",
      desc: "Design based on user behavior, not assumptions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Build-Ready Design",
      desc: "Layouts that developers can implement without friction.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Growth-Oriented Thinking",
      desc: "SEO-aware design that supports traffic and conversion.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Content: Illustration & Main Text */}
        <div ref={sectionRef} className="scroll-reveal flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          
          {/* Left: Illustration Placeholder (Sesuaikan dengan gambar kamu) */}
          <div className="flex-1 relative group">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-full blur-3xl group-hover:bg-blue-200/50 transition-colors"></div>
            <img 
              src={aboutImage} 
              alt="Design Process Illustration" 
              className="relative w-full h-auto drop-shadow-2xl rounded-2xl"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 space-y-6">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">About Me</span>
            <h2 className="text-[40px] font-bold leading-tight text-gray-900">
              Designing experiences that convert,scale, and last.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm a product developer focused on digital products. I design, build, and analyze
              digital experiences — combining product thinking, visual design, and data analytics
              to create user-centered solutions that drive growth.
            </p>
          </div>
        </div>

        {/* Bottom: 3 Cards Row */}
        <div ref={cardsRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="about-card">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="icon-wrapper bg-blue-100 text-blue-600">
                    {card.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  );
};

export default About;