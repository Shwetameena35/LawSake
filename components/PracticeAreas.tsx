'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function PracticeAreas() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const practices = [
    {
      id: 'money-recovery',
      title: 'Money Recovery',
      description: 'We assist individuals and businesses in recovering lost or unpaid funds due to fraud, breach of contract, cyber scams, or non-payment. Our legal team takes swift and strategic action to ensure you get what you\'re rightfully owed.',
      icon: '💰',
    },
    {
      id: 'bank-account',
      title: 'De-freezing of Bank Account',
      description: 'We help clients legally unfreeze bank accounts that have been blocked due to cyber complaints, fraudulent transactions, or investigation orders. Our expert team ensures prompt action and proper representation to restore access to your funds.',
      icon: '🏦',
    },
    {
      id: 'lien-removal',
      title: 'Lien Removal',
      description: 'We assist in removing unlawful or outdated liens placed on your bank account or property. Our legal team ensures your assets are freed from unnecessary restrictions through proper documentation and legal procedures.',
      icon: '🔓',
    },
    {
      id: 'cryptocurrency',
      title: 'Cryptocurrency',
      description: 'We provide expert legal support in cryptocurrency-related matters, including fraud recovery, regulatory compliance, dispute resolution, and asset tracing. Our team helps you navigate the complex legal landscape of digital currencies with confidence and clarity.',
      icon: '₿',
    },
    {
      id: 'digital-contract',
      title: 'Digital Contract',
      description: 'We draft, review, and enforce legally binding digital contracts tailored for online transactions, partnerships, and services. Our team ensures your digital agreements are secure, compliant, and fully enforceable under cyber law.',
      icon: '📄',
    },
    {
      id: 'e-commerce',
      title: 'E-Commerce Laws',
      description: 'We provide legal guidance on all aspects of e-commerce, including online business compliance, consumer protection, data privacy, and dispute resolution. Our experts ensure your digital business operates within the legal framework and is protected against cyber risks.',
      icon: '🛒',
    },
  ]

  return (
    <section id="practice-areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-12 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-sm text-gray-600 mb-2">PRACTISE AREAS</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Personalized Legal Advocacy
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With dedicated attention and expert guidance, we ensure that your rights are protected and your voice is heard at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {practices.map((practice, index) => {
            const { ref, isVisible } = useScrollAnimation()
            const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500']
            return (
              <div
                key={practice.id}
                ref={ref}
                id={practice.id}
                className={`bg-gray-50 rounded-lg shadow-lg p-4 hover-lift transition-all duration-1000 ${delays[index] || 'delay-0'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="text-3xl mb-3 hover-scale transition-transform duration-300 inline-block">{practice.icon}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{practice.title}</h4>
                <p className="text-gray-600 text-sm mb-0">{practice.description}</p>
              </div>
            )
          })}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            Consult Now
          </Link>
        </div>
      </div>
    </section>
  )
}

