'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, ArrowRight, Award, MessageSquare, CheckCircle,
    Users, Globe, Lock, Clock, Building2, Zap, Shield,
    Smartphone, Cpu,
    Code, RefreshCw, Target,
    Layers, Layout, Settings,
    FileText, TestTube,
    Palette,
    Cloud as CloudIcon, GitMerge,
    HeadphonesIcon, Rocket, Wifi, 

} from 'lucide-react';
import styles from './application.module.css';

export default function ApplicationDevelopmentPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'Andrew',
        role: 'CTO, FinScale',
        content: 'Professional, reliable, and results-driven – they delivered exactly what we needed, on time and within budget.',
        rating: 5,
        project: 'Enterprise Application Suite'
    };

    // ============ APPLICATION SERVICES (12 cards from URL) ============
    const appServices = [
        {
            id: 1,
            title: 'Web App Development',
            description: 'Deliver high-performance, browser-based applications.',
            icon: <Globe />,
            color: '#3B82F6',
            features: ['Responsive, scalable web applications', 'API-first and integration-ready design', 'Optimized performance and reliability']
        },
        {
            id: 2,
            title: 'Mobile App Development',
            description: 'Create mobile applications tailored to user needs.',
            icon: <Smartphone />,
            color: '#10B981',
            features: ['iOS and Android application development', 'Secure backend integration', 'Consistent performance across devices']
        },
        {
            id: 3,
            title: 'Cross-platform Development',
            description: 'Reach multiple platforms with a single, maintainable codebase.',
            icon: <Layers />,
            color: '#8B5CF6',
            features: ['Cross-platform architecture design', 'Reduced development time and cost', 'Consistent functionality across devices']
        },
        {
            id: 4,
            title: 'App Maintenance & Support',
            description: 'Maintain application stability after deployment.',
            icon: <HeadphonesIcon />,
            color: '#F59E0B',
            features: ['Proactive monitoring and issue resolution', 'Performance optimization', 'Security updates and enhancements']
        },
        {
            id: 5,
            title: 'Website & Portal Development',
            description: 'Design responsive websites and enterprise portals.',
            icon: <Layout />,
            color: '#EC4899',
            features: ['User-centric design and navigation', 'Secure access and role-based portals', 'Responsive, scalable web experiences']
        },
        {
            id: 6,
            title: 'Application Modernization',
            description: 'Upgrade legacy applications without disrupting operations.',
            icon: <RefreshCw />,
            color: '#06B6D4',
            features: ['Legacy re-engineering and refactoring', 'Improved scalability and performance', 'Reduced maintenance overhead']
        },
        {
            id: 7,
            title: 'API Development & Integration',
            description: 'Enable seamless data exchange across systems.',
            icon: <GitMerge />,
            color: '#3B82F6',
            features: ['Secure API development', 'Third-party and internal integrations', 'Improved system interoperability']
        },
        {
            id: 8,
            title: 'Full Stack Development',
            description: 'Deliver end-to-end application solutions.',
            icon: <Code />,
            color: '#10B981',
            features: ['Frontend and backend development', 'Integrated system architecture', 'Optimized performance across layers']
        },
        {
            id: 9,
            title: 'Cloud Application Development',
            description: 'Build applications designed for cloud scalability.',
            icon: <CloudIcon />,
            color: '#8B5CF6',
            features: ['Cloud-native and hybrid architectures', 'Flexible resource scaling', 'Secure, high-availability deployments']
        },
        {
            id: 10,
            title: 'Progressive Web App Development',
            description: 'Create fast, reliable web applications with app-like behavior.',
            icon: <Zap />,
            color: '#F59E0B',
            features: ['Offline-first and performance-optimized PWAs', 'Reduced development complexity', 'Improved accessibility across devices']
        },
        {
            id: 11,
            title: 'Wearables & Embedded Software',
            description: 'Develop applications for connected devices.',
            icon: <Cpu />,
            color: '#EC4899',
            features: ['Embedded software development', 'Device-level integration', 'Extended functionality across hardware platforms']
        },
        {
            id: 12,
            title: 'IoT App Development',
            description: 'Integrate IoT systems into business workflows.',
            icon: <Wifi />,
            color: '#06B6D4',
            features: ['Edge computing and data ingestion', 'API-driven IoT integrations', 'Remote monitoring and control applications']
        },
    ];

    // ============ APPLICATION CATEGORIES (from URL) ============
    const appCategories = {
        industries: [
            { name: 'Enterprises & SaaS Providers', description: 'Build applications tailored to complex needs – multi-tenant platforms, secure, scalable architectures.', color: '#3B82F6' },
            { name: 'Healthcare', description: 'Support data-driven healthcare operations – patient management systems, secure data handling and integrations.', color: '#10B981' },
        ],
        functions: [
            { name: 'Sales & Customer Experience', description: 'Enhance customer-facing interactions – custom portals, dashboards, integrated customer data.', color: '#8B5CF6' },
            { name: 'Leadership & Strategy', description: 'Support informed decision-making – data-driven applications, scalable platforms for growth.', color: '#F59E0B' },
        ]
    };

    // ============ VALUE PROPOSITIONS ============
    const valueProps = [
        { text: 'Engineers with 20+ years application experience', icon: <Award />, color: '#3B82F6' },
        { text: 'End-to-end development from architecture to deployment', icon: <Rocket />, color: '#10B981' },
        { text: 'Scalable, secure application design', icon: <Shield />, color: '#8B5CF6' },
        { text: 'Time-zone aligned delivery for global teams', icon: <Globe />, color: '#F59E0B' },
        { text: '100% IP ownership and enterprise-grade security', icon: <Lock />, color: '#EC4899' },
        { text: 'Predictable timelines and outcomes', icon: <Clock />, color: '#06B6D4' },
    ];

    // ============ TECH STACKS ============
    const techStacks = [
        {
            category: 'Desktop App Technologies',
            technologies: ['Electron', 'WPF', 'Qt', 'JavaFX', 'UWP', 'React Native Desktop', 'SwiftUI', 'Python', 'GTK (Linux)', 'Adobe AIR']
        },
        {
            category: 'Databases',
            technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cassandra', 'Elasticsearch', 'SQL Server', 'Oracle', 'MariaDB', 'Neo4j']
        },
        {
            category: 'Big Data Technologies',
            technologies: ['Apache Hadoop', 'Apache Spark', 'Apache Kafka', 'Apache Flink', 'Apache Cassandra', 'Apache Hive', 'MongoDB', 'Elasticsearch', 'Apache Storm', 'Apache Samza']
        },
        {
            category: 'DevOps Tools',
            technologies: ['Docker', 'Kubernetes', 'Ansible', 'Terraform', 'Puppet', 'Chef', 'Prometheus', 'Grafana', 'Jira', 'Confluence']
        },
        {
            category: 'CI/CD Tools',
            technologies: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'CircleCI', 'Travis CI', 'Azure DevOps', 'AWS CodePipeline', 'Buddy', 'TeamCity', 'Spinnaker']
        },
    ];

    // ============ PROCESS STEPS ============
    const processSteps = [
        { step: 1, title: 'Planning', description: 'We define the app’s purpose, target audience, and desired UX.', icon: <FileText />, color: '#3B82F6' },
        { step: 2, title: 'Design', description: 'Our team creates a visual structure and interactive prototype for user feedback.', icon: <Palette />, color: '#10B981' },
        { step: 3, title: 'Development', description: 'Our experts build UI and server-side functionality to bring your idea to life.', icon: <Code />, color: '#8B5CF6' },
        { step: 4, title: 'Testing', description: 'Our testing team ensures the app functions flawlessly across all devices.', icon: <TestTube />, color: '#F59E0B' },
        { step: 5, title: 'Launch', description: 'Our professionals ensure the app is launched on time without any glitches.', icon: <Rocket />, color: '#EC4899' },
        { step: 6, title: 'Maintenance', description: 'Our support team ensures continuous support & maintenance for future improvements.', icon: <Settings />, color: '#06B6D4' },
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

    // ============ SIGNS TO INVEST ============
    const signs = [
        'Your Team Uses Multiple Tools That Don’t Talk to Each Other',
        'Off-the-Shelf Software Limits Your Workflow',
        'Customer Experience Is Suffering',
        'Your Business Has Outgrown the Current Tools',
        'You Need Stronger Security & Compliance',
    ];

    // ============ COMPARISON TABLE ============
    const comparison = {
        custom: ['Tailored exactly to your unique business needs and workflows.', 'Higher upfront investment due to bespoke creation.', 'Potentially lower total cost of ownership; no recurring licenses.', 'Built to scale precisely with your business growth and evolving requirements.', 'Designed for seamless integration with your existing systems.', 'Full ownership of source code; complete control over future changes.'],
        offShelf: ['Generic features; requires adapting your processes to the software.', 'Lower initial purchase or subscription fees.', 'Can incur escalating licensing, upgrade, and customization costs.', 'Scalability depends on vendor offerings; may have limitations.', 'Often challenging to integrate fully; may create data silos.', 'Dependent on vendor for updates, support, and feature roadmap.'],
    };

    // ============ MUST-HAVE FEATURES ============
    const mustHaveFeatures = [
        { title: 'User Role Management', description: 'Different access levels for employees, admin dashboard for full control.' },
        { title: 'Real-Time Data Sync', description: 'Live updates across all devices, no manual refresh needed.' },
        { title: 'Mobile Responsiveness', description: 'Touch-friendly design, auto-adjusting layout.' },
        { title: 'Integration with Existing Systems', description: 'Easy data sharing with CRM, ERP, billing software – fewer manual tasks.' },
        { title: 'Strong Security Controls', description: 'Data encryption, two-factor login, role-based access.' },
        { title: 'Easy Navigation', description: 'Clear menu options, simple user paths.' },
        { title: 'Scalable Backend', description: 'Supports more users over time, ready for new features.' },
    ];

    // ============ AI IMPACT ============
    const aiImpacts = [
        'Predicting customer needs using past data',
        'Automating data entry and reducing errors',
        'Finding trends in large datasets for better planning',
        'Offering smart search options for quick access',
        'Improving product recommendations in eCommerce',
        'Helping with faster support through chatbots',
        'Detecting fraud in real time',
        'Sorting leads by priority in CRM systems',
        'Improving supply chain visibility and forecasting',
        'Personalizing dashboards for different roles',
    ];

    // ============ STEPS TO CHOOSE COMPANY ============
    const chooseSteps = [
        'Understand Your Needs First – list problems, features, integrations.',
        'Check Their Experience & Portfolio – projects in your industry, similar features, case studies.',
        'Test Their Communication – clear answers during early talks.',
        'Review Their Process – planning, testing, support, updates.',
    ];

    // ============ COMPANY STATS ============
    const companyStats = [
        { value: '700+', label: 'Full-time Staff', icon: <Users />, description: 'Dedicated team' },
        { value: '20+', label: 'Years Experience', icon: <Award />, description: 'Since 2004' },
        { value: '4500+', label: 'Satisfied Clients', icon: <MessageSquare />, description: 'Global client base' },
    ];

    // ============ CLIENT TESTIMONIALS ============
    const testimonials = [
        {
            name: 'James Kelly',
            role: 'Co-founder, Miracle Choice',
            content: 'The Project managers took a lot of time to understand our project before coming up with a contract or what they thought we needed. I had the reassurance from the start that the project managers knew what type of project I wanted and what my needs were. That is reassuring, and that\'s why we chose BBMTech.',
            image: '/images/user.png'
        },
        {
            name: 'Judith Mueller',
            role: 'Executive Director, Mueller Health Foundation',
            content: 'The team at BBMTech has provided us with exceptional services in creating this one-of-a-kind portal, and it has been a fantastic experience. I was particularly impressed by how efficiently and quickly the team always came up with creative solutions to provide us with all the functionalities within the portal we had requested.',
            image: '/images/user.png'
        },
        {
            name: 'Kris Bruynson',
            role: 'Director, Storloft',
            content: 'BBMTech had great technical expertise, both in front-end and back-end development. Other project management was well organized. Account management was friendly and always available. I would give BBMTech ten out of ten!',
            image: '/images/user.png'
        },
        {
            name: 'Mohammed Mirza',
            role: 'Director, LOCALMASTERCHEFS LTD',
            content: 'Huge thank you to BBMTech; they have been a massive help in enabling us to start developing our project within a few weeks, so it\'s been great! There have been two small bumps in the road, but overall, It\'s been a fantastic service. I have already recommended it to one of my friends.',
            image: '/images/user.png'
        },
    ];

    // ============ FAQS ============
    const faqs = [
        {
            question: 'When should organizations choose Enterprise Custom Application Development?',
            answer: 'Organizations should choose Enterprise Custom Application Development when off-the-shelf software cannot support complex workflows, integrations, scalability, or security requirements. Custom applications are ideal for businesses that need long-term control, flexibility, and alignment with internal processes.'
        },
        {
            question: 'How do you ensure your applications are compliant with data privacy regulations?',
            answer: 'We ensure compliance by signing Non-Disclosure Agreements (NDA), following industry regulations such as GDPR, HIPAA, etc., following secure coding and data protection practices, strictly verifying all employees before recruitment, and establishing firewalls, encryption, and VPN services to prevent online security breaches.'
        },
        {
            question: 'How does scalable app development support long-term growth?',
            answer: 'Scalable app development ensures applications can handle increasing users, data volumes, and feature expansion without performance degradation. Architectures are designed to scale horizontally or vertically, allowing systems to evolve alongside business growth.'
        },
        {
            question: 'What is included in End-to-End Custom Application Development?',
            answer: 'End-to-End Custom Application Development covers the full lifecycle—from requirements analysis and architecture design to development, testing, deployment, and ongoing support. This approach ensures consistency, accountability, and smoother transitions from build to production.'
        },
        {
            question: 'How are Bespoke Application Development Solutions different from packaged software?',
            answer: 'Bespoke Application Development Solutions are built specifically around your business workflows, integrations, and operational goals. Unlike packaged software, bespoke solutions eliminate unnecessary features, reduce workarounds, and provide full ownership and customization flexibility.'
        },
        {
            question: 'Can custom applications integrate with existing enterprise systems?',
            answer: 'Yes. Enterprise application development is designed to integrate seamlessly with existing systems such as ERP, CRM, databases, third-party tools, and legacy platforms using secure APIs and integration frameworks.'
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
        {
            name: 'Fintech',
            icon: '🏦',
            desc: 'Disrupting traditional finance with secure payments, trading platforms, and digital banking.',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
            color: '#F59E0B'
        },
        {
            name: 'Education & eLearning',
            icon: '📚',
            desc: 'Shaping digital learning with LMS, virtual classrooms, and interactive tools.',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
            color: '#EC4899'
        },
        {
            name: 'Banking & Fintech',
            icon: '💰',
            desc: 'Streamlining financial growth with core banking systems and compliance‑ready infrastructure.',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
            color: '#06B6D4'
        },
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80"
                        alt="Application Development Background"
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
                            <Sparkles size={16} /> Custom Application Development
                        </div>
                        <h1 className={styles.heroTitle}>
                            Turn Ideas into Standout Apps <span className={styles.highlight}>with Us</span>
                        </h1>
                        <p className={styles.heroDescription}>
                            We analyze your goals, offer practical advice, and prioritize what works, delivering more than 90% user satisfaction every time.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link href="/contact" className={styles.primaryButton}>
                                Start Your Project <ArrowRight size={18} />
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
                                <Image
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                                    alt={testimonial.name}
                                    width={100}
                                    height={100}
                                    className={styles.clientImage}
                                />
                            </div>
                            <div className={styles.testimonialContent}>
                                <MessageSquare className={styles.quoteIcon} />
                                <p className={styles.testimonialText}>&quote;{testimonial.content}&quot;</p>
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
                                        <div className={styles.ratingText}>Application Excellence</div>
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

            {/* ===== APPLICATION SERVICES SECTION ===== */}
            <section className={styles.servicesSection} id="services">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Custom App Development Services Designed for <span className={styles.titleHighlight}>Business Outcomes</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            We create apps by combining strong technical skills, smart workflows, and advanced tech. Having worked with 40+ industries, we confidently tackle everything from straightforward applications to the most complex solutions.
                        </p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {appServices.map((service, index) => (
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

            {/* ===== PREDICTABLE DELIVERY SECTION ===== */}
            <section className={styles.predictableSection}>
                <div className={styles.container}>
                    <div className={styles.predictableCard}>
                        <h2 className={styles.predictableTitle}>Predictable Custom Software Delivery</h2>
                        <p className={styles.predictableDescription}>
                            Eliminate scope confusion and missed deadlines with structured planning, defined ownership, and weekly visibility.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== APPLICATION CATEGORIES SECTION ===== */}
            <section className={styles.categoriesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            50+ Application Categories <span className={styles.titleHighlight}>We Specialize In</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            With over 20+ years of proven development experience, our custom application development company creates sophisticated applications across multiple platforms and industries.
                        </p>
                    </div>
                    <div className={styles.categoriesGrid}>
                        <div className={styles.categoryCol}>
                            <h3 className={styles.categoryColTitle}>By Industry</h3>
                            {appCategories.industries.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.categoryItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.categoryDot} style={{ backgroundColor: item.color }}></div>
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className={styles.categoryCol}>
                            <h3 className={styles.categoryColTitle}>By Business Function</h3>
                            {appCategories.functions.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.categoryItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.categoryDot} style={{ backgroundColor: item.color }}></div>
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== VALUE PROPOSITIONS SECTION ===== */}
            <section className={styles.valueSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Build Scalable Apps with <span className={styles.titleHighlight}>BBMTech</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            As a leading mobile app development service provider, we build apps meticulously designed to solve your business challenges and deliver measurable ROI.
                        </p>
                    </div>
                    <div className={styles.valueGrid}>
                        {valueProps.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.valueCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.valueIcon} style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <span className={styles.valueText}>{item.text}</span>
                            </motion.div>
                        ))}
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
                            Building Custom Apps with <span className={styles.titleHighlight}>Leading Tech</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            We are proud to have a team of web application developers who are experts in diverse web technologies like MERN, Blockchain, Kentico, etc.
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
                            Our Application <span className={styles.titleHighlight}>Development Process</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            A streamlined overview of our custom application development process.
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

            {/* ===== SIGNS SECTION ===== */}
            <section className={styles.signsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            5 Signs Businesses Must Invest in <span className={styles.titleHighlight}>Custom App Development</span>
                        </h2>
                    </div>
                    <div className={styles.signsGrid}>
                        {signs.map((sign, index) => (
                            <motion.div
                                key={index}
                                className={styles.signCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.signNumber}>{index + 1}</div>
                                <p className={styles.signText}>{sign}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== COMPARISON TABLE SECTION ===== */}
            <section className={styles.comparisonSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Custom Application Development <span className={styles.titleHighlight}>vs.</span> Off-the-Shelf Software
                        </h2>
                    </div>
                    <div className={styles.comparisonTable}>
                        <div className={styles.comparisonHeader}>
                            <div className={styles.comparisonHeaderCell}>Parameter</div>
                            <div className={styles.comparisonHeaderCell}>Custom Application Development</div>
                            <div className={styles.comparisonHeaderCell}>Off-the-Shelf Software</div>
                        </div>
                        {['Fit & Functionality', 'Initial Cost', 'Long-term Value', 'Scalability', 'Integration', 'Ownership & Control'].map((param, idx) => (
                            <div key={idx} className={styles.comparisonRow}>
                                <div className={styles.comparisonParam}>{param}</div>
                                <div className={styles.comparisonCustom}>{comparison.custom[idx]}</div>
                                <div className={styles.comparisonOffShelf}>{comparison.offShelf[idx]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== MUST-HAVE FEATURES SECTION ===== */}
            <section className={styles.featuresSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            7 Must-Have Features of <span className={styles.titleHighlight}>Custom Application</span>
                        </h2>
                    </div>
                    <div className={styles.featuresGrid}>
                        {mustHaveFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={styles.featureCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== AI IMPACT SECTION ===== */}
            <section className={styles.aiSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Impact of AI & Machine Learning on <span className={styles.titleHighlight}>Custom Applications</span>
                        </h2>
                    </div>
                    <div className={styles.aiGrid}>
                        {aiImpacts.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.aiItem}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.03 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.aiBullet}></div>
                                <span>{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== STEPS TO CHOOSE SECTION ===== */}
            <section className={styles.chooseSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Steps to Choose a Reliable <span className={styles.titleHighlight}>Custom Application Development Company</span>
                        </h2>
                    </div>
                    <div className={styles.chooseGrid}>
                        {chooseSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={styles.chooseCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.chooseNumber}>0{index + 1}</div>
                                <p className={styles.chooseText}>{step}</p>
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
                                    <div className={styles.testimonialAuthorImage}>
                                        <Image
                                            src={testimonials[activeTestimonial].image}
                                            alt={testimonials[activeTestimonial].name}
                                            width={60}
                                            height={60}
                                            className={styles.testimonialAuthorImg}
                                        />
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

            {/* ===== FAQ SECTION ===== */}
            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Frequently Asked <span className={styles.titleHighlight}>Questions</span>
                        </h2>
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

           
            {/* ===== CTA SECTION ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Off-the-Shelf Software Not Meeting Your Needs?</h2>
                        <p className={styles.ctaDescription}>
                            BBMTech delivers custom application development services aligned to your business processes and growth plans.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Start Your Project <ArrowRight size={18} />
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