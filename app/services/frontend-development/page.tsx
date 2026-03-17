'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, ArrowRight, Award, MessageSquare, CheckCircle,
    Users, Globe, Building2, Zap, Smartphone, Database, 
    Code, RefreshCw, Target, Layers, TrendingUp, FileText,
    Figma, Cloud as CloudIcon, Gauge, RefreshCwIcon,
} from 'lucide-react';
import styles from './frontend-dev.module.css';

export default function FrontendPage() {
    // const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'Samantha',
        role: 'Product Lead, Creative Studio',
        content: 'A seamless experience from start to finish. Their attention to detail is unmatched!',
        rating: 5,
        project: 'E-commerce Redesign'
    };

    // ============ FRONTEND SERVICES (from URL) ============
    const frontendServices = [
        {
            id: 1,
            title: 'Custom Front-end Development',
            description: 'Stand out with exceptional front-end solutions that combine quick loading speed, feature-packed designs, and intuitive user experiences.',
            icon: <Code />,
            color: '#3B82F6',
            features: ['Quick loading speed', 'Feature-packed designs', 'Intuitive user experience']
        },
        {
            id: 2,
            title: 'Front-end Architecture & Design',
            description: 'Modern designs for immersive experiences with engaging user journeys and sleek, polished interfaces.',
            icon: <Layers />,
            color: '#10B981',
            features: ['Engaging user journeys', 'Sleek, polished interfaces', 'Expert front-end development']
        },
        {
            id: 3,
            title: 'Single Page Apps Development',
            description: 'Boost performance with single-page apps that deliver flexible user experiences and improved speed and efficiency.',
            icon: <Zap />,
            color: '#8B5CF6',
            features: ['Flexible user experiences', 'Expert development services', 'Improved speed and efficiency']
        },
        {
            id: 4,
            title: 'UI/UX Development',
            description: 'Tailored interfaces for every device with expert UI/UX design customized for your business.',
            icon: <Figma />,
            color: '#F59E0B',
            features: ['Expert UI/UX design', 'Customized for your business', 'Seamless cross-device functionality']
        },
        {
            id: 5,
            title: 'Progressive Web Apps Development',
            description: 'PWAs for a native-like experience with mobile-friendly solutions and native app performance.',
            icon: <Smartphone />,
            color: '#EC4899',
            features: ['Mobile-friendly solutions', 'Native app performance', 'Seamless user experience']
        },
        {
            id: 6,
            title: 'CMS Development',
            description: 'Build a responsive, reliable CMS with top-tier reliability, comprehensive solutions, and seamless content management.',
            icon: <Database />,
            color: '#06B6D4',
            features: ['Top-tier reliability', 'Comprehensive solutions', 'Seamless content management']
        },
    ];

    // ============ OTHER EXPERTISE (from URL) ============
    const otherExpertise = [
        {
            title: 'Serverless Development',
            description: 'Get your applications built efficiently, without managing the server, with our expert serverless development.',
            icon: <CloudIcon />,
            color: '#3B82F6',
        },
        {
            title: 'Application Modernization',
            description: 'Get your legacy applications modernized & migrated to newer technologies with new-age features.',
            icon: <RefreshCw />,
            color: '#10B981',
        },
    ];

    // ============ WHY CHOOSE US (from URL) ============
    const whyChooseUs = [
        { text: 'Design-to-Code Speed & Precision', icon: <Zap />, color: '#3B82F6' },
        { text: 'Optimized for Real-World Performance', icon: <Gauge />, color: '#10B981' },
        { text: 'Cross-Platform & Device-Ready Engineering', icon: <Smartphone />, color: '#8B5CF6' },
        { text: 'Scalable Architecture for Growth', icon: <TrendingUp />, color: '#F59E0B' },
        { text: 'Business-Driven Front-End Solutions', icon: <Target />, color: '#EC4899' },
        { text: 'Global Talent with Flexible Engagement', icon: <Globe />, color: '#06B6D4' },
    ];

    // ============ TECHNOLOGIES (from URL) ============
    const technologies = [
        { name: 'HTML', description: 'A markup language to structure web content and layout.' },
        { name: 'CSS', description: 'A style sheet language to define the design of HTML content.' },
        { name: 'JavaScript', description: 'A scripting language to add interactivity to web pages.' },
        { name: 'React', description: 'A JavaScript library for building user interfaces.' },
        { name: 'Angular', description: 'A JavaScript framework to create dynamic web applications.' },
        { name: 'Vue', description: 'A progressive JavaScript framework for building user interfaces.' },
    ];

    // ============ DEVELOPMENT PROCESS (from URL) ============
    const processSteps = [
        { step: 1, title: 'Software Kick-off', description: 'Dive into bi-weekly sprints and rollouts aligned with project timelines.', icon: <FileText />, color: '#3B82F6' },
        { step: 2, title: 'Task Execution & Development', description: 'Combined team tackles tasks, fulfilling user stories and sprint goals.', icon: <Code />, color: '#10B981' },
        { step: 3, title: 'Daily Stand-ups', description: 'Daily check-ins led by Scrum Master to discuss progress and tackle challenges.', icon: <Users />, color: '#8B5CF6' },
        { step: 4, title: 'Feature Quality Check', description: 'Quality Engineers rigorously test new features, ensuring seamless integration.', icon: <CheckCircle />, color: '#F59E0B' },
        { step: 5, title: 'Backlog Updates', description: 'Our team keeps the sprint backlog updated, staying on track to meet objectives.', icon: <RefreshCwIcon />, color: '#EC4899' },
        { step: 6, title: 'Sprint Reflections', description: 'Post-sprint reflections to refine strategies and enhance future sprints.', icon: <Users />, color: '#06B6D4' },
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

    // ============ ARCHITECTURE BENEFITS (from the guide) ============
    const architectureBenefits = [
        {
            title: 'How It Improves Conversions',
            points: [
                'Faster load times reduce drop-offs at the first point of contact',
                'Intuitive UI increases task completion and checkout success',
                'Smoother interactions create a friction-free buying experience'
            ],
            color: '#3B82F6'
        },
        {
            title: 'How It Builds Customer Trust',
            points: [
                'Consistent UI/UX across devices enhances reliability',
                'Polished, modern interfaces improve credibility',
                'Accessible design expands your reach to more customers'
            ],
            color: '#10B981'
        },
        {
            title: 'How It Increases Revenue',
            points: [
                'Improved conversion rates through simplified funnels',
                'Better retention due to enjoyable user interactions',
                'Higher engagement from mobile-first, responsive layouts'
            ],
            color: '#8B5CF6'
        },
    ];

    // ============ SCALABLE ARCHITECTURE BENEFITS ============
    const scalableBenefits = [
        {
            title: 'How It Reduces Long-Term Cost',
            points: [
                'Reusable component libraries dramatically reduce development hours',
                'Cleaner, modular architecture prevents expensive rewrites',
                'Standardized coding patterns lower onboarding effort'
            ],
            color: '#3B82F6'
        },
        {
            title: 'How It Improves Engineering Velocity',
            points: [
                'Faster rollout of new features with isolated components',
                'Less regression due to predictable architecture',
                'Efficient debugging thanks to clean separation of concerns'
            ],
            color: '#10B981'
        },
        {
            title: 'How It Future-Proofs the Product',
            points: [
                'Easier integration with new APIs and backend upgrades',
                'Smooth adaptation to new frameworks or tooling',
                'Enables microfrontend scaling for large applications'
            ],
            color: '#8B5CF6'
        },
    ];

    // ============ PERFORMANCE BENEFITS ============
    const performanceBenefits = [
        {
            title: 'How It Improves SEO',
            points: [
                'Fast load times improve Core Web Vitals',
                'Better visual stability reduces layout shift penalties',
                'Cleaner markup improves crawlability and indexing'
            ],
            color: '#3B82F6'
        },
        {
            title: 'How It Lowers Marketing Costs',
            points: [
                'Higher organic visibility reduces paid traffic dependency',
                'Better landing page performance improves ROI on ad spend',
                'Improved usability reduces drop-offs from paid campaigns'
            ],
            color: '#10B981'
        },
        {
            title: 'How It Enhances User Acquisition',
            points: [
                'First meaningful paint under 2 seconds improves engagement',
                'Faster interactivity increases signup and conversion rates',
                'Mobile-first optimization captures a larger audience'
            ],
            color: '#8B5CF6'
        },
    ];

    // ============ BUSINESS BENEFITS ============
    const businessBenefits = [
        {
            title: 'Enhanced User Experience',
            description: 'Good front-end development creates interfaces that users truly enjoy. Every element is crafted with user satisfaction in mind.'
        },
        {
            title: 'Brand Consistency',
            description: 'Your digital presence must maintain a unified brand voice across all platforms – colors, typography, and design elements work together harmoniously.'
        },
        {
            title: 'Better Performance',
            description: 'Code is streamlined for maximum efficiency. File sizes are reduced to improve loading times. Caching mechanisms are put in place.'
        },
        {
            title: 'Mobile-First Design',
            description: 'Modern web traffic is dominated by mobile devices. Front-end development adapts your site for every screen size.'
        },
        {
            title: 'SEO Optimization',
            description: 'Search engines favor well-structured websites. Front-end developers implement proper HTML architecture and optimize metadata.'
        },
    ];

    // ============ FRONTEND CHALLENGES ============
    const frontendChallenges = [
        {
            title: 'Browser Compatibility',
            description: 'Browser differences present ongoing challenges. Standard practices help maintain consistency across platforms.'
        },
        {
            title: 'Responsive Design',
            description: 'Creating truly responsive websites requires careful planning. Media queries help adapt content for different screens.'
        },
        {
            title: 'Performance',
            description: 'Optimizing performance involves streamlining code, reducing file sizes, and implementing efficient caching.'
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

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1920&q=80"
                        alt="Frontend Development Background"
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
                            <Sparkles size={16} /> Front-End Development Services
                        </div>
                        <h1 className={styles.heroTitle}>
                         Front-End Development for <span className={styles.highlight}>Exceptional User Experiences</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Having challenges with your website or application&apos;s user experience? BBMTech offers expert front-end development services, combining strong UI engineering with performance, accessibility, and long-term maintainability.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link href="/contact" className={styles.primaryButton}>
                                Build Your Frontend <ArrowRight size={18} />
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

            {/* ===== FRONTEND SERVICES SECTION ===== */}
            <section className={styles.servicesSection} id="services">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Front-End Development <span className={styles.titleHighlight}>Services We Offer</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            BBMTech stands at the forefront of front-end development. Our front end development services are built to transform your design into high-performance, responsive, maintainable web experiences.
                        </p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {frontendServices.map((service, index) => (
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

            {/* ===== OTHER EXPERTISE SECTION ===== */}
            <section className={styles.expertiseSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Other Development <span className={styles.titleHighlight}>Expertise We Hold</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Our track record speaks for itself. We have been a leader in providing innovative and effective development solutions across various domains.
                        </p>
                    </div>
                    <div className={styles.expertiseGrid}>
                        {otherExpertise.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.expertiseCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
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

            {/* ===== WHY CHOOSE US SECTION ===== */}
            <section className={styles.whyChooseSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Custom Front-End <span className={styles.titleHighlight}>Development Company</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Choosing the right Front-End development company means the difference between an app that just works and an application your users love.
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
                            Our Technical Expertise in <span className={styles.titleHighlight}>Front-end Development</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Our technology stack is carefully chosen for optimal results. We work with proven tools that deliver reliable performance.
                        </p>
                    </div>
                    <div className={styles.techGrid}>
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                className={styles.techCard}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <h3 className={styles.techName}>{tech.name}</h3>
                                <p className={styles.techDescription}>{tech.description}</p>
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

            {/* ===== INSIGHT SECTION: ARCHITECTURE BENEFITS ===== */}
            <section className={styles.insightSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            How Modern Front-End Architecture Drives <span className={styles.titleHighlight}>Conversions, Trust & Revenue</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            A strong front-end is no longer just &quot;design&quot; – it is one of the most important growth levers in digital business.
                        </p>
                    </div>
                    <div className={styles.insightGrid}>
                        {architectureBenefits.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.insightCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className={styles.insightTitle} style={{ color: item.color }}>{item.title}</h3>
                                <ul className={styles.insightList}>
                                    {item.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SCALABLE ARCHITECTURE SECTION ===== */}
            <section className={styles.scalableSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            How Scalable Front-End Architecture Reduces <span className={styles.titleHighlight}>Tech Debt & Improves Velocity</span>
                        </h2>
                    </div>
                    <div className={styles.scalableGrid}>
                        {scalableBenefits.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.scalableCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className={styles.scalableTitle} style={{ color: item.color }}>{item.title}</h3>
                                <ul className={styles.scalableList}>
                                    {item.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PERFORMANCE OPTIMIZATION SECTION ===== */}
            <section className={styles.performanceSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            How Front-End Performance Optimization Boosts <span className={styles.titleHighlight}>SEO, Acquisition & Marketing Efficiency</span>
                        </h2>
                    </div>
                    <div className={styles.performanceGrid}>
                        {performanceBenefits.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.performanceCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className={styles.performanceTitle} style={{ color: item.color }}>{item.title}</h3>
                                <ul className={styles.performanceList}>
                                    {item.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== BUSINESS BENEFITS SECTION ===== */}
            <section className={styles.businessSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Why Businesses Need to Focus on <span className={styles.titleHighlight}>Front-end Development</span>
                        </h2>
                    </div>
                    <div className={styles.businessGrid}>
                        {businessBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className={styles.businessCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <h3 className={styles.businessTitle}>{benefit.title}</h3>
                                <p className={styles.businessDescription}>{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CHALLENGES SECTION ===== */}
            <section className={styles.challengesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Front-end Development <span className={styles.titleHighlight}>Challenges and Solutions</span>
                        </h2>
                    </div>
                    <div className={styles.challengesGrid}>
                        {frontendChallenges.map((challenge, index) => (
                            <motion.div
                                key={index}
                                className={styles.challengeCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className={styles.challengeTitle}>{challenge.title}</h3>
                                <p className={styles.challengeDescription}>{challenge.description}</p>
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

            {/* ===== CTA SECTION ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Build Frontend That Drives Conversions</h2>
                        <p className={styles.ctaDescription}>
                            Let our experts build stunning front-end interfaces that get you more business.
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