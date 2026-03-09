'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, ArrowRight, Award, MessageSquare, CheckCircle,
    Users, Building2, Shield, Brain, Compass, Code, RefreshCw, Target,
    Activity, Layers, TrendingUp, FileText, Rocket, Search, 
    
} from 'lucide-react';
import styles from './architecture.module.css';

export default function SaasArchitecturePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'Rebecca',
        role: 'Product Lead, FinScale',
        content: 'They go above and beyond to ensure quality and satisfaction. A true partner in every sense.',
        rating: 5,
        project: 'SaaS Platform Migration'
    };

    // ============ SAAS SERVICES (7 cards from URL) ============
    const saasServices = [
        {
            id: 1,
            title: 'SaaS Product Consulting',
            description: 'We turn goals into a measurable, fundable product plan.',
            icon: <Compass />,
            color: '#3B82F6',
            features: [
                'Define ICP, use-cases, and success KPIs',
                'Prioritize features with RICE; cut scope safely',
                'Validate pricing, onboarding, and retention loops'
            ]
        },
        {
            id: 2,
            title: 'Architecture & Multi-Tenancy',
            description: 'SaaS architecture consulting to design cloud, data, and tenancy for scale.',
            icon: <Layers />,
            color: '#10B981',
            features: [
                'Blueprint services, APIs, and event flows',
                'Plan security, compliance, and disaster recovery',
                'Produce reference architecture and migration path'
            ]
        },
        {
            id: 3,
            title: 'SaaS Development Services',
            description: 'End-to-end, custom SaaS development to build secure, scalable features.',
            icon: <Code />,
            color: '#8B5CF6',
            features: [
                'Stand up web/mobile, APIs, and integrations',
                'Implement CI/CD, test automation, and code reviews',
                'Instrument analytics and feature flags'
            ]
        },
        {
            id: 4,
            title: 'Re-Engineering & Modernization',
            description: 'We de-risk rewrites and unlock performance and velocity.',
            icon: <RefreshCw />,
            color: '#F59E0B',
            features: [
                'Audit monoliths; identify bottlenecks and tech debt',
                'Refactor to services or modular boundaries',
                'Optimize queries, caching, and throughput'
            ]
        },
        {
            id: 5,
            title: 'Data, AI & Analytics',
            description: 'We turn product usage into decisions and automation.',
            icon: <Brain />,
            color: '#EC4899',
            features: [
                'Set up event tracking and product analytics',
                'Build churn/propensity dashboards and cohorts',
                'Add recommendations, scoring, or copilots'
            ]
        },
        {
            id: 6,
            title: 'Security & Compliance',
            description: 'We bake security and audit-readiness into delivery.',
            icon: <Shield />,
            color: '#06B6D4',
            features: [
                'Implement SSO, RBAC, encryption at rest/in transit',
                'Shift-left with SAST/DAST, secrets, SBOM',
                'Map controls to SOC2/ISO/HIPAA/GDPR'
            ]
        },
        {
            id: 7,
            title: 'SRE & Reliability',
            description: 'We engineer uptime with clear SLOs and fast recovery.',
            icon: <Activity />,
            color: '#3B82F6',
            features: [
                'Define SLOs/error budgets; align alerts to impact',
                'Add observability: logs, metrics, traces',
                'Run chaos/game days; reduce MTTR'
            ]
        },
    ];

    // ============ VALUE PROPOSITIONS (from "Grow Your Business" section) ============
    const valueProps = [
        { text: 'Faster time-to-value for enterprises', icon: <Rocket />, color: '#3B82F6' },
        { text: 'Scale without chaos or friction', icon: <TrendingUp />, color: '#10B981' },
        { text: 'Audit-ready builds every time', icon: <CheckCircle />, color: '#8B5CF6' },
        { text: 'Teams aligned to your pace', icon: <Users />, color: '#F59E0B' },
        { text: 'Reliability by design, delivered consistently', icon: <Shield />, color: '#EC4899' },
    ];

    // ============ COST ESTIMATES ============
    const costEstimates = [
        { range: '$8,000 - $30,000', description: 'Discovery, KPIs, multi-tenant blueprint, backlog, release plan.' },
        { range: '$25,000 - $150,000', description: 'Auth, roles, core flows, billing, basic analytics, UX/UI.' },
        { range: '$8,000 - $60,000', description: 'Payments, CRM/marketing, webhooks, data pipelines, dashboards.' },
        { range: '$12,000 - $60,000', description: 'Environments, IaC, pipelines, testing, secrets, scanning, WAF.' },
        { range: '$20,000 - $150,000+', description: 'Multi-tenant isolation, SSO (SAML/OIDC), SOC2/ISO/HIPAA/GDPR, SRE.' },
    ];

    // ============ BUSINESS TYPES ============
    const businessTypes = [
        { name: 'Early Stage Startups', description: 'Validate your idea, build MVP, and attract early users with a lean, scalable SaaS product.', icon: <Rocket />, color: '#3B82F6' },
        { name: 'Scaling Startups', description: 'Scale your product with robust architecture, advanced features, and enterprise-grade security.', icon: <TrendingUp />, color: '#10B981' },
        { name: 'Enterprises', description: 'Modernize legacy systems, ensure compliance, and deliver reliable SaaS solutions at scale.', icon: <Building2 />, color: '#8B5CF6' },
    ];

    // ============ PROCESS STEPS ============
    const processSteps = [
        { step: 1, title: 'Discovery & Goals', description: 'Align business KPIs, users, and success metrics.', icon: <Search />, color: '#3B82F6' },
        { step: 2, title: 'Architecture Blueprint', description: 'Choose cloud, tenancy, data, security patterns deliberately.', icon: <Layers />, color: '#10B981' },
        { step: 3, title: 'Experience & Backlog', description: 'Map journeys, prioritize features with RICE, define sprints.', icon: <FileText />, color: '#8B5CF6' },
        { step: 4, title: 'Build & Integrate', description: 'Ship in increments with CI/CD and automated testing.', icon: <Code />, color: '#F59E0B' },
        { step: 5, title: 'Release & Learn', description: 'Canary deploy, monitor telemetry, iterate toward adoption targets.', icon: <Rocket />, color: '#EC4899' },
        { step: 6, title: 'Scale & Optimize', description: 'Maximize ROI through continuous platform improvement.', icon: <TrendingUp />, color: '#06B6D4' },
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

    // ============ TRENDS ============
    const trends = [
        { title: 'Artificial Intelligence (AI) and Machine Learning (ML)', description: 'Incorporating AI/ML enables intelligent automation, predictive analytics, and personalized experiences.' },
        { title: 'Microservices Architecture', description: 'Breaking down monolithic applications into smaller, independently deployable microservices.' },
        { title: 'Low-Code/No-Code Development', description: 'Empowers business users to create applications without extensive coding.' },
        { title: 'Serverless Computing', description: 'Create services without managing servers – cost efficiency and scalability.' },
        { title: 'API-first Development', description: 'Prioritizing API design for smoother integration and ecosystem growth.' },
    ];

    // ============ CHALLENGES ============
    const challenges = [
        {
            title: 'Scalability',
            description: 'Building a scalable infrastructure that can handle increasing user demands.',
            solutions: ['Utilize cloud-based technologies', 'Leverage auto-scaling capabilities', 'Optimize resource allocation']
        },
        {
            title: 'Data Security',
            description: 'Protecting user data is crucial in SaaS applications.',
            solutions: ['Data encryption', 'Secure authentication protocols', 'Regular vulnerability assessments']
        },
        {
            title: 'Integration Complexity',
            description: 'SaaS applications often require integrating various third-party services.',
            solutions: ['Utilize standardized APIs', 'Middleware and integration frameworks', 'Ensure smooth interoperability']
        },
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
            content: 'The Project managers took a lot of time to understand our project before coming up with a contract or what they thought we needed. I had the reassurance from the start that the project managers knew what type of project I wanted and what my needs were. That is reassuring, and that\'s why we chose ValueCoders.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        },
        {
            name: 'Judith Mueller',
            role: 'Executive Director, Mueller Health Foundation',
            content: 'The team at ValueCoders has provided us with exceptional services in creating this one-of-a-kind portal, and it has been a fantastic experience. I was particularly impressed by how efficiently and quickly the team always came up with creative solutions to provide us with all the functionalities within the portal we had requested.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face'
        },
        {
            name: 'Kris Bruynson',
            role: 'Director, Storloft',
            content: 'ValueCoders had great technical expertise, both in front-end and back-end development. Other project management was well organized. Account management was friendly and always available. I would give ValueCoders ten out of ten!',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        },
        {
            name: 'Mohammed Mirza',
            role: 'Director, LOCALMASTERCHEFS LTD',
            content: 'Huge thank you to ValueCoders; they have been a massive help in enabling us to start developing our project within a few weeks, so it\'s been great! There have been two small bumps in the road, but overall, It\'s been a fantastic service. I have already recommended it to one of my friends.',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face'
        },
    ];

    // ============ FAQS ============
    const faqs = [
        {
            question: 'Why should I choose BBMTech for SaaS consulting and development services?',
            answer: 'BBMTech is a trusted name for SaaS consulting and development services. With over two decades of engineering experience and a clientele base of global brands, we have been setting higher industry benchmarks. What gives us an edge is our end-to-end solutions, experienced team of top 1% industry talent, flexibility to work in your timezone, and a diverse portfolio built over two decades.'
        },
        {
            question: 'How does BBMTech help with shorter GTM time and a more successful product?',
            answer: 'We help with shorter GTM time by providing a collaborative approach that involves our clients in the development process. Our SaaS consultants follow an agile development methodology that enables us to deliver projects quickly while ensuring high-quality standards, allowing our clients to launch their products faster and with greater success.'
        },
        {
            question: 'Can BBMTech help turn my idea into a product?',
            answer: 'Yes, we can help you create a product plan around your idea. Through proven SaaS consulting methods, our experts work collaboratively with our clients to understand their requirements, create a roadmap, and provide a detailed estimate of the project’s cost and timeline.'
        },
        {
            question: 'What migration options are available?',
            answer: 'We offer various migration options for SaaS applications, including cloud migration, database migration, and server migration. Our team of experts ensures that the migration process is seamless and does not disrupt the client’s business operations.'
        },
        {
            question: 'Do you provide ongoing support and maintenance?',
            answer: 'Yes, we offer comprehensive support and maintenance services for the SaaS solutions we develop. Our dedicated support team ensures timely bug fixes, system updates, performance optimization, and continuous monitoring to keep your SaaS solution running smoothly.'
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
        
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80"
                        alt="SaaS Architecture Background"
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
                            <Sparkles size={16} /> SaaS Consulting & Development
                        </div>
                        <h1 className={styles.heroTitle}>
                            Build & Scale <span className={styles.highlight}>SaaS Faster</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Consulting + Engineering That Delivers
                        </p>
                        <p className={styles.heroDescription}>
                            Ship features 40% faster without hiring delays. Our SaaS consulting and development experts help you design, build, and scale secure, multi-tenant products with measurable ROI and zero-disruption releases.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link href="/contact" className={styles.primaryButton}>
                                Start Your SaaS Journey <ArrowRight size={18} />
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
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
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

            {/* ===== SAAS SERVICES SECTION ===== */}
            <section className={styles.servicesSection} id="services">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            SaaS Consulting & <span className={styles.titleHighlight}>Development Services</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            As a trusted SaaS consulting company, we help clients achieve their product milestones through expert SaaS development and strategic consulting services. With BBMTech – get end-to-end SaaS expertise – from strategy to uptime – tailored to your growth.
                        </p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {saasServices.map((service, index) => (
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

            {/* ===== VALUE PROPOSITIONS SECTION ===== */}
            <section className={styles.valueSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Grow Your Business with a <span className={styles.titleHighlight}>Cutting-Edge SaaS Strategy</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Predictable outcomes. Enterprise standards. With BBMTech, you get velocity without compromising quality, compliance, or cost efficiency – every sprint, every release.
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

            {/* ===== COST SECTION ===== */}
            <section className={styles.costSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Cost of Building <span className={styles.titleHighlight}>SaaS Product</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Looking forward to SaaS product consulting and development? Let us help you with tentative SaaS development cost.
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
                            >
                                <div className={styles.costRange}>{cost.range}</div>
                                <p className={styles.costDescription}>{cost.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    {/* <div className={styles.costCta}>
                        <p>Try our cost calculator to see costs by scope, compliance, and scale choices.</p>
                        <Link href="/contact" className={styles.costButton}>
                            Calculate SaaS Cost <ArrowRight size={18} />
                        </Link>
                    </div> */}
                </div>
            </section>

            {/* ===== BUSINESS TYPES SECTION ===== */}
            <section className={styles.businessSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Tailored Tech for <span className={styles.titleHighlight}>All Business Types</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Our services cater to the needs of businesses of different types and sizes.
                        </p>
                    </div>
                    <div className={styles.businessGrid}>
                        {businessTypes.map((type, index) => (
                            <motion.div
                                key={index}
                                className={styles.businessCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.businessIcon} style={{ color: type.color }}>
                                    {type.icon}
                                </div>
                                <h3 className={styles.businessName}>{type.name}</h3>
                                <p className={styles.businessDescription}>{type.description}</p>
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
                            How We Approach <span className={styles.titleHighlight}>SaaS Implementation</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            A six-step, outcome-driven SaaS product development process helps us build a robust solution that meets the changing market demands.
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

            {/* ===== TRENDS SECTION ===== */}
            <section className={styles.trendsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Latest Trends in <span className={styles.titleHighlight}>SaaS Consulting and Development</span>
                        </h2>
                    </div>
                    <div className={styles.trendsGrid}>
                        {trends.map((trend, index) => (
                            <motion.div
                                key={index}
                                className={styles.trendCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <h3 className={styles.trendTitle}>{trend.title}</h3>
                                <p className={styles.trendDescription}>{trend.description}</p>
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
                            SaaS App Development <span className={styles.titleHighlight}>Challenges & Solutions</span>
                        </h2>
                    </div>
                    <div className={styles.challengesGrid}>
                        {challenges.map((challenge, index) => (
                            <motion.div
                                key={index}
                                className={styles.challengeCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className={styles.challengeTitle}>{challenge.title}</h3>
                                <p className={styles.challengeDescription}>{challenge.description}</p>
                                <ul className={styles.challengeSolutions}>
                                    {challenge.solutions.map((solution, idx) => (
                                        <li key={idx}>{solution}</li>
                                    ))}
                                </ul>
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
                            We are grateful for our clients’ trust in us, and we take great pride in delivering quality solutions that exceed their expectations.
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
                        <p className={styles.sectionDescription}>
                            Let’s look at some of the common concerns of clients related to SaaS consulting and development services, and how BBMTech provides the right solution.
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
                        <h2 className={styles.ctaTitle}>Transform Technical Debt into Assets</h2>
                        <p className={styles.ctaDescription}>
                            Modernize your architecture without disrupting customer experience or revenue.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Start Your SaaS Journey <ArrowRight size={18} />
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