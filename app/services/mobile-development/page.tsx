'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, ArrowRight, Award, MessageSquare, CheckCircle,
    Users, Globe, Building2, Zap, 
    Smartphone,
    Compass, Code, RefreshCw, Target,
    Layers, Settings,
    FileText, TestTube,
    GitMerge,
    HeadphonesIcon, Rocket,

} from 'lucide-react';
import styles from './mobile.module.css';

export default function MobilePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // ----- HERO TESTIMONIAL (with avatar placeholder) -----
    const testimonial = {
        name: 'James Kelly',
        role: 'Co-founder, Miracle Choice',
        content: 'The Project managers took a lot of time to understand our project before coming up with a contract or what they thought we needed. The project managers knew what type of project I wanted from the start. That is reassuring, and that is why we chose BBMcoders.',
        rating: 5,
        project: 'Mobile App Development',
        initials: 'JK',
        color: '#3B82F6'
    };

    // ============ MOBILE SERVICES (8 cards from URL) ============
    const mobileServices = [
        {
            id: 1,
            title: 'Mobile App Consulting',
            description: 'We provide expert mobile app development, guiding your app`s concept, tech, platform choices, and user experience.',
            icon: <Compass />,
            color: '#3B82F6',
            features: [
                'Smart UI/UX guidance for better apps',
                'Validate app concepts with expert advice',
                'Choose the right platform for reach'
            ]
        },
        {
            id: 2,
            title: 'UI/UX Design',
            description: 'Get intuitive and visually appealing designs based on thorough research. Our prototypes help clients visualize the final product.',
            icon: <Figma />,
            color: '#10B981',
            features: [
                'Custom UI/UX aligned with brand goals',
                'Boost retention with user-first flows',
                'Speed up development with clear prototypes'
            ]
        },
        {
            id: 3,
            title: 'Custom Mobile App Development',
            description: 'From ideation to deployment, we build custom mobile apps that engage users and deliver measurable results.',
            icon: <Smartphone />,
            color: '#8B5CF6',
            features: [
                'Reliable apps with high performance',
                'Faster launch with agile development',
                'Scalable apps that fuel growth'
            ]
        },
        {
            id: 4,
            title: 'Mobile App Integration',
            description: 'We integrate mobile apps with APIs and backend systems for a seamless, unified experience.',
            icon: <GitMerge />,
            color: '#F59E0B',
            features: [
                'Consistent data across all platforms',
                'Enhanced features through integrations',
                'Connected systems for simpler workflows'
            ]
        },
        {
            id: 5,
            title: 'Mobile App QA and Testing',
            description: 'Our dedicated QA team rigorously tests your mobile app to ensure flawless performance across devices and operating systems.',
            icon: <TestTube />,
            color: '#EC4899',
            features: [
                'Improve app stability with thorough testing',
                'Enhance user trust with consistent app performance',
                'Minimize bugs and glitches for a smoother user experience'
            ]
        },
        {
            id: 6,
            title: 'Maintenance and Support',
            description: 'We offer ongoing support to monitor app performance, resolve issues, and roll out updates to ensure long-term app reliability.',
            icon: <HeadphonesIcon />,
            color: '#06B6D4',
            features: [
                'Stay updated with patches and fixes',
                'Ensure app stability with performance monitoring',
                'Enhance user satisfaction with timely issue resolution'
            ]
        },
        {
            id: 7,
            title: 'Mobile App Modernization',
            description: 'We revamp outdated apps by updating their design, functionality, and technology to meet evolving user expectations.',
            icon: <RefreshCw />,
            color: '#3B82F6',
            features: [
                'Improve user retention for long-term growth',
                'Adapt to changing business needs for easy development',
                'Stay competitive with the latest technologies and trends'
            ]
        },
        {
            id: 8,
            title: 'Cross-Platform App Development',
            description: 'Our cross-platform apps deliver a consistent experience on both iOS and Android, optimizing efficiency and performance.',
            icon: <Layers />,
            color: '#10B981',
            features: [
                'Reach more users with cross-platform apps',
                'Reduce development costs with a single codebase',
                'Ensure a consistent user experience across devices'
            ]
        },
    ];

    // ============ TECH STACKS ============
    const techStacks = [
        {
            category: 'Databases and Data Storages',
            technologies: ['SQLite', 'Realm', 'Firebase', 'Amazon RDS', 'Amazon S3', 'Amazon Redshift', 'Amazon Document DB']
        },
        {
            category: 'DevOps',
            technologies: ['Docker', 'Kubernetes', 'Ansible', 'Puppet', 'AWS Developer Tools', 'Azure DevOps']
        },
        {
            category: 'QA Tools',
            technologies: ['Test Flight', 'XCTest', 'Detox', 'Earl Gray', 'Appium', 'Mockito', '.NET Foundation']
        },
        {
            category: 'APIs',
            technologies: ['REST API', 'Keychain API', 'GraphQL', 'GPay', 'Bluetooth Low Energy API', 'Apple Pay', 'Apiary', 'Google Maps', 'Fingerprint API']
        },
        {
            category: 'Monitoring Tools',
            technologies: ['Zabbix', 'Nagios', 'Prometheus', 'Elastic Stack', 'Grafana', 'Datadog']
        },
    ];

    // ============ PROCESS STEPS ============
    const processSteps = [
        { step: 1, title: 'Planning', description: 'We define the mobile application purpose, target audience, and desired UX.', icon: <FileText />, color: '#3B82F6' },
        { step: 2, title: 'Design', description: 'Our team creates a visual structure and interactive prototype for user feedback.', icon: <Figma />, color: '#10B981' },
        { step: 3, title: 'Development', description: 'Our experts build UI and server-side functionality to bring your idea to life.', icon: <Code />, color: '#8B5CF6' },
        { step: 4, title: 'Testing', description: 'Our testing team ensures the mobile application functions flawlessly across all devices.', icon: <TestTube />, color: '#F59E0B' },
        { step: 5, title: 'Launch', description: 'Our professionals ensure the mobile application is launched on time without any glitches.', icon: <Rocket />, color: '#EC4899' },
        { step: 6, title: 'Maintenance', description: 'Our support team ensures continuous support & maintenance of app for future improvements.', icon: <Settings />, color: '#06B6D4' },
    ];

    // ============ HIRING MODELS ============
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

    // ============ STAGES IN MOBILE APP DEVELOPMENT ============
    const developmentStages = [
        { title: 'Planning', description: 'Specifying the purpose and goal of the app. Understanding target audience, features, and functionality.' },
        { title: 'Design', description: 'Deciding how everything will be arranged, how people will move around the app, what colors and styles will be used.' },
        { title: 'Development', description: 'Writing the app code using programming languages like Java, Swift, or React Native.' },
        { title: 'Testing', description: 'Finding and fixing any problems like bugs or things that are hard to use.' },
        { title: 'Deployment', description: 'Sending the app to app stores like Google Play Store or Apple App Store for approval and release.' },
        { title: 'Maintenance and Updates', description: 'Continuous support and maintenance for updates and bug fixes.' },
    ];

    // ============ IMPORTANCE OF MOBILE APPS ============
    const importanceItems = [
        'Expanding Customer Reach – connect with a wide audience',
        'Better Customer Connections – personalized communication',
        'Keep Up With the Industry – stand out from competitors',
        'Increased Sales and Revenue – mobile shopping, in-app purchases',
        'Better Service – round-the-clock support',
        'Learning from Data – gather insights about user behaviour',
    ];

    // ============ NATIVE VS CROSS-PLATFORM ============
    const nativeVsCross = {
        native: {
            title: 'Native Development',
            advantages: [
                'Superior performance and responsiveness',
                'Seamless user experience with platform-specific UI',
                'Direct access to device features (GPS, camera, sensors)'
            ],
            considerations: [
                'Higher development time and cost',
                'Requires separate teams for iOS and Android'
            ]
        },
        cross: {
            title: 'Cross-Platform Development',
            advantages: [
                'Code reusability across platforms',
                'Consistent UI/UX across devices',
                'Faster time-to-market'
            ],
            considerations: [
                'May encounter platform-specific limitations',
                'Performance may not match native for complex apps'
            ]
        }
    };

    // ============ ADVANCED TECHNOLOGIES ============
    const advancedTech = [
        { title: 'AI and Machine Learning', description: 'Personalized experiences, predict user behavior, automate processes.' },
        { title: 'AR and VR', description: 'Immersive experiences for retail, education, healthcare.' },
        { title: 'Blockchain', description: 'Secure transactions, decentralized applications.' },
        { title: 'IoT', description: 'Real-time monitoring and control of connected devices.' },
        { title: 'Edge Computing', description: 'Reduced latency, enhanced data privacy.' },
    ];

    // ============ COST FACTORS ============
    const costFactors = [
        'App Complexity & Features',
        'Native vs Cross-Platform',
        'UI/UX Design Requirements',
        'Backend & Integrations',
        'Security & Compliance',
        'Long-Term Maintenance',
    ];

    // ============ MODERNIZATION BENEFITS ============
    const modernizationBenefits = [
        'Faster performance and reduced crashes',
        'Lower long-term maintenance cost',
        'Increased user retention and conversions',
        'Better scalability and feature expansion',
        'Enhanced security and compliance',
    ];

    // ============ FAQS ============
    const faqs = [
        {
            question: 'How do I choose the right mobile application development company?',
            answer: 'Choosing the right Mobile Application development company depends on its technical expertise, delivery process, and experience with similar products. Businesses should evaluate the company portfolio, development methodology, security practices, and ability to scale engineering teams for long-term app development.'
        },
        {
            question: 'What custom mobile app development services do businesses typically need?',
            answer: 'Custom mobile app development services usually include product consulting, UI/UX design, native or cross-platform development, backend integration, testing, deployment, and maintenance. These services help businesses launch scalable mobile apps tailored to their workflows and user needs.'
        },
        {
            question: 'How long does it take to build and launch a mobile application?',
            answer: 'The timeline for mobile app development depends on app complexity, features, and platform requirements. MVP apps may take 6–12 weeks, while feature-rich applications may require several months. Many mobile application development companies use agile methods to release features in phases.'
        },
        {
            question: 'Can an existing mobile app be upgraded or modernized?',
            answer: 'Yes. A mobile application development company can modernize outdated apps by improving UI/UX, upgrading the technology stack, optimizing performance, and integrating new features. Modernization helps apps remain secure, scalable, and compatible with newer mobile platforms.'
        },
        {
            question: 'How do companies ensure security in mobile application development?',
            answer: 'Professional teams providing mobile application development implement security practices such as secure APIs, encrypted data transmission, role-based access controls, and compliance frameworks. These measures protect user data and reduce security vulnerabilities.'
        },
    ];

    // ============ COMPANY STATS ============
    const companyStats = [
        { value: '700+', label: 'Full-time Staff', icon: <Users />, description: 'Dedicated team' },
        { value: '20+', label: 'Years Experience', icon: <Award />, description: 'Since 2004' },
        { value: '4500+', label: 'Satisfied Clients', icon: <MessageSquare />, description: 'Global client base' },
    ];

    // ============ CLIENT TESTIMONIALS (with avatar placeholders) ============
    const testimonials = [
        {
            name: 'James Kelly',
            role: 'Data Analyst',
            content: 'The Project managers took a lot of time to understand our project before coming up with a contract or what they thought we needed. I had the reassurance from the start that the project managers knew what type of project I wanted and what my needs were. That is reassuring, and that is why we chose BBMcoders.',
            initials: 'JK',
            color: '#3B82F6'
        },
        {
            name: 'Judith Mueller',
            role: 'Executive Director, Judith Foundation',
            content: 'The team at BBMcoders has provided us with exceptional services in creating this one-of-a-kind portal, and it has been a fantastic experience. I was particularly impressed by how efficiently and quickly the team always came up with creative solutions.',
            initials: 'JM',
            color: '#10B981'
        },
        {
            name: 'Kay Andrews',
            role: 'Director of Affairs',
            content: 'BBMcoders had great technical expertise, both in front-end and back-end development. Other project management was well organized. Account management was friendly and always available. I would give BBMcoders ten out of ten!',
            initials: 'KA',
            color: '#8B5CF6'
        },
        {
            name: 'Mohammed Mira',
            role: 'Director, FashionHint',
            content: 'Huge thank you to BBMcoders; they have been a massive help in enabling us to start developing our project within a few weeks, so it has been great! I have already recommended it to one of my friends.',
            initials: 'MM',
            color: '#F59E0B'
        },
        
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
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1920&q=80"
                        alt="Mobile Development Background"
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
                            <Sparkles size={16} /> Mobile App Development
                        </div>
                        <h1 className={styles.heroTitle}>
                            Build & Scale <span className={styles.highlight}>Mobile Apps</span> That Drive Engagement
                        </h1>
                        <p className={styles.heroDescription}>
                            Mobile app development services help businesses design, build, and maintain applications for iOS, Android, and cross-platform devices. These services support product launches, digital customer experiences, and scalable mobile platforms aligned with business requirements.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link href="/contact" className={styles.primaryButton}>
                                Start Your Mobile Project <ArrowRight size={18} />
                            </Link>
                            <Link href="#services" className={styles.secondaryButton}>
                                Explore Services
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        className={styles.rightContent}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialImage}>
                                <div className={styles.testimonialAvatar} style={{ backgroundColor: testimonial.color, color: 'white' }}>
                                    {testimonial.initials}
                                </div>
                            </div>
                            <div className={styles.testimonialContent}>
                                <MessageSquare className={styles.quoteIcon} />
                                <p className={styles.testimonialText}>{testimonial.content}</p>
                                <div className={styles.testimonialAuthor}>
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                                <div className={styles.ratings}>
                                    <div className={styles.ratingItem}>
                                        <div className={styles.ratingStars}>
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <span key={i} className={styles.starIcon}>★</span>
                                            ))}
                                        </div>
                                        <div className={styles.ratingText}>Mobile Excellence</div>
                                    </div>
                                    <div className={styles.ratingDivider}></div>
                                    <div className={styles.ratingItem}>
                                        <div className={styles.projectBadge}>
                                            <Award className={styles.badgeIcon} />
                                            {testimonial.project}
                                        </div>
                                    </div>
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

            {/* ===== MOBILE SERVICES SECTION ===== */}
            <section className={styles.servicesSection} id="services">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            How Our Mobile App Development Services <span className={styles.titleHighlight}>Help You</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Our mobile app development teams help businesses launch and scale mobile applications with reliable architecture, secure integrations, and optimized user experience.
                        </p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {mobileServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className={styles.serviceCard}
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

            {/* ===== TRANSFORM YOUR BUSINESS SECTION ===== */}
            <section className={styles.transformSection}>
                <div className={styles.container}>
                    <div className={styles.transformCard}>
                        <h2 className={styles.transformTitle}>Transform Your Businesses with Custom Mobile Apps</h2>
                        <p className={styles.transformDescription}>
                            We are a top custom mobile app development company, helping businesses worldwide drive scalability, transform, and get a competitive edge. With 20+ years of delivery experience, we help teams build mobile apps that survive real-world usage—complex workflows, security demands, and continuous releases.
                        </p>
                        <div className={styles.transformGrid}>
                            <div className={styles.transformItem}>
                                <Zap className={styles.transformIcon} style={{ color: '#3B82F6' }} />
                                <span>Production-grade Mobile Engineering</span>
                            </div>
                            <div className={styles.transformItem}>
                                <Layers className={styles.transformIcon} style={{ color: '#10B981' }} />
                                <span>Native & Cross-Platform Development</span>
                            </div>
                            <div className={styles.transformItem}>
                                <Globe className={styles.transformIcon} style={{ color: '#8B5CF6' }} />
                                <span>Experience Across 30+ Industries</span>
                            </div>
                            <div className={styles.transformItem}>
                                <Rocket className={styles.transformIcon} style={{ color: '#F59E0B' }} />
                                <span>Launch Apps 40-50% Faster with Agile Approach</span>
                            </div>
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
                            Which Tech Stack Do We Use for <span className={styles.titleHighlight}>Mobile App Development?</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Discover the full range of tools and technologies our experts use for mobile application development projects.
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
                                <h3 className={styles.techCategory}>{stack.category}</h3>
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
                            Our Mobile App <span className={styles.titleHighlight}>Development Process</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Let&apos;s explore the essential steps involved in transforming your vision into a functional and user-friendly app.
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

            {/* ===== ULTIMATE GUIDE SECTION ===== */}
            <section className={styles.guideSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Ultimate Guide to <span className={styles.titleHighlight}>Custom Mobile App Development</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            When you are planning to build a mobile app, this guide will help you in understanding the process and technologies involved, better.
                        </p>
                    </div>

                    {/* Stages */}
                    <div className={styles.guideBlock}>
                        <h3 className={styles.guideBlockTitle}>Stages in Mobile App Development</h3>
                        <div className={styles.stagesGrid}>
                            {developmentStages.map((stage, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.stageCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <h4>{stage.title}</h4>
                                    <p>{stage.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Importance */}
                    <div className={styles.guideBlock}>
                        <h3 className={styles.guideBlockTitle}>Importance of Mobile Apps for Businesses</h3>
                        <div className={styles.importanceGrid}>
                            {importanceItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.importanceItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.importanceBullet}></div>
                                    <span>{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Native vs Cross-Platform */}
                    <div className={styles.guideBlock}>
                        <h3 className={styles.guideBlockTitle}>Choosing the Right Mobile App Development Approach</h3>
                        <div className={styles.comparisonGrid}>
                            <div className={styles.comparisonCard}>
                                <h4 style={{ color: '#3B82F6' }}>{nativeVsCross.native.title}</h4>
                                <div className={styles.comparisonSection}>
                                    <strong>Advantages:</strong>
                                    <ul>
                                        {nativeVsCross.native.advantages.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.comparisonSection}>
                                    <strong>Key Considerations:</strong>
                                    <ul>
                                        {nativeVsCross.native.considerations.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.comparisonCard}>
                                <h4 style={{ color: '#10B981' }}>{nativeVsCross.cross.title}</h4>
                                <div className={styles.comparisonSection}>
                                    <strong>Advantages:</strong>
                                    <ul>
                                        {nativeVsCross.cross.advantages.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.comparisonSection}>
                                    <strong>Key Considerations:</strong>
                                    <ul>
                                        {nativeVsCross.cross.considerations.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Advanced Technologies */}
                    <div className={styles.guideBlock}>
                        <h3 className={styles.guideBlockTitle}>Advanced Mobile App Development Technologies</h3>
                        <div className={styles.advancedGrid}>
                            {advancedTech.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.advancedCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <h4>{tech.title}</h4>
                                    <p>{tech.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Cost Factors */}
                    <div className={styles.guideBlock}>
                        <h3 className={styles.guideBlockTitle}>What Affects Mobile App Development Cost?</h3>
                        <div className={styles.costGrid}>
                            {costFactors.map((factor, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.costItem}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.costNumber}>{index + 1}</div>
                                    <span>{factor}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Modernization Benefits */}
                    <div className={styles.guideBlock}>
                        <h3 className={styles.guideBlockTitle}>Why Mobile App Modernization Is Critical for Business Growth?</h3>
                        <div className={styles.modernGrid}>
                            {modernizationBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.modernItem}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <CheckCircle size={16} style={{ color: '#3B82F6' }} />
                                    <span>{benefit}</span>
                                </motion.div>
                            ))}
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


            {/* ===== FAQ SECTION ===== */}
            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Frequently Asked <span className={styles.titleHighlight}>Questions</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Learn more about our processes as a top mobile app development company and how we work with the help of the following FAQs.
                        </p>
                    </div>

                    <div className={styles.faqGrid}>
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className={styles.faqCard}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <div className={styles.faqQuestionContent}>
                                        <HelpCircle className={styles.faqIcon} />
                                        <span>{faq.question}</span>
                                    </div>
                                    <motion.span
                                        className={styles.faqToggle}
                                        animate={{ rotate: openFaq === index ? 45 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        +
                                    </motion.span>
                                </button>
                                {openFaq === index && (
                                    <motion.div
                                        className={styles.faqAnswer}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS CAROUSEL ===== */}
            <section className={styles.testimonialsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            What Our <span className={styles.titleHighlight}>Clients Say</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            We are grateful for our clients&apos; trust in us, and we take great pride in delivering quality solutions that exceed their expectations.
                        </p>
                    </div>
                    <div className={styles.testimonialsContainer}>
                        <div className={styles.testimonialsWrapper}>
                            <motion.div
                                key={activeTestimonial}
                                className={styles.testimonialItem}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className={styles.testimonialQuote}>“</div>
                                <p className={styles.testimonialContent}>{testimonials[activeTestimonial].content}</p>
                                <div className={styles.testimonialAuthor}>
                                    <div className={styles.testimonialAuthorAvatar} style={{ backgroundColor: testimonials[activeTestimonial].color, color: 'white' }}>
                                        {testimonials[activeTestimonial].initials}
                                    </div>
                                    <div className={styles.testimonialAuthorInfo}>
                                        <h4>{testimonials[activeTestimonial].name}</h4>
                                        <p>{testimonials[activeTestimonial].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className={styles.testimonialControls}>
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.testimonialDot} ${activeTestimonial === index ? styles.active : ''}`}
                                    onClick={() => setActiveTestimonial(index)}
                                    style={{ backgroundColor: activeTestimonial === index ? '#3B82F6' : '#D1D5DB' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

           
            {/* ===== CTA SECTION ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Planning to Modernize Your Mobile App?</h2>
                        <p className={styles.ctaDescription}>
                            Let our mobile app experts help you with UI, speed, and architecture upgrades.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Start Your Mobile Project <ArrowRight size={18} />
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
const HelpCircle = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
);

const Figma = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
    </svg>
);