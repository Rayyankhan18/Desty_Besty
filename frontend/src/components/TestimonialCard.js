import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
          />
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-white">{testimonial.name}</h4>
              <span className="text-white/60 text-sm">• {testimonial.location}</span>
            </div>
            
            <div className="flex items-center gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <div className="relative">
              <Quote className="h-5 w-5 text-white/40 absolute -top-2 -left-1" />
              <p className="text-white/90 italic pl-4">
                "{testimonial.text}"
              </p>
            </div>
            
            <div className="mt-3 pt-3 border-t border-white/20">
              <span className="text-white/70 text-sm">
                Discovered: <span className="text-blue-300">{testimonial.destination}</span>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;