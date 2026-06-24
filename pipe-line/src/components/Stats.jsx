import { useEffect, useRef, useState } from 'react'
import './styling/stats.css'

const stats = [
  { target: 10000, suffix: 'K+', divisor: 1000, label: 'Teams Worldwide', prefix: '' },
  { target: 50, suffix: 'M+', divisor: 1, label: 'Deals Tracked', prefix: '' },
  { target: 99.9, suffix: '%', divisor: 1, label: 'Uptime SLA', prefix: '', isFloat: true },
  { target: 2.4, suffix: 'M', divisor: 1, label: 'Revenue Generated', prefix: '$', isFloat: true },
]

function Counter({ target, suffix, divisor, prefix, isFloat }) {
  const [val, setVal] = useState(0)
  const started = useRef(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) { current = target; clearInterval(timer) }
          setVal(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current / divisor))
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, divisor, isFloat])

  return (
    <div ref={ref} className="stat-item">
      <div className="stat-big">{prefix}{val}{suffix}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <div className="stats-band">
      <div className="stats-grid">
        {stats.map(s => (
          <div key={s.label} className="stats-col">
            <Counter {...s} />
            <div className="stats-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
