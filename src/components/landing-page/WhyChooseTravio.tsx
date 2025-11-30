"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

export default function WhyChooseTravio() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Track which card is tapped on mobile
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const cards = [
    {
      icon: Users,
      title: "Connect Authentically",
      text: "Meet verified travelers who share your interests, travel style, and destinations. Build meaningful connections before you go.",
      bg: "text-white bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700",
      tilt: "group-hover:rotate-8",
      iconColorClass: "text-white",
      titleColorClass: `
        text-black
        group-hover:bg-gradient-to-r 
        group-hover:from-blue-400 
        group-hover:to-blue-700 
        group-hover:bg-clip-text 
        group-hover:text-transparent
      `,
      cardcolorClass: "bg-linear-to-r from-sky-100 via-blue-100 to-blue-100",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Matching",
      text: "Our smart algorithm matches you with compatible travel companions based on your preferences, personality, and travel goals.",
      bg: "text-white bg-gradient-to-br from-purple-600 via-pink-500 to-pink-500",
      tilt: "group-hover:-rotate-8",
      iconColorClass: "text-white",
      titleColorClass: `
        text-black
        group-hover:bg-gradient-to-r 
        group-hover:from-purple-600 
        group-hover:to-pink-600 
        group-hover:bg-clip-text 
        group-hover:text-transparent
      `,
      cardcolorClass: "bg-linear-to-r from-purple-100 via-pink-100 to-pink-100",
    },
    {
      icon: ShieldCheck,
      title: "Travel Safely",
      text: "Verified profiles, secure messaging, and safety features ensure you can focus on the adventure, not the worries.",
      bg: "text-white bg-gradient-to-br from-green-400 via-teal-500 to-teal-700",
      tilt: "group-hover:rotate-8",
      iconColorClass: "text-white",
      titleColorClass: `
        text-black
        group-hover:bg-gradient-to-r 
        group-hover:from-teal-500 
        group-hover:to-teal-700 
        group-hover:bg-clip-text 
        group-hover:text-transparent
      `,
      cardcolorClass: "bg-linear-to-r from-green-100 via-teal-100 to-teal-100",
    },
  ];

  const handleCardClick = (index: number) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <section ref={sectionRef} className="w-full py-20 bg-white">
      {/* Title Section */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          Why Choose Travio
        </h2>

        <div
          className={`h-[5px] bg-linear-to-r from-teal-400 to-teal-900 mx-auto transition-all duration-700 ${
            visible ? "w-24 sm:w-32 md:w-100" : "w-0"
          }`}
        />
        <p className="text-black mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Experience travel like never before with features designed for modern
          explorers
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto px-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const isActive = activeCard === index;

          return (
            <div
              key={index}
              className="relative overflow-visible group p-6 sm:p-8 bg-white rounded-3xl shadow-md border transition duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => handleCardClick(index)} // toggle active on tap
            >
              {/* Background Rectangle Glow */}
              <span
                className={`absolute inset-0 ${
                  card.cardcolorClass
                } rounded-2xl opacity-0 pointer-events-none transform scale-90 transition-all duration-500 ease-out group-hover:opacity-60 group-hover:scale-100 ${
                  activeCard === index ? "opacity-60 scale-100" : ""
                } `}
              ></span>

              {/* Decorative Yellow Dot */}
              <span
                className={`absolute top-10 right-10 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full opacity-0 scale-50 translate-x-5 -translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 ${
                  isActive ? "opacity-100 scale-100" : ""
                }`}
              ></span>

              {/* Icon with Glow */}
              <div className="relative z-10 inline-flex mb-4 sm:mb-5">
                <div
                  className={`relative p-2 sm:p-3 md:p-3 rounded-xl inline-flex items-center justify-center
                    transition-all duration-500
                    group-hover:scale-110 group-hover:-translate-y-1
                    ${card.tilt} ${card.bg}
                  `}
                >
                  <span className="absolute inset-0 rounded-xl bg-white/30 blur-md opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125 z-0" />
                  <div className="relative z-20">
                    <Icon
                      className={`w-6 h-6 sm:w-8 sm:h-8 md:${card.iconColorClass}`}
                    />
                  </div>
                </div>
              </div>

              {/* Card Title */}
              <h3
                className={`text-lg sm:text-xl md:text-xl font-semibold mb-2 sm:mb-3 relative z-10${card.titleColorClass}`}
              >
                {card.title}
              </h3>

              {/* Card Text */}
              <p className="text-sm sm:text-base md:text-base text-black leading-relaxed mb-3 sm:mb-4 relative z-10">
                {card.text}
              </p>

              {/* Learn More Button */}
              <button
                className="
    mt-2 flex items-center gap-2 font-bold text-blue-600 text-sm
    opacity-0 translate-y-1
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
  "
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
