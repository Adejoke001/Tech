'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, ArrowRight, 
    X, Quote, Target, Lightbulb, TrendingUp,

} from 'lucide-react';
import styles from './case-studies.module.css';

export default function CaseStudiesPage() {
    const [activeCaseStudy, setActiveCaseStudy] = useState<number | null>(null);

    // Case studies data – 6 items (REALISTIC for 2021 startup)
    const caseStudies = [
        {
            id: 1,
            title: 'E-learning Platform for Local Schools',
            category: 'Education Technology',
            image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
            color: '#3B82F6',
            stats: [
                { value: '5K+', label: 'Active Students' },
                { value: '98%', label: 'Uptime Achievement' },
                { value: '12+', label: 'Schools Served' },
            ],
            challenge: 'A local education startup needed a modern learning management system to replace their manual processes. They required an affordable, scalable solution that could handle 5,000+ students and provide basic analytics for teachers.',
            solution: 'We developed a custom e-learning platform with course management, quiz functionality, progress tracking, and teacher dashboards. Built with React and Node.js, the platform was deployed on cloud infrastructure for reliable scaling.',
            results: 'The platform successfully launched with 12 partner schools. Student engagement increased by 35% within 3 months, and teachers reported saving 10+ hours per week on administrative tasks.',
            testimonial: {
                quote: "BBMcoders delivered exactly what we needed within budget. The team was responsive and truly understood our requirements.",
                author: 'Michael Chen',
            },
            technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
            link: '/case-studies/edu',
        },
        {
            id: 2,
            title: 'Inventory Management System for Retail Chain',
            category: 'Retail & Logistics',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60',
            color: '#10B981',
            stats: [
                { value: '30%', label: 'Efficiency Gain' },
                { value: '8+', label: 'Store Locations' },
                { value: 'Real-Time', label: 'Inventory Tracking' },
            ],
            challenge: 'A growing retail chain with 8 locations struggled with inventory discrepancies and manual stock tracking. They needed a centralized system to manage stock levels across all stores.',
            solution: 'We built a cloud-based inventory management system with barcode scanning, automatic reorder alerts, and real-time sync across locations. The system integrates with their existing POS.',
            results: 'Inventory accuracy improved by 95%. Stockouts reduced by 60%, and staff saved 15+ hours weekly on manual counts.',
            testimonial: {
                quote: "The team understood our pain points and delivered a solution that just works. Highly recommended!",
                author: 'Sarah Johnson',
            },
            technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
            link: '/case-studies/retail',
        },
        {
            id: 3,
            title: 'Customer Portal for SME Bank',
            category: 'Financial Services',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
            color: '#3b82f6',
            stats: [
                { value: '90%', label: 'Fraud Detection Rate' },
                { value: '<200ms', label: 'Response Time' },
                { value: '5+', label: 'Banks Using System' },
            ],
            challenge: 'A regional bank needed basic fraud detection for their digital transactions. Their manual review process was slow and missing fraudulent patterns.',
            solution: 'We implemented a rule-based fraud detection system with real-time alerts and a dashboard for review. The system flags suspicious transactions based on configurable rules.',
            results: 'The bank reduced manual review time by 70% and caught 90% of fraudulent attempts. The system has been adopted by 5 other small financial institutions.',
            testimonial: {
                quote: "Affordable, effective, and easy to implement. BBMcoders delivered great value.",
                author: 'David Lee',
            },
            technologies: ['Python', 'Node.js', 'PostgreSQL', 'Redis'],
            link: '/case-studies/fin',
        },
        {
            id: 4,
            title: 'Logistics Tracking Portal',
            category: 'Logistics',
            image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=800&q=80',
            color: '#10b981',
            stats: [
                { value: '25%', label: 'Delivery Time Reduction' },
                { value: '50+', label: 'Active Vehicles' },
                { value: 'Real-Time', label: 'GPS Tracking' },
            ],
            challenge: 'A logistics company wanted to provide customers with real-time shipment tracking. They had no digital system and relied on phone calls for updates.',
            solution: 'We built a tracking portal with GPS integration, automated notifications, and customer dashboard. Drivers use a mobile app to update status.',
            results: 'Customer satisfaction increased by 40%. Support call volume decreased by 60%. The company has onboarded 50+ vehicles onto the platform.',
            testimonial: {
                quote: "Our customers love the transparency. Great work by the BBMcoders team!",
                author: 'Maria Rodriguez',
            },
            technologies: ['React Native', 'Node.js', 'Socket.io', 'MongoDB'],
            link: '/case-studies/logistics',
        },
        {
            id: 5,
            title: 'Telemedicine Consult App',
            category: 'Healthcare',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
            color: '#3b82f6',
            stats: [
                { value: '20+', label: 'Clinics Connected' },
                { value: '2K+', label: 'Consultations/Month' },
                { value: 'Secure', label: 'End-to-End Encryption' },
            ],
            challenge: 'A network of local clinics needed a simple telemedicine solution during the pandemic. They required video consultations and secure messaging.',
            solution: 'We developed a web-based telemedicine platform with video calls, chat, appointment scheduling, and secure data storage. Compliant with local data protection laws.',
            results: '20 clinics now use the platform. Over 2,000 virtual consultations conducted monthly. Patient satisfaction rating: 4.8/5.',
            testimonial: {
                quote: "BBMcoders helped us launch quickly. The platform is reliable and easy to use.",
                author: 'Dr. Emily Carter',
            },
            technologies: ['React', 'WebRTC', 'Node.js', 'PostgreSQL'],
            link: '/case-studies/health',
        },
        {
            id: 6,
            title: 'Predictive Maintenance Dashboard',
            category: 'Manufacturing',
            image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=800&q=80',
            color: '#10b981',
            stats: [
                { value: '25%', label: 'Downtime Reduction' },
                { value: '100+', label: 'Sensors Connected' },
                { value: '$200K', label: 'Annual Savings' },
            ],
            challenge: 'A manufacturing plant wanted to monitor equipment health and reduce unexpected breakdowns. They had no prior IoT infrastructure.',
            solution: 'We implemented a basic IoT monitoring system with temperature and vibration sensors. Data is collected and displayed on a simple dashboard with alerting.',
            results: 'Unplanned downtime reduced by 25%. The plant saved an estimated $200,000 in prevented breakdowns in the first year.',
            testimonial: {
                quote: "A cost-effective solution that delivered real results. Great partnership.",
                author: 'Robert Green',
            },
            technologies: ['Python', 'MQTT', 'InfluxDB', 'Grafana', 'React'],
            link: '/case-studies/manufacturing',
        },
    ];

    const openCaseStudy = (id: number) => {
        setActiveCaseStudy(id);
    };

    const closeCaseStudy = () => {
        setActiveCaseStudy(null);
    };

    const activeCase = caseStudies.find(c => c.id === activeCaseStudy);

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
                        alt="Case Studies Background"
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
                        <div className={styles.heroBadge}>
                            <Sparkles size={16} /> Our Work
                        </div>
                        <h1 className={styles.heroTitle}>
                            Case <span className={styles.highlight}>Studies</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Real-world solutions, measurable results. Discover how we&apos;ve helped businesses like yours overcome challenges and achieve their goals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ===== CASE STUDIES GRID ===== */}
            <section className={styles.caseStudiesSection}>
                <div className={styles.container}>
                    <div className={styles.caseStudiesGrid}>
                        {caseStudies.map((study) => (
                            <motion.div
                                key={study.id}
                                className={styles.caseCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                            >
                                <div className={styles.caseCardImageWrapper}>
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className={styles.caseCardImage}
                                    />
                                    <div 
                                        className={styles.caseCardCategory}
                                        style={{ backgroundColor: study.color }}
                                    >
                                        {study.category}
                                    </div>
                                </div>
                                <div className={styles.caseCardContent}>
                                    <h3 className={styles.caseCardTitle}>{study.title}</h3>
                                    <button
                                        onClick={() => openCaseStudy(study.id)}
                                        className={styles.caseCardButton}
                                    >
                                        View Case Study
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CASE STUDY MODAL ===== */}
            <AnimatePresence>
                {activeCaseStudy && activeCase && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCaseStudy}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.modalClose} onClick={closeCaseStudy}>
                                <X size={24} />
                            </button>

                            <div className={styles.modalInner}>
                                <div className={styles.modalHeader}>
                                    <div className={styles.modalHeaderLeft}>
                                        <h2 className={styles.modalTitle}>{activeCase.title}</h2>
                                    </div>
                                    <div 
                                        className={styles.modalCategory}
                                        style={{ backgroundColor: activeCase.color }}
                                    >
                                        {activeCase.category}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className={styles.modalStats}>
                                    {activeCase.stats.map((stat, idx) => (
                                        <div key={idx} className={styles.modalStat}>
                                            <div className={styles.modalStatValue}>{stat.value}</div>
                                            <div className={styles.modalStatLabel}>{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Content */}
                                <div className={styles.modalSections}>
                                    <div className={styles.modalSection}>
                                        <div className={styles.modalSectionHeader}>
                                            <Target size={20} style={{ color: activeCase.color }} />
                                            <h3>The Challenge</h3>
                                        </div>
                                        <p className={styles.modalText}>{activeCase.challenge}</p>
                                    </div>

                                    <div className={styles.modalSection}>
                                        <div className={styles.modalSectionHeader}>
                                            <Lightbulb size={20} style={{ color: activeCase.color }} />
                                            <h3>The Solution</h3>
                                        </div>
                                        <p className={styles.modalText}>{activeCase.solution}</p>
                                    </div>

                                    <div className={styles.modalSection}>
                                        <div className={styles.modalSectionHeader}>
                                            <TrendingUp size={20} style={{ color: activeCase.color }} />
                                            <h3>The Results</h3>
                                        </div>
                                        <p className={styles.modalText}>{activeCase.results}</p>
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <div className={styles.modalTestimonial}>
                                    <Quote size={32} className={styles.testimonialQuoteIcon} style={{ color: activeCase.color }} />
                                    <p className={styles.testimonialText}>{activeCase.testimonial.quote}</p>
                                    <div className={styles.testimonialAuthor}>
                                        <strong>{activeCase.testimonial.author}</strong>
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className={styles.modalTech}>
                                    <h4>Technologies Used</h4>
                                    <div className={styles.modalTechList}>
                                        {activeCase.technologies.map((tech, idx) => (
                                            <span key={idx} className={styles.techTag}>{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className={styles.modalFooter}>
                                    <Link href="/contact" className={styles.modalButton}>
                                        Discuss a Similar Project
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ===== CTA SECTION ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaCard}>
                    <h2 className={styles.ctaTitle}>Ready to build your success story?</h2>
                    <p className={styles.ctaDescription}>
                        Let&apos;s discuss how we can help you achieve results like these.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link href="/contact" className={styles.ctaPrimary}>
                            Start a Conversation
                            <ArrowRight className={styles.buttonIcon} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}