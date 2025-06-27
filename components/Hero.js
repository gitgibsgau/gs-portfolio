function Hero() {
  try {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <img 
              src="https://app.trickle.so/storage/public/images/usr_11fcb17208000001/0e88f9a7-e0f8-44c3-abef-595453db746d.jpeg"
              alt="Gaurav Shinde"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Gaurav Shinde</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Staff Software Engineer with 10+ years building scalable, AI-driven solutions and leading cross-functional teams
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-outline"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://github.com/gitgibsgau" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <div className="icon-github text-2xl"></div>
            </a>
            <a href="https://www.linkedin.com/in/gauravkshinde/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <div className="icon-linkedin text-2xl"></div>
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}