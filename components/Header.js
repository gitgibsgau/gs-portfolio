function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    };

    return (
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50" data-name="header" data-file="components/Header.js">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">Portfolio</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="icon-menu text-xl"></div>
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
              <div className="flex flex-col p-4 space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 text-left">
                  About
                </button>
                <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600 text-left">
                  Experience
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 text-left">
                  Projects
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 text-left">
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}