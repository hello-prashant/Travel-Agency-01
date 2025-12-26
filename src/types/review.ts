const reviews = [
    {
      id: 1,
      name: 'John Davis',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
      tripType: 'Beach Food & Culture Trip',
      comment: "Sarah was an amazing travel companion! She's adventurous, respectful, and always up for trying new experiences. Her photography skills meant we got incredible shots of our trip. Highly recommend traveling with her!",
      tags: ['Adventurous', 'Respectful', 'Fun'],
      date: 'Aug 20 2024',
      rating: 5
    },
    
  {
    "id": 2,
    "name": "Emily Carter",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop",
    "tripType": "Mountain Trek",
    "comment": "She climbed every steep trail with enthusiasm.",
    "tags": ["Trekker", "Brave", "Endurance"],
    "date": "Jul 14 2024",
    "rating": 5
  },
  {
    "id": 3,
    "name": "Michael Brown",
    "avatar": "https://images.unsplash.com/photo-1546456073-6712f79251bb?w=50&h=50&fit=crop",
    "tripType": "Night Jungle Camp",
    "comment": "Fearless during night trails! Loved traveling with him.",
    "tags": ["Fearless", "Explorer", "Survivalist"],
    "date": "Jun 03 2024",
    "rating": 4
  },
  {
    "id": 4,
    "name": "Sophia Adams",
    "avatar": "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=50&h=50&fit=crop",
    "tripType": "Rock Climbing",
    "comment": "Awesome climber with great balance and focus.",
    "tags": ["Climber", "Focused", "Strong"],
    "date": "May 28 2024",
    "rating": 5
  },
  {
    "id": 5,
    "name": "David Wilson",
    "avatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=50&h=50&fit=crop",
    "tripType": "River Rafting",
    "comment": "Handled the toughest rapids like a pro!",
    "tags": ["Thrill-Seeker", "Fearless", "Water-Lover"],
    "date": "Apr 10 2024",
    "rating": 5
  },
  {
    "id": 6,
    "name": "Olivia Martinez",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop",
    "tripType": "Zipline Adventure",
    "comment": "Super calm during high-altitude ziplines.",
    "tags": ["Brave", "Calm", "High-Altitude"],
    "date": "Mar 22 2024",
    "rating": 4
  },
  {
    "id": 7,
    "name": "Daniel Clark",
    "avatar": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=50&h=50&fit=crop",
    "tripType": "Safari Adventure",
    "comment": "Loved his excitement and wildlife knowledge.",
    "tags": ["Explorer", "Wildlife-Lover", "Curious"],
    "date": "Feb 15 2024",
    "rating": 5
  },
  {
    "id": 8,
    "name": "Ava Lewis",
    "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop",
    "tripType": "Bungee Jumping",
    "comment": "No hesitation—jumped first! Pure adrenaline.",
    "tags": ["Daring", "Fearless", "Thrill-Seeker"],
    "date": "Jan 08 2024",
    "rating": 5
  },
  {
    "id": 9,
    "name": "James Walker",
    "avatar": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=50&h=50&fit=crop",
    "tripType": "Paragliding",
    "comment": "Super smooth flyer and enjoyed every moment.",
    "tags": ["High-Altitude", "Calm", "Adventurous"],
    "date": "Dec 12 2023",
    "rating": 4
  },
  {
    "id": 10,
    "name": "Grace Hall",
    "avatar": "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?w=50&h=50&fit=crop",
    "tripType": "Cave Exploration",
    "comment": "Confident even in narrow caves. Amazing partner!",
    "tags": ["Brave", "Explorer", "Calm"],
    "date": "Nov 03 2023",
    "rating": 5
  },

  {
    "id": 11,
    "name": "Benjamin Scott",
    "avatar": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=50&h=50&fit=crop",
    "tripType": "Forest Trek",
    "comment": "Excellent stamina and navigation skills.",
    "tags": ["Navigator", "Trekker", "Endurance"],
    "date": "Oct 21 2023",
    "rating": 5
  },
  {
    "id": 12,
    "name": "Ella King",
    "avatar": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=50&h=50&fit=crop",
    "tripType": "Ski Adventure",
    "comment": "Super fast skier, fearless on slopes.",
    "tags": ["Fast-Learner", "Fearless", "Snow-Lover"],
    "date": "Sep 18 2023",
    "rating": 5
  },
  {
    "id": 13,
    "name": "Henry Young",
    "avatar": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=50&h=50&fit=crop",
    "tripType": "Road Trip Ride",
    "comment": "Great driver and adventure playlist king!",
    "tags": ["Adventurous", "Traveller", "Energetic"],
    "date": "Aug 10 2023",
    "rating": 4
  },
  {
    "id": 14,
    "name": "Chloe Rivera",
    "avatar": "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=50&h=50&fit=crop",
    "tripType": "Island Kayaking",
    "comment": "Strong paddler and enthusiastic explorer.",
    "tags": ["Explorer", "Strong", "Water-Lover"],
    "date": "Jul 25 2023",
    "rating": 5
  },
  {
    "id": 15,
    "name": "Jackson Hill",
    "avatar": "https://images.unsplash.com/photo-1542596594-649edbc13630?w=50&h=50&fit=crop",
    "tripType": "Sand Dune Hiking",
    "comment": "Tough, patient, and unstoppable.",
    "tags": ["Endurance", "Trekker", "Brave"],
    "date": "Jun 14 2023",
    "rating": 4
  },
  {
    "id": 16,
    "name": "Scarlett Baker",
    "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=50&h=50&fit=crop",
    "tripType": "Waterfall Trek",
    "comment": "Always excited and pushing for longer trails.",
    "tags": ["Adventurous", "Energetic", "Nature-Lover"],
    "date": "May 05 2023",
    "rating": 5
  },
  {
    "id": 17,
    "name": "Logan Green",
    "avatar": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=50&h=50&fit=crop",
    "tripType": "Island Exploration",
    "comment": "Great swimmer and excellent explorer.",
    "tags": ["Explorer", "Water-Lover", "Daring"],
    "date": "Apr 30 2023",
    "rating": 5
  },
  {
    "id": 18,
    "name": "Victoria Wright",
    "avatar": "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=50&h=50&fit=crop",
    "tripType": "Night Trek",
    "comment": "Calm and focused even in dark terrains.",
    "tags": ["Night-Explorer", "Calm", "Brave"],
    "date": "Mar 22 2023",
    "rating": 4
  },
  {
    "id": 19,
    "name": "Samuel Lopez",
    "avatar": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=50&h=50&fit=crop",
    "tripType": "Rappelling Adventure",
    "comment": "Strong grip and great control on descents.",
    "tags": ["Strong", "Focused", "Climber"],
    "date": "Feb 11 2023",
    "rating": 5
  },
  {
    "id": 20,
    "name": "Lily Turner",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop",
    "tripType": "Mountain Jeep Ride",
    "comment": "Super fun and fearless during sharp turns.",
    "tags": ["Fearless", "Adventurous", "Thrill-Seeker"],
    "date": "Jan 01 2023",
    "rating": 4
  },

  {
    "id": 21,
    "name": "Nathan Perez",
    "avatar": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=50&h=50&fit=crop",
    "tripType": "ATV Desert Ride",
    "comment": "Handled dunes like a pro!",
    "tags": ["Daring", "Fast-Learner", "Thrill-Seeker"],
    "date": "Dec 20 2022",
    "rating": 5
  },
  {
    "id": 22,
    "name": "Hannah Collins",
    "avatar": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=50&h=50&fit=crop",
    "tripType": "Snow Hike",
    "comment": "Brave and steady in freezing conditions.",
    "tags": ["Brave", "Snow-Lover", "Endurance"],
    "date": "Nov 10 2022",
    "rating": 4
  },
  {
    "id": 23,
    "name": "Christopher Stewart",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop",
    "tripType": "Jungle Survival Camp",
    "comment": "Top-notch survival instincts!",
    "tags": ["Survivalist", "Explorer", "Fearless"],
    "date": "Oct 02 2022",
    "rating": 5
  },
  {
    "id": 24,
    "name": "Zoe Morris",
    "avatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=50&h=50&fit=crop",
    "tripType": "Cliff Walk",
    "comment": "Amazing balance and zero fear of heights.",
    "tags": ["High-Altitude", "Balancing-Pro", "Brave"],
    "date": "Sep 19 2022",
    "rating": 4
  },
  {
    "id": 25,
    "name": "Ethan Rogers",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop",
    "tripType": "Rafting Rapids",
    "comment": "Fearless swimmer and quick decision maker.",
    "tags": ["Water-Lover", "Fast-Learner", "Fearless"],
    "date": "Aug 14 2022",
    "rating": 5
  },
  {
    "id": 26,
    "name": "Aria Foster",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop",
    "tripType": "Sky Cycling",
    "comment": "Balanced, brave, and enjoyed every moment.",
    "tags": ["Brave", "High-Altitude", "Adventurous"],
    "date": "Jul 05 2022",
    "rating": 5
  },
  {
    "id": 27,
    "name": "Leo Russell",
    "avatar": "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=50&h=50&fit=crop",
    "tripType": "High Altitude Trek",
    "comment": "Super fit and enthusiastic.",
    "tags": ["Endurance", "Trekker", "High-Altitude"],
    "date": "Jun 12 2022",
    "rating": 4
  },
  {
    "id": 28,
    "name": "Mila Hughes",
    "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=50&h=50&fit=crop",
    "tripType": "Forest Zipline",
    "comment": "Loved her excitement and bravery.",
    "tags": ["Daring", "Energetic", "Thrill-Seeker"],
    "date": "May 26 2022",
    "rating": 5
  },
  {
    "id": 29,
    "name": "Wyatt Price",
    "avatar": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=50&h=50&fit=crop",
    "tripType": "River Crossing Trek",
    "comment": "Strong grip and fearless attitude.",
    "tags": ["Strong", "Explorer", "Fearless"],
    "date": "Apr 10 2022",
    "rating": 4
  },
  {
    "id": 30,
    "name": "Penelope Barnes",
    "avatar": "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=50&h=50&fit=crop",
    "tripType": "Night Desert Walk",
    "comment": "Calm and confident in challenging terrains.",
    "tags": ["Night-Explorer", "Brave", "Endurance"],
    "date": "Mar 20 2022",
    "rating": 5
  },
  {
    "id": 31,
    "name": "John Davis",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
    "tripType": "Beach Adventure Trip",
    "comment": "Super energetic adventure buddy! Always ready for the next challenge.",
    "tags": ["Adventurous", "Thrill-Seeker", "Energetic"],
    "date": "Aug 20 2024",
    "rating": 5
  }
  ];

  export default reviews;