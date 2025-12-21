"use client";

import React from "react";

function Info({ label, value }: any) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value || "-"}</p>
    </div>
  );
}

interface Props {
  edited: any;
  setEdited: (p: any) => void;
  readOnly?: boolean;
}

export default function PersonalInformation({ edited, setEdited, readOnly }: any) {
  return (
    <div className="bg-white p-6 rounded shadow space-y-6">
      <h3 className="font-bold text-gray-800 text-xl">Personal Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
        {readOnly ? (
          <>
            <Info label="First Name" value={edited.firstName} />
            <Info label="Last Name" value={edited.lastName} />
            <Info label="Gender" value={edited.gender} />
            <Info label="Occupation" value={edited.occupation} />
          </>
        ) : (
          <>
        <input
          className="border p-2 rounded text-gray-600"
          placeholder="First Name"
          value={edited.firstName}
          onChange={(e) =>
            setEdited({ ...edited, firstName: e.target.value })
          }
        />

        <input
          className="border p-2 rounded text-gray-600"
          placeholder="Last Name"
          value={edited.lastName}
          onChange={(e) =>
            setEdited({ ...edited, lastName: e.target.value })
          }
        />

        <input
          type="date"
          className="border p-2 rounded text-gray-600"
          value={edited.dateOfBirth}
          onChange={(e) =>
            setEdited({ ...edited, dateOfBirth: e.target.value })
          }
        />

        <select
          className="border p-2 rounded text-gray-600"
          value={edited.gender}
          onChange={(e) =>
            setEdited({ ...edited, gender: e.target.value })
          }
        >
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>
        </select>

        <input
          className="border p-2 rounded text-gray-600"
          placeholder="Occupation"
          value={edited.occupation}
          onChange={(e) =>
            setEdited({ ...edited, occupation: e.target.value })
          }
        />

        <input
          className="border p-2 rounded text-gray-600"
          placeholder="Profile Photo URL"
          value={edited.profilePhoto ?? ""}
          onChange={(e) =>
            setEdited({ ...edited, profilePhoto: e.target.value })
          }
        />

        <textarea
          className="col-span-full border p-2 rounded text-gray-600"
          placeholder="About Me"
          value={edited.aboutMe}
          onChange={(e) =>
            setEdited({ ...edited, aboutMe: e.target.value })
          }
        />
        </>
        )}
      </div>
    </div>
  );
}
