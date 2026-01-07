import { create } from "zustand";

interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  travelStyles: string[];
  categories: string[];
  languages: string[];
  emergencyName: string;
  emergencyPhone: string;
  profilePhoto: string | null;
  aboutMe: string;
  dateOfBirth: string;
  gender: string;
  occupation: string;
  rating: number;
  reviews: number;
  tripsCompleted: number;
  // Add any other fields you used
}

interface ProfileStore {
  profile: Profile;
  updateProfile: (updated: Profile) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: {
    name: "Sarah Anderson",
    firstName: "Sarah",
    lastName: "Anderson",
    email: "sarah@email.com",
    verified: true,
    phone: "+1 234 5678",
    city: "San Francisco",
    travelStyles: ["Adventure", "Relaxation", "Photography"],
    categories: ["Asia", "Europe", "French", "German", "Italian"],
    languages: ["English", "French"],
    emergencyName: "John",
    emergencyPhone: "9999999999",
    profilePhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    aboutMe: 'Passionate traveler seeking adventure and authentic cultural experiences. Love hiking, photography, and trying local cuisine.',
    dateOfBirth: '1995-06-15',
    gender: 'Female',
    instagram: '@sarahtravel',
    facebook: 'sarah.anderson',
    occupation: 'Digital Marketing Specialist',
    rating: 4.9,
  reviews: 234,
  tripsCompleted: 27,
  },

  // THIS is what your code was missing
  updateProfile: (updated) => set({ profile: updated }),
}));
