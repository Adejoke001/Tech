import React from 'react'
import Link from 'next/link'
import styles from './services.module.css'  

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Software Development',
      description: 'Custom software solutions built with cutting-edge technologies for web, mobile, and desktop platforms.',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development']
    },
    {
      icon: '📱',
      title: 'Web Development',
      description: 'Responsive and scalable web applications using modern frameworks and best practices.',
      features: ['Frontend Development', 'Backend Development', 'E-commerce', 'CMS Development']
    },
    {
      icon: '🤖',
      title: 'AI & ML Solutions',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      link: '/services/ai-automation-consulting'
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions for businesses of all sizes.',
      features: ['Cloud Migration', 'DevOps', 'Serverless Architecture', 'Cloud Security'],
      link: '/services/cloud-devops-services'   
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audits', 'Penetration Testing', 'Data Protection', 'Compliance'],
      link: '/services/cybersecurity-services'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Data-driven insights and analytics solutions to power your business decisions.',
      features: ['Business Intelligence', 'Data Visualization', 'Big Data', 'Reporting'],
      link: '/services/data-engineering-analytics'
    }
  ]

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.titleAccent}>Services</span>
          </h2>
          <p className={styles.sectionDescription}>
            We offer end-to-end software development services with 17+ years of expertise, 
            delivering scalable and robust solutions for businesses worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.featuresList}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    <span className={styles.featureDot}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              {/* Learn More Link – uses custom link if provided, else default slug */}
              <Link 
                href={service.link || `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className={styles.learnMoreLink}
              >
                Learn More
                <span className={styles.arrow}>→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>Ready to Start Your Project?</h3>
            <p className={styles.ctaDescription}>
              Let&apos;s discuss how our software development services can help your business grow.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryCtaButton}>
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services