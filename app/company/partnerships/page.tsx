'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, Award, Users, Clock, CheckCircle,
    Building2, Zap, Globe,
    Search, Presentation, BookOpen, Workflow, HeadphonesIcon, GraduationCap,
    ShieldCheck, TrendingUp,
    Briefcase, Handshake, FileText,
    Lock, ThumbsUp, HeartHandshake,
} from 'lucide-react';
import styles from './partnership.module.css';

export default function PartnershipPage() {
    const stats = [
        { value: '20+', label: 'Years Experience', icon: <Clock /> },
        { value: '650+', label: 'In-house Developers', icon: <Users /> },
        { value: '2000+', label: 'Man Years Experience', icon: <Award /> },
        { value: '2500+', label: 'Satisfied Clients', icon: <CheckCircle /> }
    ];

    const clientFocus = [
        {
            title: 'Product Companies',
            description: 'Reduce time to market with our agile development process that seamlessly integrates into your project at any stage.',
            icon: <Building2 />,
            color: '#3B82F6'
        },
        {
            title: 'Technological Evangelists',
            description: 'Join forces to spread the word and create mutually beneficial business opportunities with industry promoters.',
            icon: <Zap />,
            color: '#10B981'
        },
        {
            title: 'Digital Agencies',
            description: 'Leverage our specialized technical talent in AdTech, EdTech, and online video to deliver turnkey projects on time and within budget.',
            icon: <Globe />,
            color: '#8B5CF6'
        }
    ];

    const benefits = [
        {
            title: 'Quality Market Research',
            description: 'Get free market research, business consulting, and market positioning advice tailored to your target audience and solution portfolio.',
            icon: <Search />,
            color: '#3B82F6'
        },
        {
            title: 'Pre-sales Assistance',
            description: 'We support you in tenders, proposals, RFP, RFI, and other pre-sales activities – completely free of charge.',
            icon: <Presentation />,
            color: '#10B981'
        },
        {
            title: 'Advanced Knowledge Base',
            description: 'Access tons of case studies, technical documents, and solution resources to accelerate your sales and delivery.',
            icon: <BookOpen />,
            color: '#8B5CF6'
        },
        {
            title: 'Advanced Delivery Engine',
            description: 'Our robust management and supervision guarantee 100% project success, with transparent processes and predictable outcomes.',
            icon: <Workflow />,
            color: '#F59E0B'
        },
        {
            title: 'Post-Delivery Support',
            description: 'Enjoy high-quality maintenance, production support, and implied warranties – we stand behind every project.',
            icon: <HeadphonesIcon />,
            color: '#EC4899'
        },
        {
            title: 'Training Programs',
            description: 'Stay ahead with exclusive training programs in emerging technologies and relevant market opportunities.',
            icon: <GraduationCap />,
            color: '#06B6D4'
        },
        {
            title: 'Revenue-Rich Portfolio',
            description: 'Offer your clients a wide range of digital enterprise solutions with attractive margins and incentives.',
            icon: <TrendingUp />,
            color: '#3B82F6'
        },
        {
            title: 'Dedicated Partner Manager',
            description: 'You get a single point of contact who ensures smooth communication, quick resolutions, and proactive support.',
            icon: <Handshake />,
            color: '#10B981'
        }
    ];

    const models = [
        {
            title: 'Sub-contracting',
            description: 'You are the prime contractor; we work as your subcontractor, invisible to the end customer. Ideal for scaling your delivery capacity.',
            icon: <Briefcase />,
            color: '#3B82F6'
        },
        {
            title: 'Agency Relationship',
            description: 'You refer projects to us and earn a commission. Perfect for consultants, accountants, lawyers, and other professionals in complementary fields.',
            icon: <Handshake />,
            color: '#10B981'
        },
        {
            title: 'Tri-party Agreement',
            description: 'A three-way contract between you, the client, and us – everyone participates actively. Preferred when partners use deferred financing.',
            icon: <FileText />,
            color: '#8B5CF6'
        }
    ];

    const whyPartnerPoints = [
        { text: 'ISO 27001 Certified – enterprise-grade security', icon: <ShieldCheck />, color: '#3B82F6' },
        { text: '100% IP Protection & NDA compliance', icon: <Lock />, color: '#10B981' },
        { text: 'Flexible engagement models – scale up/down anytime', icon: <TrendingUp />, color: '#8B5CF6' },
        { text: 'Dedicated partner success manager', icon: <HeartHandshake />, color: '#F59E0B' },
        { text: 'Co-branded marketing support', icon: <ThumbsUp />, color: '#EC4899' },
        { text: 'Access to 650+ pre-vetted engineers', icon: <Users />, color: '#06B6D4' }
    ];

    return (
        <div className={styles.pageWrapper}>
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
                        alt="Partnership background"
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
                        <h1 className={styles.heroTitle}>
                            Let&apos;s grow <span className={styles.highlight}>together</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Revenue‑rich portfolio, sales & marketing incentives, and business support — designed for your success.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link href="/contact" className={styles.primaryButton}>
                                Become a Partner
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                        </div>
                        <div className={styles.statsRow}>
                            {stats.map((stat, index) => (
                                <div key={index} className={styles.statItem}>
                                    <div className={styles.statIcon}>{stat.icon}</div>
                                    <div>
                                        <div className={styles.statValue}>{stat.value}</div>
                                        <div className={styles.statLabel}>{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.clientFocusSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Who we <span className={styles.titleHighlight}>partner with</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Our program is designed for organizations that share our passion for innovation and quality.
                    </p>
                </div>
                <div className={styles.clientFocusGrid}>
                    {clientFocus.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.clientCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.clientIcon} style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className={styles.benefitsSection} id="benefits">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Benefits of <span className={styles.titleHighlight}>partnering</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        When you partner with BBNTech, you get a host of business advantages.
                    </p>
                </div>
                <div className={styles.benefitsGrid}>
                    {benefits.map((benefit, index) => (
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
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className={styles.modelsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our <span className={styles.titleHighlight}>partnership models</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Flexible engagement models to suit your business.
                    </p>
                </div>
                <div className={styles.modelsGrid}>
                    {models.map((model, index) => (
                        <motion.div
                            key={index}
                            className={styles.modelCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.modelIcon} style={{ color: model.color }}>
                                {model.icon}
                            </div>
                            <h3>{model.title}</h3>
                            <p>{model.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className={styles.whySection}>
                <div className={styles.whyGrid}>
                    <div className={styles.whyContent}>
                        <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>
                            Why partner <span className={styles.titleHighlight}>with BBNTech?</span>
                        </h2>
                        <p className={styles.whySubtitle}>
                            We&apos;re not just a vendor – we&apos;re an extension of your team, committed to your success.
                        </p>
                        <div className={styles.whyList}>
                            {whyPartnerPoints.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.whyItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.whyItemIcon} style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <span>{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.whyImageWrapper}>
                        <Image
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                            alt="Partnership meeting"
                            fill
                            className={styles.whyImage}
                        />
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.ctaCard}>
                    <h2 className={styles.ctaTitle}>Ready to grow together?</h2>
                    <p className={styles.ctaDescription}>
                        Let&apos;s discuss how a partnership with BBNTech can help you scale your business.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link href="/contact" className={styles.ctaPrimary}>
                            Become a partner
                            <ArrowRight className={styles.buttonIcon} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}