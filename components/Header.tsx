'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa'

const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || 'LawSake'
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@cyberlexadvocate.com'
const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 95712 18439'
const CONTACT_PHONE_URL = process.env.NEXT_PUBLIC_CONTACT_PHONE_URL || '919571218439'
const FACEBOOK_URL = process.env.NEXT_PUBLIC_FACEBOOK_URL || '#'
const TWITTER_URL = process.env.NEXT_PUBLIC_TWITTER_URL || '#'
const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL || '#'
const YOUTUBE_URL = process.env.NEXT_PUBLIC_YOUTUBE_URL || '#'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPracticeOpen, setIsPracticeOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const practiceButtonRef = useRef<HTMLButtonElement>(null)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateDropdownPosition = () => {
      if (isPracticeOpen && practiceButtonRef.current) {
        const rect = practiceButtonRef.current.getBoundingClientRect()
        setDropdownPosition({
          top: rect.bottom + 8,
          left: rect.left
        })
      }
    }

    if (isPracticeOpen) {
      updateDropdownPosition()
      window.addEventListener('resize', updateDropdownPosition)
      window.addEventListener('scroll', updateDropdownPosition)
    }

    return () => {
      window.removeEventListener('resize', updateDropdownPosition)
      window.removeEventListener('scroll', updateDropdownPosition)
    }
  }, [isPracticeOpen])

  return (
    <>
      {/* Fixed Header Wrapper - Outside normal flow */}
      <div className="fixed top-0 left-0 right-0 z-[100] w-full" style={{ isolation: 'isolate' }}>
      {/* Top Bar */}
        <div className="bg-gray-800 text-white py-2 w-full">
          {/* Desktop View - No Changes */}
          <div className="hidden md:block container mx-auto px-4">
            <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center hover:text-primary transition">
              <FaEnvelope className="mr-2" />
                  <span className="text-sm">{CONTACT_EMAIL}</span>
            </a>
                <a href={`tel:${CONTACT_PHONE_URL}`} className="flex items-center hover:text-primary transition">
              <FaPhone className="mr-2" />
                  <span className="text-sm">{CONTACT_PHONE}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
                <a href={FACEBOOK_URL} className="hover:text-primary transition"><FaFacebook /></a>
                <a href={TWITTER_URL} className="hover:text-primary transition"><FaTwitter /></a>
                <a href={LINKEDIN_URL} className="hover:text-primary transition"><FaLinkedin /></a>
                <a href={YOUTUBE_URL} className="hover:text-primary transition"><FaYoutube /></a>
              </div>
            </div>
          </div>

          {/* Mobile View - Animated Scrolling */}
          <div className="md:hidden marquee-container w-full overflow-x-hidden">
            <div className="marquee-content flex items-center whitespace-nowrap">
              {/* First Set */}
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center hover:text-primary transition flex-shrink-0 mr-6">
                <FaEnvelope className="mr-2" />
                <span className="text-xs">{CONTACT_EMAIL}</span>
              </a>
              <a href={`tel:${CONTACT_PHONE_URL}`} className="flex items-center hover:text-primary transition flex-shrink-0 mr-6">
                <FaPhone className="mr-2" />
                <span className="text-xs">{CONTACT_PHONE}</span>
              </a>
              <div className="flex items-center gap-3 flex-shrink-0 mr-6">
                <a href={FACEBOOK_URL} className="hover:text-primary transition"><FaFacebook /></a>
                <a href={TWITTER_URL} className="hover:text-primary transition"><FaTwitter /></a>
                <a href={LINKEDIN_URL} className="hover:text-primary transition"><FaLinkedin /></a>
                <a href={YOUTUBE_URL} className="hover:text-primary transition"><FaYoutube /></a>
              </div>
              
              {/* Duplicate Set for Seamless Loop */}
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center hover:text-primary transition flex-shrink-0 mr-6">
                <FaEnvelope className="mr-2" />
                <span className="text-xs">{CONTACT_EMAIL}</span>
              </a>
              <a href={`tel:${CONTACT_PHONE_URL}`} className="flex items-center hover:text-primary transition flex-shrink-0 mr-6">
                <FaPhone className="mr-2" />
                <span className="text-xs">{CONTACT_PHONE}</span>
              </a>
              <div className="flex items-center gap-3 flex-shrink-0 mr-6">
                <a href={FACEBOOK_URL} className="hover:text-primary transition"><FaFacebook /></a>
                <a href={TWITTER_URL} className="hover:text-primary transition"><FaTwitter /></a>
                <a href={LINKEDIN_URL} className="hover:text-primary transition"><FaLinkedin /></a>
                <a href={YOUTUBE_URL} className="hover:text-primary transition"><FaYoutube /></a>
              </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
        <nav className={`bg-white shadow-md transition-all duration-300 w-full ${isScrolled ? 'shadow-lg' : ''}`}>
          <div className="container mx-auto px-2 md:px-4 w-full max-w-full">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
            <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-xs text-gray-600 mb-1">ESTD 2021</div>
                  <div className="text-2xl font-bold text-gray-800">{COMPANY_NAME}</div>
                <div className="text-xs text-gray-600">CYBER LAW FIRM</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-800 hover:text-primary transition-all duration-300 font-semibold hover:scale-110">
                HOME
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-primary transition-all duration-300 font-semibold hover:scale-110">
                ABOUT
              </Link>
                <div className="relative">
                <button
                    ref={practiceButtonRef}
                  className="text-gray-800 hover:text-primary transition-all duration-300 font-semibold flex items-center hover:scale-110"
                  onMouseEnter={() => setIsPracticeOpen(true)}
                  onMouseLeave={() => setIsPracticeOpen(false)}
                >
                  PRACTISE AREAS
                  <span className={`ml-1 transition-transform duration-300 ${isPracticeOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                  {isPracticeOpen && typeof window !== 'undefined' && (
                  <div
                      className="fixed w-64 bg-white shadow-2xl rounded-lg py-2 animate-fade-in-down border border-gray-100"
                    onMouseEnter={() => setIsPracticeOpen(true)}
                    onMouseLeave={() => setIsPracticeOpen(false)}
                      style={{ 
                        position: 'fixed',
                        zIndex: 10000,
                        top: `${dropdownPosition.top}px`,
                        left: `${dropdownPosition.left}px`
                      }}
                  >
                    <Link href="/#money-recovery" className="block px-4 py-2 hover:bg-gray-100 text-gray-800 transition-all duration-200 hover:translate-x-2 whitespace-nowrap">
                      Money Recovery
                    </Link>
                    <Link href="/#bank-account" className="block px-4 py-2 hover:bg-gray-100 text-gray-800 transition-all duration-200 hover:translate-x-2 whitespace-nowrap">
                      De-freezing of Bank Account
                    </Link>
                    <Link href="/#lien-removal" className="block px-4 py-2 hover:bg-gray-100 text-gray-800 transition-all duration-200 hover:translate-x-2 whitespace-nowrap">
                      Lien Removal
                    </Link>
                    <Link href="/#cryptocurrency" className="block px-4 py-2 hover:bg-gray-100 text-gray-800 transition-all duration-200 hover:translate-x-2 whitespace-nowrap">
                      Cryptocurrency
                    </Link>
                    <Link href="/#e-commerce" className="block px-4 py-2 hover:bg-gray-100 text-gray-800 transition-all duration-200 hover:translate-x-2 whitespace-nowrap">
                      E-Commerce Laws
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/blog" className="text-gray-800 hover:text-primary transition-all duration-300 font-semibold hover:scale-110">
                BLOG
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-primary transition-all duration-300 font-semibold hover:scale-110">
                CONTACT
              </Link>
              <Link
                href="/contact"
                className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                Contact Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <Link href="/" className="block py-2 text-gray-800 hover:text-primary">HOME</Link>
              <Link href="/about" className="block py-2 text-gray-800 hover:text-primary">ABOUT</Link>
              <div className="py-2">
                <button className="text-gray-800 hover:text-primary" onClick={() => setIsPracticeOpen(!isPracticeOpen)}>
                  PRACTISE AREAS ▼
                </button>
                {isPracticeOpen && (
                  <div className="pl-4 mt-2">
                    <Link href="/#money-recovery" className="block py-2 text-gray-600">Money Recovery</Link>
                    <Link href="/#bank-account" className="block py-2 text-gray-600">De-freezing of Bank Account</Link>
                    <Link href="/#lien-removal" className="block py-2 text-gray-600">Lien Removal</Link>
                    <Link href="/#cryptocurrency" className="block py-2 text-gray-600">Cryptocurrency</Link>
                    <Link href="/#e-commerce" className="block py-2 text-gray-600">E-Commerce Laws</Link>
                  </div>
                )}
              </div>
              <Link href="/blog" className="block py-2 text-gray-800 hover:text-primary">BLOG</Link>
              <Link href="/contact" className="block py-2 text-gray-800 hover:text-primary">CONTACT</Link>
            </div>
          )}
        </div>
      </nav>
      </div>
      
      {/* Spacer to prevent content from going under fixed header - Calculated: Top bar (~41px) + Nav bar (~64px) = ~105px on desktop, ~105px on mobile */}
      <div className="h-[105px]"></div>
    </>
  )
}

