'use client'
import { useRouter } from "next/navigation";
const HeroSection = () => {
  const router = useRouter();
  const goBack = ()=> router.back();
  return (
    <div className=" bg-gray-50 flex flex-col">
      
      {/* Hero Section */}
      <main className="w-full">
        <div className="relative w-full mx-auto mt-4 md:mt-3">
          {/* Background banner image */}
          <div className="relative h-[300px] md:h-[440px] w-full overflow-hidden -mt-[15px] mb-[15px]">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              className="w-full h-full object-cover bg-gray-300"
            />

            {/* Dark gradient overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Back button */}
            <button onClick={goBack}
            className="absolute top-6 left-6 flex items-center gap-2 text-gray-500 text-base font-medium cursor-pointer bg-white/30 px-2 rounded-full hover:shadow shadow-2xl hover:text-gray-600">
              <span className="">&#8592;</span>
              <span>Back</span>
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
      </main>
    </div>
  );
};

export default HeroSection;
