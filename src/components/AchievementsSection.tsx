
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Music, Users } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      title: "Second Prize in Inter-College Quiz Competition",
      icon: <Award className="w-6 h-6" />,
      color: "bg-yellow-500"
    },
    {
      title: "First Prize in Inter-College Cricket League",
      icon: <Trophy className="w-6 h-6" />,
      color: "bg-orange-500"
    }
  ];

  const hobbies = [
    { name: "Cooking", icon: <Users className="w-5 h-5" /> },
    { name: "Listening to Music", icon: <Music className="w-5 h-5" /> }
  ];

  const languages = ["English", "Hindi", "Kannada", "Telugu"];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Achievements */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover-scale animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${achievement.color} rounded-lg flex items-center justify-center text-white`}>
                        {achievement.icon}
                      </div>
                      <p className="text-sm font-medium text-gray-700">{achievement.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Hobbies</h3>
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover-scale">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                        {hobby.icon}
                      </div>
                      <span className="text-gray-700">{hobby.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Languages */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Languages</h3>
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover-scale">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((language, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 px-3 py-2 rounded-lg text-center text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-colors"
                    >
                      {language}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
