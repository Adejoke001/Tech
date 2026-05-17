import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>

      {/* Content Container */}
      <div className={styles.content}>
        {/* Main Headline */}
        <div className={styles.headline}>
          <h1 className={styles.mainTitle}>
            <span className={styles.softwareDev}>Software Development</span>
            <span className={styles.companyText}>Company</span>
          </h1>

          {/* Subheadline */}
          <p className={styles.subheadline}>
            From agile MVPs to enterprise-grade platforms, we design, develop,
            and maintain{" "}
            <span>future-ready software that delivers results – on time, on budget, and without compromise.</span>
          </p>
        </div>

        {/* Awards & Recognition */}
        <div className={styles.awardsSection}>
          <div className={styles.awardsCard}>
            <p className={styles.awardsText}>
              🏆 Leading IT Outsourcing Partner in Nigeria
              <span className={styles.awardsHighlight}>
                {" "}
                Serving Startups to Enterprises
              </span>
            </p>
            <div className={styles.awardsLogos}>
              <span className={styles.awardsLogo}>10+ Full-time Experts</span>
              <span className={styles.awardsDivider}>•</span>
              <span className={styles.awardsLogo}>15+ In-house Team</span>
              <span className={styles.awardsDivider}>•</span>
              <span className={styles.awardsLogo}>100+ Clients</span>
              <span className={styles.awardsDivider}>•</span>
              <span className={styles.awardsLogo}>Global Reach</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.bounce}>
          <div className={styles.scrollCircle}>
            <div className={styles.scrollDot}></div>
          </div>
        </div>
      </div>
    </section>
  );
}