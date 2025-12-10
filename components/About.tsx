'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation()
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation()
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-primary/10 rounded-full">
              About Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            We're Here To Manage Your<br />
            <span className="text-primary">Law With Experience</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
              Leading Cyber Law Firm in India, specializing in cybercrime, data privacy, and online security for individuals and businesses navigating digital complexities.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>
        </div>

        {/* Mission Statement - Full Width */}
        <div ref={card2Ref} className={`mb-16 transition-all duration-1000 delay-200 ${card2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-white to-primary/10 rounded-2xl p-6 md:p-8 lg:p-12 shadow-xl border border-primary/20">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              <div className="text-4xl md:text-5xl flex-shrink-0 md:self-start">⚖️</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  At <strong className="text-primary">LawSake</strong>, our journey began with a clear mission: to provide exceptional legal expertise in the ever-evolving landscape of cyber law. As technology continues to advance, so do the complexities and risks associated with digital threats. We are committed to protecting your digital rights and ensuring justice in the cyber world.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Founder */}
          <div ref={card1Ref} className={`bg-white rounded-2xl shadow-xl overflow-hidden hover-lift transition-all duration-1000 group ${card1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex flex-col items-center">
              <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white group-hover:ring-primary/30 transition-all duration-300">
                  <img 
                    src="/images (1).jpg" 
                    alt="M.S. Choudhary" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-3 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-8 text-center">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">M.S. Choudhary</h4>
              <p className="text-primary font-semibold mb-3 text-lg">Adv. M.S. Choudhary</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">B.Tech</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">LL.B.</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">LL.M.</span>
              </div>
              <p className="text-gray-600 text-sm font-medium">IPR & Cyber Law</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-primary font-semibold">Founder of LawSake</p>
              </div>
            </div>
          </div>

          {/* Associate */}
          <div ref={card3Ref} className={`bg-white rounded-2xl shadow-xl overflow-hidden hover-lift transition-all duration-1000 delay-400 group ${card3Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex flex-col items-center">
              <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white group-hover:ring-primary/30 transition-all duration-300">
                  <img 
                    src="/images (2).jpg" 
                    alt="Shubham Katta" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-3 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-8 text-center">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Shubham Katta</h4>
              <p className="text-primary font-semibold mb-3 text-lg">Adv. Shubham Katta</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">B.C.A.</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">M.C.A.</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">LL.B.</span>
              </div>
              <p className="text-gray-600 text-sm font-medium">Cyber Law Specialist</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-primary font-semibold">Associate at LawSake</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

