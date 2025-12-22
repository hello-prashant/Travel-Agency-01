import { useState, useMemo } from "react";
import { bestMatchData } from "../data/bestMatch";
import { TravelScope } from "../types";

export function useTripFilters() {
  const [destination, setDestination] = useState("");
  const [travelScope, setTravelScope] = useState<TravelScope>("Locals");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([
    "English",
  ]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [compatibility, setCompatibility] = useState<number | null>(null);
  const [safeScore, setSafeScore] = useState<number | null>(null);
  const [selectedTripTypes, setSelectedTripTypes] = useState<string[]>([]);
  const [selectedFood, setSelectedFood] = useState<string[]>([]);
  const [durationMax, setDurationMax] = useState(5);
  const [isDurationActive, setIsDurationActive] = useState(false);
  const [agePreference, setAgePreference] = useState(18);
  const [isAgeActive, setIsAgeActive] = useState(false);
  const [budget, setBudget] = useState(15000);
  const [isBudgetActive, setIsBudgetActive] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const normalizedDestination = destination.trim().toLowerCase();

  const filteredTrips = useMemo(() => {
    return bestMatchData.filter((trip) => {
      const info = trip.information;

      const matchesCategory =
        activeCategory === "All" ||
        info.tags?.some((tag) => tag === activeCategory);

      const destinationTarget =
        travelScope === "Nearby"
          ? info.toLocation.toLowerCase()
          : travelScope === "Starting point"
          ? info.fromLocation.toLowerCase()
          : `${info.fromLocation} ${info.toLocation}`.toLowerCase();

      const matchesDestination =
        !normalizedDestination ||
        destinationTarget.includes(normalizedDestination);

      const matchesLanguages =
        selectedLanguages.length === 0 ||
        selectedLanguages.every((lang) =>
          info.languages?.some(
            (tripLang) => tripLang.toLowerCase() === lang.toLowerCase()
          )
        );

      const matchesInterests =
        selectedInterests.length === 0 ||
        selectedInterests.every((interest) =>
          info.interests?.some(
            (tripInterest) =>
              tripInterest.toLowerCase() === interest.toLowerCase()
          )
        );

      const matchesRating = rating ? (info.rating ?? 0) >= rating : true;
      const matchesCompatibility = compatibility
        ? (info.compatibility ?? 0) >= compatibility
        : true;
      const matchesSafeScore = safeScore
        ? (info.safeScore ?? 0) >= safeScore
        : true;

      const matchesTripType =
        selectedTripTypes.length === 0 ||
        selectedTripTypes.some((type) => info.tripTypes?.includes(type));

      const matchesFood =
        selectedFood.length === 0 ||
        selectedFood.every((food) => info.foodPreferences?.includes(food));

      const matchesDuration = isDurationActive
        ? (info.durationDays ?? 0) <= durationMax
        : true;

      const matchesAge =
        isAgeActive && info.ageRange
          ? agePreference >= info.ageRange[0] &&
            agePreference <= info.ageRange[1]
          : !isAgeActive;

      const matchesBudget = isBudgetActive
        ? (info.budget ?? Infinity) <= budget
        : true;

      return (
        matchesCategory &&
        matchesDestination &&
        matchesLanguages &&
        matchesInterests &&
        matchesRating &&
        matchesCompatibility &&
        matchesSafeScore &&
        matchesTripType &&
        matchesFood &&
        matchesDuration &&
        matchesAge &&
        matchesBudget
      );
    });
  }, [
    activeCategory,
    agePreference,
    budget,
    compatibility,
    destination,
    durationMax,
    isAgeActive,
    isBudgetActive,
    isDurationActive,
    normalizedDestination,
    rating,
    safeScore,
    selectedFood,
    selectedInterests,
    selectedLanguages,
    selectedTripTypes,
    travelScope,
  ]);

  const handleClearFilters = () => {
    setDestination("");
    setTravelScope("Locals");
    setSelectedLanguages(["English"]);
    setSelectedInterests([]);
    setRating(null);
    setCompatibility(null);
    setSafeScore(null);
    setSelectedTripTypes([]);
    setSelectedFood([]);
    setDurationMax(5);
    setIsDurationActive(false);
    setAgePreference(18);
    setIsAgeActive(false);
    setBudget(15000);
    setIsBudgetActive(false);
    setActiveCategory("All");
  };

  return {
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
    activeCategory,
    setActiveCategory,
    filteredTrips,
    handleClearFilters,
  };
}
