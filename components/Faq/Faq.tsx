'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './faq.module.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What industries do you specialize in?",
      answer: "We have extensive experience across 50+ industry sectors including healthcare, finance, e-commerce, education, and enterprise solutions. Our team adapts to your specific industry requirements."
    },
    {
      id: 2,
      question: "How do you ensure project quality?",
      answer: "We follow rigorous quality assurance processes including code reviews, automated testing, and continuous integration. Our 97% client satisfaction rate reflects our commitment to quality."
    },
    {
      id: 3,
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity, but we follow agile methodologies to deliver MVP within 4-8 weeks. We provide detailed project plans with clear milestones from day one."
    },
    {
      id: 4,
      question: "Do you work with startups?",
      answer: "Absolutely! We love working with startups and offer flexible engagement models. We've helped 100+ startups build their initial products and scale successfully."
    },
    {
      id: 5,
      question: "How do you handle project communication?",
      answer: "We provide dedicated project managers and use collaborative tools like Slack, Jira, and daily standups. You'll have transparent access to project progress and team members."
    },
    // {
    //   id: 6,
    //   question: "What about post-launch support?",
    //   answer: "We offer comprehensive maintenance and support packages. This includes bug fixes, performance optimization, feature updates, and 24/7 monitoring for critical applications."
    // },
    {
      id: 7,
      question: "How do you ensure enterprise-grade delivery across multiple time zones?",
      answer: "We operate with distributed teams across time zones ensuring 24/7 development cycles. Our structured handover processes, overlapping work hours, and robust communication protocols guarantee seamless collaboration and continuous progress regardless of geographical boundaries."
    },
    {
      id: 8,
      question: "How do you handle legacy modernization without downtime?",
      answer: "We employ phased migration strategies, feature flags, and parallel running systems to ensure zero downtime during legacy modernization. Our approach includes thorough testing, rollback plans, and gradual user migration to minimize business disruption while upgrading your technology stack."
    },
    {
      id: 9,
      question: "I want to outsource software development. What engagement options do you offer?",
      answer: "We offer flexible engagement models including dedicated teams, fixed-price projects, time & material contracts, and hybrid models. Each option is tailored to your specific needs, budget, and project requirements with complete transparency and scalability."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Frequently Asked <span className={styles.titleAccent}>Questions</span>
          </h2>
          <p className={styles.sectionDescription}>
            Get answers to common questions about our development process, timelines, 
            and how we deliver exceptional results for every project.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={styles.faqContainer}>
          <div className={styles.faqList}>
            {faqData.map((faq, index) => (
              <div 
                key={faq.id}
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              >
                <button 
                  className={styles.faqQuestion}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span className={styles.accordionIcon}>
                    <span className={styles.plusIcon}></span>
                    <span className={styles.minusIcon}></span>
                  </span>
                </button>
                
                <div className={styles.faqAnswer}>
                  <div className={styles.answerContent}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Side Content - Now Sticky with Framer Motion */}
          <motion.div 
            className={styles.sideContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className={styles.helpCard}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className={styles.helpIcon}>💬</div>
              <h3 className={styles.helpTitle}>Still have questions?</h3>
              <p className={styles.helpDescription}>
                Can&apos;t find the answer you&apos;re looking for? Our team is here to help you with any questions about our services.
              </p>
              <motion.button 
                className={styles.helpButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className={styles.buttonLink}>
                Contact Support
                <svg className={styles.buttonArrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                </svg>
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;