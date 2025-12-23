"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProfileStore } from "@/app/ProfileScreen/data/store/profilestore";
import ProfileHeader from "@/app/ProfileScreen/components/profile/ProfileHeader";
import TabNavigation from "@/app/ProfileScreen/components/profile/ProfileTabs";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const { profile } = useProfileStore();
  const pathname = usePathname();
  const hideHeader = pathname === "/ProfileScreen/Profile/edit";

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-dvw mx-auto space-y-6">

        {/* FIXED PROFILE HEADER */}
        {!hideHeader && (
          <>
            <ProfileHeader edited={profile} readOnly />
            <TabNavigation />
          </>
        )}

        {/* FIXED TAB BAR */}
        {/* <div className="flex mx-auto justify-evenly gap-6 bg-gray-100 text-gray-600">
          <Link href="/ProfileScreen" className="px-4 py-2 rounded-md transition hover:text-black hover:bg-white">Details</Link>
          <Link href="/ProfileScreen/trips" className="px-4 py-2 rounded-md transition hover:text-black hover:bg-white">My Trips</Link>
          <Link href="/ProfileScreen/reviews" className="px-4 py-2 rounded-md transition hover:text-black hover:bg-white">Reviews</Link>
          <Link href="/ProfileScreen/gallery" className="px-4 py-2 rounded-md transition hover:text-black hover:bg-white">Gallery</Link>
        </div> */}

        {/* THIS CHANGES WHEN YOU CLICK A TAB */}
        <div className="mt-6">{children}</div>

      </div>
    </div>
  );
}
