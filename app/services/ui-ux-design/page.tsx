'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Palette, Smartphone, Monitor, Users, Zap, Search,
    CheckCircle, Award, MessageSquare, Star, Sparkles,
    ChevronRight, Layout, Eye, Workflow, BarChart,
    Target, Shield, Clock, Cpu, FileText, PieChart,
    HelpCircle, ArrowRight, Brush, Layers, Figma,
    Brain, TrendingUp, Circle, Globe, Server,
    Wrench, TestTube, Tablet, Smartphone as Phone,
    Cpu as CpuIcon, GitBranch, Terminal, Database,
    Shield as ShieldIcon, Cloud, Music, Video,
    ShoppingCart, Heart, BookOpen, Banknote,
    LineChart, MessageCircle, Settings, Filter,
    Code, PlayCircle, EyeOff, Mail, Share2,
    Download, Upload, Lock, Unlock, Bell
} from 'lucide-react';
import styles from './ui-ux.module.css';

export default function UIUXDesignPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

    const testimonial = {
        name: 'Rebecca Chen',
        role: 'Product Director, TechVision Inc.',
        content: 'They go above and beyond to ensure quality and satisfaction. A true partner in every sense. Their designs increased our user retention by 40%.',
        rating: 5,
        project: 'Enterprise SaaS Platform Redesign'
    };

    // UI/UX Design Services (enhanced from reference)
    const designServices = [
        {
            id: 1,
            title: 'Desktop/Web App Design',
            description: 'Holistic approach ensuring your site looks impressive with seamless navigation flow.',
            icon: <Monitor className={styles.serviceIcon} />,
            color: '#60a5fa', // Blue
            features: ['Seamless navigation flow', 'High-impact visuals', 'Responsive design', 'User-centered layouts'],
            deliverables: ['Wireframes', 'Interactive prototypes', 'Design system', 'Style guide'],
            benefits: 'Increases user engagement by 35% and reduces bounce rates'
        },
        {
            id: 2,
            title: 'Mobile App Design',
            description: 'Crafting stunning visual experiences that are both meaningful and memorable.',
            icon: <Smartphone className={styles.serviceIcon} />,
            color: '#34d399', // Green
            features: ['Consistent cross-device UI', 'High user retention', 'Gesture-based interactions', 'Mobile-first approach'],
            deliverables: ['App screens', 'Micro-interactions', 'Icon sets', 'Mobile design system'],
            benefits: 'Boosts user retention by 40% and improves app store ratings'
        },
        {
            id: 3,
            title: 'SaaS UI/UX Design',
            description: 'Cutting-edge SaaS UI tailored to your software product\'s target audience.',
            icon: <Cloud className={styles.serviceIcon} />,
            color: '#8b5cf6', // Purple
            features: ['Ensures fast onboarding', 'High subscription retention', 'Dashboard designs', 'Analytics visualization'],
            deliverables: ['SaaS dashboard', 'Admin panels', 'Data visualization', 'User management UI'],
            benefits: 'Improves subscription retention by 30% and user adoption'
        },
        {
            id: 4,
            title: 'Usability Testing',
            description: 'Identify potential problems users may have with your product before launch.',
            icon: <Search className={styles.serviceIcon} />,
            color: '#f59e0b', // Amber
            features: ['Saves time & money', 'Reduced bounce rates', 'User behavior analysis', 'A/B testing'],
            deliverables: ['Test reports', 'Heatmaps', 'User journey maps', 'Improvement recommendations'],
            benefits: 'Reduces development costs by 25% and improves user satisfaction'
        },
        {
            id: 5,
            title: 'Design Audit',
            description: 'Assess and refine your design components and guidelines for cohesive identity.',
            icon: <Eye className={styles.serviceIcon} />,
            color: '#ef4444', // Red
            features: ['Maintain cohesive identity', 'Boost conversion rates', 'Accessibility check', 'Performance audit'],
            deliverables: ['Audit report', 'Accessibility score', 'Performance metrics', 'Redesign roadmap'],
            benefits: 'Increases conversion rates by 45% and brand consistency'
        },
        {
            id: 6,
            title: 'UI/UX Consulting',
            description: 'Navigate complex design challenges with strategic guidance and expertise.',
            icon: <Users className={styles.serviceIcon} />,
            color: '#06b6d4', // Cyan
            features: ['Optimize digital experiences', 'Increase product engagement', 'Design strategy', 'Competitive analysis'],
            deliverables: ['Strategy document', 'Competitive analysis', 'Roadmap planning', 'Team training'],
            benefits: 'Drives product engagement by 55% and business growth'
        }
    ];

    // Comprehensive Design Process (from reference with details)
    const designProcess = [
        {
            stage: 1,
            title: 'Research & Discovery',
            description: 'Conduct user research to understand behaviors, needs, and preferences. Analyze competitive landscape.',
            activities: ['User interviews & surveys', 'Competitive analysis', 'Market research', 'Goal definition', 'Stakeholder workshops'],
            icon: <Search />,
            color: '#60a5fa',
            duration: '1-2 weeks',
            output: 'Research report & user insights'
        },
        {
            stage: 2,
            title: 'User Personas & Flows',
            description: 'Create user personas and map user journeys to identify pain points and opportunities.',
            activities: ['Persona creation', 'Journey mapping', 'Pain point analysis', 'Opportunity identification', 'Task analysis'],
            icon: <Users />,
            color: '#34d399',
            duration: '1 week',
            output: 'User personas & journey maps'
        },
        {
            stage: 3,
            title: 'Information Architecture',
            description: 'Structure content hierarchy and create wireframes for optimal layout and navigation.',
            activities: ['Content strategy', 'Site mapping', 'Wireframing', 'User flow design', 'Navigation design'],
            icon: <Layout />,
            color: '#8b5cf6',
            duration: '1-2 weeks',
            output: 'Wireframes & site maps'
        },
        {
            stage: 4,
            title: 'Prototyping & Interaction',
            description: 'Build interactive prototypes to demonstrate flow, functionality, and user interactions.',
            activities: ['Interactive prototyping', 'UI component design', 'Motion design', 'User testing', 'Feedback iteration'],
            icon: <Figma />,
            color: '#f59e0b',
            duration: '2-3 weeks',
            output: 'Interactive prototypes'
        },
        {
            stage: 5,
            title: 'Visual Design',
            description: 'Apply visual elements including colors, typography, imagery, and brand identity.',
            activities: ['Visual design', 'Design system', 'Style guide', 'Asset creation', 'Brand integration'],
            icon: <Palette />,
            color: '#ef4444',
            duration: '2-3 weeks',
            output: 'High-fidelity designs & assets'
        },
        {
            stage: 6,
            title: 'Testing & Implementation',
            description: 'Usability testing, developer handoff, and quality assurance for implementation.',
            activities: ['Usability testing', 'Developer handoff', 'Quality assurance', 'Performance testing', 'Launch support'],
            icon: <TestTube />,
            color: '#06b6d4',
            duration: '1-2 weeks',
            output: 'Final designs & documentation'
        }
    ];

    // Standard UI vs UX Comparison Table
    const uiUxComparison = [
        {
            aspect: 'Primary Focus',
            ui: {
                description: 'Visual elements and interactive components',
                details: ['Layout, colors, typography', 'Buttons, icons, spacing', 'Visual hierarchy', 'Brand consistency'],
                icon: <Brush />
            },
            ux: {
                description: 'Overall experience and user journey',
                details: ['User research and testing', 'Information architecture', 'Usability and accessibility', 'User satisfaction'],
                icon: <Brain />
            }
        },
        {
            aspect: 'Goal & Objective',
            ui: {
                description: 'Create visually engaging and intuitive interface',
                details: ['Aesthetic appeal', 'Visual consistency', 'Intuitive interactions', 'Brand representation'],
                icon: <Eye />
            },
            ux: {
                description: 'Ensure seamless, enjoyable, and valuable experience',
                details: ['Task completion ease', 'User satisfaction', 'Problem solving', 'Meaningful interactions'],
                icon: <Target />
            }
        },
        {
            aspect: 'Key Components',
            ui: {
                description: 'Interface elements and visual design',
                details: ['Color schemes and typography', 'Icons and imagery', 'Spacing and layout', 'Interactive elements'],
                icon: <Layout />
            },
            ux: {
                description: 'Research, strategy, and user flows',
                details: ['User research methods', 'Wireframes and prototypes', 'User testing plans', 'Analytics and metrics'],
                icon: <Workflow />
            }
        },
        {
            aspect: 'Measurable Outcome',
            ui: {
                description: 'How the product looks and feels',
                details: ['Visual appeal score', 'Brand consistency', 'Design system adoption', 'Interface clarity'],
                icon: <BarChart />
            },
            ux: {
                description: 'How the product works and meets user needs',
                details: ['Task success rate', 'User satisfaction scores', 'Conversion rates', 'Error reduction'],
                icon: <TrendingUp />
            }
        },
        {
            aspect: 'Tools & Deliverables',
            ui: {
                description: 'Design and prototyping tools',
                details: ['Figma, Sketch, Adobe XD', 'Style guides', 'Design systems', 'Visual assets'],
                icon: <Figma />
            },
            ux: {
                description: 'Research and testing tools',
                details: ['User testing platforms', 'Analytics tools', 'Wireframing software', 'Research reports'],
                icon: <Search />
            }
        }
    ];

    // Importance of UI/UX Design (from reference)
    const designImportance = [
        {
            title: 'Enhances User Satisfaction',
            description: 'Good UI/UX design creates user-friendly and enjoyable experiences that are intuitive, efficient, and visually pleasing.',
            impact: '85% higher satisfaction',
            icon: <Heart />,
            color: '#ef4444'
        },
        {
            title: 'Increases Engagement & Retention',
            description: 'Intuitive and engaging design encourages users to explore and interact more deeply, leading to higher retention rates.',
            impact: '40% more engagement',
            icon: <TrendingUp />,
            color: '#34d399'
        },
        {
            title: 'Drives Business Growth',
            description: 'Well-designed UI/UX attracts and retains users, differentiates from competitors, and creates positive brand reputation.',
            impact: '60% growth acceleration',
            icon: <LineChart />,
            color: '#60a5fa'
        },
        {
            title: 'Reduces Development Costs',
            description: 'Early identification of usability issues reduces the need for extensive redesigns and development iterations later.',
            impact: '30% cost reduction',
            icon: <Banknote />,
            color: '#f59e0b'
        },
        {
            title: 'Improves Usability',
            description: 'Effective layout, navigation, and information hierarchy enhance product usability and reduce user frustration.',
            impact: '90% task completion',
            icon: <CheckCircle />,
            color: '#8b5cf6'
        },
        {
            title: 'Builds Brand Identity',
            description: 'Consistent visual elements create cohesive brand experiences that reinforce brand recognition and loyalty.',
            impact: '95% brand consistency',
            icon: <Award />,
            color: '#06b6d4'
        }
    ];

    // Expanded Design Tools (6 categories as requested)
    const designTools = [
        {
            category: 'Design & Prototyping',
            icon: <Figma />,
            color: '#60a5fa',
            tools: [
                { name: 'Figma', type: 'Primary Design' },
                { name: 'Sketch', type: 'UI Design' },
                { name: 'Adobe XD', type: 'Prototyping' },
                { name: 'InVision', type: 'Collaboration' },
                { name: 'Framer', type: 'Advanced Prototyping' },
                { name: 'Principle', type: 'Animation' }
            ],
            description: 'Industry-standard tools for creating interfaces and interactive prototypes'
        },
        {
            category: 'User Research',
            icon: <Search />,
            color: '#34d399',
            tools: [
                { name: 'Maze', type: 'Usability Testing' },
                { name: 'UserTesting', type: 'Remote Testing' },
                { name: 'Hotjar', type: 'Behavior Analytics' },
                { name: 'Optimal Workshop', type: 'Card Sorting' },
                { name: 'UsabilityHub', type: 'Quick Testing' },
                { name: 'Lookback', type: 'Interview Platform' }
            ],
            description: 'Tools for understanding user behavior, needs, and preferences'
        },
        {
            category: 'Collaboration & Handoff',
            icon: <Users />,
            color: '#8b5cf6',
            tools: [
                { name: 'Zeplin', type: 'Design Handoff' },
                { name: 'Abstract', type: 'Version Control' },
                { name: 'Miro', type: 'Collaborative Whiteboard' },
                { name: 'Notion', type: 'Documentation' },
                { name: 'Slack', type: 'Team Communication' },
                { name: 'Jira', type: 'Project Management' }
            ],
            description: 'Platforms for team collaboration, feedback, and developer handoff'
        },
        {
            category: 'Analytics & Testing',
            icon: <BarChart />,
            color: '#f59e0b',
            tools: [
                { name: 'Google Analytics', type: 'Web Analytics' },
                { name: 'Mixpanel', type: 'Product Analytics' },
                { name: 'Amplitude', type: 'Behavior Analytics' },
                { name: 'Crazy Egg', type: 'Heatmaps' },
                { name: 'VWO', type: 'A/B Testing' },
                { name: 'Optimizely', type: 'Experimentation' }
            ],
            description: 'Tools for measuring performance, testing variations, and analyzing data'
        },
        {
            category: 'Motion & Interaction',
            icon: <PlayCircle />,
            color: '#ef4444',
            tools: [
                { name: 'After Effects', type: 'Motion Design' },
                { name: 'Lottie', type: 'Animation Library' },
                { name: 'Rive', type: 'Real-time Animation' },
                { name: 'Protopie', type: 'Advanced Interactions' },
                { name: 'Flinto', type: 'Mobile Prototyping' },
                { name: 'Haiku', type: 'Interactive Animation' }
            ],
            description: 'Tools for creating engaging animations and micro-interactions'
        },
        {
            category: 'Design Systems',
            icon: <Layers />,
            color: '#06b6d4',
            tools: [
                { name: 'Storybook', type: 'Component Library' },
                { name: 'Zeroheight', type: 'Documentation' },
                { name: 'Figma Variables', type: 'Design Tokens' },
                { name: 'Supernova', type: 'System Management' },
                { name: 'UXPin', type: 'Design Systems' },
                { name: 'Component.io', type: 'Component Library' }
            ],
            description: 'Tools for creating, maintaining, and scaling design systems'
        }
    ];

    // Why Choose Us (from reference)
    const whyChooseUs = [
        {
            id: 1,
            title: "India's Top 1% Design Talent",
            description: 'Access elite UI/UX designers with proven expertise in cutting-edge design methodologies and tools.',
            icon: <Award className={styles.chooseIcon} />,
            color: '#60a5fa'
        },
        {
            id: 2,
            title: 'Trusted by Startups to Fortune 500',
            description: 'Proven track record with businesses of all sizes across diverse industries and verticals.',
            icon: <Globe className={styles.chooseIcon} />,
            color: '#34d399'
        },
        {
            id: 3,
            title: 'Idea to Deployment, We Handle All',
            description: 'End-to-end design solutions from initial concept to final implementation and launch.',
            icon: <Workflow className={styles.chooseIcon} />,
            color: '#8b5cf6'
        },
        {
            id: 4,
            title: 'Time-Zone Friendly Global Presence',
            description: 'Seamless collaboration across time zones with our distributed expert design teams.',
            icon: <Clock className={styles.chooseIcon} />,
            color: '#f59e0b'
        },
        {
            id: 5,
            title: 'Top-tier Data Security Protocols',
            description: 'Enterprise-grade security measures to protect your sensitive information and IP.',
            icon: <ShieldIcon className={styles.chooseIcon} />,
            color: '#ef4444'
        },
        {
            id: 6,
            title: 'On-time Delivery, No Surprises',
            description: 'Reliable project timelines with transparent communication throughout the design process.',
            icon: <CheckCircle className={styles.chooseIcon} />,
            color: '#06b6d4'
        }
    ];

    // Industries Section
    const industries = [
        { 
            name: 'Healthcare', 
            icon: '🏥', 
            desc: 'Intuitive patient portals, telehealth interfaces, medical dashboard designs with HIPAA compliance and accessibility standards.',
            image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80',
            color: '#34d399' 
        },
        { 
            name: 'Fintech & Banking', 
            icon: '🏦', 
            desc: 'Secure banking interfaces, investment dashboards, payment apps with flawless user journeys and regulatory compliance.',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
            color: '#60a5fa' 
        },
        { 
            name: 'Retail & eCommerce', 
            icon: '🛍️', 
            desc: 'Conversion-optimized shopping experiences, personalized interfaces, seamless checkout flows and inventory management UIs.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
            color: '#8b5cf6' 
        },
    ];

    // Enhanced FAQs from reference
    const faqs = [
        {
            question: 'What is the importance of UI/UX design for businesses?',
            answer: 'UI/UX design enhances user satisfaction, improves usability and accessibility, builds strong brand identity, increases user engagement and retention, drives business growth, reduces development costs, and adapts to evolving user needs. It prioritizes user satisfaction, usability, brand identity, and business growth, creating compelling user-centered experiences.'
        },
        {
            question: 'What is the difference between UI and UX design?',
            answer: 'UI (User Interface) focuses on the visual elements and interactive components users interact with - layout, colors, typography, buttons, and icons. UX (User Experience) encompasses the overall experience throughout the user journey, focusing on understanding user needs, behaviors, motivations, and emotions to create positive and meaningful experiences.'
        },
        {
            question: 'Why should a company invest in professional UI/UX design?',
            answer: 'Companies should invest in UI/UX design to enhance user satisfaction, improve usability and efficiency, differentiate from competitors, increase user engagement and retention, drive business growth, reduce development costs, and support branding and marketing efforts. It directly impacts the bottom line through better user experiences.'
        },
        {
            question: 'What are the typical stages in UI/UX design and development?',
            answer: 'The typical stages include: 1) Research and Discovery, 2) User Personas and User Flows, 3) Information Architecture and Wireframing, 4) Prototyping and Interaction Design, 5) Visual Design, and 6) Testing and Implementation. Each stage ensures a systematic and effective approach to creating user-centered designs.'
        },
        {
            question: 'How do you measure the success of UI/UX design?',
            answer: 'We measure success through KPIs including user adoption rates, task completion time, system uptime & reliability, data quality & insights, ROI from automation, user satisfaction scores, conversion rates, and engagement metrics. Regular usability testing and user feedback help validate design decisions.'
        },
        {
            question: 'What is included in your design system development?',
            answer: 'Our design systems include component libraries, style guides with color palettes and typography, pattern libraries, design tokens, documentation, accessibility guidelines, and implementation resources. This ensures design consistency, speeds up development, and simplifies maintenance across products.'
        }
    ];

    // Key Components from Reference
    const keyComponents = [
        {
            title: 'Easy-to-Use Interface',
            description: 'Ensure your software supports quick user adoption and efficient task completion.',
            features: ['Minimal clicks for frequent actions', 'Intuitive layout with clear navigation'],
            icon: <Settings />,
            color: '#60a5fa'
        },
        {
            title: 'Scalable Architecture',
            description: 'Your software should grow with your business without performance bottlenecks.',
            features: ['Supports high-volume transactions', 'Modular structure for future upgrades'],
            icon: <LineChart />,
            color: '#34d399'
        },
        {
            title: 'Strong Security Controls',
            description: 'Protect critical enterprise data at every touchpoint of your system.',
            features: ['Role-based user access', 'End-to-end encryption protocols'],
            icon: <Lock />,
            color: '#8b5cf6'
        },
        {
            title: 'Real-Time Data Access',
            description: 'Enable your teams to make faster, smarter decisions using live system data.',
            features: ['Instant reporting dashboards', 'Continuous database syncing'],
            icon: <BarChart />,
            color: '#f59e0b'
        },
        {
            title: 'Seamless Integration',
            description: 'Your enterprise solution should connect easily with existing tools and platforms.',
            features: ['Pre-built API compatibility', 'No-code third-party app connectors'],
            icon: <GitBranch />,
            color: '#ef4444'
        },
        {
            title: 'Accessibility Compliance',
            description: 'Ensure your design is usable by people with diverse abilities and disabilities.',
            features: ['WCAG 2.1 compliance', 'Screen reader optimization'],
            icon: <Eye />,
            color: '#06b6d4'
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
                                <Sparkles size={18} /> User-Centric Design
                            </div>
                            <h1 className={styles.mainTitle}>
                                Product <span className={styles.highlight}>UI/UX Design</span> Services
                            </h1>
                            <p className={styles.subheadline}>
                                We design products that look great and are user-centric
                            </p>
                            <p className={styles.heroDescription}>
                                From wireframes to interactive prototypes, we create user-friendly experiences 
                                that keep people engaged and aligned with your business goals—so every interaction feels effortless.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className={styles.buttonContainer}
                        >
                            <Link href="/contact" className={styles.ctaButton}>
                                Start Your Design Project
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Testimonial Card */}
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
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                                        alt={testimonial.name}
                                        width={100}
                                        height={100}
                                        className={styles.clientImage}
                                    />
                                </div>
                            </div>
                            
                            <div className={styles.testimonialContent}>
                                <MessageSquare className={styles.quoteIcon} />
                                <p className={styles.testimonialText}>"{testimonial.content}"</p>
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
                                        <div className={styles.ratingText}>Exceptional Design</div>
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

            {/* ===== TRUSTED BY ===== */}
            <section className={styles.trustedSection}>
                <div className={styles.sectionContent}>
                    <p className={styles.trustedLabel}>Trusted by startups and Fortune 500 companies</p>
                    <div className={styles.trustedLogos}>
                        {['Google', 'Microsoft', 'Amazon', 'Spotify', 'Airbnb', 'Uber'].map((company, idx) => (
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

            {/* ===== DESIGN SERVICES ===== */}
            <section className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our Product <span className={styles.titleHighlight}>UI/UX Design</span> Services
                    </h2>
                    <p className={styles.sectionDescription}>
                        Increase user retention with UI/UX design services by BBNTech. We create innovative, 
                        custom-design interfaces to propel your brand forward and boost user retention.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {designServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className={styles.serviceCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.serviceHeader}>
                                <div className={styles.serviceIconWrapper} style={{ 
                                    backgroundColor: `${service.color}15`, 
                                    color: service.color 
                                }}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                            </div>
                            
                            <p className={styles.serviceDescription}>{service.description}</p>
                            
                            <div className={styles.serviceFeatures}>
                                <h4 className={styles.featuresTitle}>Key Features:</h4>
                                <ul className={styles.featuresList}>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className={styles.featureItem}>
                                            <CheckCircle className={styles.checkIcon} style={{ color: service.color }} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.serviceDeliverables}>
                                <h4 className={styles.deliverablesTitle}>Deliverables:</h4>
                                <div className={styles.deliverablesTags}>
                                    {service.deliverables.map((item, idx) => (
                                        <span key={idx} className={styles.deliverableTag} style={{ 
                                            backgroundColor: `${service.color}10`
                                        }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.serviceBenefit}>
                                <div className={styles.benefitIcon} style={{ backgroundColor: service.color }}>
                                    <TrendingUp size={16} />
                                </div>
                                <span className={styles.benefitText}>{service.benefits}</span>
                            </div>

                            <Link href={`/services/design/${service.id}`} className={styles.learnMoreLink}>
                                View Case Study
                                <ChevronRight className={styles.linkIcon} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== STANDARD UI vs UX COMPARISON ===== */}
            <section className={styles.comparisonSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleHighlight}>UI vs UX</span> Design Comparison
                    </h2>
                    <p className={styles.sectionDescription}>
                        Understanding the distinct roles and complementary nature of UI and UX in creating successful digital products.
                    </p>
                </div>

                <div className={styles.comparisonTable}>
                    <div className={styles.tableHeader}>
                        <div className={styles.headerCell}>Aspect</div>
                        <div className={styles.headerCell} style={{ backgroundColor: '#60a5fa20', color: '#60a5fa' }}>
                            <div className={styles.cellIcon}><Brush size={20} /></div>
                            User Interface (UI)
                        </div>
                        <div className={styles.headerCell} style={{ backgroundColor: '#34d39920', color: '#34d399' }}>
                            <div className={styles.cellIcon}><Brain size={20} /></div>
                            User Experience (UX)
                        </div>
                    </div>

                    {uiUxComparison.map((row, index) => (
                        <div key={index} className={styles.tableRow}>
                            <div className={styles.rowAspect}>
                                <span className={styles.aspectTitle}>{row.aspect}</span>
                            </div>
                            
                            <div className={styles.rowUi} style={{ borderLeft: `4px solid #60a5fa` }}>
                                <div className={styles.cellHeader}>
                                    <div className={styles.uiBadge}>UI</div>
                                    <p className={styles.cellDescription}>{row.ui.description}</p>
                                </div>
                                <ul className={styles.cellDetails}>
                                    {row.ui.details.map((detail, idx) => (
                                        <li key={idx}>
                                            <Circle size={8} style={{ color: '#60a5fa' }} />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className={styles.rowUx} style={{ borderLeft: `4px solid #34d399` }}>
                                <div className={styles.cellHeader}>
                                    <div className={styles.uxBadge}>UX</div>
                                    <p className={styles.cellDescription}>{row.ux.description}</p>
                                </div>
                                <ul className={styles.cellDetails}>
                                    {row.ux.details.map((detail, idx) => (
                                        <li key={idx}>
                                            <Circle size={8} style={{ color: '#34d399' }} />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.comparisonNote}>
                    <div className={styles.noteIcon}>💡</div>
                    <p><strong>Note:</strong> While UI and UX have distinct focuses, they work together to create successful products. 
                    Great UI enhances good UX, and excellent UX requires thoughtful UI.</p>
                </div>
            </section>

            {/* ===== IMPORTANCE OF UI/UX DESIGN ===== */}
            <section className={styles.importanceSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Why <span className={styles.titleHighlight}>UI/UX Design</span> Matters
                    </h2>
                    <p className={styles.sectionDescription}>
                        Investing in quality design delivers measurable business outcomes and exceptional user experiences.
                    </p>
                </div>

                <div className={styles.importanceGrid}>
                    {designImportance.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.importanceCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.importanceIcon} style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <div className={styles.impactBadge} style={{ backgroundColor: item.color }}>
                                {item.impact}
                            </div>
                            <h4 className={styles.importanceTitle}>{item.title}</h4>
                            <p className={styles.importanceDescription}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== DESIGN PROCESS ===== */}
            <section className={styles.processSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our UI/UX Design <span className={styles.titleHighlight}>Process</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        A systematic, user-centered approach following industry best practices and agile methodologies.
                    </p>
                </div>

                <div className={styles.processTimeline}>
                    {designProcess.map((stage, index) => (
                        <div key={stage.stage} className={styles.processStage}>
                            <div className={styles.stageIndicator}>
                                <div className={styles.stageNumber}>0{stage.stage}</div>
                                <div className={styles.stageIcon} style={{ backgroundColor: stage.color }}>
                                    {stage.icon}
                                </div>
                            </div>
                            <div className={styles.stageContent}>
                                <div className={styles.stageHeader}>
                                    <h4 className={styles.stageTitle}>{stage.title}</h4>
                                    <span className={styles.stageDuration}>{stage.duration}</span>
                                </div>
                                <p className={styles.stageDescription}>{stage.description}</p>
                                <div className={styles.stageOutput}>
                                    <strong>Output:</strong> {stage.output}
                                </div>
                                <div className={styles.stageActivities}>
                                    <span className={styles.activitiesLabel}>Key Activities:</span>
                                    <div className={styles.activityTags}>
                                        {stage.activities.map((activity, idx) => (
                                            <span key={idx} className={styles.activityTag} style={{ 
                                                backgroundColor: `${stage.color}15`
                                            }}>
                                                {activity}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {index < designProcess.length - 1 && (
                                <div className={styles.stageConnector}></div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== KEY COMPONENTS ===== */}
            <section className={styles.componentsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Key Components Every <span className={styles.titleHighlight}>Design Must Include</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        A reliable design isn't just built—it's engineered around your business goals and user needs.
                    </p>
                </div>

                <div className={styles.componentsGrid}>
                    {keyComponents.map((component, index) => (
                        <motion.div
                            key={index}
                            className={styles.componentCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.componentIcon} style={{ backgroundColor: `${component.color}20`, color: component.color }}>
                                {component.icon}
                            </div>
                            <h3 className={styles.componentTitle}>{component.title}</h3>
                            <p className={styles.componentDescription}>{component.description}</p>
                            <ul className={styles.componentFeatures}>
                                {component.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={16} style={{ color: component.color }} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== EXPANDED DESIGN TOOLS (6 columns) ===== */}
            <section className={styles.toolsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Design Tools & <span className={styles.titleHighlight}>Technologies</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We use industry-leading tools across all design disciplines to create, test, and deliver exceptional solutions.
                    </p>
                </div>

                <div className={styles.toolsGrid}>
                    {designTools.map((tool, index) => (
                        <div key={index} className={styles.toolCategory} style={{ borderTopColor: tool.color }}>
                            <div className={styles.toolHeader}>
                                <div className={styles.toolIcon} style={{ color: tool.color }}>
                                    {tool.icon}
                                </div>
                                <div>
                                    <h4 className={styles.toolTitle}>{tool.category}</h4>
                                    <p className={styles.toolDescription}>{tool.description}</p>
                                </div>
                            </div>
                            <div className={styles.toolList}>
                                {tool.tools.map((item, idx) => (
                                    <div key={idx} className={styles.toolItem}>
                                        <div className={styles.toolName}>{item.name}</div>
                                        <div className={styles.toolType} style={{ backgroundColor: `${tool.color}15` }}>
                                            {item.type}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className={styles.whyChooseSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionWhiteMust}>
                        Why Choose <span className={styles.titleHighlightWhite}>BBNTech</span> for Design
                    </h2>
                    <p className={styles.sectionDescriptionWhite}>
                        With years of industry-relevant experience, our team deeply understands users' needs 
                        and delivers designs that captivate and convert.
                    </p>
                </div>

                <div className={styles.whyChooseGrid}>
                    {whyChooseUs.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.chooseCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            style={{ borderLeftColor: item.color }}
                        >
                            <div className={styles.chooseIconWrapper} style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <h3 className={styles.chooseTitle}>{item.title}</h3>
                            <p className={styles.chooseDescription}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== INDUSTRIES SECTION ===== */}
            <section className={styles.industriesSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>Industries We Cater To</h2>
                        <p>Partnering with businesses in diverse sectors to unlock new avenues for growth and innovation</p>
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
                        UI/UX Design <span className={styles.titleHighlight}>Guide</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Answers to common questions about our design services and process.
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

                {/* Final CTA */}
                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>Ready for a Design Upgrade?</h3>
                        <p className={styles.ctaDescription}>
                            We help you increase your product's usability and appeal with cutting-edge design practices.
                            Your vision is our next project.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Start Design Consultation
                                <ChevronRight className={styles.buttonIcon} />
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}