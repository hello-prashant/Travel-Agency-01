"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone, FaStar } from "react-icons/fa";
import {
  travelScopes,
  tripTypeOptions,
  foodOptions,
  compatibilityOptions,
  safeScoreOptions,
  collapsibleSectionLabels,
} from "../data/constants";
import { FilterProps } from "../types";

export default function Filter({
  destination,
  setDestination,
  travelScope,
  setTravelScope,
  selectedLanguages,
  setSelectedLanguages,
  selectedInterests,
  setSelectedInterests,
  rating,
  setRating,
  compatibility,
  setCompatibility,
  safeScore,
  setSafeScore,
  selectedTripTypes,
  setSelectedTripTypes,
  selectedFood,
  setSelectedFood,
  durationMax,
  setDurationMax,
  setIsDurationActive,
  agePreference,
  setAgePreference,
  setIsAgeActive,
  budget,
  setBudget,
  setIsBudgetActive,
  handleClearFilters,
}: Omit<
  FilterProps,
  | "languageInput"
  | "setLanguageInput"
  | "interestInput"
  | "setInterestInput"
  | "handleApplyFilters"
  | "statusMessage"
  | "handleAddLanguage"
  | "handleAddInterest"
  | "removeChip"
  | "toggleSelection"
>) {
  const [languageInput, setLanguageInput] = useState("");
  const [interestInput, setInterestInput] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [collapsedSections, setCollapsedSections] = useState<
    Record<keyof typeof collapsibleSectionLabels, boolean>
  >({
    rating: false,
    compatibility: false,
    safeScore: false,
    tripType: false,
    foodPreference: false,
  });

  const handleAddLanguage = () => {
    if (!languageInput.trim()) return;
    if (!selectedLanguages.includes(languageInput.trim())) {
      setSelectedLanguages((prev) => [...prev, languageInput.trim()]);
    }
    setLanguageInput("");
  };

  const handleAddInterest = () => {
    if (!interestInput.trim()) return;
    if (!selectedInterests.includes(interestInput.trim())) {
      setSelectedInterests((prev) => [...prev, interestInput.trim()]);
    }
    setInterestInput("");
  };

  const handleApplyFilters = () => {
    setStatusMessage("Filters applied");
    setTimeout(() => setStatusMessage(null), 2000);
  };

  const removeChip = (
    value: string,
    list: string[],
    setter: (values: string[] | ((prev: string[]) => string[])) => void
  ) => {
    setter((prev) => prev.filter((item) => item !== value));
  };

  const toggleSelection = (
    value: string,
    list: string[],
    setter: (values: string[] | ((prev: string[]) => string[])) => void
  ) => {
    if (list.includes(value)) {
      setter((prev) => prev.filter((item) => item !== value));
    } else {
      setter((prev) => [...prev, value]);
    }
  };

  const toggleSectionVisibility = (
    section: keyof typeof collapsibleSectionLabels
  ) => {
    setCollapsedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    //sidebar filter
<aside className="w-full bg-white p-4 shadow-sm lg:w-80 lg:self-start lg:sticky lg:top-4 max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-thin">
      <div className="flex items-center justify-between text-sm text-gray-500">
        <button className="text-teal-800">&larr; Back</button>
        <button onClick={handleClearFilters} className="text-teal-800">
          Clear all filters
        </button>
      </div>

      <div className="mt-4 space-y-4">
        <div>
          <label className="text-sm  text-gray-700">Destination</label>
          <div className="relative mt-1">
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />
            <input
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              placeholder="Destination typing..."
              className="w-full border border-gray-200 py-2 pl-10 pr-10 text-sm text-gray-800 placeholder:text-gray-500 focus:border-teal-700 focus:outline-none"
            />
            <FaMicrophone className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-teal-700 transition-colors" />
          </div>
        </div>

        <div className="flex gap-2">
          {travelScopes.map((scope) => (
            <button
              key={scope}
              onClick={() => setTravelScope(scope)}
              className={`flex-1 cursor-pointer p-1 text-sm ${
                travelScope === scope
                  ? "bg-teal-900 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {scope}
            </button>
          ))}
        </div>

        <div>
          <label className="text-sm text-gray-700">Language</label>
          <div className="relative mt-1">
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />
            <input
              value={languageInput}
              onChange={(event) => setLanguageInput(event.target.value)}
              placeholder="Language typing..."
              className="w-full border border-gray-200 py-2 pl-10 pr-20 text-sm text-gray-800 placeholder:text-gray-500 focus:border-teal-700 focus:outline-none"
            />
            <button
              onClick={handleAddLanguage}
              className="absolute right-1 top-1 bottom-1  px-4 text-sm font-semibold text-teal-900 cursor-pointer"
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedLanguages.map((lang) => (
              <span
                key={lang}
                className="flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-sm text-teal-800"
              >
                {lang}
                <button
                  onClick={() =>
                    removeChip(lang, selectedLanguages, setSelectedLanguages)
                  }
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-700">Interests</label>
          <div className="relative mt-1">
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />
            <input
              value={interestInput}
              onChange={(event) => setInterestInput(event.target.value)}
              placeholder="Add what you like..."
              className="w-full border border-gray-200 py-2 pl-10 pr-20 text-sm text-gray-800 placeholder:text-gray-500 focus:border-teal-700 focus:outline-none"
            />
            <button
              onClick={handleAddInterest}
              className="absolute right-1 top-1 bottom-1  px-4 text-sm font-semibold text-teal-900 cursor-pointer"
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedInterests.map((interest) => (
              <span
                key={interest}
                className="flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-sm text-teal-800"
              >
                {interest}
                <button
                  onClick={() =>
                    removeChip(
                      interest,
                      selectedInterests,
                      setSelectedInterests
                    )
                  }
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>

        <div>
          <button
            className="flex w-full items-center justify-between  text-gray-800"
            onClick={() => toggleSectionVisibility("rating")}
          >
            {collapsibleSectionLabels.rating}
            <span className="text-sm ">
              {collapsedSections.rating ? "∧" : "∨"}
            </span>
          </button>
          {!collapsedSections.rating && (
            <>
              <div className="mt-2 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <button
                      key={starValue}
                      onClick={() => setRating(starValue)}
                    >
                      <FaStar
                        className={
                          starValue <= (rating ?? 0)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setRating(null)}
                className="mt-2 text-sm text-teal-800"
              >
                Any
              </button>
            </>
          )}
        </div>

        <div>
          <button
            className="flex w-full items-center justify-between  text-gray-800"
            onClick={() => toggleSectionVisibility("compatibility")}
          >
            {collapsibleSectionLabels.compatibility}
            <span className="text-sm ">
              {collapsedSections.compatibility ? "∧" : "∨"}
            </span>
          </button>
          {!collapsedSections.compatibility && (
            <div className="mt-2 space-y-2 text-sm text-gray-700">
              {compatibilityOptions.map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="compatibility"
                    checked={compatibility === option}
                    onChange={() => setCompatibility(option)}
                  />
                  {option}% +
                </label>
              ))}
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="compatibility"
                  checked={compatibility === null}
                  onChange={() => setCompatibility(null)}
                />
                Any
              </label>
            </div>
          )}
        </div>

        <div>
          <button
            className="flex w-full items-center justify-between  text-gray-800"
            onClick={() => toggleSectionVisibility("safeScore")}
          >
            {collapsibleSectionLabels.safeScore}
            <span className="text-sm ">
              {collapsedSections.safeScore ? "∧" : "∨"}
            </span>
          </button>
          {!collapsedSections.safeScore && (
            <div className="mt-2 space-y-2 text-sm text-gray-700">
              {safeScoreOptions.map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="safe-score"
                    checked={safeScore === option}
                    onChange={() => setSafeScore(option)}
                  />
                  {option}% +
                </label>
              ))}
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="safe-score"
                  checked={safeScore === null}
                  onChange={() => setSafeScore(null)}
                />
                Any
              </label>
            </div>
          )}
        </div>

        <div>
          <button
            className="flex w-full items-center justify-between  text-gray-700"
            onClick={() => toggleSectionVisibility("tripType")}
          >
            {collapsibleSectionLabels.tripType}
            <span className="text-sm ">
              {collapsedSections.tripType ? "∧" : "∨"}
            </span>
          </button>
          {!collapsedSections.tripType && (
            <div className="mt-2 grid grid-cols-2 gap-2">
              {tripTypeOptions.map((type) => (
                <button
                  key={type}
                  onClick={() =>
                    toggleSelection(
                      type,
                      selectedTripTypes,
                      setSelectedTripTypes
                    )
                  }
                  className={` border px-3 py-2 text-sm ${
                    selectedTripTypes.includes(type)
                      ? "border-teal-900 bg-teal-900 text-white"
                      : "border-gray-200 bg-gray-50 text-gray-700"
                  }`}
                >
                  + {type}
                </button>
              ))}
              <button
                onClick={() => setSelectedTripTypes([])}
                className="col-span-2  border text-white px-3 py-2 text-sm font-semibold bg-teal-900"
              >
                + All
              </button>
            </div>
          )}
        </div>

        <div>
          <button
            className="flex w-full items-center justify-between  text-gray-700"
            onClick={() => toggleSectionVisibility("foodPreference")}
          >
            {collapsibleSectionLabels.foodPreference}
            <span className="text-sm ">
              {collapsedSections.foodPreference ? "∧" : "∨"}
            </span>
          </button>
          {!collapsedSections.foodPreference && (
            <div className="mt-2 grid grid-cols-2 gap-2">
              {foodOptions.map((food) => (
                <button
                  key={food}
                  onClick={() =>
                    toggleSelection(food, selectedFood, setSelectedFood)
                  }
                  className={` border px-3 py-2 text-sm ${
                    selectedFood.includes(food)
                      ? "border-teal-900 bg-teal-900 text-white"
                      : "border-gray-200 bg-gray-50 text-gray-700"
                  }`}
                >
                  + {food}
                </button>
              ))}
              <button
                onClick={() => setSelectedFood([])}
                className="col-span-2  border text-white px-3 py-2 text-sm font-semibold bg-teal-900"
              >
                + All
              </button>
            </div>
          )}
        </div>

        <div>
          <p className=" text-gray-700">Duration (days)</p>
          <input
            type="range"
            min={3}
            max={15}
            value={durationMax}
            onChange={(event) => {
              setDurationMax(Number(event.target.value));
              setIsDurationActive(true);
            }}
            className="mt-2 w-full"
          />
          <p className="text-sm text-gray-700">{durationMax} days</p>
        </div>

        <div>
          <p className=" text-gray-700">Age Range</p>
          <input
            type="range"
            min={18}
            max={60}
            value={agePreference}
            onChange={(event) => {
              setAgePreference(Number(event.target.value));
              setIsAgeActive(true);
            }}
            className="mt-2 w-full"
          />
          <p className="text-sm text-gray-700">{agePreference} Years</p>
        </div>

        <div>
          <p className=" text-gray-700">Budget (Rs)</p>
          <input
            type="range"
            min={1500}
            max={100000}
            step={500}
            value={budget}
            onChange={(event) => {
              setBudget(Number(event.target.value));
              setIsBudgetActive(true);
            }}
            className="mt-2 w-full"
          />
          <p className="text-sm text-gray-700">
            &#8377;{budget.toLocaleString("en-IN")}
          </p>
        </div>

        <button
          onClick={handleApplyFilters}
          className="mt-4 w-full  bg-teal-900 py-2 text-center font-semibold text-white"
        >
          Apply Filter
        </button>
        {statusMessage && (
          <p className="text-center text-sm text-teal-700">{statusMessage}</p>
        )}
      </div>
    </aside>
  );
}
