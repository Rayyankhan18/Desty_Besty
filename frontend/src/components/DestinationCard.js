import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Heart, MapPin, Star, Eye } from 'lucide-react';

const DestinationCard = ({ destination, onSave, onView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(destination.saved);

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave(destination.id, !isSaved);
  };

  const getCategoryColor = (category) => {
    const colors = {
      FOREST: 'bg-green-500/80 text-white',
      LAKE: 'bg-blue-500/80 text-white',
      DAM: 'bg-cyan-500/80 text-white',
      MUSEUM: 'bg-purple-500/80 text-white'
    };
    return colors[category] || 'bg-gray-500/80 text-white';
  };

  return (
    <Card 
      className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onView(destination)}
    >
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <img 
            src={destination.image} 
            alt={destination.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        {/* Category Badge */}
        <Badge 
          className={`absolute top-3 left-3 ${getCategoryColor(destination.category)} border-0 shadow-lg`}
        >
          {destination.category}
        </Badge>
        
        {/* Save Button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            handleSave();
          }}
        >
          <Heart 
            className={`h-4 w-4 transition-all duration-300 ${
              isSaved ? 'fill-red-500 text-red-500' : 'text-white'
            }`} 
          />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-white mb-1 group-hover:text-blue-300 transition-colors">
              {destination.title}
            </h3>
            <div className="flex items-center text-white/70 text-sm">
              <MapPin className="h-3 w-3 mr-1" />
              {destination.location}
            </div>
          </div>
          
          <p className="text-white/80 text-sm line-clamp-2">
            {destination.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-white font-medium">{destination.rating}</span>
              <span className="text-white/60 text-sm">({destination.reviews})</span>
            </div>
            
            <Button 
              size="sm" 
              variant="ghost" 
              className="text-blue-300 hover:text-blue-200 hover:bg-blue-500/20 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                onView(destination);
              }}
            >
              <Eye className="h-4 w-4 mr-1" />
              View
            </Button>
          </div>
        </div>
      </CardContent>
      
      {/* Hover glow effect */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg blur-xl" />
      </div>
    </Card>
  );
};

export default DestinationCard;