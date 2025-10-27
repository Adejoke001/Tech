import React from 'react';
import styles from './projectInMind.module.css';
import Image from 'next/image';

interface ProjectInMindProps {
  imagePath: string;
  imageAlt?: string;
}

const ProjectInMind: React.FC<ProjectInMindProps> = ({ 
  imageAlt = "Project Collaboration" 
}) => {
  const stats = [
    { id: 1, value: "50+", label: "Industry Sectors" },
    { id: 2, value: "97%", label: "Client Satisfaction" },
    { id: 3, value: "4200+", label: "Projects" }
  ];

  return (
    <section className={styles.projectSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Column - Image */}
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <Image 
                src={"/images/project.jpg"}
                alt={imageAlt}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={styles.contentColumn}>
            <div className={styles.textContent}>
              <h2 className={styles.title}>
                Got a Project in Mind?
              </h2>
              
              <p className={styles.description}>
                Let's transform your concept into a market-winning product. Our teams integrate 
                seamlessly with yours, bringing speed, skill, and scalability to every project.
              </p>

              {/* Stats */}
              <div className={styles.statsGrid}>
                {stats.map((stat) => (
                  <div key={stat.id} className={styles.statItem}>
                    <div className={styles.statValue}>
                      {stat.value}
                    </div>
                    <div className={styles.statLabel}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Button */}
              <button className={styles.contactButton}>
                CONTACT US
                <svg 
                  className={styles.buttonArrow} 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none"
                >
                  <path 
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" 
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInMind;