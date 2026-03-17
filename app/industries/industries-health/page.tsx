'use client';

// import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Sparkles, ArrowRight, MessageSquare, CheckCircle,
    Users, Lock, Building2, Shield,
    Smartphone, Database, Cpu, Box, Radio, Brain,
    Compass, Code, GitBranch, RefreshCw, Cloud, Target,
    Server, Activity, HeartPulse, 
    Microscope, Pill, Calendar,
    Fingerprint, Layers, Layout,
} from 'lucide-react';
import styles from './health.module.css';

export default function HealthcarePage() {
    // const [openFaq, setOpenFaq] = useState<number | null>(0);
    // const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'Dr. Sarah Chen',
        role: 'Chief Medical Information Officer, HealthFirst',
        content: 'ValueCoders built our telemedicine platform from the ground up – it now serves over 200,000 patients across 50 hospitals. Their deep understanding of healthcare regulations and commitment to quality is unmatched.',
        rating: 5,
        project: 'Enterprise Telemedicine Platform'
    };

    // ============ HEALTHCARE SOLUTIONS (12 cards from the URL) ============
    const healthcareSolutions = [
        {
            id: 1,
            title: 'Healthcare Organization Management',
            description: 'Streamline operations with tailored management solutions for healthcare organizations.',
            icon: <Building2 />,
            color: '#3B82F6',
            features: [
                'Medical inventory software',
                'Hospital asset tracking',
                'Medical HR and staffing',
                'Medical Billing Software',
                'Medical training and education',
                'Revenue cycle management'
            ]
        },
        {
            id: 2,
            title: 'Care Management Software',
            description: 'Improve patient care with integrated software designed for effective care management.',
            icon: <HeartPulse />,
            color: '#10B981',
            features: [
                'EHR/EMR systems',
                'Healthcare CRM',
                'Healthcare data analytics',
                'Medical VR & AR solutions',
                'Virtual hospital'
            ]
        },
        {
            id: 3,
            title: 'Patient-Centered Software',
            description: 'Deliver superior patient experiences with software focused on personalized care and engagement.',
            icon: <Users />,
            color: '#8B5CF6',
            features: [
                'Telemedicine software',
                'Patient engagement',
                'Chronic disease management',
                'Remote patient monitoring',
                'Digital therapeutics (DTx)',
                'Home care software'
            ]
        },
        {
            id: 4,
            title: 'Medical Imaging and Lab Software',
            description: 'Improve diagnostic accuracy and lab efficiency with advanced imaging and lab management.',
            icon: <Microscope />,
            color: '#F59E0B',
            features: [
                'Medical image analysis',
                'In Vitro diagnostics',
                'Practice management',
                'Medical image management',
                'Lab management'
            ]
        },
        {
            id: 5,
            title: 'Medical Device Software & SaMD',
            description: 'Ensure seamless integration with custom software for medical devices and Software as a Medical Device.',
            icon: <Cpu />,
            color: '#EC4899',
            features: [
                'Cloud software',
                'Biosensor cloud applications',
                'ML-based image analysis',
                'ML-based sensor analysis',
                'AR for diagnosis'
            ]
        },
        {
            id: 6,
            title: 'User Software',
            description: 'Enhance user experience and operational efficiency with intuitive software solutions.',
            icon: <Smartphone />,
            color: '#06B6D4',
            features: [
                'Patient applications',
                'Medical staff applications',
                'Portals for medical staff',
                'Healthcare Chatbot Development'
            ]
        },
        {
            id: 7,
            title: 'Management Software',
            description: 'Achieve better resource management and operational control with bespoke management software.',
            icon: <Server />,
            color: '#3B82F6',
            features: [
                'Enterprise resource planning',
                'Clinical trials',
                'Supply chain software',
                'Healthcare ecommerce'
            ]
        },
        {
            id: 8,
            title: 'End-Customer Software',
            description: 'Provide top-notch service with software tailored to meet the needs of your end customers.',
            icon: <Target />,
            color: '#10B981',
            features: [
                'Medication management apps',
                'DTC medication delivery',
                'Physician portals'
            ]
        }
    ];

    // ============ ADVANCED TECHNOLOGIES (from the URL) ============
    const advancedTech = [
        { title: 'Big Data', description: 'Harness large datasets to improve decision-making and patient outcomes.', icon: <Database />, color: '#3B82F6' },
        { title: 'Computer Vision', description: 'Enhance diagnostic accuracy with advanced medical imaging analysis.', icon: <Scan />, color: '#10B981' },
        { title: 'IoMT', description: 'Connect medical devices to optimize patient monitoring and care.', icon: <Radio />, color: '#8B5CF6' },
        { title: 'Virtual Reality', description: 'Provide immersive simulations for training and patient therapy.', icon: <Box />, color: '#F59E0B' },
        { title: 'Augmented Reality', description: 'Enhance surgical precision and medical training.', icon: <Layers />, color: '#EC4899' },
        { title: 'Data Science', description: 'Apply advanced analytics to drive data-driven healthcare strategies.', icon: <Activity />, color: '#06B6D4' },
        { title: 'Machine Learning', description: 'Implement predictive models to improve care and efficiency.', icon: <Brain />, color: '#3B82F6' },
        { title: 'Blockchain', description: 'Ensure secure, tamper-proof health record management.', icon: <LinkChain />, color: '#10B981' },
    ];

    // ============ HEALTHCARE IT SERVICES (from the URL) ============
    const healthcareServices = [
        {
            title: 'Healthcare IT Consulting',
            description: 'Explore the potential of medical tech with our seasoned consultants.',
            icon: <Compass />,
            color: '#3B82F6',
            points: ['Build strategic IT roadmaps', 'Design cutting-edge tech solutions', 'Ensure compliant architecture']
        },
        {
            title: 'Healthcare Software Development',
            description: 'We build bespoke software solutions that elevate patient care.',
            icon: <Code />,
            color: '#10B981',
            points: ['Seamless integration', 'Robust security for PHI', 'Adherence to HIPAA, GDPR']
        },
        {
            title: 'Integration Services',
            description: 'Boost connectivity and streamline your healthcare IT operations.',
            icon: <GitBranch />,
            color: '#8B5CF6',
            points: ['Champion interoperability', 'Simplify future extension adoption', 'Enhance value via integrations']
        },
        {
            title: 'Healthcare Software Modernization',
            description: 'Revitalize your applications with effective advice from our experts.',
            icon: <RefreshCw />,
            color: '#F59E0B',
            points: ['From reverse engineering to evolution', 'Deploy modern, feature-rich software', 'Smooth legacy transition']
        },
        {
            title: 'Managed IT Services',
            description: 'Optimize your healthcare IT ecosystem for reliability and efficiency.',
            icon: <Server />,
            color: '#EC4899',
            points: ['Monitor and evolve IT infrastructure', 'Manage performance and operations', 'Conduct compliance audits']
        },
        {
            title: 'Cloud Migration',
            description: 'Elevate your healthcare operations with our seamless cloud solutions.',
            icon: <Cloud />,
            color: '#06B6D4',
            points: ['Harness cloud technologies', 'Achieve scalability and cost-efficiency', 'Ensure disruption-free transitions']
        },
        {
            title: 'Cybersecurity & Compliance',
            description: 'Fortify your systems with our comprehensive security services.',
            icon: <Shield />,
            color: '#3B82F6',
            points: ['In-depth security assessments', 'Address and remediate vulnerabilities', 'Stay ahead of threats']
        },
        {
            title: 'Healthcare Data Analytics',
            description: 'Transform raw data into actionable insights.',
            icon: <Activity />,
            color: '#10B981',
            points: ['Drive superior care with analytics', 'Analyze patient-generated health data', 'Optimize resources']
        }
    ];

    // ============ KEY FEATURES (from the URL) ============
    const keyFeatures = [
        { text: 'Interoperability – seamless system integration', icon: <GitBranch />, color: '#3B82F6' },
        { text: 'Data Security – robust encryption & protocols', icon: <Lock />, color: '#10B981' },
        { text: 'User-Friendly Interface – intuitive UI/UX', icon: <Layout />, color: '#8B5CF6' },
        { text: 'Customizability – tailored to unique needs', icon: <Settings />, color: '#F59E0B' },
        { text: 'Scalability – handles growth without issues', icon: <TrendingUp />, color: '#EC4899' }
    ];

    // ============ COMPLIANCE MEASURES ============
    const complianceMeasures = [
        { text: 'Regular Updates – reflect regulatory changes', icon: <RefreshCw />, color: '#3B82F6' },
        { text: 'Audit Trails – transparent interaction records', icon: <FileText />, color: '#10B981' },
        { text: 'Access Controls – defined roles and permissions', icon: <Fingerprint />, color: '#8B5CF6' }
    ];

    // ============ DATA MIGRATION FEATURES ============
    const migrationFeatures = [
        { text: 'Data Mapping Tools – ensure consistency', icon: <Map />, color: '#3B82F6' },
        { text: 'Migration Assistance – hands-on support', icon: <Users />, color: '#10B981' },
        { text: 'Compatibility Features – standard formats', icon: <CheckCircle />, color: '#8B5CF6' }
    ];

    // ============ AI/ML BENEFITS (from the URL) ============
    const aiMlBenefits = [
        { text: 'Improved Diagnostics – analyze images with precision', icon: <Scan />, color: '#3B82F6' },
        { text: 'Predictive Analytics – forecast health trends', icon: <Activity />, color: '#10B981' },
        { text: 'Personalized Treatment – tailor plans to patients', icon: <HeartPulse />, color: '#8B5CF6' },
        { text: 'Drug Discovery – accelerate research', icon: <Pill />, color: '#F59E0B' },
        { text: 'Natural Language Processing – interpret EHR data', icon: <MessageSquare />, color: '#EC4899' },
        { text: 'Operational Efficiency – streamline scheduling', icon: <Calendar />, color: '#06B6D4' },
        { text: 'Virtual Health Assistants – 24/7 patient support', icon: <Bot />, color: '#3B82F6' },
        { text: 'Enhanced Research – analyze medical literature', icon: <BookOpen />, color: '#10B981' },
        { text: 'Remote Monitoring – continuous patient care', icon: <Radio />, color: '#8B5CF6' },
        { text: 'Cost Efficiency – automate routine tasks', icon: <DollarSign />, color: '#F59E0B' }
    ];

    // ============ FUTURE TRENDS ============
    const futureTrends = [
        'AI-driven diagnostics and decision support',
        'Telemedicine and remote patient monitoring expansion',
        'Blockchain for secure health data exchange',
        'AR/VR for medical training and therapy',
        'Wearable device integration for continuous care',
        'Predictive analytics for population health'
    ];

    // ============ TRUSTED BY ============
    const trustedCompanies = ['Microsoft', 'Amazon', 'Google', 'IBM', 'SAP', 'Oracle'];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80"
                        alt="Healthcare Background"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroInner}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.heroBadge}>
                            <Sparkles size={16} /> Healthcare Software Development
                        </div>
                        <h1 className={styles.heroTitle}>
                            Custom Healthcare <span className={styles.highlight}>Software Solutions</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Transition to digital healthcare and deliver better outcomes with our advanced software development services. We build software across web, mobile, and medical devices to enable next-gen healthcare solutions.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link href="/contact" className={styles.primaryButton}>
                                Build Your Solution <ArrowRight size={18} />
                            </Link>
                            <Link href="#solutions" className={styles.secondaryButton}>
                                Explore Solutions
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        className={styles.heroTestimonial}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialImage}>
                                <Image
                                    src="/images/user.png"
                                    alt={testimonial.name}
                                    width={60}
                                    height={60}
                                    className={styles.testimonialAvatar}
                                />
                            </div>
                            <div className={styles.testimonialContent}>
                                <MessageSquare className={styles.quoteIcon} size={20} />
                                <p className={styles.testimonialText}>&quot;{testimonial.content}</p>
                                <div className={styles.testimonialAuthor}>
                                    <strong>{testimonial.name}</strong>
                                    <span>{testimonial.role}</span>
                                </div>
                                <div className={styles.testimonialRating}>
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== TRUSTED BY SECTION ===== */}
            <section className={styles.trustedSection}>
                <div className={styles.container}>
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
                                <span>{company}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HEALTHCARE SOLUTIONS SECTION ===== */}
            <section className={styles.solutionsSection} id="solutions">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Healthcare Software <span className={styles.titleHighlight}>Development Solutions</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Transition to digital healthcare and deliver better outcomes with our advanced software development services. We build software across web, mobile, and medical devices to enable next-gen healthcare solutions.
                        </p>
                    </div>
                    <div className={styles.solutionsGrid}>
                        {healthcareSolutions.map((item, index) => (
                            <motion.div
                                key={item.id}
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
                                <h3 className={styles.solutionTitle}>{item.title}</h3>
                                <p className={styles.solutionDescription}>{item.description}</p>
                                <div className={styles.solutionFeatures}>
                                    {item.features.slice(0, 4).map((feature, idx) => (
                                        <span key={idx} className={styles.solutionFeature}>
                                            <CheckCircle size={12} style={{ color: item.color }} />
                                            {feature}
                                        </span>
                                    ))}
                                    {item.features.length > 4 && (
                                        <span className={styles.solutionFeature}>+{item.features.length - 4} more</span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== ADVANCED TECHNOLOGIES SECTION ===== */}
            <section className={styles.techSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Advanced <span className={styles.titleHighlight}>Technologies</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            At ValueCoders, we utilize cutting-edge technologies to deliver innovative custom healthcare software solutions.
                        </p>
                    </div>
                    <div className={styles.techGrid}>
                        {advancedTech.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.techCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.techIcon} style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <h4 className={styles.techTitle}>{item.title}</h4>
                                <p className={styles.techDescription}>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HEALTHCARE IT SERVICES SECTION ===== */}
            <section className={styles.servicesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Our Healthcare <span className={styles.titleHighlight}>IT Services</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            As a leading healthcare software development company, ValueCoders specializes in developing medical web apps and solutions that address your challenges.
                        </p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {healthcareServices.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.serviceCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.serviceIcon} style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{item.title}</h3>
                                <p className={styles.serviceDescription}>{item.description}</p>
                                <div className={styles.servicePoints}>
                                    {item.points.map((point, idx) => (
                                        <span key={idx} className={styles.servicePoint}>• {point}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== KEY FEATURES + COMPLIANCE + MIGRATION (split layout) ===== */}
            <section className={styles.featuresOverviewSection}>
                <div className={styles.container}>
                    <div className={styles.overviewGrid}>
                        {/* Key Features */}
                        <div className={styles.overviewCol}>
                            <h3 className={styles.overviewTitle}>Important Features</h3>
                            <div className={styles.overviewList}>
                                {keyFeatures.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className={styles.overviewItem}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className={styles.overviewItemIcon} style={{ color: item.color }}>
                                            {item.icon}
                                        </div>
                                        <span>{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Compliance Measures */}
                        <div className={styles.overviewCol}>
                            <h3 className={styles.overviewTitle}>Ensuring Compliance</h3>
                            <div className={styles.overviewList}>
                                {complianceMeasures.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className={styles.overviewItem}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className={styles.overviewItemIcon} style={{ color: item.color }}>
                                            {item.icon}
                                        </div>
                                        <span>{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Data Migration */}
                        <div className={styles.overviewCol}>
                            <h3 className={styles.overviewTitle}>Data Migration</h3>
                            <div className={styles.overviewList}>
                                {migrationFeatures.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className={styles.overviewItem}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className={styles.overviewItemIcon} style={{ color: item.color }}>
                                            {item.icon}
                                        </div>
                                        <span>{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== AI & ML BENEFITS SECTION ===== */}
            <section className={styles.aiSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Integrating <span className={styles.titleHighlight}>AI & ML</span> in Healthcare
                        </h2>
                        <p className={styles.sectionDescription}>
                            The integration of AI and Machine Learning into healthcare software has ushered in a new era of medical innovation and efficiency.
                        </p>
                    </div>
                    <div className={styles.aiGrid}>
                        {aiMlBenefits.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.aiCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.03 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                            >
                                <div className={styles.aiIcon} style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <span className={styles.aiText}>{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FUTURE TRENDS SECTION ===== */}
            <section className={styles.trendsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Future Trends in <span className={styles.titleHighlight}>Healthcare Software</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            The healthcare software industry continually evolves. Here are some notable developments shaping its future.
                        </p>
                    </div>
                    <div className={styles.trendsGrid}>
                        {futureTrends.map((trend, index) => (
                            <motion.div
                                key={index}
                                className={styles.trendCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className={styles.trendNumber}>0{index + 1}</span>
                                <p className={styles.trendText}>{trend}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Improve Patient Care with Intuitive Technology!</h2>
                        <p className={styles.ctaDescription}>
                            ValueCoders develops user-friendly software for seamless interactions. Let&apos;s discuss your project.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Start a Conversation <ArrowRight size={18} />
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// ============ CUSTOM ICON COMPONENTS WITH PROPER TYPING ============
const LinkChain = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
);

const Scan = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
        <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
        <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
        <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
        <rect x="7" y="7" width="10" height="10" rx="2"/>
    </svg>
);

const Settings = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
    </svg>
);

const TrendingUp = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
    </svg>
);

const FileText = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
    </svg>
);

const Map = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/>
        <line x1="9" y1="3" x2="9" y2="18"/>
        <line x1="15" y1="6" x2="15" y2="21"/>
    </svg>
);

const Bot = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="11" width="18" height="10" rx="2"/>
        <circle cx="12" cy="5" r="2"/>
        <path d="M12 7v4"/>
        <line x1="8" y1="16" x2="8" y2="16"/>
        <line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
);

const BookOpen = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
);

const DollarSign = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
);