"use client";

import { useProfileStore } from "@/app/ProfileScreen/data/store/profilestore";
import PersonalInformation from "@/app/ProfileScreen/components/profile/PersonalInformation";
import ContactInformation from "@/app/ProfileScreen/components/profile/ContactInformation";
import TravelPreferences from "@/app/ProfileScreen/components/profile/TravelPreferences";
import SocialMedia from "@/app/ProfileScreen/components/profile/SocialMedia";
import EmergencyContact from "@/app/ProfileScreen/components/profile/EmergencyContact";

export default function DetailsPage() {
  const { profile } = useProfileStore();

  return (
    <div className="space-y-6">
      <PersonalInformation edited={profile} readOnly={true} />
      <ContactInformation edited={profile} readOnly={true} />
      <TravelPreferences edited={profile} readOnly={true} />
      <SocialMedia edited={profile} readOnly={true} />
      <EmergencyContact edited={profile} readOnly={true} />
    </div>
  );
}
