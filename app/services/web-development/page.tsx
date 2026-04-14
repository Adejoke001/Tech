'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, ArrowRight, Award, MessageSquare, CheckCircle,
    Users, Globe, Clock, Building2, Shield, HelpCircle, Brain,
    Compass, Code, RefreshCw, Target, Settings, FileText, TestTube,
    Palette, Figma, Cloud as CloudIcon, GitMerge, HeadphonesIcon, Rocket,
} from 'lucide-react';
import styles from './web.module.css';

export default function WebDevelopmentPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'Rachael Ajayi',
        role: 'CTO, Uber solutions',
        content: 'BBMcoders built our custom web application from the ground up. Their agile process, clear communication, and technical excellence delivered a platform that scaled effortlessly with our business.',
        rating: 5,
        project: 'Enterprise Platform'
    };

    // ============ WEB APP SERVICES (from URL) ============
    const webServices = [
        {
            id: 1,
            title: 'Web App Consulting',
            description: 'Turn your web app idea into a validated, strategic plan with expert guidance.',
            icon: <Compass />,
            color: '#3B82F6',
            features: [
                'Clear, business-aligned roadmap',
                'Right tech stack & architecture selection',
                'Cost analysis and risk mitigation'
            ]
        },
        {
            id: 2,
            title: 'Custom Web App Development',
            description: 'Build tailored digital products that match your business goals and scale effortlessly.',
            icon: <Code />,
            color: '#10B981',
            features: [
                'Cost-effective, fully customized solutions',
                'Fast, agile development process',
                'Secure, scalable application architecture'
            ]
        },
        {
            id: 3,
            title: 'Legacy Web App Modernization',
            description: 'Upgrade outdated systems into modern, secure, cloud-ready web apps.',
            icon: <RefreshCw />,
            color: '#8B5CF6',
            features: [
                'Enhanced performance & scalability',
                'Migration to updated frameworks',
                'Future-ready, long-term maintainability'
            ]
        },
        {
            id: 4,
            title: 'Web App UI/UX Design',
            description: 'Create intuitive, user-centered designs that boost engagement and conversions.',
            icon: <Figma />,
            color: '#F59E0B',
            features: [
                'Conversion-focused UI/UX',
                'Smooth, intuitive navigation flows',
                'High user satisfaction & retention'
            ]
        },
        {
            id: 5,
            title: 'Third-Party Integrations',
            description: 'Connect your systems with powerful APIs to automate and simplify operations.',
            icon: <GitMerge />,
            color: '#EC4899',
            features: [
                'Seamless API integrations',
                'Automated workflows & data sync',
                'Increased productivity & efficiency'
            ]
        },
        {
            id: 6,
            title: 'Web App Support & Maintenance',
            description: 'Ensure uninterrupted performance with round-the-clock monitoring and optimization.',
            icon: <HeadphonesIcon />,
            color: '#06B6D4',
            features: [
                '24/7 performance monitoring',
                'Regular security & vulnerability patches',
                'Continuous upgrades & troubleshooting'
            ]
        },
        {
            id: 7,
            title: 'Cloud-Based Web Apps',
            description: 'Build and scale applications on robust, enterprise-ready cloud infrastructure.',
            icon: <CloudIcon />,
            color: '#3B82F6',
            features: [
                'On-demand scalability',
                'Reduced infrastructure costs',
                'High availability & enterprise-grade security'
            ]
        },
        {
            id: 8,
            title: 'AI-Based Web Apps',
            description: 'Enhance your applications with intelligent automation and real-time insights.',
            icon: <Brain />,
            color: '#10B981',
            features: [
                'Smart decision automation',
                'Personalized user experiences',
                'Data-driven business intelligence'
            ]
        },
    ];

    // ============ FORMULA FOR SUCCESS (from URL) ============
    const successFactors = [
        {
            title: 'Quality Management',
            description: 'Follow strict quality assurance. Ensure reliability and performance. Identify and resolve issues proactively.',
            icon: <CheckCircle />,
            color: '#3B82F6',
        },
        {
            title: 'Collaboration',
            description: 'Foster seamless collaboration. Ensure alignment with milestones. Maintain continuous communication.',
            icon: <Users />,
            color: '#10B981',
        },
        {
            title: 'Security Management',
            description: 'Safeguard against vulnerabilities. Implement top-tier security measures. Protect web apps and data from threats.',
            icon: <Shield />,
            color: '#8B5CF6',
        },
    ];

    // ============ WHY PARTNER ============
    const whyPartner = [
        { text: 'Senior Engineers with 5-12 Years of Experience', icon: <Users />, color: '#3B82F6' },
        { text: 'Trusted by Startups to Fortune 500', icon: <Building2 />, color: '#10B981' },
        { text: 'Idea to Deployment, We Handle All', icon: <Rocket />, color: '#8B5CF6' },
        { text: 'Time-Zone Friendly: Global Presence', icon: <Globe />, color: '#F59E0B' },
        { text: 'Flexible Engagement Models', icon: <Settings />, color: '#EC4899' },
        { text: 'On-time Delivery, No Surprises', icon: <Clock />, color: '#06B6D4' },
    ];

    // ============ TECHNOLOGIES (from URL) ============
    const techCategories = [
        {
            title: 'Databases',
            color: '#3B82F6',
            technologies: ['Microsoft SQL Server', 'MySQL', 'MariaDB', 'PostgreSQL', 'SQLite', 'MongoDB', 'Realm', 'Apache Cassandra']
        },
        {
            title: 'Cloud Services',
            color: '#10B981',
            technologies: ['AWS Cloud', 'Azure Data Lake', 'Azure Blob Storage', 'Azure Cosmos DB', 'Azure SQL Database', 'Azure Synapse Analytics', 'Google Cloud SQL']
        },
        {
            title: 'DevOps Tools',
            color: '#8B5CF6',
            technologies: ['Docker', 'Kubernetes', 'Red Hat OpenShift', 'Ansible', 'HashiCorp Terraform', 'AWS Developer Tools', 'Azure DevOps', 'Google Developer Tools', 'GitLab CI/CD', 'Jenkins']
        },
    ];

    // ============ COST ESTIMATES (from URL) ============
    // const costEstimates = [
    //     { range: 'Starting at $55,000', description: 'Custom-designed single-store website tailored to your brand.' },
    //     { range: 'Starting at $70,000', description: 'Vendor or sales portal designed for mid-sized companies to streamline operations.' },
    //     { range: 'Starting at $110,000', description: 'Multistore solution with two unique websites or store views featuring bespoke designs.' },
    //     { range: '$90,000 – $300,000', description: 'Corporate eLearning platforms for mid-sized and large enterprises, fully integrated with various internal systems.' },
    //     { range: 'Approx. $250,000', description: 'Comprehensive eCommerce portal designed for mid-market businesses to enhance online sales and customer engagement.' },
    // ];

    // ============ DEVELOPMENT PROCESS (from URL) ============
    const processSteps = [
        { step: 1, title: 'Planning', description: 'We define the web app’s purpose, target audience, and desired user experience.', icon: <FileText />, color: '#3B82F6' },
        { step: 2, title: 'Design', description: 'Our team creates a visual structure and interactive prototype for user feedback.', icon: <Palette />, color: '#10B981' },
        { step: 3, title: 'Development', description: 'Our experts build UI and server-side functionality to bring your idea to life.', icon: <Code />, color: '#8B5CF6' },
        { step: 4, title: 'Testing', description: 'Our testing team ensures the web app functions flawlessly across all devices.', icon: <TestTube />, color: '#F59E0B' },
        { step: 5, title: 'Launch', description: 'Our professionals ensure the web app is launched on-time without any glitches.', icon: <Rocket />, color: '#EC4899' },
        { step: 6, title: 'Maintenance', description: 'Our support team ensures continuous support & maintenance for future improvements.', icon: <Settings />, color: '#06B6D4' },
    ];

    // ============ HIRING MODELS (from URL) ============
    const hiringModels = [
        {
            title: 'Staff Augmentation / Team Extension',
            description: 'Add engineering capacity without changing how you deliver. Individual engineers or groups integrate into your existing team.',
            icon: <Users />,
            color: '#3B82F6',
            features: ['You interview & select', 'Scale up/down with 30 days notice', 'Time & Material, Retainer']
        },
        {
            title: 'Dedicated Teams / Delivery Pods',
            description: 'Dedicated squad with Tech Lead + Engineers + QA. Shared accountability for predictable sprint delivery.',
            icon: <Target />,
            color: '#10B981',
            features: ['Milestone-based or fixed-cost', 'We own sprint delivery metrics', 'Weekly demos']
        },
        {
            title: 'Development Centers',
            description: 'Long-term, scaled teams with your branding, culture, processes. Full infrastructure, HR, security & compliance.',
            icon: <Building2 />,
            color: '#8B5CF6',
            features: ['Long-term retainer', 'BOT (Build–Operate–Transfer) options', 'Multi-year partnerships']
        },
    ];

    // ============ COMPANY STATS ============
    const companyStats = [
        { value: '700+', label: 'Full-time Staff', icon: <Users />, description: 'Dedicated team' },
        { value: '20+', label: 'Years Experience', icon: <Award />, description: 'Since 2004' },
        { value: '4500+', label: 'Satisfied Clients', icon: <MessageSquare />, description: 'Global client base' },
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

    // ============ FAQS ============
    const faqs = [
        {
            question: 'What types of web applications do you develop?',
            answer: 'We build a wide range of web applications including SaaS platforms, eCommerce stores, enterprise portals, custom CRMs, eLearning systems, and AI-powered web apps – tailored to your specific business needs.'
        },
        {
            question: 'How do you ensure the security of web applications?',
            answer: 'We follow secure coding practices, implement OWASP guidelines, conduct regular security audits, and perform penetration testing. All data is encrypted, and we ensure compliance with relevant standards like GDPR and HIPAA.'
        },
        {
            question: 'What is your typical development timeline?',
            answer: 'A basic MVP can take 3-4 months, while complex enterprise solutions may take 6-12 months. We work in agile sprints, delivering value incrementally so you can see progress from the first month.'
        },
        {
            question: 'Can you integrate with our existing systems?',
            answer: 'Absolutely. We specialise in integrating web applications with third-party services, legacy systems, ERPs, CRMs, and APIs. Our integration strategy ensures seamless data flow without disrupting current operations.'
        },
        {
            question: 'Do you provide post-launch support?',
            answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, security patches, performance optimization, and feature enhancements. Our team ensures your application remains reliable and up-to-date.'
        },
        {
            question: 'What is your engagement model?',
            answer: 'We offer flexible models: fixed-price for well-defined projects, time & material for evolving requirements, and dedicated teams for long-term partnerships. You can choose what works best for your budget and goals.'
        },
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1920&q=80"
                        alt="Web Development Background"
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
                            <Sparkles size={16} /> Web Application Development
                        </div>
                        <h1 className={styles.heroTitle}>
                            Build Scalable, Secure & <span className={styles.highlight}>Future-Ready Web Apps</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            We provide web application development services for companies that want accountability, not just output. From architecture decisions to releases, our teams own delivery end-to-end.
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

            {/* ===== WEB SERVICES SECTION ===== */}
            <section className={styles.servicesSection} id="services">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Our Web App <span className={styles.titleHighlight}>Development Services</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Experience end-to-end web application development services designed to help you launch powerful, scalable, and user-friendly digital products.
                        </p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {webServices.map((service, index) => (
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

            {/* ===== SUCCESS FORMULA SECTION ===== */}
            <section className={styles.successSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Our Formula for <span className={styles.titleHighlight}>Web Development Success</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Our custom web app development services are designed to guarantee success through meticulous attention to detail and industry-leading practices.
                        </p>
                    </div>
                    <div className={styles.successGrid}>
                        {successFactors.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.successCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.successIcon} style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <h3 className={styles.successTitle}>{item.title}</h3>
                                <p className={styles.successDescription}>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHY PARTNER SECTION ===== */}
            <section className={styles.whyPartnerSection}>
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
                                Your Trusted <span className={styles.titleHighlight}>Custom Web App Development</span> Company
                            </h2>
                            <p className={styles.sectionDescription} style={{ color: 'rgba(255,255,255,0.9)' }}>
                                We bring 20+ years of engineering excellence, mature delivery frameworks, and deep technical expertise to help businesses accelerate digital transformation.
                            </p>
                        </div>
                        <div className={styles.whyPartnerGrid}>
                            {whyPartner.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.whyPartnerCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.whyPartnerIcon} style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <span className={styles.whyPartnerText}>{item.text}</span>
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

            {/* ===== TECHNOLOGIES SECTION ===== */}
            <section className={styles.techSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Technologies & <span className={styles.titleHighlight}>Frameworks We Use</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            We are proud to have a team of custom web application developers who hold relevant knowledge about the following core technologies.
                        </p>
                    </div>
                    <div className={styles.techCategories}>
                        {techCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                className={styles.techCategory}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className={styles.techCategoryTitle} style={{ color: category.color }}>
                                    {category.title}
                                </h3>
                                <div className={styles.techItems}>
                                    {category.technologies.map((tech, idx) => (
                                        <span key={idx} className={styles.techItem} style={{
                                            backgroundColor: `${category.color}15`,
                                            borderColor: category.color,
                                            color: category.color
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== COST ESTIMATES SECTION ===== */}
            {/* <section className={styles.costSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Cost of <span className={styles.titleHighlight}>Web Development Projects</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            The cost of web application development depends on various factors such as service scope, sourcing model, technical design pattern, and software complexity.
                        </p>
                    </div>
                    <div className={styles.costGrid}>
                        {costEstimates.map((cost, index) => (
                            <motion.div
                                key={index}
                                className={styles.costCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                            >
                                <div className={styles.costRange}>{cost.range}</div>
                                <p className={styles.costDescription}>{cost.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className={styles.costCta}>
                        <p>Wondering how much your development project will cost?</p>
                        <Link href="/contact" className={styles.costButton}>
                            Get a Free Estimate <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section> */}

            {/* ===== DEVELOPMENT PROCESS ===== */}
            <section className={styles.processSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Our Web App <span className={styles.titleHighlight}>Development Process</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            A streamlined overview of our custom web app development process.
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
                            Get answers to common questions about our web application development services.
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

            {/* ===== FINAL CTA ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Launch a Business-Ready Web Application</h2>
                        <p className={styles.ctaDescription}>
                            We develop fully functional web apps that match your processes, reduce manual work, and improve user satisfaction.
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