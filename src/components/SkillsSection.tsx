
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Wrench, Monitor, Users, Database } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "SQL", "JavaScript"],
      color: "bg-blue-500"
    },
    {
      title: "Frontend Technologies",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      color: "bg-green-500"
    },
    {
      title: "Backend & Frameworks",
      icon: <Database className="w-6 h-6" />,
      skills: ["Spring Boot", "J2EE", "Servlets", "JSP", "JDBC", "REST APIs"],
      color: "bg-purple-500"
    },
    {
      title: "Testing & Automation",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Selenium WebDriver", "Cucumber (BDD)", "API Testing", "Automation Testing", "POM"],
      color: "bg-red-500"
    },
    {
      title: "Tools & IDEs",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Eclipse", "VS Code", "Git", "GitHub", "MySQL Workbench", "Postman"],
      color: "bg-indigo-500"
    },
    {
      title: "Database & Methodologies",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "MongoDB", "MVC", "Agile", "SDLC"],
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Technologies and tools I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover-scale animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-default"
                    >
                      {skill}
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

export default SkillsSection;
