"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MapPin, Calendar, ChevronRight } from "lucide-react";


const Hero: React.FC = () => {
  const [destination1, setDestination] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push(
      `/searchresults?destination=${encodeURIComponent(destination1)}&date=${date}`
    );
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-images/hero-bg.jpg.png')" }}
      />
      {/* Overlay */}
      <div />

      {/* Content */}
      <div className="relative z-5 flex w-full max-w-5xl flex-col items-center px-4 py-10 text-center">
        {/* Small badge */}
        <button className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/20 transition">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Join 50,000+ Travel Enthusiasts
        </button>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Meet.Match.Travel.
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-100">
          Connect with like-minded travelers, personalize your{" "}
        </p>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-100">
          journey, and explore the world safely with AI-powered matches.
        </p>

        {/* Search Card */}
        <form
          onSubmit={handleSubmit}
          className=" w-full max-w-3xl mt-8 p-4  backdrop-blur border border-white/20   bg-white/10 "
         
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            {/* Destination input */}
            <div className="flex-1">
              <label className="mb-1 block text-left text-xs font-semibold uppercase tracking-wide text-gray-200">
                {/* Destination */}
              </label>
              <div className="flex items-center gap-2  bg-white px-3 py-3 text-gray-900">
                <MapPin className="h-4 w-4 " />
                <input
                  type="text"
                  value={destination1}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none  placeholder:text-black"
                  placeholder="Destination"
                />
              </div>
            </div>

            {/* Date input */}
            <div className="flex-1">
              <label className="mb-1 block text-left text-xs font-semibold uppercase tracking-wide text-gray-200">
                {/* Date */}
              </label>
              <div className="flex items-center gap-2  bg-white px-3 py-3 text-gray-900">
                <Calendar className="h-4 w-4 " />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Button */}
            <div className="flex items-end">
             
  <button
    type="submit"
    className="flex w-full items-center justify-center gap-2 bg-cyan-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-cyan-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-900 sm:w-auto"
  >
    Find Trips
    <ChevronRight className="h-4 w-4" />
  </button>


            </div>
          </div>
        </form>

        {/* Trust badges */}
        <div className="mt-5 flex flex-col items-center gap-1 text-xs sm:text-sm text-gray-100">
          <p>
            100k+ Verified Travelers • 98% Safety Rating • AI-Powered Matching
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
