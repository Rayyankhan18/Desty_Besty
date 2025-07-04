// Mock data for Desty Besty travel discovery app

export const destinations = [
  {
    id: 1,
    title: "Emerald Lake",
    category: "LAKE",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    location: "British Columbia, Canada",
    rating: 4.8,
    description: "Crystal clear waters reflecting towering peaks",
    saved: false,
    reviews: 234
  },
  {
    id: 2,
    title: "Cascade Falls",
    category: "DAM",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=300&fit=crop",
    location: "Oregon, USA",
    rating: 4.6,
    description: "Thundering waters through ancient rocks",
    saved: false,
    reviews: 189
  },
  {
    id: 3,
    title: "Redwood Cathedral",
    category: "FOREST",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    location: "California, USA",
    rating: 4.9,
    description: "Walk among giants in this ancient grove",
    saved: false,
    reviews: 456
  },
  {
    id: 4,
    title: "Art & Nature Museum",
    category: "MUSEUM",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=400&h=300&fit=crop",
    location: "Kyoto, Japan",
    rating: 4.7,
    description: "Where culture meets natural beauty",
    saved: false,
    reviews: 312
  },
  {
    id: 5,
    title: "Mirror Lake",
    category: "LAKE",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    location: "Yosemite, USA",
    rating: 4.8,
    description: "Perfect reflections of granite cliffs",
    saved: false,
    reviews: 567
  },
  {
    id: 6,
    title: "Bamboo Grove",
    category: "FOREST",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=300&fit=crop",
    location: "Arashiyama, Japan",
    rating: 4.6,
    description: "Walk through swaying bamboo corridors",
    saved: false,
    reviews: 678
  }
];

export const categories = [
  { id: 'ALL', name: 'All', icon: '🌍' },
  { id: 'FOREST', name: 'Forest', icon: '🌲' },
  { id: 'LAKE', name: 'Lake', icon: '🏔️' },
  { id: 'DAM', name: 'Waterfall', icon: '💧' },
  { id: 'MUSEUM', name: 'Museum', icon: '🏛️' }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    location: "Vancouver, BC",
    rating: 5,
    text: "Desty Besty helped me discover hidden gems I never knew existed. The app's recommendations are spot-on!",
    destination: "Emerald Lake"
  },
  {
    id: 2,
    name: "Marcus Thompson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    location: "Portland, OR",
    rating: 5,
    text: "Every weekend is now an adventure thanks to this app. The saved destinations feature is a game-changer.",
    destination: "Cascade Falls"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    location: "San Francisco, CA",
    rating: 5,
    text: "The community-driven approach means I'm always discovering places that are actually worth visiting.",
    destination: "Redwood Cathedral"
  }
];

export const mockUserLocation = {
  city: "Bengaluru",
  country: "India",
  nearbyDestinations: [
    { name: "Nandi Hills", distance: "60 km", category: "FOREST" },
    { name: "Chikballapur", distance: "45 km", category: "LAKE" },
    { name: "Savandurga", distance: "50 km", category: "FOREST" },
    { name: "Ramanagara", distance: "55 km", category: "FOREST" }
  ]
};

export const appStats = {
  totalDestinations: "10,000+",
  activeUsers: "250K+",
  countriesSupported: "50+",
  avgRating: "4.8"
};