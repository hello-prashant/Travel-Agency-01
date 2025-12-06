import React from 'react';

// This component now displays a solid black circle with a white checkmark inside,
// matching the appearance in your uploaded image.
const CheckIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5" // Icon size (w-5 h-5)
  >
    {/* 1. Solid Black Circle */}
    <circle cx="12" cy="12" r="10" fill="black" />
    
    {/* 2. White Checkmark (Drawn on top of the circle) */}
    <path 
        // Path data for a centered checkmark
        d="M8 12l2.5 2.5l5.5-5.5" 
        fill="none" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
    />
  </svg>
);

// Component to display a single highlight item.
const HighlightItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-2">
    {/* Check icon (Now solid) */}
    <CheckIcon />
    <span className="text-base text-gray-800 font-normal">
      {text}
    </span>
  </div>
);

// The main component that displays the entire card.
const App: React.FC = () => {
  // List of all items given in the original image.
  const highlights: string[] = [
    "Beach activities",
    "Local cuisine",
    "Yoga sessions",
    "Yoga",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-4 sm:p-8">
      {/* Main card container, set to max-width 7xl for a wide desktop look. */}
      <div className="w-full max-w-7xl bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-200">

        {/* Title: Trip Highlights */}
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
          Trip Highlights
        </h1>

        {/* --- This container keeps all items horizontal --- */}
        {/* 'flex' makes it horizontal (row). 'gap-x-16' ensures sufficient spacing between items. 
            'flex-wrap' allows items to wrap to the next line on very small screens (mobile-friendly). */}
        <div className="flex flex-wrap items-start gap-x-16 gap-y-4">
          {highlights.map((item, index) => (
            <HighlightItem key={index} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;