"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Click outside & ESC key to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Close user dropdown
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
      
      // Close mobile menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest('[data-mobile-menu-button]')
      ) {
        setMobileMenuOpen(false);
      }
    };
    
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    router.push("/ProfileScreen");
    setOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    setOpen(false);
    setMobileMenuOpen(false);
    router.push("/");
  };

  // Navigation items
  const navItems = [
    { label: "About Us", path: "/about" },
    { label: "Explore Trips", path: "/trips" },
    { label: "How It Works", path: "/how-it-works" },
  ];

  return (
    <nav className="z-50 fixed top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 bg-white shadow-md">
      {/* Logo */}
      <div 
        onClick={() => router.push("/")}
        className="flex items-center cursor-pointer group"
      >
        <h1 className="text-2xl lg:text-3xl font-bold text-[#1D4350]">Travio</h1>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
        {navItems.map((item) => (
          <li 
            key={item.label}
            onClick={() => router.push(item.path)}
            className="cursor-pointer hover:text-[#1D4350] transition-colors duration-200 hover:scale-105"
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        data-mobile-menu-button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors" // Changed from gray-100 to gray-200
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 animate-in slide-in-from-top duration-200"
        >
          <ul className="py-2">
            {navItems.map((item) => (
              <li 
                key={item.label}
                onClick={() => {
                  router.push(item.path);
                  setMobileMenuOpen(false);
                }}
                className="px-6 py-3 hover:bg-gray-100 cursor-pointer transition-colors border-b border-gray-200"
              >
                {item.label}
              </li>
            ))}
            {isLoggedIn ? (
              <>
                <li 
                  onClick={() => {
                    router.push("/ProfileScreen");
                    setMobileMenuOpen(false);
                  }}
                  className="px-6 py-3 hover:bg-gray-100 cursor-pointer transition-colors flex items-center border-b border-gray-200"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile
                </li>
                <li 
                  onClick={() => {
                    router.push("/settings");
                    setMobileMenuOpen(false);
                  }}
                  className="px-6 py-3 hover:bg-gray-300 cursor-pointer transition-colors flex items-center border-b border-gray-200"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </li>
                <li 
                  onClick={handleLogout}
                  className="px-6 py-3 hover:bg-red-100 text-red-600 cursor-pointer transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Log Out
                </li>
              </>
            ) : (
              <>
                <li 
                  onClick={() => {
                    handleLogin();
                    setMobileMenuOpen(false);
                  }}
                  className="px-6 py-3 hover:bg-gray-100 cursor-pointer transition-colors flex items-center border-b border-gray-200"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Login
                </li>
                <li 
                  onClick={() => {
                    router.push("/signup");
                    setMobileMenuOpen(false);
                  }}
                  className="px-6 py-3 hover:bg-gray-300 cursor-pointer transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Sign Up
                </li>
              </>
            )}
          </ul>
        </div>
      )}

      {/* Desktop User Menu */}
      <div className="hidden md:block relative" ref={dropdownRef}>
        <button
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen(!open);
            }
          }}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label={isLoggedIn ? "Open user menu" : "Login"}
          className={`
            flex items-center justify-center 
            ${isLoggedIn 
              ? "w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md hover:border-[#1D4350] transition-all hover:shadow-lg" 
              : "bg-[#1D4350] hover:bg-[#16333f] text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 hover:shadow-md"
            }
          `}
        >
          {isLoggedIn ? (
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              alt="User profile"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              width={40}
              height={40}
              loading="lazy"
            />
          ) : (
            "Log In"
          )}
        </button>

        {/* Desktop Dropdown Menu */}
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="text-sm py-1">
              {!isLoggedIn ? (
                <>
                  <li
                    onClick={handleLogin}
                    className="flex items-center px-4 py-3 hover:bg-gray-300 cursor-pointer transition-colors"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Login
                  </li>
                  <li
                    onClick={() => {
                      router.push("/signup");
                      setOpen(false);
                    }}
                    className="flex items-center px-4 py-3 hover:bg-gray-300 cursor-pointer transition-colors"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Sign Up
                  </li>
                </>
              ) : (
                <>
                  <li
                    onClick={() => {
                      router.push("/ProfileScreen");
                      setOpen(false);
                    }}
                    className="flex items-center px-4 py-3 hover:bg-gray-300 cursor-pointer transition-colors"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile
                  </li>
                  <li
                    onClick={() => {
                      router.push("/settings");
                      setOpen(false);
                    }}
                    className="flex items-center px-4 py-3 hover:bg-gray-300 cursor-pointer transition-colors"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </li>
                  <li
                    onClick={handleLogout}
                    className="flex items-center px-4 py-3 hover:bg-gray-300 text-red-600 cursor-pointer transition-colors"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Log Out
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};