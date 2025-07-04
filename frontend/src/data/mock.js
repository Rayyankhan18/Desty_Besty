// Enhanced mock data for Desty Besty travel discovery app

export const destinations = {
  forest: [
    {
      id: 1,
      title: "Bali Rainforest Retreat",
      category: "FOREST",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      location: "Ubud, Bali",
      rating: 4.9,
      description: "Discover hidden temples among emerald canopies and mystical jungle trails",
      saved: false,
      reviews: 342,
      duration: "3-5 hours",
      difficulty: "Moderate"
    },
    {
      id: 2,
      title: "Kodaikanal Pine Walk",
      category: "FOREST",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      location: "Tamil Nadu, India",
      rating: 4.7,
      description: "Peaceful walks through towering pine forests with mountain views",
      saved: false,
      reviews: 298,
      duration: "2-3 hours",
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Amazon Explorer Trail",
      category: "FOREST",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop",
      location: "Manaus, Brazil",
      rating: 4.8,
      description: "Adventure deep into the world's largest rainforest ecosystem",
      saved: false,
      reviews: 456,
      duration: "Full day",
      difficulty: "Challenging"
    }
  ],
  waterfall: [
    {
      id: 4,
      title: "Dudhsagar Falls",
      category: "WATERFALL",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=300&fit=crop",
      location: "Goa, India",
      rating: 4.8,
      description: "Majestic 310-meter cascade through lush Western Ghats",
      saved: false,
      reviews: 567,
      duration: "4-6 hours",
      difficulty: "Moderate"
    },
    {
      id: 5,
      title: "Skógafoss",
      category: "WATERFALL",
      image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&h=300&fit=crop",
      location: "Iceland",
      rating: 4.9,
      description: "Iconic 60-meter waterfall with rainbow mists and folklore",
      saved: false,
      reviews: 789,
      duration: "2-3 hours",
      difficulty: "Easy"
    },
    {
      id: 6,
      title: "Niagara Falls",
      category: "WATERFALL",
      image: "https://images.unsplash.com/photo-1605538883669-825200433431?w=400&h=300&fit=crop",
      location: "New York, USA",
      rating: 4.6,
      description: "World-famous thundering waters at the border of two nations",
      saved: false,
      reviews: 1234,
      duration: "Half day",
      difficulty: "Easy"
    }
  ],
  mountain: [
    {
      id: 7,
      title: "Himalayan Sunrise Trek",
      category: "MOUNTAIN",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      location: "Nepal",
      rating: 4.9,
      description: "Witness golden peaks at dawn from the roof of the world",
      saved: false,
      reviews: 445,
      duration: "Multi-day",
      difficulty: "Expert"
    },
    {
      id: 8,
      title: "Alpine Meadows Trail",
      category: "MOUNTAIN",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop",
      location: "Swiss Alps",
      rating: 4.8,
      description: "Wildflower meadows with pristine mountain lake reflections",
      saved: false,
      reviews: 367,
      duration: "5-7 hours",
      difficulty: "Moderate"
    }
  ]
};

export const categories = [
  { id: 'ALL', name: 'All Destinations', icon: '🌍' },
  { id: 'FOREST', name: 'Forest Trails', icon: '🌲' },
  { id: 'WATERFALL', name: 'Waterfalls', icon: '💧' },
  { id: 'MOUNTAIN', name: 'Mountain Peaks', icon: '🏔️' }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    location: "Vancouver, BC",
    rating: 5,
    text: "Desty Besty transformed my weekend hikes into epic adventures. The hidden gem recommendations are absolutely perfect - found places I never knew existed just 2 hours from home!",
    destination: "Bali Rainforest Retreat",
    verified: true
  },
  {
    id: 2,
    name: "Marcus Thompson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    location: "Portland, OR",
    rating: 5,
    text: "The waterfall routes are phenomenal. Every trail feels like a journey to another world. My camera roll has never looked better, and neither has my soul.",
    destination: "Skógafoss Waterfall",
    verified: true
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    location: "San Francisco, CA", 
    rating: 5,
    text: "From sunrise mountain peaks to mystical forest paths - this app has become my adventure compass. The community recommendations feel like secrets shared between friends.",
    destination: "Himalayan Sunrise Trek",
    verified: true
  }
];

export const mockUserLocation = {
  city: "Bengaluru",
  country: "India",
  nearbyDestinations: [
    { name: "Nandi Hills Sunrise", distance: "60 km", category: "MOUNTAIN", rating: 4.5 },
    { name: "Chikballapur Trek", distance: "45 km", category: "MOUNTAIN", rating: 4.3 },
    { name: "Savandurga Hills", distance: "50 km", category: "MOUNTAIN", rating: 4.6 },
    { name: "Ramanagara Rocks", distance: "55 km", category: "MOUNTAIN", rating: 4.4 }
  ]
};

export const appStats = {
  totalDestinations: "10,000+",
  activeUsers: "250K+",
  countriesSupported: "50+",
  avgRating: "4.8",
  totalReviews: "1.2M+"
};

export const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/destybesty", icon: "📸" },
  { name: "Twitter", url: "https://twitter.com/destybesty", icon: "🐦" },
  { name: "Facebook", url: "https://facebook.com/destybesty", icon: "📘" },
  { name: "YouTube", url: "https://youtube.com/destybesty", icon: "📺" }
];