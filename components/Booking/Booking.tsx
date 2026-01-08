'use client';
import React, { useState, useRef, FormEvent, ChangeEvent, DragEvent } from 'react';
import styles from './booking.module.css';

const Booking = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      // Handle file upload logic here
      console.log('Files dropped:', files);
    }
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Handle file upload logic here
      console.log('Files selected:', files);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section className={styles.bookingSection}>
      <div className={styles.container}>
        <div className={styles.bookingContent}>
          {/* Left Side - Content */}
          <div className={styles.contentSide}>
            <div className={styles.contactOptions}>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>📞</span>
                </div>
                <div className={styles.textContent}>
                  <h3 className={styles.contentTitle}>Book A Call</h3>
                  <p className={styles.contentDescription}>valuecoders</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>📧</span>
                </div>
                <div className={styles.textContent}>
                  <h3 className={styles.contentTitle}>Email us</h3>
                  <p className={styles.contentDescription}>valuecoders</p>
                </div>
              </div>
            </div>

            <div className={styles.trustedBy}>
              <p className={styles.trustedText}>Trusted by Startups and Fortune 500 companies</p>
            </div>

            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>⭐</div>
                <div className={styles.statContent}>
                  <h4 className={styles.statNumber}>20+ years of experience</h4>
                  <p className={styles.statDescription}>We can handle projects of all complexities.</p>
                </div>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statIcon}>⭐</div>
                <div className={styles.statContent}>
                  <h4 className={styles.statNumber}>2500+ satisfied customers</h4>
                  <p className={styles.statDescription}>Startups to Fortune 500, we have worked with all.</p>
                </div>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statIcon}>⭐</div>
                <div className={styles.statContent}>
                  <h4 className={styles.statNumber}>675+ in-house team</h4>
                  <p className={styles.statDescription}>Top 1% industry talent to ensure your digital success.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={styles.formSide}>
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>Book Free Consultation</h2>
              <form className={styles.bookingForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName" className={styles.formLabel}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className={styles.formInput}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName" className={styles.formLabel}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className={styles.formInput}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={styles.formInput}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className={styles.formInput}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.formLabel}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    className={styles.formTextarea}
                    rows={3}
                    placeholder="Project Brief..."
                  ></textarea>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Attach Files
                  </label>
                  <div 
                    className={`${styles.fileDropZone} ${isDragging ? styles.dragover : ''}`}
                    onDrop={handleFileDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onClick={handleBrowseClick}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      className={styles.fileInput}
                      onChange={handleFileInput}
                      multiple
                    />
                    <div className={styles.fileDropContent}>
                      <span className={styles.fileDropText}>
                        <span className={styles.browseText}>BROWSE</span>
                        <span className={styles.separator}>|</span>
                        DROP FILES HERE
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.buttonContainer}>
                  <button type="submit" className={styles.submitButton}>
                    Enquire Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;