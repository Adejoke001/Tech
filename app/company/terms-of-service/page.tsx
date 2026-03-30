'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
    ArrowRight, FileText,
} from 'lucide-react';
import styles from './terms.module.css';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;  // custom shorthand prop
}

export default function TermsPage() {
    const lastUpdated = 'March 30, 2025';
    

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION (minimal) ===== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
                        alt="Terms of Service"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroInner}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* <div className={styles.heroBadge}>
                            <Sparkles size={16} /> Legal & Compliance
                        </div> */}
                        <h1 className={styles.heroTitle}>
                            Terms of <span className={styles.highlight}>Service</span>
                        </h1>
                        <p className={styles.heroDescription}>
                            Please read these terms carefully before using our website or services.
                        </p>
                        <div className={styles.heroMeta}>
                            <FileText size={16} />
                            <span>Effective date: {lastUpdated}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== TERMS CONTENT ===== */}
            <div className={styles.termsContainer}>
                <div className={styles.termsContent}>
                    {/* Acceptance of Terms */}
                    <section className={styles.termsSection}>
                        <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
                        <p className={styles.sectionText}>
                            By accessing or using the website, services, or applications (collectively, the &quot;Services&quot;) provided by BBM Multiconnect Global Technology (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to all of these Terms, you may not access or use the Services.
                        </p>
                        <p className={styles.sectionText}>
                            These Terms apply to all visitors, users, and others who access the Services (&quot;Users&quot;). We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
                        </p>
                    </section>

                    {/* Use of Services */}
                    <section className={styles.termsSection}>
                        <h2 className={styles.sectionTitle}>2. Use of Services</h2>
                        <p className={styles.sectionText}>
                            You agree to use the Services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any login credentials associated with your account and for all activities that occur under your account.
                        </p>
                        <p className={styles.sectionText}>
                            You agree not to:
                        </p>
                        <ul className={styles.termsList}>
                            <li>Use the Services in any way that violates applicable local, state, national, or international law.</li>
                            <li>Attempt to gain unauthorised access to any part of the Services, other accounts, computer systems, or networks connected to the Services.</li>
                            <li>Interfere with or disrupt the integrity or performance of the Services or any data contained therein.</li>
                            <li>Transmit any viruses, worms, defects, Trojan horses, or other items of a destructive nature.</li>
                            <li>Use any robot, spider, scraper, or other automated means to access the Services for any purpose without our express written permission.</li>
                        </ul>
                    </section>

                    {/* Intellectual Property */}
                    <section className={styles.termsSection}>
                        <h2 className={styles.sectionTitle}>3. Intellectual Property</h2>
                        <p className={styles.sectionText}>
                            All content, features, and functionality of the Services, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, and software, are the exclusive property of BBM Multiconnect Global Technology or its licensors and are protected by Nigerian and international copyright, trademark, patent, trade secret, and other intellectual property laws.
                        </p>
                        <p className={styles.sectionText}>
                            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without our prior written consent, except as incidental to normal web browsing or as expressly permitted by these Terms.
                        </p>
                    </section>

                    {/* User Content */}
                    <section className={styles.termsSection}>
                        <h2 className={styles.sectionTitle}>4. User Content</h2>
                        <p className={styles.sectionText}>
                            Our Services may allow you to post, submit, or otherwise make available content, including but not limited to feedback, comments, reviews, or other information (&quot;User Content&quot;). You retain all rights in, and are solely responsible for, the User Content you post.
                        </p>
                        <p className={styles.sectionText}>
                            By posting User Content, you grant us a non‑exclusive, worldwide, royalty‑free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content in connection with the Services and our business.
                        </p>
                        <p className={styles.sectionText}>
                            You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to publish the User Content you submit.
                        </p>
                    </section>

                    {/* Third-Party Links */}
                    <section className={styles.termsSection}>
                        <h2 className={styles.sectionTitle}>5. Third-Party Links</h2>
                        <p className={styles.sectionText}>
                            Our Services may contain links to third‑party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third‑party websites or services. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third‑party websites or services.
                        </p>
                    </section>

                    {/* Disclaimer of Warranties */}
                    <section className={styles.termsSection}>
                        <h2 className={styles.sectionTitle}>6. Disclaimer of Warranties</h2>
                        <p className={styles.sectionText}>
                            YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK. THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON‑INFRINGEMENT.
                        </p>
                        <p className={styles.sectionText}>
                            WE DO NOT WARRANT THAT (A) THE SERVICES WILL FUNCTION UNINTERRUPTED, SECURE, OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; (B) ANY ERRORS OR DEFECTS WILL BE CORRECTED; (C) THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR (D) THE RESULTS OF USING THE SERVICES WILL MEET YOUR REQUIREMENTS.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section className={styles.termsSection}>
                        <h2 className={styles.sectionTitle}>7. Limitation of Liability</h2>
                        <p className={styles.sectionText}>
                            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL BBM MULTICONNECT GLOBAL TECHNOLOGY, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICES.
                        </p>
                        <p className={styles.sectionText}>
                            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES EXCEED THE AMOUNT YOU PAID US, IF ANY, FOR ACCESSING THE SERVICES DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                        </p>
                    </section>

                    {/* Indemnification */}
                    <section className={styles.termsSection}>
                        <h2 className={styles.sectionTitle}>8. Indemnification</h2>
                        <p className={styles.sectionText}>
                            You agree to defend, indemnify, and hold harmless BBM Multiconnect Global Technology, its affiliates, and their respective directors, officers, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney&apos;s fees) arising from:
                        </p>
                        <ul className={styles.termsList}>
                            <li>Your use of and access to the Services;</li>
                            <li>Your violation of any term of these Terms;</li>
                            <li>Your violation of any third‑party right, including without limitation any copyright, property, or privacy right; or</li>
                            <li>Any claim that your User Content caused damage to a third party.</li>
                        </ul>
                    </section>

                    {/* Governing Law */}
                    <section className={styles.termsSection}>
                        <h2 className={styles.sectionTitle}>9. Governing Law</h2>
                        <p className={styles.sectionText}>
                            These Terms shall be governed and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions. Any dispute arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Lagos, Nigeria.
                        </p>
                    </section>

                    {/* Termination */}
                    <section className={styles.termsSection}>
                        <h2 className={styles.sectionTitle}>10. Termination</h2>
                        <p className={styles.sectionText}>
                            We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Services will cease immediately.
                        </p>
                        <p className={styles.sectionText}>
                            All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                        </p>
                    </section>

                    {/* Entire Agreement */}
                    <section className={styles.termsSection}>
                        <h2 className={styles.sectionTitle}>11. Entire Agreement</h2>
                        <p className={styles.sectionText}>
                            These Terms constitute the entire agreement between you and BBM Multiconnect Global Technology regarding the use of the Services, superseding any prior agreements between you and us relating to your use of the Services.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className={styles.termsSection}>
                        <h2 className={styles.sectionTitle}>12. Contact Us</h2>
                        <p className={styles.sectionText}>
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <div className={styles.contactCard}>
                            <div className={styles.contactItem}>
                                <Mail size={18} />
                                <span>legal@bbmtech.com</span>
                            </div>
                            <div className={styles.contactItem}>
                                <Phone size={18} />
                                <span>+234 (0) 123 456 7890</span>
                            </div>
                            <div className={styles.contactItem}>
                                <MapPin size={18} />
                                <span>Lagos, Nigeria</span>
                            </div>
                        </div>
                    </section>

                    <div className={styles.termsFooter}>
                        <p>These Terms of Service were last updated on {lastUpdated} and apply to all users of the BBM Multiconnect Global Technology website and services.</p>
                    </div>
                </div>
            </div>

            {/* ===== CTA SECTION ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Have Questions About Our Terms?</h2>
                        <p className={styles.ctaDescription}>
                            We&apos;re here to help. Contact our legal team for any questions regarding our terms of service.
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Contact Us <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

const Mail = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </svg>
);

const Phone = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPin = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);