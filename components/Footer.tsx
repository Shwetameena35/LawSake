import Link from 'next/link'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || 'LawSake'
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@cyberlexadvocate.com'
const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 95712 18439'
const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{COMPANY_NAME}</h3>
            <p className="text-gray-400 mb-4">
              Leading Cyber Law Firm in India, specializing in cybercrime, data privacy, and online security.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Practise Areas</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/#money-recovery" className="hover:text-white transition">Money Recovery</Link></li>
              <li><Link href="/#bank-account" className="hover:text-white transition">Bank Account Issues & De-freezing</Link></li>
              <li><Link href="/#lien-removal" className="hover:text-white transition">Lien Removal</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Contact Details</h4>
              <div className="flex items-center text-gray-400 mb-1">
                <FaPhone className="mr-2" />
                <span>{CONTACT_PHONE}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2" />
                <span>{CONTACT_EMAIL}</span>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              Copyright © {CURRENT_YEAR} {COMPANY_NAME}.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

