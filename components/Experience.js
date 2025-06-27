function Experience() {
  try {
    const experiences = [
      {
        id: 1,
        company: 'Earnest LLC',
        location: 'San Francisco, CA',
        positions: [
          {
            title: 'Staff Software Engineer',
            period: '2023 - Present',
            current: true
          },
          {
            title: 'Senior Software Engineer',
            period: '2019 - 2023',
            current: false
          }
        ],
        highlights: [
          'Developed AI-enhanced features utilizing ChatGPT agents and Sonnet 3.7 agent.',
          'Collaborated with cross-functional teams to establish project requirements and specifications.',
          'Researched emerging technologies to pinpoint innovation opportunities in products.',
          'Worked with developers during development phase to ensure timely project completion within budget.',
          'Led migration to GraphQL and designed modular React UI.',
          'Integrated AWS Cognito with payment, loan, and user microservices.',
          'Increased auto-approval rate by 40% and enhanced support efficiency by 30%.'
        ]
      },
      {
        id: 2,
        company: 'Western Governors University Labs (CALS)',
        location: 'Remote',
        positions: [
          {
            title: 'Senior Software Engineer - Full Stack',
            period: 'Aug 2018 - Nov 2019',
            current: false
          }
        ],
        highlights: [
          'Developed scalable software applications for online learning platforms.',
          'Created dashboards utilizing React and react-google-charts for enhanced data visualization.',
          'Built AWS Lambda microservices employing Serverless framework to increase functionality.',
          'Boosted throughput by 40% through implementation of reusable modules.'
        ]
      },
      {
        id: 3,
        company: 'Goldman Sachs (via ParallelHR)',
        location: 'Salt Lake City, UT',
        positions: [
          {
            title: 'Technology Specialist',
            period: 'Jan 2018 - Aug 2018',
            current: false
          }
        ],
        highlights: [
          'Achieved a 53% reduction in AppBank technical issues through targeted solutions.',
          'Developed diagnostic tools utilizing Java, Python, and Slang for test-driven development.',
          'Collaborated with cross-functional teams to resolve technical challenges and enhance workflows.',
          'Authored comprehensive documentation outlining procedures and processes for technology support.'
        ]
      },
      {
        id: 4,
        company: 'AT&T (via Apex Systems)',
        location: 'Durham, NC',
        positions: [
          {
            title: 'Full Stack Web Developer',
            period: 'Nov 2017 - Jan 2018',
            current: false
          }
        ],
        highlights: [
          'Developed responsive web applications with JavaScript, HTML, and CSS frameworks.',
          'Maintained Ember.js and jQueryUI applications for global operations.',
          'Assisted in troubleshooting and resolving technical issues for end-users.',
          'Designed RESTful APIs for seamless backend integration'
        ]
      },
      {
        id: 5,
        company: 'NSE.iT Ltd',
        location: 'Mumbai, India',
        positions: [
          {
            title: 'Systems Analyst - Java Developer',
            period: 'Aug 2013 - Jul 2015',
            current: false
          }
        ],
        highlights: [
          'Developed financial tools with Java EE, Spring, and Oracle backend',
          'Created and maintained RESTful APIs with full SDLC lifecycle responsibility'
        ]
      }
    ];

    return (
      <section id="experience" className="section-padding bg-gray-50" data-name="experience" data-file="components/Experience.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              10+ years of progressive responsibility building scalable systems and leading engineering teams
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="card p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.company}</h3>
                    <p className="text-gray-600 mb-4">{exp.location}</p>
                  </div>
                  <div className="text-right">
                    {exp.positions.map((pos, index) => (
                      <div key={index} className="mb-2">
                        <div className="font-semibold text-gray-900">{pos.title}</div>
                        <div className="text-gray-600 text-sm">
                          {pos.period}
                          {pos.current && <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Current</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="icon-check-circle text-blue-600 text-sm mt-1 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience component error:', error);
    return null;
  }
}