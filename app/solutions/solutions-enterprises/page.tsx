'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users, CheckCircle, Award, MessageSquare, Sparkles,
    Cloud, ChevronRight, HelpCircle, ArrowRight, HeadphonesIcon, 
    RefreshCw, ShieldCheck, Shield, Clock, Target, Users as UsersIcon,
    Wallet, Scale, Briefcase, Globe as GlobeIcon, Activity, DollarSign,
    Rocket as RocketIcon, TrendingUp as TrendingIcon, HeartHandshake,
    Target as TargetIcon, Briefcase as BriefcaseIcon, AlertTriangle,
    Users as TeamIcon, Cpu as CpuIcon, Settings, BarChart3, Eye as EyeIcon,
    Workflow as WorkflowIcon, Sparkles as SparklesIcon, Eye, Layers3, HardDrive,
    Shield as ShieldIcon, Cloud as CloudIcon, GitPullRequest as GitPullRequestIcon,
    Cpu as CpuChip, Network as NetworkIcon, Database as DatabaseIcon,
    Brain, LineChart as LineChartIcon, ShieldCheck as ShieldCheckIcon,
    TrendingUp as TrendingUpIcon, Scale as ScaleIcon, 
    Server as ServerIcon, Zap as ZapIcon, Repeat,
    
} from 'lucide-react';
import styles from './enterprise.module.css';

