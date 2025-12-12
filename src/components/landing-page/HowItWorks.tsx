"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Step {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Step 1. Plan smarter with AI",
    desc: "Let AI craft your ideal travel plan based on your interests.",
    img: "/steps-images/step1.png",
  },
  {
    id: 2,
    title: "Step 2. Meet verified travelers",
    desc: "Connect with like-minded people who share your journey.",
    img: "/steps-images/step2.png",
  },
  {
    id: 3,
    title: "Step 3. Stay safe with built-in protection",
    desc: "Advanced safety tools ensure every meetup stays secure.",
    img: "/steps-images/step3.png",
  },
  {
    id: 4,
    title: "Step 4. Earn rewards & explore more",
    desc: "Unlock points and get access to exclusive experiences.",
    img: "/steps-images/step4.png",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const currentStep = steps.find((s) => s.id === activeStep)!;

  //Trigger underline animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#F7F9FF] py-20">
      {/* TITLE */}
      <div ref={sectionRef} className="text-center mb-14 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          How It Works
        </h2>

        {/* UNDERLINE ANIMATION FIXED */}
        <div
          className={`h-[5px] bg-linear-to-r from-teal-400 to-teal-900 mx-auto transition-all duration-700 ${
            visible ? "w-24 sm:w-32 md:w-72" : "w-0"
          }`}
        />

        <p className="text-black mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Experience travel like never before with features designed for modern
          explorers.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6">
        {/* IMAGE */}
        <div className="relative group flex justify-center items-center w-full md:w-1/2">
          <div
            className="w-[90%] md:w-[80%] relative h-[450px] md:h-[550px] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ borderRadius: "100px 0px 100px 0" }}
          >
            <div
              key={currentStep.img}
              className="absolute inset-0 animate-fadeZoom"
            >
              <Image
                src={currentStep.img}
                fill
                alt={currentStep.title}
                sizes="100vw"
                className="object-cover transition-transform duration-1200 ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-[1.15]"
              />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="absolute bottom-6 bg-sky-600/60 backdrop-blur-md px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <p className="text-white font-semibold text-sm">
              {currentStep.title}
            </p>
          </div>
        </div>

        {/* STEPS LIST */}
        <div className="md:w-1/2 space-y-10">
          <ul className="relative space-y-20 border-l-3 border-gray-300 pl-10">
            {/* Progress Bar */}
            <div
              className="absolute left-0 top-0 w-2.5 bg-sky-600 transition-all duration-500"
              style={{
                height: `${activeStep * 105}px`, // adjust if spacing changes
              }}
            ></div>

            {steps.map((step) => (
              <li key={step.id}>
                <button
                  onClick={() => setActiveStep(step.id)}
                  className="flex items-start gap-5 cursor-pointer group text-left"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border transition-all ${
                      activeStep === step.id
                        ? "bg-sky-600 text-white border-sky-600"
                        : "border-gray-400 text-gray-600 group-hover:border-sky-500"
                    }`}
                  >
                    {step.id}
                  </div>

                  <div>
                    <h4
                      className={`font-semibold text-lg transition-colors ${
                        activeStep === step.id
                          ? "text-sky-600"
                          : "text-black group-hover:text-sky-700"
                      }`}
                    >
                      {step.title}
                    </h4>

                    {activeStep === step.id && (
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        {step.desc}
                      </p>
                    )}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes fadeZoom {
          0% {
            opacity: 0;
            transform: scale(1.05) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fadeZoom {
          animation: fadeZoom 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
