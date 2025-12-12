'use client';

import React, { useState, useEffect } from "react";

export const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 bg-[#1D4350] text-white p-3 rounded-full shadow-lg 
        transition-all duration-300 hover:bg-[#16333f] 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}`}
    >
      ↑
    </button>
  );
};
export default ScrollTopButton;