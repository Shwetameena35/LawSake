'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation()
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation()
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-12 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-sm text-gray-600 mb-2">ABOUT US</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            We're Here To Manage Your<br />Law With Experience
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leading Cyber Law Firm in India, specializing in cybercrime, data privacy, and online security for individuals and businesses navigating digital complexities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Founder */}
          <div ref={card1Ref} className={`bg-white rounded-lg shadow-lg overflow-hidden hover-lift transition-all duration-1000 ${card1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center hover-scale transition-transform duration-300">
              <div className="text-6xl">👨‍💼</div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">M.S. Choudhary</h4>
              <p className="text-primary font-semibold mb-2">Adv. M.S. Choudhary</p>
              <p className="text-gray-600 text-sm mb-4">B.Tech, LL.B., LL.M. - IPR & Cyber Law</p>
              <p className="text-gray-600 text-sm">Founder of CyberLex Advocate Law firm</p>
            </div>
          </div>

          {/* Mission Statement */}
          <div ref={card2Ref} className={`bg-white rounded-lg shadow-lg p-8 flex items-center hover-lift transition-all duration-1000 delay-200 ${card2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <p className="text-gray-700 leading-relaxed">
                At <strong>CyberLex Advocate</strong>, our journey began with a clear mission: to provide exceptional legal expertise in the ever-evolving landscape of cyber law. As technology continues to advance, so do the complexities and risks associated with digital threats.
              </p>
            </div>
          </div>

          {/* Associate */}
          <div ref={card3Ref} className={`bg-white rounded-lg shadow-lg overflow-hidden hover-lift transition-all duration-1000 delay-400 ${card3Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center hover-scale transition-transform duration-300">
              <div className="text-6xl">👨‍💼</div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Shubham Katta</h4>
              <p className="text-primary font-semibold mb-2">Adv. Shubham Katta</p>
              <p className="text-gray-600 text-sm mb-4">B.C.A., M.C.A., LL.B.</p>
              <p className="text-gray-600 text-sm">Associate at CyberLex Advocate Law firm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

