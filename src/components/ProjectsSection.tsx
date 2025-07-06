
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Gamepad2, Heart } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Wholesale Database Management",
      icon: <Database className="w-6 h-6" />,
      description: "A comprehensive database management system for wholesale operations with HTML frontend and SQL backend.",
      details: "Wholesale system facilitates buying stocks from suppliers and selling to customers, acting as middleware. The management system ensures proper dealing and security of shop data.",
      technologies: ["HTML", "SQL", "Database Management"],
      color: "bg-blue-500"
    },
    {
      title: "Helicopter Game",
      icon: <Gamepad2 className="w-6 h-6" />,
      description: "An interactive helicopter game developed using C/C++ programming with computer graphics.",
      details: "Mini-project focused on developing a helicopter game using computer graphics concepts and OpenGL API with real-time rendering algorithms including ray tracing for photorealistic rendering.",
      technologies: ["C", "C++", "OpenGL", "Computer Graphics", "Real-time Rendering"],
      color: "bg-green-500"
    },
    {
      title: "Multiple Disease Detection Prediction",
      icon: <Heart className="w-6 h-6" />,
      description: "Web-based disease prediction system that identifies various diseases by analyzing patient symptoms.",
      details: "A comprehensive health prediction platform where users can register, input medical data, and receive disease predictions. Enables end users to predict chronic diseases based on symptoms analysis.",
      technologies: ["Web Development", "Machine Learning", "Data Analysis", "Healthcare"],
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-xl text-gray-600">Some of my notable work and achievements</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
