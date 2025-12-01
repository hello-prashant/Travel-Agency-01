"use client";

import { useEffect, useRef, useState } from "react";
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
  const [active, setActive] = useState(1);
  const [visible, setVisible] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setActive(id);
          }
        });
      },
      {
        threshold: 0.6, // smooth transition
      }
    );

    stepRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const activeStep = steps.find((s) => s.id === active)!;
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
    <section className="w-full bg-white py-10">
      {/* Title Section */}
      <div ref={sectionRef} className="text-center mb-14 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          How It Works
        </h2>

        {/* Underline Animation */}
        <div
          className={`h-[5px] bg-linear-to-r from-teal-400 to-teal-900 mx-auto transition-all duration-700 ${
            visible ? "w-24 sm:w-32 md:w-70" : "w-0"
          }`}
        />

        <p className="text-black mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Experience travel like never before with features designed for modern
          explorers
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* LEFT – Sticky Apple-Style Image */}
        <div className="sticky top-20 h-[350px] md:h-[500px] flex items-center">
          <div
            key={activeStep.img}
            className="
              relative w-full h-full rounded-3xl overflow-hidden shadow-lg
              transition-all duration-700
              animate-appleFadeSlide
            "
          >
            <Image
              src={activeStep.img}
              alt={activeStep.title}
              fill
              className="
                object-cover
                transition-transform duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                scale-[1.08] 
              "
            />
          </div>
        </div>

        {/* RIGHT – Scroll Sections */}
        <div>
          {steps.map((step, i) => (
            <div
              key={step.id}
              data-id={step.id}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="h-screen flex flex-col justify-center"
            >
              <h2
                className={`text-4xl md:text-5xl font-semibold
                  transition-all duration-500
                  ${
                    active === step.id
                      ? "text-gray-900 translate-y-0 opacity-100"
                      : "text-gray-400 translate-y-6 opacity-40"
                  }
                `}
              >
                {step.title}
              </h2>

              <p
                className={`mt-5 text-lg md:text-xl max-w-md leading-relaxed
                  transition-all duration-500
                  ${
                    active === step.id
                      ? "text-gray-600 translate-y-0 opacity-100"
                      : "text-gray-300 translate-y-6 opacity-40"
                  }
                `}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Apple-Style Animation */}
      <style>{`
        @keyframes appleFadeSlide {
          0% {
            opacity: 0;
            transform: translateX(40px) scale(1.03);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        .animate-appleFadeSlide {
          animation: appleFadeSlide 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
