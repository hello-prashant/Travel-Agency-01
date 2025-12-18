"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useProfileStore } from "@/store/profilestore";

import ProfileHeader from "@/components/profile/ProfileHeader";
import PersonalInformation from "@/components/profile/PersonalInformation";
import ContactInformation from "@/components/profile/ContactInformation";
import TravelPreferences from "@/components/profile/TravelPreferences";
import SocialMedia from "@/components/profile/SocialMedia";
import EmergencyContact from "@/components/profile/EmergencyContact";

export default function EditProfilePage() {
    const router = useRouter();
  const { profile, updateProfile } = useProfileStore();
  const [edited, setEdited] = useState({ ...profile });

  const save = () => {
    updateProfile(edited);
    alert("Profile updated!");
    router.push("/ProfileScreen");
  };
  const cancel = () => {
    // Just go back without saving
    router.push("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* HEADER (edit mode) */}
        <ProfileHeader edited={edited} setEdited={setEdited} readOnly={false} onSave={save} onCancel={cancel} />

        {/* SECTIONS */}
        <PersonalInformation edited={edited} setEdited={setEdited} readOnly={false} />
        <ContactInformation edited={edited} setEdited={setEdited} readOnly={false} />
        <TravelPreferences edited={edited} setEdited={setEdited} readOnly={false} />
        <SocialMedia edited={edited} setEdited={setEdited} readOnly={false} />
        <EmergencyContact edited={edited} setEdited={setEdited} readOnly={false} />

        {/* SAVE BUTTON */}
        <button
          onClick={save}
          className="w-full py-3 bg-[#1d4350] text-white rounded-lg hover:bg-[#1d4357] transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}