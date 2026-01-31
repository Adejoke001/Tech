'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cloud, Server, Shield, Zap, Cpu, Database,
    Users, Clock, Award, CheckCircle,
    MessageSquare, Star, Sparkles, ChevronRight,
    GitMerge, Lock, Globe, Workflow,
    Code, Settings, RefreshCw, Layers,
    HardDrive, UploadCloud, Wifi, Key, FileText,
    Building, Download, Loader
} from 'lucide-react';
import styles from './clouddev.module.css';

export default function CloudServicesPage() {
    const [activeTab, setActiveTab] = useState('services');
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

    const testimonial = {
        name: 'Jonathan Miller',
        role: 'CTO, TechFlow Solutions',
        content: 'Outstanding results, clear communication, and a dedicated team. We\'re extremely satisfied with their IT services.',
        rating: 5,
        project: 'Enterprise Cloud Migration'
    };

    // ===== CLOUD SERVICES (Added one more column) =====
    const cloudServices = [
        { icon: <HardDrive />, title: 'Cloud Backup', desc: 'Protect your critical data with automated backups, instant recovery options, and secure storage.', features: ['Reduce downtime with fast restore', 'Protect against ransomware and data loss', 'Ensure compliance across systems'], color: '#3B82F6' },
        { icon: <Shield />, title: 'Cloud Security', desc: 'Secure your cloud environments with end-to-end encryption, threat monitoring, and compliance frameworks.', features: ['Prevent cyber risks and vulnerabilities', 'Enable safe remote access', 'Compliance risk management'], color: '#10B981' },
        { icon: <Layers />, title: 'Hybrid Cloud Services', desc: 'Unlock maximum efficiency with intelligent hybrid cloud strategies.', features: ['Seamless integration across environments', 'Unified security and monitoring', 'Optimized cost & performance'], color: '#8B5CF6' },
        { icon: <RefreshCw />, title: 'Cloud Disaster Recovery', desc: 'Shield your business from operational paralysis with proactive disaster recovery.', features: ['Swift data restoration process', 'Minimal operational interruption', 'Rapid crisis response mechanism'], color: '#F59E0B' },
        { icon: <UploadCloud />, title: 'Cloud Migration', desc: 'Seamlessly transition your business to cloud technology without complexity.', features: ['Zero-downtime system transfer', 'Minimal operational disruption', 'Expert-guided migration strategy'], color: '#EF4444' },
        { icon: <Database />, title: 'Cloud Storage', desc: 'Revolutionize your data management with intelligent cloud storage solutions.', features: ['Robust security protocols', 'Enhanced data accessibility', 'Scalable storage infrastructure'], color: '#06B6D4' },
        { icon: <Lock />, title: 'Private Cloud', desc: 'Fortify your digital ecosystem with custom private cloud solutions.', features: ['Complete data sovereignty', 'Full regulatory compliance', 'Tailored security architecture'], color: '#84CC16' },
        { icon: <GitMerge />, title: 'Cloud Integration', desc: 'Simplify your digital ecosystem with seamless integration and cloud strategy consulting.', features: ['Boosted operational efficiency', 'Easy integration of cloud platforms', 'Improved data flow'], color: '#8B5CF6' },
        { icon: <Settings />, title: 'Cloud ERP', desc: 'Streamline your enterprise processes with scalable ERP systems.', features: ['Increased operational efficiency', 'Enhanced workflow management', 'Real-time insights'], color: '#F97316' },
        { icon: <Users />, title: 'Cloud CRM', desc: 'Improve customer interactions and service delivery.', features: ['Enhanced customer relationships', 'Improved service delivery', 'Better sales and user management'], color: '#EC4899' },
        { icon: <Cpu />, title: 'Cloud Computing', desc: 'Boost efficiency and reduce operational costs.', features: ['Tailored to your business needs', 'Maximized efficiency and savings', 'Cloud solution implementation'], color: '#6366F1' },
        { icon: <Building />, title: 'Enterprise Cloud', desc: 'Drive efficiency and scalability for large organizations.', features: ['Solutions for complex operations', 'Growth and adaptability support', 'Optimal performance'], color: '#0EA5E9' },
        { icon: <Wifi />, title: 'Cloud Networking', desc: 'Enhance connectivity and collaboration with secure cloud networking.', features: ['Supports business growth and innovation', 'Scalable and secure network infrastructure', 'Seamless integration for smooth operations'], color: '#14B8A6' },
        { icon: <Server />, title: 'Cloud Hosting', desc: 'Optimize performance with reliable and scalable cloud hosting.', features: ['Robust support tailored to your needs', 'Fast load times and continuous availability', 'Ensures consistent, high-performance hosting'], color: '#F43F5E' },
        { icon: <Download />, title: 'Cloud Consulting', desc: 'Expert guidance for your cloud strategy and implementation.', features: ['Strategic planning', 'Technology selection', 'Implementation roadmap'], color: '#8B5CF6' },
    ];

    // ===== CLOUD DEPLOYMENT TYPES (Added two more columns) =====
    const deploymentTypes = [
        {
            title: 'Public Cloud Deployments',
            desc: 'Explore unlimited scalability and cost savings with public cloud.',
            icon: <Globe />,
            features: ['Optimized for growth and efficiency.', 'Effortless scalability with cost control.', 'High-performance cloud infrastructure.'],
            bgColor: 'rgba(59, 130, 246, 0.08)',
            borderColor: '#3B82F6'
        },
        {
            title: 'Private Cloud Deployments',
            desc: 'Achieve maximum data control and security with private cloud.',
            icon: <Key />,
            features: ['Enhanced data protection.', 'Secure, isolated environments.', 'Strict regulatory and compliance requirements.'],
            bgColor: 'rgba(16, 185, 129, 0.08)',
            borderColor: '#10B981'
        },
        {
            title: 'Hybrid Cloud Deployments',
            desc: 'Utilize the best of both worlds with hybrid cloud deployment.',
            icon: <Layers />,
            features: ['Seamless integration.', 'Enhanced flexibility and scalability.', 'Optimize workloads and reduce costs.'],
            bgColor: 'rgba(139, 92, 246, 0.08)',
            borderColor: '#8B5CF6'
        },
        {
            title: 'Multi-Cloud Deployments',
            desc: 'Increase resilience and avoid vendor lock-in with multi-cloud.',
            icon: <Cloud />,
            features: ['Improved performance and reliability.', 'Distribute workloads across platforms.', 'Strategic flexibility for business growth.'],
            bgColor: 'rgba(245, 158, 11, 0.08)',
            borderColor: '#F59E0B'
        },
        {
            title: 'Server-less Deployments',
            desc: 'Reduce infrastructure management with server-less cloud.',
            icon: <Zap />,
            features: ['Faster time-to-market.', 'Minimal operational overhead.', 'Focus on development and innovation.'],
            bgColor: 'rgba(239, 68, 68, 0.08)',
            borderColor: '#EF4444'
        },
        {
            title: 'Edge Cloud Deployments',
            desc: 'Improve response times and reduce latency with edge cloud.',
            icon: <Loader />,
            features: ['Data processing for faster services.', 'Optimized for high-performance applications.', 'Reduced latency and enhanced user experiences.'],
            bgColor: 'rgba(20, 184, 166, 0.08)',
            borderColor: '#14B8A6'
        },
    ];

    // ===== REDESIGNED HIRING MODELS =====
    const hiringModels = [
        {
            title: 'Fixed Price Model',
            description: 'For businesses with well-defined project scope and requirements.',
            price: 'From $25,000',
            features: ['Simplified process', 'Higher predictability', 'Greater transparency', 'Reduced risk', 'Low management efforts'],
            color: '#10B981',
            gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
            bestFor: ['Specific Cloud Migration', 'Security Implementation', 'Compliance Projects'],
            icon: <FileText />
        },
        {
            title: 'Dedicated Hiring Model',
            description: 'For businesses with long-term project requirements or complex development process.',
            price: 'From $8,500 /month',
            features: ['Complete control', 'More flexibility', 'Focused and dedicated approach', 'Faster time to market', 'Staff Augmentation'],
            color: '#3B82F6',
            gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
            bestFor: ['Ongoing Cloud Management', 'DevOps Implementation', 'Continuous Optimization'],
            icon: <Users />
        },
        {
            title: 'Time & Material Model',
            description: 'For businesses looking to pay for completed project instead of committing to fixed project cost.',
            price: '$75 - $200 /hour',
            features: ['Faster project start', 'Flexibility to adapt as per changing needs', 'Pay as you go model', 'Easy scaling', 'Transparent billing'],
            color: '#8B5CF6',
            gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
            bestFor: ['Cloud Consulting', 'Proof of Concepts', 'Emergency Support'],
            icon: <Clock />
        },
    ];

    // ===== INDUSTRIES WE CATER TO (Reduced to three) =====
    const industries = [
        {
            name: 'Healthcare',
            icon: '🏥',
            desc: 'Building smart healthcare solutions with AI-powered diagnostics, predictive analytics, and secure patient data management in HIPAA-compliant cloud environments.',
            image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80',
            color: '#10B981'
        },
        {
            name: 'Retail & eCommerce',
            icon: '🛍️',
            desc: 'Enhancing retail journeys with real-time inventory tracking, personalized customer experiences, and scalable infrastructure to handle peak shopping seasons seamlessly.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
            color: '#8B5CF6'
        },
        {
            name: 'Media & Entertainment',
            icon: '🎬',
            desc: 'Custom tech to empower brands with content delivery networks, streaming optimization, and audience analytics for personalized media experiences.',
            image: 'https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?auto=format&fit=crop&w=800&q=80',
            color: '#EC4899'
        },
    ];

    const processSteps = [
        { id: 1, title: 'Assessment', desc: 'Identify requirements and define a delivery plan in 2–4 weeks.', icon: <FileText /> },
        { id: 2, title: 'Foundation', desc: 'Set up your environment and security baseline in 2–4 weeks.', icon: <Settings /> },
        { id: 3, title: 'Implementation', desc: 'Execute development through iterative sprints and validation.', icon: <Code /> },
        { id: 4, title: 'Transition', desc: 'Complete handoff with knowledge transfer in 2–4 weeks.', icon: <RefreshCw /> },
    ];

    // ===== FAQ (Added three more, removed button) =====
    const faqs = [
        { q: 'Why do businesses need cloud migration?', a: 'Cloud migration is one of the most impactful transformations a business can undertake because it directly improves agility, scalability, resilience, and cost efficiency.' },
        { q: 'When should I choose cloud migration consulting?', a: 'Choose consulting for complex migrations involving mission-critical systems with zero downtime, compliance-heavy environments, legacy system re-architecting, or when business timelines require faster execution.' },
        { q: 'What are the key benefits of cloud adoption?', a: 'Key benefits include faster innovation, reduced costs via pay-as-you-go pricing, enhanced reliability with multi-zone availability, improved security, and greater scalability.' },
        { q: 'How long does a typical cloud migration take?', a: 'A typical migration timeline ranges from 8-16 weeks depending on complexity. We follow a phased approach to ensure zero disruption to your business operations.' },
        { q: 'What cloud providers do you work with?', a: 'We are certified partners with all major cloud providers including AWS, Microsoft Azure, and Google Cloud Platform, providing vendor-neutral recommendations.' },
        { q: 'How do you ensure data security during migration?', a: 'We implement end-to-end encryption, secure data transfer protocols, and comprehensive compliance frameworks to ensure your data remains protected throughout the migration process.' },
    ];

    return (
        <div className={styles.pageContainer}>

            {/* ===== HERO SECTION ===== */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}></div>
                <div className={styles.heroContent}>
                    <motion.div className={styles.heroText} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className={styles.heroBadge}>
                            <Sparkles size={18} /> Secure & Scalable Cloud Solutions
                        </div>
                        <h1 className={styles.heroTitle}>
                            Cloud <span className={styles.heroTitleHighlight}>Services</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Modernize Faster. Scale Smarter. Secure Everything.
                        </p>
                        <p className={styles.heroDescription}>
                            Future-ready businesses run on cloud. At BBNTech, we help you modernize, migrate, manage, and scale your cloud environments while ensuring your business stays agile, compliant, and cost-optimized.
                        </p>
                        <div className={styles.heroCta}>
                            <Link href="/contact" className={styles.ctaButtonPrimary}>
                                Start Your Cloud Journey <ChevronRight size={20} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Updated Testimonial Card */}
                    <motion.div
                        className={styles.heroTestimonial}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialHeader}>
                                <div className={styles.testimonialImage}>

                                    <Image
                                        src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww"
                                        alt="Jonathan - Client"
                                        width={100}
                                        height={100}
                                        className={styles.clientImage}
                                    />
                                </div>
                                <div className={styles.testimonialInfo}>
                                    <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                                    <p className={styles.testimonialRole}>{testimonial.role}</p>
                                    <div className={styles.testimonialRating}>
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <MessageSquare className={styles.quoteIcon} />
                            <p className={styles.testimonialText}>&quot;{testimonial.content}&quot;</p>
                            <div className={styles.testimonialProject}>
                                <Award size={16} /> {testimonial.project}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== TRUSTED BY ===== */}
            <section className={styles.trustedBy}>
                <p className={styles.trustedLabel}>Trusted by startups and Fortune 500 companies</p>
                <div className={styles.trustedLogos}>
                    {['Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle'].map((logo, i) => (
                        <div key={i} className={styles.logoItem}>{logo}</div>
                    ))}
                </div>
            </section>

            {/* ===== MAIN CONTENT TABS ===== */}
            <section className={styles.mainContent}>
                <div className={styles.tabNav}>
                    <button className={`${styles.tabButton} ${activeTab === 'services' ? styles.active : ''}`} onClick={() => setActiveTab('services')}>
                        Cloud Services & Solutions
                    </button>
                    <button className={`${styles.tabButton} ${activeTab === 'expertise' ? styles.active : ''}`} onClick={() => setActiveTab('expertise')}>
                        Our Cloud Expertise
                    </button>
                    <button className={`${styles.tabButton} ${activeTab === 'hiring' ? styles.active : ''}`} onClick={() => setActiveTab('hiring')}>
                        Hiring Models
                    </button>
                </div>

                <div className={styles.tabContent}>
                    {/* ----- CLOUD SERVICES TAB ----- */}
                    {activeTab === 'services' && (
                        <motion.div key="services" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.servicesTab}>
                            <div className={styles.sectionIntro}>
                                <h2>Cloud Services and Solutions for Modern Businesses</h2>
                                <p>Simplify operations, enhance security, and cut costs while accelerating your digital transformation. Our cloud engineers bring deep experience across AWS, Azure, and Google Cloud.</p>
                            </div>
                            <div className={styles.servicesGrid}>
                                {cloudServices.map((service, idx) => (
                                    <div key={idx} className={styles.serviceCard} style={{ borderTopColor: service.color }}>
                                        <div className={styles.serviceIcon} style={{ backgroundColor: service.color }}>
                                            {service.icon}
                                        </div>
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                        <ul className={styles.serviceFeatures}>
                                            {service.features.map((feat, fIdx) => (
                                                <li key={fIdx}><CheckCircle size={16} color={service.color} /> {feat}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Zero Disruption Banner */}
                            <div className={styles.disruptionBanner}>
                                <div className={styles.bannerContent}>
                                    <h3>Move to Cloud With <span>Zero Disruption</span></h3>
                                    <p>Migrate apps, data, and workloads safely using our proven Cloud Migration Framework.</p>
                                    <Link href="/migration" className={styles.bannerButton}>
                                        Learn About Our Framework <ChevronRight size={18} />
                                    </Link>
                                </div>
                                <div className={styles.bannerGraphic}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D"
                                        alt="Cloud Migration"
                                        fill
                                        className={styles.bannerImage}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ----- CLOUD EXPERTISE TAB ----- */}
                    {activeTab === 'expertise' && (
                        <motion.div key="expertise" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.expertiseTab}>
                            <div className={styles.sectionIntro}>
                                <h2>Our Cloud Expertise</h2>
                                <p>We have a team of highly experienced engineers to handle cloud deployment and other cloud services.</p>
                            </div>

                            <h3 className={styles.subsectionTitle}>Types of Cloud Deployments</h3>
                            <div className={styles.deploymentsGrid}>
                                {deploymentTypes.map((type, idx) => (
                                    <div key={idx} className={styles.deploymentCard} style={{ backgroundColor: type.bgColor, borderColor: type.borderColor }}>
                                        <div className={styles.deploymentIcon} style={{ color: type.borderColor }}>
                                            {type.icon}
                                        </div>
                                        <h4>{type.title}</h4>
                                        <p>{type.desc}</p>
                                        <ul>
                                            {type.features.map((feat, fIdx) => <li key={fIdx}>{feat}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Clouds We Work With */}
                            <h3 className={styles.subsectionTitle}>Clouds We Work With</h3>
                            <div className={styles.cloudProviders}>
                                <div className={styles.providerCard}>
                                    <div className={styles.providerLogo} style={{ backgroundColor: '#0078D420', color: '#0078D4' }}>A</div>
                                    <h4>Microsoft Azure</h4>
                                    <p>Comprehensive suite of services to build and deploy cutting-edge applications.</p>
                                </div>
                                <div className={styles.providerCard}>
                                    <div className={styles.providerLogo} style={{ backgroundColor: '#4285F420', color: '#4285F4' }}>G</div>
                                    <h4>Google Cloud</h4>
                                    <p>Open-source platform with flexible scaling to build & deploy next-gen apps.</p>
                                </div>
                                <div className={styles.providerCard}>
                                    <div className={styles.providerLogo} style={{ backgroundColor: '#FF990020', color: '#FF9900' }}>W</div>
                                    <h4>Amazon AWS</h4>
                                    <p>The leading cloud platform with extensive global infrastructure and services.</p>
                                </div>
                            </div>

                            {/* Why Choose Us Section */}
                            <div className={styles.whyChooseSection}>
                                <h2>Why Choose BBNTech?</h2>
                                <p>We bring innovation, expertise, and reliability to every cloud project. With 20+ years of cloud expertise, certified talent, and reliable delivery.</p>
                                <div className={styles.whyChooseGrid}>
                                    <div className={styles.whyChooseCard}><Award /> India&apos;s Top 1% Software Talent</div>
                                    <div className={styles.whyChooseCard}><Users /> Trusted by Startups to Fortune 500</div>
                                    <div className={styles.whyChooseCard}><Workflow /> Idea to Deployment, We Handle All</div>
                                    <div className={styles.whyChooseCard}><Globe /> Time-Zone Friendly: Global Presence</div>
                                    <div className={styles.whyChooseCard}><Shield /> Top-tier Data Security Protocols</div>
                                    <div className={styles.whyChooseCard}><CheckCircle /> On-time Delivery, No Surprises</div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ----- HIRING MODELS TAB ----- */}
                    {activeTab === 'hiring' && (
                        <motion.div key="hiring" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.hiringTab}>
                            <div className={styles.sectionIntro}>
                                <h2>Our Custom Hiring Models</h2>
                                <p>Choose from our flexible hiring models designed to fit your needs and budget.</p>
                            </div>

                            {/* Pricing Cards */}
                            <div className={styles.pricingGrid}>
                                {hiringModels.map((model, idx) => (
                                    <motion.div
                                        key={idx}
                                        className={styles.pricingCard}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                    >
                                        <div className={styles.pricingHeader} style={{ background: model.gradient }}>
                                            <div className={styles.priceIcon}>{model.icon}</div>
                                            <div className={styles.priceTag}>{model.price}</div>
                                            <h3>{model.title}</h3>
                                        </div>

                                        <div className={styles.pricingBody}>
                                            <p className={styles.modelDescription}>{model.description}</p>

                                            <div className={styles.featuresBox}>
                                                <h4>Key Features</h4>
                                                <ul>
                                                    {model.features.map((feature, fIdx) => (
                                                        <li key={fIdx}><CheckCircle size={18} color={model.color} /> {feature}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className={styles.bestForBox}>
                                                <h4>Best For</h4>
                                                <div className={styles.bestForTags}>
                                                    {model.bestFor.map((item, bIdx) => (
                                                        <span key={bIdx} className={styles.bestForTag} style={{ backgroundColor: `${model.color}15`, color: model.color }}>
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <Link href="/contact" className={styles.chooseModelButton} style={{ backgroundColor: model.color }}>
                                                Choose This Model <ChevronRight size={18} />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* ===== INDUSTRIES SECTION (Updated with background images) ===== */}
            <section className={styles.industriesSection}>
                <div className={styles.sectionIntro}>
                    <h2>Industries We Cater To</h2>
                    <p>Partnering with businesses in diverse sectors to unlock new avenues for growth and innovation.</p>
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
                                <h4 className={styles.industryName}>{industry.name}</h4>
                            </div>

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
                    ))}
                </div>
            </section>

            {/* ===== PROCESS SECTION ===== */}
            <section className={styles.processSection}>
                <div className={styles.sectionIntro}>
                    <h2>Our Process</h2>
                    <p>A well-defined, accountable workflow that guides your project through each stage with clarity.</p>
                </div>
                <div className={styles.processSteps}>
                    {processSteps.map((step) => (
                        <div key={step.id} className={styles.processStep}>
                            <div className={styles.stepNumber}>0{step.id}</div>
                            <div className={styles.stepIcon}>{step.icon}</div>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== FAQ SECTION (Updated with more FAQs, removed button) ===== */}
            <section className={styles.faqSection}>
                <div className={styles.sectionIntro}>
                    <h2>A Guide to Cloud Services & Migration</h2>
                    <p>Answers to common questions about cloud services and migration.</p>
                </div>
                <div className={styles.faqList}>
                    {faqs.map((faq, idx) => (
                        <div key={idx} className={styles.faqItem}>
                            <button className={styles.faqQuestion} onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                                <span>{faq.q}</span>
                                <span className={`${styles.faqToggle} ${openFaq === idx ? styles.open : ''}`}>+</span>
                            </button>
                            <AnimatePresence>
                                {openFaq === idx && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={styles.faqAnswer}
                                    >
                                        <p>{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}