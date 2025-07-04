import React from 'react';
import { Button } from './ui/button';
import { socialLinks } from '../data/mock';
import { Heart, ExternalLink, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-white/10">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)]" />
      
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              Desty Besty
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Your compass for extraordinary adventures. Discover hidden gems and create lasting memories.
            </p>
            <div className="flex items-center text-white/60 text-xs">
              <span>Made with</span>
              <Heart className="h-3 w-3 mx-1 fill-red-500 text-red-500" />
              <span>for adventurers</span>
            </div>
          </div>

          {/* App Download */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Get the App</h4>
            <div className="space-y-3">
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-10 mx-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
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
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 text-xs"
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
                <button className="text-white/70 hover:text-emerald-300 transition-colors">
                  Privacy Policy
                </button>
                <button className="text-white/70 hover:text-emerald-300 transition-colors">
                  Terms of Use
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="text-white/70 hover:text-emerald-300 transition-colors">
                  Contact Us
                </button>
                <button className="text-white/70 hover:text-emerald-300 transition-colors">
                  Help Center
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © 2025 Desty Besty. All rights reserved.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-6 text-center">
              <div>
                <div className="text-emerald-400 font-bold text-sm">250K+</div>
                <div className="text-white/60 text-xs">Adventurers</div>
              </div>
              <div>
                <div className="text-cyan-400 font-bold text-sm">10K+</div>
                <div className="text-white/60 text-xs">Destinations</div>
              </div>
              <div>
                <div className="text-indigo-400 font-bold text-sm">50+</div>
                <div className="text-white/60 text-xs">Countries</div>
              </div>
            </div>

            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-300 text-xs"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ArrowUp className="h-3 w-3 mr-1" />
              Top
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 opacity-60"></div>
    </footer>
  );
};

export default Footer;