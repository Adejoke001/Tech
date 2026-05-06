import React from 'react'
import styles from './WhyChooseUs.module.css'  // Fixed import

const WhyChooseUs = () => {
  const processes = [
    {
      title: "Analysis",
      description: "Gather requirements, define scope, and prevent scope creep.",
      icon: "📊"
    },
    {
      title: "Resource Planning",
      description: "Assemble top experts to build a scalable product.",
      icon: "👥"
    },
    {
      title: "Costing", 
      description: "Generate detailed cost estimates and optimize project expenses.",
      icon: "💰"
    },
    {
      title: "Risk Management",
      description: "Identify potential threats to ensure smooth development and launch.",
      icon: "🛡️"
    },
    {
      title: "Change Management",
      description: "Implement structured change management to keep projects on track.",
      icon: "🔄"
    },
    {
      title: "Success Review",
      description: "Review KPIs to gauge project health and success.", 
      icon: "⭐"
    },
    {
      title: "Project Reporting",
      description: "Project reporting with detailed performance analysis.",
      icon: "📈"
    },
    {
      title: "Collaboration",
      description: "Tools for seamless project collaboration and communication.",
      icon: "🤝"
    }
  ]

  return (
    <section className={styles.whyChooseSection} id="why-choose-us">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Proven Processes That Turn Tech Projects Into <br/><span className={styles.titleAccent}>Wins</span>
          </h2>
          <p className={styles.sectionDescription}>
            From first consultation to final deployment, we ensure every milestone is delivered on time, 
            on budget, and on target. Our process blends strategic insight with flawless execution, 
            so you see ROI from day one.
          </p>
        </div>

        {/* Process Grid */}
        <div className={styles.processGrid}>
          <div className={styles.processRow}>
            {processes.slice(0, 4).map((process, index) => (
              <div 
                key={index}
                className={styles.processCard}
              >
                <div className={styles.cardContent}>
                  <div className={styles.processIcon}>
                    {process.icon}
                  </div>
                  
                  <h3 className={styles.processTitle}>
                    {process.title}
                  </h3>
                  
                  <p className={styles.processDescription}>
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.processRow}>
            {processes.slice(4, 8).map((process, index) => (
              <div 
                key={index + 4}
                className={styles.processCard}
              >
                <div className={styles.cardContent}>
                  <div className={styles.processIcon}>
                    {process.icon}
                  </div>
                  
                  <h3 className={styles.processTitle}>
                    {process.title}
                  </h3>
                  
                  <p className={styles.processDescription}>
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs