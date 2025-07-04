import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = ({ 
  id, 
  backgroundImage, 
  children, 
  className = '', 
  parallaxSpeed = 0.5 
}) => {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;

    if (!section || !background) return;

    // Parallax effect for background
    gsap.to(background, {
      yPercent: -50 * parallaxSpeed,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Fade in animation for content
    gsap.fromTo(section.querySelectorAll('.animate-in'), {
      opacity: 0,
      y: 50,
      scale: 0.95
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [parallaxSpeed]);

  return (
    <section 
      ref={sectionRef}
      id={id}
      className={`relative min-h-screen overflow-hidden ${className}`}
    >
      {/* Background with parallax */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: 'translateY(-10%)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </section>
  );
};

export default ScrollSection;