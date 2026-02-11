'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users, TrendingUp, Briefcase, Globe as GlobeIcon,
    CheckCircle, Award, MessageSquare, Sparkles, 
    Cloud, ChevronRight, HelpCircle, ArrowRight, 
    HeadphonesIcon, ShieldCheck, Shield, Globe, Cpu, Target,
    Users as UsersIcon, Rocket, Lightbulb, Compass, Rocket as RocketIcon, 
    TrendingUp as TrendingIcon, Target as TargetIcon, Briefcase as BriefcaseIcon, 
    Palette, LineChart, DollarSign, Users as TeamIcon, Cpu as CpuIcon, Settings, 
    BarChart3, Search, Presentation, ThumbsUp
} from 'lucide-react';
import styles from './startups.module.css';

export default function StartupsSolutionPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'George',
        role: 'Co-founder, TechFlow',
        content: 'As a young startup, we often felt stuck managing scattered tools and workflows. Their solutions brought everything together, saving us time and reducing daily frustrations.',
        rating: 5,
        project: 'Startup Growth Partner'
    };

    // ----- STARTUP EXPERTISE AREAS (7 cards – from reference) -----
    const startupExpertise = [
        {
            id: 1,
            title: 'Startup Consulting',
            description: 'Strategic guidance for founders to make informed decisions, refine business models, and accelerate growth.',
            icon: <Compass className={styles.expertiseIcon} />,
            color: '#3B82F6',
            features: [
                'Business model refinement',
                'Market entry strategies',
                'Funding readiness planning'
            ],
            details: 'From idea validation to investor readiness'
        },
        {
            id: 2,
            title: 'Product Development & MVPs',
            description: 'Build minimum viable products and scalable solutions that align with your vision and accelerate market readiness.',
            icon: <RocketIcon className={styles.expertiseIcon} />,
            color: '#10B981',
            features: [
                'MVP development & testing',
                'Feature prioritisation & roadmapping',
                'Scalable architecture implementation'
            ],
            details: 'Launch fast, iterate smarter'
        },
        {
            id: 3,
            title: 'Team Augmentation',
            description: 'Expert professionals to quickly strengthen your startup team – flexible engagement, domain‑specific expertise.',
            icon: <TeamIcon className={styles.expertiseIcon} />,
            color: '#8B5CF6',
            features: [
                'On-demand technical talent',
                'Flexible engagement models',
                'Domain‑specific expertise'
            ],
            details: 'Scale your team in days, not months'
        },
        {
            id: 4,
            title: 'Go-to-Market Support',
            description: 'Launch products efficiently, position effectively, and capture early traction with smart growth strategies.',
            icon: <TargetIcon className={styles.expertiseIcon} />,
            color: '#F59E0B',
            features: [
                'Market analysis & positioning',
                'Customer acquisition strategies',
                'Growth hacking initiatives'
            ],
            details: 'From launch to traction'
        },
        {
            id: 5,
            title: 'Operations & Process Optimization',
            description: 'Streamline workflows, improve operational efficiency, and support rapid growth.',
            icon: <Settings className={styles.expertiseIcon} />,
            color: '#EC4899',
            features: [
                'Operational efficiency audits',
                'Process automation planning',
                'Cost optimization strategies'
            ],
            details: 'Do more with less'
        },
        {
            id: 6,
            title: 'Funding & Investor Readiness',
            description: 'Prepare to secure investment and scale successfully – pitch decks, investor targeting, financial projections.',
            icon: <DollarSign className={styles.expertiseIcon} />,
            color: '#06B6D4',
            features: [
                'Pitch deck preparation',
                'Investor targeting strategies',
                'Financial modelling & projections'
            ],
            details: 'Get funded, faster'
        },
        {
            id: 7,
            title: 'Product Design & User Experience',
            description: 'Engaging, intuitive experiences that retain users, enhance satisfaction, and build brand loyalty.',
            icon: <Palette className={styles.expertiseIcon} />,
            color: '#8B5CF6',
            features: [
                'UX research & testing',
                'High‑impact interface design',
                'Consistent cross‑platform experience'
            ],
            details: 'Design that converts'
        }
    ];

    // ----- HIRING MODELS (from reference) -----
    const hiringModels = [
        {
            title: 'Staff Augmentation',
            description: 'Quickly fill skill gaps and strengthen your existing team with our domain‑specific experts.',
            icon: <Users className={styles.hiringIcon} />,
            color: '#3B82F6',
            features: [
                'On‑demand professionals',
                'Seamless team integration',
                'Full project control'
            ]
        },
        {
            title: 'Hire Dedicated Teams',
            description: 'Build a team that works exclusively on your project, acting as an extension of your startup.',
            icon: <Briefcase className={styles.hiringIcon} />,
            color: '#10B981',
            features: [
                'Exclusive focus on your project',
                'Scalable and flexible teams',
                'Ownership of deliverables'
            ]
        }
    ];

    // ----- COST ESTIMATION (5 tiers from reference) -----
    const costEstimates = [
        {
            range: '$10,000 – $25,000',
            description: 'Lean prototype with essential features to validate your idea quickly.',
            icon: <Lightbulb />,
            color: '#3B82F6',
            bestFor: 'Idea validation'
        },
        {
            range: '$30,000 – $70,000',
            description: 'MVP that helps you attract early users or investors.',
            icon: <Rocket />,
            color: '#10B981',
            bestFor: 'Early users & seed funding'
        },
        {
            range: '$50,000 – $90,000',
            description: 'Growth-ready product with advanced features and better UX.',
            icon: <TrendingUp />,
            color: '#8B5CF6',
            bestFor: 'Growth stage'
        },
        {
            range: '$80,000 – $120,000',
            description: 'Complete, market-ready product with strong architecture and scalability.',
            icon: <Cloud />,
            color: '#F59E0B',
            bestFor: 'Market launch'
        },
        {
            range: '$120,000 – $200,000+',
            description: 'Large-scale enterprise application with advanced security and compliance.',
            icon: <Shield />,
            color: '#EC4899',
            bestFor: 'Enterprise scale'
        }
    ];

    // ----- OUR PROCESS (6 steps from reference) -----
    const startupProcess = [
        { 
            step: 1, 
            title: 'Market Gap Analysis', 
            description: 'We study your space to find real growth opportunities and validate demand.',
            icon: <Search />,
            color: '#3B82F6'
        },
        { 
            step: 2, 
            title: 'Business Model Refinement', 
            description: 'We adjust revenue paths for scalability and long-term survival.',
            icon: <LineChart />,
            color: '#10B981'
        },
        { 
            step: 3, 
            title: 'Tech Stack Planning', 
            description: 'We design the right tools to fit your growth vision and future needs.',
            icon: <Cpu />,
            color: '#8B5CF6'
        },
        { 
            step: 4, 
            title: 'Team Structure Support', 
            description: 'We define key roles that push your startup forward, from devs to PMs.',
            icon: <TeamIcon />,
            color: '#F59E0B'
        },
        { 
            step: 5, 
            title: 'Funding Readiness', 
            description: 'We prepare your numbers and story for investor conversations.',
            icon: <Presentation />,
            color: '#EC4899'
        },
        { 
            step: 6, 
            title: 'Scalable Growth Execution', 
            description: 'We put plans into action with measurable, quick results.',
            icon: <BarChart3 />,
            color: '#06B6D4'
        }
    ];

    // ----- STARTUP PARTNER HIGHLIGHTS (from reference) -----
    const partnerHighlights = [
        { text: 'India’s Top 1% Software Talent', icon: <Award />, color: '#3B82F6' },
        { text: 'Investor-Ready Products', icon: <DollarSign />, color: '#10B981' },
        { text: 'From MVP to Market Leader', icon: <Rocket />, color: '#8B5CF6' },
        { text: 'Growth-Centric Strategy', icon: <Target />, color: '#F59E0B' },
        { text: 'Time-Zone Friendly', icon: <Globe />, color: '#EC4899' },
        { text: 'ISO 27001 Certified', icon: <ShieldCheck />, color: '#06B6D4' },
        { text: 'Agile Delivery, Zero Surprises', icon: <ThumbsUp />, color: '#3B82F6' }
    ];

    // ----- COMPANY STATS -----
    const companyStats = [
        { value: '700+', label: 'Full‑time Staff', icon: <Users />, description: 'Top 1% industry talent' },
        { value: '20+', label: 'Years Experience', icon: <Award />, description: 'Since 2004' },
        { value: '4500+', label: 'Satisfied Clients', icon: <HeadphonesIcon />, description: 'Startups to Fortune 500' }
    ];

    // ----- CLIENT TESTIMONIALS (from reference) -----
    const testimonials = [
        {
            name: 'James Kelly',
            role: 'Co-founder, Miracle Choice',
            content: 'The Project managers took a lot of time to understand our project before coming up with a contract or what they thought we needed. I had the reassurance from the start that the project managers knew what type of project I wanted and what my needs were. That is reassuring, and that\'s why we chose BBNTech.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        },
        {
            name: 'Judith Mueller',
            role: 'Executive Director, Mueller Health Foundation',
            content: 'The team at BBNTech has provided us with exceptional services in creating this one-of-a-kind portal, and it has been a fantastic experience. I was particularly impressed by how efficiently and quickly the team always came up with creative solutions to provide us with all the functionalities within the portal we had requested.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face'
        },
        {
            name: 'Kris Bruynson',
            role: 'Director, Storloft',
            content: 'BBNTech had great technical expertise, both in front-end and back-end development. Other project management was well organized. Account management was friendly and always available. I would give BBNTech ten out of ten!',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        },
        {
            name: 'Mohammed Mirza',
            role: 'Director, LOCALMASTERCHEFS LTD',
            content: 'Huge thank you to BBNTech; they have been a massive help in enabling us to start developing our project within a few weeks, so it\'s been great! There have been two small bumps in the road, but overall, It\'s been a fantastic service. I have already recommended it to one of my friends.',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face'
        }
    ];

    // ----- INDUSTRIES (EXACTLY AS PROVIDED BY USER – with hover animation) -----
    const industries = [
        {
            name: 'E-Commerce & Retail',
            icon: '🛍️',
            desc: 'Mobile shopping experiences, product catalogs, secure payment gateways, and personalized recommendations with seamless checkout flows.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
            color: '#3B82F6'
        },
        {
            name: 'FinTech & Banking',
            icon: '🏦',
            desc: 'Secure mobile banking, investment platforms, digital wallets, and financial management tools with real-time transaction processing.',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
            color: '#10B981'
        },
        {
            name: 'Healthcare & MedTech',
            icon: '🏥',
            desc: 'Telemedicine platforms, patient portals, health tracking apps, and medical management systems with HIPAA-compliant security.',
            image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80',
            color: '#8B5CF6'
        }
    ];

    // ----- FAQS (original simple design) -----
    const faqs = [
        {
            question: 'How quickly can you deploy a team for my startup?',
            answer: 'We can onboard a dedicated team in as little as 2 weeks, compared to the 2–3 months it usually takes to hire in-house.'
        },
        {
            question: 'What is the typical budget range for early-growth startup engagements?',
            answer: 'Our sweet spot is $15,000–$25,000/month, aligning with Series A–B budgets. We also offer flexible MVP packages starting from $6,000.'
        },
        {
            question: 'Do you offer short-term or milestone-based engagements?',
            answer: 'Yes. Many startups work with us on 2–6 month milestone-based sprints, ensuring you hit funding or product deadlines without long-term overheads.'
        },
        {
            question: 'How do you ensure cost efficiency for startups under runway pressure?',
            answer: 'By removing the 3-month hiring delay and providing pre-vetted engineers, you save on burn rate while accelerating delivery.'
        },
        {
            question: 'Can we scale the team up or down quickly as our needs change?',
            answer: 'Yes. Our flexible scaling model lets you add or reduce team size in weeks, aligning with your growth stage.'
        },
        {
            question: 'What happens if our funding round gets delayed?',
            answer: 'We offer pause/resume flexibility so you don’t carry fixed overhead during funding gaps.'
        },
        {
            question: 'Why choose BBNTech over freelancers or agencies?',
            answer: 'Unlike freelancers, we offer dedicated, vetted teams with proven track records. Unlike agencies, we integrate with your roadmap and work as your engineering partner.'
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION (unchanged design) ===== */}
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
                                <Sparkles size={18} /> Early‑Growth Startup Solutions
                            </div>
                            <h1 className={styles.mainTitle}>
                                Build Faster, <span className={styles.highlight}>Scale Smarter</span>
                            </h1>
                            <p className={styles.subheadline}>
                                From refining business models to building strong teams to secure funding – we support early‑growth startups through their critical growth stage.
                            </p>
                            <p className={styles.heroDescription}>
                                Let’s work together to expand your market presence, optimize operations, and attract investors, achieving sustainable success.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className={styles.buttonContainer}
                        >
                            <Link href="/contact" className={styles.ctaButton}>
                                Build Your Startup
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="#expertise" className={styles.secondaryButton}>
                                View Startup Expertise
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Testimonial Card (only) */}
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
                                        src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
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
                                        <div className={styles.ratingText}>Startup Excellence</div>
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

            {/* ===== EXPERTISE SECTION (7 cards) ===== */}
            <section className={styles.expertiseSection} id="expertise">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Early‑Growth Startup <span className={styles.titleHighlight}>Expertise</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We understand the journey of early‑stage startups. Our hands‑on expertise transforms your vision 
                        into a robust, scalable product, positioning your company for rapid growth and long‑term success.
                    </p>
                </div>

                <div className={styles.expertiseGrid}>
                    {startupExpertise.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.expertiseCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredExpertise(item.id)}
                            onMouseLeave={() => setHoveredExpertise(null)}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.expertiseIconWrapper} style={{
                                    backgroundColor: `${item.color}15`,
                                    borderColor: item.color
                                }}>
                                    {item.icon}
                                </div>
                                <h3 className={styles.expertiseTitle}>{item.title}</h3>
                                <p className={styles.expertiseDetail}>{item.details}</p>
                            </div>
                            <p className={styles.expertiseDescription}>{item.description}</p>
                            <div className={styles.expertiseFeatures}>
                                <h4>Key offerings:</h4>
                                <ul className={styles.featuresList}>
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className={styles.featureItem}>
                                            <CheckCircle className={styles.checkIcon} style={{ color: item.color }} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link href={`/startups/${item.id}`} className={styles.learnMoreLink}>
                                Learn More
                                <ChevronRight className={styles.linkIcon} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== FUELING STARTUP GROWTH – HIRING MODELS ===== */}
            <section className={styles.hiringModelsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Fueling Startup Growth with the <span className={styles.titleHighlight}>Right Hiring Model</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We offer flexible hiring models to help startups scale their teams efficiently 
                        while maintaining full control over projects and deliverables.
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
                        >
                            <div className={styles.hiringModelIcon} style={{ backgroundColor: `${model.color}15`, color: model.color }}>
                                {model.icon}
                            </div>
                            <h3>{model.title}</h3>
                            <p className={styles.hiringModelDescription}>{model.description}</p>
                            <ul className={styles.hiringModelFeatures}>
                                {model.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={16} style={{ color: model.color }} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== COST ESTIMATION FOR EARLY-GROWTH STARTUPS ===== */}
            <section className={styles.costSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Cost Estimation for <span className={styles.titleHighlight}>Early‑Growth Startups</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        For growth‑stage startups, every dollar counts. Our clear, upfront estimates help you plan smartly – 
                        whether you’re building an MVP, scaling to a full product, or preparing for enterprise growth.
                    </p>
                </div>

                <div className={styles.costGrid}>
                    {costEstimates.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.costCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ borderTopColor: item.color }}
                        >
                            <div className={styles.costIcon} style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <div className={styles.costRange}>{item.range}</div>
                            <p className={styles.costDescription}>{item.description}</p>
                            <div className={styles.costBadge} style={{ backgroundColor: item.color }}>
                                {item.bestFor}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.costCta}>
                    <Link href="/calculator" className={styles.costCalculatorButton}>
                        Calculate Development Cost
                        <ArrowRight className={styles.buttonIcon} />
                    </Link>
                </div>
            </section>

            {/* ===== OUR PROCESS (6 steps) ===== */}
            <section className={styles.processSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our <span className={styles.titleHighlight}>Process</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        A startup’s journey from idea to success requires a solid foundation. Our process provides a clear roadmap, 
                        ensuring your solution is built correctly from day one for smooth, future‑proof growth.
                    </p>
                </div>

                <div className={styles.processTimeline}>
                    {startupProcess.map((step, index) => (
                        <motion.div
                            key={step.step}
                            className={styles.processStep}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.processStepHeader}>
                                <div className={styles.processNumber} style={{ color: `${step.color}20` }}>0{step.step}</div>
                                <div className={styles.processIcon} style={{ backgroundColor: step.color }}>
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className={styles.processTitle}>{step.title}</h3>
                            <p className={styles.processDescription}>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== STARTUP DEVELOPMENT PARTNER HIGHLIGHTS ===== */}
            <section className={styles.partnerSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Early‑Growth Startup <span className={styles.titleHighlight}>Development Partner</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We specialise in helping early‑growth startups scale faster by building reliable, investor‑ready products. 
                        Our expertise lies in transforming validated ideas into robust, scalable solutions that support rapid market expansion.
                    </p>
                </div>

                <div className={styles.partnerGrid}>
                    {partnerHighlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.partnerCard}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.partnerIcon} style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <span>{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== COMPANY STATS ===== */}
            <section className={styles.statsSection}>
                <div className={styles.statsContainer}>
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
                                <div className={styles.statDescription}>{stat.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CLIENT TESTIMONIALS CAROUSEL ===== */}
            <section className={styles.testimonialsSection}>
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

                    <div className={styles.testimonialArrows}>
                        <button 
                            className={styles.testimonialArrow}
                            onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                        >
                            <ChevronRight className={styles.arrowLeft} />
                        </button>
                        <button 
                            className={styles.testimonialArrow}
                            onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== INDUSTRIES SECTION (EXACTLY AS PROVIDED BY USER) ===== */}
            <section className={styles.industriesSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Industries We Cater To</h2>
                        <p className={styles.sectionDescription}>
                            Partnering with businesses across sectors to deliver exceptional mobile experiences
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

            {/* ===== FAQ SECTION (ORIGINAL SIMPLE DESIGN) ===== */}
            <section className={styles.faqSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Frequently Asked <span className={styles.titleHighlight}>Questions</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Got questions about business scaling for startups and how the right technology partner can accelerate growth? 
                        Here are some of the most common queries we address for early‑growth founders.
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

                {/* ===== FINAL CTA ===== */}
                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>Ready to Scale Your Startup?</h3>
                        <p className={styles.ctaDescription}>
                            Get tailored strategies and support to scale smartly and sustainably. 
                            Book a free consultation with our startup experts.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Book Free Consultation
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="/calculator" className={styles.ctaSecondary}>
                                Estimate Your Cost
                            </Link>
                            {/* <Link href="tel:+18001234567" className={styles.ctaTertiary}>
                                <Phone size={16} />
                                Call Us Now
                            </Link> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}