import React from 'react';
import { Button } from './ui/button';
import { socialLinks } from '../data/mock';
import { Heart, ExternalLink, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Desty Besty
              </h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                Your compass for extraordinary adventures. Discover hidden gems, connect with nature, 
                and create memories that last a lifetime.
              </p>
            </div>
            
            <div className="flex items-center text-white/60 text-sm mb-6">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-2 fill-red-500 text-red-500 animate-pulse" />
              <span>for adventurers worldwide</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-white/70 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-3 text-emerald-400" />
                <span className="text-sm">hello@destybesty.com</span>
              </div>
              <div className="flex items-center text-white/70 hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-3 text-emerald-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-white/70 hover:text-white transition-colors">
                <MapPin className="h-4 w-4 mr-3 text-emerald-400" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
            </h4>
            <div className="space-y-4">
              {[
                'Discover Trails',
                'Plan Adventure',
                'Community',
                'Travel Guides',
                'Safety Tips',
                'Weather Updates'
              ].map((link) => (
                <button 
                  key={link}
                  className="block text-white/70 hover:text-emerald-300 transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Support
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
            </h4>
            <div className="space-y-4">
              {[
                'Help Center',
                'Contact Us',
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'Accessibility'
              ].map((link) => (
                <button 
                  key={link}
                  className="block text-white/70 hover:text-emerald-300 transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-12">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-white mb-3">
              Start Your Adventure Today
            </h4>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Download the Desty Besty app and unlock a world of hidden trails, 
              breathtaking waterfalls, and mountain peaks waiting to be explored.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-105"
            >
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on the App Store" 
                className="h-14 opacity-90 group-hover:opacity-100 transition-opacity filter brightness-110 drop-shadow-lg"
              />
            </a>
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-105"
            >
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play" 
                className="h-14 opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-lg"
              />
            </a>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">
                Join Our Community
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 group"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <span className="text-xl mr-3 group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                    <span className="text-white">{social.name}</span>
                    <ExternalLink className="h-4 w-4 ml-2 text-white/60 group-hover:text-white transition-colors" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Adventure Newsletter
              </h4>
              <p className="text-white/70 mb-6">
                Get weekly trail recommendations and adventure tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent backdrop-blur-sm"
                />
                <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 px-6 py-3 font-medium">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © 2025 Desty Besty. All rights reserved.
              </p>
              <p className="text-white/40 text-xs mt-1">
                Discover. Explore. Adventure.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 text-center">
              <div>
                <div className="text-emerald-400 font-bold text-lg">250K+</div>
                <div className="text-white/60 text-xs">Adventurers</div>
              </div>
              <div>
                <div className="text-cyan-400 font-bold text-lg">10K+</div>
                <div className="text-white/60 text-xs">Destinations</div>
              </div>
              <div>
                <div className="text-indigo-400 font-bold text-lg">50+</div>
                <div className="text-white/60 text-xs">Countries</div>
              </div>
            </div>

            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top ↑
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500"></div>
    </footer>
  );
};

export default Footer;