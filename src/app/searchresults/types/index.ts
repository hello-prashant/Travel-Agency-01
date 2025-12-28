export interface TripInformation {
  heading: string;
  description: string;
  activities: string[];
  fromLocation: string;
  toLocation: string;
  date: string;
  pricePerPerson: string;
  count: number;
  matchPercentage: number;
  spotsAvailable: number;
  languages?: string[];
  interests?: string[];
  rating?: number;
  compatibility?: number;
  safeScore?: number;
  tripTypes?: string[];
  foodPreferences?: string[];
  durationDays?: number;
  ageRange?: number[];
  budget?: number;
  tags?: string[];
}

export interface Trip {
  imageSrc: string;
  information: TripInformation;
}

export type TravelScope = "Locals" | "Nearby" | "Starting point";

export interface FilterProps {
  destination: string;
  setDestination: (value: string) => void;
  travelScope: TravelScope;
  setTravelScope: (value: TravelScope) => void;
  languageInput: string;
  setLanguageInput: (value: string) => void;
  selectedLanguages: string[];
  setSelectedLanguages: (value: string[] | ((prev: string[]) => string[])) => void; // Allow functional updates
  interestInput: string;
  setInterestInput: (value: string) => void;
  selectedInterests: string[];
  setSelectedInterests: (value: string[] | ((prev: string[]) => string[])) => void;
  rating: number | null;
  setRating: (value: number | null) => void;
  compatibility: number | null;
  setCompatibility: (value: number | null) => void;
  safeScore: number | null;
  setSafeScore: (value: number | null) => void;
  selectedTripTypes: string[];
  setSelectedTripTypes: (value: string[] | ((prev: string[]) => string[])) => void;
  selectedFood: string[];
  setSelectedFood: (value: string[] | ((prev: string[]) => string[])) => void;
  durationMax: number;
  setDurationMax: (value: number) => void;
  setIsDurationActive: (value: boolean) => void;
  agePreference: number;
  setAgePreference: (value: number) => void;
  setIsAgeActive: (value: boolean) => void;
  budget: number;
  setBudget: (value: number) => void;
  setIsBudgetActive: (value: boolean) => void;
  handleApplyFilters: () => void;
  handleClearFilters: () => void;
  statusMessage: string | null;
  handleAddLanguage: () => void;
  handleAddInterest: () => void;
  removeChip: (value: string, list: string[], setter: (values: string[]) => void) => void;
  toggleSelection: (value: string, list: string[], setter: (values: string[]) => void) => void;
}

export interface TripLeaderCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  locations: string[];
  location1: string;
  location2: string;
  dates: string;
  price: number;
  tripsCompleted: number;
  matchPercentage: number;
  spotsLeft: number;
  leaderName: string;
  leaderAge: number;
  leaderLocation: string;
  leaderRating: number;
  leaderImage: string;
  salePercentage?: number;
}

export interface TripHost {
  name: string;
  age: number;
  initials: string;
  location: string;
  rating: number;
  badge: string;
  safetyScore: number;
  verified: boolean;
}

export interface SimilarTripCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  origin: string;
  destination: string;
  dates: string;
  price: string;
  tripsCompleted: number;
  matchPercent: number;
  spotsLeft: number;
  host: TripHost;
  isFavorite?: boolean;
}
