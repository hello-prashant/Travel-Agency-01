'use client';
import React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const KeyFeatures: React.FC = () => {
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
    <section className="w-full bg-[#F7F9FF]  py-16">
      <div className="mx-auto flex max-w-7xl flex-col px-4">
        {/* CENTERED HEADING */}
        <div className="flex flex-col items-center">
          <div className="group inline-flex flex-col items-center">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 text-center">
              Key Features
            </h2>
            {/* underline from center */}
 <div ref={sectionRef} className="z-10 w-50 h-1 bg-gray-200 mx-auto mb-2 overflow-hidden m-5">

           <div
          className={`h-[5px] bg-linear-to-r from-teal-400 to-teal-900 mx-auto transition-all duration-700 ${
            isVisible ? "w-full" : "w-0"
          }`}
        />
          </div>         
           </div>
        </div>

        {/* CONTENT: TEXT + IMAGES */}
        <div className="mt-12 flex flex-col gap-12 md:flex-row">
          {/* LEFT SIDE TEXT */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-15">
              {/* Feature 1 */}
              <div className="flex items-start gap-6">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full ">
                  <div className="relative h-10 w-10">
                    <Image
                      src="/Key-feature/icon 1.png"
                      alt="AI Trip Planner icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    AI Trip Planner
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    Personalized itineraries based on your preferences, time,
                    and budget — crafted intelligently for every journey.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full ">
                  <div className="relative h-10 w-10">
                    <Image
                      src="/Key-feature/icon 2.png"
                      alt="Travel Matching icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Travel Matching
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    Find travel companions who share your vibe and explore
                    destinations together.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full ">
                  <div className="relative h-10 w-10">
                    <Image
                      src="/Key-feature/icon 3.png"
                      alt="Safety and trust icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Safety &amp; Trust
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    Verified users, in-app check-ins, and trusted community
                    ratings for complete peace of mind.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full ">
                  <div className="relative h-10 w-10">
                    <Image
                      src="/Key-feature/icon 4.png"
                      alt="Social discovery icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Social Discovery
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    Share your travel stories, join groups, and connect with
                    explorers around the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE GRID */}
          {/* RIGHT SIDE IMAGE GRID – asymmetric rounded corners */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {/* 1st image: TL square, TR & Bl rounded, Br square */}
              <div className="relative aspect-4/3 overflow-hidden rounded-tr-[28px] rounded-bl-[28px] shadow-md">
                <Image
                  src="/Key-feature/image-1.png"
                  alt="Travellers at the coast"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* 2nd image: TR & Bl square, TL & Br rounded */}
              <div className="relative aspect-4/3 overflow-hidden rounded-tl-[28px] rounded-br-[28px] shadow-md">
                <Image
                  src="/Key-feature/image-2.png"
                  alt="Couple taking selfie"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* 3rd image: same as 2nd */}
              <div className="relative aspect-4/3 overflow-hidden rounded-tl-[28px] rounded-br-[28px] shadow-md">
                <Image
                  src="/Key-feature/image-3.png"
                  alt="Airplane wing at sunset"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* 4th image: same as 1st */}
              <div className="relative aspect-4/3 overflow-hidden rounded-tr-[28px] rounded-bl-[28px] shadow-md">
                <Image
                  src="/Key-feature/image-4.png"
                  alt="Group of friends hiking"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
