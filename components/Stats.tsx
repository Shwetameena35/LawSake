'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useCountUp } from '@/hooks/useCountUp'

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  const stats = [
    { number: 500, suffix: '+', label: 'Successful Cases' },
    { number: 300, suffix: '+', label: 'Clients' },
    { number: 50, suffix: '+', label: 'Awards' },
    { number: 1000, suffix: '+', label: 'Cases' },
  ]

  const count1 = useCountUp(stats[0].number, 2000, 0, isVisible)
  const count2 = useCountUp(stats[1].number, 2000, 0, isVisible)
  const count3 = useCountUp(stats[2].number, 2000, 0, isVisible)
  const count4 = useCountUp(stats[3].number, 2000, 0, isVisible)

  const counts = [count1, count2, count3, count4]
  const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300']

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-12 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-sm opacity-90 mb-2">STATS AND AWARDS</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            What Makes Us The Best Among Others?
          </h3>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center transition-all duration-1000 ${delays[index]} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

