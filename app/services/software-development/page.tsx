'use client';

import Navbar from '@/components/Navbar/Navbar';
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import React from 'react';
import Image from 'next/image';
import styles from './softwaredev.module.css';
import SoftwareDevelopmentServices from './softwareCard/page';

// Define your client logos array
const clientLogos = [
  { src: '/images/topdevelopers.png', alt: 'Fleet Management' },
  { src: '/images/goodfirm.png', alt: 'Good Firm' },
  { src: '/images/designrush.png', alt: 'Design Rush' },
  { src: '/images/clutch.png', alt: 'Clutch' },
];

export default function SoftwareDev() {
  return (
    <>
    <div className={styles.heroSection}>
      <Navbar/>
      {/* Background Overlay */}
      <div className={styles.overlay}></div>
      
      {/* Content */}
      <div className={styles.content}>
        {/* Left Content - Headline, Text & CTA */}
        <div className={styles.leftContent}>
          <motion.div 
            className={styles.headline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className={styles.mainTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Software Development Services
            </motion.h1>
            
            <motion.p 
              className={styles.subheadline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className={styles.highlight}>ValueCoders</span> delivers end-to-end software development solutions that transform your business vision into reality. Our expert team builds scalable, secure applications using cutting-edge technologies to drive growth and innovation for startups and enterprises alike.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              className={styles.ctaButton}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#fbbf24"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              Get Free Consultation
            </motion.button>
          </motion.div>
        </div>

        {/* Right Content - Testimonial Card & Trusted Clients */}
        <div className={styles.rightContent}>
          {/* Testimonial Card */}
          <motion.div 
            className={styles.testimonialCard}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className={styles.testimonialImage}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/images/testimonial.jpg" 
                  alt="Rebecca - Client"
                  width={100}
                  height={100}
                  className={styles.clientImage}
                />
              </motion.div>
            </div>
            <div className={styles.testimonialContent}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Quote className={styles.quoteIcon} />
              </motion.div>
              <motion.p 
                className={styles.testimonialText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                They go above and beyond to ensure quality and satisfaction. A true partner in every sense.
              </motion.p>
              <motion.p 
                className={styles.testimonialAuthor}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                - Rebecca
              </motion.p>
              
              <motion.div 
                className={styles.ratings}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className={styles.ratingItem}>
                  <div className={styles.ratingStars}>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                      >
                        <Star className={styles.starIcon} fill={i < 4 ? "currentColor" : "none"} />
                      </motion.div>
                    ))}
                  </div>
                  <span className={styles.ratingText}>Rated 4.8/5 on G2</span>
                </div>
                
                <div className={styles.ratingDivider}></div>
                
                <div className={styles.ratingItem}>
                  <div className={styles.ratingStars}>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + i * 0.1, duration: 0.3 }}
                      >
                        <Star className={styles.starIcon} fill={i < 5 ? "currentColor" : "none"} />
                      </motion.div>
                    ))}
                  </div>
                  <span className={styles.ratingText}>Rated 4.9/5 on Clutch</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Trusted Clients Section */}
          <motion.div 
            className={styles.trustedClients}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <p className={styles.clientsLabel}>Trusted by 650+ Global Brands</p>
            <div className={styles.clientsGrid}>
              {clientLogos.map((client, index) => (
                <motion.div 
                  key={client.alt}
                  className={styles.clientLogo}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 1.4 + index * 0.1, 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className={styles.logoContainer}>
                    <Image 
                      src={client.src}
                      alt={client.alt}
                      fill
                      className={styles.clientLogoImage}
                      sizes="(max-width: 768px) 100px, 150px"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </div>
    <SoftwareDevelopmentServices/>
    </>
  );
}