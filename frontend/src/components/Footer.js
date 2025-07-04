import React from 'react';
import { Button } from './ui/button';
import { socialLinks } from '../data/mock';
import { Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black/30 backdrop-blur-lg border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-3">Desty Besty</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Your compass for extraordinary adventures. Discover hidden gems, connect with nature, 
              and create memories that last a lifetime.
            </p>
            <div className="flex items-center justify-center md:justify-start text-white/60 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 fill-red-500 text-red-500" />
              <span>for adventurers</span>
            </div>
          </div>

          {/* App Download Section */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Download the App</h4>
            <div className="space-y-3">
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-12 mx-auto opacity-80 hover:opacity-100 transition-opacity filter brightness-110"
                />
              </a>
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-12 mx-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Social & Links Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex items-center justify-center md:justify-end gap-4 mb-6">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300"
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <span className="text-lg mr-2">{social.icon}</span>
                  {social.name}
                  <ExternalLink className="h-3 w-3 ml-2" />
                </Button>
              ))}
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center md:justify-end gap-4">
                <button className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </button>
                <span className="text-white/30">•</span>
                <button className="text-white/70 hover:text-white transition-colors">
                  Terms of Use
                </button>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-4">
                <button className="text-white/70 hover:text-white transition-colors">
                  Contact Us
                </button>
                <span className="text-white/30">•</span>
                <button className="text-white/70 hover:text-white transition-colors">
                  Help Center
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © 2025 Desty Besty. All rights reserved. | Discover. Explore. Adventure.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;