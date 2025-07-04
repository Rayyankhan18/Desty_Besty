import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import ScrollSection from './components/ScrollSection';
import DestinationCard from './components/DestinationCard';
import CategoryFilter from './components/CategoryFilter';
import TestimonialCard from './components/TestimonialCard';
import Footer from './components/Footer';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';

// Data
import { destinations, testimonials, mockUserLocation, appStats, categories } from './data/mock';

// Icons
import { 
  MapPin, 
  Download, 
  Star, 
  Users, 
  Globe, 
  Heart, 
  ArrowRight,
  Play,
  Volume2,
  VolumeX,
  Sparkles,
  Camera,
  Bookmark,
  TrendingUp,
  Award
} from 'lucide-react';

const DestyBesty = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [savedDestinations, setSavedDestinations] = useState([]);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Scene images
  const sceneImages = {
    hero: 'https://images.pexels.com/photos/32821869/pexels-photo-32821869.jpeg',
    forest: 'https://images.unsplash.com/photo-1692997369886-662abdec64fb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBwYXRoJTIwc3VubGlnaHR8ZW58MHx8fHwxNzUxNjI2OTA4fDA&ixlib=rb-4.1.0&q=85',
    waterfall: 'https://images.pexels.com/photos/32843975/pexels-photo-32843975.jpeg',
    mountain: 'https://images.pexels.com/photos/17690961/pexels-photo-17690961.jpeg',
    stargazing: 'https://images.pexels.com/photos/18646435/pexels-photo-18646435.jpeg'
  };

  // Get all destinations as flat array
  const allDestinations = [
    ...destinations.forest,
    ...destinations.waterfall,
    ...destinations.mountain
  ];

  // Filter destinations based on category
  const getFilteredDestinations = (category) => {
    if (category === 'ALL') return allDestinations;
    return allDestinations.filter(dest => dest.category === category);
  };

  const filteredDestinations = getFilteredDestinations(selectedCategory);

  // Handle destination save
  const handleSaveDestination = (id, saved) => {
    if (saved) {
      setSavedDestinations(prev => [...prev, id]);
    } else {
      setSavedDestinations(prev => prev.filter(destId => destId !== id));
    }
  };

  // Handle destination view
  const handleViewDestination = (destination) => {
    setSelectedDestination(destination);
    // In a real app, this would open a detailed view
    console.log('Viewing destination:', destination);
  };

  // Handle location finder
  const handleFindNearbyTrails = () => {
    setShowLocationModal(true);
    // Simulate location detection
    setTimeout(() => {
      setShowLocationModal(false);
      // In a real app, this would show actual nearby locations
    }, 3000);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Simulate loading - shorter delay for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mb-4"></div>
          <p className="text-white text-xl font-medium">Loading your adventure...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Audio Toggle */}
      <Button
        className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
        size="sm"
        onClick={() => setIsAudioEnabled(!isAudioEnabled)}
      >
        {isAudioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </Button>

      {/* Scene 1: Hero/Trailhead */}
      <ScrollSection
        id="hero"
        backgroundImage={sceneImages.hero}
        className="flex items-center justify-center"
        parallaxSpeed={0.3}
      >
        <div className="text-center max-w-4xl mx-auto px-6">
          <div className="animate-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Your Next
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Destination
              </span>
              Awaits
            </h1>
          </div>
          
          <div className="animate-in">
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover hidden gems, save unforgettable places, and let wanderlust guide your journey
            </p>
          </div>
          
          <div className="animate-in flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('forest').scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Explore Now
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              onClick={handleFindNearbyTrails}
            >
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>
        </div>
      </ScrollSection>

      {/* Scene 2: Forest/Destinations */}
      <ScrollSection
        id="forest"
        backgroundImage={sceneImages.forest}
        className="flex items-center"
        parallaxSpeed={0.4}
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="animate-in text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Perfect Trail
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From ancient forests to crystal lakes, find destinations that match your adventurous spirit
            </p>
          </div>
          
          <div className="animate-in">
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
          
          <div className="animate-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onSave={handleSaveDestination}
                onView={handleViewDestination}
              />
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Scene 3: Waterfall/Save Feature */}
      <ScrollSection
        id="waterfall"
        backgroundImage={sceneImages.waterfall}
        className="flex items-center"
        parallaxSpeed={0.5}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-in">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Save
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Unforgettable
              </span>
              Places
            </h2>
          </div>
          
          <div className="animate-in">
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Create your personal collection of dream destinations. Never lose track of that perfect spot again.
            </p>
          </div>
          
          <div className="animate-in grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Save Favorites</h3>
                <p className="text-white/70">Bookmark places that capture your heart</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Plan Routes</h3>
                <p className="text-white/70">Create the perfect adventure itinerary</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Share Adventures</h3>
                <p className="text-white/70">Connect with fellow explorers</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handleFindNearbyTrails}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Find Trails Near You
            </Button>
          </div>
        </div>
      </ScrollSection>

      {/* Scene 4: Mountain/Testimonials */}
      <ScrollSection
        id="mountain"
        backgroundImage={sceneImages.mountain}
        className="flex items-center"
        parallaxSpeed={0.3}
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="animate-in text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Stories from
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                Fellow Explorers
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join thousands of adventurers who've discovered their next favorite destination
            </p>
          </div>
          
          <div className="animate-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="animate-in grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{appStats.totalDestinations}</div>
              <div className="text-white/70">Destinations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{appStats.activeUsers}</div>
              <div className="text-white/70">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{appStats.countriesSupported}</div>
              <div className="text-white/70">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{appStats.avgRating}</div>
              <div className="text-white/70">Avg Rating</div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Scene 5: Stargazing/Final CTA */}
      <ScrollSection
        id="stargazing"
        backgroundImage={sceneImages.stargazing}
        className="flex items-center"
        parallaxSpeed={0.2}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-in">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Begin Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Journey
              </span>
              Tonight
            </h2>
          </div>
          
          <div className="animate-in">
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Under the stars, every trail becomes a story. Every destination becomes a memory. 
              Your adventure starts with a single tap.
            </p>
          </div>
          
          <div className="animate-in flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handleFindNearbyTrails}
            >
              <Play className="mr-2 h-5 w-5" />
              Start Exploring
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              onClick={handleFindNearbyTrails}
            >
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>
          
          <div className="animate-in flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on App Store" 
                className="h-12 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-2">
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play" 
                className="h-12 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
              />
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Location Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-md mx-4">
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold text-white mb-2">Finding trails near you...</h3>
              <p className="text-white/70 mb-4">Discovering amazing destinations in {mockUserLocation.city}</p>
              <div className="space-y-2">
                {mockUserLocation.nearbyDestinations.map((dest, index) => (
                  <div key={index} className="flex justify-between items-center text-white/80">
                    <span>{dest.name}</span>
                    <Badge variant="outline" className="text-white/70 border-white/30">
                      {dest.distance}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DestyBesty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;