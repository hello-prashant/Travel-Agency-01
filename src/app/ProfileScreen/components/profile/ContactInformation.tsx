"use client";

import React from "react";
import { Mail, Phone, Navigation, Instagram, Facebook } from 'lucide-react';

interface Props {
  edited: any;
  setEdited: (p: any) => void;
  readOnly?: boolean;
}

export default function ContactInformation({ edited, setEdited, readOnly }: any) {
  return (
    <div className="bg-white p-6 rounded shadow space-y-6">
      <h3 className="font-bold text-gray-800 text-2xl">Contact Information</h3>

       {readOnly ? (
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-gray-900" />
          <p className="text-xl text-gray-700">Email: {edited.email}</p>
          </div>
          <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-gray-900" />
          <p className="text-xl text-gray-700">Phone: {edited.phone}</p>
          </div>
          <div className="flex items-center gap-3">
          <Navigation className="w-5 h-5 text-gray-900" />
          <p className="text-xl text-gray-700">City: {edited.city}</p>
          </div>
        </div>
      ) : (

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          value={edited.email}
          onChange={(e) => setEdited({ ...edited, email: e.target.value })}
          className="border p-2 text-gray-600"
          placeholder="Email"
        />

        <input
          value={edited.phone}
          onChange={(e) => setEdited({ ...edited, phone: e.target.value })}
          className="border p-2 text-gray-600"
          placeholder="Phone"
        />

        <input
          value={edited.city}
          onChange={(e) => setEdited({ ...edited, city: e.target.value })}
          className="border p-2 text-gray-600"
          placeholder="City"
        />
      </div>
      )}
    </div>
  );
}
