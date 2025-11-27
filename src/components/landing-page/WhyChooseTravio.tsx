"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Sparkles, ShieldCheck } from "lucide-react";

export default function WhyChooseTravio() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <div ref={sectionRef} className="w-full py-20 bg-white">
      {/* Title Section */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-black mb-4">
          Why Choose Travio
        </h2>

        {/* Underline animation */}
        <div
          className={`h-[3px] w-0 bg-blue-600 mx-auto transition-all duration-700 ${
            visible ? "w-48" : "w-0"
          }`}
        />
        <p className="text-black mt-4">
          Experience travel like never before with features designed for modern
          explorers
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {/* CARD 1 */}
        <div className="p-8 bg-white rounded-2xl shadow-md border transition duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-xl inline-flex mb-5">
            <Users size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-black">
            Connect Authentically
          </h3>
          <p className="text-black leading-relaxed">
            Meet verified travelers who share your interests, travel style, and
            destinations. Build meaningful connections before you go.
          </p>
          <button className="mt-4 text-blue-600 font-semibold hover:underline">
            Learn more
          </button>
        </div>

        {/* CARD 2 */}
        <div className="p-8 bg-white rounded-2xl shadow-md border transition duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="bg-pink-100 text-pink-600 p-3 rounded-xl inline-flex mb-5">
            <Sparkles size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-black">
            AI-Powered Matching
          </h3>
          <p className="text-black leading-relaxed">
            Our smart algorithm matches you with compatible travel companions
            based on your preferences, personality, and travel goals.
          </p>

          <button className="mt-4 text-blue-600 font-semibold hover:underline">
            Learn more
          </button>
        </div>

        {/* CARD 3 */}
        <div className="p-8 bg-white rounded-2xl shadow-md border transition duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="bg-green-100 text-green-600 p-3 rounded-xl inline-flex mb-5">
            <ShieldCheck size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-black">
            Travel Safely
          </h3>
          <p className="text-black leading-relaxed">
            Verified profiles, secure messaging, and safety features ensure you
            can focus on the adventure, not the worries.
          </p>
          <button className="mt-4 text-blue-600 font-semibold hover:underline">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
