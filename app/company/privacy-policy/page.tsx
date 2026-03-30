'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
   ArrowRight, Shield, Phone, Mail, MapPin,
} from 'lucide-react';
import styles from './privacy.module.css';

export default function PrivacyPage() {
    const lastUpdated = 'March 30, 2025';

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
                        alt="Privacy Policy"
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
                            Privacy <span className={styles.highlight}>Policy</span>
                        </h1>
                        <p className={styles.heroDescription}>
                            At BBM Multiconnect Global Technology, we are committed to protecting your privacy and ensuring the security of your personal information.
                        </p>
                        <div className={styles.heroMeta}>
                            <Shield size={16} />
                            <span>Last updated: {lastUpdated}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== POLICY CONTENT ===== */}
            <div className={styles.policyContainer}>
                <div className={styles.policyContent}>
                    {/* Introduction */}
                    <section className={styles.policySection}>
                        <h2 className={styles.sectionTitle}>Introduction</h2>
                        <p className={styles.sectionText}>
                            Welcome to BBM Multiconnect Global Technology. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>
                        <p className={styles.sectionText}>
                            This privacy policy applies to all information collected through our website, services, and any related applications or communications.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className={styles.policySection}>
                        <h2 className={styles.sectionTitle}>Information We Collect</h2>
                        <p className={styles.sectionText}>
                            We may collect, use, store and transfer different kinds of personal data about you, which we have grouped together as follows:
                        </p>
                        <ul className={styles.policyList}>
                            <li><strong>Identity Data</strong> – includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data</strong> – includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data</strong> – includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                            <li><strong>Usage Data</strong> – includes information about how you use our website, products and services.</li>
                            <li><strong>Marketing and Communications Data</strong> – includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section className={styles.policySection}>
                        <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
                        <p className={styles.sectionText}>
                            We use your personal data for the following purposes:
                        </p>
                        <ul className={styles.policyList}>
                            <li>To register you as a new customer or client.</li>
                            <li>To process and deliver your orders or service requests.</li>
                            <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
                            <li>To enable you to participate in interactive features of our website.</li>
                            <li>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data).</li>
                            <li>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you.</li>
                            <li>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences.</li>
                            <li>To make suggestions and recommendations to you about goods or services that may be of interest to you.</li>
                        </ul>
                    </section>

                    {/* Information Sharing */}
                    <section className={styles.policySection}>
                        <h2 className={styles.sectionTitle}>Information Sharing</h2>
                        <p className={styles.sectionText}>
                            We may share your personal data with the following parties:
                        </p>
                        <ul className={styles.policyList}>
                            <li><strong>Service providers</strong> – who provide IT and system administration services, payment processing, or other business functions.</li>
                            <li><strong>Professional advisers</strong> – including lawyers, bankers, auditors and insurers who provide consultancy, banking, legal, insurance and accounting services.</li>
                            <li><strong>Regulators and authorities</strong> – where required by law or to protect our legal rights.</li>
                        </ul>
                        <p className={styles.sectionText}>
                            We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
                        </p>
                    </section>

                    {/* Cookies & Tracking */}
                    <section className={styles.policySection}>
                        <h2 className={styles.sectionTitle}>Cookies & Tracking Technologies</h2>
                        <p className={styles.sectionText}>
                            We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                        </p>
                        <p className={styles.sectionText}>
                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                        </p>
                        <p className={styles.sectionText}>
                            We use the following types of cookies:
                        </p>
                        <ul className={styles.policyList}>
                            <li><strong>Essential Cookies</strong> – necessary for the operation of our website.</li>
                            <li><strong>Analytical/Performance Cookies</strong> – allow us to recognise and count the number of visitors and see how visitors move around our website.</li>
                            <li><strong>Functionality Cookies</strong> – used to recognise you when you return to our website.</li>
                            <li><strong>Targeting Cookies</strong> – record your visit to our website, the pages you have visited and the links you have followed.</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section className={styles.policySection}>
                        <h2 className={styles.sectionTitle}>Data Security</h2>
                        <p className={styles.sectionText}>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                        <p className={styles.sectionText}>
                            We have also put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section className={styles.policySection}>
                        <h2 className={styles.sectionTitle}>Your Rights</h2>
                        <p className={styles.sectionText}>
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data:
                        </p>
                        <ul className={styles.policyList}>
                            <li><strong>Request access</strong> to your personal data (commonly known as a &quot;data subject access request&quot;).</li>
                            <li><strong>Request correction</strong> of the personal data that we hold about you.</li>
                            <li><strong>Request erasure</strong> of your personal data.</li>
                            <li><strong>Object to processing</strong> of your personal data.</li>
                            <li><strong>Request restriction of processing</strong> of your personal data.</li>
                            <li><strong>Request transfer</strong> of your personal data to you or to a third party.</li>
                            <li><strong>Withdraw consent</strong> at any time where we are relying on consent to process your personal data.</li>
                        </ul>
                        <p className={styles.sectionText}>
                            If you wish to exercise any of these rights, please contact us using the details provided in the &quot;Contact Us&quot; section below.
                        </p>
                    </section>

                    {/* Children’s Privacy */}
                    <section className={styles.policySection}>
                        <h2 className={styles.sectionTitle}>Children&apos;s Privacy</h2>
                        <p className={styles.sectionText}>
                            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child under age 13 without verification of parental consent, we will take steps to remove that information from our servers.
                        </p>
                    </section>

                    {/* Changes to This Policy */}
                    <section className={styles.policySection}>
                        <h2 className={styles.sectionTitle}>Changes to This Privacy Policy</h2>
                        <p className={styles.sectionText}>
                            We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date at the top of this policy.
                        </p>
                        <p className={styles.sectionText}>
                            You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section className={styles.policySection}>
                        <h2 className={styles.sectionTitle}>Contact Us</h2>
                        <p className={styles.sectionText}>
                            If you have any questions about this privacy policy or our data practices, please contact us at:
                        </p>
                        <div className={styles.contactCard}>
                            <div className={styles.contactItem}>
                                <Mail size={18} />
                                <span>privacy@bbmtech.com</span>
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

                    <div className={styles.policyFooter}>
                        <p>This privacy policy was created for BBM Multiconnect Global Technology and is effective as of {lastUpdated}.</p>
                    </div>
                </div>
            </div>

            {/* ===== CTA SECTION ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Have Questions About Your Privacy?</h2>
                        <p className={styles.ctaDescription}>
                            We&apos;re here to help. Contact our data protection team for any privacy-related concerns.
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