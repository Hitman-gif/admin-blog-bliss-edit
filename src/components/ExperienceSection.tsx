
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: "Angodigital Technologies Pvt. Ltd",
      period: "Dec 2024 – Present",
      role: "Automation Test Engineer",
      description: "Building and maintaining automation test frameworks using Selenium and Cucumber in an Agile environment.",
      achievements: [
        "Built and maintained automation test frameworks using Selenium and Cucumber",
        "Tested REST APIs and reported functional and UI defects in Agile environment",
        "Collaborated with developers and product team for integration-level validations"
      ]
    },
    {
      company: "Global Quest Technologies",
      period: "Jun 2024 – Dec 2024",
      role: "Java Full Stack Intern",
      description: "Developed Java Spring Boot applications with comprehensive full-stack implementation.",
      achievements: [
        "Developed Java Spring Boot applications with REST API support",
        "Implemented MySQL-based persistence and user authentication modules",
        "Participated in sprint reviews and integration testing"
      ]
    },
    {
      company: "Aqmenz Automation Pvt. Ltd",
      period: "Jul 2023 – Sep 2023",
      role: "Full Stack Web Development Intern",
      description: "Gained comprehensive experience in full-stack web development with focus on responsive design.",
      achievements: [
        "Designed responsive UI using HTML, CSS, JavaScript",
        "Implemented backend services in Java with MySQL",
        "Full-stack web application development"
      ]
    },
    {
      company: "Nano Robotics & Embed Technologies",
      period: "Aug 2023 – Sep 2023",
      role: "Embedded Systems Intern",
      description: "Explored hardware-software integration and embedded systems fundamentals.",
      achievements: [
        "Gained experience in hardware-software integration",
        "Learned basic embedded systems concepts",
        "Worked on IoT and automation projects"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600">My journey in software development and testing</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-slide-in-right group border-l-4 border-l-indigo-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.company}</CardTitle>
                      <p className="text-indigo-600 font-medium">{exp.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
