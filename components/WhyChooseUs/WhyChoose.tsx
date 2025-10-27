import React from 'react';
import styles from './whychoose.module.css';
import Image from 'next/image';

const WhyChoose = () => {
  const solutions = [
    {
      id: 1,
      title: "CRM",
      image: "/images/crm.jpg", 
      description: "Custom CRM solutions that streamline customer relationships, automate sales processes, and provide actionable insights for business growth."
    },
    {
      id: 2,
      title: "Human Resource Management",
      image: "/images/hrm.webp",
      description: "Comprehensive HR management systems that handle recruitment, payroll, employee engagement, and performance tracking."
    },
    {
      id: 3,
      title: "Workforce Management",
      image: "/images/workforce.jpg",
      description: "Optimize your workforce with intelligent scheduling, time tracking, and productivity monitoring solutions."
    },
    {
      id: 4,
      title: "Fleet Management",
      image: "/images/fleetm.jpg",
      description: "Advanced fleet management systems for vehicle tracking, maintenance scheduling, and logistics optimization."
    }
  ];

  return (
    <section className={styles.engineeringSection} id="engineering-solutions">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Engineering Solutions That Solve Your Biggest Challenges
          </h2>
          <p className={styles.sectionSubtitle}>
            No matter the scale, our focus is simple – <span className={styles.highlight}>Measurable results, Delivered faster.</span>
          </p>
        </div>

        {/* Solutions Grid */}
        <div className={styles.solutionsGrid}>
          {solutions.map((solution) => (
            <div 
              key={solution.id}
              className={styles.solutionCard}
            >
              <div className={styles.cardImage}>
                {/* Using Next.js Image component */}
                <Image 
                  src={solution.image} 
                  alt={solution.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className={styles.imageOverlay}>
                  <h3 className={styles.solutionTitle}>{solution.title}</h3>
                </div>
              </div>
              
              {/* Hover Description */}
              <div className={styles.hoverContent}>
                <div className={styles.hoverDescription}>
                  {solution.description}
                </div>
                <div className={styles.hoverArrow}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;