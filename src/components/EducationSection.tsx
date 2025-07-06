
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      institution: "Sambhram Institute of Technology",
      degree: "Bachelor of Technology in Computer Science Engineering",
      year: "2020-2024",
      board: "Visvesvaraya Technological University",
      grade: "CGPA: 7.08",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      institution: "Hiremallur Ishwaran Pu Sci College, Dharwad",
      degree: "Pre-University Education",
      year: "2020",
      board: "Department Of Pre-University Education, Karnataka",
      grade: "Percentage: 62.66%",
      icon: <Award className="w-6 h-6" />
    },
    {
      institution: "Government High School",
      degree: "Secondary Education",
      year: "2018",
      board: "Karnataka State Examination and Assessment Board",
      grade: "Percentage: 73.66%",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <p className="text-xl text-gray-600">My academic journey and achievements</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover-scale animate-scale-in group border-l-4 border-l-blue-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-200 transition-colors">
                    {edu.icon}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{edu.institution}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{edu.degree}</p>
                <p className="text-xs text-gray-500 mb-2">{edu.board}</p>
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {edu.grade}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
