'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, ArrowRight, Award, MessageSquare, CheckCircle,
    Globe, TrendingUp, FileText, TestTube, Clock, Zap, Shield,
    Cpu, Radio, Brain, Compass, Code, Cloud, Server, Activity, Wifi, 
    Thermometer, Gauge, Factory,
    Layers, Settings, BarChart3,
} from 'lucide-react';
import styles from './iot.module.css';

export default function IoTPage() {
    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'Michael',
        role: 'CTO, SmartFact',
        content: 'BBMTech built our industrial IoT platform from the ground up. We now monitor 10,000+ sensors in real time, reducing downtime by 40%. Their expertise in edge computing and device management is outstanding.',
        rating: 5,
        project: 'Industrial IoT Platform'
    };

    // ============ IoT SOLUTIONS ============
    const iotSolutions = [
        {
            title: 'Device Management',
            description: 'Provision, monitor, and manage IoT devices at scale with secure remote updates and diagnostics.',
            icon: <Cpu />,
            color: '#3B82F6',
            features: [
                'Secure device onboarding',
                'Over-the-air (OTA) updates',
                'Remote device monitoring',
                'Automated diagnostics'
            ]
        },
        {
            title: 'Connectivity Management',
            description: 'Reliable, secure connectivity for billions of devices across cellular, Wi-Fi, LPWAN, and satellite.',
            icon: <Wifi />,
            color: '#10B981',
            features: [
                'Multi-protocol support',
                'Network agnostic',
                'Connection quality monitoring',
                'Seamless failover'
            ]
        },
        {
            title: 'Edge Computing',
            description: 'Process data closer to the source for ultra-low latency and reduced cloud costs.',
            icon: <Gauge />,
            color: '#8B5CF6',
            features: [
                'Real-time analytics at edge',
                'Local data processing',
                'AI/ML inference on devices',
                'Bandwidth optimization'
            ]
        },
        {
            title: 'IoT Data Analytics',
            description: 'Turn raw sensor data into actionable insights with powerful analytics and visualization.',
            icon: <BarChart3 />,
            color: '#F59E0B',
            features: [
                'Streaming analytics',
                'Predictive maintenance',
                'Custom dashboards',
                'Anomaly detection'
            ]
        },
        {
            title: 'Digital Twins',
            description: 'Create virtual replicas of physical assets to simulate, predict, and optimize performance.',
            icon: <Layers />,
            color: '#EC4899',
            features: [
                'Real-time synchronization',
                'What-if simulations',
                'Asset lifecycle management',
                'Remote diagnostics'
            ]
        },
        {
            title: 'IoT Security',
            description: 'End-to-end security for devices, data, and cloud – from hardware root of trust to encrypted communications.',
            icon: <Shield />,
            color: '#06B6D4',
            features: [
                'Device authentication',
                'End-to-end encryption',
                'Secure boot & firmware',
                'Continuous threat monitoring'
            ]
        },
    ];

    // ============ IOT TECHNOLOGIES ============
    const iotTechnologies = [
        { title: 'Sensors & Actuators', description: 'Wide range of industrial, environmental, and motion sensors.', icon: <Thermometer />, color: '#3B82F6' },
        { title: 'Connectivity Protocols', description: 'MQTT, CoAP, LwM2M, LoRaWAN, NB-IoT, 5G, Wi-Fi, BLE.', icon: <Radio />, color: '#10B981' },
        { title: 'Edge Gateways', description: 'Ruggedized gateways with local processing and cloud connectivity.', icon: <Server />, color: '#8B5CF6' },
        { title: 'Cloud Platforms', description: 'AWS IoT, Azure IoT, Google Cloud IoT, and private cloud solutions.', icon: <Cloud />, color: '#F59E0B' },
        { title: 'AI/ML at the Edge', description: 'TensorFlow Lite, NVIDIA Jetson, OpenVINO for on-device inference.', icon: <Brain />, color: '#EC4899' },
        { title: 'Digital Twin Platforms', description: 'Azure Digital Twins, AWS IoT TwinMaker, open-source frameworks.', icon: <Layers />, color: '#06B6D4' },
    ];

    // ============ IOT SERVICES ============
    const iotServices = [
        {
            title: 'IoT Consulting',
            description: 'Strategic guidance on device selection, connectivity, architecture, and roadmap.',
            icon: <Compass />,
            color: '#3B82F6',
            points: ['Feasibility studies', 'Technology stack selection', 'Proof of concept development']
        },
        {
            title: 'Embedded Development',
            description: 'Firmware and RTOS development for microcontrollers and custom hardware.',
            icon: <Cpu />,
            color: '#10B981',
            points: ['Zephyr, FreeRTOS, Mbed', 'Driver development', 'Low-power optimization']
        },
        {
            title: 'IoT Application Development',
            description: 'Cloud and mobile apps to visualize, control, and analyze IoT data.',
            icon: <Code />,
            color: '#8B5CF6',
            points: ['Web dashboards', 'Mobile apps (iOS/Android)', 'Real-time alerts and notifications']
        },
        {
            title: 'Cloud Integration',
            description: 'Seamless integration with leading IoT cloud platforms and enterprise systems.',
            icon: <Cloud />,
            color: '#F59E0B',
            points: ['AWS IoT Core', 'Azure IoT Hub', 'Custom cloud backends']
        },
        {
            title: 'Data Analytics & ML',
            description: 'Turn IoT data into predictive insights and automated actions.',
            icon: <Brain />,
            color: '#EC4899',
            points: ['Predictive maintenance', 'Anomaly detection', 'Time-series analysis']
        },
        {
            title: 'IoT Support & Maintenance',
            description: 'Ongoing monitoring, updates, and optimization of your IoT ecosystem.',
            icon: <Settings />,
            color: '#06B6D4',
            points: ['24/7 device monitoring', 'OTA updates', 'Security patches']
        },
    ];

    // ============ INDUSTRIES ============
    const industries = [
        {
                    name: 'Healthcare',
                    icon: '🏥',
                    desc: 'Building smart healthcare solutions with HIPAA‑compliance, telemedicine, and patient portals.',
                    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
                    color: '#3B82F6'
                },
                {
                    name: 'Retail & eCommerce',
                    icon: '🛍️',
                    desc: 'Enhancing retail journeys with scalable platforms, inventory management, and omnichannel experiences.',
                    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
                    color: '#10B981'
                },
                {
                    name: 'Media & Entertainment',
                    icon: '🎬',
                    desc: 'Custom tech to empower brands – streaming, content delivery, and audience analytics.',
                    image: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?auto=format&fit=crop&w=800&q=80',
                    color: '#8B5CF6'
                },
    ];

    // ============ BENEFITS OF IOT ============
    const iotBenefits = [
        { text: 'Real-time visibility into operations', icon: <Activity />, color: '#3B82F6' },
        { text: 'Predictive maintenance reduces downtime', icon: <Clock />, color: '#10B981' },
        { text: 'Improved efficiency & automation', icon: <Zap />, color: '#8B5CF6' },
        { text: 'Data-driven decision making', icon: <BarChart3 />, color: '#F59E0B' },
        { text: 'Enhanced safety & compliance', icon: <Shield />, color: '#EC4899' },
        { text: 'New revenue streams (as-a-service)', icon: <TrendingUp />, color: '#06B6D4' }
    ];

    // ============ IOT DEVELOPMENT PROCESS ============
    const processSteps = [
        { step: 1, title: 'Requirement Analysis', description: 'Define use cases, device requirements, and success metrics.', icon: <FileText />, duration: '1-2 weeks', color: '#3B82F6' },
        { step: 2, title: 'Architecture Design', description: 'Select hardware, connectivity, cloud platform, and security framework.', icon: <Layers />, duration: '2-3 weeks', color: '#10B981' },
        { step: 3, title: 'Firmware & Hardware Dev', description: 'Develop embedded software, integrate sensors, and test prototypes.', icon: <Cpu />, duration: '4-8 weeks', color: '#8B5CF6' },
        { step: 4, title: 'Cloud & App Development', description: 'Build IoT cloud backend, APIs, and user-facing dashboards.', icon: <Cloud />, duration: '6-10 weeks', color: '#F59E0B' },
        { step: 5, title: 'Integration & Testing', description: 'End-to-end system testing, security audits, and performance tuning.', icon: <TestTube />, duration: '2-4 weeks', color: '#EC4899' },
        { step: 6, title: 'Deployment & Support', description: 'OTA rollout, monitoring setup, and ongoing maintenance.', icon: <Settings />, duration: 'Ongoing', color: '#06B6D4' },
    ];

    // ============ WHY CHOOSE US ============
    const whyChooseUs = [
        { text: 'India’s Top 1% IoT Talent', icon: <Award />, color: '#3B82F6' },
        { text: 'End-to-end IoT solutions', icon: <Layers />, color: '#10B981' },
        { text: 'Proven track record in Industry 4.0', icon: <Factory />, color: '#8B5CF6' },
        { text: 'Scalable & secure architectures', icon: <Shield />, color: '#F59E0B' },
        { text: 'Time-zone friendly collaboration', icon: <Globe />, color: '#EC4899' },
        { text: 'On-time delivery, no surprises', icon: <Clock />, color: '#06B6D4' }
    ];

    // ============ TRUSTED BY ============
    const trustedCompanies = ['Microsoft', 'Amazon', 'Google', 'IBM', 'SAP', 'Oracle'];

    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1920&q=80"
                        alt="IoT Background"
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
                            <Sparkles size={16} /> IoT Development Company
                        </div>
                        <h1 className={styles.heroTitle}>
                            Connect, Monitor, and Optimize with <span className={styles.highlight}>Custom IoT Solutions</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            We build secure, scalable IoT ecosystems – from edge devices to cloud analytics. Unlock real-time insights, automate processes, and drive efficiency across your business.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link href="/contact" className={styles.primaryButton}>
                                Build Your IoT Solution <ArrowRight size={18} />
                            </Link>
                            <Link href="#solutions" className={styles.secondaryButton}>
                                Explore Solutions
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        className={styles.heroTestimonial}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialImage}>
                                <Image
                                    src="/images/user.png"
                                    alt={testimonial.name}
                                    width={60}
                                    height={60}
                                    className={styles.testimonialAvatar}
                                />
                            </div>
                            <div className={styles.testimonialContent}>
                                <MessageSquare className={styles.quoteIcon} size={20} />
                                <p className={styles.testimonialText}>&quot;{testimonial.content}</p>
                                <div className={styles.testimonialAuthor}>
                                    <strong>{testimonial.name}</strong>
                                    <span>{testimonial.role}</span>
                                </div>
                                <div className={styles.testimonialRating}>
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== TRUSTED BY SECTION ===== */}
            <section className={styles.trustedSection}>
                <div className={styles.container}>
                    <p className={styles.trustedLabel}>Trusted by startups and Fortune 500 companies</p>
                    <div className={styles.trustedLogos}>
                        {trustedCompanies.map((company, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.logoItem}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <span>{company}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== IOT SOLUTIONS SECTION ===== */}
            <section className={styles.solutionsSection} id="solutions">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            IoT <span className={styles.titleHighlight}>Solutions</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Comprehensive IoT capabilities to connect, manage, and analyze your devices and data.
                        </p>
                    </div>
                    <div className={styles.solutionsGrid}>
                        {iotSolutions.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.solutionCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                            >
                                <div className={styles.solutionIcon} style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <h3 className={styles.solutionTitle}>{item.title}</h3>
                                <p className={styles.solutionDescription}>{item.description}</p>
                                <div className={styles.solutionFeatures}>
                                    {item.features.map((feature, idx) => (
                                        <span key={idx} className={styles.solutionFeature}>
                                            <CheckCircle size={12} style={{ color: item.color }} />
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== IOT TECHNOLOGIES SECTION ===== */}
            <section className={styles.techSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Technologies <span className={styles.titleHighlight}>We Master</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Cutting-edge tools and platforms for building robust IoT ecosystems.
                        </p>
                    </div>
                    <div className={styles.techGrid}>
                        {iotTechnologies.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.techCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.techIcon} style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <h4 className={styles.techTitle}>{item.title}</h4>
                                <p className={styles.techDescription}>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== IOT SERVICES SECTION ===== */}
            <section className={styles.servicesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            IoT <span className={styles.titleHighlight}>Services</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            End-to-end development services – from strategy to deployment and beyond.
                        </p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {iotServices.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.serviceCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.serviceIcon} style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{item.title}</h3>
                                <p className={styles.serviceDescription}>{item.description}</p>
                                <div className={styles.servicePoints}>
                                    {item.points.map((point, idx) => (
                                        <span key={idx} className={styles.servicePoint}>• {point}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== INDUSTRIES SECTION ===== */}
            <section className={styles.industriesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Industries We <span className={styles.titleHighlight}>Empower</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            IoT solutions tailored for diverse sectors.
                        </p>
                    </div>
                    <div className={styles.industriesGrid}>
                        {industries.map((industry, idx) => (
                            <div
                                key={idx}
                                className={styles.industryCard}
                                onMouseEnter={() => setHoveredIndustry(idx)}
                                onMouseLeave={() => setHoveredIndustry(null)}
                            >
                                <div className={styles.industryImageContainer}>
                                    <Image
                                        src={industry.image}
                                        alt={industry.name}
                                        fill
                                        className={styles.industryImage}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className={`${styles.industryOverlay} ${hoveredIndustry === idx ? styles.active : ''}`}></div>
                                    <div className={styles.industryContent}>
                                        <h4 className={styles.industryName}>{industry.name}</h4>
                                        <AnimatePresence>
                                            {hoveredIndustry === idx && (
                                                <motion.div
                                                    className={styles.industryDescription}
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <p>{industry.desc}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== BENEFITS SECTION ===== */}
            <section className={styles.benefitsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Benefits of <span className={styles.titleHighlight}>IoT</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Transform your business with connected intelligence.
                        </p>
                    </div>
                    <div className={styles.benefitsGrid}>
                        {iotBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className={styles.benefitCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                            >
                                <div className={styles.benefitIcon} style={{ color: benefit.color }}>
                                    {benefit.icon}
                                </div>
                                <span className={styles.benefitText}>{benefit.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROCESS SECTION ===== */}
            <section className={styles.processSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Our IoT Development <span className={styles.titleHighlight}>Process</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            A structured approach to deliver reliable, scalable IoT solutions.
                        </p>
                    </div>
                    <div className={styles.processGrid}>
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                className={styles.processCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.processNumber}>{step.step}</div>
                                <div className={styles.processIcon} style={{ color: step.color }}>{step.icon}</div>
                                <h3 className={styles.processTitle}>{step.title}</h3>
                                <p className={styles.processDescription}>{step.description}</p>
                                <div className={styles.processDuration}>
                                    <Clock size={14} /> {step.duration}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US SECTION ===== */}
            <section className={styles.whySection}>
                <div className={styles.whyBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
                        alt="Why Choose Us"
                        fill
                        className={styles.whyBgImage}
                    />
                    <div className={styles.whyOverlay}></div>
                </div>
                <div className={styles.whyContent}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle} style={{ color: 'white' }}>
                                Why Choose <span className={styles.titleHighlight}>BBMTech</span> for IoT?
                            </h2>
                            <p className={styles.sectionDescription} style={{ color: 'rgba(255,255,255,0.9)' }}>
                                We combine deep technical expertise with a proven delivery model.
                            </p>
                        </div>
                        <div className={styles.whyGrid}>
                            {whyChooseUs.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.whyCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.whyCardIcon} style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <span className={styles.whyCardText}>{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Ready to Connect Your World?</h2>
                        <p className={styles.ctaDescription}>
                            Let&apos;s discuss how IoT can transform your business. Get a free consultation.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Start Your IoT Journey <ArrowRight size={18} />
                            </Link>
                            {/* <Link href="/contact" className={styles.ctaSecondary}>
                                Schedule a Call
                            </Link> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

