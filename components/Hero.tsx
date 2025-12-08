'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero-bg.jpg")',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/75"></div>
        {/* Additional overlay for depth */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Fallback background pattern if image doesn't load */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("data:image/svg+xml,%3Csvg width=\'1200\' height=\'800\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'wood\' x=\'0\' y=\'0\' width=\'100\' height=\'100\' patternUnits=\'userSpaceOnUse\'%3E%3Crect fill=\'%23d4a574\' width=\'100\' height=\'100\'/%3E%3Cpath d=\'M0 50h100M50 0v100\' stroke=\'%23c19a5b\' stroke-width=\'0.5\' opacity=\'0.3\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23wood)\' width=\'1200\' height=\'800\'/%3E%3C/svg%3E")'
        }}
      ></div>

      {/* Text Content Overlay - Positioned on top */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white w-full">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            {/* Logo/Icon */}
            <div className={`text-6xl mb-4 animate-float transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              ⚖️
            </div>
            
            {/* ESTD Badge */}
            <div className={`text-xs mb-2 tracking-widest uppercase transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
              ESTD 2021
            </div>
            
            {/* Main Heading */}
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-4 drop-shadow-2xl transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
            }}>
              CYBERLEX ADVOCATE
            </h1>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl lg:text-3xl mb-8 font-semibold drop-shadow-lg transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
              textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
            }}>
              CYBER LAW FIRM
            </p>
            
            {/* Description */}
            <p className={`text-lg md:text-xl mb-8 opacity-95 drop-shadow-lg transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
              textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
            }}>
              Leading Cyber Law Firm in India
            </p>
          </div>
          
          {/* CTA Button */}
          <Link
            href="/contact"
            className={`inline-block bg-primary text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-110 hover:shadow-2xl delay-1300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              boxShadow: '0 4px 15px rgba(139, 69, 19, 0.5)'
            }}
          >
            Contact Now
          </Link>
        </div>
      </div>
    </section>
  )
}

