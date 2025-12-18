"use client";

import { useProfileStore } from "@/store/profilestore";
import PersonalInformation from "@/components/profile/PersonalInformation";
import ContactInformation from "@/components/profile/ContactInformation";
import TravelPreferences from "@/components/profile/TravelPreferences";
import SocialMedia from "@/components/profile/SocialMedia";
import EmergencyContact from "@/components/profile/EmergencyContact";

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
