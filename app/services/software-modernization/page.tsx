'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, ArrowRight, Award, MessageSquare, CheckCircle,
    Users, Globe, Lock, Clock, Building2, Zap, Shield,
    Smartphone, Database, Cpu,
    Compass, Code, GitBranch, RefreshCw, Cloud, Target,
    Server, Activity, Layers, TrendingUp, Eye, 
} from 'lucide-react';
import styles from './modern.module.css';

export default function ModernizationPage() {
    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'James',
        role: 'Head of IT',
        content: 'Professional, reliable, and results-driven – they delivered exactly what we needed, on time and within budget.',
        rating: 5,
        project: 'Legacy to Cloud Migration'
    };

    // ============ MODERNIZATION SERVICES (8 cards from the URL) ============
    const modernizationServices = [
        {
            title: 'OS & Server Migration',
            description: 'Review your existing applications and suggest OS updates or system migration.',
            icon: <Server />,
            color: '#3B82F6',
            features: [
                'Operating system updates',
                'Application server migration',
                'Linux to Windows migration'
            ]
        },
        {
            title: 'Website Migration',
            description: 'Help with migration from one platform, technology, or domain to another.',
            icon: <Globe />,
            color: '#10B981',
            features: [
                'Old version CMS to new CMS',
                'Open source to Microsoft',
                'Service pack/tool installations'
            ]
        },
        {
            title: 'UI Modernization & Migration',
            description: 'Maintain consistent UX across smartphones, tablets, laptops, and desktops.',
            icon: <Eye />,
            color: '#8B5CF6',
            features: [
                'Application re-architecture',
                'Application re-engineering',
                'Portfolio assessment & planning'
            ]
        },
        {
            title: 'Digital App Migration',
            description: 'Give your business a digital edge through app migration and modernization.',
            icon: <Smartphone />,
            color: '#F59E0B',
            features: [
                'Brings innovation & value',
                'High-quality tech-driven solutions',
                'Latest technologies'
            ]
        },
        {
            title: 'Legacy App Migration to Cloud',
            description: 'Migrate legacy applications to the cloud per your business requirements.',
            icon: <Cloud />,
            color: '#EC4899',
            features: [
                'Legacy system migration',
                'Interface & server handling',
                'Enterprise mobility cloud migration'
            ]
        },
        {
            title: 'API Migration & Modernization',
            description: 'Transfer data from website APIs to mobile APIs, or upgrade APIs.',
            icon: <GitBranch />,
            color: '#06B6D4',
            features: [
                'Application migration & re-hosting',
                'API re-architecture & re-engineering',
                'Service pack/tools installs'
            ]
        },
        {
            title: 'Application Re-engineering',
            description: 'Increase core business system efficiency and reduce technical debt.',
            icon: <RefreshCw />,
            color: '#3B82F6',
            features: [
                'Refactoring legacy codebase',
                'Re-writing systems components',
                'Restructuring and re-architectural'
            ]
        },
        {
            title: 'Application Modernization Consulting',
            description: 'Recommendations and roadmap for a more modern and efficient workflow.',
            icon: <Compass />,
            color: '#10B981',
            features: [
                'Business requirement analysis',
                'Architecture & technology stack analysis',
                'Creating recommendations & roadmap'
            ]
        },
    ];

    // ============ COMMON CONCERNS + SOLUTIONS ============
    const commonConcerns = [
        'Cloud-driven software applications',
        'Deal continuously with cyber crimes',
        'Hiring a migration team within budget',
        'Dealing with continuous technology updates',
        'Modernizing bulky legacy applications'
    ];

    const valueCodersSolutions = [
        { text: 'Cloud assessment & migration', icon: <Cloud />, color: '#3B82F6' },
        { text: 'Digital forensics & cyber crime management', icon: <Shield />, color: '#10B981' },
        { text: 'Information & application version management', icon: <Database />, color: '#8B5CF6' },
        { text: 'Providing dedicated, skilled teams within budget', icon: <Users />, color: '#F59E0B' },
        { text: 'Technology consulting and smooth migration', icon: <Compass />, color: '#EC4899' },
    ];

    // ============ WHY PARTNER WITH US ============
    const whyPartner = [
        { text: '20+ Years Of Experience', icon: <Award />, color: '#3B82F6' },
        { text: 'Time-Zone Friendly: Global Presence', icon: <Globe />, color: '#10B981' },
        { text: 'Top-tier Data Security Protocols', icon: <Lock />, color: '#8B5CF6' },
        { text: 'Migration Across Various Platforms', icon: <Layers />, color: '#F59E0B' },
        { text: 'Deep Expertise in Complex Legacy Systems', icon: <Cpu />, color: '#EC4899' },
        { text: 'Zero Disruption to Business Operations', icon: <Activity />, color: '#06B6D4' },
        { text: 'Predictable Costs & Transparent Execution', icon: <TrendingUp />, color: '#3B82F6' },
    ];

    // ============ HIRING MODELS ============
    const hiringModels = [
        {
            title: 'Staff Augmentation / Team Extension',
            description: 'Add engineering capacity without changing how you deliver. Individual engineers or groups (1–3) integrate into your existing team.',
            icon: <Users />,
            color: '#3B82F6',
            billing: 'Time & Material, Retainer',
            bestFor: 'Specific skill gaps, capacity crunches',
            action: 'Request Profiles'
        },
        {
            title: 'Dedicated Teams / Delivery Pods',
            description: 'Dedicated squad (4–10 people) with Tech Lead + Engineers + QA. Shared accountability for predictable sprint delivery.',
            icon: <Target />,
            color: '#10B981',
            billing: 'Milestone-based, T&M with commitments, or Fixed-Cost',
            bestFor: 'Products needing speed, cross-team coordination',
            action: 'Get a Pod Proposal'
        },
        {
            title: 'Development Centers',
            description: 'Long-term, scaled teams (10–100+) with your branding, culture, processes. Full infrastructure, HR, security & compliance.',
            icon: <Building2 />,
            color: '#8B5CF6',
            billing: 'Long-term retainer, BOT (Build–Operate–Transfer)',
            bestFor: 'Enterprises needing sustained large-scale capacity',
            action: 'Book a Consultation'
        },
    ];

    // ============ MIGRATION VS MODERNIZATION ============
    const migrationVsModernization = {
        migration: [
            'Move application from one environment to another',
            'On-premises to cloud, hosting provider change',
            'Different OS or database'
        ],
        modernization: [
            'Update application to use new technologies',
            'Improve functionality, UX, align with business needs',
            'Refactoring, redesign, adopt cloud-native, microservices'
        ]
    };

    // ============ TYPES OF APPLICATION MIGRATION ============
    const migrationTypes = [
        { title: 'Lift-and-Shift Migration', desc: 'Move application as-is with minimal changes. Focus on scalability, cost-effectiveness.' },
        { title: 'Replatforming', desc: 'Move to a new platform with almost no code changes (e.g., legacy server to containerization).' },
        { title: 'Refactoring', desc: 'Make significant changes to architecture, design, or codebase while migrating.' },
        { title: 'Re-architecting', desc: 'Substantial overhaul – break monolithic into microservices, adopt SOA or cloud-native.' },
        { title: 'Hybrid Migration', desc: 'Combine on-premises and cloud components for gradual migration.' },
    ];

    // ============ HOW MODERNIZATION ANTICIPATES CUSTOMER NEEDS ============
    const modernizationBenefits = [
        { text: 'Scalability – accommodate increased user loads', icon: <TrendingUp />, color: '#3B82F6' },
        { text: 'Agility – respond quickly to market changes', icon: <Zap />, color: '#10B981' },
        { text: 'Personalization – tailored user experiences', icon: <Users />, color: '#8B5CF6' },
        { text: 'Data Insights – harness data for informed decisions', icon: <Database />, color: '#F59E0B' },
        { text: 'Real-time Updates – keep current with trends', icon: <Clock />, color: '#EC4899' },
        { text: 'Multi-Channel Accessibility – web, mobile, etc.', icon: <Smartphone />, color: '#06B6D4' },
        { text: 'Improved Performance – faster response times', icon: <Activity />, color: '#3B82F6' },
        { text: 'Enhanced Security – protect against evolving threats', icon: <Shield />, color: '#10B981' },
        { text: 'Integration Capabilities – seamless tool integration', icon: <GitBranch />, color: '#8B5CF6' },
        { text: 'Rapid Development – DevOps and Agile methodologies', icon: <Code />, color: '#F59E0B' },
    ];

    // ============ INDUSTRIES ============
    const industries = [
        {
            name: 'Healthcare',
            desc: 'Building smart healthcare solutions with HIPAA‑compliance, telemedicine, and patient portals.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
            color: '#3B82F6'
        },
        {
            name: 'Retail & eCommerce',
            desc: 'Enhancing retail journeys with scalable platforms, inventory management, and omnichannel experiences.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
            color: '#10B981'
        },
        {
            name: 'Media & Entertainment',
            desc: 'Custom tech to empower brands – streaming, content delivery, and audience analytics.',
            image: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?auto=format&fit=crop&w=800&q=80',
            color: '#8B5CF6'
        },
        
    ];

    // ============ COMPANY STATS ============
    const companyStats = [
        { value: '700+', label: 'Full‑time Staff', icon: <Users />, description: 'Dedicated team' },
        { value: '20+', label: 'Years Experience', icon: <Award />, description: 'Since 2004' },
        { value: '4500+', label: 'Satisfied Clients', icon: <MessageSquare />, description: 'Global client base' },
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
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
                        alt="Modernization Background"
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
                            <Sparkles size={16} /> Application Modernization
                        </div>
                        <h1 className={styles.heroTitle}>
                            Transform Legacy Software into <span className={styles.highlight}>Secure, Scalable, Cloud-Ready Applications</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Upgrade, modernize, and scale your web and mobile apps with BBMTech’ Application Migration & Modernization services. We offer on-premise, hybrid, and cloud-based solutions across various platforms.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link href="/contact" className={styles.primaryButton}>
                                Modernize Your App <ArrowRight size={18} />
                            </Link>
                            <Link href="#services" className={styles.secondaryButton}>
                                Explore Services
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

            {/* ===== MODERNIZATION SERVICES SECTION ===== */}
            <section className={styles.servicesSection} id="services">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Our Application <span className={styles.titleHighlight}>Migration & Modernization Services</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Software migration and modernization are crucial in a dynamic market. We develop an incremental development roadmap for application migration & modernization.
                        </p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {modernizationServices.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.serviceCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                            >
                                <div className={styles.serviceIcon} style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{item.title}</h3>
                                <p className={styles.serviceDescription}>{item.description}</p>
                                <div className={styles.serviceFeatures}>
                                    {item.features.map((feature, idx) => (
                                        <span key={idx} className={styles.serviceFeature}>
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

            {/* ===== APPROACH SECTION (Concerns + Solutions) ===== */}
            <section className={styles.approachSection}>
                <div className={styles.container}>
                    <div className={styles.approachGrid}>
                        <div className={styles.concernsCol}>
                            <h3 className={styles.approachTitle}>Common Concerns Of Businesses</h3>
                            <ul className={styles.concernsList}>
                                {commonConcerns.map((item, idx) => (
                                    <li key={idx}>
                                        <span className={styles.concernDot}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.solutionsCol}>
                            <h3 className={styles.approachTitle}>BBMTech Has You Covered</h3>
                            <div className={styles.solutionsList}>
                                {valueCodersSolutions.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className={styles.solutionItem}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className={styles.solutionItemIcon} style={{ color: item.color }}>
                                            {item.icon}
                                        </div>
                                        <span>{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHY PARTNER WITH US SECTION ===== */}
            <section className={styles.whyPartnerSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Why Partner with <span className={styles.titleHighlight}>BBMTech</span>?
                        </h2>
                        <p className={styles.sectionDescription}>
                            We provide reliable application migration and modernization services for faster turnaround times and better ROI.
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

            {/* ===== HIRING MODELS SECTION ===== */}
            <section className={styles.hiringModelsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Our <span className={styles.titleHighlight}>Hiring Models</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Choose how you want work to move – added hands, owned delivery, or your dedicated engineering hub.
                        </p>
                    </div>
                    <div className={styles.hiringModelsGrid}>
                        {hiringModels.map((model, index) => (
                            <motion.div
                                key={index}
                                className={styles.hiringModelCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.hiringModelHeader} style={{ borderColor: model.color }}>
                                    <div className={styles.hiringModelIcon} style={{ color: model.color }}>
                                        {model.icon}
                                    </div>
                                    <h3 className={styles.hiringModelTitle}>{model.title}</h3>
                                </div>
                                <p className={styles.hiringModelDescription}>{model.description}</p>
                                <div className={styles.hiringModelDetails}>
                                    <div className={styles.hiringModelDetail}>
                                        <strong>Billing:</strong> {model.billing}
                                    </div>
                                    <div className={styles.hiringModelDetail}>
                                        <strong>Best for:</strong> {model.bestFor}
                                    </div>
                                </div>
                                <button className={styles.hiringModelButton} style={{ backgroundColor: model.color }}>
                                    {model.action} <ArrowRight size={14} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== UNDERSTANDING SECTION (Migration vs Modernization + Types) ===== */}
            <section className={styles.understandingSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Understanding Application <span className={styles.titleHighlight}>Migration and Modernization</span>
                        </h2>
                    </div>

                    {/* Migration vs Modernization */}
                    <div className={styles.comparisonGrid}>
                        <div className={styles.comparisonCard}>
                            <h3 className={styles.comparisonTitle} style={{ color: '#3B82F6' }}>Application Migration</h3>
                            <ul className={styles.comparisonList}>
                                {migrationVsModernization.migration.map((item, idx) => (
                                    <li key={idx}>
                                        <ArrowRight size={14} style={{ color: '#3B82F6' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.comparisonCard}>
                            <h3 className={styles.comparisonTitle} style={{ color: '#10B981' }}>Application Modernization</h3>
                            <ul className={styles.comparisonList}>
                                {migrationVsModernization.modernization.map((item, idx) => (
                                    <li key={idx}>
                                        <ArrowRight size={14} style={{ color: '#10B981' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Types of Migration */}
                    <div className={styles.migrationTypesSection}>
                        <h3 className={styles.migrationTypesTitle}>Types of Application Migration</h3>
                        <div className={styles.migrationTypesGrid}>
                            {migrationTypes.map((type, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.migrationTypeCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <h4>{type.title}</h4>
                                    <p>{type.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Modernization Benefits */}
                    <div className={styles.modernizationBenefitsSection}>
                        <h3 className={styles.modernizationBenefitsTitle}>
                            How Modernization Anticipates <span className={styles.titleHighlight}>Customer Needs</span>
                        </h3>
                        <div className={styles.modernizationBenefitsGrid}>
                            {modernizationBenefits.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.modernizationBenefitCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.02 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.modernizationBenefitIcon} style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <span>{item.text}</span>
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
                        <h2 className={styles.ctaTitle}>Don&apos;t Let Legacy Systems Slow You Down</h2>
                        <p className={styles.ctaDescription}>
                            Get a modernization plan that cuts downtime, speeds performance, and reduces maintenance costs.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Get a Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}