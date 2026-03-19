'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, ArrowRight, Award, MessageSquare, CheckCircle,
    Users, Globe, Lock, Clock, Building2, Shield,
    Cpu, Compass, Target, BarChart3, FileText,
    Calendar, Rocket, Search, 
    Users as UsersIcon, Target as TargetIcon,
} from 'lucide-react';
import styles from './discovery.module.css';

export default function ProductDiscoveryPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'Rebecca',
        role: 'Product Manager, FinScale',
        content: 'They go above and beyond to ensure quality and satisfaction. A true partner in every sense.',
        rating: 5,
        project: 'FinTech Platform Discovery'
    };

    // ============ DISCOVERY SERVICES (6 cards from the URL) ============
    const discoveryServices = [
        {
            id: 1,
            title: 'Market Research & Competitive Analysis',
            description: 'Validate product direction against real market demand.',
            icon: <BarChart3 />,
            color: '#3B82F6',
            features: [
                'Market trends, size, and growth analysis',
                'Competitive feature, pricing, and positioning review',
                'Opportunity and risk identification'
            ]
        },
        {
            id: 2,
            title: 'User Research & Journey Mapping',
            description: 'Ground product decisions in real user behavior.',
            icon: <UsersIcon />,
            color: '#10B981',
            features: [
                'User research through interviews, surveys, and observation',
                'Persona creation for key customer segments',
                'Journey mapping to identify pain points and opportunities'
            ]
        },
        {
            id: 3,
            title: 'Feature Prioritization & MVP Planning',
            description: 'Define what to build first and what to defer.',
            icon: <TargetIcon />,
            color: '#8B5CF6',
            features: [
                'Core vs non-core feature identification',
                'MVP scope aligned with business impact',
                'Value-driven prioritization to reduce time-to-market'
            ]
        },
        {
            id: 4,
            title: 'Technical Feasibility Assessment',
            description: 'Confirm technical viability before development begins.',
            icon: <Cpu />,
            color: '#F59E0B',
            features: [
                'Scalability, integration, and performance assessment',
                'Technical risk and dependency analysis',
                'Architecture direction and tech stack recommendations'
            ]
        },
        {
            id: 5,
            title: 'Budget & Timeline Planning',
            description: 'Create realistic plans that support predictable delivery.',
            icon: <Calendar />,
            color: '#EC4899',
            features: [
                'Cost estimation and phase-wise budgeting',
                'Timeline planning with milestones and dependencies',
                'Resource allocation and delivery sequencing'
            ]
        },
        {
            id: 6,
            title: 'Security & Compliance Planning',
            description: 'Address security and regulatory requirements early.',
            icon: <Shield />,
            color: '#06B6D4',
            features: [
                'Identification of relevant compliance standards',
                'Data protection and security requirement analysis',
                'Security framework and compliance roadmap definition'
            ]
        }
    ];

    // ============ USPS (from URL) ============
    const usps = [
        { text: "Nigeria's Top 10% Software Talent", icon: <Award />, color: '#3B82F6' },
        { text: 'Trusted by Startups to Fortune 500', icon: <Building2 />, color: '#10B981' },
        { text: 'Idea to Deployment, We Handle All', icon: <Rocket />, color: '#8B5CF6' },
        { text: 'Time-Zone Friendly: Global Presence', icon: <Globe />, color: '#F59E0B' },
        { text: 'Top-tier Data Security Protocols', icon: <Lock />, color: '#EC4899' },
        { text: 'On-time Delivery, No Surprises', icon: <Clock />, color: '#06B6D4' },
    ];

    // ============ PROCESS STEPS (from URL) ============
    const processSteps = [
        { step: 1, title: 'Discovery Kick-off', description: 'Align goals, stakeholders, and success criteria.', icon: <Compass />, color: '#3B82F6' },
        { step: 2, title: 'Research & Validation', description: 'Assess problems, users, and feasibility.', icon: <Search />, color: '#10B981' },
        { step: 3, title: 'Definition & Design', description: 'Document requirements and solution direction.', icon: <FileText />, color: '#8B5CF6' },
        { step: 4, title: 'Roadmap & Handover', description: 'Deliver actionable artifacts for development.', icon: <ArrowRight />, color: '#F59E0B' },
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

    // ============ CLIENT TESTIMONIALS (from URL) ============
    const testimonials = [
        {
            name: 'James Kelly',
            role: 'Co-founder, Miracle Choice',
            content: 'The Project managers took a lot of time to understand our project before coming up with a contract or what they thought we needed. I had the reassurance from the start that the project managers knew what type of project I wanted and what my needs were. That is reassuring, and that\'s why we chose ValueCoders.',
            image: '/images/user.png'
        },
        {
            name: 'Judith Mueller',
            role: 'Executive Director, Mueller Health Foundation',
            content: 'The team at ValueCoders has provided us with exceptional services in creating this one-of-a-kind portal, and it has been a fantastic experience. I was particularly impressed by how efficiently and quickly the team always came up with creative solutions to provide us with all the functionalities within the portal we had requested.',
            image: '/images/user.png'
        },
        {
            name: 'Kris Bruynson',
            role: 'Director, Storloft',
            content: 'ValueCoders had great technical expertise, both in front-end and back-end development. Other project management was well organized. Account management was friendly and always available. I would give ValueCoders ten out of ten!',
            image: '/images/user.png'
        },
        {
            name: 'Mohammed Mirza',
            role: 'Director, LOCALMASTERCHEFS LTD',
            content: 'Huge thank you to ValueCoders; they have been a massive help in enabling us to start developing our project within a few weeks, so it\'s been great! There have been two small bumps in the road, but overall, It\'s been a fantastic service. I have already recommended it to one of my friends.',
            image: '/images/user.png'
        },
    ];

    // ============ COMPANY STATS ============
    const companyStats = [
        { value: '700+', label: 'Full-time Staff', icon: <Users />, description: 'Dedicated team' },
        { value: '20+', label: 'Years Experience', icon: <Award />, description: 'Since 2004' },
        { value: '4500+', label: 'Satisfied Clients', icon: <MessageSquare />, description: 'Global client base' },
    ];

    // ============ FAQS ============
    const faqs = [
        {
            question: 'When should organizations invest in a product discovery phase?',
            answer: 'The product discovery phase delivers the most value before new product builds, major enhancements, or platform rewrites, when clarity upfront prevents costly rework later.'
        },
        {
            question: 'What outcomes can teams expect from product discovery phase services?',
            answer: 'Teams gain validated requirements, clearer scope, feasibility insights, and a roadmap that supports faster, more predictable development.'
        },
        {
            question: 'How long does a typical product discovery process take?',
            answer: 'The time it takes can vary depending on the size and complexity of the project. However, on average, we generally spend around two weeks on this phase.'
        },
        {
            question: 'How much does it cost to develop a project discovery phase?',
            answer: 'The cost can vary significantly depending on various factors such as the product’s complexity, the project’s scope, and the resources involved. However, generally, we charge $25-$30 hourly to develop the project discovery phase.'
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
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
                        alt="Product Discovery Background"
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
                            <Sparkles size={16} /> Product Discovery Phase
                        </div>
                        <h1 className={styles.heroTitle}>
                            Eliminate Uncertainty Before <span className={styles.highlight}>Committing Engineering Effort</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            We align stakeholders, requirements, and feasibility to move into development with confidence.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link href="/contact" className={styles.primaryButton}>
                                Start Your Discovery <ArrowRight size={18} />
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

            {/* ===== DISCOVERY SERVICES SECTION ===== */}
            <section className={styles.servicesSection} id="services">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Project Discovery Phase <span className={styles.titleHighlight}>Services</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Product discovery services help validate priorities, reduce delivery risk, and move into development with a clear, execution-ready plan. Our team of experts will work with you to understand your needs and create a plan that meets your specific goals.
                        </p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {discoveryServices.map((service, index) => (
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
                                Discovery Phase <span className={styles.titleHighlight}>Planning & Implementation</span>
                            </h2>
                            <p className={styles.sectionDescription} style={{ color: 'rgba(255,255,255,0.9)' }}>
                                We enable businesses across the globe to scale, transform, and gain a competitive advantage through the discovery phase development.
                            </p>
                        </div>
                        <div className={styles.whyChooseGrid}>
                            {usps.map((item, index) => (
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

            {/* ===== PROCESS SECTION ===== */}
            <section className={styles.processSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Our <span className={styles.titleHighlight}>Process</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            We divide our product delivery process into three stages: preparation, requirement analysis, and solution definition.
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
                        <h2 className={styles.ctaTitle}>Rushing Into Development Without Clarity?</h2>
                        <p className={styles.ctaDescription}>
                            We help structure a focused discovery phase that aligns scope, feasibility, and a build-ready roadmap.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Start Your Discovery <ArrowRight size={18} />
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