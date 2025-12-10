'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Cybercrime: Types, Prevention, and Legal Recourse',
    excerpt: 'Cybercrime has become increasingly prevalent in our digital age. Learn about the different types of cybercrimes, how to protect yourself, and what legal options are available if you become a victim.',
    category: 'Cybercrime',
    date: 'January 15, 2025',
    readTime: '5 min read',
    image: '🔒'
  },
  {
    id: 2,
    title: 'Data Privacy Laws in India: A Comprehensive Guide',
    excerpt: 'With the implementation of new data protection regulations, it\'s crucial to understand your rights and obligations. This guide covers the Digital Personal Data Protection Act and its implications for individuals and businesses.',
    category: 'Data Privacy',
    date: 'January 10, 2025',
    readTime: '7 min read',
    image: '📊'
  },
  {
    id: 3,
    title: 'How to Recover Money Lost to Online Fraud',
    excerpt: 'If you\'ve fallen victim to online fraud or scams, there are legal steps you can take to recover your money. Learn about the recovery process, documentation required, and how our legal team can help.',
    category: 'Money Recovery',
    date: 'January 5, 2025',
    readTime: '6 min read',
    image: '💰'
  },
  {
    id: 4,
    title: 'Bank Account Freezing: Causes and Solutions',
    excerpt: 'Having your bank account frozen can be stressful. Understand the common reasons for account freezing, your legal rights, and the steps to unfreeze your account quickly and legally.',
    category: 'Banking Law',
    date: 'December 28, 2024',
    readTime: '5 min read',
    image: '🏦'
  },
  {
    id: 5,
    title: 'Cryptocurrency Legal Issues: What You Need to Know',
    excerpt: 'As cryptocurrency becomes more mainstream, legal challenges arise. Explore the legal landscape of digital currencies, regulatory compliance, and how to protect your crypto assets.',
    category: 'Cryptocurrency',
    date: 'December 20, 2024',
    readTime: '8 min read',
    image: '₿'
  },
  {
    id: 6,
    title: 'E-Commerce Legal Compliance: A Business Owner\'s Guide',
    excerpt: 'Running an online business requires compliance with various e-commerce laws. Learn about consumer protection, data handling, payment regulations, and how to ensure your online business is legally compliant.',
    category: 'E-Commerce',
    date: 'December 15, 2024',
    readTime: '6 min read',
    image: '🛒'
  }
]

export default function BlogPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-800">
            Our Blog
          </h1>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg px-4 max-w-3xl mx-auto">
            Stay updated with the latest news, insights, and legal updates in cyber law, data privacy, and digital security
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => {
              const { ref, isVisible } = useScrollAnimation()
              const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500']
              return (
                <div
                  key={post.id}
                  ref={ref}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden hover-lift transition-all duration-1000 ${delays[index] || 'delay-0'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="p-6 md:p-8">
                    <div className="text-5xl mb-4 text-center">{post.image}</div>
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

