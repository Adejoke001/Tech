'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {

    Sparkles, ArrowRight, Award, MessageSquare, HelpCircle,
    CheckCircle, Users, Globe, Lock,
    Layers, Layout, Zap, Shield, Smartphone, Database,
    Compass, Code, GitBranch, FolderOpen, RefreshCw, Megaphone,
    Cpu, Box, Gamepad, Fingerprint, Key, BadgeCheck,
    Target, RefreshCw as ResetIcon, Server, Terminal, Cloud, Figma, 
    Hexagon, Building2, Rocket, Globe as GlobeIcon, Lock as LockIcon2, 
    Clock as ClockIcon, ThumbsUp
} from 'lucide-react';
import styles from './education.module.css';

export default function EducationPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
    const [scrollY, setScrollY] = useState(0);
    const [quizStep, setQuizStep] = useState(1);
    const [quizAnswers, setQuizAnswers] = useState({ goal: '', team: '' });
    const [quizResult, setQuizResult] = useState<null | 'custom' | 'offShelf'>(null);
    const [hoveredTech, setHoveredTech] = useState<number | null>(null);

    // Parallax effect
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Quiz handlers
    const handleQuizAnswer = (question: string, answer: string) => {
        setQuizAnswers(prev => ({ ...prev, [question]: answer }));
    };

    const handleQuizNext = () => {
        if (quizStep === 1 && quizAnswers.goal) setQuizStep(2);
        else if (quizStep === 2 && quizAnswers.team) {
            // Determine result
            const { goal, team } = quizAnswers;
            if (goal === 'unique' || team === 'small') {
                setQuizResult('custom');
            } else {
                setQuizResult('offShelf');
            }
        }
    };

    const resetQuiz = () => {
        setQuizStep(1);
        setQuizAnswers({ goal: '', team: '' });
        setQuizResult(null);
    };

    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'Sarah Johnson',
        role: 'Director of Learning, EduGlobal',
        content: 'BBNTech built our custom LMS from the ground up – it now serves 50,000+ students across 20 countries. Their deep understanding of EdTech and commitment to quality is unmatched.',
        rating: 5,
        project: 'Global Learning Platform'
    };

    // ============ EDUCATION SOLUTIONS ============
    const educationSolutions = [
        {
            title: 'Learning Management Systems (LMS)',
            description: 'Create, manage, and deliver online courses and training programs with a centralized platform.',
            icon: <Layers />,
            color: '#3B82F6',
            features: [
                'Centralized course repository',
                'Tracking and reporting',
                'User management'
            ]
        },
        {
            title: 'eLearning Portals',
            description: 'Personalized, user-friendly interfaces for learners to access online courses.',
            icon: <Layout />,
            color: '#10B981',
            features: [
                'Single sign-on (SSO)',
                'Resource aggregation',
                'Collaborative features'
            ]
        },
        {
            title: 'Learning Experience Platform (LXP)',
            description: 'Modern, flexible learning environments with AI-powered discovery and sharing.',
            icon: <Zap />,
            color: '#8B5CF6',
            features: [
                'AI-Powered recommendations',
                'Peer interactions',
                'Adaptive learning paths'
            ]
        },
        {
            title: 'Remote Monitoring Software',
            description: 'Ensure integrity of online assessments with remote proctoring and ID verification.',
            icon: <Shield />,
            color: '#F59E0B',
            features: [
                'Live Monitoring',
                'Recording and review',
                'Biometric authentication'
            ]
        },
        {
            title: 'Mobile Learning Solutions',
            description: 'Convenient, flexible access to courses anytime, anywhere with mobile-optimized apps.',
            icon: <Smartphone />,
            color: '#EC4899',
            features: [
                'Offline access',
                'Push notifications',
                'Interactive mobile features'
            ]
        },
        {
            title: 'Knowledge Management Solutions',
            description: 'Capture, store, and share organizational knowledge with centralized systems.',
            icon: <Database />,
            color: '#06B6D4',
            features: [
                'Centralized knowledge base',
                'Collaboration tools',
                'Access control'
            ]
        }
    ];

    // ============ EDUCATION SERVICES ============
    const educationServices = [
        {
            title: 'Educational Software Consulting',
            description: 'Strategize your eLearning journey with expert insights and guidance.',
            icon: <Compass />,
            color: '#3B82F6',
            points: ['In-depth consulting', 'Latest trends & technologies', 'Best practices']
        },
        {
            title: 'eLearning Software Development',
            description: 'Craft tailored solutions that resonate with modern learners.',
            icon: <Code />,
            color: '#10B981',
            points: ['Interactive courseware', 'Mobile learning apps', 'Multimedia content']
        },
        {
            title: 'eLearning Software Integration',
            description: 'Seamlessly connect your eLearning tools for an integrated experience.',
            icon: <GitBranch />,
            color: '#8B5CF6',
            points: ['LMS/CMS integration', 'Efficient data exchange', 'Connect with tools']
        },
        {
            title: 'eLearning Content Management',
            description: 'Empower with robust platforms for end-to-end content management.',
            icon: <FolderOpen />,
            color: '#F59E0B',
            points: ['Course creation', 'Delivery & tracking', 'Assessment & reporting']
        },
        {
            title: 'eLearning Software Modernization',
            description: 'Strengthen legacy platforms with future-ready, scalable experiences.',
            icon: <RefreshCw />,
            color: '#EC4899',
            points: ['Upgrade outdated LMS', 'Cloud-native migration', 'AI-enabled platforms']
        },
        {
            title: 'Digital Marketing Services',
            description: 'Enhance visibility and enrollment through targeted educational marketing.',
            icon: <Megaphone />,
            color: '#06B6D4',
            points: ['Strategic campaigns', 'SEO & content', 'Analytics-driven optimization']
        }
    ];

    // ============ TYPES OF eLEARNING SOFTWARE ============
    const softwareTypes = [
        { name: 'Learning Management Systems (LMS)', desc: 'Manage training, create tests, track progress', icon: <Layers />, color: '#3B82F6' },
        { name: 'Course Management Systems (CMS)', desc: 'Create and publish online courses', icon: <Layout />, color: '#10B981' },
        { name: 'Learning Content Management Systems (LCMS)', desc: 'Create and manage training material with advanced features', icon: <Database />, color: '#8B5CF6' }
    ];

    // ============ TOP TRENDS ============
    const trends = [
        { name: 'Mobile Learning (mLearning)', desc: 'Access educational content anytime, anywhere', icon: <Smartphone />, color: '#3B82F6' },
        { name: 'Microlearning', desc: 'Short, bite-sized learning modules', icon: <Zap />, color: '#10B981' },
        { name: 'Artificial Intelligence (AI)', desc: 'Personalized recommendations, intelligent tutoring', icon: <Cpu />, color: '#8B5CF6' },
        { name: 'VR & AR', desc: 'Immersive and interactive learning environments', icon: <Box />, color: '#F59E0B' },
        { name: 'Social Learning', desc: 'Peer collaboration, discussion forums', icon: <Users />, color: '#EC4899' },
        { name: 'Gamification', desc: 'Game elements, rewards, leaderboards', icon: <Gamepad />, color: '#06B6D4' }
    ];

    // ============ SECURITY MEASURES ============
    const securityMeasures = [
        { text: 'User Authentication – passwords, MFA, SSO', icon: <Fingerprint />, color: '#3B82F6' },
        { text: 'Data Encryption – in transit and at rest', icon: <Lock />, color: '#10B981' },
        { text: 'Secure Communication – HTTPS/SSL', icon: <Globe />, color: '#8B5CF6' },
        { text: 'Role-Based Access Control', icon: <Key />, color: '#F59E0B' },
        { text: 'Regular Security Audits', icon: <Shield />, color: '#EC4899' },
        { text: 'Secure Hosting & Infrastructure', icon: <Database />, color: '#06B6D4' },
        { text: 'Data Privacy & Compliance (GDPR)', icon: <BadgeCheck />, color: '#3B82F6' },
        { text: 'Security Awareness Training', icon: <Users />, color: '#10B981' }
    ];

    // ============ TECHNOLOGY STACK (for explorer) ============
    const techStack = [
        { name: 'React / Next.js', category: 'Frontend', icon: <Code />, color: '#3B82F6', description: 'Dynamic, performant UIs' },
        { name: 'Node.js', category: 'Backend', icon: <Server />, color: '#10B981', description: 'Scalable server-side logic' },
        { name: 'Python / Django', category: 'Backend', icon: <Terminal />, color: '#8B5CF6', description: 'Rapid development, AI/ML ready' },
        { name: 'AWS / Azure', category: 'Cloud', icon: <Cloud />, color: '#F59E0B', description: 'Secure, scalable infrastructure' },
        { name: 'Figma', category: 'Design', icon: <Figma />, color: '#EC4899', description: 'Collaborative design systems' },
        { name: 'MongoDB', category: 'Database', icon: <Database />, color: '#06B6D4', description: 'Flexible, document-based storage' },
        { name: 'React Native', category: 'Mobile', icon: <Smartphone />, color: '#3B82F6', description: 'Cross-platform mobile apps' },
        { name: 'GraphQL', category: 'API', icon: <Hexagon />, color: '#10B981', description: 'Efficient data querying' }
    ];

    // ============ LMS VS LXP ============
    const lmsVsLxp = {
        lms: 'Centralized learning hub – structured learning paths, administrative focus',
        lxp: 'User-centric – personalized, social, self-directed learning'
    };

    // ============ WHY PARTNER WITH US ============
    const whyPartner = [
        { text: 'Trusted by Startups to Fortune 500', icon: <Building2 />, color: '#3B82F6' },
        { text: 'Idea to Deployment, We Handle All', icon: <Rocket />, color: '#10B981' },
        { text: 'Time-Zone Friendly: Global Presence', icon: <GlobeIcon />, color: '#8B5CF6' },
        { text: 'Top-tier Data Security Protocols', icon: <LockIcon2 />, color: '#F59E0B' },
        { text: 'On-time Delivery, No Surprises', icon: <ClockIcon />, color: '#EC4899' },
        { text: 'First Time Right Process', icon: <ThumbsUp />, color: '#06B6D4' }
    ];

    // ============ TRUSTED BY ============
    const trustedCompanies = ['Microsoft', 'Amazon', 'Google', 'IBM', 'SAP', 'Oracle'];

    // ============ INDUSTRIES ============
    const industries = [
        {
            name: 'K-12 Education',
            icon: '📚',
            desc: 'Interactive learning platforms, student portals, parental engagement tools, and curriculum management.',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
            color: '#3B82F6'
        },
        {
            name: 'Higher Education',
            icon: '🎓',
            desc: 'University LMS, research collaboration tools, virtual classrooms, and student information systems.',
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
            color: '#10B981'
        },
        {
            name: 'Corporate Training',
            icon: '🏢',
            desc: 'Employee onboarding, compliance training, skill development platforms, and performance tracking.',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
            color: '#8B5CF6'
        },
        {
            name: 'Test Prep & Certification',
            icon: '📝',
            desc: 'Practice tests, adaptive learning, progress analytics, and certification management.',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
            color: '#F59E0B'
        },
        {
            name: 'Language Learning',
            icon: '🌐',
            desc: 'Interactive language apps, speech recognition, gamified lessons, and cultural content.',
            image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
            color: '#EC4899'
        },
        {
            name: 'Continuing Education',
            icon: '📖',
            desc: 'Professional development, micro-credentials, lifelong learning platforms, and webinar tools.',
            image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
            color: '#06B6D4'
        }
    ];

    // ============ FAQS ============
    const faqs = [
        {
            question: 'What is the difference between an LMS and an LXP?',
            answer: 'An LMS (Learning Management System) is designed for structured, administrative learning – course creation, assignment, and tracking. An LXP (Learning Experience Platform) focuses on learner experience – personalized recommendations, social learning, and content discovery. Many organizations use both to balance structure and flexibility.'
        },
        {
            question: 'How do you ensure data security and compliance in eLearning platforms?',
            answer: 'We implement end-to-end encryption, multi-factor authentication, role-based access control, regular security audits, and compliance with GDPR, HIPAA, and FERPA as required. Our platforms are built with security at every layer.'
        },
        {
            question: 'Can you integrate with our existing student information system (SIS)?',
            answer: 'Absolutely. We specialise in seamless integrations with popular SIS platforms (Banner, PowerSchool, Infinite Campus) using secure APIs and middleware – ensuring real-time data synchronisation for student records, enrollments, and grades.'
        },
        {
            question: 'Do you offer mobile apps with offline access?',
            answer: 'Yes. Our mobile learning solutions include full offline support – students can download courses, complete assignments, and sync progress when back online. We build native iOS and Android apps as well as cross-platform solutions.'
        },
        {
            question: 'How do you handle remote proctoring and assessment integrity?',
            answer: 'We offer AI-powered remote proctoring with live monitoring, session recording, facial recognition, and browser lockdown. Our solutions detect suspicious behaviour while maintaining student privacy.'
        },
        {
            question: 'What emerging technologies do you use in EdTech?',
            answer: 'We leverage AI for personalized learning paths, VR/AR for immersive experiences, gamification for engagement, and blockchain for credentialing. Our team stays at the forefront of EdTech innovation.'
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION WITH PARALLAX ===== */}
            <section className={styles.heroSection}>
                <div 
                    className={styles.parallaxBg}
                    style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Hero background"
                        fill
                        className={styles.parallaxImage}
                        priority
                    />
                </div>
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
                                <Sparkles size={18} /> Education & EdTech Solutions
                            </div>
                            <h1 className={styles.mainTitle}>
                                Education & eLearning <span className={styles.highlight}>Software Development</span>
                            </h1>
                            {/* <p className={styles.subheadline}>
                                Our tailored eLearning solutions ensure seamless learning experiences for both educators and students while enhancing engagement and outcomes.
                            </p> */}
                            <p className={styles.heroDescription}>
                                From LMS and LXP to mobile learning, remote proctoring, and AI-powered personalization – we build future-ready education platforms trusted by institutions worldwide.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className={styles.buttonContainer}
                        >
                            <Link href="/contact" className={styles.ctaButton}>
                                Build Your EdTech Solution
                                <ArrowRight className={styles.buttonIcon} />
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
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
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
                                        <div className={styles.ratingText}>EdTech Excellence</div>
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

            {/* ===== EDUCATION SOLUTIONS SECTION ===== */}
            <section className={styles.solutionsSection} id="solutions">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Education & eLearning <span className={styles.titleHighlight}>Solutions</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Our tailored eLearning solutions ensure seamless learning experiences for both educators and students while enhancing engagement and outcomes.
                    </p>
                </div>

                <div className={styles.solutionsGrid}>
                    {educationSolutions.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.solutionCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
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

            {/* ===== EDUCATION SERVICES SECTION ===== */}
            <section className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Education Software <span className={styles.titleHighlight}>Development Services</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We blend expertise with innovation to deliver top-tier eLearning solutions tailored for educational institutions and organizations.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {educationServices.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.serviceCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                        >
                            <div className={styles.serviceIcon} style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p className={styles.serviceDescription}>{item.description}</p>
                            <div className={styles.servicePoints}>
                                {item.points.map((point, idx) => (
                                    <span key={idx} className={styles.servicePoint}>• {point}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== TYPES OF eLEARNING SOFTWARE ===== */}
            <section className={styles.typesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Types of <span className={styles.titleHighlight}>eLearning Software</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Understanding the different platforms available for education and training.
                    </p>
                </div>

                <div className={styles.typesGrid}>
                    {softwareTypes.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.typeCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.typeIcon} style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== TOP TRENDS IN eLEARNING ===== */}
            <section className={styles.trendsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Top Trends in <span className={styles.titleHighlight}>eLearning Development</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        As education continues to evolve, eLearning software development is leading the way.
                    </p>
                </div>

                <div className={styles.trendsGrid}>
                    {trends.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.trendCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.trendIcon} style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <div className={styles.trendContent}>
                                <h4>{item.name}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== SECURITY MEASURES SECTION ===== */}
            <section className={styles.securitySection}>
                <div className={styles.securityGrid}>
                    <div className={styles.securityContent}>
                        <div className={styles.sectionHeader} style={{ textAlign: 'left', marginBottom: '2rem' }}>
                            <h2 className={styles.sectionTitle}>
                                Security Measures in <span className={styles.titleHighlight}>eLearning Software</span>
                            </h2>
                            <p className={styles.sectionDescription} style={{ marginLeft: 0 }}>
                                Essential security measures implemented to protect user data and ensure platform integrity.
                            </p>
                        </div>
                        <div className={styles.securityList}>
                            {securityMeasures.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.securityItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.03 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.securityItemIcon} style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <span>{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.securityImageWrapper}>
                        <div className={styles.securityImageOverlay}></div>
                        <Image
                            src="https://plus.unsplash.com/premium_photo-1661777954541-acb17c07eeb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlYXJuaW5nfGVufDB8fDB8fHww"
                            alt="Security"
                            fill
                            className={styles.securityImage}
                        />
                    </div>
                </div>
            </section>

            {/* ===== INTERACTIVE COMPARISON QUIZ (replaces static custom vs off-the-shelf) ===== */}
            <section className={styles.quizSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Custom vs. Off‑the‑Shelf: <span className={styles.titleHighlight}>Find Your Fit</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Answer two quick questions and we&apos;ll recommend the best approach for your EdTech project.
                    </p>
                </div>

                <div className={styles.quizContainer}>
                    {!quizResult ? (
                        <div className={styles.quizCard}>
                            <div className={styles.quizProgress}>
                                <div className={`${styles.quizStep} ${quizStep >= 1 ? styles.active : ''}`}>1</div>
                                <div className={styles.quizStepLine}></div>
                                <div className={`${styles.quizStep} ${quizStep >= 2 ? styles.active : ''}`}>2</div>
                            </div>

                            {quizStep === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className={styles.quizQuestion}
                                >
                                    <h3>What is your primary goal for this project?</h3>
                                    <div className={styles.quizOptions}>
                                        <button
                                            className={`${styles.quizOption} ${quizAnswers.goal === 'unique' ? styles.selected : ''}`}
                                            onClick={() => handleQuizAnswer('goal', 'unique')}
                                        >
                                            <Target size={24} />
                                            <div>
                                                <strong>Unique & tailored experience</strong>
                                                <small>I need something that stands out from competitors.</small>
                                            </div>
                                        </button>
                                        <button
                                            className={`${styles.quizOption} ${quizAnswers.goal === 'fast' ? styles.selected : ''}`}
                                            onClick={() => handleQuizAnswer('goal', 'fast')}
                                        >
                                            <Zap size={24} />
                                            <div>
                                                <strong>Speed & time-to-market</strong>
                                                <small>I need to launch quickly with proven features.</small>
                                            </div>
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {quizStep === 2 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className={styles.quizQuestion}
                                >
                                    <h3>Do you have an in-house development team?</h3>
                                    <div className={styles.quizOptions}>
                                        <button
                                            className={`${styles.quizOption} ${quizAnswers.team === 'small' ? styles.selected : ''}`}
                                            onClick={() => handleQuizAnswer('team', 'small')}
                                        >
                                            <Users size={24} />
                                            <div>
                                                <strong>Small team / no dedicated developers</strong>
                                                <small>We&apos;ll need significant support.</small>
                                            </div>
                                        </button>
                                        <button
                                            className={`${styles.quizOption} ${quizAnswers.team === 'large' ? styles.selected : ''}`}
                                            onClick={() => handleQuizAnswer('team', 'large')}
                                        >
                                            <Building2 size={24} />
                                            <div>
                                                <strong>Experienced in-house team</strong>
                                                <small>We can handle integration and customization.</small>
                                            </div>
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            <div className={styles.quizActions}>
                                {quizStep > 1 && (
                                    <button className={styles.quizBack} onClick={() => setQuizStep(1)}>
                                        ← Back
                                    </button>
                                )}
                                <button
                                    className={styles.quizNext}
                                    onClick={handleQuizNext}
                                    disabled={
                                        (quizStep === 1 && !quizAnswers.goal) ||
                                        (quizStep === 2 && !quizAnswers.team)
                                    }
                                >
                                    {quizStep === 2 ? 'Get Recommendation' : 'Next'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={styles.quizResult}
                        >
                            <div className={styles.resultIcon}>
                                {quizResult === 'custom' ? <Code size={48} color="#3B82F6" /> : <Layout size={48} color="#10B981" />}
                            </div>
                            <h3>
                                {quizResult === 'custom'
                                    ? 'Custom Development is Your Best Fit'
                                    : 'Off-the-Shelf Solution is Your Best Fit'}
                            </h3>
                            <p>
                                {quizResult === 'custom'
                                    ? 'Based on your need for a unique experience and limited in-house resources, a custom-built solution will give you complete control and differentiation.'
                                    : 'With your focus on speed and experienced team, an off-the-shelf platform (customizable via our services) will get you to market faster while still meeting your needs.'}
                            </p>
                            <div className={styles.resultActions}>
                                <button className={styles.quizReset} onClick={resetQuiz}>
                                    <ResetIcon size={16} /> Retake Quiz
                                </button>
                                <Link href="/contact" className={styles.quizContact}>
                                    Discuss with Expert
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* ===== TECHNOLOGY STACK EXPLORER (Premium Feature) ===== */}
            <section className={styles.techExplorerSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our <span className={styles.titleHighlight}>Technology Stack</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Hover over each technology to learn how we use it to build world‑class EdTech solutions.
                    </p>
                </div>

                <div className={styles.techExplorerGrid}>
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            className={styles.techExplorerCard}
                            onMouseEnter={() => setHoveredTech(index)}
                            onMouseLeave={() => setHoveredTech(null)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.techExplorerIcon} style={{ color: tech.color }}>
                                {tech.icon}
                            </div>
                            <h4>{tech.name}</h4>
                            <span className={styles.techCategory}>{tech.category}</span>
                            <AnimatePresence>
                                {hoveredTech === index && (
                                    <motion.div
                                        className={styles.techTooltip}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                    >
                                        {tech.description}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== LMS VS LXP ===== */}
            <section className={styles.lmsLxpSection}>
                <div className={styles.lmsLxpGrid}>
                    <div className={styles.lmsCard}>
                        <div className={styles.lmsHeader}>
                            <Layers className={styles.lmsIcon} style={{ color: '#3B82F6' }} />
                            <h3>LMS</h3>
                        </div>
                        <p className={styles.lmsDescription}>{lmsVsLxp.lms}</p>
                    </div>
                    <div className={styles.vsDivider}>
                        <span>VS</span>
                    </div>
                    <div className={styles.lxpCard}>
                        <div className={styles.lxpHeader}>
                            <Zap className={styles.lxpIcon} style={{ color: '#8B5CF6' }} />
                            <h3>LXP</h3>
                        </div>
                        <p className={styles.lxpDescription}>{lmsVsLxp.lxp}</p>
                    </div>
                </div>
            </section>

            {/* ===== WHY PARTNER WITH US – BACKGROUND IMAGE ===== */}
            <section className={styles.partnerSection}>
                <div className={styles.partnerBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80"
                        alt="Education partnership background"
                        fill
                        className={styles.partnerBgImage}
                        priority
                    />
                    <div className={styles.partnerOverlay}></div>
                </div>
                <div className={styles.partnerContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle} style={{ color: 'white' }}>
                            Solving eLearning Challenges <span className={styles.titleHighlight}>with Expertise</span>
                        </h2>
                        <p className={styles.sectionDescription} style={{ color: 'rgba(255,255,255,0.9)' }}>
                            Our skilled developers craft online education apps that address common challenges, ensuring enhanced user engagement and learning outcomes.
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
                        <h2 className={styles.sectionTitle}>Education Industries We Serve</h2>
                        <p className={styles.sectionDescription}>
                            Partnering with institutions across the education sector to deliver innovative, engaging, and scalable solutions.
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
                        Get answers to common questions about education and eLearning software development.
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
                        <h3 className={styles.ctaTitle}>Ready for Next-Gen eLearning?</h3>
                        <p className={styles.ctaDescription}>
                            Tap into our advanced software solutions and stay ahead in the digital learning curve.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Build Your EdTech Solution
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