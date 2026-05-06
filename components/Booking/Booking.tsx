'use client';
import React, {FormEvent } from 'react';
import Link from 'next/link';
import styles from './booking.module.css';

const Booking = () => {
  // const fileInputRef = useRef<HTMLInputElement>(null);
  // const [isDragging, setIsDragging] = useState(false);

  // const handleFileDrop = (e: DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   setIsDragging(false);
  //   const files = e.dataTransfer.files;
  //   if (files.length > 0) {
  //     console.log('Files dropped:', files);
  //   }
  // };

  // const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   if (files && files.length > 0) {
  //     console.log('Files selected:', files);
  //   }
  // };

  // const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   setIsDragging(true);
  // };

  // const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   setIsDragging(false);
  // };

  // const handleBrowseClick = () => {
  //   fileInputRef.current?.click();
  // };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  // ✅ Dynamic mailto generator
  const createMailtoLink = (email: string, subject: string, body: string) => {
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // ✅ Email click handler
  const handleEmailClick = () => {
    const email = 'hello@bbmcoders.com';

    const subject = 'Inquiry from BBM Coders Website';
    const body = `Hello BBM Coders,

I would like to get in touch regarding...

Best regards,
[Your Name]`;

    const mailtoLink = createMailtoLink(email, subject, body);

    window.location.href = mailtoLink;
  };

  return (
    <section className={styles.bookingSection}>
      <div className={styles.container}>
        <div className={styles.bookingContent}>
          {/* Left Side */}
          <div className={styles.contentSide}>
            <div className={styles.contactOptions}>
              {/* Book A Call */}
              <Link href="/contact" className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>📞</span>
                </div>
                <div className={styles.textContent}>
                  <h3 className={styles.contentTitle}>Book A Call</h3>
                  <p className={styles.contentDescription}>BBMcoders</p>
                </div>
              </Link>

              {/* ✅ Email us (dynamic mailto) */}
              <div
                onClick={handleEmailClick}
                className={styles.contactItem}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleEmailClick()}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>📧</span>
                </div>
                <div className={styles.textContent}>
                  <h3 className={styles.contentTitle}>Email us</h3>
                  <p className={styles.contentDescription}>bbmcoders</p>
                </div>
              </div>
            </div>

            <div className={styles.trustedBy}>
              <p className={styles.trustedText}>
                Trusted by Startups and Fortune 500 companies
              </p>
            </div>

            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>⭐</div>
                <div className={styles.statContent}>
                  <h4 className={styles.statNumber}>20+ years of experience</h4>
                  <p className={styles.statDescription}>
                    We can handle projects of all complexities.
                  </p>
                </div>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statIcon}>⭐</div>
                <div className={styles.statContent}>
                  <h4 className={styles.statNumber}>2500+ satisfied customers</h4>
                  <p className={styles.statDescription}>
                    Startups to Fortune 500, we have worked with all.
                  </p>
                </div>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statIcon}>⭐</div>
                <div className={styles.statContent}>
                  <h4 className={styles.statNumber}>675+ in-house team</h4>
                  <p className={styles.statDescription}>
                    Top 1% industry talent to ensure your digital success.
                  </p>
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
                      name="firstName"
                      className={styles.formInput}
                      autoComplete="given-name"
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
                      name="lastName"
                      className={styles.formInput}
                      autoComplete="family-name"
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
                      name="email"
                      className={styles.formInput}
                      autoComplete="email"
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
                      name="phone"
                      className={styles.formInput}
                      autoComplete="tel"
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
                    name="company"
                    className={styles.formInput}
                    autoComplete="organization"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.formTextarea}
                    rows={3}
                    placeholder="Project Brief..."
                  ></textarea>
                </div>

                {/* <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Attach Files</label>
                  <div
                    className={`${styles.fileDropZone} ${
                      isDragging ? styles.dragover : ''
                    }`}
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
                </div> */}

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