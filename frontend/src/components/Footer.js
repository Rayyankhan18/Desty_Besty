import React from 'react';
import { Button } from './ui/button';
import { socialLinks } from '../data/mock';
import { Heart, ExternalLink, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-indigo-950 to-black overflow-hidden">
      {/* Animated Starfield Background */}
      <div className="absolute inset-0">
        {/* Large stars */}
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-[25%] right-[20%] w-1.5 h-1.5 bg-blue-200 rounded-full animate-pulse opacity-90"></div>
        <div className="absolute top-[40%] left-[30%] w-1 h-1 bg-purple-200 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-[60%] right-[35%] w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-85"></div>
        <div className="absolute top-[15%] left-[60%] w-1 h-1 bg-cyan-200 rounded-full animate-pulse opacity-75"></div>
        <div className="absolute top-[35%] right-[15%] w-1 h-1 bg-white rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-[70%] left-[20%] w-1.5 h-1.5 bg-indigo-200 rounded-full animate-pulse opacity-90"></div>
        <div className="absolute top-[50%] left-[70%] w-1 h-1 bg-white rounded-full animate-pulse opacity-85"></div>
        <div className="absolute top-[80%] right-[25%] w-1 h-1 bg-purple-200 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-[20%] right-[50%] w-1.5 h-1.5 bg-blue-200 rounded-full animate-pulse opacity-80"></div>
        
        {/* Medium stars */}
        <div className="absolute top-[12%] left-[45%] w-0.5 h-0.5 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-[28%] right-[40%] w-0.5 h-0.5 bg-blue-100 rounded-full opacity-70"></div>
        <div className="absolute top-[45%] left-[10%] w-0.5 h-0.5 bg-purple-100 rounded-full opacity-50"></div>
        <div className="absolute top-[65%] right-[60%] w-0.5 h-0.5 bg-white rounded-full opacity-65"></div>
        <div className="absolute top-[18%] left-[80%] w-0.5 h-0.5 bg-cyan-100 rounded-full opacity-55"></div>
        <div className="absolute top-[38%] right-[10%] w-0.5 h-0.5 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-[75%] left-[50%] w-0.5 h-0.5 bg-indigo-100 rounded-full opacity-70"></div>
        <div className="absolute top-[55%] left-[85%] w-0.5 h-0.5 bg-white rounded-full opacity-65"></div>
        <div className="absolute top-[85%] right-[45%] w-0.5 h-0.5 bg-purple-100 rounded-full opacity-50"></div>
        <div className="absolute top-[22%] right-[75%] w-0.5 h-0.5 bg-blue-100 rounded-full opacity-60"></div>
        
        {/* Small twinkling stars */}
        <div className="absolute top-[8%] left-[25%] w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-[32%] right-[30%] w-0.5 h-0.5 bg-blue-100 rounded-full opacity-50 animate-ping"></div>
        <div className="absolute top-[48%] left-[65%] w-0.5 h-0.5 bg-purple-100 rounded-full opacity-35 animate-ping"></div>
        <div className="absolute top-[68%] right-[20%] w-0.5 h-0.5 bg-white rounded-full opacity-45 animate-ping"></div>
        <div className="absolute top-[16%] left-[75%] w-0.5 h-0.5 bg-cyan-100 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-[42%] right-[55%] w-0.5 h-0.5 bg-white rounded-full opacity-50 animate-ping"></div>
        <div className="absolute top-[78%] left-[35%] w-0.5 h-0.5 bg-indigo-100 rounded-full opacity-45 animate-ping"></div>
        <div className="absolute top-[58%] left-[90%] w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-[88%] right-[65%] w-0.5 h-0.5 bg-purple-100 rounded-full opacity-35 animate-ping"></div>
        <div className="absolute top-[26%] right-[85%] w-0.5 h-0.5 bg-blue-100 rounded-full opacity-45 animate-ping"></div>
        
        {/* Shooting star effect */}
        <div className="absolute top-[30%] left-[-10%] w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-pulse transform rotate-12"></div>
        
        {/* Nebula-like glow effects */}
        <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] left-[10%] w-40 h-40 bg-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] right-[30%] w-28 h-28 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Constellation lines (subtle) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="15" y1="10" x2="30" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="0.1"/>
        <line x1="30" y1="40" x2="60" y2="15" stroke="rgba(255,255,255,0.3)" strokeWidth="0.1"/>
        <line x1="60" y1="15" x2="80" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="0.1"/>
        <line x1="20" y1="70" x2="50" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="0.1"/>
        <line x1="50" y1="80" x2="70" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="0.1"/>
      </svg>
      
      <div className="relative max-w-6xl mx-auto px-6 py-12 z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3 drop-shadow-lg">
              Desty Besty
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4 drop-shadow-sm">
              Your compass for extraordinary adventures under the stars. Discover hidden gems and create lasting memories.
            </p>
            <div className="flex items-center text-white/70 text-xs">
              <span>Made with</span>
              <Heart className="h-3 w-3 mx-1 fill-red-400 text-red-400 drop-shadow-sm" />
              <span>for stargazing adventurers</span>
            </div>
          </div>

          {/* App Download */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-sm">Get the App</h4>
            <div className="space-y-3">
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-10 mx-auto opacity-90 hover:opacity-100 transition-opacity filter brightness-110"
                />
              </a>
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-10 mx-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-sm">Connect</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 text-xs backdrop-blur-sm hover:shadow-lg hover:shadow-white/10"
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <span className="text-sm mr-1">{social.icon}</span>
                  {social.name}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              ))}
            </div>
            
            <div className="space-y-2 text-xs">
              <div className="flex flex-wrap gap-4">
                <button className="text-white/70 hover:text-emerald-300 transition-colors drop-shadow-sm">
                  Privacy Policy
                </button>
                <button className="text-white/70 hover:text-emerald-300 transition-colors drop-shadow-sm">
                  Terms of Use
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="text-white/70 hover:text-emerald-300 transition-colors drop-shadow-sm">
                  Contact Us
                </button>
                <button className="text-white/70 hover:text-emerald-300 transition-colors drop-shadow-sm">
                  Help Center
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm drop-shadow-sm">
                © 2025 Desty Besty. All rights reserved. | Discover. Explore. Adventure.
              </p>
            </div>

            {/* Quick Stats with glow */}
            <div className="flex items-center gap-6 text-center">
              <div className="group">
                <div className="text-emerald-400 font-bold text-sm drop-shadow-lg group-hover:text-emerald-300 transition-colors">250K+</div>
                <div className="text-white/60 text-xs">Adventurers</div>
              </div>
              <div className="group">
                <div className="text-cyan-400 font-bold text-sm drop-shadow-lg group-hover:text-cyan-300 transition-colors">10K+</div>
                <div className="text-white/60 text-xs">Destinations</div>
              </div>
              <div className="group">
                <div className="text-purple-400 font-bold text-sm drop-shadow-lg group-hover:text-purple-300 transition-colors">50+</div>
                <div className="text-white/60 text-xs">Countries</div>
              </div>
            </div>

            {/* Back to Top with star effect */}
            <Button
              variant="ghost"
              size="sm"
              className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white transition-all duration-300 text-xs backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ArrowUp className="h-3 w-3 mr-1" />
              To the Stars
            </Button>
          </div>
        </div>
      </div>

      {/* Aurora-like gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 via-purple-500 to-indigo-500 opacity-70 animate-pulse"></div>
    </footer>
  );
};

export default Footer;