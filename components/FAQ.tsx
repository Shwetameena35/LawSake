'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What happens during a legal consultation?',
      answer: 'During a legal consultation, you meet with an attorney to discuss your issue in detail. The lawyer listens to your situation, asks relevant questions, and explains your legal options and potential outcomes. This session helps you understand how the law applies to your case and decide on the best next steps. It\'s also a chance to ask any questions you have and evaluate if the lawyer is the right fit for your needs.',
    },
    {
      question: 'What areas of law do you specialize in?',
      answer: 'We specialize in cyber law and related fields, including cybercrime, data privacy, digital contracts, cryptocurrency disputes, e-commerce regulations, money recovery, bank account issues, and lien removal. Our expertise focuses on protecting individuals and businesses from digital threats and helping them navigate the evolving legal landscape of technology.',
    },
    {
      question: 'Can I speak directly with my attorney?',
      answer: 'Yes, at CyberLex Advocate, we believe in clear and open communication. You will have direct access to your attorney throughout your case, allowing you to discuss your concerns, get updates, and receive personalized advice whenever needed.',
    },
    {
      question: 'What should I bring to my appointment?',
      answer: 'To make the most of your appointment, please bring any relevant documents related to your case, such as contracts, emails, bank statements, police reports, or any correspondence. Also, prepare a list of questions or concerns you want to discuss. This will help your attorney understand your situation better and provide accurate advice.',
    },
  ]

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-12 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-sm text-gray-600 mb-2">QUESTIONS</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Explore and Unlock Answers To Your Queries Here
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about cyber law or digital legal challenges? You're in the right place. Browse through our resources and FAQs to find clear, expert answers tailored to your concerns. If you don't find what you're looking for, feel free to reach out—our team is always ready to help you navigate the complexities of the digital legal world.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const { ref, isVisible } = useScrollAnimation()
            const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300']
            return (
              <div
                key={index}
                ref={ref}
                className={`mb-4 border border-gray-200 rounded-lg overflow-hidden hover-lift transition-all duration-1000 ${delays[index] || 'delay-0'} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              >
                <button
                  className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-800 pr-4">{index + 1}. {faq.question}</span>
                  <span className={`text-primary text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="p-6 bg-white text-gray-700 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-600 mb-4">Read More</p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            Consult Now
          </a>
        </div>
      </div>
    </section>
  )
}

