// types/profile.ts
export type TabType = "details" | "myTrips" | "reviews" | "gallery";

export type Profile = {
  firstName: string;
  lastName: string;
  dateOfBirth: string; // ISO date
  gender: string;
  occupation: string;
  aboutMe: string;
  email: string;
  phone: string;
  city: string;
  instagram: string;
  facebook: string;
  travelStyle: string[]; // tags
  categories: string[]; // languages / regions
  emergencyName: string;
  emergencyPhone: string;
  profilePhoto?: string | null; // base64 data URL or external url
  tripsCompleted?: number;
  rating?: number;
  reviews?: number;
};
