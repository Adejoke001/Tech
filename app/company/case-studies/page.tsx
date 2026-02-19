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

    // Case studies data – 6 items
    const caseStudies = [
        {
            id: 1,
            title: 'Global OTT Streaming Platform',
            client: 'StreamFlix Entertainment',
            category: 'Media & Entertainment',
            image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
            color: '#3B82F6',
            stats: [
                { value: '10M+', label: 'Monthly Active Users' },
                { value: '50ms', label: 'Avg. Latency' },
                { value: '99.99%', label: 'Uptime SLA' },
            ],
            challenge: 'StreamFlix, a rapidly growing entertainment startup, needed to build a scalable, high-performance OTT platform from scratch. They faced intense competition from established players and required a solution that could handle millions of concurrent users during peak hours (e.g., new releases, live events) while maintaining flawless video quality across various devices and network conditions. Their existing infrastructure was fragmented and unable to support their ambitious growth plans.',
            solution: 'We designed and developed a cloud-native, microservices-based OTT platform using AWS, Node.js, and React. Key features included adaptive bitrate streaming (HLS), a global CDN integration for low-latency delivery, personalized recommendation engine powered by AI/ML, and a robust content management system for the admin team. We implemented a serverless architecture for automatic scaling and used WebSockets for real-time features like live chat during events.',
            results: 'The platform launched successfully, handling over 1 million concurrent viewers for a major live sports event with zero buffering issues. Within six months, StreamFlix onboarded 5 million new users. The new infrastructure reduced video start time by 70% and operational costs by 40% compared to their initial estimates. The client received overwhelmingly positive feedback on the user experience and platform stability.',
            testimonial: {
                quote: "BBNTech didn't just build us a platform; they built a foundation for our entire business. Their technical expertise and commitment to quality were evident at every stage. We couldn't be happier with the result.",
                author: 'Michael Chen',
                role: 'CTO, StreamFlix Entertainment',
            },
            technologies: ['AWS', 'Node.js', 'React', 'MongoDB', 'WebSockets', 'AI/ML'],
            link: '/case-studies/streamflix',
        },
        {
            id: 2,
            title: 'AI-Powered Learning Management System',
            client: 'EduGlobal Solutions',
            category: 'Education Technology',
            image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
            color: '#10B981',
            stats: [
                { value: '500K+', label: 'Students Enrolled' },
                { value: '40%', label: 'Increase in Engagement' },
                { value: '15+', label: 'Countries Deployed' },
            ],
            challenge: 'EduGlobal, a leading provider of online courses, needed to modernize their legacy LMS. The old system was inflexible, had poor mobile support, and lacked the tools to provide personalized learning experiences. They wanted to leverage AI to recommend courses, adapt to student progress, and improve overall engagement and completion rates. They also needed a system that could scale to accommodate their rapidly growing global user base.',
            solution: 'We developed a modern, responsive LXP (Learning Experience Platform) with a React frontend and a Python/Django backend. We integrated AI-powered recommendation algorithms to suggest relevant content based on user behavior and learning goals. We also built interactive dashboards for students to track progress and for instructors to gain insights into class performance. The platform was designed to be mobile-first and included offline access for students in regions with limited connectivity.',
            results: 'The new platform led to a 40% increase in student engagement and a 25% improvement in course completion rates within the first year. EduGlobal was able to expand into 5 new international markets due to the platform\'s scalability and multi-language support. The intuitive interface and personalized learning paths received high praise from both students and educators.',
            testimonial: {
                quote: "The team at BBNTech truly understood our vision. They built a platform that not only meets our current needs but is also ready for the future of education. The AI features have been a game-changer for our students.",
                author: 'Sarah Johnson',
                role: 'Director of Learning, EduGlobal Solutions',
            },
            technologies: ['React', 'Python/Django', 'TensorFlow', 'PostgreSQL', 'AWS'],
            link: '/case-studies/eduglobal',
        },
        {
            id: 3,
            title: 'Real-Time Fraud Detection System',
            client: 'FinScale Capital',
            category: 'Financial Services',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
            color: '#8B5CF6',
            stats: [
                { value: '95%', label: 'Fraud Detection Accuracy' },
                { value: '<100ms', label: 'Real-Time Processing' },
                { value: '$2.5M', label: 'Annual Losses Prevented' },
            ],
            challenge: 'FinScale Capital, a fast-growing fintech company, was facing an increasing number of sophisticated fraud attempts on their digital lending platform. Their rule-based detection system was too slow and inflexible, resulting in significant financial losses and a poor customer experience (many false positives). They needed a real-time, AI-driven solution that could adapt to new fraud patterns and process transactions instantaneously without disrupting legitimate users.',
            solution: 'We built a real-time fraud detection engine using Apache Kafka for stream processing and a machine learning model (trained on historical transaction data) to score transaction risk. The system was integrated with their core lending platform via secure APIs. We developed a dashboard for fraud analysts to review flagged transactions, investigate patterns, and provide feedback to continuously improve the ML model. The entire architecture was deployed on a highly available cloud infrastructure.',
            results: 'The new system reduced fraudulent transaction losses by 95% within the first three months. It processes thousands of transactions per second with sub-100ms latency, virtually eliminating customer friction. The adaptive ML model continuously learns and improves, detecting new fraud patterns hours, not weeks, after they emerge. The client regained customer trust and saw a 20% increase in loan application conversion rates.',
            testimonial: {
                quote: "BBNTech delivered a solution that was both highly sophisticated and practical. They took the time to understand our business, and the result is a fraud detection system that is incredibly effective and has paid for itself many times over.",
                author: 'David Lee',
                role: 'Head of Risk, FinScale Capital',
            },
            technologies: ['Python/ML', 'Apache Kafka', 'Node.js', 'PostgreSQL', 'AWS'],
            link: '/case-studies/finscale',
        },
        {
            id: 4,
            title: 'Enterprise Supply Chain Management Platform',
            client: 'Global Logistics Corp',
            category: 'Logistics & Supply Chain',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW50ZXJwcmlzZXxlbnwwfHwwfHx8MA%3D%3D',
            color: '#F59E0B',
            stats: [
                { value: '30%', label: 'Operational Efficiency Gain' },
                { value: '10K+', label: 'Suppliers Connected' },
                { value: 'Real-Time', label: 'Inventory Visibility' },
            ],
            challenge: 'Global Logistics Corp, a major player in international freight, was struggling with disparate systems for managing warehousing, shipping, and customs documentation. This lack of integration led to data silos, manual errors, shipment delays, and a lack of real-time visibility for their clients. They needed a unified platform to streamline operations and improve customer satisfaction.',
            solution: 'We designed and built a comprehensive supply chain management platform that integrated with their existing ERP, WMS, and carrier APIs. The platform provides a single dashboard for real-time tracking of shipments, inventory levels across warehouses, and automated customs documentation. We implemented role-based access controls for different stakeholders (e.g., clients, warehouse staff, logistics coordinators). The system also includes predictive analytics to forecast potential delays and suggest alternative routes.',
            results: 'The new platform streamlined operations, resulting in a 30% increase in overall efficiency. Clients gained full visibility into their supply chain, leading to a significant boost in satisfaction and retention. Manual data entry errors were reduced by 90%, and the time to process customs documentation was cut in half. The platform successfully onboarded over 10,000 suppliers and partners.',
            testimonial: {
                quote: "This platform has transformed how we do business. Our clients love the transparency, and our team is finally working with a single source of truth. BBNTech delivered a complex project flawlessly.",
                author: 'Maria Rodriguez',
                role: 'COO, Global Logistics Corp',
            },
            technologies: ['React', 'Node.js', 'Microservices', 'Kafka', 'MongoDB', 'Docker'],
            link: '/case-studies/global-logistics',
        },
        // New case study 5: Healthcare
        {
            id: 5,
            title: 'Telemedicine Platform for Remote Patient Care',
            client: 'HealthConnect Medical',
            category: 'Healthcare',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
            color: '#EC4899',
            stats: [
                { value: '200+', label: 'Hospitals Connected' },
                { value: '50K+', label: 'Virtual Consultations/Month' },
                { value: 'HIPAA', label: 'Compliant' },
            ],
            challenge: 'HealthConnect Medical, a network of regional hospitals, needed to rapidly deploy a secure, scalable telemedicine platform to meet the surge in demand for remote consultations. They faced strict regulatory requirements (HIPAA), needed seamless integration with existing Electronic Health Record (EHR) systems, and required a solution that could handle video consultations, secure messaging, and appointment scheduling – all while providing a simple experience for both doctors and patients.',
            solution: 'We developed a custom telemedicine platform with end-to-end encryption, role-based access, and full HIPAA compliance. The platform integrates with major EHR systems via FHIR APIs, allowing doctors to access patient records during consultations. We built a WebRTC-based video module with adaptive quality for low-bandwidth environments, a secure chat system, and an automated appointment scheduler. The mobile app was developed in React Native for both iOS and Android.',
            results: 'The platform was deployed in under 4 months and now serves over 200 hospitals and clinics. It handles over 50,000 virtual consultations per month with an average user rating of 4.9 stars. Doctors report significant time savings, and patient no-show rates dropped by 35%. The solution passed all HIPAA security audits with zero findings.',
            testimonial: {
                quote: "BBNTech delivered a platform that is both highly secure and incredibly easy to use. Our patients love the convenience, and our staff has embraced it fully. They were true partners throughout the journey.",
                author: 'Dr. Emily Carter',
                role: 'Chief Medical Information Officer, HealthConnect',
            },
            technologies: ['React', 'React Native', 'Node.js', 'WebRTC', 'FHIR APIs', 'AWS (HIPAA)'],
            link: '/case-studies/healthconnect',
        },
        // New case study 6: IoT / Manufacturing
        {
            id: 6,
            title: 'IoT Predictive Maintenance Platform',
            client: 'Industrial Solutions Ltd.',
            category: 'IoT & Manufacturing',
            image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=800&q=80',
            color: '#06B6D4',
            stats: [
                { value: '40%', label: 'Downtime Reduction' },
                { value: '10K+', label: 'Sensors Connected' },
                { value: '$2M', label: 'Annual Savings' },
            ],
            challenge: 'Industrial Solutions Ltd., a large manufacturing company, was experiencing unplanned equipment downtime that cost millions annually. They had legacy machinery with no connectivity and wanted to implement a predictive maintenance solution to monitor machine health, predict failures, and schedule maintenance proactively. They needed a robust IoT platform that could collect data from various sensors, analyze it in real-time, and provide actionable insights.',
            solution: 'We built an end-to-end IoT platform using edge devices to collect vibration, temperature, and power consumption data from machines. Data is streamed via MQTT to Azure IoT Hub, then processed using Azure Stream Analytics and machine learning models (trained on historical failure data) to predict anomalies. A custom dashboard visualizes machine health, alerts maintenance teams, and integrates with their ERP for automated work orders. The solution supports both modern and retrofitted sensors.',
            results: 'The platform reduced unplanned downtime by 40% within the first year, saving the company over $2 million. Maintenance teams now move from reactive to predictive, extending machine life and improving production efficiency. The client has expanded the solution to three additional plants and plans to integrate with their supply chain system.',
            testimonial: {
                quote: "This predictive maintenance platform has been a game-changer for our operations. The team at BBNTech understood our complex environment and delivered a solution that exceeded our expectations. We're now able to anticipate problems before they happen.",
                author: 'Robert Green',
                role: 'Plant Operations Director, Industrial Solutions Ltd.',
            },
            technologies: ['Azure IoT Hub', 'MQTT', 'Stream Analytics', 'ML (Python)', 'React', 'Docker'],
            link: '/case-studies/industrial-solutions',
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
                            Real-world solutions, exceptional results. Discover how we&apos;ve helped businesses like yours overcome challenges and achieve their goals.
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
                                    <p className={styles.caseCardClient}>{study.client}</p>
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
                                        <p className={styles.modalClient}>{activeCase.client}</p>
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
                                        <span>{activeCase.testimonial.role}</span>
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