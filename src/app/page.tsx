"use client";

import { useState } from "react";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-3 text-sm font-medium"
      >
        {title}
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="pb-3 space-y-2">{children}</div>}
    </div>
  );
};

export default function FilterPanel() {
  const [duration, setDuration] = useState(5);
  const [age, setAge] = useState(18);
  const [budget, setBudget] = useState(15000);
  const [compatibility, setCompatibility] = useState("Any");

  return (
    <div className="w-[360px] h-screen bg-white border rounded-lg overflow-y-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-sm text-gray-600">← Back</button>
        <button className="text-sm text-blue-600">Clear all filters</button>
      </div>

      {/* Destination */}
      <input
        placeholder="Destination typing..."
        className="w-full border px-3 py-2 rounded mb-3"
      />

      <div className="flex gap-2 mb-4">
        {["Locals", "Nearby", "Starting point"].map((i) => (
          <button
            key={i}
            className="px-3 py-1 text-xs text-white border rounded bg-teal-800"
          >
            {i}
          </button>
        ))}
      </div>

      {/* Language */}
      <input
        placeholder="Language typing..."
        className="w-full border px-3 py-2 rounded mb-2"
      />
      <span className="inline-block bg-teal-800 text-white text-xs px-2 py-1 rounded mb-3">
        English ✕
      </span>

      {/* Interests */}
      <div className="flex gap-2 mb-4">
        <input
          placeholder="Add what you like... e.g"
          className="flex-1 border px-3 py-2 rounded"
        />
        <button className="px-3 border rounded">Add</button>
      </div>

      {/* Rating */}
      <Section title="Rating">
        <div className="flex gap-1 text-gray-400 text-xl">★★★★★</div>
        <span className="text-sm text-gray-500">Any</span>
      </Section>

      {/* Compatibility */}
      <Section title="Compatibility">
        {["90%+", "80%+", "70%+", "60%+", "50%+", "Any"].map((v) => (
          <label
            key={v}
            className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
              compatibility === v ? "bg-teal-50" : ""
            }`}
          >
            <input
              type="radio"
              checked={compatibility === v}
              onChange={() => setCompatibility(v)}
            />
            {v}
          </label>
        ))}
      </Section>

      {/* Safe Score */}
      <Section title="Safe Score">
        <p className="text-sm text-gray-500">Any</p>
      </Section>

      {/* Trip Type */}
      <Section title="Trip Type">
        <div className="grid grid-cols-2 gap-2">
          {["Solo", "Couple", "Family", "Group"].map((t) => (
            <button
              key={t}
              className="border rounded py-1 text-sm"
            >
              + {t}
            </button>
          ))}
          <button className="col-span-2 bg-teal-700 text-white rounded py-1">
            + All
          </button>
        </div>
      </Section>

      {/* Food Preference */}
      <Section title="Food Preference">
        <div className="grid grid-cols-2 gap-2">
          {["Vegetarian", "Non-Veg", "Vegan", "Halal"].map((f) => (
            <button key={f} className="border rounded py-1 text-sm">
              + {f}
            </button>
          ))}
          <button className="col-span-2 bg-teal-700 text-white rounded py-1">
            + All
          </button>
        </div>
      </Section>

      {/* Duration */}
      <Section title="Duration (days)">
        <input
          type="range"
          min={1}
          max={30}
          value={duration}
          onChange={(e) => setDuration(+e.target.value)}
          className="w-full"
        />
        <p className="text-sm">{duration} days</p>
      </Section>

      {/* Age Range */}
      <Section title="Age Range">
        <input
          type="range"
          min={18}
          max={60}
          value={age}
          onChange={(e) => setAge(+e.target.value)}
          className="w-full"
        />
        <p className="text-sm">{age} Years</p>
      </Section>

      {/* Budget */}
      <Section title="Budget (Rs)">
        <input
          type="range"
          min={1000}
          max={100000}
          step={1000}
          value={budget}
          onChange={(e) => setBudget(+e.target.value)}
          className="w-full"
        />
        <p className="text-sm">₹{budget.toLocaleString()}</p>
      </Section>

      {/* Apply */}
      <button className="w-full bg-teal-800 text-white py-3 rounded mt-6">
        Apply Filter
      </button>
    </div>
  );
}
