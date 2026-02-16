'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
   
    Sparkles, ArrowRight, Award, MessageSquare, HelpCircle,
    CheckCircle, Lock, Clock, Globe,
    Smartphone, Play, Film, Tablet, Database, Bot, Share2, Layers,
    Brain, Building2, Rocket,
    Workflow, FolderOpen, BookOpen, Radio, PieChart, Target,
    Cpu, Box,
    Tv, ThumbsUp, Share, Gamepad, User, Bell, Download,
    ShoppingCart, CreditCard, Gift, Handshake,
} from 'lucide-react';
import styles from './media.module.css';

export default function MediaPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);


    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'David Chen',
        role: 'CTO, StreamFlix',
        content: 'ValueCoders built our OTT platform from scratch – it handles millions of daily streams with zero buffering. Their deep media expertise and commitment to quality exceeded our expectations.',
        rating: 5,
        project: 'OTT Streaming Platform'
    };

    // ============ MEDIA SOLUTIONS (10 cards from "Software Solutions for Media & Entertainment") ============
    const mediaSolutions = [
        {
            id: 1,
            title: 'Mobile & Web Apps',
            description: 'Seamless content delivery, interactive experiences, and engaging platforms that captivate audiences across devices.',
            icon: <Smartphone />,
            color: '#3B82F6',
            features: [
                'GEO-based AI development',
                'Photo-realistic renders',
                'User-friendly portals'
            ]
        },
        {
            id: 2,
            title: 'On-Demand Apps',
            description: 'Crafting entertainment and media apps with customizable solutions that engage and retain users.',
            icon: <Play />,
            color: '#10B981',
            features: [
                'Intuitive interfaces',
                'Robust admin panels',
                'Powerful analytics'
            ]
        },
        {
            id: 3,
            title: 'OTT Platform Development',
            description: 'Efficient on-demand video distribution with tailored OTT development solutions.',
            icon: <Film />,
            color: '#8B5CF6',
            features: [
                'Expert consulting',
                'Implementation & integration',
                'Ongoing maintenance'
            ]
        },
        {
            id: 4,
            title: 'Customized Media Apps',
            description: 'Personalized content experiences – from AI photo editing to immersive news delivery.',
            icon: <Layers />,
            color: '#F59E0B',
            features: [
                'AI photo editing',
                'AI-powered news delivery',
                'Immersive reading experiences'
            ]
        },
        {
            id: 5,
            title: 'Enterprise Mobility Solutions',
            description: 'Seamless, secure access to business data and applications from any device, anywhere.',
            icon: <Tablet />,
            color: '#EC4899',
            features: [
                'Customizable mobile apps',
                'Mobile device management',
                'Secure data sharing'
            ]
        },
        {
            id: 6,
            title: 'Custom ERP',
            description: 'Streamline data management, budgeting, and logistics with tailored ERP solutions.',
            icon: <Database />,
            color: '#06B6D4',
            features: [
                'Efficient data management',
                'Accurate budgeting',
                'Logistics optimization'
            ]
        },
        {
            id: 7,
            title: 'Chatbots Development',
            description: 'Intelligent chatbots that enhance engagement, analyze feedback, and predict preferences.',
            icon: <Bot />,
            color: '#3B82F6',
            features: [
                'Enhanced engagement',
                'Feedback analysis',
                'Preference prediction'
            ]
        },
        {
            id: 8,
            title: 'Social Media/Network Apps',
            description: 'Innovative social platforms to maintain audience engagement and stay ahead of trends.',
            icon: <Share2 />,
            color: '#10B981',
            features: [
                'Custom social tools',
                'Face-to-face video apps',
                'Dating & partner-matching'
            ]
        }
    ];

    // ============ MEDIA SERVICES (from "Media & Entertainment Application Services") ============
    const mediaServices = [
        {
            title: 'Workflow Management',
            description: 'Optimize media workflows with tailored solutions for seamless teamwork and increased productivity.',
            icon: <Workflow />,
            color: '#3B82F6',
            points: ['Streamlined workflow management', 'Collaboration tools', 'Optimized media workflows']
        },
        {
            title: 'Media Content Management',
            description: 'Maximize content impact through efficient categorization, organization, and distribution.',
            icon: <FolderOpen />,
            color: '#10B981',
            points: ['Efficient categorization', 'Organize & distribute', 'Optimize visibility']
        },
        {
            title: 'Digital Publishing',
            description: 'Digitally publish, manage, and distribute content seamlessly for improved visibility.',
            icon: <BookOpen />,
            color: '#8B5CF6',
            points: ['Seamless organization', 'Improved visibility', 'Streamlined operations']
        },
        {
            title: 'Audience & Broadcasting Management',
            description: 'Efficiently handle digital assets, metadata, rights management, and distribution channels.',
            icon: <Radio />,
            color: '#F59E0B',
            points: ['Digital asset management', 'Rights management', 'Enhanced distribution']
        },
        {
            title: 'Ad Management',
            description: 'Maximize ROI through data-driven advertising campaigns and customized ad placements.',
            icon: <PieChart />,
            color: '#EC4899',
            points: ['Data-driven strategies', 'Customized ad placements', 'Maximum efficiency']
        },
        {
            title: 'Digital Marketing',
            description: 'Amplify reach with targeted digital marketing campaigns for media success.',
            icon: <Target />,
            color: '#06B6D4',
            points: ['SEO & content marketing', 'Social media strategies', 'OTT & app promotions']
        }
    ];

    // ============ EXPERTISE IN MEDIA & ENTERTAINMENT APPLICATIONS ============
    const mediaExpertise = [
        {
            title: 'Big Data Analytics',
            description: 'Manage reputation and revenue effectively. Advanced analytics tools enable smarter market insights and improved user experiences.',
            icon: <Cpu />,
            color: '#3B82F6'
        },
        {
            title: 'Chatbot Development',
            description: 'Interactive chatbots that improve customer experience, automate subscriptions, and give a competitive edge.',
            icon: <Bot />,
            color: '#10B981'
        },
        {
            title: 'Blockchain',
            description: 'Enhance brand loyalty, strengthen security, safeguard identity, and enable secure payment transactions.',
            icon: <LinkChain />,
            color: '#8B5CF6'
        },
        {
            title: 'AR/VR',
            description: 'Immersive experiences that engage users, enhance training, and create captivating content for gaming and entertainment.',
            icon: <Box />,
            color: '#F59E0B'
        },
        {
            title: 'Artificial Intelligence',
            description: 'Drive automation, optimize data analysis, and enable intelligent decision-making across the industry.',
            icon: <Brain />,
            color: '#EC4899'
        }
    ];

    // ============ KEY FEATURES OF MEDIA & ENTERTAINMENT APPS ============
    const keyFeatures = [
        { text: 'Content Delivery – streaming, on-demand, offline', icon: <Tv />, color: '#3B82F6' },
        { text: 'Personalized Recommendations – AI-driven content suggestions', icon: <ThumbsUp />, color: '#10B981' },
        { text: 'Social Sharing – integrate with social platforms', icon: <Share />, color: '#8B5CF6' },
        { text: 'Interactive Elements – quizzes, polls, gamification', icon: <Gamepad />, color: '#F59E0B' },
        { text: 'User Profiles & Preferences – tailored experiences', icon: <User />, color: '#EC4899' },
        { text: 'Push Notifications – re-engage users', icon: <Bell />, color: '#06B6D4' },
        { text: 'Offline Mode – download for offline access', icon: <Download />, color: '#3B82F6' }
    ];

    // ============ MONETIZATION STRATEGIES ============
    const monetizationStrategies = [
        { text: 'In-App Purchases – premium content, virtual goods', icon: <ShoppingCart />, color: '#3B82F6' },
        { text: 'Advertising Integration – targeted ads, sponsored content', icon: <PieChart />, color: '#10B981' },
        { text: 'Subscriptions – recurring revenue, ad-free experience', icon: <CreditCard />, color: '#8B5CF6' },
        { text: 'Freemium Model – core free, premium paid', icon: <Gift />, color: '#F59E0B' },
        { text: 'Sponsorship & Partnerships – brand collaborations', icon: <Handshake />, color: '#EC4899' },
        { text: 'Data Monetization – insights from anonymized data', icon: <Database />, color: '#06B6D4' }
    ];

    // ============ WHY PARTNER WITH US ============
    const whyPartner = [
        { text: 'India’s Top 1% Software Talent', icon: <Award />, color: '#3B82F6' },
        { text: 'Trusted by Startups to Fortune 500', icon: <Building2 />, color: '#10B981' },
        { text: 'Idea to Deployment, We Handle All', icon: <Rocket />, color: '#8B5CF6' },
        { text: 'Time-Zone Friendly: Global Presence', icon: <Globe />, color: '#F59E0B' },
        { text: 'Top-tier Data Security Protocols', icon: <Lock />, color: '#EC4899' },
        { text: 'On-time Delivery, No Surprises', icon: <Clock />, color: '#06B6D4' }
    ];

    // ============ CROSS-PLATFORM DEVELOPMENT BENEFITS ============
    const crossPlatformBenefits = [
        'Save time and resources – single codebase for multiple platforms',
        'Simultaneous updates and fixes across all platforms',
        'Consistent user experience across devices',
        'Faster time-to-market',
        'Reduced development costs'
    ];

    // ============ TRUSTED BY ============
    const trustedCompanies = ['Microsoft', 'Amazon', 'Google', 'IBM', 'SAP', 'Oracle'];

    // ============ INDUSTRIES (Media-focused) ============
    const industries = [
        {
            name: 'OTT & Streaming',
            icon: '🎬',
            desc: 'End-to-end OTT platforms, video-on-demand, live streaming, and content delivery networks.',
            image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
            color: '#3B82F6'
        },
        {
            name: 'Gaming',
            icon: '🎮',
            desc: 'Immersive gaming experiences, AR/VR games, multiplayer platforms, and game analytics.',
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
            color: '#10B981'
        },
        {
            name: 'Digital Publishing',
            icon: '📚',
            desc: 'E-books, digital magazines, news portals, and content subscription platforms.',
            image: 'https://images.unsplash.com/photo-1497633762265-9d4ba6ed2eca?auto=format&fit=crop&w=800&q=80',
            color: '#8B5CF6'
        },
        {
            name: 'Social Media',
            icon: '📱',
            desc: 'Social networking apps, video-sharing platforms, and community engagement tools.',
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
            color: '#F59E0B'
        },
        {
            name: 'Music & Audio',
            icon: '🎵',
            desc: 'Music streaming, podcast platforms, audio editing tools, and sound recognition apps.',
            image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
            color: '#EC4899'
        },
        {
            name: 'Advertising',
            icon: '📺',
            desc: 'Ad management platforms, programmatic advertising, and audience analytics.',
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
            color: '#06B6D4'
        }
    ];

    // ============ FAQS ============
    const faqs = [
        {
            question: 'How do you ensure smooth video streaming with zero buffering?',
            answer: 'We use adaptive bitrate streaming, global CDN integration, and intelligent pre-fetching algorithms. Our OTT platforms are load-tested for millions of concurrent users to ensure flawless delivery.'
        },
        {
            question: 'What DRM and content protection measures do you implement?',
            answer: 'We integrate industry-standard DRM solutions (Widevine, PlayReady, FairPlay), secure token-based authentication, and watermarking to prevent piracy and protect premium content.'
        },
        {
            question: 'Can you build cross-platform apps that work on mobile, web, and TV?',
            answer: 'Absolutely. We use React Native and Flutter for consistent experiences across iOS, Android, and web, with dedicated TV apps for Apple TV, Android TV, and Roku using platform-specific SDKs.'
        },
        {
            question: 'How do you handle personalization and recommendations?',
            answer: 'We implement AI/ML algorithms that analyse user behaviour, viewing history, and preferences to deliver highly accurate content recommendations, boosting engagement and retention.'
        },
        {
            question: 'What monetization models do you support?',
            answer: 'We support SVOD (subscription), TVOD (transactional), AVOD (ad-supported), hybrid models, and in-app purchases. Our platforms include robust billing integrations for global payments.'
        },
        {
            question: 'Do you provide analytics and reporting dashboards?',
            answer: 'Yes. Every platform includes comprehensive analytics – user engagement, content performance, revenue tracking, and churn analysis – with customisable dashboards for stakeholders.'
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.overlay}></div>
                <div className={styles.content}>
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
                                <Sparkles size={18} /> Media & Entertainment Technology
                            </div>
                            <h1 className={styles.mainTitle}>
                                Media & Entertainment <span className={styles.highlight}>Technology</span>
                            </h1>
                            {/* <p className={styles.subheadline}>
                                From OTT platforms to digital SCM, ERP/CRM, and entertainment solutions – we deliver comprehensive app development services for startups and enterprises to expand their global presence.
                            </p> */}
                            <p className={styles.heroDescription}>
                                Mobile apps, OTT platforms, chatbots, AR/VR, AI-powered personalization – we build immersive experiences that captivate audiences and drive engagement.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className={styles.buttonContainer}
                        >
                            <Link href="/contact" className={styles.ctaButton}>
                                Build Your Media Solution
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="#solutions" className={styles.secondaryButton}>
                                Explore Solutions
                            </Link>
                        </motion.div>
                    </motion.div>

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
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
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
                                        <div className={styles.ratingText}>Media Excellence</div>
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
                        {trustedCompanies.map((company, idx) => (
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

            {/* ===== MEDIA SOLUTIONS SECTION ===== */}
            <section className={styles.solutionsSection} id="solutions">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Software Solutions for <span className={styles.titleHighlight}>Media & Entertainment</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        From OTT platforms to digital SCM, ERP/CRM, and entertainment solutions – we deliver comprehensive app development services for startups and enterprises to expand their global presence.
                    </p>
                </div>

                <div className={styles.solutionsGrid}>
                    {mediaSolutions.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.solutionCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                        >
                            <div className={styles.solutionIcon} style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p className={styles.solutionDescription}>{item.description}</p>
                            <div className={styles.solutionFeatures}>
                                {item.features.map((feature, idx) => (
                                    <span key={idx} className={styles.solutionFeature}>
                                        <CheckCircle size={12} style={{ color: item.color }} />
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== MEDIA SERVICES SECTION ===== */}
            <section className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Media & Entertainment <span className={styles.titleHighlight}>Application Services</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We offer a range of cutting-edge solutions tailored specifically for the dynamic and ever-evolving media and entertainment industry.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {mediaServices.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.serviceCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                        >
                            <div className={styles.serviceIcon} style={{ color: service.color }}>
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                            <div className={styles.servicePoints}>
                                {service.points.map((point, idx) => (
                                    <span key={idx} className={styles.servicePoint}>• {point}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== EXPERTISE SECTION ===== */}
            <section className={styles.expertiseSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our Expertise in <span className={styles.titleHighlight}>Media & Entertainment</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        With extensive experience, we use advanced technologies to meet evolving global customer needs and deliver measurable business value.
                    </p>
                </div>

                <div className={styles.expertiseGrid}>
                    {mediaExpertise.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.expertiseCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.expertiseIcon} style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== KEY FEATURES SECTION ===== */}
            <section className={styles.featuresSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Key Features of <span className={styles.titleHighlight}>Media & Entertainment Apps</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Essential features designed to enhance user experiences and ensure seamless content delivery.
                    </p>
                </div>

                <div className={styles.featuresGrid}>
                    {keyFeatures.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.featureCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.featureIcon} style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <span>{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== CROSS-PLATFORM DEVELOPMENT SECTION ===== */}
            <section className={styles.crossPlatformSection}>
                <div className={styles.crossPlatformGrid}>
                    <div className={styles.crossPlatformContent}>
                        <div className={styles.sectionHeader} style={{ textAlign: 'left', marginBottom: '2rem' }}>
                            <h2 className={styles.sectionTitle}>
                                Developing <span className={styles.titleHighlight}>Cross-Platform Apps</span>
                            </h2>
                            <p className={styles.sectionDescription} style={{ marginLeft: 0 }}>
                                Benefits of cross-platform development for media and entertainment.
                            </p>
                        </div>
                        <ul className={styles.crossPlatformList}>
                            {crossPlatformBenefits.map((item, idx) => (
                                <li key={idx}>
                                    <CheckCircle size={18} style={{ color: '#10B981', flexShrink: 0 }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.crossPlatformImageWrapper}>
                        <div className={styles.crossPlatformImageOverlay}></div>
                        <Image
                            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
                            alt="Cross-platform development"
                            fill
                            className={styles.crossPlatformImage}
                        />
                    </div>
                </div>
            </section>

            {/* ===== MONETIZATION STRATEGIES SECTION ===== */}
            <section className={styles.monetizationSection}>
                <div className={styles.monetizationGrid}>
                    <div className={styles.monetizationImageWrapper}>
                        <div className={styles.monetizationImageOverlay}></div>
                        <Image
                            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
                            alt="Monetization strategies"
                            fill
                            className={styles.monetizationImage}
                        />
                    </div>
                    <div className={styles.monetizationContent}>
                        <div className={styles.sectionHeader} style={{ textAlign: 'left', marginBottom: '2rem' }}>
                            <h2 className={styles.sectionTitle}>
                                Monetization Strategies for <span className={styles.titleHighlight}>Media Apps</span>
                            </h2>
                            <p className={styles.sectionDescription} style={{ marginLeft: 0 }}>
                                Generate revenue and maximize the financial potential of your apps.
                            </p>
                        </div>
                        <div className={styles.monetizationList}>
                            {monetizationStrategies.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.monetizationItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.monetizationIcon} style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <span>{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHY PARTNER WITH US – BACKGROUND IMAGE SECTION ===== */}
            <section className={styles.partnerSection}>
                <div className={styles.partnerBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1920&q=80"
                        alt="Media partnership background"
                        fill
                        className={styles.partnerBgImage}
                        priority
                    />
                    <div className={styles.partnerOverlay}></div>
                </div>
                <div className={styles.partnerContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle} style={{ color: 'white' }}>
                            Tailored Media & Entertainment <span className={styles.titleHighlight}>App Solutions</span>
                        </h2>
                        <p className={styles.sectionDescription} style={{ color: 'rgba(255,255,255,0.9)' }}>
                            We offer reliable media & entertainment application development services with a quick response time and improved return on investment.
                        </p>
                    </div>

                    <div className={styles.partnerGrid}>
                        {whyPartner.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.partnerCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
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
                </div>
            </section>

            {/* ===== INDUSTRIES SECTION ===== */}
            <section className={styles.industriesSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Media & Entertainment Industries We Serve</h2>
                        <p className={styles.sectionDescription}>
                            Partnering with businesses across the media sector to deliver innovative, engaging, and scalable solutions.
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
                        Get answers to common questions about media and entertainment software development.
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
                        <h3 className={styles.ctaTitle}>Unleash Creative Potential</h3>
                        <p className={styles.ctaDescription}>
                            Harness the power of technology with our tailored solutions to redefine entertainment and engage users like never before.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Build Your Media Solution
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Custom icon component (not in lucide-react)
const LinkChain = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
);