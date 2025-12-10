'use client'

import { useState } from 'react'

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@cyberlexadvocate.com'
const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 95712 18439'
const CONTACT_PHONE_URL = process.env.NEXT_PUBLIC_CONTACT_PHONE_URL || '919571218439'
const LOCATION = process.env.NEXT_PUBLIC_LOCATION || 'INDIA'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Get in touch with us today and take the first step toward protecting yourself and your business in the digital world.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Contact Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">📧</div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">📞</div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <a href={`tel:${CONTACT_PHONE_URL}`} className="text-primary hover:underline">
                        {CONTACT_PHONE}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">📍</div>
                    <div>
                      <p className="font-semibold text-gray-800">Location</p>
                      <p className="text-gray-600">{LOCATION}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Send us a Message
                </h2>
                {submitStatus === 'success' && (
                  <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Thank you for your message! We'll get back to you soon. Check your email for confirmation.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    Something went wrong. Please try again later.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Your Message"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

