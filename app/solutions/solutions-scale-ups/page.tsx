'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users, TrendingUp, CheckCircle, Award, MessageSquare, Sparkles,
    Cloud, ChevronRight, HelpCircle, ArrowRight, GitBranch, HeadphonesIcon, 
    RefreshCw, ShieldCheck, Layers, Shield, Globe, Target,
    Users as UsersIcon, Rocket, Calendar, Wallet, Briefcase, 
    Globe as GlobeIcon,
    Compass, Rocket as RocketIcon, TrendingUp as TrendingIcon,
    Target as TargetIcon, Briefcase as BriefcaseIcon, Palette, LineChart,
    DollarSign, Users as TeamIcon, Cpu as CpuIcon,
    Search, Gauge, Activity,
    AlertTriangle, Building2, CloudCog, Workflow as WorkflowIcon,
    Layers3, Sparkles as SparklesIcon
} from 'lucide-react';
import styles from './scaleups.module.css';

export default function ScaleUpsSolutionPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'Arjun',
        role: 'CTO, ScaleFlow',
        content: 'Our startup scaled smoothly thanks to their expertise and commitment to quality. Truly dependable!',
        rating: 5,
        project: 'Series C Scale Partner'
    };

    // ----- SCALE EXPERTISE AREAS (6 cards – from URL) -----
    const scaleExpertise = [
        {
            id: 1,
            title: 'Product Discovery & Technical Strategy',
            description: 'Our specialists analyze your product, market, and technical requirements to create a clear growth strategy that accelerates scaling.',
            icon: <Compass className={styles.expertiseIcon} />,
            color: '#3B82F6',
            features: [
                'Define business goals',
                'Build the right architecture',
                'Reduce risks before scaling'
            ],
            details: 'From strategy to execution'
        },
        {
            id: 2,
            title: 'UI/UX for Growth-Stage Products',
            description: 'We redesign and maximize user experiences to manage larger audiences, enhance engagement, and reinforce retention as your product scales.',
            icon: <Palette className={styles.expertiseIcon} />,
            color: '#10B981',
            features: [
                'Improve customer satisfaction',
                'Drive higher engagement',
                'Scale with user‑friendly design'
            ],
            details: 'Experience that scales'
        },
        {
            id: 3,
            title: 'Full-Scale Product Development',
            description: 'Our team transforms MVPs into enterprise-grade solutions with robust features, ensuring smooth evolution from early-stage product to scalable platform.',
            icon: <Layers3 className={styles.expertiseIcon} />,
            color: '#8B5CF6',
            features: [
                'Strategic planning & roadmap',
                'Feature expansion',
                'Seamless scaling'
            ],
            details: 'From MVP to market leader'
        },
        {
            id: 4,
            title: 'SaaS Architecture & Development',
            description: 'We build scale startup solutions that support rapid user growth, strong integrations, secure data management, and seamless cloud deployment.',
            icon: <CloudCog className={styles.expertiseIcon} />,
            color: '#F59E0B',
            features: [
                'Cloud‑ready architecture',
                'API & third‑party integration',
                'Data privacy & compliance'
            ],
            details: 'SaaS that scales'
        },
        {
            id: 5,
            title: 'QA & Performance Optimization',
            description: 'Our QA experts test performance, security, scalability, and system resilience to ensure your product remains reliable even under heavy load.',
            icon: <Gauge className={styles.expertiseIcon} />,
            color: '#EC4899',
            features: [
                'Load & stress testing',
                'Performance tuning',
                'Security checks'
            ],
            details: 'Reliability at scale'
        },
        {
            id: 6,
            title: 'CTO-as-a-Service for Scale',
            description: 'Our experienced CTO consultants guide startups with strategic leadership, architecture design, and cost-effective scaling strategies.',
            icon: <BriefcaseIcon className={styles.expertiseIcon} />,
            color: '#06B6D4',
            features: [
                'Expert technology leadership',
                'Scalable product planning',
                'Budget optimization'
            ],
            details: 'Executive guidance, on‑demand'
        }
    ];

    // ----- HIRING MODELS (from URL) -----
    const hiringModels = [
        {
            title: 'Staff Augmentation',
            description: 'Scale your startup quickly by adding skilled professionals to your existing team. Our experts work as an extension of your in-house staff, bringing flexibility, speed, and specialized expertise without long-term overhead.',
            icon: <Users className={styles.hiringIcon} />,
            color: '#3B82F6',
            features: [
                'Access to top talent on demand',
                'Flexible scaling of resources',
                'Faster time‑to‑market'
            ]
        },
        {
            title: 'Hire Dedicated Teams',
            description: 'Build a fully dedicated team that focuses only on your project. From developers and designers to QA and project managers, our dedicated teams provide end-to-end ownership, ensuring faster delivery and consistent results.',
            icon: <Briefcase className={styles.hiringIcon} />,
            color: '#10B981',
            features: [
                'End‑to‑end project ownership',
                'Seamless collaboration with your team',
                'Reliable, long‑term engagement'
            ]
        }
    ];

    // ----- COST ESTIMATION FOR SCALE STARTUPS (5 tiers) -----
    const costEstimates = [
        {
            range: '$25,000 – $50,000',
            description: 'Enhance your existing product with incremental features and performance improvements.',
            icon: <TrendingUp />,
            color: '#3B82F6',
            bestFor: 'Feature enhancements'
        },
        {
            range: '$60,000 – $100,000',
            description: 'Strengthen your platform with integrations, automation, and scalability upgrades.',
            icon: <GitBranch />,
            color: '#10B981',
            bestFor: 'Platform strengthening'
        },
        {
            range: '$90,000 – $150,000',
            description: 'Build advanced modules or industry-specific features that help capture new markets.',
            icon: <Layers />,
            color: '#8B5CF6',
            bestFor: 'New market entry'
        },
        {
            range: '$120,000 – $180,000',
            description: 'Redesign and re-architect your product for better UX, security, and reliability at scale.',
            icon: <RefreshCw />,
            color: '#F59E0B',
            bestFor: 'Re‑architecture'
        },
        {
            range: '$180,000 – $250,000+',
            description: 'Develop enterprise-grade solutions with compliance, analytics, and AI-driven capabilities.',
            icon: <Shield />,
            color: '#EC4899',
            bestFor: 'Enterprise scale'
        }
    ];

    // ----- SCALING PROCESS (6 steps – from URL) -----
    const scalingProcess = [
        {
            step: 1,
            title: 'Product Review',
            description: 'Evaluate current product strengths, gaps, and scalability challenges.',
            icon: <Search />,
            color: '#3B82F6'
        },
        {
            step: 2,
            title: 'Growth Roadmap',
            description: 'Define milestones, set priorities, and align strategy with business goals.',
            icon: <LineChart />,
            color: '#10B981'
        },
        {
            step: 3,
            title: 'Agile Development',
            description: 'Iterative feature building with flexibility to adapt as the product scales.',
            icon: <WorkflowIcon />,
            color: '#8B5CF6'
        },
        {
            step: 4,
            title: 'Performance Checks',
            description: 'Run quality, speed, and load tests to ensure reliability under growing demand.',
            icon: <Gauge />,
            color: '#F59E0B'
        },
        {
            step: 5,
            title: 'Deployment & Monitoring',
            description: 'Enable seamless cloud scaling with real-time tracking and system stability.',
            icon: <Cloud />,
            color: '#EC4899'
        },
        {
            step: 6,
            title: 'Support & Improvements',
            description: 'Provide ongoing updates, fixes, and optimizations to sustain long-term growth.',
            icon: <RefreshCw />,
            color: '#06B6D4'
        }
    ];

    // ----- KEY IT CHALLENGES (from URL) -----
    const itChallenges = [
        {
            title: 'Infrastructure that Fails to Scale',
            description: 'Simple systems cannot keep up as users grow. Slow applications and downtime frustrate customers and harm your brand.',
            icon: <AlertTriangle />,
            color: '#EF4444',
            points: [
                'Servers overloaded with traffic',
                'Poor system integration'
            ]
        },
        {
            title: 'Rising Security Risks',
            description: 'The bigger your startup grows, the bigger the target you become. Many scale startups do not invest enough in security until it is too late.',
            icon: <Shield />,
            color: '#F59E0B',
            points: [
                'Lack of compliance and weak data protection',
                'Unsecured cloud setups'
            ]
        },
        {
            title: 'High IT Costs Without Control',
            description: 'Scaling often means spending more on IT, but without planning, costs rise fast and profits fall.',
            icon: <DollarSign />,
            color: '#EC4899',
            points: [
                'Unchecked cloud usage bills',
                'Expensive in‑house IT hiring'
            ]
        },
        {
            title: 'Lack of Skilled IT Support',
            description: 'Growing startups often outpace their team’s skill level. Without the right expertise, technology becomes a bottleneck.',
            icon: <Users />,
            color: '#8B5CF6',
            points: [
                'Delays in fixing IT issues',
                'Poor adoption of new tools'
            ]
        },
        {
            title: 'Integration Complexity & Technical Debt',
            description: 'As startups scale, they accumulate technical debt and face integration challenges between new and legacy systems, slowing down feature delivery.',
            icon: <GitBranch />,
            color: '#3B82F6',
            points: [
                'Legacy system integration',
                'Accumulated technical debt',
                'Inconsistent data flows'
            ]
        },
        {
            title: 'Scalability of Architecture & Performance',
            description: 'Monolithic architectures and inefficient database designs become bottlenecks under exponential user growth, causing latency and downtime.',
            icon: <Layers />,
            color: '#06B6D4',
            points: [
                'Database connection limits',
                'Inefficient caching strategies',
                'Microservices complexity'
            ]
        }
    ];

    // ----- BENEFITS OF IT SERVICE PROVIDERS (5 benefits) -----
    const itBenefits = [
        {
            title: 'Access to Expert Skills',
            description: 'Scale startups often lack in-house expertise. IT service providers bring specialized skills that ensure systems are built for growth.',
            icon: <Award />,
            color: '#3B82F6',
            points: ['Advanced technical knowledge', 'Proven industry experience']
        },
        {
            title: 'Scalable Infrastructure Support',
            description: 'Your IT needs grow with your business. Providers help design scalable infrastructure that supports expansion without disruptions.',
            icon: <Cloud />,
            color: '#10B981',
            points: ['Flexible cloud environments', 'High performance systems']
        },
        {
            title: 'Strong Cybersecurity Protection',
            description: 'With growth, startups become targets for cyber threats. Providers secure your operations with proactive monitoring and risk management.',
            icon: <ShieldCheck />,
            color: '#8B5CF6',
            points: ['24×7 security coverage', 'Data breach prevention']
        },
        {
            title: 'Cost-Effective Operations',
            description: 'Maintaining a full IT team is expensive. Service providers reduce costs while still delivering enterprise-grade support.',
            icon: <Wallet />,
            color: '#F59E0B',
            points: ['Lower hiring expenses', 'Predictable monthly pricing']
        },
        {
            title: 'Focus on Core Business',
            description: 'By outsourcing IT, your team spends more time on product and customers. The provider ensures technology runs smoothly.',
            icon: <Target />,
            color: '#EC4899',
            points: ['Reduced internal workload', 'Faster time to market']
        },
        {
            title: 'Faster Innovation & Time‑to‑Market',
            description: 'With dedicated IT partners, startups accelerate feature rollouts, experiment faster, and beat competitors to market without compromising quality.',
            icon: <Rocket />,
            color: '#F59E0B',
            points: [
                'Rapid prototyping',
                'Continuous delivery pipelines',
                'Competitive advantage'
            ]
        }
    ];

    // ----- PARTNER HIGHLIGHTS -----
    const partnerHighlights = [
        { text: 'India’s top 1% engineering talent', icon: <Award />, color: '#3B82F6' },
        { text: 'Trusted by startups to Fortune 500', icon: <Building2 />, color: '#10B981' },
        { text: 'End-to-end product delivery', icon: <Rocket />, color: '#8B5CF6' },
        { text: 'Time-zone friendly collaboration', icon: <Globe />, color: '#F59E0B' },
        { text: 'Predictable timelines & transparent estimates', icon: <Calendar />, color: '#EC4899' },
        { text: 'Ongoing support, monitoring & optimization', icon: <Activity />, color: '#06B6D4' }
    ];

    // ----- COMPANY STATS (with 92% stat from URL) -----
    const companyStats = [
        { value: '92%', label: 'Faster Market Entry', icon: <TrendingUp />, description: 'Scale‑up clients report faster growth' },
        { value: '700+', label: 'Full‑time Staff', icon: <Users />, description: 'Top 1% industry talent' },
        { value: '20+', label: 'Years Experience', icon: <Award />, description: 'Since 2004' },
        { value: '4500+', label: 'Satisfied Clients', icon: <HeadphonesIcon />, description: 'Startups to Fortune 500' }
    ];

    // ----- CLIENT TESTIMONIALS (from URL) -----
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
        }
    ];

    // ----- INDUSTRIES (EXACT HOVER ANIMATION – from URL) -----
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
            question: 'How does BBNTech help startups scale effectively?',
            answer: 'We offer focused development teams, agile development, and scalable technology solutions to enable startups to grow without infrastructure or hiring issues.'
        },
        {
            question: 'How quickly can your team start working on our project?',
            answer: 'We usually onboard startups within days, not weeks. Our flexible staffing models ensure you get the right experts quickly, so you don’t lose momentum in your scaling journey.'
        },
        {
            question: 'Can BBNTech handle both product development and post-launch scaling?',
            answer: 'Yes, we help with the whole cycle – from MVP development to scaling and optimizing the infrastructure, and adding features as the number of users increases.'
        },
        {
            question: 'What technologies do you specialize in for startup scalability?',
            answer: 'We cover web, mobile, AI/ML, cloud, DevOps, and emerging technology, making sure that startups use the correct stack to scale over time.'
        },
        {
            question: 'How do you ensure cost-effective scaling for early-stage startups?',
            answer: 'We assist startups in reducing expenses by offering offshore development teams and custom engagement models without compromising the quality of the products.'
        },
        {
            question: 'How is startup scaling different from enterprise growth?',
            answer: 'Startups focus on speed, agility, and bold risks – while enterprises lean on stability, structured expansion, and calculated moves. We tailor our approach accordingly.'
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION (identical design) ===== */}
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
                                <Sparkles size={18} /> Scale Your Startup
                            </div>
                            <h1 className={styles.mainTitle}>
                                Scale Your Startup with <span className={styles.highlight}>BBNTech</span>
                            </h1>
                            <p className={styles.subheadline}>
                                Our expert teams, smart strategies, and flexible staffing enable your startup to scale securely and efficiently.
                            </p>
                            <p className={styles.heroDescription}>
                                We provide the technical expertise you require to strengthen performance, enhance security, and ensure sustainable growth for long-term success.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className={styles.buttonContainer}
                        >
                            <Link href="/contact" className={styles.ctaButton}>
                                Scale Your Startup
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="#expertise" className={styles.secondaryButton}>
                                View Scale Expertise
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
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
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
                                        <div className={styles.ratingText}>Scale Excellence</div>
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

            {/* ===== EXPERTISE SECTION (6 cards) ===== */}
            <section className={styles.expertiseSection} id="expertise">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        How Our Experts Drive <span className={styles.titleHighlight}>Startup Success</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        At BBNTech, our experts help growth-stage startups scale seamlessly by combining deep technical expertise with proven strategies. We assist startups in growing sustainably by refining MVPs and building scalable SaaS products, always ensuring efficiency, performance, and reliability.
                    </p>
                </div>

                <div className={styles.expertiseGrid}>
                    {scaleExpertise.map((item, index) => (
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
                            <Link href={`/scale-ups/${item.id}`} className={styles.learnMoreLink}>
                                Learn More
                                <ChevronRight className={styles.linkIcon} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== FUELING SCALE GROWTH – HIRING MODELS ===== */}
            <section className={styles.hiringModelsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Fueling Startup Growth with the <span className={styles.titleHighlight}>Right Hiring Model</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We offer flexible hiring models to help startups scale their teams efficiently while maintaining full control over projects and deliverables.
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

            {/* ===== COST ESTIMATION FOR SCALE STARTUPS ===== */}
            <section className={styles.costSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Cost Estimation for <span className={styles.titleHighlight}>Scale Startups</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        For scale-stage startups, speed and efficiency matter most. Our cost calculators give you accurate, transparent estimates so you can budget smarter – whether you’re enhancing your current product, expanding features, or preparing for enterprise-level adoption.
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

            {/* ===== SCALING PROCESS (6 steps) ===== */}
            <section className={styles.processSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Scaling Startups with <span className={styles.titleHighlight}>Staff Augmentation & Dedicated Teams</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Here is the detailed view of the entire process:
                    </p>
                </div>

                <div className={styles.processTimeline}>
                    {scalingProcess.map((step, index) => (
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

            {/* ===== YOUR RELIABLE SCALE STARTUP SOLUTION (Partner Highlights) ===== */}
            <section className={styles.partnerSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Your Reliable <span className={styles.titleHighlight}>Scale Startup Solution</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        At BBNTech, we help startups to scale their solutions, which maintain the stability of products, increase performance, and speed up growth.
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

            {/* ===== KEY IT CHALLENGES & BENEFITS (Split Section) ===== */}
            <section className={styles.challengesBenefitsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Your Guide to <span className={styles.titleHighlight}>Scaling Startup IT Solutions</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Many scale startups face common IT challenges that hold back growth. Knowing these problems early can help you avoid costly mistakes.
                    </p>
                </div>

                <div className={styles.challengesGrid}>
                    {itChallenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            className={styles.challengeCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.challengeIcon} style={{ backgroundColor: `${challenge.color}15`, color: challenge.color }}>
                                {challenge.icon}
                            </div>
                            <h3>{challenge.title}</h3>
                            <p className={styles.challengeDescription}>{challenge.description}</p>
                            <ul className={styles.challengePoints}>
                                {challenge.points.map((point, idx) => (
                                    <li key={idx}>
                                        <AlertTriangle size={14} style={{ color: challenge.color }} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.benefitsWrapper}>
                    <h3 className={styles.benefitsTitle}>5 Benefits of IT Service Providers for Scale Startups</h3>
                    <div className={styles.benefitsGrid}>
                        {itBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className={styles.benefitCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.benefitIcon} style={{ backgroundColor: `${benefit.color}15`, color: benefit.color }}>
                                    {benefit.icon}
                                </div>
                                <h4>{benefit.title}</h4>
                                <p className={styles.benefitDescription}>{benefit.description}</p>
                                <div className={styles.benefitPoints}>
                                    {benefit.points.map((point, idx) => (
                                        <span key={idx} className={styles.benefitPoint}>
                                            • {point}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
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

            {/* ===== INDUSTRIES SECTION (EXACT HOVER ANIMATION) ===== */}
            <section className={styles.industriesSection}>
                <div className={styles.sectionContent}>
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

            {/* ===== FAQ SECTION (ORIGINAL SIMPLE DESIGN) ===== */}
            <section className={styles.faqSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Frequently Asked <span className={styles.titleHighlight}>Questions</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Here are some of the most common queries we address for scale startups.
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
                        <h3 className={styles.ctaTitle}>Ready To Scale Faster Than Competitors?</h3>
                        <p className={styles.ctaDescription}>
                            Connect with our team today and see how fast-growing startups move from early traction to sustainable market presence with us.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Book Free Consultation
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="/calculator" className={styles.ctaSecondary}>
                                Estimate Your Cost
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}