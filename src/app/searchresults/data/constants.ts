export const travelScopes = ["Locals", "Nearby", "Starting point"] as const;

export const categories = [
  "Trending",
  "All",
  "Best Match",
  "Similar Trips",
  "Featured Trip Agency",
  "Featured Trip Leader",
];

export const tripTypeOptions = ["Solo", "Couple", "Family", "Group"];
export const foodOptions = ["Vegetarian", "Non-Veg", "Vegan", "Halal"];
export const compatibilityOptions = [90, 80, 70, 60, 50];
export const safeScoreOptions = [90, 80, 70, 60, 50];

export const collapsibleSectionLabels = {
  rating: "Rating",
  compatibility: "Compatibility",
  safeScore: "Safe Score",
  tripType: "Trip Type",
  foodPreference: "Food Preference",
} as const;
