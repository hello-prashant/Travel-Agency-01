"use client";

import { useRef, useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

interface Trip {
  id: number;
  title: string;
  location: string;
  date: string;
  image: string;
  status: "Confirmed" | "Pending";
  participants: string[];
}

export default function MyTripsPage() {
  const [activeFilter, setActiveFilter] = useState<"upcoming" | "past">(
    "upcoming"
  );

  const upcomingTrips = [
    {
      id: 1,
      title: 'Paris Adventure',
      location: 'Paris, France',
      date: 'Dec 15 - 22, 2025',
      participants: ['User 1', 'User 2'],
      country: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop',
      status: 'Confirmed',
      participantCount: '+ Piu'
    },
    {
      id: 2,
      title: 'London Travel',
      location: 'London, United Kingdom',
      date: 'Feb 10 - 18, 2026',
      participants: ['User 1', 'User 2'],
      country: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop',
      status: 'Planned',
      participantCount: '+ Piu'
    }
  ];


  const pastTrips = [
    {
      id: 3,
      title: 'Paris Adventure',
      location: 'Paris, France',
      date: 'Dec 5 - 12, 2025',
      participants: ['User 1', 'User 2'],
      country: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop',
      status: 'Completed',
      rating: 5.0,
      experiences: '5/6 experiences',
      participantCount: '+ Piu',
      reviews: 'Leave Reviews'
    }
  ];

  const tripsToShow = activeFilter === "upcoming" ? upcomingTrips : pastTrips;
  

  return (
    <div className="max-w-6xl mx-auto p-4">

      {/* ---- Page Title ---- */}
      <h2 className="text-xl font-semibold mb-4 text-gray-700">My Trips</h2>

      {/* ---- Tabs: Upcoming | Past ---- */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setActiveFilter("upcoming")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeFilter === "upcoming"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Upcoming (1)
        </button>

        <button
          onClick={() => setActiveFilter("past")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeFilter === "past"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Past Trips (1)
        </button>
      </div>

      <div className="mb-6 flex justify-end">
        <button className="px-5 py-2 bg-[#1d4350] text-white rounded-full shadow">
          Plan New Trip
        </button>
      </div>

      {/* ---- Trip Cards ---- */}
      <div className="space-y-5">
        {tripsToShow.map((trip) => (
          <div
            key={trip.id}
            className="border  p-4 flex gap-5 shadow-sm bg-white"
          >
            <img
              src={trip.image}
              alt={trip.title}
              className="h-32 w-40 object-cover "
            />

            <div className="flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg font-semibold text-gray-600">{trip.title}</h3>

                <p className="flex items-center text-gray-600 gap-1 mt-1">
                  <MapPin className="h-4 w-4" /> {trip.location}
                </p>

                <p className="flex items-center text-gray-600 gap-1 mt-1">
                  <Calendar className="h-4 w-4" /> {trip.date}
                </p>
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  {trip.participants.join(", ")}
                </div>

                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium ${
                    trip.status === "Confirmed"
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {trip.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---- Create Trip Button ---- */}
      {/* <div className="mt-6 flex justify-end">
        <button className="px-5 py-2 bg-[#1d4350] text-white rounded-full shadow">
          Plan New Trip
        </button>
      </div> */}

    </div>
  );
}
