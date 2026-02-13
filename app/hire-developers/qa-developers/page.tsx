'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Smartphone, Users, 
    CheckCircle, Award, MessageSquare, Sparkles, 
    Cloud, ChevronRight, HelpCircle, ArrowRight, 
    GitBranch, FileText, RefreshCw, 
    Code2, Monitor, Shield, FileCode, TestTube,
    Database, Lock, Clock, Users as UsersIcon, Rocket,
    Calendar, Scale, Briefcase, Globe as GlobeIcon,
    Gauge, Activity, Bug, PenTool, Layout,
    Settings, Terminal, BarChart3, 
    Fingerprint, Box

} from 'lucide-react';
import styles from './qa.module.css';

export default function QATestersPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'Sarah Chen',
        role: 'VP of Engineering, FinScale',
        content: 'BBNTech’s QA engineers integrated seamlessly into our sprints. They caught 40% more edge cases than our previous setup, and our release confidence has never been higher.',
        rating: 5,
        project: 'FinTech Trading Platform'
    };

    // ----- EXPERTISE AREAS (6 cards) -----
    const qaExpertise = [
        {
            id: 1,
            title: 'Automated Testing',
            description: 'Accelerate releases with robust automation frameworks. We implement Selenium, Cypress, Playwright and more for reliable, repeatable test execution.',
            icon: <TestTube className={styles.expertiseIcon} />,
            color: '#3B82F6',
            features: [
                'Cross‑browser test automation',
                'Parallel execution & cloud grids',
                'CI/CD integration',
                'Visual regression testing'
            ],
            details: 'Reduce delivery time while increasing coverage'
        },
        {
            id: 2,
            title: 'Functional & Application Testing',
            description: 'End‑to‑end validation of web, mobile and desktop apps. We verify every feature against real‑user scenarios.',
            icon: <Monitor className={styles.expertiseIcon} />,
            color: '#10B981',
            features: [
                'eCommerce checkout flows',
                'Mobile app gestures & offline',
                'API contract testing',
                'User acceptance test support'
            ],
            details: 'Flawless user experiences across devices'
        },
        {
            id: 3,
            title: 'Performance, Security & Compliance',
            description: 'Load testing, vulnerability scanning, and compliance audits (GDPR, HIPAA, PCI‑DSS).',
            icon: <Shield className={styles.expertiseIcon} />,
            color: '#8B5CF6',
            features: [
                'Stress & endurance testing',
                'OWASP Top 10 scanning',
                'Penetration testing',
                'Regulatory compliance validation'
            ],
            details: 'Secure, scalable, and audit‑ready systems'
        },
        {
            id: 4,
            title: 'Test Strategy & Planning',
            description: 'Structured QA blueprints that align with your development goals. We define scope, risks, and entry/exit criteria.',
            icon: <PenTool className={styles.expertiseIcon} />,
            color: '#F59E0B',
            features: [
                'Requirement traceability',
                'Risk‑based testing approach',
                'Test case design & peer review',
                'Effort estimation'
            ],
            details: 'QA that starts long before the first test run'
        },
        {
            id: 5,
            title: 'Test Execution & Quality Reporting',
            description: 'Manual and automated test cycles with clear defect tracking. We deliver actionable dashboards.',
            icon: <BarChart3 className={styles.expertiseIcon} />,
            color: '#EC4899',
            features: [
                'Sprint‑aligned test cycles',
                'Defect triage & prioritisation',
                'Real‑time reporting',
                'Root cause analysis'
            ],
            details: 'Transparency from test run to sign‑off'
        },
        {
            id: 6,
            title: 'CI/CD & DevOps Integration',
            description: 'Embed quality gates into your pipeline. We integrate testing tools with Jenkins, GitHub Actions, Azure DevOps, and more.',
            icon: <GitBranch className={styles.expertiseIcon} />,
            color: '#06B6D4',
            features: [
                'Shift‑left testing',
                'Automated regression on every commit',
                'Infrastructure as code testing',
                'Quality dashboards'
            ],
            details: 'Continuous testing for continuous delivery'
        }
    ];

    // ----- TESTING TOOLS – 6 CATEGORIES (3x2 grid) -----
    const testingTools = {
        'test-management': {
            title: 'Test Management & Planning',
            icon: <Layout />,
            color: '#3B82F6',
            technologies: ['Zephyr', 'Qase', 'TestRail', 'Xray', 'PractiTest']
        },
        'automation': {
            title: 'Automation Testing',
            icon: <Terminal />,
            color: '#10B981',
            technologies: ['Selenium', 'Appium', 'Cypress', 'Playwright', 'Katalon Studio']
        },
        'performance': {
            title: 'Performance & Load Testing',
            icon: <Gauge />,
            color: '#8B5CF6',
            technologies: ['JMeter', 'Locust', 'Gatling', 'BlazeMeter']
        },
        'security': {
            title: 'Security & Code Quality',
            icon: <Fingerprint />,
            color: '#F59E0B',
            technologies: ['OWASP ZAP', 'Burp Suite', 'SonarQube', 'Nessus']
        },
        'functional': {
            title: 'Functional & Regression Testing',
            icon: <Box />,
            color: '#EC4899',
            technologies: ['BrowserStack', 'LambdaTest', 'Postman', 'SoapUI']
        },
        'ci-cd': {
            title: 'CI/CD & DevOps Integration',
            icon: <Settings />,
            color: '#06B6D4',
            technologies: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Bitrise', 'Azure DevOps']
        }
    };

    // ----- QA PROCESS (6 steps) -----
    const qaProcess = [
        { step: 1, title: 'Requirement Analysis', description: 'Collaborate with stakeholders to understand features, user stories, and acceptance criteria.', icon: <FileText />, duration: '1-2 days' },
        { step: 2, title: 'Test Planning', description: 'Define scope, strategy, test environment, and risk assessment. Create traceability matrix.', icon: <PenTool />, duration: '2-3 days' },
        { step: 3, title: 'Test Case Development', description: 'Design detailed test cases, preconditions, and expected results. Peer reviews ensure quality.', icon: <FileCode />, duration: '3-5 days' },
        { step: 4, title: 'Test Execution', description: 'Execute manual and automated test cycles. Log defects and track resolution.', icon: <Activity />, duration: 'Ongoing' },
        { step: 5, title: 'Defect Reporting & Retesting', description: 'Prioritise bugs, verify fixes, and maintain regression suites.', icon: <Bug />, duration: 'Ongoing' },
        { step: 6, title: 'Test Closure & Sign-off', description: 'Summarise results, evaluate exit criteria, and provide release recommendations.', icon: <CheckCircle />, duration: '1 day' }
    ];

    // ----- BENEFITS OF QA TESTING (why hire from India) -----
    const whyIndiaBenefits = [
        {
            title: 'Cost‑effective QA',
            description: 'Reduce QA costs by 40‑60% without compromising quality. Pay only for the hours you need.',
            icon: '💰',
            benefit: '40-60% Cost Savings',
            details: ['Competitive hourly rates', 'No recruitment fees', 'Flexible engagement']
        },
        {
            title: 'Top 1% Talent',
            description: 'Rigorous vetting process ensures you get testers who master both manual and automation.',
            icon: '🎯',
            benefit: 'Top 1% Testers',
            details: ['8‑step screening', 'Hands‑on assignments', 'Domain expertise']
        },
        {
            title: 'Scalable Teams',
            description: 'Scale from 1 tester to a full QA pod within 48 hours. Add or reduce resources anytime.',
            icon: '📈',
            benefit: '48h Scaling',
            details: ['Instant team expansion', 'No long‑term lock‑in', 'Mix of manual/automation']
        },
        {
            title: 'Faster Time to Market',
            description: 'Parallel testing, overlapping time zones, and shift‑left practices accelerate releases.',
            icon: '⚡',
            benefit: '30% Faster Releases',
            details: ['24h handover', 'Early defect detection', 'Agile alignment']
        },
        {
            title: 'Domain Expertise',
            description: 'Testers with experience in FinTech, healthcare, eCommerce, and enterprise software.',
            icon: '🎓',
            benefit: 'Industry‑specific QA',
            details: ['Banking & payments', 'HIPAA compliance', 'High‑traffic retail']
        },
        {
            title: 'Seamless Communication',
            description: 'Fluent English, cultural compatibility, and communication during your business hours.',
            icon: '💬',
            benefit: 'Overlapping Shifts',
            details: ['Dedicated Slack channels', 'Daily stand‑ups', 'Transparent reporting']
        },
        {
            title: 'Zero Infrastructure Cost',
            description: 'We provide secure devices, test labs, and access to cloud grids – you only pay for the tester.',
            icon: '🖥️',
            benefit: 'No Capex',
            details: ['DeviceAnywhere access', 'Pre‑configured VMs', 'Licence management']
        },
        {
            title: 'ISO & Security Compliance',
            description: 'GDPR‑compliant, NDA‑protected, and audited annually for information security.',
            icon: '🔒',
            benefit: 'ISO 27001 Ready',
            details: ['Strict NDA', 'Data anonymisation', 'Regular security training']
        }
    ];

    // ----- WHAT QA ENGINEERS CAN TEST (like "What We Build") -----
    const whatWeTest = [
        {
            title: 'Web & Mobile Applications',
            description: 'Responsive web apps, native iOS/Android, and cross‑platform mobile apps.',
            icon: <Smartphone />,
            examples: ['E‑commerce stores', 'Banking apps', 'SaaS dashboards', 'Social platforms'],
            color: '#3B82F6',
            technologies: ['Selenium', 'Appium', 'Cypress', 'BrowserStack']
        },
        {
            title: 'eCommerce & SaaS Platforms',
            description: 'End‑to‑end validation of checkout, inventory, subscriptions, and third‑party integrations.',
            icon: <Code2 />,
            examples: ['Magento/Shopify', 'Salesforce', 'Subscription billing', 'Payment gateways'],
            color: '#10B981',
            technologies: ['Postman', 'JMeter', 'Cypress', 'LambdaTest']
        },
        {
            title: 'APIs & Backend Services',
            description: 'REST, GraphQL, microservices, and database integrity testing.',
            icon: <Database />,
            examples: ['Payment APIs', 'Inventory sync', 'Authentication', 'Reporting engines'],
            color: '#8B5CF6',
            technologies: ['Postman', 'SoapUI', 'JMeter', 'New Relic']
        },
        {
            title: 'Performance & Scalability',
            description: 'Load, stress, and endurance testing to ensure stability under peak traffic.',
            icon: <Gauge />,
            examples: ['Flash sales', 'Live events', 'High‑frequency trading', 'IoT backends'],
            color: '#F59E0B',
            technologies: ['JMeter', 'Gatling', 'k6', 'BlazeMeter']
        },
        {
            title: 'Security & Compliance',
            description: 'Vulnerability assessment, penetration testing, and regulatory compliance.',
            icon: <Shield />,
            examples: ['GDPR audits', 'PCI‑DSS validation', 'OWASP checks', 'Pen tests'],
            color: '#EC4899',
            technologies: ['OWASP ZAP', 'Burp Suite', 'Nessus', 'SonarQube']
        },
        {
            title: 'Legacy & Enterprise Systems',
            description: 'Modernisation testing, mainframe integration, and SAP/Oracle validation.',
            icon: <RefreshCw />,
            examples: ['System migrations', 'ERP upgrades', 'Legacy UI testing', 'Data reconciliation'],
            color: '#06B6D4',
            technologies: ['Selenium', 'UFT', 'Tosca', 'IBM RFT']
        }
    ];

    // ----- PRICING PLANS (from reference) -----
    const pricingPlans = [
        {
            title: 'Dedicated QA Engineer',
            price: '$4,000 – $10,000/month',
            description: 'Individual QA specialist for small to medium projects. Manual + automation skills.',
            features: [
                '1–2 QA engineers',
                'Functional & regression testing',
                'Basic automation',
                'Weekly reports',
                'Direct communication'
            ],
            color: '#3B82F6',
            bestFor: 'Startups & SMEs',
            timeline: '3–6 months'
        },
        {
            title: 'Dedicated Team with PM',
            price: '$10,000 – $25,000/month',
            description: 'Fully managed QA team with a dedicated project manager. 3–8 members.',
            features: [
                '3–5 QA engineers + PM',
                'Full test strategy & planning',
                'CI/CD integration',
                'Daily stand‑ups',
                'Sprint‑aligned delivery'
            ],
            color: '#10B981',
            bestFor: 'Growing Businesses',
            timeline: '6–12 months'
        },
        {
            title: 'Extended Team (Product Scaling)',
            price: '$25,000 – $35,000/month',
            description: 'Augment your in‑house capacity with 8–11 QA professionals.',
            features: [
                '8–11 QA engineers',
                'Performance & security testing',
                'Test environment management',
                'Advanced automation',
                'On‑demand scalability'
            ],
            color: '#8B5CF6',
            bestFor: 'High‑Growth Scale‑ups',
            timeline: '12+ months'
        },
        {
            title: 'Specialised QA Pods',
            price: '$35,000 – $50,000/month',
            description: 'Cross‑functional pods for AI/ML, cloud migration, or complex compliance projects (11–16 members).',
            features: [
                '11–16 specialists',
                'AI‑driven test optimisation',
                'Cloud infrastructure testing',
                'Regulatory experts',
                '24×7 coverage'
            ],
            color: '#F59E0B',
            bestFor: 'Complex Programs',
            timeline: '12+ months'
        },
        {
            title: 'Enterprise Delivery Unit',
            price: '$50,000+ /month',
            description: 'Multi‑squad QA coordination for enterprise‑grade programs with global footprint.',
            features: [
                '16+ QA engineers',
                'Multi‑team coordination',
                'Advanced DevOps & SRE',
                'Compliance & audit support',
                'Executive dashboards'
            ],
            color: '#EC4899',
            bestFor: 'Global Enterprises',
            timeline: 'Long‑term partnership'
        }
    ];

    // ----- WHY HIRE FROM BBNTECH (feature list) -----
    const whyChooseFeatures = [
        { feature: 'Workstatus™ powered Proof of Work', icon: <CheckCircle /> },
        { feature: 'Top 1% QA engineers, rigorously vetted', icon: <Award /> },
        { feature: 'Dedicated project manager', icon: <Users /> },
        { feature: 'Flexible contracts, transparent pricing', icon: <Scale /> },
        { feature: 'Zero hiring fee, quick onboarding (48h)', icon: <Rocket /> },
        { feature: 'Clear test documentation & reporting', icon: <FileText /> },
        { feature: 'Adherence to data security practices', icon: <Lock /> },
        { feature: 'Language/time‑zone compatible staff', icon: <GlobeIcon /> },
        { feature: '7‑day risk‑free trial period', icon: <Calendar /> },
        { feature: 'IP Rights & NDA protection', icon: <Shield /> },
        { feature: 'Continuous testing for CI/CD', icon: <GitBranch /> },
        { feature: 'Global time‑zone coverage', icon: <Clock /> }
    ];

    // ----- ENGAGEMENT MODELS -----
    const engagementModels = [
        {
            title: 'Team Augmentation',
            description: 'Enhance your internal QA capacity with our pre‑vetted testers. They integrate quickly, boost coverage, and support faster release cycles.',
            icon: <UsersIcon />,
            color: '#3B82F6',
            link: '/team-augmentation'
        },
        {
            title: 'Dedicated QA Team',
            description: 'Get a full‑time QA team focused solely on your product. They align with your processes, ensure thorough testing, and maintain consistent release quality.',
            icon: <Briefcase />,
            color: '#10B981',
            link: '/dedicated-team'
        },
        {
            title: 'QA Outsourcing',
            description: 'Outsource your entire QA lifecycle – from strategy to execution. Our experts deliver reliable, scalable testing that supports your long‑term product goals.',
            icon: <Cloud />,
            color: '#8B5CF6',
            link: '/outsourcing'
        }
    ];


    // ----- HIRING COMPARISON (QA specific) -----
    const hiringComparison = [
        {
            model: 'In‑House QA',
            timeToHire: '6‑12 weeks',
            timeToStart: '4‑8 weeks',
            trainingCost: '$15,000‑$40,000',
            scalingTime: '6‑12 weeks',
            risk: 'Medium‑High',
            deliverySupport: 'Limited',
            flexibility: 'Low',
            totalCost: '$100,000+ annually'
        },
        {
            model: 'Freelancers',
            timeToHire: '2‑8 weeks',
            timeToStart: '1‑6 weeks',
            trainingCost: '$0‑$5,000',
            scalingTime: 'Variable',
            risk: 'High',
            deliverySupport: 'Minimal',
            flexibility: 'Medium',
            totalCost: 'Variable, often higher'
        },
        {
            model: 'BBNTech QA',
            timeToHire: '1‑2 weeks',
            timeToStart: '1‑2 weeks',
            trainingCost: '$0',
            scalingTime: '48 hours - 1 week',
            risk: 'Extremely Low',
            deliverySupport: 'Full Support',
            flexibility: 'High',
            totalCost: 'Predictable, 40‑60% lower'
        }
    ];

    // ----- INDUSTRIES (EXACTLY AS PROVIDED) -----
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
            question: 'What is the difference between manual and automated testing?',
            answer: 'Manual testing is performed by a human tester exploring the application, ideal for usability, exploratory, and ad‑hoc scenarios. Automated testing uses scripts to execute pre‑defined tests, perfect for regression, load, and repetitive checks. We provide both and help you decide the right mix.'
        },
        {
            question: 'How quickly can I hire a QA engineer from BBNTech?',
            answer: 'We can onboard a pre‑vetted QA engineer within 1–2 weeks. For urgent needs, we have a pool of ready‑to‑start testers who can begin in 48 hours.'
        },
        {
            question: 'Do your QA engineers know how to code for automation?',
            answer: 'Yes. Our testers are proficient in Java, Python, JavaScript, and C#. They build robust automation frameworks using Selenium, Cypress, Playwright, Appium, and more.'
        },
        {
            question: 'Can you test my existing application?',
            answer: 'Absolutely. We perform complete health checks, regression testing, and security audits on legacy systems. We document everything and provide a clear roadmap for improvement.'
        },
        {
            question: 'How do you ensure the security of my data?',
            answer: 'We sign strict NDAs, follow ISO 27001 guidelines, and use encrypted communication channels. Our test environments are isolated and access is revoked immediately after the project.'
        },
        {
            question: 'What industries do you specialise in?',
            answer: 'We have deep experience in FinTech, healthcare, eCommerce, logistics, and enterprise SaaS. Our teams understand domain‑specific compliance (HIPAA, PCI‑DSS, GDPR).'
        },
        {
            question: 'What is your pricing model?',
            answer: 'We offer monthly full‑time engagements, part‑time retainers, and project‑based fixed pricing. All models are transparent with no hidden fees.'
        },
        {
            question: 'Do you provide a trial period?',
            answer: 'Yes, we offer a 7‑day risk‑free trial. You pay only if you are satisfied. Otherwise, there is no cost.'
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
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
                                <Sparkles size={18} /> Top 1% QA Engineers
                            </div>
                            <h1 className={styles.mainTitle}>
                                Hire Expert <span className={styles.highlight}>QA & Testing</span> Engineers
                            </h1>
                            <p className={styles.subheadline}>
                                Top 1% QA testers dedicated to delivering flawless product quality
                            </p>
                            <p className={styles.heroDescription}>
                                We connect you with experienced QA engineers who seamlessly integrate with your team, 
                                providing rigorous quality assurance that elevates your product and boosts customer satisfaction.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className={styles.buttonContainer}
                        >
                            <Link href="/contact" className={styles.ctaButton}>
                                Hire QA Engineers
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="#expertise" className={styles.secondaryButton}>
                                View Testing Expertise
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
                                        <div className={styles.ratingText}>QA Excellence</div>
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

            {/* ===== EXPERTISE SECTION ===== */}
            <section className={styles.expertiseSection} id="expertise">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our QA Engineers&apos; <span className={styles.titleHighlight}>Expertise</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        When you hire QA engineers from us, you get highly skilled testers with hands‑on expertise 
                        in modern testing methodologies, automation tools, and end‑to‑end quality processes.
                    </p>
                </div>

                <div className={styles.expertiseGrid}>
                    {qaExpertise.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.expertiseCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            
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
                                <h4>Key Capabilities:</h4>
                                <ul className={styles.featuresList}>
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className={styles.featureItem}>
                                            <CheckCircle className={styles.checkIcon} style={{ color: item.color }} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link href={`/hire/qa/${item.id}`} className={styles.learnMoreLink}>
                                Learn More
                                <ChevronRight className={styles.linkIcon} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== TESTING TOOLS – 3x2 GRID ===== */}
            <section className={styles.techStackSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Advanced <span className={styles.titleHighlight}>Testing Tools</span> We Master
                    </h2>
                    <p className={styles.sectionDescription}>
                        Our QA engineers use industry‑leading testing tools and platforms to ensure your software 
                        is secure, stable, scalable, and release‑ready across all environments.
                    </p>
                </div>

                <div className={styles.techGridContainer}>
                    {Object.entries(testingTools).map(([key, category]) => (
                        <div key={key} className={styles.techCategoryCard}>
                            <div className={styles.techCategoryHeader}>
                                <div className={styles.techCategoryIcon} style={{ color: category.color }}>
                                    {category.icon}
                                </div>
                                <h3 className={styles.techCategoryTitle}>{category.title}</h3>
                            </div>
                            <div className={styles.techItemsGrid}>
                                {category.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className={styles.techItem}
                                        style={{
                                            backgroundColor: `${category.color}08`,
                                            borderColor: category.color,
                                            color: category.color
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== WHY HIRE QA ENGINEERS FROM INDIA ===== */}
            <section className={styles.benefitsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Why Hire QA Engineers <span className={styles.titleHighlight}>From BBNTech</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Access world‑class testing talent at a fraction of the local cost. Here’s why smart companies 
                        choose Indian QA professionals.
                    </p>
                </div>

                <div className={styles.benefitsGrid}>
                    {whyIndiaBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className={styles.benefitCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.benefitIcon} style={{ fontSize: '2.5rem' }}>
                                {benefit.icon}
                            </div>
                            <div className={styles.benefitContent}>
                                <h3>{benefit.title}</h3>
                                <p className={styles.benefitDescription}>{benefit.description}</p>
                                <div className={styles.benefitStat}>{benefit.benefit}</div>
                                <div className={styles.benefitDetails}>
                                    {benefit.details.map((detail, idx) => (
                                        <span key={idx} className={styles.benefitDetailItem}>
                                            • {detail}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== QA PROCESS ===== */}
            <section className={styles.processSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our QA <span className={styles.titleHighlight}>Process</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        A structured, transparent testing lifecycle that aligns with agile sprints and delivers 
                        confidence with every release.
                    </p>
                </div>

                <div className={styles.processTimeline}>
                    {qaProcess.map((step, index) => (
                        <motion.div
                            key={step.step}
                            className={styles.processStep}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.processStepHeader}>
                                <div className={styles.processNumber}>0{step.step}</div>
                                <div className={styles.processIcon}>
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className={styles.processTitle}>{step.title}</h3>
                            <p className={styles.processDescription}>{step.description}</p>
                            <div className={styles.processDuration}>
                                <Clock size={14} />
                                {step.duration}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== WHAT WE TEST ===== */}
            <section className={styles.buildSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        What Our QA Engineers <span className={styles.titleHighlight}>Can Test</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        From web and mobile apps to complex enterprise systems – we validate it all.
                    </p>
                </div>

                <div className={styles.buildGrid}>
                    {whatWeTest.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.buildCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.buildHeader}>
                                <div className={styles.buildIcon} style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                            </div>
                            <p className={styles.buildDescription}>{item.description}</p>
                            <div className={styles.buildExamples}>
                                <strong>Examples:</strong>
                                <ul>
                                    {item.examples.map((example, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={14} style={{ color: item.color }} />
                                            <span>{example}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.buildTechnologies}>
                                <strong>Tools:</strong>
                                <div className={styles.techTags}>
                                    {item.technologies.map((tech, idx) => (
                                        <span key={idx} className={styles.techTag}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== PRICING SECTION ===== */}
            <section className={styles.pricingSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Cost of Hiring <span className={styles.titleHighlight}>QA Teams</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Flexible pricing models tailored to your project size, complexity, and engagement preferences.
                    </p>
                </div>

                <div className={styles.pricingGrid}>
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={styles.pricingCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.pricingHeader} style={{ borderColor: plan.color }}>
                                <div className={styles.pricingBadge} style={{ backgroundColor: plan.color }}>
                                    {plan.bestFor}
                                </div>
                                <h3>{plan.title}</h3>
                                <div className={styles.pricingAmount}>{plan.price}</div>
                                <div className={styles.pricingTimeline}>
                                    <Calendar size={14} />
                                    {plan.timeline}
                                </div>
                            </div>
                            <p className={styles.pricingDescription}>{plan.description}</p>
                            <ul className={styles.pricingFeatures}>
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={16} style={{ color: plan.color }} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className={styles.pricingButton} style={{ backgroundColor: plan.color }}>
                                Get Started
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== WHY CHOOSE BBNTECH ===== */}
            <section className={styles.whyChooseSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Why Hire QA Engineers <span className={styles.titleHighlight}>From BBNTech?</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We provide reliable QA engineers with faster turnaround times and better ROI. 
                        Here’s what you get when you work with us.
                    </p>
                </div>

                <div className={styles.whyChooseGrid}>
                    {whyChooseFeatures.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.whyChooseCard}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.whyChooseIcon} style={{ color: testingTools['test-management'].color }}>
                                {item.icon}
                            </div>
                            <span>{item.feature}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== ENGAGEMENT MODELS ===== */}
            <section className={styles.engagementSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Flexible <span className={styles.titleHighlight}>Engagement Models</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Choose the right way to integrate our QA experts into your workflow.
                    </p>
                </div>

                <div className={styles.engagementGrid}>
                    {engagementModels.map((model, index) => (
                        <motion.div
                            key={index}
                            className={styles.engagementCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.engagementIcon} style={{ backgroundColor: `${model.color}15`, color: model.color }}>
                                {model.icon}
                            </div>
                            <h3>{model.title}</h3>
                            <p className={styles.engagementDescription}>{model.description}</p>
                            <Link href={model.link} className={styles.engagementLink} style={{ color: model.color }}>
                                Learn more
                                <ChevronRight className={styles.linkIcon} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== HIRING COMPARISON ===== */}
            <section className={styles.comparisonSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Comparative Analysis: <span className={styles.titleHighlight}>In‑House, Freelancers, or BBNTech</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        See why a dedicated QA team from BBNTech outperforms other hiring options.
                    </p>
                </div>

                <div className={styles.comparisonTableWrapper}>
                    <div className={styles.comparisonTable}>
                        <div className={styles.tableHeader}>
                            <div className={styles.headerCell}>Factor</div>
                            {hiringComparison.map((model, idx) => (
                                <div key={idx} className={styles.headerCell}>
                                    {model.model}
                                    {model.model === 'BBNTech QA' && (
                                        <div className={styles.bestChoiceBadge}>Best Choice</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {['timeToHire', 'timeToStart', 'trainingCost', 'scalingTime', 'risk', 'deliverySupport', 'flexibility', 'totalCost'].map((factor, idx) => (
                            <div key={idx} className={styles.tableRow}>
                                <div className={styles.rowHeader}>
                                    {factor === 'timeToHire' && 'Time to get right testers'}
                                    {factor === 'timeToStart' && 'Time to start a project'}
                                    {factor === 'trainingCost' && 'Recurring cost of training'}
                                    {factor === 'scalingTime' && 'Time to scale team size'}
                                    {factor === 'risk' && 'Project failure risk'}
                                    {factor === 'deliverySupport' && 'Backed by delivery team'}
                                    {factor === 'flexibility' && 'Flexibility to scale up/down'}
                                    {factor === 'totalCost' && 'Total annual cost'}
                                </div>
                                {hiringComparison.map((model, modelIdx) => (
                                    <div key={modelIdx} className={styles.rowCell}>
                                        {model[factor as keyof typeof model]}
                                        {modelIdx === 2 && factor === 'risk' && (
                                            <div className={styles.lowRiskIndicator}>Low Risk</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== COMPANY STATS ===== */}
            {/* <section className={styles.statsSection}>
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
            </section> */}

            {/* ===== INDUSTRIES SECTION (EXACTLY AS PROVIDED) ===== */}
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
                        Get answers to common questions about hiring QA engineers from BBNTech.
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
                        <h3 className={styles.ctaTitle}>Reduce Deployment Risks Instantly</h3>
                        <p className={styles.ctaDescription}>
                            Get expert testers who ensure every release passes strict validation, preventing regressions 
                            and post‑release failures.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Hire QA Engineers Now
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="/pricing" className={styles.ctaSecondary}>
                                View Pricing
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