
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const PortfolioHero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8 animate-scale-in">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-xl hover:scale-105 transition-transform duration-300">
            S
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-slide-in-right">
            SHIVASHARANAPPA
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Computer Science Engineer & Full Stack Developer
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
            href="https://www.linkedin.com/in/shivasharan-sajjan-743b62279/" 
            className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover-scale"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">LinkedIn</span>
          </a>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-3xl mx-auto animate-slide-in-right">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Objective</h2>
          <p className="text-gray-600 leading-relaxed">
            Looking forward to acquiring valuable job experience, making impact on assignments. 
            Aiming to utilize my technical know-how and innovative problem-solving abilities in a 
            dynamic environment. To reach my goal of securing a leadership role, I plan to better 
            understand myself in the field with complete dedication and broaden my understanding 
            by putting in effort and learning new technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
