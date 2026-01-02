"use client";
import Image from "next/image";
import { useState } from "react";
import { Upload } from "lucide-react";

export default function GalleryPage() {
  // Sample gallery images
  const [photos, setPhotos] = useState<string[]>([
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1503891617560-5b8c2e28cbf6?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop'
  ]);

  const [visible, setVisible] = useState(6);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: string[] = [];

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;

      const imageUrl = URL.createObjectURL(file);
      newImages.push(imageUrl);
    });

    setPhotos((prev) => [...newImages, ...prev]);
  };

  return (
    <div className="w-full max-w-6xl mx-auto pb-10">

      {/* Gallery Section */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-700">Travel Gallery</h3>

          <label htmlFor="photo-upload" className="flex items-center gap-2 bg-[#1d4350] text-white px-4 py-2 shadow-sm hover:bg-[#1d4357] cursor-pointer transition-colors">
            <Upload size={16} /> Upload Photo
          </label>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* GRID GALLERY */}
        <div className="grid grid-cols-3 gap-4">
          {photos.slice(0, visible).map((image, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={image}
                alt="Travel Photo"
                width={400}
                height={300}
                className="object-cover h-40 w-full"
              />
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        {visible < photos.length && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisible(visible + 3)}
              className="px-5 py-2 text-[#1d4350]  border-2 border-solid border-[#1d4350] hover:bg-gray-100"
            >
              Load More Photos
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Tab({ name, active = false }: { name: string; active?: boolean }) {
  return (
    <button
      className={`pb-2 text-sm ${
        active
          ? "font-semibold border-b-2 border-black"
          : "text-gray-500 hover:text-black"
      }`}
    >
      {name}
    </button>
  );
}
