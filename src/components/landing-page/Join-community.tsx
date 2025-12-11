"use client";
import React, { use } from "react";
import {useState,  useEffect, useRef } from 'react';

export default function Community() {
    const [isVisible, setIsVisible] = useState(false);
      const sectionRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.2 }
        );
    
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
    
        return () => {
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        };
      }, []);
    
  return (
    <div className="min-h-screen  bg-gray-50 text-gray-800 py-16 px-6">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold ">Join Our Global Community</h1>
       
          <div ref={sectionRef} className="z-10 w-120 h-1 bg-gray-200 mx-auto mb-2 overflow-hidden m-5">

           <div
          className={`h-[5px] bg-linear-to-r from-teal-400 to-teal-900 mx-auto transition-all duration-700 ${
            isVisible ? "w-full" : "w-0"
          }`}
        />
          </div>
        <p className="text-gray-600 mt-2">
          Hear from travelers who've found their perfect travel companions
        </p>
      </div>

      {/* Testimonial Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* CARD 1 */}
        <div className="bg-white  shadow-sm border p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center">
              SC
            </div>
            <div>
              <h3 className="font-semibold">Sarah Chen</h3>
              <p className="text-sm text-gray-500">Tokyo, Japan</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700 italic">
            "I found the perfect travel buddy for my Southeast Asia trip!"
          </p>
          <p className="text-yellow-500 mt-3">★★★★★</p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white  shadow-sm border p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center">
              MR
            </div>
            <div>
              <h3 className="font-semibold">Marcus Rodríguez</h3>
              <p className="text-sm text-gray-500">Barcelona, Spain</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700 italic">
            "The AI matching is incredible. I connected with someone compatible!"
          </p>
          <p className="text-yellow-500 mt-3">★★★★★</p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white  shadow-sm border p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="bg-teal-500 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center">
              EW
            </div>
            <div>
              <h3 className="font-semibold">Emma Wilson</h3>
              <p className="text-sm text-gray-500">New York, USA</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700 italic">
            "Safety features gave me peace of mind!"
          </p>
          <p className="text-yellow-500 mt-3">★★★★★</p>
        </div>

        {/* CARD 4 */}
        <div className="bg-white  shadow-sm border p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center">
              RP
            </div>
            <div>
              <h3 className="font-semibold">Raj Patel</h3>
              <p className="text-sm text-gray-500">Mumbai, India</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700 italic">
            "Made lifelong friends through Travio!"
          </p>
          <p className="text-yellow-500 mt-3">★★★★★</p>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="grid grid-cols-4 text-center">

          {/* Stat 1 */}
          <div className="group cursor-pointer">
            <p className="text-2xl font-bold">50K+</p>
            <p className="text-gray-600">Active Travelers</p>
            <div className="w-0 h-[3px] bg-blue-600 mx-auto mt-2 group-hover:w-35 transition-all duration-300"></div>
          </div>

          {/* Stat 2 */}
          <div className="group cursor-pointer">
            <p className="text-2xl font-bold">150+</p>
            <p className="text-gray-600">Countries</p>
            <div className="w-0 h-[3px] bg-blue-600 mx-auto mt-2 group-hover:w-35 transition-all duration-300"></div>
          </div>

          {/* Stat 3 */}
          <div className="group cursor-pointer">
            <p className="text-2xl font-bold">100K+</p>
            <p className="text-gray-600">Trips Planned</p>
            <div className="w-0 h-[3px] bg-blue-600 mx-auto mt-2 group-hover:w-35 transition-all duration-300"></div>
          </div>

          {/* Stat 4 */}
          <div className="group cursor-pointer">
            <p className="text-2xl font-bold">4.9/5</p>
            <p className="text-gray-600">User Rating</p>
            <div className="w-0 h-[3px] bg-blue-600 mx-auto mt-2 group-hover:w-35 transition-all duration-300"></div>
          </div>
        </div>
      </div>

    </div>
  );
}