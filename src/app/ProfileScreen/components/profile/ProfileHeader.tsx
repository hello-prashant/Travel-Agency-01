"use client";
import Link from "next/link"
import React, { useRef } from "react";
import { X, Check, Star, MapPin } from "lucide-react";

interface Props {
  edited: any;
  setEdited?: (p: any) => void;
  readOnly?: boolean; // true = view mode, false = edit mode
  onSave?: () => void;
  onCancel?: () => void;
}

export default function ProfileHeader({
  edited,
  setEdited,
  readOnly = true,
  onSave,
  onCancel,
}: Props) {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const safe = (v: any) => v ?? "";

  return (
    <div className="bg-white shadow rounded-lg p-6 space-y-4">

      {/* TOP ROW: PROFILE IMAGE + DETAILS + BUTTONS */}
      <div className="flex items-start justify-between gap-4">

        {/* Left Section */}
        <div className="flex gap-4">
          {/* Avatar */}
          <div
            className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center cursor-pointer"
            onClick={() => !readOnly && fileRef.current?.click()}
          >
            {edited.profilePhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={edited.profilePhoto}
                alt="profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-2xl text-gray-600">
                {safe(edited.firstName).charAt(0)}
                {safe(edited.lastName).charAt(0)}
              </span>
            )}
          </div>

          {/* INFO */}
          <div>
            {/* Name + Verified */}
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-gray-600">
                {safe(edited.firstName)} {safe(edited.lastName)}
              </h2>

              {edited.verified && (
                <span className="flex items-center gap-1 bg-green-700 text-white text-xs px-2 py-0.5 rounded-full">
                  <Check size={12} /> Verified
                </span>
              )}
            </div>

            {/* Location */}
            <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-gray-900"/>
            <p className="text-gray-500 text-sm">{safe(edited.city)}</p>
            

            {/* RATING */}
            <div className="flex items-center gap-2 ml-3 mt-0.5 text-sm text-gray-600">
              <Star size={16} fill="gold" color="gold" />
              <span>
                {edited.rating} ({edited.reviews} reviews)
              </span>
            </div>
            </div>
            <div className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                98% Safe Traveler
            </div>
          </div>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex gap-3">

          {/* VIEW MODE: SHOW "EDIT" BUTTON */}
          {readOnly && (
            <Link href="/ProfileScreen/Profile/edit"
              className="px-5 py-2 rounded-md bg-[#1d4350] text-white hover:bg-[#1d4357] transition"
              onClick={onSave}
            >
              Edit Profile
            </Link>
          )}

          {/* EDIT MODE: SHOW Cancel + Save */}
          {!readOnly && (
            <>
              <button
                className="px-5 py-2 flex gap-2 rounded-md border text-[#1d4350] border-[#1d4350] hover:bg-gray-200 transition"
                onClick={onCancel}
              >
                <X size={25}/>
                Cancel
              </button>

              <button
                className="px-5 py-2 gap-2 flex rounded-md bg-[#1d4350] text-white hover:bg-[#1d4357] transition"
                onClick={onSave}
              >
                <Check size={25}/>
                Save
              </button>
            </>
          )}
        </div>

        {/* HIDDEN FILE INPUT */}
        <input
          type="file"
          ref={fileRef}
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (!setEdited || !e.target.files) return;
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (ev) => {
              setEdited({
                ...edited,
                profilePhoto: ev.target?.result,
              });
            };
            reader.readAsDataURL(file);
          }}
        />
      </div>

      {/* BIO */}
      <p className="text-lg text-gray-700 max-w-full pl-22">
        {safe(edited.aboutMe)}
      </p>

    </div>
  );
}