export default function EnterpriseSolutionPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // ----- HERO TESTIMONIAL (unchanged) -----
    const testimonial = {
        name: 'Karan',
        role: 'CTO, Enterprise Solutions',
        content: 'We needed to automate a lot of our manual IT processes to cut costs. BBNTech delivered exactly that, helping us see real savings within months.',
        rating: 5,
        project: 'Enterprise Ops Transformation'
    };

    // ----- ENTERPRISE EXPERTISE AREAS (6 cards – fresh design) -----
    const enterpriseExpertise = [
        {
            id: 1,
            title: 'Managed IT Operations',
            description: 'End-to-end management ensuring stable, secure, and scalable enterprise IT environments. We provide 24×7 proactive monitoring and rapid incident response.',
            icon: <HardDrive className={styles.expertiseIcon} />,
            color: '#3B82F6',
            features: [
                'Proactive issue handling',
                '24×7 monitoring',
                'Performance optimization',
                'SLA‑backed support'
            ],
            expandedDesc: 'Our managed services cover infrastructure, applications, and security – all with guaranteed 99.9% uptime.'
        },
        {
            id: 2,
            title: 'Cloud Infrastructure Management',
            description: 'Optimizing enterprise cloud systems for reliability, scalability, and controlled operational costs across AWS, Azure, and GCP.',
            icon: <CloudIcon className={styles.expertiseIcon} />,
            color: '#10B981',
            features: [
                'Resource allocation',
                'Load balancing',
                'Cost control',
                'Multi‑cloud strategy'
            ],
            expandedDesc: 'We help you avoid cloud sprawl and optimise spend while maintaining high performance.'
        },
        {
            id: 3,
            title: 'DevOps Implementation',
            description: 'Streamlining enterprise workflows with automation, faster delivery, and continuous improvement through modern DevOps practices.',
            icon: <GitPullRequestIcon className={styles.expertiseIcon} />,
            color: '#8B5CF6',
            features: [
                'CI/CD pipelines',
                'Automated testing',
                'Rapid deployment',
                'Infrastructure as Code'
            ],
            expandedDesc: 'Reduce release cycles from weeks to hours with fully automated pipelines.'
        },
        {
            id: 4,
            title: 'IT Infrastructure Automation',
            description: 'Reducing manual tasks with enterprise-grade automation for speed, accuracy, and scalability across servers, networks, and applications.',
            icon: <Settings className={styles.expertiseIcon} />,
            color: '#F59E0B',
            features: [
                'Configuration management',
                'Workflow automation',
                'Error reduction',
                'Self‑healing systems'
            ],
            expandedDesc: 'Eliminate repetitive work and let your team focus on innovation.'
        },
        {
            id: 5,
            title: 'Network Operations Management',
            description: 'Ensuring enterprise networks stay secure, reliable, and efficient under high-demand loads with real-time monitoring and threat detection.',
            icon: <NetworkIcon className={styles.expertiseIcon} />,
            color: '#EC4899',
            features: [
                'Traffic monitoring',
                'Threat detection',
                'Downtime prevention',
                'Bandwidth optimization'
            ],
            expandedDesc: 'Proactive network management that scales with your business.'
        },
        {
            id: 6,
            title: 'Disaster Recovery Planning',
            description: 'Preparing enterprises with tested recovery strategies for minimal downtime and data safety – including backup, replication, and failover.',
            icon: <DatabaseIcon className={styles.expertiseIcon} />,
            color: '#06B6D4',
            features: [
                'Data backup solutions',
                'System restore strategies',
                'Risk analysis',
                'DR drills & testing'
            ],
            expandedDesc: 'Be ready for anything with automated, regularly tested recovery plans.'
        }
    ];

    // ----- HIRING MODELS (fresh design) -----
    const hiringModels = [
        {
            title: 'Staff Augmentation',
            description: 'Staff augmentation in enterprise ops services provides instant skill access, filling gaps while scaling operations effectively. Our vetted professionals integrate seamlessly with your in-house teams.',
            icon: <Users className={styles.hiringIcon} />,
            color: '#3B82F6',
            features: [
                'Specialized enterprise expertise',
                'Flexible project staffing',
                'Quick resource onboarding',
                'Cultural fit guarantee'
            ],
            stat: '48h avg. onboarding'
        },
        {
            title: 'Hire Dedicated Teams',
            description: 'Hiring dedicated teams for enterprise IT operations management ensures long-term focus, consistent output, and strong process ownership. We build, manage, and scale your remote pod.',
            icon: <Briefcase className={styles.hiringIcon} />,
            color: '#10B981',
            features: [
                'Full-cycle operational support',
                'Scalable enterprise process optimization',
                'Continuous delivery alignment',
                'Dedicated PM included'
            ],
            stat: 'End‑to‑end ownership'
        }
    ];


    // ----- KEY CHALLENGES (4 challenges – fresh design) -----
    const keyChallenges = [
        {
            title: 'Increasing System Complexity',
            description: 'Enterprises handle multiple applications, networks, and data platforms. Managing these different parts internally creates silos, slowing down operations and causing delays.',
            icon: <Layers3 />,
            color: '#EF4444',
            points: [
                'Hard to align old and new systems',
                'Extra effort needed for smooth integration',
                'Siloed teams reduce efficiency'
            ]
        },
        {
            title: 'Rising Cost Burden',
            description: 'Running IT operations inside the company is expensive. Skilled staff, training programs, and constant upgrades add up quickly. Budgets stretch when unexpected needs appear.',
            icon: <DollarSign />,
            color: '#F59E0B',
            points: [
                'High spend on licenses and tools',
                'Growing expense for expert resources',
                'Unplanned infrastructure costs'
            ]
        },
        {
            title: 'Security & Compliance Pressure',
            description: 'Enterprises face nonstop risks from cyber threats. Internal teams often cannot keep up with compliance rules while managing daily operations.',
            icon: <Shield />,
            color: '#EC4899',
            points: [
                'Limited 24/7 monitoring',
                'Risk of non‑compliance fines',
                'Evolving threat landscape'
            ]
        },
        {
            title: 'Scalability Limitations',
            description: 'Business needs change fast, but internal IT teams struggle to match that speed. Scaling systems or resources quickly is a challenge, especially with limited manpower and outdated processes.',
            icon: <ScaleIcon />,
            color: '#8B5CF6',
            points: [
                'Slower response to growth demands',
                'Difficulty meeting sudden workload spikes',
                'Legacy architecture bottlenecks'
            ]
        },
        {
            title: 'Talent Shortage & Skill Gaps',
            description: 'Finding and retaining IT professionals with modern skills (cloud, AI, DevOps) is increasingly difficult. Internal teams often lack the specialized expertise required for complex enterprise initiatives.',
            icon: <Users />,
            color: '#3B82F6',
            points: [
                'Long hiring cycles for niche roles',
                'High employee turnover in IT',
                'Knowledge silos and single points of failure'
            ]
        },
        {
            title: 'Legacy System Modernization',
            description: 'Outdated legacy systems create technical debt, increase maintenance costs, and block innovation. Modernising without disrupting daily operations is a major challenge.',
            icon: <RefreshCw />,
            color: '#06B6D4',
            points: [
                'Integration complexity with new platforms',
                'Data migration risks',
                'Business continuity during transition'
            ]
        }
    ];

    // ----- 7 SIGNS (fresh design – compact cards) -----
    const signsEnterprise = [
        { text: 'Constant System Downtime', icon: <AlertTriangle />, color: '#3B82F6' },
        { text: 'Rising IT Costs', icon: <DollarSign />, color: '#10B981' },
        { text: 'Security Concerns', icon: <Shield />, color: '#8B5CF6' },
        { text: 'Slow Software Deployments', icon: <Clock />, color: '#F59E0B' },
        { text: 'Poor System Performance', icon: <Activity />, color: '#EC4899' },
        { text: 'Compliance Issues', icon: <CheckCircle />, color: '#06B6D4' },
        { text: 'Lack of IT Visibility', icon: <Eye />, color: '#3B82F6' }
    ];

    // ----- AI & ML TRANSFORMATION (4 cards – tech‑inspired) -----
    const aiTransformation = [
        {
            title: 'Smarter Incident Management',
            description: 'AI and ML help enterprises detect issues faster by analyzing large volumes of logs and system data. Instead of waiting for systems to fail, patterns are identified early.',
            icon: <Brain />,
            color: '#3B82F6',
            points: [
                'Predictive alerts before failures',
                'Faster problem resolution',
                'Root cause analysis in minutes'
            ]
        },
        {
            title: 'Optimized Resource Utilization',
            description: 'Managing servers, storage, and network resources is a challenge for internal teams. AI and ML balance workloads automatically, ensuring systems run at the right capacity.',
            icon: <CpuChip />,
            color: '#10B981',
            points: [
                'Automated workload distribution',
                'Lower infrastructure costs',
                'Right‑sizing recommendations'
            ]
        },
        {
            title: 'Strengthened Security Operations',
            description: 'Cyber threats evolve daily, and manual monitoring cannot keep up. AI-driven tools scan for unusual activity and block threats in real time.',
            icon: <ShieldCheckIcon />,
            color: '#8B5CF6',
            points: [
                'Real-time threat detection',
                'Automated compliance monitoring',
                'Behavioural anomaly detection'
            ]
        },
        {
            title: 'Improved Decision-Making',
            description: 'AI and ML provide insights from historical and live data. Enterprises use these insights to plan system upgrades, allocate resources, and manage user demands effectively.',
            icon: <LineChartIcon />,
            color: '#F59E0B',
            points: [
                'Data-driven performance insights',
                'Accurate demand forecasting',
                'Capacity planning automation'
            ]
        },
        {
            title: 'Intelligent Automation (RPA + AI)',
            description: 'Combining Robotic Process Automation with AI enables end‑to‑end process automation that adapts to changing inputs, reducing manual effort and error rates.',
            icon: <Repeat />,
            color: '#EC4899',
            points: [
                'Cognitive document processing',
                'Automated workflow orchestration',
                'Self‑healing processes'
            ]
        },
        {
            title: 'AI-Powered Customer Experience',
            description: 'AI analyses customer behaviour, predicts needs, and personalises interactions – leading to higher satisfaction, retention, and revenue.',
            icon: <HeartHandshake />,
            color: '#06B6D4',
            points: [
                'Intelligent chatbots & virtual assistants',
                'Personalised recommendations',
                'Sentiment analysis'
            ]
        }
    ];

    // ----- BENEFITS OF OUTSOURCING (5 benefits – elegant cards) -----
    const outsourcingBenefits = [
        {
            title: 'Cost Efficiency & Resource Savings',
            description: 'Outsourcing helps enterprises reduce fixed costs. You avoid heavy spending on hiring, training, and infrastructure upgrades, turning large capital expenses into predictable operating costs.',
            icon: <Wallet />,
            color: '#3B82F6',
            points: [
                'Lower staffing and training costs',
                'No hidden infrastructure expenses',
                'Pay‑as‑you‑go flexibility'
            ]
        },
        {
            title: 'Access To Specialized Skills',
            description: 'Expert partners bring deep knowledge of enterprise IT operations management. Their teams handle complex IT challenges daily, ensuring faster issue resolution and better results.',
            icon: <Award />,
            color: '#10B981',
            points: [
                'Proven domain expertise',
                'Faster problem-solving',
                'Access to 150+ certified engineers'
            ]
        },
        {
            title: 'Improved Security & Compliance',
            description: 'With professional enterprise IT operations services, enterprises gain round-the-clock monitoring and quick threat response. Partners also ensure compliance with industry standards.',
            icon: <ShieldCheck />,
            color: '#8B5CF6',
            points: [
                '24/7 monitoring and support',
                'Strong compliance readiness',
                'Automated audit trails'
            ]
        },
        {
            title: 'Focus On Core Business Growth',
            description: 'By outsourcing, your team can focus on revenue-generating activities. Expert partners handle IT tasks, while you concentrate on strategy and innovation.',
            icon: <Target />,
            color: '#F59E0B',
            points: [
                'More time for business priorities',
                'Streamlined enterprise process optimization',
                'Faster time‑to‑market'
            ]
        },
        {
            title: 'Scalability & Flexibility',
            description: 'Expert providers adjust IT operations as your needs grow. Whether scaling up resources or streamlining workloads, outsourced enterprise IT services provide flexibility that internal teams often cannot.',
            icon: <Scale />,
            color: '#EC4899',
            points: [
                'On-demand scalability',
                'Support for business expansion',
                'Elastic resource provisioning'
            ]
        }
    ];

    // ----- COMPANY STATS (unchanged) -----
    const companyStats = [
        { value: '700+', label: 'Full‑time Staff', icon: <Users />, description: 'Top 1% industry talent' },
        { value: '20+', label: 'Years Experience', icon: <Award />, description: 'Since 2004' },
        { value: '4500+', label: 'Satisfied Clients', icon: <HeadphonesIcon />, description: 'Startups to Fortune 500' },
        { value: '99.9%', label: 'Guaranteed Uptime', icon: <Shield />, description: 'Enterprise-grade reliability' }
    ];

    // ----- CLIENT TESTIMONIALS (unchanged) -----
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

    // ----- INDUSTRIES (EXACT HOVER ANIMATION – unchanged) -----
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


    // ----- FAQS (unchanged) -----
    const faqs = [
        {
            question: 'How quickly can you start helping me with my existing enterprise operations?',
            answer: 'We typically begin within weeks after the initial assessment. Our team ensures a smooth transition with minimal disruption, backed by a structured onboarding process.'
        },
        {
            question: 'How can automation improve enterprise operations efficiency?',
            answer: 'Automation reduces repetitive tasks and improves response times in Enterprise IT Services. By deploying AI-driven workflows, businesses achieve enterprise process optimization with better accuracy and fewer errors. Automation also helps scale operations seamlessly while ensuring resources are utilized effectively for critical decision-making.'
        },
        {
            question: 'How can enterprises ensure security and compliance while scaling operations?',
            answer: 'Enterprises must embed security protocols into every stage of scaling. With enterprise IT operations services, compliance is maintained through continuous monitoring and governance controls. Security measures include role-based access management, automated compliance audits, and real-time threat detection.'
        },
        {
            question: 'Do you provide cost visibility and reporting for IT operations?',
            answer: 'Yes. We provide transparent dashboards and regular reports. You’ll see where resources are used, how costs are optimized, and gain clear insights into IT performance and spending.'
        },
        {
            question: 'What technologies are most effective in streamlining enterprise workflows?',
            answer: 'Technologies like AI, RPA, and cloud-native platforms are central to enterprise process optimization. By integrating these with enterprise IT services, companies can automate workflows, reduce inefficiencies, and deliver consistent user experiences.'
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION (identical) ===== */}
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
                                <Sparkles size={18} /> Enterprise Ops Services
                            </div>
                            <h1 className={styles.mainTitle}>
                                Enterprise <span className={styles.highlight}>IT Operations</span> Services
                            </h1>
                            <p className={styles.subheadline}>
                                From handling mission-critical workloads to ensuring zero disruption – our enterprise IT operations services are designed to help your business grow without operational hurdles.
                            </p>
                            <p className={styles.heroDescription}>
                                We help enterprises streamline, automate, and scale their IT operations with 99.9% uptime, 30% faster incident resolution, and enterprise-grade security.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className={styles.buttonContainer}
                        >
                            <Link href="/contact" className={styles.ctaButton}>
                                Optimise Your Operations
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="#expertise" className={styles.secondaryButton}>
                                View Enterprise Expertise
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
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
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
                                        <div className={styles.ratingText}>Enterprise Excellence</div>
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

            {/* ===== TRUSTED BY SECTION (identical) ===== */}
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

            {/* ===== EXPERTISE SECTION – FRESH GLASS CARDS ===== */}
            <section className={styles.expertiseSection} id="expertise">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Enterprise IT Operations <span className={styles.titleHighlight}>You Can Count On</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Our comprehensive suite of Enterprise IT operations services ensures your core systems are not just managed, but optimized for peak performance, security, and continuous growth.
                    </p>
                </div>

                <div className={styles.expertiseGrid}>
                    {enterpriseExpertise.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.expertiseCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                        >
                            <div className={styles.expertiseGlass} style={{ background: `linear-gradient(145deg, ${item.color}10, ${item.color}02)` }}>
                                <div className={styles.expertiseIconWrapper} style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <h3 className={styles.expertiseTitle}>{item.title}</h3>
                                <p className={styles.expertiseDescription}>{item.description}</p>
                                <div className={styles.expertiseExpanded}>
                                    <p>{item.expandedDesc}</p>
                                </div>
                                <div className={styles.expertiseFeatures}>
                                    <h4>Key capabilities</h4>
                                    <ul className={styles.featuresList}>
                                        {item.features.map((feature, idx) => (
                                            <li key={idx} className={styles.featureItem}>
                                                <CheckCircle size={16} style={{ color: item.color }} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.expertiseFooter}>
                                    <Link href={`/enterprise/${item.id}`} className={styles.learnMoreLink} style={{ color: item.color }}>
                                        Explore service
                                        <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== HIRING MODELS – FRESH BOLD CARDS ===== */}
            <section className={styles.hiringModelsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Fueling Enterprise Growth with the <span className={styles.titleHighlight}>Right Hiring Model</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        The right technical team is the engine of enterprise growth. Find the perfect fit for your goals and scale your IT operations precisely.
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
                            whileHover={{ y: -6 }}
                        >
                            <div className={styles.hiringModelAccent} style={{ backgroundColor: model.color }}></div>
                            <div className={styles.hiringModelIcon} style={{ color: model.color }}>
                                {model.icon}
                            </div>
                            <h3>{model.title}</h3>
                            <div className={styles.hiringModelStat} style={{ backgroundColor: `${model.color}15`, color: model.color }}>
                                {model.stat}
                            </div>
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


            {/* ===== PARTNER HIGHLIGHTS – REDESIGNED WITH BACKGROUND IMAGE ===== */}
            <section className={styles.partnerSection}>
                <div className={styles.partnerBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
                        alt="Enterprise operations background"
                        fill
                        className={styles.partnerBgImage}
                        priority
                    />
                    <div className={styles.partnerOverlay}></div>
                </div>
                <div className={styles.partnerContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle} style={{ color: 'white' }}>
                            Your <span className={styles.titleHighlight}>Operational Edge</span> Starts Here
                        </h2>
                        <p className={styles.sectionDescription} style={{ color: 'rgba(255,255,255,0.9)' }}>
                            Building and maintaining robust enterprise IT operations demands specialized expertise and a proven methodology.
                            We meticulously engineer solutions that optimize your infrastructure, automate critical processes, and ensure resilient operations.
                        </p>
                    </div>

                    <div className={styles.partnerGrid}>
                        <div className={styles.partnerItem}>
                            <div className={styles.partnerItemIcon} style={{ color: '#3B82F6' }}>
                                <Users size={32} />
                            </div>
                            <h4>150+ Certified DevOps Engineers</h4>
                            <p>AWS, Azure, GCP certified professionals ready to optimize your infrastructure.</p>
                        </div>
                        <div className={styles.partnerItem}>
                            <div className={styles.partnerItemIcon} style={{ color: '#10B981' }}>
                                <Shield size={32} />
                            </div>
                            <h4>99.9% Guaranteed Uptime</h4>
                            <p>SLA‑backed availability with proactive monitoring and instant failover.</p>
                        </div>
                        <div className={styles.partnerItem}>
                            <div className={styles.partnerItemIcon} style={{ color: '#8B5CF6' }}>
                                <Clock size={32} />
                            </div>
                            <h4>30% Faster Incident Resolution</h4>
                            <p>AI‑assisted root cause analysis and automated remediation workflows.</p>
                        </div>
                        <div className={styles.partnerItem}>
                            <div className={styles.partnerItemIcon} style={{ color: '#F59E0B' }}>
                                <CheckCircle size={32} />
                            </div>
                            <h4>Automated Compliance Frameworks</h4>
                            <p>Audit‑ready infrastructure with continuous compliance checks.</p>
                        </div>
                        <div className={styles.partnerItem}>
                            <div className={styles.partnerItemIcon} style={{ color: '#EC4899' }}>
                                <Cloud size={32} />
                            </div>
                            <h4>Scalable Cloud Architecture Experts</h4>
                            <p>Multi‑cloud strategies, cost optimisation, and auto‑scaling design.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== KEY CHALLENGES – FRESH SPLIT CARDS ===== */}
            <section className={styles.challengesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Key Challenges Enterprises Face in <span className={styles.titleHighlight}>Managing IT Operations</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Managing IT operations inside a large enterprise is not easy. When handled internally, enterprises often face serious hurdles that affect performance, security, and growth.
                    </p>
                </div>

                <div className={styles.challengesGrid}>
                    {keyChallenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            className={styles.challengeCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.challengeHeader} style={{ borderBottomColor: challenge.color }}>
                                <div className={styles.challengeIcon} style={{ color: challenge.color }}>
                                    {challenge.icon}
                                </div>
                                <h3>{challenge.title}</h3>
                            </div>
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
            </section>

            {/* ===== 7 SIGNS – FRESH COMPACT GRID ===== */}
            <section className={styles.signsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        7 Signs Enterprises Need <span className={styles.titleHighlight}>Professional IT Operations Services</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Spotting issues early helps businesses grow smoothly. Here are clear signs your company could benefit from expert help with its IT operations.
                    </p>
                </div>

                <div className={styles.signsGrid}>
                    {signsEnterprise.map((sign, index) => (
                        <motion.div
                            key={index}
                            className={styles.signCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className={styles.signIconWrapper} style={{ backgroundColor: `${sign.color}15` }}>
                                <div className={styles.signIcon} style={{ color: sign.color }}>
                                    {sign.icon}
                                </div>
                            </div>
                            <span>{sign.text}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== AI & ML TRANSFORMATION – FRESH TECH CARDS ===== */}
            <section className={styles.aiSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        How <span className={styles.titleHighlight}>AI & ML</span> Transform Enterprise IT Operations
                    </h2>
                    <p className={styles.sectionDescription}>
                        AI and ML are changing how businesses manage their IT. These smart technologies help make IT operations faster, smarter, and more reliable – moving from reacting to problems to actively preventing them.
                    </p>
                </div>

                <div className={styles.aiGrid}>
                    {aiTransformation.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.aiCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.aiCircuit}></div>
                            <div className={styles.aiIconWrapper} style={{ backgroundColor: `${item.color}15` }}>
                                <div className={styles.aiIcon} style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                            </div>
                            <h3>{item.title}</h3>
                            <p className={styles.aiDescription}>{item.description}</p>
                            <ul className={styles.aiPoints}>
                                {item.points.map((point, idx) => (
                                    <li key={idx}>
                                        <div className={styles.aiPointDot} style={{ backgroundColor: item.color }}></div>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== BENEFITS OF OUTSOURCING – FRESH ELEGANT CARDS ===== */}
            <section className={styles.benefitsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Benefits of Outsourcing <span className={styles.titleHighlight}>Enterprise IT Operations</span> to Experts
                    </h2>
                    <p className={styles.sectionDescription}>
                        Giving your IT operations to skilled partners brings many advantages:
                    </p>
                </div>

                <div className={styles.benefitsGrid}>
                    {outsourcingBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className={styles.benefitCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.benefitIconFloating} style={{ color: benefit.color }}>
                                {benefit.icon}
                            </div>
                            <h3>{benefit.title}</h3>
                            <p className={styles.benefitDescription}>{benefit.description}</p>
                            <div className={styles.benefitPoints}>
                                {benefit.points.map((point, idx) => (
                                    <div key={idx} className={styles.benefitPoint}>
                                        <CheckCircle size={14} style={{ color: benefit.color }} />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== COMPANY STATS (identical) ===== */}
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

            {/* ===== CLIENT TESTIMONIALS CAROUSEL (identical) ===== */}
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

            {/* ===== INDUSTRIES SECTION (EXACT HOVER ANIMATION – identical) ===== */}
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

            {/* ===== FAQ SECTION (identical) ===== */}
            <section className={styles.faqSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Frequently Asked <span className={styles.titleHighlight}>Questions</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Here are some of the most common queries we address regarding our enterprise IT operations services.
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

                {/* ===== FINAL CTA (identical) ===== */}
                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>Get IT That Just Works Flawlessly</h3>
                        <p className={styles.ctaDescription}>
                            Experience a 99.9% uptime and zero operational headaches with our expert and always-on IT management.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Optimise Your Operations
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