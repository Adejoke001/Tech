'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, ArrowRight, Award, MessageSquare, CheckCircle,
    Users, Globe, Lock, Clock, Building2, Zap, Shield,
    Smartphone, Database, Cpu, Box, Brain,
    Code, RefreshCw, Target,
    Server, Layout,
    BarChart3, FileText, TestTube,
    Cloud as CloudIcon, GitMerge, Rocket,
    Key,
    Wifi, Hexagon,
} from 'lucide-react';
import styles from './backend-dev.module.css';

export default function BackendPage() {
    // const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'James',
        role: 'CTO, Fintech Startup',
        content: 'Professional, reliable, and results-driven – they delivered exactly what we needed, on time and within budget.',
        rating: 5,
        project: 'Scalable Payment Gateway'
    };

    // ============ BACKEND SERVICES (from URL) ============
    const backendServices = [
        {
            id: 1,
            title: 'Web Application Development',
            description: 'Build robust web-based applications using the latest technology trends while keeping costs low.',
            icon: <Globe />,
            color: '#3B82F6',
            features: ['Seamless user experiences', 'Enhanced app flexibility', 'Data protection with advanced security']
        },
        {
            id: 2,
            title: 'ERP/CRM Development',
            description: 'Enhance your existing ERPs or CRMs to make them richer in functionalities, reporting, and user experience.',
            icon: <Database />,
            color: '#10B981',
            features: ['Robust database architectures', 'Advanced security protocols', 'Expertise in ERP/CRM integration']
        },
        {
            id: 3,
            title: 'Mobile App Development',
            description: 'Intuitive & intelligent information flow for your mobile app users with secure and reliable architectures.',
            icon: <Smartphone />,
            color: '#8B5CF6',
            features: ['Native or cross-platform', 'Secure architectures', 'Seamless multi-device experience']
        },
        {
            id: 4,
            title: 'API Integration Services',
            description: 'Reliable API development & integration services ensuring flawless performance and real-time data sync.',
            icon: <GitMerge />,
            color: '#F59E0B',
            features: ['Flawless API performance', 'Third-party API integration', 'Real-time data synchronization']
        },
        {
            id: 5,
            title: 'Custom Backend Solutions',
            description: 'Custom-built backend solutions with advanced security protocols and latest technologies.',
            icon: <Server />,
            color: '#EC4899',
            features: ['Advanced security protocols', 'Speed and accuracy', 'Latest tech frameworks']
        },
        {
            id: 6,
            title: 'Backend Refactoring',
            description: 'Redesign the entire solution infrastructure, leaving front-end systems untouched.',
            icon: <RefreshCw />,
            color: '#06B6D4',
            features: ['Eliminate legacy vulnerabilities', 'Simplify complex code', 'Restructure architecture']
        },
    ];

    // ============ EXPERTISE AREAS (from URL) ============
    const expertiseAreas = [
        {
            title: 'Artificial Intelligence (AI)',
            description: 'Advanced knowledge in predictive modeling, data mining, computer vision, and NLP.',
            icon: <Brain />,
            color: '#3B82F6',
            featured: true,
        },
        {
            title: 'Robotic Process Automation (RPA)',
            description: 'Unattended and attended software robots to augment enterprise workflows.',
            icon: <Cpu />,
            color: '#10B981',
        },
        {
            title: 'Internet of Things (IoT)',
            description: 'IoT architecture design, platform development, backend engineering, and analytics.',
            icon: <Wifi />,
            color: '#8B5CF6',
        },
        {
            title: 'Augmented Reality & Virtual Reality (AR/VR)',
            description: 'Immersive experiences for training, events, navigation, and 2D/3D projections.',
            icon: <Box />,
            color: '#F59E0B',
        },
        {
            title: 'Blockchain Development',
            description: 'High-quality, scalable & decentralized blockchain applications for enterprises.',
            icon: <Hexagon />,
            color: '#EC4899',
        },
        {
            title: 'OTT Development',
            description: 'Manage, deliver, and monetize OTT content across various media devices.',
            icon: <Play />,
            color: '#06B6D4',
        },
    ];

    // ============ OTHER EXPERTISE (from URL) ============
    const otherExpertise = [
        {
            title: 'Front-end Development',
            description: 'Client-side application designed for excellent UI/UX.',
            icon: <Layout />,
            color: '#3B82F6',
        },
        {
            title: 'Application Modernization',
            description: 'Legacy applications modernized & migrated to newer technologies.',
            icon: <RefreshCw />,
            color: '#10B981',
        },
    ];

    // ============ WHY CHOOSE US (from URL) ============
    const whyChooseUs = [
        { text: "Nigeria's Top 10% Software Talent", icon: <Award />, color: '#3B82F6' },
        { text: 'Trusted by Startups to Fortune 500', icon: <Building2 />, color: '#10B981' },
        { text: 'Idea to Deployment, We Handle All', icon: <Rocket />, color: '#8B5CF6' },
        { text: 'Time-Zone Friendly: Global Presence', icon: <Globe />, color: '#F59E0B' },
        { text: 'Top-tier Data Security Protocols', icon: <Shield />, color: '#EC4899' },
        { text: 'On-time Delivery, No Surprises', icon: <Clock />, color: '#06B6D4' },
    ];

    // ============ TECH STACKS (from URL) ============
    const techStacks = [
        {
            category: 'Databases',
            icon: <Database />,
            color: '#3B82F6',
            technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Cassandra']
        },
        {
            category: 'Cloud & DevOps',
            icon: <CloudIcon />,
            color: '#10B981',
            technologies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform']
        },
        {
            category: 'API & Communication',
            icon: <GitMerge />,
            color: '#8B5CF6',
            technologies: ['RESTful APIs', 'GraphQL', 'WebSockets', 'gRPC', 'RabbitMQ', 'Kafka']
        },
        {
            category: 'Security & Authentication',
            icon: <Lock />,
            color: '#F59E0B',
            technologies: ['OAuth', 'JWT', 'OpenID Connect', 'SAML', 'SSL/TLS', 'Biometric Auth']
        },
    ];

    // ============ PROCESS STEPS (from URL) ============
    const processSteps = [
        { step: 1, title: 'Software Kick-off', description: 'Dive into bi-weekly sprints and rollouts aligned with project timelines.', icon: <FileText />, color: '#3B82F6' },
        { step: 2, title: 'Task Execution & Development', description: 'Combined team tackles tasks, fulfilling user stories and sprint goals.', icon: <Code />, color: '#10B981' },
        { step: 3, title: 'Daily Stand-ups', description: 'Daily check-ins led by Scrum Master to discuss progress and tackle challenges.', icon: <Users />, color: '#8B5CF6' },
        { step: 4, title: 'Feature Quality Check', description: 'Quality Engineers rigorously test new features, ensuring seamless integration.', icon: <TestTube />, color: '#F59E0B' },
        { step: 5, title: 'Backlog Updates', description: 'Our team keeps the sprint backlog updated, staying on track to meet objectives.', icon: <BarChart3 />, color: '#EC4899' },
        { step: 6, title: 'Sprint Reflections', description: 'Post-sprint reflections to refine strategies and enhance future sprints.', icon: <RefreshCw />, color: '#06B6D4' },
    ];

    // ============ HIRING MODELS (from URL) ============
    const hiringModels = [
        {
            title: 'Staff Augmentation / Team Extension',
            description: 'Add engineering capacity without changing how you deliver. Individual engineers or groups integrate into your existing team.',
            icon: <Users />,
            color: '#3B82F6',
            features: ['You interview & select', 'Scale up/down with 30 days notice', 'Time & Material, Retainer'],
            billing: 'Time & Material, Retainer',
            bestFor: 'Specific skill gaps, capacity crunches'
        },
        {
            title: 'Dedicated Teams / Delivery Pods',
            description: 'Dedicated squad with Tech Lead + Engineers + QA. Shared accountability for predictable sprint delivery.',
            icon: <Target />,
            color: '#10B981',
            features: ['Milestone-based or fixed-cost', 'We own sprint delivery metrics', 'Weekly demos'],
            billing: 'Milestone-based, T&M with commitments, or Fixed-Cost',
            bestFor: 'Products needing speed, cross-team coordination'
        },
        {
            title: 'Development Centers',
            description: 'Long-term, scaled teams with your branding, culture, processes. Full infrastructure, HR, security & compliance.',
            icon: <Building2 />,
            color: '#8B5CF6',
            features: ['Long-term retainer', 'BOT (Build–Operate–Transfer) options', 'Multi-year partnerships'],
            billing: 'Long-term retainer, BOT',
            bestFor: 'Enterprises needing sustained large-scale capacity'
        },
    ];

    // ============ COMPANY STATS ============
    const companyStats = [
        { value: '700+', label: 'Full-time Staff', icon: <Users />, description: 'Dedicated team' },
        { value: '20+', label: 'Years Experience', icon: <Award />, description: 'Since 2004' },
        { value: '4500+', label: 'Satisfied Clients', icon: <MessageSquare />, description: 'Global client base' },
    ];

    // ============ BACKEND COMPONENTS (from guide) ============
    const backendComponents = [
        {
            title: 'Server',
            description: 'Core component that receives requests, processes them, and sends back responses.',
            icon: <Server />,
            color: '#3B82F6'
        },
        {
            title: 'Application Logic',
            description: 'Business logic handling user input, data processing, algorithms, and workflows.',
            icon: <Cpu />,
            color: '#10B981'
        },
        {
            title: 'Database',
            description: 'Data storage and retrieval – designing schema, creating tables, writing queries.',
            icon: <Database />,
            color: '#8B5CF6'
        },
        {
            title: 'APIs',
            description: 'Bridges between front and backend, exposing functionalities to clients.',
            icon: <GitMerge />,
            color: '#F59E0B'
        },
        {
            title: 'Authentication & Authorization',
            description: 'User access control, token generation and verification, security enforcement.',
            icon: <Key />,
            color: '#EC4899'
        },
        {
            title: 'Caching',
            description: 'Storing frequently accessed data for fast-access memory to improve performance.',
            icon: <Zap />,
            color: '#06B6D4'
        },
    ];

    // ============ IMPORTANCE OF BACKEND ============
    const importanceItems = [
        'Data Management: Efficient data storage, retrieval, and processing.',
        'Business Logic Implementation: Complex computations and workflows.',
        'API Development: Communication between components and external systems.',
        'Security and Authentication: Protecting sensitive data, user authentication.',
        'Scalability and Performance: Handling high user loads, optimizing queries.',
        'System Integration: Connecting with payment gateways, email providers, etc.',
    ];

    // ============ TRUSTED BY ============
    const trustedCompanies = ['Microsoft', 'Amazon', 'Google', 'IBM', 'SAP', 'Oracle'];

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
        // {
        //     name: 'Fintech',
        //     icon: '🏦',
        //     desc: 'Disrupting traditional finance with secure payments, trading platforms, and digital banking.',
        //     image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
        //     color: '#F59E0B'
        // },
        // {
        //     name: 'Education & eLearning',
        //     icon: '📚',
        //     desc: 'Shaping digital learning with LMS, virtual classrooms, and interactive tools.',
        //     image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
        //     color: '#EC4899'
        // },
        // {
        //     name: 'Banking & Fintech',
        //     icon: '💰',
        //     desc: 'Streamlining financial growth with core banking systems and compliance‑ready infrastructure.',
        //     image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
        //     color: '#06B6D4'
        // },
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80"
                        alt="Backend Development Background"
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
                            <Sparkles size={16} /> Backend Development Services
                        </div>
                        <h1 className={styles.heroTitle}>
                            Build Secure, Scalable & <span className={styles.highlight}>High-Performance Backend Systems</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Since 2004, we&apos;ve been building secure, scalable, and high-performance backend systems that power web and mobile applications. From database management to API integrations, our backend solutions ensure seamless data flow, stability, and reliability for your digital products.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link href="/contact" className={styles.primaryButton}>
                                Start Your Project <ArrowRight size={18} />
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
                                <p className={styles.testimonialText}>&quot;{testimonial.content}&quot;</p>
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

            {/* ===== BACKEND SERVICES SECTION (with professional grid) ===== */}
            <section className={styles.servicesSection} id="services">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Our Custom Backend <span className={styles.titleHighlight}>Development Services</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            As a leading backend web development company in India, we specialize in building the most excellent backend solutions that add value to your business.
                        </p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {backendServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className={`${styles.serviceCard} ${index === 0 || index === 3 ? styles.serviceCardWide : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                            >
                                <div className={styles.serviceIcon} style={{ color: service.color }}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                                <div className={styles.serviceFeatures}>
                                    {service.features.map((feature, idx) => (
                                        <span key={idx} className={styles.serviceFeature}>
                                            <CheckCircle size={12} style={{ color: service.color }} />
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== EXPERTISE AREAS SECTION ===== */}
            <section className={styles.expertiseSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Expertise of Our <span className={styles.titleHighlight}>Backend Developers</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            We proudly occupy the top slot in being one of the application development companies. Here&apos;s what sets us apart.
                        </p>
                    </div>
                    <div className={styles.expertiseGrid}>
                        {expertiseAreas.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`${styles.expertiseCard} ${item.featured ? styles.expertiseCardFeatured : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.expertiseIcon} style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <h3 className={styles.expertiseTitle}>{item.title}</h3>
                                <p className={styles.expertiseDescription}>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== OTHER EXPERTISE SECTION ===== */}
            <section className={styles.otherExpertiseSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Other Development <span className={styles.titleHighlight}>Expertise We Hold</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Bringing innovation with the latest tech stacks.
                        </p>
                    </div>
                    <div className={styles.otherExpertiseGrid}>
                        {otherExpertise.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.otherExpertiseCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.otherExpertiseIcon} style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <h3 className={styles.otherExpertiseTitle}>{item.title}</h3>
                                <p className={styles.otherExpertiseDescription}>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US SECTION ===== */}
            <section className={styles.whyChooseSection}>
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
                                Expert Backend Development, <span className={styles.titleHighlight}>Exceptional Performance</span>
                            </h2>
                            <p className={styles.sectionDescription} style={{ color: 'rgba(255,255,255,0.9)' }}>
                                From startups to enterprises, we cater to all their diverse technology requirements.
                            </p>
                        </div>
                        <div className={styles.whyChooseGrid}>
                            {whyChooseUs.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.whyChooseCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.whyChooseIcon} style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <span className={styles.whyChooseText}>{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== COMPANY STATS ===== */}
            <section className={styles.statsSection}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        {companyStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className={styles.statCard}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.statIcon}>{stat.icon}</div>
                                <div className={styles.statValue}>{stat.value}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                                <div className={styles.statDescription}>{stat.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TECH STACKS SECTION ===== */}
            <section className={styles.techSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Tech Stacks We Use in <span className={styles.titleHighlight}>Backend Development</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Our talented backend developers have expertise in various technologies and tools.
                        </p>
                    </div>
                    <div className={styles.techGrid}>
                        {techStacks.map((stack, index) => (
                            <motion.div
                                key={index}
                                className={styles.techCard}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.techHeader}>
                                    <div className={styles.techIcon} style={{ color: stack.color }}>
                                        {stack.icon}
                                    </div>
                                    <h3 className={styles.techCategory}>{stack.category}</h3>
                                </div>
                                <div className={styles.techItems}>
                                    {stack.technologies.map((tech, idx) => (
                                        <span key={idx} className={styles.techItem}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
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
                            Our <span className={styles.titleHighlight}>Process</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            We specialize in engineering custom software that&apos;s both stable and secure, using a variety of tech tools.
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
                                <div className={styles.processIcon} style={{ color: step.color }}>
                                    {step.icon}
                                </div>
                                <h3 className={styles.processTitle}>{step.title}</h3>
                                <p className={styles.processDescription}>{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HIRING MODELS SECTION ===== */}
            <section className={styles.hiringSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Our <span className={styles.titleHighlight}>Hiring Models</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Choose how you want work to move – added hands, owned delivery, or your dedicated engineering hub.
                        </p>
                    </div>
                    <div className={styles.hiringGrid}>
                        {hiringModels.map((model, index) => (
                            <motion.div
                                key={index}
                                className={styles.hiringCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.hiringHeader} style={{ borderColor: model.color }}>
                                    <div className={styles.hiringIcon} style={{ color: model.color }}>
                                        {model.icon}
                                    </div>
                                    <h3 className={styles.hiringTitle}>{model.title}</h3>
                                </div>
                                <p className={styles.hiringDescription}>{model.description}</p>
                                <div className={styles.hiringDetails}>
                                    <div className={styles.hiringDetail}>
                                        <strong>Billing:</strong> {model.billing}
                                    </div>
                                    <div className={styles.hiringDetail}>
                                        <strong>Best for:</strong> {model.bestFor}
                                    </div>
                                </div>
                                <ul className={styles.hiringFeatures}>
                                    {model.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={14} style={{ color: model.color }} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className={styles.hiringButton} style={{ backgroundColor: model.color }}>
                                    Get Started <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== BACKEND COMPONENTS SECTION ===== */}
            <section className={styles.componentsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Parts or Components of <span className={styles.titleHighlight}>Backend Development</span>
                        </h2>
                    </div>
                    <div className={styles.componentsGrid}>
                        {backendComponents.map((component, index) => (
                            <motion.div
                                key={index}
                                className={styles.componentCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.componentIcon} style={{ color: component.color }}>
                                    {component.icon}
                                </div>
                                <h3 className={styles.componentTitle}>{component.title}</h3>
                                <p className={styles.componentDescription}>{component.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== IMPORTANCE SECTION ===== */}
            <section className={styles.importanceSection}>
                <div className={styles.container}>
                    <div className={styles.importanceGrid}>
                        <div className={styles.importanceContent}>
                            <h2 className={styles.importanceTitle}>
                                Importance of the <span className={styles.titleHighlight}>Backend Development Services</span>
                            </h2>
                            <p className={styles.importanceIntro}>
                                Backend development services play a crucial role in the overall success of a software application.
                            </p>
                            <ul className={styles.importanceList}>
                                {importanceItems.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <CheckCircle size={16} style={{ color: '#3B82F6' }} />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.importanceImage}>
                            <Image
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                                alt="Backend Architecture"
                                fill
                                className={styles.importanceImg}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== INDUSTRIES SECTION ===== */}
            <section className={styles.industriesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Industries We Cater To</h2>
                        <p className={styles.sectionDescription}>
                            Partnering with businesses in diverse sectors to unlock new avenues for growth and innovation.
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

            {/* ===== CTA SECTION ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>See 50% Improvement in Backend Performance</h2>
                        <p className={styles.ctaDescription}>
                            Our optimization techniques ensure faster response times and a smoother user experience for your apps.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Start Your Project <ArrowRight size={18} />
                            </Link>
                            <Link href="/contact" className={styles.ctaSecondary}>
                                Get a Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Custom icon components
const Play = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
);