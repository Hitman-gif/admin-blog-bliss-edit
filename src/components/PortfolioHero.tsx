
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const PortfolioHero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8 animate-scale-in">
          {/* Profile Image - Replace the src with your image URL */}
          <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Shivasharanappa Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-slide-in-right">
            SHIVASHARANAPPA
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Java Full Stack Developer
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a 
            href="mailto:shivasharanbsajjan@gmail.com" 
            className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover-scale"
          >
            <Mail className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">shivasharanbsajjan@gmail.com</span>
          </a>
          <a 
            href="tel:+918660835220" 
            className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover-scale"
          >
            <Phone className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">+91-8660835220</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover-scale"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">LinkedIn</span>
          </a>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-3xl mx-auto animate-slide-in-right">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Summary</h2>
          <p className="text-gray-600 leading-relaxed">
            Results-driven Java Full Stack Developer with real-world experience in building scalable web applications 
            and automation frameworks. Proficient in Java, Spring Boot, REST APIs, and full-stack technologies. 
            Knowledgeable in Agile methodology, MVC architecture, and DevOps fundamentals. Combines strong backend 
            logic with responsive frontend development and test automation skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
