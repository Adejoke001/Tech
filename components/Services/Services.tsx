import React from 'react'
import Link from 'next/link'
import './services.modules.css'

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
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions for businesses of all sizes.',
      features: ['Cloud Migration', 'DevOps', 'Serverless Architecture', 'Cloud Security']
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audits', 'Penetration Testing', 'Data Protection', 'Compliance']
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Data-driven insights and analytics solutions to power your business decisions.',
      features: ['Business Intelligence', 'Data Visualization', 'Big Data', 'Reporting']
    }
  ]

  return (
    <section className="servicesSection">
      <div className="container">
        {/* Section Header */}
        <div className="sectionHeader">
          <h2 className="sectionTitle">
            Our <span className="titleAccent">Services</span>
          </h2>
          <p className="sectionDescription">
            We offer end-to-end software development services with 17+ years of expertise, 
            delivering scalable and robust solutions for businesses worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="servicesGrid">
          {services.map((service, index) => (
            <div key={index} className="serviceCard">
              {/* Service Icon */}
              <div className="serviceIcon">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="serviceTitle">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="serviceDescription">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="featuresList">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="featureItem">
                    <span className="featureDot"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link 
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="learnMoreLink"
              >
                Learn More
                <span className="arrow">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="ctaSection">
          <div className="ctaCard">
            <h3 className="ctaTitle">
              Ready to Start Your Project?
            </h3>
            <p className="ctaDescription">
              Let&apos;s discuss how our software development services can help your business grow.
            </p>
            <div className="ctaButtons">
              <button className="primaryCtaButton">
                Get Free Consultation
              </button>
              <button className="secondaryCtaButton">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services