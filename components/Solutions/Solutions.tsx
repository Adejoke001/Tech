import React from 'react'
import Link from 'next/link'
import styles from './solutions.module.css'  // Fixed import

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
    <section className={styles.solutionSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🚀</span>
              Engineering Excellence
            </div>
            
            <h1 className={styles.mainTitle}>
              Engineering Solutions for <span className={styles.titleAccent}>Every Stage of Growth</span>
            </h1>
            
            <p className={styles.description}>
              We help startups and enterprises turn ideas into powerful, scalable software. 
              Whether you&apos;re building something new, upgrading legacy systems, or scaling 
              complex platforms, we make it faster, smarter, and easier – without compromise.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Start Your Project
                <span className={styles.buttonIcon}>→</span>
              </Link>
            </div>
            
            {/* Stats */}
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Content */}
          <div className={styles.visualContent}>
            <div className={styles.visualGrid}>
              {visualItems.map((item, index) => (
                <div 
                  key={index}
                  className={styles.visualCard}
                >
                  <div className={styles.visualIcon}>{item.icon}</div>
                  <h3 className={styles.visualTitle}>{item.title}</h3>
                  <p className={styles.visualDescription}>{item.description}</p>
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