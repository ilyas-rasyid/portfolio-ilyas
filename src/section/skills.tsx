const Skills = () => {
  const expertise = [
    {
      title: "UI/UX Design",
      desc: "Kemampuan Teknis (Technical Skills)",
      skills: [
        "Figma: High-Fidelity Design, Prototyping, Wireframing, Visual Hierarchy",
        "UX Research & Logic: User Flow, Information Architecture, Flowchart SOP, Business Model Canvas (BMC)",
        "Frontend Understanding: Tailwind CSS, JavaScript, Next.js, HTML/CSS",
        "AI-Driven Design: Python & Computer Vision (YOLO/OpenCV) untuk antarmuka berbasis AI",
        "Tools: Git, GitHub, VS Code, Google Colab, Figma, Wireframe"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Web Development",
      desc: "Kemampuan Teknis (Technical Skills)",
      skills: [
        "Frontend: HTML, CSS, JavaScript, React, Next.js, Tailwind CSS",
        "Backend: Laravel, PHP, SQL",
        "Version Control: Git & GitHub",
        "Component-based Architecture & Best Practices",
        "Tools: VS Code, Google Colab"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "AI & Computer Vision",
      desc: "Kemampuan Teknis (Technical Skills)",
      skills: [
        "Python: NumPy, OpenCV, TensorFlow, PyTorch",
        "Image Processing & Object Detection",
        "Model Training & Data Annotation",
        "YOLO & OpenCV for Computer Vision Tasks",
        "Tools: Git, GitHub, VS Code, Google Colab"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Analytics",
      desc: "Kemampuan Analitik (Analytical Skills)",
      skills: [
        "Data Analysis & Visualization",
        "Google Analytics & Tracking Setup",
        "Conversion Funnel Optimization",
        "Performance Metrics & Reporting",
        "User Behavior & Data Insights"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-2 sm:space-y-4 animate-fade-in">
          <span className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm">Skills & Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">My Expertise</h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto px-4">
            Technical expertise across design, development, AI, and analytics with deep hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {expertise.map((item, idx) => (
            <div key={idx} className="skills-card animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
              {/* Header Card */}
              <div className="flex justify-center items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 sm:space-y-4 flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-center text-xs sm:text-sm">
                  {item.desc}
                </p>
                
                {/* Divider */}
                <div className="h-[1px] bg-gray-100 w-full my-4"></div>

                {/* Skills List */}
                <ul className="space-y-2 sm:space-y-3">
                  {item.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="skills-list-item text-xs sm:text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;