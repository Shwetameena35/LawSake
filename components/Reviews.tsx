'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Reviews() {
  const reviews = [
    {
      name: 'Riya R',
      text: 'Professional, responsive, and knowledgeable – CyberLex Advocate guided me through a complex cyber fraud case with confidence and care.',
    },
    {
      name: 'Arjun M',
      text: 'Thanks to their expertise, my business stayed compliant with all e-commerce regulations, avoiding costly penalties.',
    },
    {
      name: 'Priya K',
      text: 'They handled my frozen bank account issue swiftly, restoring access when I thought all hope was lost.',
    },
  ]

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-12 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-sm text-gray-600 mb-2">REVIEWS</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Clients Think Of Our Firm
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our greatest pride lies in the trust and satisfaction of our clients. Here's what some of them have to say about their experience with CyberLex Advocate
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => {
            const { ref, isVisible } = useScrollAnimation()
            const delays = ['delay-0', 'delay-200', 'delay-400']
            return (
              <div
                key={index}
                ref={ref}
                className={`bg-white rounded-lg shadow-lg p-6 hover-lift transition-all duration-1000 ${delays[index] || 'delay-0'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="text-primary font-semibold">– {review.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

