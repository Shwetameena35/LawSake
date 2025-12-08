export default function ContactPage() {
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
                      <a href="mailto:contact@cyberlexadvocate.com" className="text-primary hover:underline">
                        contact@cyberlexadvocate.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">📞</div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <a href="tel:+919571218439" className="text-primary hover:underline">
                        +91 95712 18439
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">📍</div>
                    <div>
                      <p className="font-semibold text-gray-800">Location</p>
                      <p className="text-gray-600">INDIA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Send us a Message
                </h2>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={5}
                      placeholder="Your Message"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                  >
                    Send Message
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

