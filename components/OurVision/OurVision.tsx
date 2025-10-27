'use client';
import React, { useState } from 'react';
import styles from './ourvision.module.css';
import Image from 'next/image';

const OurVision = () => {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
  
  const trustedClients = [
    { id: 1, name: "GoodFirms", logo: "/images/goodfirm.png" },
    { id: 2, name: "Clutch", logo: "/images/clutch.png" },
    { id: 3, name: "TopDevelopers", logo: "/images/topdevelopers.png" },
    { id: 4, name: "DesignRush", logo: "/images/designrush.png" }
  ];

  const handleImageError = (clientId: number) => {
    setImageErrors(prev => ({ ...prev, [clientId]: true }));
  };

  return (
    <section className={styles.visionSection}>
      <div className={styles.container}>
        <div className={styles.visionContent}>
          {/* Left Column - Text Content */}
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>
              Our Vision for Your <span className={styles.titleAccent}>Success</span>
            </h2>
            
            <div className={styles.textGroup}>
              <p className={styles.paragraph}>
                We envision transforming complex business challenges into streamlined digital solutions 
                that drive growth and create lasting competitive advantages.
              </p>
              
              <p className={styles.paragraph}>
                Through cutting-edge technology and proven expertise, we bridge the gap between 
                ambitious ideas and remarkable achievements.
              </p>
            </div>

            {/* Contact Button */}
            <button className={styles.contactButton}>
              Contact Us
              <span className={styles.buttonArrow}>→</span>
            </button>
          </div>

          {/* Right Column - Images & Trusted Clients */}
          <div className={styles.visualContent}>
            <div className={styles.imageContainer}>
              {/* Main Image */}
              <div className={styles.mainImage}>
                <Image 
                  src="/images/vision.jpg"
                  alt="Our Vision"
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Overlay Image */}
              <div className={styles.overlayImage}>
                <Image 
                  src="/images/vision2.jpg" 
                  alt="Our Team"
                  fill
                  className={styles.overlayImg}
                  sizes="(max-width: 768px) 130px, 170px"
                />
              </div>
            </div>

            {/* Trusted Clients - Moved to right column */}
            <div className={styles.clientsSection}>
              <p className={styles.clientsTitle}>Trusted by Industry Leaders</p>
              <div className={styles.clientsGrid}>
                {trustedClients.map((client) => (
                  <div key={client.id} className={styles.clientLogo}>
                    {imageErrors[client.id] ? (
                      <div className={styles.logoPlaceholder}>
                        {client.name}
                      </div>
                    ) : (
                      <Image 
                        src={client.logo}
                        alt={client.name}
                        width={100}
                        height={80}
                        className={styles.clientImage}
                        onError={() => handleImageError(client.id)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;