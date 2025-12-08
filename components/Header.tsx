'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPracticeOpen, setIsPracticeOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="mailto:contact@cyberlexadvocate.com" className="flex items-center hover:text-primary transition">
              <FaEnvelope className="mr-2" />
              <span className="text-sm">contact@cyberlexadvocate.com</span>
            </a>
            <a href="tel:+919571218439" className="flex items-center hover:text-primary transition">
              <FaPhone className="mr-2" />
              <span className="text-sm">+91 95712 18439</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-primary transition"><FaFacebook /></a>
            <a href="#" className="hover:text-primary transition"><FaTwitter /></a>
            <a href="#" className="hover:text-primary transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-primary transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto px-4">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
            <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-xs text-gray-600 mb-1">ESTD 2021</div>
                <div className="text-2xl font-bold text-gray-800">CYBERLEX ADVOCATE</div>
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
              <div className="relative group">
                <button
                  className="text-gray-800 hover:text-primary transition-all duration-300 font-semibold flex items-center hover:scale-110"
                  onMouseEnter={() => setIsPracticeOpen(true)}
                  onMouseLeave={() => setIsPracticeOpen(false)}
                >
                  PRACTISE AREAS
                  <span className={`ml-1 transition-transform duration-300 ${isPracticeOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {isPracticeOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 animate-fade-in-down"
                    onMouseEnter={() => setIsPracticeOpen(true)}
                    onMouseLeave={() => setIsPracticeOpen(false)}
                  >
                    <Link href="/#money-recovery" className="block px-4 py-2 hover:bg-gray-100 text-gray-800 transition-all duration-200 hover:translate-x-2">
                      Money Recovery
                    </Link>
                    <Link href="/#bank-account" className="block px-4 py-2 hover:bg-gray-100 text-gray-800 transition-all duration-200 hover:translate-x-2">
                      De-freezing of Bank Account
                    </Link>
                    <Link href="/#lien-removal" className="block px-4 py-2 hover:bg-gray-100 text-gray-800 transition-all duration-200 hover:translate-x-2">
                      Lien Removal
                    </Link>
                    <Link href="/#cryptocurrency" className="block px-4 py-2 hover:bg-gray-100 text-gray-800 transition-all duration-200 hover:translate-x-2">
                      Cryptocurrency
                    </Link>
                    <Link href="/#e-commerce" className="block px-4 py-2 hover:bg-gray-100 text-gray-800 transition-all duration-200 hover:translate-x-2">
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
    </>
  )
}

