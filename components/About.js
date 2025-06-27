function About() {
  try {
    const skills = [
      'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Node.js', 'Python', 'Java',
      'AWS Lambda', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'GraphQL',
      'ChatGPT APIs', 'Sonnet', 'Redux', 'Express.js', 'Microservices'
    ];

    return (
      <section id="about" className="section-padding bg-white" data-name="about" data-file="components/About.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm a passionate developer with a love for creating beautiful and functional digital experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 10 years of progressive responsibility in software engineering, I specialize in 
                building scalable, user-focused, and AI-enhanced web applications. Currently serving as 
                Staff Software Engineer at Earnest LLC, where I've been promoted twice for driving 
                architecture modernization and leading cross-functional teams.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I have extensive experience with cloud-native systems, AI integration using ChatGPT 
                agents and Sonnet, and secure enterprise-grade platform development. My expertise spans 
                full-stack development, team leadership, and modern DevOps practices with AWS.
              </p>
              <button className="btn btn-primary">
                Download Resume
              </button>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg px-4 py-2 text-center text-gray-700 font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}