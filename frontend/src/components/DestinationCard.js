import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Heart, MapPin, Star, Eye, Clock, TrendingUp } from 'lucide-react';

const DestinationCard = ({ destination, onSave, onView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(destination.saved);

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave(destination.id, !isSaved);
  };

  const getCategoryColor = (category) => {
    const colors = {
      FOREST: 'bg-emerald-500/90 text-white border-emerald-400/50',
      WATERFALL: 'bg-cyan-500/90 text-white border-cyan-400/50',
      MOUNTAIN: 'bg-indigo-500/90 text-white border-indigo-400/50'
    };
    return colors[category] || 'bg-gray-500/90 text-white border-gray-400/50';
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Easy': 'text-green-400',
      'Moderate': 'text-yellow-400',
      'Challenging': 'text-orange-400',
      'Expert': 'text-red-400'
    };
    return colors[difficulty] || 'text-gray-400';
  };

  return (
    <Card 
      className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-700 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onView(destination)}
    >
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={destination.image} 
            alt={`${destination.title} - ${destination.description}`}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />
        </div>
        
        {/* Category Badge */}
        <Badge 
          className={`absolute top-4 left-4 ${getCategoryColor(destination.category)} backdrop-blur-sm border shadow-lg px-3 py-1 font-medium`}
        >
          {destination.category}
        </Badge>
        
        {/* Save Button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm border-white/20 hover:bg-black/50 transition-all duration-300 p-2"
          onClick={(e) => {
            e.stopPropagation();
            handleSave();
          }}
        >
          <Heart 
            className={`h-4 w-4 transition-all duration-300 ${
              isSaved ? 'fill-red-500 text-red-500 scale-110' : 'text-white hover:text-red-300'
            }`} 
          />
        </Button>

        {/* Difficulty Badge */}
        <div className="absolute bottom-4 left-4">
          <Badge variant="outline" className="bg-black/50 backdrop-blur-sm border-white/20 text-white">
            <TrendingUp className={`h-3 w-3 mr-1 ${getDifficultyColor(destination.difficulty)}`} />
            {destination.difficulty}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 relative">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-1">
              {destination.title}
            </h3>
            <div className="flex items-center text-white/70 text-sm mb-2">
              <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="line-clamp-1">{destination.location}</span>
            </div>
          </div>
          
          <p className="text-white/80 text-sm line-clamp-2 leading-relaxed">
            {destination.description}
          </p>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-white font-semibold">{destination.rating}</span>
              <span className="text-white/60">({destination.reviews})</span>
            </div>
            
            <div className="flex items-center text-white/70">
              <Clock className="h-3 w-3 mr-1" />
              <span className="text-xs">{destination.duration}</span>
            </div>
          </div>
          
          <Button 
            size="sm" 
            variant="ghost" 
            className="w-full text-cyan-300 hover:text-white hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 mt-2"
            onClick={(e) => {
              e.stopPropagation();
              onView(destination);
            }}
          >
            <Eye className="h-4 w-4 mr-2" />
            Explore Details
          </Button>
        </div>
      </CardContent>
      
      {/* Hover glow effect */}
      <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-indigo-500/10 rounded-lg blur-xl transform scale-105" />
      </div>
    </Card>
  );
};

export default DestinationCard;