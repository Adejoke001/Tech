'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield, Lock, AlertTriangle, FileCheck,
    Server, Cloud, Database, GitMerge, 
    CheckCircle, Award, MessageSquare, Sparkles,
    ChevronRight, Code, Activity, TrendingUp, 
    FileText, RefreshCw, Zap, HelpCircle, 
    ArrowRight, Eye, ClipboardCheck, 
    Network, Search, BarChart3, ShieldAlert, FileCode,
    Workflow, HeartPulse, Globe2, CreditCard, 
    BookOpen, Target, UserCheck
} from 'lucide-react';
import styles from './cybersecurity.module.css';

export default function CybersecurityServicesPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

    // Testimonial matching the enterprise software page layout
    const testimonial = {
        name: 'Sarah Chen',
        role: 'CISO, Global Financial Corp',
        content: 'BBNTech transformed our security posture with their comprehensive governance framework. We saw 40% fewer security incidents within the first quarter.',
        rating: 5,
        project: 'Enterprise Security Governance'
    };

    // Core Cybersecurity Services (expanded from all four pages)
    const cybersecurityServices = [
        {
            id: 1,
            title: 'Security Testing & Penetration',
            description: 'Comprehensive security assessments to identify vulnerabilities before attackers do.',
            icon: <Shield className={styles.serviceIcon} />,
            color: '#3B82F6',
            features: ['Vulnerability assessments', 'Penetration testing', 'Application security reviews', 'Network security audits'],
            detailedDescription: 'We conduct thorough security testing including ethical hacking, vulnerability scanning, and risk assessment to protect your digital assets. Our team follows OWASP guidelines and industry best practices.'
        },
        {
            id: 2,
            title: 'IT Compliance Services',
            description: 'Ensure regulatory compliance with frameworks like ISO 27001, SOC 2, GDPR, and HIPAA.',
            icon: <FileCheck className={styles.serviceIcon} />,
            color: '#10B981',
            features: ['Compliance gap analysis', 'Policy development', 'Audit preparation', 'Regulatory reporting'],
            detailedDescription: 'Navigate complex regulatory landscapes with our compliance expertise, reducing legal risks and building customer trust. We help you achieve and maintain compliance with global standards.'
        },
        {
            id: 3,
            title: 'Risk Management Solutions',
            description: 'Proactive identification, assessment, and mitigation of cybersecurity risks.',
            icon: <AlertTriangle className={styles.serviceIcon} />,
            color: '#8B5CF6',
            features: ['Risk assessment', 'Threat modeling', 'Risk treatment planning', 'Continuous monitoring'],
            detailedDescription: 'Implement enterprise risk management frameworks to protect against operational, financial, and reputational risks. Our solutions help you make data-driven security decisions.'
        },
        {
            id: 4,
            title: 'Quality & Security Governance',
            description: 'Integrated governance framework for security, quality, and compliance.',
            icon: <Lock className={styles.serviceIcon} />,
            color: '#F59E0B',
            features: ['Governance framework design', 'Policy enforcement', 'Security metrics', 'Compliance tracking'],
            detailedDescription: 'Establish governance frameworks that align security, quality, and business objectives for sustainable protection and competitive advantage.'
        },
        {
            id: 5,
            title: 'Incident Response',
            description: 'Rapid response and recovery from security incidents and breaches.',
            icon: <Zap className={styles.serviceIcon} />,
            color: '#EC4899',
            features: ['Incident response planning', 'Forensic analysis', 'Breach containment', 'Recovery procedures'],
            detailedDescription: 'Minimize damage from security incidents with our rapid response capabilities and post-incident improvement plans. We help you build resilient security operations.'
        },
        {
            id: 6,
            title: 'Security Architecture',
            description: 'Design and implement robust security architectures for applications and infrastructure.',
            icon: <Network className={styles.serviceIcon} />,
            color: '#06B6D4',
            features: ['Security blueprint design', 'Zero-trust architecture', 'Cloud security', 'Identity management'],
            detailedDescription: 'Build security into your architecture from the ground up with defense-in-depth principles and modern security patterns.'
        }
    ];

    // Governance Framework as a grid (not tabs)
    const governanceFramework = [
        {
            step: 1,
            title: 'Governance Baseline & Maturity Audit',
            description: 'Assess current security posture, compliance maturity, and define baseline KPIs through structured assessments and maturity audits.',
            icon: <FileText />,
            color: '#3B82F6'
        },
        {
            step: 2,
            title: 'Software Quality Governance Framework',
            description: 'Build a culture of predictable quality and accountability across your development and release cycles with automated testing.',
            icon: <Code />,
            color: '#10B981'
        },
        {
            step: 3,
            title: 'Data Security Governance',
            description: 'Protect business-critical assets and customer trust through robust data security frameworks aligned with GDPR, HIPAA, and ISO 27001.',
            icon: <Database />,
            color: '#8B5CF6'
        },
        {
            step: 4,
            title: 'Enterprise Governance and Compliance Framework',
            description: 'Ensure consistent governance and compliance across teams, systems, and delivery units for enterprise-grade control.',
            icon: <ClipboardCheck />,
            color: '#F59E0B'
        },
        {
            step: 5,
            title: 'Continuous Audits & Optimization Loops',
            description: 'Turn compliance data into continuous improvement through regular audits, insights, and governance refinements.',
            icon: <RefreshCw />,
            color: '#EC4899'
        },
        {
            step: 6,
            title: 'Cloud Security Governance',
            description: 'Extend governance controls to cloud environments ensuring visibility and compliance across multi-cloud architectures.',
            icon: <Cloud />,
            color: '#06B6D4'
        }
    ];

    // Risk Management Solutions (expanded to 6 columns)
    const riskManagementSolutions = [
        {
            category: 'Risk & Strategy Assessment',
            color: '#3B82F6',
            items: ['Climate risk analytics', 'Regulatory compliance guidance', 'Strategic planning support', 'Risk communication frameworks'],
            description: 'Navigate emerging challenges like climate shifts and cyber threats with global risk outlook.'
        },
        {
            category: 'Solution Implementation',
            color: '#10B981',
            items: ['Workflow automation', 'Custom solution development', 'Software deployment', 'Technology optimization'],
            description: 'Optimize catastrophe management by speeding "time to value" and mitigating implementation risks.'
        },
        {
            category: 'Business Management',
            color: '#8B5CF6',
            items: ['Agile risk modeling', 'Regulatory demand support', 'Portfolio risk analysis', 'Exposure data enrichment'],
            description: 'Forge an agile modeling and risk management setup with global analyst support.'
        },
        {
            category: 'Real-time Monitoring',
            color: '#F59E0B',
            items: ['Instant threat detection', 'Proactive alerts', 'Operational continuity', 'Compliance monitoring'],
            description: '24/7 monitoring with immediate notifications for emerging risks.'
        },
        {
            category: 'Predictive Modeling',
            color: '#EC4899',
            items: ['Historical data analysis', 'Risk forecasting algorithms', 'Early warning systems', 'Scenario analysis'],
            description: 'Utilize historical data and advanced algorithms to forecast potential risks.'
        },
        {
            category: 'Industry Risk Solutions',
            color: '#06B6D4',
            items: ['Sector-specific frameworks', 'Regulatory compliance mapping', 'Industry threat intelligence', 'Best practice implementation'],
            description: 'Tailored risk management for financial, healthcare, manufacturing, and other sectors.'
        }
    ];

    // Expanded Technology Stack
    const securityTechnologyStack = [
        {
            category: 'Security Testing Tools',
            icon: <Shield />,
            color: '#3B82F6',
            technologies: ['Burp Suite', 'Nessus', 'Metasploit', 'OWASP ZAP', 'Nmap', 'Acunetix']
        },
        {
            category: 'Compliance & Governance',
            icon: <FileCheck />,
            color: '#10B981',
            technologies: ['ISO 27001', 'SOC 2', 'GDPR', 'HIPAA', 'PCI DSS', 'NIST']
        },
        {
            category: 'Monitoring & SIEM',
            icon: <Eye />,
            color: '#8B5CF6',
            technologies: ['Splunk', 'ELK Stack', 'ArcSight', 'QRadar', 'Azure Sentinel', 'Sumo Logic']
        },
        {
            category: 'Cloud Security',
            icon: <Cloud />,
            color: '#F59E0B',
            technologies: ['AWS Security Hub', 'Azure Security Center', 'GCP Security', 'CloudTrail', 'Prisma Cloud', 'CrowdStrike']
        },
        {
            category: 'Identity & Access',
            icon: <Lock />,
            color: '#EC4899',
            technologies: ['Okta', 'Azure AD', 'Ping Identity', 'ForgeRock', 'Auth0', 'Keycloak']
        },
        {
            category: 'Risk Management Platforms',
            icon: <AlertTriangle />,
            color: '#06B6D4',
            technologies: ['RiskLens', 'MetricStream', 'Resolver', 'LogicGate', 'SAI Global', 'ProcessUnity']
        }
    ];

    // Security Testing Types (new section)
    const securityTestingTypes = [
        {
            type: 'Vulnerability Assessment',
            description: 'Systematic review of security weaknesses in an information system.',
            icon: <Search />,
            tests: ['Network scanning', 'Port scanning', 'Service enumeration', 'Vulnerability scanning']
        },
        {
            type: 'Penetration Testing',
            description: 'Simulated cyber attack to evaluate system security.',
            icon: <ShieldAlert />,
            tests: ['Web application testing', 'Network penetration testing', 'Social engineering', 'Wireless testing']
        },
        {
            type: 'Security Auditing',
            description: 'Compliance and policy verification against standards.',
            icon: <FileCheck />,
            tests: ['Policy compliance checks', 'Configuration reviews', 'Access control audits', 'Log analysis']
        },
        {
            type: 'Code Review',
            description: 'Manual and automated review of source code for security flaws.',
            icon: <FileCode />,
            tests: ['Static application testing', 'Dynamic application testing', 'Interactive testing', 'Manual code review']
        },
        {
            type: 'Social Engineering Testing',
            description: 'Assess vulnerability to psychological manipulation and phishing attacks.',
            icon: <UserCheck />,
            tests: ['Phishing simulations', 'Employee awareness', 'Physical security', 'Pretexting']
        },
        {
            type: 'Red Teaming',
            description: 'Full-scope simulated attack to test detection and response capabilities.',
            icon: <Target />,
            tests: ['Advanced persistent threats', 'Defense evasion', 'Multi-vector attacks', 'Blue team validation']
        }
    ];

    // IT Compliance Standards (new section)
    const complianceStandards = [
        {
            standard: 'ISO 27001',
            description: 'International standard for information security management systems.',
            icon: <Globe2 />,
            requirements: ['Risk assessment', 'Security controls', 'Continuous improvement', 'Management commitment']
        },
        {
            standard: 'SOC 2',
            description: 'Service Organization Control reporting on security, availability, processing integrity.',
            icon: <BarChart3 />,
            requirements: ['Trust principles', 'Control activities', 'Risk management', 'Monitoring activities']
        },
        {
            standard: 'GDPR',
            description: 'General Data Protection Regulation for EU data protection.',
            icon: <Workflow />,
            requirements: ['Data protection by design', 'Consent management', 'Data subject rights', 'Breach notification']
        },
        {
            standard: 'HIPAA',
            description: 'Health Insurance Portability and Accountability Act for healthcare.',
            icon: <HeartPulse />,
            requirements: ['PHI protection', 'Access controls', 'Audit controls', 'Transmission security']
        },
        {
            standard: 'PCI DSS',
            description: 'Payment Card Industry Data Security Standard for handling credit cards.',
            icon: <CreditCard />,
            requirements: ['Cardholder data protection', 'Vulnerability management', 'Access control', 'Network monitoring']
        },
        {
            standard: 'NIST',
            description: 'National Institute of Standards and Technology cybersecurity framework.',
            icon: <BookOpen />,
            requirements: ['Identify', 'Protect', 'Detect', 'Respond', 'Recover']
        }
    ];

    // Key Benefits/Components
    const securityComponents = [
        {
            title: 'Proactive Risk Mitigation',
            description: 'Predictive modeling to forecast risks and implement preventive measures before incidents occur.',
            icon: <TrendingUp />,
            details: ['Historical data analysis', 'Advanced risk algorithms', 'Early warning systems', 'Preventive controls']
        },
        {
            title: 'Real-time Threat Detection',
            description: 'Continuous monitoring and instant alerts for emerging security threats.',
            icon: <Activity />,
            details: ['24/7 monitoring', 'Instant alert systems', 'Automated response', 'Threat intelligence']
        },
        {
            title: 'Regulatory Compliance',
            description: 'Ensure adherence to global security standards and industry regulations.',
            icon: <CheckCircle />,
            details: ['Multi-standard compliance', 'Audit readiness', 'Policy enforcement', 'Documentation management']
        },
        {
            title: 'Integrated Governance',
            description: 'Unified framework combining security, quality, and compliance governance.',
            icon: <GitMerge />,
            details: ['Cross-functional alignment', 'Unified metrics', 'Centralized control', 'Business integration']
        }
    ];

    // Stats Section
    const securityStats = [
        { value: '40%', label: 'Fewer Security Incidents', icon: <Shield />, description: 'Average reduction post-implementation' },
        { value: '50%', label: 'Faster Audit Cycles', icon: <FileCheck />, description: 'With automated compliance tools' },
        { value: '99.9%', label: 'Uptime Assurance', icon: <Server />, description: 'With security monitoring' },
        { value: '24/7', label: 'Security Monitoring', icon: <Eye />, description: 'Continuous protection' }
    ];

    // Development Process
    // const securityProcess = [
    //     { step: 1, title: 'Security Assessment', description: 'Comprehensive evaluation of current security posture and risks.', icon: <FileText /> },
    //     { step: 2, title: 'Framework Design', description: 'Custom security framework aligned with business objectives.', icon: <Settings /> },
    //     { step: 3, title: 'Implementation', description: 'Deployment of security controls and governance processes.', icon: <Code /> },
    //     { step: 4, title: 'Testing & Validation', description: 'Rigorous security testing and compliance verification.', icon: <ClipboardCheck /> },
    //     { step: 5, title: 'Training & Enablement', description: 'Security awareness training and operational handover.', icon: <Users /> },
    //     { step: 6, title: 'Continuous Monitoring', description: 'Ongoing security monitoring and improvement cycles.', icon: <RefreshCw /> }
    // ];

    // Industries Section (3 columns as requested)
    const industries = [
        {
            name: 'Healthcare',
            icon: '🏥',
            desc: 'Secure, HIPAA-compliant solutions for EHR integration, telehealth platforms, medical device connectivity, and patient data interoperability.',
            image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80',
            color: '#10B981'
        },
        {
            name: 'Retail & eCommerce',
            icon: '🛍️',
            desc: 'Scalable security for payment processing, inventory management, order fulfillment, CRM integration, and personalized shopping experiences.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
            color: '#8B5CF6'
        },
        {
            name: 'Fintech & Banking',
            icon: '🏦',
            desc: 'High-security solutions for payment gateways, banking systems, fraud detection, regulatory compliance, and financial data protection.',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
            color: '#3B82F6'
        },
    ];

    // FAQs
    const faqs = [
        {
            question: 'How long does it take to implement a comprehensive security governance framework?',
            answer: 'Most organizations see measurable improvements within 6-10 weeks. Full implementation typically takes 3-6 months depending on organization size and current maturity level. We follow a phased approach to ensure minimal disruption.'
        },
        {
            question: 'What global security standards do you comply with?',
            answer: 'We align with ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, NIST, OWASP, and other industry-specific standards. Our frameworks are designed to meet multiple compliance requirements simultaneously.'
        },
        {
            question: 'How do you handle real-time threat monitoring and response?',
            answer: 'We implement 24/7 security monitoring with SIEM solutions, automated alerts, and dedicated Security Operations Center (SOC) services. Our incident response team can detect and respond to threats within minutes.'
        },
        {
            question: 'Can your security solutions integrate with our existing DevOps workflows?',
            answer: 'Yes, we specialize in DevSecOps integration. Our security tools and processes seamlessly integrate with CI/CD pipelines, ensuring security is built into the development lifecycle without slowing delivery.'
        },
        {
            question: 'What types of risk management solutions do you offer?',
            answer: 'We provide comprehensive risk management including strategic risk assessment, implementation consulting, business continuity planning, and real-time risk monitoring across operational, financial, and reputational risks.'
        },
        {
            question: 'What ongoing support do you provide after implementation?',
            answer: 'We offer continuous security monitoring, regular compliance audits, framework updates, security training, and 24/7 incident response support. Our partnerships include ongoing optimization and risk assessment.'
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION (Matching enterprise page exactly) ===== */}
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
                                <Sparkles size={18} /> Enterprise-Grade Security
                            </div>
                            <h1 className={styles.mainTitle}>
                                Cybersecurity <span className={styles.highlight}>Services</span>
                            </h1>
                            <p className={styles.subheadline}>
                                Protect, Comply, Govern – Comprehensive Security Solutions for Digital Businesses
                            </p>
                            <p className={styles.heroDescription}>
                                Strengthen your security posture with our integrated cybersecurity services. From risk
                                management to compliance governance, we provide the protection your business needs to
                                operate confidently in today&apos;s threat landscape.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className={styles.buttonContainer}
                        >
                            <Link href="/contact" className={styles.ctaButton}>
                                Secure Your Business
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Testimonial Card */}
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
                                        src="https://plus.unsplash.com/premium_photo-1705018501151-4045c97658a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFufGVufDB8fDB8fHww"
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
                                        <div className={styles.ratingText}>Security Excellence</div>
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
                    <p className={styles.trustedLabel}>Trusted by security-conscious organizations worldwide</p>
                    <div className={styles.trustedLogos}>
                        {['Microsoft', 'IBM Security', 'Cisco', 'Palo Alto', 'Fortinet', 'Check Point'].map((company, idx) => (
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

            {/* ===== CORE SERVICES SECTION ===== */}
            <section className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Comprehensive Cybersecurity <span className={styles.titleHighlight}>Services</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We provide end-to-end cybersecurity solutions that protect your digital assets, ensure compliance,
                        and manage risks across your organization.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {cybersecurityServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className={styles.serviceCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className={styles.serviceHeader}>
                                <div className={styles.serviceIconWrapper} style={{
                                    backgroundColor: `${service.color}20`,
                                    color: service.color
                                }}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                            </div>

                            <p className={styles.serviceDescription}>{service.description}</p>

                            <div className={styles.serviceDetails}>
                                <ul className={styles.detailsList}>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className={styles.detailItem}>
                                            <CheckCircle className={styles.checkIcon} style={{ color: service.color }} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                {hoveredService === service.id && (
                                    <motion.div
                                        className={styles.serviceHoverContent}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                    >
                                        <p>{service.detailedDescription}</p>
                                    </motion.div>
                                )}
                                <Link href={`/services/cybersecurity/${service.id}`} className={styles.learnMoreLink}>
                                    Learn More
                                    <ChevronRight className={styles.linkIcon} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== GOVERNANCE FRAMEWORK SECTION (As Grid) ===== */}
            <section className={styles.frameworkSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Quality & Security <span className={styles.titleHighlight}>Governance Framework</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        A modern Quality and Security Governance framework gives you visibility, compliance, and confidence across every product cycle.
                    </p>
                </div>

                <div className={styles.frameworkGrid}>
                    {governanceFramework.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.frameworkCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ borderTopColor: item.color }}
                        >
                            <div className={styles.frameworkNumber}>0{item.step}</div>
                            <div className={styles.frameworkIcon} style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <h3 className={styles.frameworkTitle}>{item.title}</h3>
                            <p className={styles.frameworkDescription}>{item.description}</p>
                            <div className={styles.frameworkFeatures}>
                                <div className={styles.featureItem}>
                                    <CheckCircle size={16} style={{ color: item.color }} />
                                    <span>Improved audit readiness</span>
                                </div>
                                <div className={styles.featureItem}>
                                    <CheckCircle size={16} style={{ color: item.color }} />
                                    <span>Reduced compliance risks</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== SECURITY TESTING TYPES SECTION (New with background) ===== */}
            <section className={styles.securityTestingSection}>
                <div className={styles.testingOverlay}></div>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Comprehensive Security <span className={styles.titleHighlight}>Testing Services</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Ensure software stability, performance, and compliance across all use cases with our comprehensive testing methodologies.
                        </p>
                    </div>

                    <div className={styles.testingGrid}>
                        {securityTestingTypes.map((testing, index) => (
                            <motion.div
                                key={index}
                                className={styles.testingCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.testingIcon}>
                                    {testing.icon}
                                </div>
                                <h3>{testing.type}</h3>
                                <p className={styles.testingDescription}>{testing.description}</p>
                                <ul className={styles.testingList}>
                                    {testing.tests.map((test, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={16} />
                                            <span>{test}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== RISK MANAGEMENT SOLUTIONS (6 columns) ===== */}
            <section className={styles.riskSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Comprehensive Risk Management <span className={styles.titleHighlight}>Solutions</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We provide a comprehensive range of risk management solutions tailored to your specific needs, ensuring your business remains resilient and secure.
                    </p>
                </div>

                <div className={styles.riskGrid}>
                    {riskManagementSolutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            className={styles.riskCard}
                            style={{ borderTopColor: solution.color }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.riskHeader}>
                                <h3 className={styles.riskCategory} style={{ color: solution.color }}>
                                    {solution.category}
                                </h3>
                                <p className={styles.riskCardDescription}>{solution.description}</p>
                            </div>
                            <ul className={styles.riskItems}>
                                {solution.items.map((item, idx) => (
                                    <li key={idx} className={styles.riskItem}>
                                        <div className={styles.riskBullet} style={{ backgroundColor: solution.color }}></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href={`/solutions/risk-management`} className={styles.riskLink}>
                                Explore Solution
                                <ChevronRight className={styles.linkIcon} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== COMPLIANCE STANDARDS SECTION (New) ===== */}
            <section className={styles.complianceSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        IT Compliance & Regulatory <span className={styles.titleHighlight}>Standards</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We help organizations meet global compliance requirements and regulatory standards across industries.
                    </p>
                </div>

                <div className={styles.complianceGrid}>
                    {complianceStandards.map((standard, index) => (
                        <motion.div
                            key={index}
                            className={styles.complianceCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.complianceIcon}>
                                {standard.icon}
                            </div>
                            <h3>{standard.standard}</h3>
                            <p className={styles.complianceDescription}>{standard.description}</p>
                            <div className={styles.complianceRequirements}>
                                <h4>Key Requirements:</h4>
                                <ul>
                                    {standard.requirements.map((req, idx) => (
                                        <li key={idx}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== TECHNOLOGY STACK ===== */}
            <section className={styles.techStackSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Security Technology <span className={styles.titleHighlight}>Stack</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We leverage industry-leading security tools and frameworks to deliver comprehensive cybersecurity solutions.
                    </p>
                </div>

                <div className={styles.techGrid}>
                    {securityTechnologyStack.map((stack, index) => (
                        <motion.div
                            key={index}
                            className={styles.techCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.techHeader}>
                                <div className={styles.techIconWrapper} style={{ color: stack.color }}>
                                    {stack.icon}
                                </div>
                                <h4 className={styles.techCategory}>{stack.category}</h4>
                            </div>
                            <div className={styles.techItems}>
                                {stack.technologies.map((tech, idx) => (
                                    <span key={idx} className={styles.techItem} style={{
                                        backgroundColor: `${stack.color}15`,
                                        borderColor: stack.color
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== KEY COMPONENTS ===== */}
            <section className={styles.componentsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Key Security <span className={styles.titleHighlight}>Components</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Every effective cybersecurity strategy includes these essential components for comprehensive protection.
                    </p>
                </div>

                <div className={styles.componentsGrid}>
                    {securityComponents.map((component, index) => (
                        <motion.div
                            key={index}
                            className={styles.componentCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.componentIcon}>
                                {component.icon}
                            </div>
                            <h3>{component.title}</h3>
                            <p className={styles.componentDescription}>{component.description}</p>
                            <ul className={styles.componentDetails}>
                                {component.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== SECURITY STATS ===== */}
            <section className={styles.statsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Security Impact <span className={styles.titleHighlight}>Metrics</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Measurable results from our cybersecurity implementations across various industries.
                    </p>
                </div>

                <div className={styles.statsGrid}>
                    {securityStats.map((stat, index) => (
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
            </section>

            {/* ===== INDUSTRIES SECTION (Exactly like enterprise page - 3 columns) ===== */}
            <section className={styles.industriesSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Industries We Cater To</h2>
                        <p className={styles.sectionDescription}>
                            Partnering with businesses in diverse sectors to unlock new avenues for growth and innovation
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
                        Considering our cybersecurity solutions for your business? We&apos;ve compiled answers to typical questions to help you understand how we can assist you.
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
                        <h3 className={styles.ctaTitle}>Ready to Secure Your Digital Assets?</h3>
                        <p className={styles.ctaDescription}>
                            Protect your business with comprehensive cybersecurity solutions. Schedule a free security assessment to identify risks and develop a tailored protection strategy.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Schedule Security Assessment
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}