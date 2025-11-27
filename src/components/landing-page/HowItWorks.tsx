"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Step 1",
    desc: "Plan smarter with AI",
    img: "/steps-images/step1.png", // CHANGE IMAGE
  },
  {
    id: 2,
    title: "Step 2",
    desc: "Meet verified, like-minded travelers",
    img: "/steps-images/step2.png", // CHANGE IMAGE
  },
  {
    id: 3,
    title: "Step 3",
    desc: "Stay safe with built-in protection",
    img: "/steps-images/step3.png", // CHANGE IMAGE
  },
  {
    id: 4,
    title: "Step 4",
    desc: "Earn rewards and discover authentic experiences",
    img: "/steps-images/step4.png", // CHANGE IMAGE
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  const current = steps.find((s) => s.id === activeStep)!;

  return (
    <section className="bg-[#eef2ff] py-20 w-full">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">How it works</h2>

        <div className="h-[3px] bg-blue-600 w-40 mx-auto mt-3"></div>

        <p className="text-gray-600 mt-4">
          Experience travel like never before with features designed for modern
          explorers.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* LEFT IMAGE WITH ZOOM ANIMATION */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl group">
          <Image
            key={current.img}
            src={current.img}
            alt={current.title}
            width={600}
            height={800}
            className="rounded-3xl transition-transform duration-700 ease-out transform 
                       group-hover:scale-110 scale-100"
          />
        </div>

        {/* RIGHT SIDE STEPS */}
        <div className="flex flex-col justify-center space-y-10">
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className="flex items-start gap-6 cursor-pointer"
            >
              {/* Number */}
              <div
                className={`w-10 h-10 rounded-full flex justify-center items-center border 
                  text-lg font-semibold transition-all duration-300
                  ${
                    activeStep === step.id
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
              >
                {step.id}
              </div>

              {/* Text */}
              <div>
                <h3
                  className={`text-xl font-semibold transition-all duration-300 ${
                    activeStep === step.id ? "text-blue-600" : "text-gray-800"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-1">{step.desc}</p>

                {/* Blue vertical line animation */}
                {activeStep === step.id && (
                  <div className="w-1 h-10 bg-blue-600 mt-3 rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
