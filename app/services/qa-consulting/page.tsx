'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Search, Shield, Zap, TrendingUp, ChevronRight,
    Award, MessageSquare, Sparkles, Star, HelpCircle,
    CheckCircle, Settings, TestTube,
    Target, Users, Clock, DollarSign,
    Cpu, ClipboardList, GitMerge,
} from 'lucide-react';
import styles from './qa-consulting.module.css';

export default function QAStrategyConsultingPage() {
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const testimonial = {
        name: 'Jonathan Miller',
        role: 'CTO, FinTech Solutions Inc.',
        content: 'Outstanding results, clear communication, and a dedicated team. ValueCoders QA consulting transformed our testing, achieving a 95% reduction in bugs and cutting time-to-market by 40%.',
        rating: 5,
        project: 'Enterprise Financial Platform'
    };

    const qaServices = [
        {
            id: 1,
            title: 'QA Process Setup',
            description: 'Get your robust QA process setup: Analyze your software specifics, design testing strategy, estimate time and costs.',
            icon: <Settings className={styles.serviceIcon} />,
            image: 'https://images.unsplash.com/photo-1560264357-8d9202250f21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHF1YWxpdHklMjBhc3N1cmFuY2V8ZW58MHx8MHx8fDA%3D',
            color: '#df920bff',
            features: ['Project Analysis', 'Strategy Design', 'Cost Estimation']
        },
        {
            id: 2,
            title: 'QA Process Audit',
            description: 'Get valuable insights with complete QA audit: Examine current processes, reveal bottlenecks, recommend improvements.',
            icon: <Search className={styles.serviceIcon} />,
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cXVhbGl0eSUyMGFzc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
            color: '#34d399',
            features: ['Process Examination', 'Bottleneck Analysis', 'Improvement Plan']
        },
        {
            id: 3,
            title: 'QA Process Improvement',
            description: 'Enhance your QA process with tailored consulting: Identify problems, work out mitigation strategies, implement improvements.',
            icon: <TrendingUp className={styles.serviceIcon} />,
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
            color: '#8b5cf6',
            features: ['Problem Identification', 'Strategy Development', 'Implementation Support']
        },
        {
            id: 4,
            title: 'Pre-Certification QA Aid',
            description: 'Assist in success with pre-certification QA support: Outline required certifications, advise on improvements, create compliance roadmap.',
            icon: <Shield className={styles.serviceIcon} />,
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVhbGl0eSUyMGFzc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
            color: '#ef4444',
            features: ['Compliance Audit', 'Certification Roadmap', 'Standards Adherence']
        },
        {
            id: 5,
            title: 'QA Testing Automation',
            description: 'Accelerate testing with our automation expertise: Design automation strategy, setup test data generation, integrate into CI/CD.',
            icon: <Zap className={styles.serviceIcon} />,
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
            color: '#3b82f6',
            features: ['Automation Strategy', 'CI/CD Integration', 'Framework Design']
        },
        {
            id: 6,
            title: 'Software-Specific Testing',
            description: 'Tailored testing strategies for every software type: Design effective scenarios, assess automation feasibility.',
            icon: <TestTube className={styles.serviceIcon} />,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
            color: '#06b6d4',
            features: ['Custom Scenarios', 'Automation Feasibility', 'Platform Testing']
        }
    ];

    const strategicBenefits = [
        {
            id: 1,
            title: '95% Bug Reduction',
            description: 'Build a robust quality framework that catches defects at the source, ensuring your final product is nearly flawless.',
            icon: <Shield className={styles.benefitIcon} />,
            metric: '95%',
            color: '#34d399'
        },
        {
            id: 2,
            title: '40% Faster Time-to-Market',
            description: 'Accelerate time to market with streamlined QA processes that eliminate bottlenecks without quality loss.',
            icon: <Zap className={styles.benefitIcon} />,
            metric: '40%',
            color: '#f59e0b'
        },
        {
            id: 3,
            title: 'Optimized Test Coverage',
            description: 'Ensure flawless software with optimized QA testing that identifies and eliminates defects for smooth launches.',
            icon: <Target className={styles.benefitIcon} />,
            metric: '100%',
            color: '#8b5cf6'
        },
        {
            id: 4,
            title: 'Cost-Effective Solutions',
            description: 'Achieve exceptional quality with cost-effective solutions and skilled professionals delivering precise results.',
            icon: <DollarSign className={styles.benefitIcon} />,
            metric: '30%',
            color: '#ef4444'
        },
        {
            id: 5,
            title: 'Organized Processes',
            description: 'Build a tailored QA strategy with structured testing processes ensuring quality at every stage.',
            icon: <ClipboardList className={styles.benefitIcon} />,
            metric: '100%',
            color: '#3b82f6'
        },
        {
            id: 6,
            title: 'Manual & Auto Balance',
            description: 'Leverage the perfect mix of manual and automated testing for early defect detection and efficiency.',
            icon: <GitMerge className={styles.benefitIcon} />,
            metric: '50:50',
            color: '#06b6d4'
        },
        {
            id: 7,
            title: 'Enhanced Security',
            description: 'Implement security testing protocols to safeguard your applications against vulnerabilities and threats.',
            icon: <Shield className={styles.benefitIcon} />,
            metric: '99.9%',
            color: '#10b981'
        },
        {
            id: 8,
            title: 'Improved User Satisfaction',
            description: 'Deliver high-quality software that meets user expectations, leading to increased satisfaction and loyalty.',
            icon: <Users className={styles.benefitIcon} />,
            metric: '98%',
            color: '#8b5cf6'
        },
    ];

    const processSteps = [
        {
            id: 1,
            title: 'Software Kick-off',
            description: 'Dive into bi-weekly sprints and rollouts aligned with project timelines.'
        },
        {
            id: 2,
            title: 'Task Execution',
            description: 'Combined team tackles tasks, fulfilling user stories and sprint goals.'
        },
        {
            id: 3,
            title: 'Daily Stand-ups',
            description: 'Daily check-ins led by the Scrum Master to discuss progress and tackle challenges.'
        },
        {
            id: 4,
            title: 'Feature Quality Check',
            description: 'Quality Engineers rigorously test new features, ensuring seamless integration.'
        },
        {
            id: 5,
            title: 'Backlog Updates',
            description: 'Our team keeps the sprint backlog updated, staying on track to meet objectives.'
        },
        {
            id: 6,
            title: 'Sprint Reflections',
            description: 'Post-sprint reflections to refine strategies and enhance future sprints.'
        }
    ];

    const whyChooseUs = [
        {
            id: 1,
            title: "India's Top 1% Software Talent",
            description: 'Access elite QA consultants with proven expertise in cutting-edge testing methodologies.',
            icon: <Award className={styles.chooseIcon} />
        },
        {
            id: 2,
            title: 'Trusted by Startups to Fortune 500',
            description: 'Proven track record with businesses of all sizes across diverse industries.',
            icon: <Users className={styles.chooseIcon} />
        },
        {
            id: 3,
            title: 'Idea to Deployment, We Handle All',
            description: 'End-to-end QA solutions from initial strategy to final implementation.',
            icon: <Cpu className={styles.chooseIcon} />
        },
        {
            id: 4,
            title: 'Time-Zone Friendly Global Presence',
            description: 'Seamless collaboration across time zones with our distributed expert teams.',
            icon: <Clock className={styles.chooseIcon} />
        },
        {
            id: 5,
            title: 'Top-tier Data Security Protocols',
            description: 'Enterprise-grade security measures to protect your sensitive information.',
            icon: <Shield className={styles.chooseIcon} />
        },
        {
            id: 6,
            title: 'On-time Delivery, No Surprises',
            description: 'Reliable project timelines with transparent communication throughout.',
            icon: <CheckCircle className={styles.chooseIcon} />
        }
    ];

    const industries = [
        {
            id: 1,
            name: 'Healthcare',
            description: 'Building smart healthcare solutions with HIPAA compliance, medical device testing, and EHR validation.',
            icon: '🏥',
            color: '#34d399',
            solutions: ['HIPAA Compliance', 'Medical Device Testing', 'EHR Validation']
        },
        {
            id: 2,
            name: 'Fintech & Banking',
            description: 'Disrupting traditional finance with PCI DSS compliance, fraud detection, and transaction security.',
            icon: '💰',
            color: '#f59e0b',
            solutions: ['PCI DSS Compliance', 'Fraud Detection', 'Transaction Security']
        },
        {
            id: 3,
            name: 'Retail & eCommerce',
            description: 'Enhancing retail journeys with payment gateway testing, inventory management, and user experience.',
            icon: '🛍️',
            color: '#8b5cf6',
            solutions: ['Payment Gateway Testing', 'Inventory Management', 'User Experience']
        },
        {
            id: 4,
            name: 'Media & Entertainment',
            description: 'Custom tech to empower brands with streaming quality, content delivery, and platform compatibility.',
            icon: '🎬',
            color: '#ef4444',
            solutions: ['Streaming Quality', 'Content Delivery', 'Platform Compatibility']
        },
        {
            id: 5,
            name: 'Education & eLearning',
            description: 'Shaping digital learning with LMS testing, accessibility compliance, and scalability testing.',
            icon: '🎓',
            color: '#3b82f6',
            solutions: ['LMS Testing', 'Accessibility Compliance', 'Scalability Testing']
        },
        {
            id: 6,
            name: 'Enterprise Software',
            description: 'Streamlining business growth with ERP testing, CRM validation, and system integration.',
            icon: '🏢',
            color: '#06b6d4',
            solutions: ['ERP Testing', 'CRM Validation', 'System Integration']
        }
    ];

    const pricingTiers = [
        {
            id: 1,
            range: '$5K-15K',
            title: 'Basic QA Audit',
            description: 'Process audit and improvement suggestions for small-scale projects.',
            color: '#34d399'
        },
        {
            id: 2,
            range: '$15K-30K',
            title: 'End-to-End Setup',
            description: 'Complete QA strategy, planning, and execution for growing businesses.',
            color: '#f59e0b'
        },
        {
            id: 3,
            range: '$35K-50K',
            description: 'Test automation framework design with continuous integration support.',
            title: 'Automation Framework',
            color: '#8b5cf6'
        },
        {
            id: 4,
            range: '$50K-70K+',
            title: 'Enterprise Compliance',
            description: 'Pre-certification QA consulting ensuring compliance with industry standards.',
            color: '#ef4444'
        }
    ];

    const companyStats = [
        { value: '700+', label: 'Full-time Staff' },
        { value: '20+', label: 'Years Experience' },
        { value: '4500+', label: 'Satisfied Customers' },
        { value: '95%', label: 'Client Retention' }
    ];

    const faqs = [
        {
            question: 'Why should I choose professional QA consulting services?',
            answer: 'Professional QA consulting brings 20+ years of expertise, industry best practices, and proven methodologies that transform your testing processes.'
        },
        {
            question: 'How much does QA consulting typically cost?',
            answer: 'Costs vary based on project scope: $5,000–$15,000 for basic audits, $15,000–$30,000 for end-to-end setup, $35,000–$50,000 for automation frameworks, and $50,000–$70,000+ for enterprise compliance.'
        },
        {
            question: 'What industries benefit most from QA consulting?',
            answer: 'Healthcare, Fintech, eCommerce, Education, and Enterprise Software benefit significantly from specialized QA consulting with tailored solutions.'
        },
        {
            question: 'How do you ensure QA process improvements are sustainable?',
            answer: 'We implement structured processes with comprehensive documentation, team training, and ongoing support. Our approach includes establishing KPIs, continuous monitoring, regular audits, and optimization cycles to ensure improvements are maintained and enhanced long-term.'
        },
        {
            question: 'What is your typical engagement timeline?',
            answer: 'Basic audits: 2-4 weeks. Full implementations: 8-12 weeks. Enterprise transformations: 3-6 months. We provide detailed timelines during initial assessment based on your specific requirements, current process maturity, and desired outcomes.'
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroText}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className={styles.sparkleContainer}
                        >
                            <Sparkles className={styles.sparkleIcon} />
                            <span className={styles.heroBadge}>95% Bug Reduction</span>
                        </motion.div>

                        <h1 className={styles.heroTitle}>
                            Transform Quality with <span className={styles.gradientText}>Expert QA Consulting</span>
                        </h1>

                        <p className={styles.heroDescription}>
                            Optimize your software quality with expert QA consulting. We design tailored QA processes
                            or enhance existing ones to improve performance, ensure compliance, and deliver reliable outcomes.
                        </p>

                        <div className={styles.heroButtons}>
                            <Link href="/contact" className={styles.primaryButton}>
                                Start Your QA Transformation
                                <ChevronRight className={styles.buttonIcon} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Testimonial Card */}
                    <motion.div
                        className={styles.heroTestimonial}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialHeader}>
                                <div className={styles.testimonialInfo}>
                                    <div className={styles.testimonialImage}>
                                        <Image
                                            src="/images/testimonial1.jpg"
                                            alt={testimonial.name}
                                            width={80}
                                            height={80}
                                            className={styles.clientImage}
                                        />
                                    </div>
                                    <div>
                                        <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                                        <p className={styles.testimonialRole}>{testimonial.role}</p>
                                        <div className={styles.testimonialRating}>
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className={styles.starIcon} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <MessageSquare className={styles.quoteIcon} />
                            <p className={styles.testimonialContent}>{testimonial.content}</p>

                            <div className={styles.testimonialFooter}>
                                <div className={styles.projectBadge}>
                                    <Award className={styles.badgeIcon} />
                                    {testimonial.project}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section className={styles.trustedSection}>
                <div className={styles.sectionHeader}>
                    <p className={styles.trustedLabel}>Trusted by startups and Fortune 500 companies</p>
                    <div className={styles.trustedLogos}>
                        {['FinTech Corp', 'HealthPlus', 'EduGlobal', 'RetailChain', 'ManufacturePro'].map((company, idx) => (
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

            {/* Strategic Benefits Banner */}
            <section className={styles.benefitsBanner}>
                <div className={styles.benefitsContent}>
                    <h2 className={styles.benefitsTitle}>
                        Achieve a <span className={styles.benefitsHighlight}>95% Reduction in Bugs</span>
                    </h2>
                    <p className={styles.benefitsDescription}>
                        We build a robust quality framework that catches defects at the source,
                        ensuring your final product is nearly flawless.
                    </p>

                    <div className={styles.statsGrid}>
                        {strategicBenefits.map((benefit) => (
                            <motion.div
                                key={benefit.id}
                                className={styles.statCard}
                                style={{ borderColor: benefit.color }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.statIcon} style={{ color: benefit.color }}>
                                    {benefit.icon}
                                </div>
                                <div className={styles.statMetric}>{benefit.metric}</div>
                                <h3 className={styles.statTitle}>{benefit.title}</h3>
                                <p className={styles.statDescription}>{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main QA Services */}
            <section className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our <span className={styles.titleHighlight}>QA Consulting</span> Services
                    </h2>
                    <p className={styles.sectionDescription}>
                        As India's leading software QA consulting firm, we combine deep expertise with
                        innovative strategies to deliver tailored testing solutions.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {qaServices.map((service) => (
                        <motion.div
                            key={service.id}
                            className={styles.serviceCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover="hover"
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className={styles.serviceImageContainer}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className={styles.serviceImage}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={styles.imageOverlay} style={{ backgroundColor: `${service.color}40` }}></div>

                                <div className={styles.serviceIconWrapper} style={{ backgroundColor: service.color }}>
                                    {service.icon}
                                </div>

                                <div className={styles.serviceContent}>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceExcerpt}>{service.description}</p>

                                    <div className={styles.serviceFeatures}>
                                        <ul className={styles.featuresList}>
                                            {service.features.map((feat, idx) => (
                                                <li key={idx} className={styles.featureItem}>
                                                    <CheckCircle className={styles.featureIcon} style={{ color: service.color }} />
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link href={`/services/qa/${service.id}`} className={styles.serviceLink} style={{ backgroundColor: service.color }}>
                                        Learn More
                                        <ChevronRight className={styles.linkIcon} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Our Process Section */}
            <section className={styles.processSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our QA <span className={styles.titleHighlight}>Process</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We specialize in engineering custom software that's both stable and secure,
                        using a structured agile approach.
                    </p>
                </div>

                <div className={styles.processGrid}>
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className={styles.processCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.processNumber}>0{step.id}</div>
                            <h3 className={styles.processTitle}>{step.title}</h3>
                            <p className={styles.processDescription}>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whyChooseSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitleWhite}>
                        Why Choose <span className={styles.titleHighlightWhite}>BBNTech</span> for QA Consulting
                    </h2>
                    <p className={styles.sectionDescriptionWhite}>
                        With 20+ years of experience, we help companies evaluate and improve QA processes,
                        introduce smart testing, and design robust QA frameworks from scratch.
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
                            whileHover={{ y: -10 }}
                        >
                            <div className={styles.chooseIconWrapper}>
                                {item.icon}
                            </div>
                            <h3 className={styles.chooseTitle}>{item.title}</h3>
                            <p className={styles.chooseDescription}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Company Stats */}
                <div className={styles.statsSection}>
                    {companyStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className={styles.statItem}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className={styles.statValue}>{stat.value}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Industries Section */}
            <section className={styles.industriesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Industries We <span className={styles.titleHighlight}>Cater To</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Partnering with businesses in diverse sectors to unlock new avenues for growth,
                        innovation, and quality excellence.
                    </p>
                </div>

                <div className={styles.industriesGrid}>
                    {industries.map((industry) => (
                        <motion.div
                            key={industry.id}
                            className={styles.industryCard}
                            style={{ borderLeftColor: industry.color }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className={styles.industryHeader}>
                                <div className={styles.industryIcon} style={{ backgroundColor: `${industry.color}20`, color: industry.color }}>
                                    {industry.icon}
                                </div>
                                <h3 className={styles.industryName}>{industry.name}</h3>
                            </div>

                            <p className={styles.industryDescription}>{industry.description}</p>

                            <div className={styles.solutionsList}>
                                <h4 className={styles.solutionsTitle}>Key Solutions:</h4>
                                <ul className={styles.solutionsItems}>
                                    {industry.solutions.map((solution, idx) => (
                                        <li key={idx} className={styles.solutionItem}>
                                            <CheckCircle className={styles.solutionIcon} style={{ color: industry.color }} />
                                            <span>{solution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.buttonWrapper}>
                                <Link href={`/industries/${industry.id}`} className={styles.industryLink} style={{ backgroundColor: industry.color }}>
                                    Explore Solutions
                                    <ChevronRight className={styles.linkIcon} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className={styles.pricingSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Cost of <span className={styles.titleHighlight}>QA Consulting Services</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Every QA engagement is different, shaped by your testing needs, project scale,
                        and required expertise.
                    </p>
                </div>

                <div className={styles.pricingGrid}>
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={tier.id}
                            className={styles.pricingCard}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ borderTopColor: tier.color }}
                        >
                            <div className={styles.pricingHeader}>
                                <div className={styles.priceRange}>{tier.range}</div>
                                <h3 className={styles.pricingTitle}>{tier.title}</h3>
                                <p className={styles.pricingDescription}>{tier.description}</p>
                            </div>

                            <Link href="/contact" className={styles.pricingButton} style={{ backgroundColor: tier.color }}>
                                Get Started
                                <ChevronRight className={styles.buttonIcon} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Frequently Asked <span className={styles.titleHighlight}>Questions</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Find answers to common questions about our QA consulting services and solutions.
                    </p>
                </div>

                <div className={styles.faqGrid}>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={styles.faqCard}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
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
                        <h3 className={styles.ctaTitle}>Ready to Transform Your QA Processes?</h3>
                        <p className={styles.ctaDescription}>
                            Your quality vision is our next project. Tell us about your quality goals,
                            and we'll show you exactly how to make them a reality for your business.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Start Free Consultation
                                <ChevronRight className={styles.buttonIcon} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}