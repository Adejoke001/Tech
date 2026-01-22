'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle, Bug, Users, BarChart,
  ArrowRight, ChevronRight, PlayCircle,
  Award, Target, ShieldCheck,
  Code, Activity, Smartphone, Zap,
  FileText, MessageSquare
} from 'lucide-react';
import styles from './quality.module.css';

export default function QualityAssurancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  // Counter animation
  const [bugCount, setBugCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [coverageCount, setCoverageCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    if (isStatsInView) {
      const bugTimer = setInterval(() => {
        setBugCount(prev => prev >= 50000 ? 50000 : prev + 1000);
      }, 10);

      const projectTimer = setInterval(() => {
        setProjectCount(prev => prev >= 2500 ? 2500 : prev + 50);
      }, 10);

      const coverageTimer = setInterval(() => {
        setCoverageCount(prev => prev >= 98 ? 98 : prev + 1);
      }, 30);

      const clientTimer = setInterval(() => {
        setClientCount(prev => prev >= 650 ? 650 : prev + 10);
      }, 10);

      return () => {
        clearInterval(bugTimer);
        clearInterval(projectTimer);
        clearInterval(coverageTimer);
        clearInterval(clientTimer);
      };
    }
  }, [isStatsInView]);

  // QA Services
  const qaServices = [
    {
      id: 1,
      title: 'Functional Testing',
      description: 'Validate that software functions according to specifications and requirements.',
      icon: <CheckCircle className={styles.serviceIcon} />,
      color: '#60a5fa',
      details: [
        'Unit Testing',
        'Integration Testing',
        'System Testing',
        'User Acceptance Testing',
        'Regression Testing'
      ]
    },
    {
      id: 2,
      title: 'Performance Testing',
      description: 'Evaluate system performance under various load conditions.',
      icon: <Activity className={styles.serviceIcon} />,
      color: '#10b981',
      details: [
        'Load Testing',
        'Stress Testing',
        'Spike Testing',
        'Endurance Testing',
        'Volume Testing'
      ]
    },
    {
      id: 3,
      title: 'Security Testing',
      description: 'Identify vulnerabilities and ensure protection against threats.',
      icon: <ShieldCheck className={styles.serviceIcon} />,
      color: '#8b5cf6',
      details: [
        'Vulnerability Assessment',
        'Penetration Testing',
        'Security Scanning',
        'Risk Assessment',
        'Security Auditing'
      ]
    },
    {
      id: 4,
      title: 'Automation Testing',
      description: 'Implement automated test suites for efficient regression testing.',
      icon: <Zap className={styles.serviceIcon} />,
      color: '#f59e0b',
      details: [
        'Selenium WebDriver',
        'Cypress',
        'Playwright',
        'TestComplete',
        'Robot Framework'
      ]
    },
    {
      id: 5,
      title: 'Mobile Testing',
      description: 'Comprehensive testing across iOS and Android platforms.',
      icon: <Smartphone className={styles.serviceIcon} />,
      color: '#ef4444',
      details: [
        'Device Compatibility',
        'App Performance',
        'Battery Consumption',
        'Network Conditions',
        'Store Compliance'
      ]
    },
    {
      id: 6,
      title: 'API Testing',
      description: 'Validate API functionality, reliability, and security.',
      icon: <Code className={styles.serviceIcon} />,
      color: '#06b6d4',
      details: [
        'REST API Testing',
        'SOAP API Testing',
        'GraphQL Testing',
        'Load Testing',
        'Security Testing'
      ]
    }
  ];

  // QA Process Steps - 6 on a row on large screen, 2 columns on small screens
  const qaProcess = [
    {
      step: 1,
      title: 'Requirement Analysis',
      description: 'Analyze project requirements and define test objectives.',
      image: '/images/resource.jpg',
      icon: <FileText className={styles.processIcon} />
    },
    {
      step: 2,
      title: 'Test Planning',
      description: 'Create detailed test plans, strategies, and timelines.',
      image: '/images/test.jpg',
      icon: <Target className={styles.processIcon} />
    },
    {
      step: 3,
      title: 'Test Design',
      description: 'Design test cases, scenarios, and automation scripts.',
      image: '/images/design.jpg',
      icon: <Code className={styles.processIcon} />
    },
    {
      step: 4,
      title: 'Test Execution',
      description: 'Execute test cases and document results systematically.',
      image: '/images/execution.jpg',
      icon: <PlayCircle className={styles.processIcon} />
    },
    {
      step: 5,
      title: 'Defect Tracking',
      description: 'Log, prioritize, and track defects to resolution.',
      image: '/images/defect.jpg',
      icon: <Bug className={styles.processIcon} />
    },
    {
      step: 6,
      title: 'Test Reporting',
      description: 'Generate comprehensive test reports and metrics.',
      image: '/images/report.jpg',
      icon: <BarChart className={styles.processIcon} />
    }
  ];

  // Industry Solutions
  const industrySolutions = [
    {
      industry: 'FinTech',
      challenges: 'High security requirements, regulatory compliance, transaction accuracy',
      solutions: [
        'PCI DSS Compliance Testing',
        'Penetration Testing',
        'Load Testing for Trading Platforms',
        'Mobile Banking App Testing'
      ]
    },
    {
      industry: 'Healthcare',
      challenges: 'HIPAA compliance, data privacy, medical device regulations',
      solutions: [
        'HIPAA Compliance Testing',
        'Medical Device Validation',
        'EHR System Testing',
        'Telemedicine Platform Testing'
      ]
    },
    {
      industry: 'E-commerce',
      challenges: 'High traffic handling, payment gateway integration, mobile optimization',
      solutions: [
        'Performance & Load Testing',
        'Payment Gateway Testing',
        'Mobile App Testing',
        'Security & Vulnerability Testing'
      ]
    },
    {
      industry: 'IoT',
      challenges: 'Device compatibility, network reliability, data security',
      solutions: [
        'Device Compatibility Testing',
        'Network & Connectivity Testing',
        'Security Testing',
        'Performance Testing'
      ]
    }
  ];

  // Testimonial
  const testimonial = {
    name: 'Michael Rodriguez',
    role: 'CTO, FinTech Solutions Inc.',
    content: 'Their QA team identified critical security vulnerabilities that our internal team missed. The depth of their testing saved us from potential compliance issues.',
    rating: 5,
    project: 'Banking Platform Security Audit'
  };

  // FAQs
  const faqs = [
    {
      question: 'What is the difference between QA and testing?',
      answer: 'Quality Assurance (QA) is the overall process of ensuring quality in software development, including processes, standards, and methodologies. Testing is a subset of QA focused on executing software to identify defects.'
    },
    {
      question: 'How long does a typical QA project take?',
      answer: 'The duration depends on project complexity, scope, and testing requirements. Typically, QA projects range from 2-8 weeks for standard applications. Complex enterprise systems may require 12+ weeks.'
    },
    {
      question: 'What testing tools do you use?',
      answer: 'We use a comprehensive toolset including Selenium, Cypress, Playwright for automation; JMeter, LoadRunner for performance; OWASP ZAP for security; Appium for mobile; and TestRail, JIRA for test management.'
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section with Background Image */}
      <section className={styles.heroSection}>
        <div className={styles.overlay}></div>
        
        <div className={styles.content}>
          {/* Left Side - Content */}
          <motion.div 
            className={styles.leftContent}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={styles.headline}
            >
              <h1 className={styles.mainTitle}>
                Quality Assurance & <span className={styles.highlight}>Testing</span> Services
              </h1>
              <p className={styles.subheadline}>
                Deliver flawless software with our comprehensive QA and testing solutions. 
                From manual testing to advanced automation, we ensure your applications 
                are robust, secure, and user-ready.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className={styles.buttonContainer}
            >
              <Link href="/contact" className={styles.ctaButton}>
                Get Free QA Assessment
                <ArrowRight className={styles.buttonIcon} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Testimonial Card */}
          <motion.div 
            className={styles.rightContent}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialImage}>
                <div className={styles.clientImageWrapper}>
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className={styles.clientImage}
                  />
                </div>
              </div>
              
              <div className={styles.testimonialContent}>
                <MessageSquare className={styles.quoteIcon} />
                <p className={styles.testimonialText}>{testimonial.content}</p>
                <div className={styles.testimonialAuthor}>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
                
                <div className={styles.ratings}>
                  <div className={styles.ratingItem}>
                    <div className={styles.ratingStars}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className={styles.starIcon}>★</span>
                      ))}
                    </div>
                    <div className={styles.ratingText}>Expert QA Team</div>
                  </div>
                  
                  <div className={styles.ratingDivider}></div>
                  
                  <div className={styles.ratingItem}>
                    <div className={styles.projectBadge}>
                      <Award className={styles.badgeIcon} />
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <motion.div
            className={styles.statCard}
            initial={{ scale: 0 }}
            animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <Bug className={styles.statIcon} />
            <div className={styles.statNumber}>{bugCount.toLocaleString()}+</div>
            <div className={styles.statLabel}>Bugs Identified</div>
          </motion.div>
          
          <motion.div
            className={styles.statCard}
            initial={{ scale: 0 }}
            animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
          >
            <CheckCircle className={styles.statIcon} />
            <div className={styles.statNumber}>{projectCount.toLocaleString()}+</div>
            <div className={styles.statLabel}>Projects Delivered</div>
          </motion.div>
          
          <motion.div
            className={styles.statCard}
            initial={{ scale: 0 }}
            animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          >
            <BarChart className={styles.statIcon} />
            <div className={styles.statNumber}>{coverageCount}%</div>
            <div className={styles.statLabel}>Test Coverage</div>
          </motion.div>
          
          <motion.div
            className={styles.statCard}
            initial={{ scale: 0 }}
            animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
          >
            <Users className={styles.statIcon} />
            <div className={styles.statNumber}>{clientCount}+</div>
            <div className={styles.statLabel}>Satisfied Clients</div>
          </motion.div>
        </div>
      </section>

      {/* QA Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Comprehensive <span className={styles.titleHighlight}>QA Services</span>
          </h2>
          <p className={styles.sectionDescription}>
            We provide end-to-end quality assurance services to ensure your software 
            meets the highest standards of performance, security, and user experience.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {qaServices.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIconWrapper} style={{ backgroundColor: `${service.color}20`, color: service.color }}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
              
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <div className={styles.serviceDetails}>
                <ul className={styles.detailsList}>
                  {service.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className={styles.detailItem}>
                      <CheckCircle className={styles.checkIcon} style={{ color: service.color }} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`} className={styles.learnMoreLink}>
                  Learn More
                  <ChevronRight className={styles.linkIcon} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* QA Process Section */}
      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Our Proven <span className={styles.titleHighlight}>QA Process</span>
          </h2>
          <p className={styles.sectionDescription}>
            A structured approach to quality assurance that ensures comprehensive 
            testing and timely delivery.
          </p>
        </div>

        <div className={styles.processContainer}>
          {qaProcess.map((process) => (
            <motion.div
              key={process.step}
              className={styles.processCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={styles.processNumber}>
                Step {process.step}
              </div>
              <div className={styles.processImage}>
                <Image
                  src={process.image}
                  alt={process.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 16.66vw"
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.processIconWrapper}>
                    {process.icon}
                  </div>
                  <h3 className={styles.processTitle}>{process.title}</h3>
                  <p className={styles.processDescription}>{process.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industry Solutions */}
      <section className={styles.industrySection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Industry-Specific <span className={styles.titleHighlight}>Solutions</span>
          </h2>
          <p className={styles.sectionDescription}>
            Tailored QA strategies for different industries with unique challenges 
            and compliance requirements.
          </p>
        </div>

        <div className={styles.industryGrid}>
          {industrySolutions.map((industry, index) => (
            <motion.div
              key={industry.industry}
              className={styles.industryCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.industryHeader}>
                <h3 className={styles.industryName}>{industry.industry}</h3>
                <div className={styles.challenges}>
                  <span className={styles.challengesLabel}>Key Challenges:</span>
                  <p className={styles.challengesText}>{industry.challenges}</p>
                </div>
              </div>
              
              <div className={styles.solutionsList}>
                <h4 className={styles.solutionsTitle}>Our Solutions:</h4>
                <ul className={styles.solutionsItems}>
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className={styles.solutionItem}>
                      <CheckCircle className={styles.solutionIcon} />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.buttonWrapper}>
                <Link href={`/industries/${industry.industry.toLowerCase()}`} className={styles.industryLink}>
                  Explore Solutions
                  <ArrowRight className={styles.linkIcon} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Frequently Asked <span className={styles.titleHighlight}>Questions</span>
          </h2>
          <p className={styles.sectionDescription}>
            Get answers to common questions about our QA and testing services.
          </p>
        </div>

        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={styles.faqCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className={styles.faqToggle}>
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>
              
              {openFaq === index && (
                <motion.div
                  className={styles.faqAnswer}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Ready to Ensure Quality?</h3>
          <p className={styles.ctaDescription}>
            Let&apos;s discuss your testing requirements and create a customized QA strategy.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaButton}>
              Start Free QA Assessment
              <ArrowRight className={styles.buttonIcon} />
            </Link>
            <Link href="/portfolio" className={styles.secondaryButton}>
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}