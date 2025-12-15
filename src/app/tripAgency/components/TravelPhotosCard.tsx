export default function TravelPhotosCard() {
  const photos = [
    '/trip-photo-1.jpg',
    '/trip-photo-2.jpeg',
    '/trip-photo-3.jpg',
    '/trip-photo-1.jpg',
    '/trip-photo-2.jpeg',
    '/trip-photo-3.jpg',
    '/trip-photo-2.jpeg',
    '/trip-photo-3.jpg',
  ]
  return (
    <div className="w-full h-full grid grid-cols-3 gap-2 auto-cols-fr">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="w-full h-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
      ))}
    </div>
  )
}
