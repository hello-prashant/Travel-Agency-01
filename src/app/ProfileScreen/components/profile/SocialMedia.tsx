"use client";

import React from "react";
import { Instagram, Facebook } from 'lucide-react';

interface Props {
  edited: any;
  setEdited: (p: any) => void;
  readOnly?: boolean;
}

export default function SocialMedia({ edited, setEdited, readOnly}: any) {
  return (
    <div className="bg-white p-6 rounded shadow space-y-6 text-gray-600">
      <h3 className="font-bold text-gray-800 text-2xl">Social Media & Websites</h3>
       {readOnly ? (
        <>
        <div className="flex items-center gap-3">
          <Instagram className="w-5 h-5 text-gray-900" />
          <p className="text-xl text-gray-700">Instagram: {edited.instagram}</p>
          </div>
          <div className="flex items-center gap-3">
          <Facebook className="w-5 h-5 text-gray-900" />
          <p className="text-xl text-gray-700">Facebook: {edited.facebook}</p>
          </div>
        </>
      ) : (

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          value={edited.instagram}
          onChange={(e) => setEdited({ ...edited, instagram: e.target.value })}
          className="border p-2 rounded text-gray-600"
          placeholder="Instagram"
        />

        <input
          value={edited.facebook}
          onChange={(e) => setEdited({ ...edited, facebook: e.target.value })}
          className="border p-2 rounded text-gray-600"
          placeholder="Facebook"
        />
      </div>
      )}
    </div>
  );
}
