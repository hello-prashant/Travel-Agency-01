
import React from 'react';  

export const Nav = () => (
 <> <nav className=" z-30 flex justify-between items-center px-2 py-3 lg:px-10 text-white bg-black/20 backdrop-blur-md w-full shadow-md fixed">
    <h1 className="text-2xl lg:text-4xl font-bold tracking-wide">Travio</h1>

    <ul className="flex gap-3 text-sm lg:text-lg lg:gap-8 font-semibold">
      <li className="px-3 py-1  transition-all duration-200 hover:bg-white/20 cursor-pointer">
        About Us
      </li>
      <li className="px-3 py-1  transition-all duration-200 hover:bg-white/20 cursor-pointer">
        Explore Trips
      </li>
      <li className="px-3 py-1  transition-all duration-200 hover:bg-white/20 cursor-pointer">
        How & works
      </li>
    </ul>

    <button className="bg-[#1D4350] py-2 px-6 rounded-full text-sm lg:text-lg font-semibold transition-all duration-200 hover:bg-[#16333f]">
      Log in
    </button>
  </nav>

</>
);
