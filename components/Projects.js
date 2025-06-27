function Projects() {
  try {
    const projects = [
      {
        id: 1,
        title: 'MeetingMate - Auto MoM Generator',
        description: 'iOS/Web application that automatically generates Meeting Minutes using Spring framework and IBM Watson NLP for intelligent content processing.',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
        technologies: ['Spring', 'IBM Watson NLP', 'iOS', 'Natural Language Processing'],
        liveUrl: 'https://bit.ly/MoM',
        githubUrl: '#'
      },
      {
        id: 2,
        title: 'HouseVR - Real Estate Simulation',
        description: 'Immersive virtual reality real estate platform built with MEAN stack and Unity for 3D property visualization and virtual tours.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
        technologies: ['MEAN Stack', 'Unity', 'VR', 'MongoDB', 'Angular'],
        liveUrl: 'https://bit.ly/HouseVR',
        githubUrl: '#'
      },
      {
        id: 3,
        title: 'Dropbox Clone - Cloud File Sharing',
        description: 'Scalable cloud file sharing platform with secure file storage, real-time synchronization, and collaborative features using Java and AWS.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
        technologies: ['Java', 'AWS S3', 'NoSQL', 'REST APIs', 'Cloud Storage'],
        liveUrl: 'https://bit.ly/CloudFileSharing',
        githubUrl: '#'
      },
      {
        id: 4,
        title: 'AutoAttend - Smart Attendance System',
        description: 'IoT-based smart attendance tracking system using Android, Bluetooth Low Energy, Node.js backend, and Raspberry Pi hardware integration.',
        image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=300&fit=crop',
        technologies: ['Android', 'BLE', 'Node.js', 'Raspberry Pi', 'IoT'],
        liveUrl: '#',
        githubUrl: '#'
      }
    ];

    return (
      <section id="projects" className="section-padding bg-gray-50" data-name="projects" data-file="components/Projects.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a href={project.liveUrl} className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      <div className="icon-external-link text-sm mr-1"></div>
                      Live Demo
                    </a>
                    <a href={project.githubUrl} className="flex items-center text-gray-600 hover:text-gray-700 font-medium">
                      <div className="icon-github text-sm mr-1"></div>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}