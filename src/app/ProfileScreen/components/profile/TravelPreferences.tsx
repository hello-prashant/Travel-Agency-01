"use client";

import clsx from "clsx";

interface Props {
  edited: any;
  setEdited?: (data: any) => void;
  readOnly?: boolean;
}

const TRAVEL_STYLES = [
  "Adventure",
  "Relaxation",
  "Culture",
  "Nature",
  "Photography",
  "Nightlife",
  "Budget",
];

const LANGUAGES = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Japanese",
  "Chinese",
  "Portuguese",
];

export default function TravelPreferences({
  edited,
  setEdited,
  readOnly = false,
}: Props) {
  const toggleItem = (key: "travelStyles" | "languages", value: string) => {
    if (readOnly || !setEdited) return;

     const currentValues: string[] = Array.isArray(edited[key])
      ? edited[key]
      : [];

    setEdited({
      ...edited,
      [key]: currentValues.includes(value)
        ? currentValues.filter((v: string) => v !== value)
        : [...currentValues, value],
    });
  };

  const stylesToShow = readOnly
    ? TRAVEL_STYLES.filter((s) => edited.travelStyles?.includes(s))
    : TRAVEL_STYLES;

  const languagesToShow = readOnly
    ? LANGUAGES.filter((l) => edited.languages?.includes(l))
    : LANGUAGES;

  return (
    <div className="bg-white rounded-lg p-6 space-y-6">
      <h3 className="text-2xl font-bold text-gray-700">Travel Preferences</h3>

      {/* Travel Style */}
      <div>
        <p className="text-xl font-medium mb-3 text-gray-700">
          Travel Style & Interests
        </p>

        {stylesToShow.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {stylesToShow.map((style) => {
              const selected = edited.travelStyles?.includes(style);

              return (
                <button
                  key={style}
                  type="button"
                  onClick={() => toggleItem("travelStyles", style)}
                  className={clsx(
                    "px-4 py-1 rounded-full text-lg border transition",
                    selected
                      ? "bg-[#1d4350] text-white border-[#1d4350]"
                      : "bg-white text-gray-700 border-gray-300",
                    !readOnly && "hover:bg-[#1d4357] hover:text-white"
                  )}
                >
                  {style}
                </button>
              );
            })}
          </div>
        ) : (
          readOnly && <p className="text-gray-400">No preferences selected</p>
        )}
      </div>
      {/* Languages */}
      <div>
        <p className="text-xl font-medium mb-3 text-gray-700">Languages</p>

        {languagesToShow.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {languagesToShow.map((lang) => {
              const selected = edited.languages?.includes(lang);

              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => toggleItem("languages", lang)}
                  className={clsx(
                    "px-4 py-1 rounded-full text-lg border transition",
                    selected
                      ? "bg-[#1d4350] text-white border-[#1d4350]"
                      : "bg-white text-gray-600 border-gray-300",
                    !readOnly && "hover:bg-[#1d4357] hover:text-white"
                  )}
                >
                  {lang}
                </button>
              );
            })}
          </div>
        ) : (
          readOnly && <p className="text-gray-400">No languages selected</p>
        )}
      </div>
    </div>
  );
}
