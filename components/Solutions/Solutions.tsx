import React from 'react'
import Link from 'next/link'
import './solutions.modules.css'

const Solutions = () => {
  const visualItems = [
    {
      icon: '⚡',
      title: 'Faster Development',
      description: 'Rapid prototyping and agile delivery'
    },
    {
      icon: '🧠',
      title: 'Smarter Solutions',
      description: 'AI-powered insights and automation'
    },
    {
      icon: '🚀',
      title: 'Easier Scaling',
      description: 'Seamless growth and performance'
    },
    {
      icon: '🛡️',
      title: 'No Compromise',
      description: 'Quality and security guaranteed'
    },
    {
      icon: '🔧',
      title: 'Legacy Modernization',
      description: 'Upgrade and optimize existing systems'
    },
    {
      icon: '🌐',
      title: 'Global Delivery',
      description: 'Round-the-clock development teams'
    }
  ]

  const stats = [
    { number: '70%', label: 'Faster Delivery' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '99.9%', label: 'Quality Assurance' },
    { number: '24/7', label: 'Support' }
  ]

  return (
    <section className="solutionSection">
      <div className="container">
        <div className="contentWrapper">
          {/* Text Content */}
          <div className="textContent">
            <div className="badge fadeIn">
              <span className="badgeIcon">🚀</span>
              Engineering Excellence
            </div>
            
            <h1 className="mainTitle fadeIn staggerDelay1">
              Engineering Solutions for <span className="titleAccent">Every Stage of Growth</span>
            </h1>
            
            <p className="description fadeIn staggerDelay2">
              We help startups and enterprises turn ideas into powerful, scalable software. 
              Whether you&apos;re building something new, upgrading legacy systems, or scaling 
              complex platforms, we make it faster, smarter, and easier – without compromise.
            </p>
            
            <div className="ctaButtons fadeIn staggerDelay3">
              <Link href="/contact" className="primaryButton">
                Start Your Project
                <span className="buttonIcon">→</span>
              </Link>
              {/* <Link href="/our-process" className="secondaryButton">
                Our Process
                <span className="buttonIcon">→</span>
              </Link> */}
            </div>
            
            {/* Stats */}
            <div className="statsGrid fadeIn">
              {stats.map((stat, index) => (
                <div key={index} className="statItem">
                  <div className="statNumber">{stat.number}</div>
                  <div className="statLabel">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Content */}
          <div className="visualContent">
            <div className="visualGrid">
              {visualItems.map((item, index) => (
                <div 
                  key={index}
                  className={`visualCard slideInRight staggerDelay${index % 3}`}
                >
                  <div className="visualIcon">{item.icon}</div>
                  <h3 className="visualTitle">{item.title}</h3>
                  <p className="visualDescription">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions