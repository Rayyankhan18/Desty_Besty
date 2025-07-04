import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote, Shield } from 'lucide-react';
import { Badge } from './ui/badge';

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-700 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 h-full">
      <CardContent className="p-8 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <img 
              src={testimonial.avatar} 
              alt={`${testimonial.name} profile picture`}
              className="w-16 h-16 rounded-full object-cover border-2 border-white/20 shadow-lg"
            />
            {testimonial.verified && (
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1">
                <Shield className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
              {testimonial.verified && (
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-white/70 text-sm">{testimonial.location}</p>
            
            <div className="flex items-center gap-1 mt-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative flex-1">
          <Quote className="h-8 w-8 text-white/20 absolute -top-2 -left-2" />
          <blockquote className="text-white/90 italic leading-relaxed pl-6 text-base">
            "{testimonial.text}"
          </blockquote>
        </div>
        
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm">
              Discovered via Desty Besty
            </span>
            <Badge variant="outline" className="bg-white/5 text-cyan-300 border-cyan-500/30">
              {testimonial.destination}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;