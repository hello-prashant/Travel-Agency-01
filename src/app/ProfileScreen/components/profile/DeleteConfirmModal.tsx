"use client";

import React from "react";

interface Props {
  show: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteConfirmModal({
  show,
  onConfirm,
  onCancel,
}: Props) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h3 className="text-lg font-semibold">Delete Profile?</h3>
        <p className="text-sm text-gray-600 mt-2">
          Are you sure you want to delete? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-2 mt-4">
          <button className="px-4 py-2 border rounded" onClick={onCancel}>
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
