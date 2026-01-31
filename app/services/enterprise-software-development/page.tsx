'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Server, Cloud, Shield, Database, Users,
    Cpu, GitMerge, BarChart, Globe,
    CheckCircle, Award, MessageSquare, Sparkles,
    ChevronRight, Code, Activity, Smartphone,
    TrendingUp, FileText, RefreshCw,
    HelpCircle, ArrowRight, Settings,
    ClipboardCheck, HeadphonesIcon
} from 'lucide-react';
import styles from './enterprise.module.css';

export default function EnterpriseSoftwarePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

    // Testimonial matching the quality assurance page layout
    const testimonial = {
        name: 'James Anderson',
        role: 'CIO, Global Manufacturing Corp',
        content: 'Professional, reliable, and results-driven – BBNTech delivered exactly what we needed, on time and within budget. Their enterprise software transformed our operations.',
        rating: 5,
        project: 'Enterprise Resource Planning System'
    };

    // Enterprise Services matching the ValueCoders structure
    const enterpriseServices = [
        {
            id: 1,
            title: 'Enterprise Software Development',
            description: 'Transforming complex business challenges into intelligent, scalable software solutions efficiently.',
            icon: <Server className={styles.serviceIcon} />,
            color: '#3B82F6', // Blue
            features: ['Custom architecture design', 'Enterprise-grade solution building', 'Robust system development'],
            detailedDescription: 'We build custom enterprise applications tailored to your specific business processes and requirements.'
        },
        {
            id: 2,
            title: 'Legacy Software Modernization',
            description: 'Upgrade outdated enterprise software for better performance, security, and scalability.',
            icon: <RefreshCw className={styles.serviceIcon} />,
            color: '#10B981', // Emerald
            features: ['System architecture reengineering', 'Performance enhancement strategies', 'Modern technology migration'],
            detailedDescription: 'Transform your legacy systems into modern, efficient applications without disrupting business operations.'
        },
        {
            id: 3,
            title: 'Enterprise Software Integration',
            description: 'Connecting enterprise systems for seamless data flow and improved process efficiency.',
            icon: <GitMerge className={styles.serviceIcon} />,
            color: '#8B5CF6', // Purple
            features: ['API-driven integrations', 'Third-party tool integration', 'Real-time data processing'],
            detailedDescription: 'Integrate disparate systems to create a unified technology ecosystem for your organization.'
        },
        {
            id: 4,
            title: 'Enterprise Mobility Solutions',
            description: 'Secure and seamless mobile solutions for enterprise-level operations across devices.',
            icon: <Smartphone className={styles.serviceIcon} />,
            color: '#F59E0B', // Amber
            features: ['Cross-platform mobile apps', 'Secure data synchronization', 'Device management integration'],
            detailedDescription: 'Extend your enterprise capabilities to mobile devices with secure, responsive applications.'
        },
        {
            id: 5,
            title: 'Enterprise UX/UI Design',
            description: 'Deliver intuitive enterprise experiences that drive user satisfaction and productivity.',
            icon: <Settings className={styles.serviceIcon} />,
            color: '#EC4899', // Pink
            features: ['User journey mapping', 'Custom UI designs', 'Compliance with accessibility'],
            detailedDescription: 'Create user-centric interfaces that enhance productivity and ensure high adoption rates.'
        },
        {
            id: 6,
            title: 'Enterprise Testing & QA',
            description: 'Guarantee software stability, performance, and compliance across all use cases.',
            icon: <ClipboardCheck className={styles.serviceIcon} />,
            color: '#06B6D4', // Cyan
            features: ['Comprehensive QA strategy', 'Security and compliance testing', 'Automated and manual testing'],
            detailedDescription: 'Ensure your enterprise software meets the highest standards of quality and reliability.'
        }
    ];

    // Software Types by Business Function (from ValueCoders)
    const softwareTypesByFunction = [
        {
            category: 'Enterprise Project Management',
            color: '#3B82F6',
            items: ['ERP Systems', 'Automated task workflows', 'Real-time project tracking', 'Scalable collaboration tools', 'Integrated reporting dashboards']
        },
        {
            category: 'HR, Talent & Productivity',
            color: '#10B981',
            items: ['Applicant tracking systems', 'Performance review automation', 'Training management software', 'Time tracking tools', 'Payroll calculation integration']
        },
        {
            category: 'Enterprise Finance Management',
            color: '#8B5CF6',
            items: ['Expense tracking systems', 'Budget management tools', 'Financial reporting dashboards', 'Tax calculation automation', 'Invoice processing software']
        },
        {
            category: 'Sales, Marketing & Customer Service',
            color: '#F59E0B',
            items: ['CRM integration solutions', 'Marketing automation tools', 'Customer support platforms', 'Sales pipeline software', 'Customer analytics dashboards']
        },
        {
            category: 'Sourcing & Stock Management',
            color: '#EC4899',
            items: ['AI-powered demand forecasting', 'Automated purchase order management', 'Real-time inventory tracking', 'Supply chain management', 'Multi-channel integration']
        },
        {
            category: 'Asset Management',
            color: '#06B6D4',
            items: ['Automated asset logging', 'IoT-based asset tracking', 'Centralized asset repository', 'Multi-location asset control', 'Compliance & security checks']
        }
    ];

    // Technology Stacks
    const technologyStacks = [
        {
            category: 'Cloud & DevOps',
            icon: <Cloud />,
            color: '#3B82F6',
            technologies: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Kubernetes', 'Docker', 'Terraform']
        },
        {
            category: 'Database Management',
            icon: <Database />,
            color: '#10B981',
            technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Cassandra', 'Redis', 'Firebase']
        },
        {
            category: 'Enterprise Mobility & APIs',
            icon: <Globe />,
            color: '#8B5CF6',
            technologies: ['RESTful APIs', 'GraphQL', 'gRPC', 'Swagger', 'Firebase SDK', 'Apple & Google SDKs']
        },
        {
            category: 'Frontend Technologies',
            icon: <Code />,
            color: '#F59E0B',
            technologies: ['React', 'Angular', 'Vue.js', 'TypeScript', 'Next.js', 'Flutter']
        },
        {
            category: 'Backend Technologies',
            icon: <Server />,
            color: '#EC4899',
            technologies: ['Node.js', 'Python', 'Java', '.NET Core', 'Spring Boot', 'Go']
        },
        {
            category: 'AI/ML & Big Data',
            icon: <Cpu />,
            color: '#06B6D4',
            technologies: ['TensorFlow', 'PyTorch', 'Apache Spark', 'Hadoop', 'Kafka', 'Python Data Stack']
        }
    ];

    // Development Process
    const developmentProcess = [
        { step: 1, title: 'Software Kick-off', description: 'Dive into bi-weekly sprints and rollouts aligned with project timelines.', icon: <FileText /> },
        { step: 2, title: 'Task Execution', description: 'Combined team tackles tasks, fulfilling user stories and sprint goals.', icon: <Code /> },
        { step: 3, title: 'Daily Stand-ups', description: 'Daily check-ins led by Scrum Master to discuss progress and tackle challenges.', icon: <Users /> },
        { step: 4, title: 'Feature Quality Check', description: 'Quality Engineers test new features, ensuring seamless integration.', icon: <ClipboardCheck /> },
        { step: 5, title: 'Backlog Updates', description: 'Our team keeps the sprint backlog updated, staying on track to meet objectives.', icon: <BarChart /> },
        { step: 6, title: 'Sprint Reflections', description: 'Post-sprint reflections to refine strategies and enhance future sprints.', icon: <RefreshCw /> }
    ];

    // Key Benefits/Components (from ValueCoders "Key Components" section)
    const keyComponents = [
        {
            title: 'Scalable Architecture',
            description: 'Your software should grow with your business without performance bottlenecks.',
            icon: <TrendingUp />,
            details: ['Supports high-volume transactions', 'Modular structure for future upgrades', 'Cloud-native design']
        },
        {
            title: 'Strong Security Controls',
            description: 'Protect critical enterprise data at every touchpoint of your system.',
            icon: <Shield />,
            details: ['Role-based user access', 'End-to-end encryption protocols', 'Regular security audits']
        },
        {
            title: 'Seamless Integration',
            description: 'Your enterprise solution should connect easily with existing tools and platforms.',
            icon: <GitMerge />,
            details: ['Pre-built API compatibility', 'No-code third-party app connectors', 'Legacy system integration']
        },
        {
            title: 'Real-Time Data Access',
            description: 'Enable teams to make faster, smarter decisions using live system data.',
            icon: <Activity />,
            details: ['Instant reporting dashboards', 'Continuous database syncing', 'Real-time analytics']
        }
    ];

    // Stats Section
    const companyStats = [
        { value: '700+', label: 'Full-time Staff', icon: <Users /> },
        { value: '20+', label: 'Years Experience', icon: <Award /> },
        { value: '4500+', label: 'Satisfied Customers', icon: <HeadphonesIcon /> },
        { value: '2500+', label: 'Successful Projects', icon: <CheckCircle /> }
    ];

    // Hiring Models
    const hiringModels = [
        {
            model: 'Fixed Price Model',
            description: 'For businesses with well-defined project scope and requirements.',
            color: '#3B82F6',
            features: ['Simplified process', 'Higher predictability', 'Greater transparency', 'Reduced risk']
        },
        {
            model: 'Dedicated Hiring Model',
            description: 'For long-term project requirements or complex development process.',
            color: '#10B981',
            features: ['Complete control', 'More flexibility', 'Focused and dedicated approach', 'Faster time to market']
        },
        {
            model: 'Time & Material Model',
            description: 'For businesses looking to pay for completed work with flexibility.',
            color: '#8B5CF6',
            features: ['Faster project start', 'Flexibility to adapt', 'Pay as you go model', 'Adapt to changing needs']
        }
    ];

    // Industries Section (Matching API Development page structure)
    const industries = [
        {
            name: 'Healthcare',
            icon: '🏥',
            desc: 'Secure, HIPAA-compliant APIs for EHR integration, telehealth platforms, medical device connectivity, and patient data interoperability.',
            image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80',
            color: '#10B981'
        },
        {
            name: 'Retail & eCommerce',
            icon: '🛍️',
            desc: 'Scalable APIs for payment processing, inventory management, order fulfillment, CRM integration, and personalized shopping experiences.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
            color: '#8B5CF6'
        },
        {
            name: 'Fintech & Banking',
            icon: '🏦',
            desc: 'High-security APIs for payment gateways, banking systems, fraud detection, regulatory compliance, and financial data aggregation.',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
            color: '#3B82F6'
        },
    ];

    // FAQs (from ValueCoders FAQ section)
    const faqs = [
        {
            question: 'Why should I choose BBNTech as my enterprise software development partner?',
            answer: 'BBNTech brings 20+ years of experience in secure enterprise applications development services, with 2500+ successful projects across industries. We combine agile development for faster delivery with deep expertise in complex enterprise architectures.'
        },
        {
            question: 'What types of enterprise software do you specialize in?',
            answer: 'We specialize in 50+ enterprise software types including ERP systems, CRM solutions, HR management software, financial systems, supply chain management, asset tracking, and industry-specific solutions for healthcare, BFSI, manufacturing, and more.'
        },
        {
            question: 'How do you ensure enterprise software security and compliance?',
            answer: 'We implement multiple security layers: role-based access control, end-to-end encryption, regular security audits, and compliance with standards like HIPAA, GDPR, PCI-DSS. Our solutions include audit logging, data masking, and compliance monitoring.'
        },
        {
            question: 'What is your development process for enterprise projects?',
            answer: 'We follow an agile enterprise development process with bi-weekly sprints, daily stand-ups, continuous integration, and regular stakeholder reviews. Our process includes requirements analysis, architecture design, development, testing, deployment, and ongoing support.'
        },
        {
            question: 'How do you handle legacy system modernization?',
            answer: 'We assess your existing systems, develop a modernization roadmap, and implement phased migration strategies. This includes architecture reengineering, data migration, performance optimization, and ensuring backward compatibility during transition.'
        },
        {
            question: 'What post-launch support do you provide?',
            answer: 'We offer comprehensive post-launch support including 24/7 monitoring, performance optimization, security updates, bug fixes, and feature enhancements. Our maintenance packages include regular health checks and dedicated support teams.'
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION (Matching Quality Assurance page layout) ===== */}
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
                                <Sparkles size={18} /> Enterprise-Grade Solutions
                            </div>
                            <h1 className={styles.mainTitle}>
                                Enterprise Software <span className={styles.highlight}>Development</span> Services
                            </h1>
                            <p className={styles.subheadline}>
                                Modernize, Integrate & Scale – Enterprise Software, Delivered with Governance
                            </p>
                            <p className={styles.heroDescription}>
                                Strengthen your enterprise with software built for long-term stability, security, and scale.
                                We help you modernize operations, eliminate bottlenecks, and deliver systems that integrate
                                smoothly across your organization.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className={styles.buttonContainer}
                        >
                            <Link href="/contact" className={styles.ctaButton}>
                                Start Enterprise
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
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
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
                                        <div className={styles.ratingText}>Expert Enterprise Team</div>
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
                        {['Microsoft', 'Amazon', 'IBM', 'Siemens', 'SAP', 'Oracle'].map((company, idx) => (
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

            {/* ===== ENTERPRISE SERVICES SECTION ===== */}
            <section className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Enterprise Software Development <span className={styles.titleHighlight}>Services</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We are a reliable enterprise software development firm dedicated to building scalable,
                        robust, and highly secure software solutions. From modernizing legacy software to
                        integrating applications, we address your business&apos;s unique needs.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {enterpriseServices.map((service, index) => (
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
                                <Link href={`/services/enterprise/${service.id}`} className={styles.learnMoreLink}>
                                    Learn More
                                    <ChevronRight className={styles.linkIcon} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== SOFTWARE TYPES GRID ===== */}
            <section className={styles.softwareTypesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        50+ Enterprise Software Types We <span className={styles.titleHighlight}>Specialize In</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        By leveraging robust software engineering practices and domain-specific expertise,
                        we develop enterprise-grade software across multiple categories.
                    </p>
                </div>

                <div className={styles.typesGrid}>
                    {softwareTypesByFunction.map((type, index) => (
                        <motion.div
                            key={index}
                            className={styles.typeCard}
                            style={{ borderLeftColor: type.color }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className={styles.typeCategory} style={{ color: type.color }}>
                                {type.category}
                            </h3>
                            <ul className={styles.typeItems}>
                                {type.items.map((item, idx) => (
                                    <li key={idx} className={styles.typeItem}>
                                        <div className={styles.itemBullet} style={{ backgroundColor: type.color }}></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== TECHNOLOGY STACKS ===== */}
            <section className={styles.techStackSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Tech Stacks We Use in Enterprise <span className={styles.titleHighlight}>Software Development</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We use cutting-edge technologies to build scalable, secure, and high-performance
                        enterprise software. From backend to cloud solutions, our diverse tech stack
                        ensures efficiency and seamless integration.
                    </p>
                </div>

                <div className={styles.techGrid}>
                    {technologyStacks.map((stack, index) => (
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

            {/* ===== KEY COMPONENTS SECTION ===== */}
            <section className={styles.componentsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Key Components Every Enterprise Software <span className={styles.titleHighlight}>Must Include</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        A reliable enterprise software isn&apos;t just built. It&apos;s engineered around your business.
                        Here are the core elements that make enterprise software truly work.
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

            {/* ===== DEVELOPMENT PROCESS ===== */}
            <section className={styles.processSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our Enterprise Software <span className={styles.titleHighlight}>Development Process</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We specialize in engineering enterprise software that&apos;s both stable and secure,
                        using a structured agile approach with a variety of tech tools.
                    </p>
                </div>

                <div className={styles.processGrid}>
                    {developmentProcess.map((step, index) => (
                        <motion.div
                            key={step.step}
                            className={styles.processCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.processNumber}>0{step.step}</div>
                            <div className={styles.processIcon}>
                                {step.icon}
                            </div>
                            <h3 className={styles.processTitle}>{step.title}</h3>
                            <p className={styles.processDescription}>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== HIRING MODELS ===== */}
            <section className={styles.hiringSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our Custom <span className={styles.titleHighlight}>Hiring Models</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Choose from our flexible hiring models designed to fit your needs and budget.
                    </p>
                </div>

                <div className={styles.hiringGrid}>
                    {hiringModels.map((model, index) => (
                        <motion.div
                            key={index}
                            className={styles.hiringCard}
                            style={{ borderTopColor: model.color }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className={styles.hiringTitle}>{model.model}</h3>
                            <p className={styles.hiringDescription}>{model.description}</p>
                            <ul className={styles.hiringFeatures}>
                                {model.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={16} style={{ color: model.color }} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className={styles.hiringButton} style={{ backgroundColor: model.color }}>
                                Get Started
                                <ChevronRight className={styles.buttonIcon} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== COMPANY STATS ===== */}
            <section className={styles.statsSection}>
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
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* ===== INDUSTRIES SECTION (EXACT MATCH from API Development page) ===== */}
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
                        Frequently Asked <span className={styles.titleHighlight}>Questions</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Considering our custom enterprise software solutions for your business?
                        We&apos;ve compiled answers to typical questions to help you understand how we can assist you.
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
                        <h3 className={styles.ctaTitle}>Ready to Transform Your Enterprise?</h3>
                        <p className={styles.ctaDescription}>
                            Your enterprise vision is our next project. Tell us about your business goals,
                            and we&apos;ll show you exactly how to make them a reality with custom software solutions.
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