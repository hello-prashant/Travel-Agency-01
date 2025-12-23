"use client";

import React from "react";
import {Phone } from 'lucide-react';

interface Props {
  edited: any;
  setEdited: (p: any) => void;
  readOnly?: boolean;
}

export default function EmergencyContact({ edited, setEdited, readOnly }: any) {
  return (
    <div className="bg-white p-6 rounded shadow space-y-6">
      <h3 className="font-bold text-gray-800 text-2xl">Emergency Contact</h3>
      {readOnly ? (
        <>
          <p className="text-gray-700 pl-7 text-lg">Contact Name: {edited.emergencyName}</p>
          <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-gray-900" />
          <p className="text-gray-600 text-lg">Contact Phone: {edited.emergencyPhone}</p>
          </div>
        </>
      ) : (

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          value={edited.emergencyName}
          onChange={(e) =>
            setEdited({ ...edited, emergencyName: e.target.value })
          }
          className="border p-2 rounded text-gray-600"
          placeholder="Name"
        />

        <input
          value={edited.emergencyPhone}
          onChange={(e) =>
            setEdited({ ...edited, emergencyPhone: e.target.value })
          }
          className="border p-2 rounded text-gray-600"
          placeholder="Phone"
        />
      </div>
      )}
    </div>
  );
}
