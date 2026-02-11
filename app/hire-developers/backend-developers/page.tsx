'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Database, Cloud, Server, Users, 
    Shield, Zap, TrendingUp, CheckCircle, 
    Award, MessageSquare, Sparkles,
    ChevronRight, Globe, Rocket,
    HelpCircle, ArrowRight, FileText, 
    HeadphonesIcon, Smartphone, Wifi, 
    GitPullRequest, Settings, Workflow, 
    ShieldCheck, ServerCrash,
    DownloadCloud, Activity
} from 'lucide-react';
import styles from './backend.module.css';

export default function BackendDevelopersPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
    const [activeTechTab, setActiveTechTab] = useState<string>('libraries');

    // Testimonial matching your page layout
    const testimonial = {
        name: 'Sarah Johnson',
        role: 'CTO, FinSecure Inc.',
        content: 'The backend developers from BBNTech built a fault-tolerant system that handles 50,000+ transactions per second with 99.99% uptime. Their architecture decisions saved us 40% on cloud costs.',
        rating: 5,
        project: 'Financial Transaction Platform'
    };

    // Backend Expertise Areas
    const backendExpertise = [
        {
            id: 1,
            title: 'Database Programming & Architecture',
            description: 'Scalable database systems using MySQL, MongoDB, Cassandra with optimized queries and data modeling.',
            icon: <Database className={styles.expertiseIcon} />,
            color: '#3B82F6',
            features: ['Database design & optimization', 'Query performance tuning', 'Data migration strategies', 'Scalable schema architecture']
        },
        {
            id: 2,
            title: 'Backend Application Development',
            description: 'Fault-tolerant backends for enterprise systems, IoT infrastructure, VoIP solutions, and complex applications.',
            icon: <Server className={styles.expertiseIcon} />,
            color: '#10B981',
            features: ['Microservices architecture', 'Event-driven systems', 'Real-time processing', 'System integration']
        },
        {
            id: 3,
            title: 'Cloud Infrastructure & Migration',
            description: 'Complete cloud solutions on AWS, Azure, and Google Cloud Platform with seamless migration strategies.',
            icon: <Cloud className={styles.expertiseIcon} />,
            color: '#8B5CF6',
            features: ['Cloud-native development', 'Serverless architecture', 'Container orchestration', 'Infrastructure as Code']
        },
        {
            id: 4,
            title: 'API Programming & Integration',
            description: 'Robust APIs using REST, GraphQL, and SOAP with comprehensive third-party service integration.',
            icon: <GitPullRequest className={styles.expertiseIcon} />,
            color: '#F59E0B',
            features: ['REST/GraphQL API design', 'WebSocket implementations', 'Third-party API integration', 'API security & rate limiting']
        },
        {
            id: 5,
            title: 'Mobile App Backend Development',
            description: 'Dedicated backend systems for mobile applications with real-time sync and offline capabilities.',
            icon: <Smartphone className={styles.expertiseIcon} />,
            color: '#EC4899',
            features: ['Push notification systems', 'Real-time data sync', 'Offline-first architecture', 'Mobile API optimization']
        },
        {
            id: 6,
            title: 'Application Re-engineering',
            description: 'Modernizing legacy systems with proven re-engineering techniques and maximum customization.',
            icon: <Settings className={styles.expertiseIcon} />,
            color: '#06B6D4',
            features: ['Legacy system modernization', 'Code refactoring', 'Performance optimization', 'Technology stack upgrades']
        }
    ];

    // Technology Stack
    const technologyStack = {
        'libraries': {
            title: 'Frameworks & Libraries',
            color: '#3B82F6',
            technologies: ['Node.js', 'Python Django', 'Ruby on Rails', 'Spring Boot', 'ASP.NET Core', 'Laravel', 'Express.js', 'Flask']
        },
        'database': {
            title: 'Database Technologies',
            color: '#10B981',
            technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Cassandra', 'Elasticsearch', 'Firebase', 'DynamoDB']
        },
        'cloud': {
            title: 'Cloud & DevOps',
            color: '#8B5CF6',
            technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI']
        },
        'tools': {
            title: 'Development Tools',
            color: '#F59E0B',
            technologies: ['Git', 'Postman', 'Swagger', 'JIRA', 'Confluence', 'Slack', 'Datadog', 'New Relic']
        }
    };

    // Development Process
    const developmentProcess = [
        { step: 1, title: 'Requirements Analysis', description: 'Understanding your business logic, data flow, and performance requirements.', icon: <FileText /> },
        { step: 2, title: 'System Architecture', description: 'Designing scalable and secure backend architecture with technology stack selection.', icon: <Workflow /> },
        { step: 3, title: 'Database Design', description: 'Creating optimized database schemas and relationships for your application needs.', icon: <Database /> },
        { step: 4, title: 'API Development', description: 'Building robust APIs with proper documentation and versioning strategies.', icon: <GitPullRequest /> },
        { step: 5, title: 'Security Implementation', description: 'Implementing authentication, authorization, and data protection measures.', icon: <ShieldCheck /> },
        { step: 6, title: 'Deployment & Monitoring', description: 'CI/CD pipeline setup, deployment, and ongoing performance monitoring.', icon: <Rocket /> }
    ];

    // Benefits Section
    const benefits = [
        {
            title: 'Enterprise-Grade Security',
            description: 'Bank-level security protocols, data encryption, and compliance with industry standards.',
            icon: <ShieldCheck />,
            stats: '99.99% Security Compliance'
        },
        {
            title: 'High Performance Systems',
            description: 'Optimized backend systems handling millions of requests with minimal latency.',
            icon: <Zap />,
            stats: '<100ms Response Time'
        },
        {
            title: 'Scalable Architecture',
            description: 'Future-proof systems designed to grow with your business needs seamlessly.',
            icon: <TrendingUp />,
            stats: 'Handles 10M+ Users'
        },
        {
            title: '24/7 System Reliability',
            description: 'Fault-tolerant systems with automated backups and disaster recovery.',
            icon: <ServerCrash />,
            stats: '99.95% Uptime Guarantee'
        }
    ];

    // Hiring Models Comparison
    const hiringComparison = [
        {
            model: 'In-House Team',
            timeToHire: '4-12 weeks',
            timeToStart: '2-10 weeks',
            trainingCost: '$10,000-$30,000',
            scalingTime: '4-16 weeks',
            risk: 'Low',
            deliverySupport: 'Some'
        },
        {
            model: 'Freelancers',
            timeToHire: '1-12 weeks',
            timeToStart: '1-10 weeks',
            trainingCost: '0',
            scalingTime: 'Variable',
            risk: 'High',
            deliverySupport: 'Limited'
        },
        {
            model: 'BBNTech',
            timeToHire: '1 day - 2 weeks',
            timeToStart: '1 day - 2 weeks',
            trainingCost: '0',
            scalingTime: '48 hours - 1 week',
            risk: 'Extremely Low',
            deliverySupport: 'Full'
        }
    ];

    // Stats Section
    const companyStats = [
        { value: '700+', label: 'Full-time Developers', icon: <Users /> },
        { value: '20+', label: 'Years Experience', icon: <Award /> },
        { value: '4500+', label: 'Satisfied Clients', icon: <HeadphonesIcon /> },
        { value: '98%', label: 'Project Success Rate', icon: <CheckCircle /> }
    ];

    // What We Build Section
    const whatWeBuild = [
        {
            title: 'E-Commerce Backends',
            description: 'Scalable payment processing, inventory management, and order fulfillment systems.',
            icon: <Globe />,
            examples: ['Payment gateways', 'Inventory systems', 'Order processing', 'Shipping integration'],
            color: '#EC4899'
        },
        {
            title: 'FinTech Platforms',
            description: 'Secure banking systems, trading platforms, and financial analytics engines.',
            icon: <Activity />,
            examples: ['Banking APIs', 'Trading engines', 'Risk management', 'Fraud detection'],
            color: '#10B981'
        },
        {
            title: 'Healthcare Systems',
            description: 'HIPAA-compliant patient management, telemedicine, and medical record systems.',
            icon: <ShieldCheck />,
            examples: ['Patient portals', 'EHR systems', 'Telemedicine backends', 'Medical billing'],
            color: '#3B82F6'
        },
        {
            title: 'IoT & Real-time Systems',
            description: 'Backends for connected devices, real-time data processing, and analytics.',
            icon: <Wifi />,
            examples: ['IoT device management', 'Real-time analytics', 'Sensor data processing', 'Alert systems'],
            color: '#8B5CF6'
        },
        {
            title: 'SaaS Platforms',
            description: 'Multi-tenant architectures with subscription management and user isolation.',
            icon: <Cloud />,
            examples: ['Subscription systems', 'User management', 'Billing engines', 'Analytics dashboards'],
            color: '#F59E0B'
        },
        {
            title: 'Media Streaming',
            description: 'High-performance video/audio streaming and content delivery systems.',
            icon: <DownloadCloud />,
            examples: ['Video streaming', 'Content delivery', 'Media encoding', 'DRM systems'],
            color: '#06B6D4'
        }
    ];

    // Industries Section (Same as frontend)
    const industries = [
        {
            name: 'E-Commerce & Retail',
            icon: '🛍️',
            desc: 'High-conversion online stores, product catalogs, shopping carts, and personalized shopping experiences with seamless checkout flows.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
            color: '#3B82F6'
        },
        {
            name: 'FinTech & Banking',
            icon: '🏦',
            desc: 'Secure banking interfaces, financial dashboards, payment gateways, and investment platforms with real-time data visualization.',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
            color: '#10B981'
        },
        {
            name: 'Healthcare & MedTech',
            icon: '🏥',
            desc: 'Patient portals, telemedicine platforms, medical dashboards, and healthcare management systems with HIPAA-compliant interfaces.',
            image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80',
            color: '#8B5CF6'
        }
    ];

    // FAQs (Same as frontend but backend-focused)
    const faqs = [
        {
            question: 'How quickly can I hire backend developers from BBNTech?',
            answer: 'We can onboard dedicated backend developers in 24-48 hours. Our vetting process is streamlined to provide you with pre-screened, experienced developers who match your specific requirements.'
        },
        {
            question: 'What technologies do your backend developers specialize in?',
            answer: 'Our developers are experts in Node.js, Python, Java, .NET, Ruby on Rails, Go, and modern databases like MongoDB and PostgreSQL. We also work with cloud platforms, DevOps tools, and security frameworks.'
        },
        {
            question: 'Do you offer a trial period for hired developers?',
            answer: 'Yes, we offer a 7-day risk-free trial period. This allows you to evaluate the developer\'s skills and fit with your team before making a long-term commitment.'
        },
        {
            question: 'How do you ensure code quality and security?',
            answer: 'We follow strict coding standards, conduct regular code reviews, implement comprehensive testing (unit, integration, security), and use modern tooling for monitoring, logging, and performance optimization.'
        },
        {
            question: 'Can your backend developers work with our existing infrastructure?',
            answer: 'Absolutely. Our developers are experienced in API integration and collaboration with existing systems. We can adapt to your current infrastructure, databases, and deployment processes.'
        },
        {
            question: 'What kind of support and project management do you provide?',
            answer: 'We provide dedicated project managers, daily stand-ups, sprint planning, and transparent communication through your preferred tools (Slack, Teams, Jira, etc.). We also offer ongoing maintenance and support.'
        }
    ];

    // Code Quality Practices
    const codeQualityPractices = [
        {
            title: 'Coding Best Practices',
            items: ['Descriptive variable names & comments', 'Comprehensive documentation', 'Code modularity & reusability', 'Error handling strategies']
        },
        {
            title: 'Unit & Integration Testing',
            items: ['Test-driven development (TDD)', 'Continuous integration automation', 'Comprehensive test coverage', 'Performance benchmarking']
        },
        {
            title: 'Code Review Practices',
            items: ['Peer review culture', 'Automated code scanning', 'Security vulnerability checks', 'Performance optimization reviews']
        },
        {
            title: 'Quality Metrics',
            items: ['Complexity metrics tracking', 'Technical debt management', 'Code coverage reports', 'Security compliance scoring']
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.overlay}></div>

                <div className={styles.content}>
                    {/* Left Side - Content */}
                    <motion.div
                        className={styles.leftContent}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className={styles.headline}
                        >
                            <div className={styles.heroBadge}>
                                <Sparkles size={18} /> Expert Backend Development
                            </div>
                            <h1 className={styles.mainTitle}>
                                Hire Backend <span className={styles.highlight}>Developers</span>
                            </h1>
                            <p className={styles.subheadline}>
                                Build robust, scalable server-side systems with enterprise-grade performance
                            </p>
                            <p className={styles.heroDescription}>
                                Hire dedicated backend developers from BBNTech with 5+ years of average experience. 
                                Expertise in Node.js, .NET, Python, PHP, Laravel, Ruby on Rails, and GoLang for 
                                building secure, high-performance backend systems.
                            </p>
                        </motion.div>

                        {/* <div className={styles.benefitsGrid}>
                            <div className={styles.benefitItem}>
                                <CheckCircle size={18} />
                                <span>Proof of Work based timesheets</span>
                            </div>
                            <div className={styles.benefitItem}>
                                <Shield size={18} />
                                <span>IP Rights & NDA protection</span>
                            </div>
                            <div className={styles.benefitItem}>
                                <Settings size={18} />
                                <span>Flexible contracts, transparent pricing</span>
                            </div>
                            <div className={styles.benefitItem}>
                                <Zap size={18} />
                                <span>7-day risk-free trial, zero overheads</span>
                            </div>
                        </div> */}

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className={styles.buttonContainer}
                        >
                            <Link href="/contact" className={styles.ctaButton}>
                                Hire Developers Now
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="#expertise" className={styles.secondaryButton}>
                                View Our Expertise
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Testimonial Card */}
                    <motion.div
                        className={styles.rightContent}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialImage}>
                                <div className={styles.clientImageWrapper}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW58ZW58MHx8MHx8fDA%3D"
                                        alt={testimonial.name}
                                        width={100}
                                        height={100}
                                        className={styles.clientImage}
                                    />
                                </div>
                            </div>

                            <div className={styles.testimonialContent}>
                                <MessageSquare className={styles.quoteIcon} />
                                <p className={styles.testimonialText}>&quot;{testimonial.content}&quot;</p>
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
                                        <div className={styles.ratingText}>Backend Excellence</div>
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
                <div className={styles.sectionContent}>
                    <p className={styles.trustedLabel}>Trusted by startups and Fortune 500 companies</p>
                    <div className={styles.trustedLogos}>
                        {['Microsoft', 'Amazon', 'Google', 'IBM', 'SAP', 'Oracle'].map((company, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.logoItem}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.logoPlaceholder}>{company}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== EXPERTISE SECTION ===== */}
            <section className={styles.expertiseSection} id="expertise">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Expertise of Our <span className={styles.titleHighlight}>Backend Developers</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We have a team of experienced backend development experts who can help you get started 
                        with development from scratch or take your project to the next level.
                    </p>
                </div>

                <div className={styles.expertiseGrid}>
                    {backendExpertise.map((expertise, index) => (
                        <motion.div
                            key={expertise.id}
                            className={styles.expertiseCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredExpertise(expertise.id)}
                            onMouseLeave={() => setHoveredExpertise(null)}
                        >
                            <div className={styles.expertiseHeader}>
                                <div className={styles.expertiseIconWrapper} style={{
                                    backgroundColor: `${expertise.color}20`,
                                    color: expertise.color
                                }}>
                                    {expertise.icon}
                                </div>
                                <h3 className={styles.expertiseTitle}>{expertise.title}</h3>
                            </div>

                            <p className={styles.expertiseDescription}>{expertise.description}</p>

                            <div className={styles.expertiseDetails}>
                                <ul className={styles.detailsList}>
                                    {expertise.features.map((feature, idx) => (
                                        <li key={idx} className={styles.detailItem}>
                                            <CheckCircle className={styles.checkIcon} style={{ color: expertise.color }} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <Link href={`/hire/backend/${expertise.id}`} className={styles.learnMoreLink}>
                                    Learn More
                                    <ChevronRight className={styles.linkIcon} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== TECHNOLOGY STACK SECTION ===== */}
            <section className={styles.techStackSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Technology Stack of Our <span className={styles.titleHighlight}>Backend Developers</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Our talented backend developers have expertise in various technologies and tools. 
                        We can help you with backend development using any technology you may need.
                    </p>
                </div>

                {/* Technology Tabs */}
                <div className={styles.techTabs}>
                    {Object.keys(technologyStack).map((tabKey) => (
                        <button
                            key={tabKey}
                            className={`${styles.techTab} ${activeTechTab === tabKey ? styles.active : ''}`}
                            onClick={() => setActiveTechTab(tabKey)}
                            style={{
                                borderColor: activeTechTab === tabKey ? technologyStack[tabKey as keyof typeof technologyStack].color : 'transparent'
                            }}
                        >
                            <span>{technologyStack[tabKey as keyof typeof technologyStack].title}</span>
                        </button>
                    ))}
                </div>

                {/* Technology Grid */}
                <div className={styles.techContent}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTechTab}
                            className={styles.techGrid}
                            data-tab={activeTechTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {technologyStack[activeTechTab as keyof typeof technologyStack].technologies.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className={styles.techItem}
                                    style={{
                                        backgroundColor: `${technologyStack[activeTechTab as keyof typeof technologyStack].color}15`,
                                        borderColor: technologyStack[activeTechTab as keyof typeof technologyStack].color,
                                        color: technologyStack[activeTechTab as keyof typeof technologyStack].color
                                    }}
                                >
                                    {tech}
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ===== CODE QUALITY SECTION ===== */}
            <section className={styles.qualitySection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        How We Ensure <span className={styles.titleHighlight}>Code Quality</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        At the core of our development process, we prioritize code quality, implementing stringent testing, 
                        detailed reviews, and industry-best practices to deliver software that excels in both functionality and longevity.
                    </p>
                </div>

                <div className={styles.qualityGrid}>
                    {codeQualityPractices.map((practice, index) => (
                        <motion.div
                            key={index}
                            className={styles.qualityCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3>{practice.title}</h3>
                            <ul className={styles.qualityList}>
                                {practice.items.map((item, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={16} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== BENEFITS SECTION ===== */}
            <section className={styles.benefitsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Why Choose BBNTech for <span className={styles.titleHighlight}>Backend Development?</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        If you're looking for top-tier backend developers, trust BBNTech. With years of experience in the industry, 
                        our team of experienced professionals helps you build robust backend solutions that cater to your business needs.
                    </p>
                </div>

                <div className={styles.benefitsGrid}>
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className={styles.benefitCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.benefitIcon}>
                                {benefit.icon}
                            </div>
                            <h3>{benefit.title}</h3>
                            <p className={styles.benefitDescription}>{benefit.description}</p>
                            <div className={styles.benefitStat}>{benefit.stats}</div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.additionalBenefits}>
                    <div className={styles.benefitList}>
                        <div className={styles.benefitListItem}>
                            <CheckCircle size={20} />
                            <span>Workstatus™ powered Proof of Work</span>
                        </div>
                        <div className={styles.benefitListItem}>
                            <CheckCircle size={20} />
                            <span>Top 1% developers, rigorously vetted</span>
                        </div>
                        <div className={styles.benefitListItem}>
                            <CheckCircle size={20} />
                            <span>Dedicated project manager</span>
                        </div>
                        <div className={styles.benefitListItem}>
                            <CheckCircle size={20} />
                            <span>Flexible contracts, transparent pricing</span>
                        </div>
                        <div className={styles.benefitListItem}>
                            <CheckCircle size={20} />
                            <span>Zero hiring fee, quick onboarding</span>
                        </div>
                        <div className={styles.benefitListItem}>
                            <CheckCircle size={20} />
                            <span>Comprehensive code documentation</span>
                        </div>
                        <div className={styles.benefitListItem}>
                            <CheckCircle size={20} />
                            <span>Adherence to data security practices</span>
                        </div>
                        <div className={styles.benefitListItem}>
                            <CheckCircle size={20} />
                            <span>Language/time-zone compatible staff</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== DEVELOPMENT PROCESS ===== */}
            <section className={styles.processSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our Backend Development <span className={styles.titleHighlight}>Process</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        A structured approach to delivering high-quality backend solutions that exceed expectations.
                    </p>
                </div>

                <div className={styles.processGrid}>
                    {developmentProcess.map((step, index) => (
                        <motion.div
                            key={step.step}
                            className={styles.processCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.processNumber}>0{step.step}</div>
                            <div className={styles.processIcon}>
                                {step.icon}
                            </div>
                            <h3 className={styles.processTitle}>{step.title}</h3>
                            <p className={styles.processDescription}>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== WHAT WE BUILD SECTION ===== */}
            <section className={styles.buildSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        What Our Backend Experts <span className={styles.titleHighlight}>Can Build</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        From enterprise systems to real-time applications, we deliver robust backend solutions that power modern businesses.
                    </p>
                </div>

                <div className={styles.buildGrid}>
                    {whatWeBuild.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.buildCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.buildIcon} style={{ color: project.color }}>
                                {project.icon}
                            </div>
                            <h3>{project.title}</h3>
                            <p className={styles.buildDescription}>{project.description}</p>
                            <ul className={styles.buildExamples}>
                                {project.examples.map((example, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={16} style={{ color: project.color }} />
                                        <span>{example}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== HIRING COMPARISON SECTION ===== */}
            <section className={styles.comparisonSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Comparative Analysis: <span className={styles.titleHighlight}>In-House, Freelancers, or BBNTech</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        When it comes to building backend systems, you have three main options. Let's take a look at each in detail.
                    </p>
                </div>

                <div className={styles.comparisonTable}>
                    <div className={styles.tableHeader}>
                        <div className={styles.headerCell}>Factor</div>
                        {hiringComparison.map((model, idx) => (
                            <div key={idx} className={styles.headerCell}>{model.model}</div>
                        ))}
                    </div>
                    
                    {['timeToHire', 'timeToStart', 'trainingCost', 'scalingTime', 'risk', 'deliverySupport'].map((factor, idx) => (
                        <div key={idx} className={styles.tableRow}>
                            <div className={styles.rowHeader}>
                                {factor === 'timeToHire' && 'Time to get right developers'}
                                {factor === 'timeToStart' && 'Time to start a project'}
                                {factor === 'trainingCost' && 'Recurring cost of training'}
                                {factor === 'scalingTime' && 'Time to scale size of the team'}
                                {factor === 'risk' && 'Project failure risk'}
                                {factor === 'deliverySupport' && 'Developers backed by delivery team'}
                            </div>
                            {hiringComparison.map((model, modelIdx) => (
                                <div key={modelIdx} className={styles.rowCell}>
                                    {model[factor]}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== COMPANY STATS ===== */}
            <section className={styles.statsSection}>
                <div className={styles.statsGrid}>
                    {companyStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className={styles.statCard}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.statIcon}>
                                {stat.icon}
                            </div>
                            <div className={styles.statValue}>{stat.value}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== INDUSTRIES SECTION ===== */}
            <section className={styles.industriesSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Industries We Cater To</h2>
                        <p className={styles.sectionDescription}>
                            Partnering with businesses across sectors to deliver exceptional backend experiences
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
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Frequently Asked <span className={styles.titleHighlight}>Questions</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Get answers to common questions about hiring backend developers from BBNTech.
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

                {/* Final CTA */}
                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>Need Secure, High-Performance Backend Systems?</h3>
                        <p className={styles.ctaDescription}>
                            Hire backend developers who build robust, scalable server-side architecture that powers 
                            your business growth with enterprise-grade security and performance.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Hire Backend Developers Now
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="/pricing" className={styles.ctaSecondary}>
                                View Pricing Plans
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}