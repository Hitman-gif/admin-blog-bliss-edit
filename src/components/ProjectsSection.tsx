
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Heart } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Wholesale Database Management System",
      icon: <Database className="w-6 h-6" />,
      description: "A comprehensive database management system for wholesale operations built with Java J2EE and MySQL.",
      details: "Built using Java J2EE (MVC), MySQL, HTML, CSS, Bootstrap. Managed supplier/customer modules and handled secure inventory processing with complete CRUD operations.",
      technologies: ["Java J2EE", "MySQL", "HTML", "CSS", "Bootstrap", "MVC Architecture"],
      color: "bg-blue-500"
    },
    {
      title: "Multiple Disease Detection (Major Project)",
      icon: <Heart className="w-6 h-6" />,
      description: "Web application to predict diseases based on symptoms entered by users using machine learning.",
      details: "Full-stack implementation with Spring Boot and MySQL database. Web app to predict diseases based on symptoms entered by users with comprehensive user management and data analysis.",
      technologies: ["Spring Boot", "MySQL", "Machine Learning", "Web Development", "Data Analysis"],
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-xl text-gray-600">Key projects showcasing my technical expertise</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover-scale animate-scale-in group h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {project.icon}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4 flex-grow">{project.details}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover-scale animate-scale-in group h-full border-2 border-dashed border-gray-300 bg-gray-50" style={{ animationDelay: '0.4s' }}>
            <CardContent className="flex flex-col items-center justify-center h-full text-center p-8">
              <Code className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">More Projects Coming Soon</h3>
              <p className="text-sm text-gray-500">GitHub links will be added once projects are documented and deployed.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
