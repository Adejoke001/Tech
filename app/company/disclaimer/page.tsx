'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
   ArrowRight, AlertTriangle, Phone, Mail, MapPin,
} from 'lucide-react';
import styles from './disclaimer.module.css';

export default function DisclaimerPage() {
    const lastUpdated = 'March 30, 2025';

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
                        alt="Disclaimer"
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
                        <h1 className={styles.heroTitle}>
                            Legal <span className={styles.highlight}>Disclaimer</span>
                        </h1>
                        <p className={styles.heroDescription}>
                            Please read this disclaimer carefully before using our website or services. It outlines important limitations of liability and professional advice.
                        </p>
                        <div className={styles.heroMeta}>
                            <AlertTriangle size={16} />
                            <span>Last updated: {lastUpdated}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== DISCLAIMER CONTENT ===== */}
            <div className={styles.disclaimerContainer}>
                <div className={styles.disclaimerContent}>
                    {/* General Disclaimer */}
                    <section className={styles.disclaimerSection}>
                        <h2 className={styles.sectionTitle}>General Information</h2>
                        <p className={styles.sectionText}>
                            The information provided by <strong>BBMCoders</strong> (“we”, “us”, or “our”) on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                        </p>
                        <p className={styles.sectionText}>
                            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
                        </p>
                    </section>

                    {/* No Warranties */}
                    <section className={styles.disclaimerSection}>
                        <h2 className={styles.sectionTitle}>No Warranties</h2>
                        <p className={styles.sectionText}>
                            This website is provided “as is,” without any representations or warranties, express or implied. BBMCoders makes no representations or warranties in relation to this website or the information and materials provided on this website.
                        </p>
                        <p className={styles.sectionText}>
                            Without prejudice to the generality of the foregoing paragraph, we do not warrant that:
                        </p>
                        <ul className={styles.disclaimerList}>
                            <li>this website will be constantly available, or available at all; or</li>
                            <li>the information on this website is complete, true, accurate, or non-misleading.</li>
                        </ul>
                        <p className={styles.sectionText}>
                            Nothing on this website constitutes, or is meant to constitute, advice of any kind. If you require advice in relation to any legal, financial, or technical matter, you should consult an appropriate professional.
                        </p>
                    </section>

                    {/* Professional Advice Disclaimer */}
                    <section className={styles.disclaimerSection}>
                        <h2 className={styles.sectionTitle}>Professional Advice Disclaimer</h2>
                        <p className={styles.sectionText}>
                            The site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice.
                        </p>
                        <p className={styles.sectionText}>
                            Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THIS SITE IS SOLELY AT YOUR OWN RISK.
                        </p>
                    </section>

                    {/* External Links Disclaimer */}
                    <section className={styles.disclaimerSection}>
                        <h2 className={styles.sectionTitle}>External Links Disclaimer</h2>
                        <p className={styles.sectionText}>
                            Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with BBMCoders. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                        </p>
                        <p className={styles.sectionText}>
                            We have no control over the content and practices of any third-party sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section className={styles.disclaimerSection}>
                        <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
                        <p className={styles.sectionText}>
                            To the fullest extent permitted by applicable law, in no event shall BBMCoders, its affiliates, directors, employees, or agents be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or relating to the use of, or inability to use, this website.
                        </p>
                        <p className={styles.sectionText}>
                            In no event shall our total liability to you for all damages, losses, and causes of action exceed the amount paid by you, if any, for accessing this website.
                        </p>
                    </section>

                    {/* Errors & Omissions */}
                    <section className={styles.disclaimerSection}>
                        <h2 className={styles.sectionTitle}>Errors & Omissions Disclaimer</h2>
                        <p className={styles.sectionText}>
                            While we strive to ensure that the information on this website is correct, we do not warrant the accuracy or completeness of the material. We may make changes to the content on this website at any time without notice. The material on this website may be out of date, and we make no commitment to update such material.
                        </p>
                    </section>

                    {/* Fair Use Disclaimer */}
                    <section className={styles.disclaimerSection}>
                        <h2 className={styles.sectionTitle}>Fair Use Disclaimer</h2>
                        <p className={styles.sectionText}>
                            This website may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available for criticism, comment, news reporting, teaching, scholarship, or research. We believe this constitutes a “fair use” of any such copyrighted material as provided for in applicable copyright laws.
                        </p>
                        <p className={styles.sectionText}>
                            If you wish to use copyrighted material from this website for purposes of your own that go beyond fair use, you must obtain permission from the copyright owner.
                        </p>
                    </section>

                    {/* Views Expressed Disclaimer */}
                    <section className={styles.disclaimerSection}>
                        <h2 className={styles.sectionTitle}>Views Expressed Disclaimer</h2>
                        <p className={styles.sectionText}>
                            The views and opinions expressed on our website are those of the authors and do not necessarily reflect the official policy or position of BBMCoders. Any content provided by our bloggers or authors is of their opinion and is not intended to malign any religion, ethnic group, club, organization, company, individual, or anyone or anything.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section className={styles.disclaimerSection}>
                        <h2 className={styles.sectionTitle}>Governing Law</h2>
                        <p className={styles.sectionText}>
                            This disclaimer shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions. Any legal action or proceeding relating to your access to, or use of, the website shall be instituted in a court of competent jurisdiction in Lagos, Nigeria.
                        </p>
                    </section>

                    {/* Changes to This Disclaimer */}
                    <section className={styles.disclaimerSection}>
                        <h2 className={styles.sectionTitle}>Changes to This Disclaimer</h2>
                        <p className={styles.sectionText}>
                            We reserve the right to modify this disclaimer at any time. Changes and clarifications will take effect immediately upon their posting on the website. You are encouraged to periodically review this page for any changes. Your continued use of the website after any modifications constitutes your acceptance of the revised disclaimer.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section className={styles.disclaimerSection}>
                        <h2 className={styles.sectionTitle}>Contact Us</h2>
                        <p className={styles.sectionText}>
                            If you have any questions about this disclaimer, please contact us:
                        </p>
                        <div className={styles.contactCard}>
                            <div className={styles.contactItem}>
                                <Mail size={18} />
                                <span>legal@bbmcoders.com</span>
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

                    {/* <div className={styles.disclaimerFooter}>
                        <p>This disclaimer was created for BBMCoders and is effective as of {lastUpdated}.</p>
                    </div> */}
                </div>
            </div>

            {/* ===== CTA SECTION ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Need Clarification?</h2>
                        <p className={styles.ctaDescription}>
                            If you have any questions about our legal disclaimers or need further information, feel free to reach out.
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