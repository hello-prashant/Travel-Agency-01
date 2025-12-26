'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from "clsx";

export default function TabNavigation() {
  const pathname = usePathname();
  
  const tabs = [
  { label: "Details", path: "/ProfileScreen" },
  { label: "My Trips", path: "/ProfileScreen/trips" },
  { label: "Reviews", path: "/ProfileScreen/reviews" },
  { label: "Gallery", path: "/ProfileScreen/gallery" },
];

  const isActive = (href: string) => {
    if (href === '/ProfileScreen') {
      return pathname === '/ProfileScreen';
    }
    return pathname === href;
  };

   return (
    <div className="bg-gray-100 border-b">
      <div className="flex justify-evenly mx-auto px-4 gap-6 text-gray-600">
        {tabs.map((tab) => {
          const isActive =
            tab.path === "/ProfileScreen"
              ? pathname === "/ProfileScreen"
              : pathname.startsWith(tab.path);

          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={clsx(
                "px-35 py-2 rounded-md transition",
                "hover:bg-white hover:text-black",
                isActive && "bg-white text-black"
              )}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}