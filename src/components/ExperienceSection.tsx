
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: "Nano Robotics and Embed Technologies",
      period: "Aug 2023 - Sept 2023",
      role: "Machine Learning Intern",
      description: "Training and focus priority on learning & developing new skills and gaining deeper understanding of concepts through hands-on applications.",
      achievements: [
        "Contributed to impactful projects",
        "Gained hands-on experience in Machine Learning",
        "Worked with Python libraries like NumPy, SciPy, and Scikit-learn",
        "Implemented K-means Clustering in Python"
      ]
    },
    {
      company: "Aqmenz Automation Pvt. Ltd",
      period: "Jul 2023 - Sept 2023",
      role: "Full Stack Development Intern",
      description: "Acquired valuable practical skills in data analysis, model implementation, and web application development.",
      achievements: [
        "Full Stack Web Development",
        "End-to-end Application Development",
        "Data analysis and model implementation"
      ]
    },
    {
      company: "Global Quest Technologies",
      period: "Jul 2024",
      role: "Java and Python Developer",
      description: "Java and Python Full Stack Web Development",
      achievements: [
        "Full Stack Web Development with Java",
        "Python application development",
        "Backend and frontend integration"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <p className="text-xl text-gray-600">My professional journey and internships</p>
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
