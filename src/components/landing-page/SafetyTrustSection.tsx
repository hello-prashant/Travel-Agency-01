import React from 'react';
import { Shield, Briefcase, Sparkles, Users } from 'lucide-react';

const SafetyTrustSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Profiles',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      hoverBg: 'group-hover:bg-blue-200'
    },
    {
      icon: Briefcase,
      title: 'Safety Check-ins',
      bgColor: 'bg-amber-100',
      iconColor: 'text-amber-900',
      hoverBg: 'group-hover:bg-amber-200'
    },
    {
      icon: Sparkles,
      title: 'AI-Based Compatibility & Moderation',
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600',
      hoverBg: 'group-hover:bg-pink-200'
    },
    {
      icon: Users,
      title: 'Emergency Assistance or "Travel Buddy" Mode',
      bgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-700',
      hoverBg: 'group-hover:bg-emerald-200'
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Safety & Trust
          </h1>
          <div className="w-32 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience travel like never before with features designed for modern explorers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-15">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center transition-transform duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`${feature.bgColor} ${feature.hoverBg} w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:rotate-6`}
                  >
                    <feature.icon
                      className={`${feature.iconColor} w-10 h-10 transition-transform duration-300 group-hover:scale-110`}
                      strokeWidth={2}
                    />
                  </div>
                </div>
                <h3 className="text-gray-800 font-semibold text-base sm:text-lg px-2">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="/Safety&Trust/safe.png"
                alt="Beautiful mountain lake with turquoise water and boats"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <p className="text-sm font-semibold text-gray-800">Explore with Confidence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyTrustSection;

