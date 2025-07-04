import React from 'react';
import { Button } from './ui/button';
import { categories } from '../data/mock';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          size="lg"
          onClick={() => onCategoryChange(category.id)}
          className={`
            relative overflow-hidden transition-all duration-300 transform hover:scale-105
            ${selectedCategory === category.id 
              ? 'bg-white/20 text-white border-white/40 shadow-lg backdrop-blur-sm' 
              : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-sm'
            }
          `}
        >
          <span className="flex items-center gap-2">
            <span className="text-lg">{category.icon}</span>
            {category.name}
          </span>
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;