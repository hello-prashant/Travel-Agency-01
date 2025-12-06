import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-pink-500">Travlo</span>
            <span className="text-2xl font-bold text-pink-500">.</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <button className="hover:text-pink-500">My Trips</button>
            <button className="hover:text-pink-500">Explore Trips</button>
            <button className="hover:text-pink-500">Nearby Essentials</button>
            <button className="hover:text-pink-500">Community</button>
          </nav>

          <div className="flex items-center gap-4 text-sm">
            <button className="text-gray-700 hover:text-pink-500">Log in</button>
            <button className="px-4 py-2 rounded-full bg-[#F47C7C] text-white font-medium hover:opacity-90">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 w-full">
        <div className="relative w-full mx-auto mt-4 md:mt-6">
          {/* Background banner image */}
          <div className="relative h-[300px] md:h-[440px] w-full overflow-hidden -mt-[15px] mb-[15px]">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Beach with surfboard"
              className="w-full h-full object-cover"
            />

            {/* Dark gradient overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Back button */}
            <button className="absolute top-6 left-6 flex items-center gap-2 text-black/90 text-base font-bold">
              <span className="text-xl">&#8592;</span>
              <span>BACK</span>
            </button>

            {/* Left bottom trip text */}
            <div className="absolute bottom-8 left-6 md:left-10 text-white">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#F47C7C] text-xs font-semibold uppercase tracking-wide mb-3">
                Beach &amp; Culture
              </div>
              <h1 className="text-sm font-semibold mb-1">
                Bali Beach & Culture Adventure
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-200 mt-2">
                <span className="inline-flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Bali, Indonesia
                </span>
                <span className="inline-flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  13 days
                </span>
              </div>
            </div>

          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-0 mt-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <section className="lg:col-span-2 space-y-6">
            </section>
            <aside className="lg:col-span-1 flex justify-end" style={{ transform: 'translateX(30px)' }}>
              <div className="w-72 md:w-80 p-5 md:p-6">
                <div className="flex flex-col mb-4">
                  <span className="text-2xl font-semibold text-gray-900">1500</span>
                  <span className="text-xs text-gray-500">per person</span>
                </div>
                <div className="space-y-3 text-sm text-gray-700 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Start Date</span>
                    <span className="font-medium">Nov 15, 2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">End Date</span>
                    <span className="font-medium">Nov 25, 2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-medium">13 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Spots Available</span>
                    <span className="font-medium text-emerald-500">3 remaining</span>
                  </div>
                </div>
                <button className="w-full mb-3 px-4 py-2.5 bg-[#F47C7C] text-white text-sm font-semibold hover:bg-[#e06d6d]">Join this trip</button>
                <button className="w-full mb-2 px-4 py-2.5 border border-gray-200 text-sm font-medium text-gray-800 flex items-center justify-center gap-2 hover:bg-gray-50">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Chat with Organizer</span>
                </button>
                <p className="text-[11px] text-gray-400 text-center mt-1">Free cancellation up to 48 hours before trip start.</p>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
