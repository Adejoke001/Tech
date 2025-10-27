'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    projectType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your API call here
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'hello@yourcompany.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon to Fri 9am to 6pm'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: '123 Business District, City, State 12345',
      description: 'Come say hello at our office'
    }
  ];

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'Custom Software',
    'E-commerce Solution',
    'UI/UX Design',
    'Digital Transformation',
    'Other'
  ];

  const features = [
    "97% Client Satisfaction Rate",
    "50+ Industry Experts", 
    "4200+ Projects Delivered",
    "24/7 Project Support"
  ];

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          {/* Contact Form - White Background */}
          <motion.div 
            className={styles.formSection}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>Get In Touch</h2>
              <p className={styles.formDescription}>
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.formInput}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Work Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.formInput}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.formLabel}>Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="projectType" className={styles.formLabel}>Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={styles.formSelect}
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.formTextarea}
                    rows={5}
                    required
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  />
                </div>

                <motion.button 
                  type="submit"
                  className={styles.submitButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <svg className={styles.buttonArrow} width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 0L8.59 1.41L14.17 7H0V9H14.17L8.59 14.59L10 16L20 10L10 0Z" fill="currentColor"/>
                  </svg>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information - Dark Background */}
          <motion.div 
            className={styles.infoSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.infoContainer}>
              <h2 className={styles.infoTitle}>Contact Information</h2>
              <p className={styles.infoDescription}>
                Choose the most convenient way to reach out to us. We're here to help you succeed.
              </p>

              <div className={styles.contactMethods}>
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className={styles.contactMethod}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={styles.methodIcon}>{item.icon}</div>
                    <div className={styles.methodContent}>
                      <h3 className={styles.methodTitle}>{item.title}</h3>
                      <p className={styles.methodDetail}>{item.details}</p>
                      <p className={styles.methodDescription}>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section - Separate row above map with dark background */}
      <div className={styles.featuresSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.featuresContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className={styles.featuresTitle}>Why Choose Us?</h2>
            <p className={styles.featuresDescription}>
              We deliver exceptional results with proven expertise and dedicated support
            </p>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.featureItem}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.featureIcon}>✓</div>
                  <span className={styles.featureText}>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className={styles.mapSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.mapContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className={styles.mapContent}>
              <div className={styles.mapWrapper}>
                {/* Temporary UK Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429729.141258394!2d-7.230347562499989!3d52.83903680000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d0a98a6c1ed5df%3A0xf4e19525332d8ea8!2sUnited%20Kingdom!5e0!3m2!1sen!2suk!4v1698765432100!5m2!1sen!2suk"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="UK Map"
                  className={styles.mapIframe}
                />
                <div className={styles.mapOverlay}>
                  <button className={styles.directionsButton}>
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;