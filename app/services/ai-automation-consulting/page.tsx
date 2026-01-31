'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Brain, Zap, Target, Shield, Cpu, Database,
    TrendingUp, Users, Clock, Award, CheckCircle,
    MessageSquare, Star, Sparkles, ChevronRight,
    HelpCircle, GitMerge, Lock, Globe, Workflow,
    Code, Cloud, BarChart, Settings, FileCode,
    Lightbulb, LineChart
} from 'lucide-react';
import styles from './ai-automation.module.css';

export default function AIAutomationConsultingPage() {
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const [activeIndustry, setActiveIndustry] = useState<number | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const testimonial = {
        name: 'Nancy Wilson',
        role: 'CEO, TechInnovate Corp',
        content: 'BBNTech showed us exactly how to use AI solutions to solve our biggest business problems. The guidance was invaluable for our digital transformation.',
        rating: 5,
        project: 'Enterprise AI Transformation'
    };

    const aiServices = [
        {
            id: 1,
            title: 'AI Strategy Development',
            description: 'Helps businesses define clear AI goals, roadmap, and strategies aligned with business objectives.',
            icon: <Target className={styles.serviceIcon} />,
            image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
            color: '#60a5fa',
            features: ['Tailored AI Adoption Roadmap', 'Business-Driven AI Initiatives', 'Future-Ready Innovation Planning'],
            detailedFeatures: [
                'Comprehensive AI maturity assessment',
                'Business case development with ROI projections',
                'Technology stack recommendations',
                'Implementation roadmap with milestones'
            ]
        },
        {
            id: 2,
            title: 'AI Integration',
            description: 'Seamlessly embeds AI solutions into existing systems for enhanced efficiency and scalability.',
            icon: <GitMerge className={styles.serviceIcon} />,
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
            color: '#34d399',
            features: ['Smooth AI System Deployment', 'Integration with Legacy Software', 'Process Automation and Optimization'],
            detailedFeatures: [
                'Legacy system integration and modernization',
                'Custom API development and management',
                'Real-time data pipeline setup',
                'Cloud migration and optimization'
            ]
        },
        {
            id: 3,
            title: 'AI Solution Development',
            description: 'Custom AI-powered solutions designed to solve industry-specific business challenges effectively.',
            icon: <Cpu className={styles.serviceIcon} />,
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
            color: '#8b5cf6',
            features: ['End-to-End AI Applications', 'Industry-Specific AI Models', 'Scalable, Reliable AI Solutions'],
            detailedFeatures: [
                'Custom AI model development and training',
                'End-to-end ML pipeline architecture',
                'Model performance optimization and tuning',
                'Scalable deployment strategies'
            ]
        },
        {
            id: 4,
            title: 'Generative AI Consulting',
            description: 'Guides businesses in leveraging Generative AI for automation, content creation, and productivity.',
            icon: <Brain className={styles.serviceIcon} />,
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
            color: '#f59e0b',
            features: ['Use-case Identification', 'Generative AI Implementation', 'Creative AI-Driven Solutions'],
            detailedFeatures: [
                'Generative AI use-case identification',
                'LLM implementation and fine-tuning',
                'Content automation and generation',
                'Workflow optimization with AI'
            ]
        },
        {
            id: 5,
            title: 'Data Engineering & Management',
            description: 'Builds strong data pipelines and frameworks for AI readiness and informed decision-making.',
            icon: <Database className={styles.serviceIcon} />,
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
            color: '#ef4444',
            features: ['Data Cleaning & Processing', 'Scalable Data Architecture', 'Real-time Data Pipelines'],
            detailedFeatures: [
                'Scalable data pipeline architecture',
                'Data quality assessment and management',
                'Real-time analytics implementation',
                'Data governance and compliance'
            ]
        },
        {
            id: 6,
            title: 'AI Ethics and Governance',
            description: 'Ensures responsible AI practices with compliance, transparency, and ethical implementation frameworks.',
            icon: <Shield className={styles.serviceIcon} />,
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
            color: '#06b6d4',
            features: ['AI Risk Assessment', 'Bias Detection & Mitigation', 'Ethical AI Compliance'],
            detailedFeatures: [
                'AI bias detection and mitigation',
                'Regulatory compliance framework',
                'Transparency and explainability protocols',
                'Comprehensive risk assessment'
            ]
        }
    ];

    const strategicBenefits = [
        {
            id: 1,
            title: 'Faster Implementation',
            description: 'Accelerate AI adoption with expert guidance and streamlined deployment processes.',
            icon: <Zap className={styles.benefitIcon} />,
            color: '#60a5fa',
            bgColor: 'rgba(96, 165, 250, 0.1)'
        },
        {
            id: 2,
            title: 'High ROI Potential',
            description: 'Maximize returns with data-driven AI strategies tailored to your business objectives.',
            icon: <TrendingUp className={styles.benefitIcon} />,
            color: '#34d399',
            bgColor: 'rgba(52, 211, 153, 0.1)'
        },
        {
            id: 3,
            title: 'Technology Neutral',
            description: 'Objective recommendations focused on your needs, not vendor preferences.',
            icon: <Target className={styles.benefitIcon} />,
            color: '#8b5cf6',
            bgColor: 'rgba(139, 92, 246, 0.1)'
        },
        {
            id: 4,
            title: 'Predictable Budgeting',
            description: 'Transparent pricing and fixed-cost models to prevent cost overruns.',
            icon: <Shield className={styles.benefitIcon} />,
            color: '#ef4444',
            bgColor: 'rgba(239, 68, 68, 0.1)'
        },
        {
            id: 5,
            title: 'Round-the-clock Support',
            description: '24/7 assistance from top AI consultants and engineers.',
            icon: <Clock className={styles.benefitIcon} />,
            color: '#f59e0b',
            bgColor: 'rgba(245, 158, 11, 0.1)'
        },
        {
            id: 6,
            title: 'Proven Client Satisfaction',
            description: 'Track record of delivering exceptional AI consulting services.',
            icon: <Users className={styles.benefitIcon} />,
            color: '#06b6d4',
            bgColor: 'rgba(6, 182, 212, 0.1)'
        }
    ];

    const aiTechnologies = [
        {
            category: 'AI Frameworks',
            icon: <Code className={styles.techIcon} />,
            items: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV', 'Hugging Face'],
            color: '#60a5fa',
            description: 'Advanced frameworks for building, training, and deploying machine learning models.'
        },
        {
            category: 'Cloud AI Platforms',
            icon: <Cloud className={styles.techIcon} />,
            items: ['AWS SageMaker', 'Azure Machine Learning', 'Google AI Platform', 'IBM Watson Studio'],
            color: '#34d399',
            description: 'Managed cloud services for end-to-end AI workflow management and scaling.'
        },
        {
            category: 'Data & Analytics',
            icon: <Database className={styles.techIcon} />,
            items: ['Apache Spark', 'Snowflake', 'Databricks', 'Apache Kafka', 'Apache Airflow'],
            color: '#8b5cf6',
            description: 'Tools for big data processing, real-time analytics, and data pipeline orchestration.'
        },
        {
            category: 'MLOps & Deployment',
            icon: <Settings className={styles.techIcon} />,
            items: ['MLflow', 'Kubeflow', 'Docker', 'Kubernetes', 'TensorFlow Serving'],
            color: '#f59e0b',
            description: 'Platforms for model versioning, monitoring, and scalable production deployment.'
        },
        {
            category: 'Generative AI',
            icon: <Brain className={styles.techIcon} />,
            items: ['OpenAI GPT', 'Anthropic Claude', 'LangChain', 'LlamaIndex', 'Stable Diffusion'],
            color: '#ef4444',
            description: 'Cutting-edge tools for text generation, conversational AI, and content creation.'
        },
        {
            category: 'Visualization & BI',
            icon: <BarChart className={styles.techIcon} />,
            items: ['Tableau', 'Power BI', 'Grafana', 'Streamlit', 'Plotly Dash'],
            color: '#06b6d4',
            description: 'Interactive dashboards and business intelligence tools for AI insights.'
        }
    ];

    const processSteps = [
        {
            id: 1,
            title: 'Discovery & Assessment',
            description: 'Comprehensive analysis of your business needs, challenges, and AI readiness.',
            icon: <Lightbulb className={styles.processIcon} />,
            details: [
                'Stakeholder interviews and workshops',
                'Current technology stack evaluation',
                'Data quality and availability assessment',
                'Competitive analysis and market positioning'
            ]
        },
        {
            id: 2,
            title: 'Strategy Development',
            description: 'Creating tailored AI roadmap aligned with your business objectives.',
            icon: <Target className={styles.processIcon} />,
            details: [
                'AI use case identification and prioritization',
                'Technology stack recommendations',
                'Implementation roadmap with milestones',
                'ROI analysis and success metrics'
            ]
        },
        {
            id: 3,
            title: 'Solution Design',
            description: 'Architecting custom AI solutions with technology-neutral approach.',
            icon: <FileCode className={styles.processIcon} />,
            details: [
                'System architecture and design',
                'Data pipeline and infrastructure planning',
                'Model selection and algorithm design',
                'Security and compliance planning'
            ]
        },
        {
            id: 4,
            title: 'Implementation & Integration',
            description: 'Seamless deployment and integration with existing systems.',
            icon: <GitMerge className={styles.processIcon} />,
            details: [
                'Agile development and deployment',
                'API development and integration',
                'Legacy system modernization',
                'Cloud infrastructure setup'
            ]
        },
        {
            id: 5,
            title: 'Testing & Optimization',
            description: 'Rigorous testing, validation, and performance optimization.',
            icon: <LineChart className={styles.processIcon} />,
            details: [
                'Model validation and testing',
                'Performance benchmarking',
                'A/B testing and user feedback',
                'Continuous optimization and tuning'
            ]
        },
        {
            id: 6,
            title: 'Training & Support',
            description: 'Knowledge transfer and ongoing support for continuous improvement.',
            icon: <Users className={styles.processIcon} />,
            details: [
                'Team training and workshops',
                'Documentation and knowledge transfer',
                'Ongoing maintenance and support',
                'Performance monitoring and reporting'
            ]
        }
    ];

    const whyChooseUs = [
        {
            id: 1,
            title: "India's Top 1% AI Talent",
            description: 'Access elite AI consultants with proven expertise in cutting-edge technologies.',
            icon: <Award className={styles.chooseIcon} />,
            color: '#60a5fa'
        },
        {
            id: 2,
            title: 'Trusted by Startups to Fortune 500',
            description: 'Proven track record with businesses of all sizes across diverse industries.',
            icon: <Users className={styles.chooseIcon} />,
            color: '#34d399'
        },
        {
            id: 3,
            title: 'End-to-End AI Solutions',
            description: 'From strategy to deployment, we handle all aspects of AI implementation.',
            icon: <Workflow className={styles.chooseIcon} />,
            color: '#8b5cf6'
        },
        {
            id: 4,
            title: 'Time-Zone Friendly Global Presence',
            description: 'Seamless collaboration across time zones with our distributed expert teams.',
            icon: <Globe className={styles.chooseIcon} />,
            color: '#f59e0b'
        },
        {
            id: 5,
            title: 'Top-tier Data Security Protocols',
            description: 'Enterprise-grade security measures to protect your sensitive information.',
            icon: <Lock className={styles.chooseIcon} />,
            color: '#ef4444'
        },
        {
            id: 6,
            title: 'On-time Delivery, No Surprises',
            description: 'Reliable project timelines with transparent communication throughout.',
            icon: <CheckCircle className={styles.chooseIcon} />,
            color: '#06b6d4'
        }
    ];

    const industries = [
        {
            id: 1,
            name: 'Healthcare',
            description: 'Building smart healthcare solutions with AI-powered diagnostics, predictive analytics, and patient care optimization.',
            icon: '🏥',
            color: '#34d399',
            image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80',
            solutions: ['AI Diagnostics', 'Predictive Analytics', 'Patient Care Optimization', 'Drug Discovery'],
        },
        {
            id: 2,
            name: 'Retail & eCommerce',
            description: 'Enhancing retail journeys with demand forecasting, personalized recommendations, and inventory optimization.',
            icon: '🛍️',
            color: '#8b5cf6',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
            solutions: ['Demand Forecasting', 'Personalized Recommendations', 'Inventory Optimization', 'Customer Analytics'],
        },
        {
            id: 3,
            name: 'Media & Entertainment',
            description: 'Custom tech to empower brands with content personalization, recommendation engines, and audience analytics.',
            icon: '🎬',
            color: '#06b6d4',
            image: 'https://images.unsplash.com/photo-1573152143286-0c422b4d2175?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWF8ZW58MHx8MHx8fDA%3D',
            solutions: ['Content Personalization', 'Recommendation Engines', 'Audience Analytics', 'Content Generation'],
        }
        // {
        //     id: 4,
        //     name: 'Fintech',
        //     description: 'Disrupting traditional finance with fraud detection, algorithmic trading, and personalized banking experiences.',
        //     icon: '💰',
        //     color: '#f59e0b',
        //     image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
        //     solutions: ['Fraud Detection', 'Algorithmic Trading', 'Personalized Banking', 'Risk Assessment'],
        // },
        // {
        //     id: 5,
        //     name: 'Education & eLearning',
        //     description: 'Shaping digital learning with adaptive learning platforms, AI tutors, and performance analytics.',
        //     icon: '🎓',
        //     color: '#60a5fa',
        //     image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        //     solutions: ['Adaptive Learning', 'AI Tutors', 'Performance Analytics', 'Content Personalization'],
        // },
        // {
        //     id: 6,
        //     name: 'Banking & Fintech',
        //     description: 'Streamlining financial growth with automated processes, risk management, and customer service automation.',
        //     icon: '🏦',
        //     color: '#ef4444',
        //     image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
        //     solutions: ['Process Automation', 'Risk Management', 'Customer Service AI', 'Regulatory Compliance'],
        // }
    ];

    const hiringModels = [
        {
            id: 1,
            title: 'Fixed Price Model',
            description: 'Ideal for well-defined projects with clear requirements and deliverables.',
            color: '#34d399',
            features: ['Defined scope and timeline', 'Fixed budget', 'Predictable costs', 'Lower management overhead'],
            price: '$15K - $100K',
            bestFor: ['MVP Development', 'Pilot Projects', 'Specific Features']
        },
        {
            id: 2,
            title: 'Dedicated Team Model',
            description: 'Perfect for long-term projects requiring dedicated resources and flexibility.',
            color: '#60a5fa',
            features: ['Dedicated AI experts', 'Flexible scaling', 'Agile methodology', 'Direct communication'],
            price: '$8K - $25K/month',
            bestFor: ['Enterprise Solutions', 'Ongoing Development', 'Complex Projects']
        },
        {
            id: 3,
            title: 'Time & Material Model',
            description: 'Suitable for evolving projects where requirements may change during development.',
            color: '#8b5cf6',
            features: ['Pay for actual work', 'Flexible requirements', 'Transparent billing', 'Easy scaling'],
            price: '$50 - $150/hour',
            bestFor: ['Research Projects', 'Prototyping', 'Evolving Requirements']
        }
    ];

    const companyStats = [
        { value: '700+', label: 'AI Experts', icon: <Users /> },
        { value: '20+', label: 'Years Experience', icon: <Award /> },
        { value: '4500+', label: 'AI Projects', icon: <CheckCircle /> },
        { value: '95%', label: 'Client Retention', icon: <TrendingUp /> }
    ];

    const faqs = [
        {
            question: 'What is AI consulting and how can it benefit my business?',
            answer: 'AI consulting helps businesses harness artificial intelligence effectively through expert guidance, customized strategies, and implementation support. Benefits include improved decision-making, increased efficiency, accelerated implementation, risk mitigation, and gaining a competitive edge through innovative AI solutions.'
        },
        {
            question: 'How do you maintain technology neutrality in AI consulting?',
            answer: 'We maintain technology neutrality through thorough assessment of your needs, extensive market research, pilot projects for testing, objective performance metrics, vendor-agnostic recommendations, transparent communication, and collaborative decision-making focused solely on your business objectives.'
        },
        {
            question: 'What are the common risks in AI integration and how do you mitigate them?',
            answer: 'Common risks include data quality issues, bias in AI models, lack of expertise, scalability challenges, ROI uncertainty, and system interoperability. We mitigate these through robust data governance, bias detection techniques, knowledge transfer, scalable architecture design, thorough cost-benefit analysis, and careful integration planning.'
        },
        {
            question: 'What industries benefit most from AI consulting services?',
            answer: 'Healthcare, Fintech, Retail, Manufacturing, Education, and Media & Entertainment benefit significantly. Each industry has unique applications like AI diagnostics in healthcare, fraud detection in banking, demand forecasting in retail, predictive maintenance in manufacturing, adaptive learning in education, and content personalization in media.'
        },
        {
            question: 'How long does a typical AI consulting engagement take?',
            answer: 'Engagement timelines vary: Initial assessments take 2-4 weeks, strategy development 4-6 weeks, pilot projects 8-12 weeks, and full implementations 3-6 months. We provide detailed timelines during initial assessment based on your specific requirements and AI readiness.'
        },
        {
            question: 'What is the long-term value of AI consulting for business growth?',
            answer: 'AI consulting provides long-term value by identifying innovation opportunities, creating competitive advantages, optimizing operations, enabling scalability, future-proofing technology investments, and driving sustainable business growth through continuous AI innovation and adaptation.'
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
                            <span className={styles.heroBadge}>Proven ROI</span>
                        </motion.div>

                        <h1 className={styles.heroTitle}>
                            Accelerate Innovation with <span className={styles.gradientText}>AI & Automation Consulting</span>
                        </h1>

                        <p className={styles.heroDescription}>
                            Integrate AI-driven solutions across your organization with our complete consulting services.
                            We connect technical challenges with strategic goals through an outcome-driven approach.
                        </p>

                        <div className={styles.heroButtons}>
                            <Link href="/contact" className={styles.primaryButton}>
                                Start Your AI Transformation
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
                                            src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8fDA%3D"
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
            {/* <section className={styles.trustedSection}>
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
            </section> */}

            {/* Strategic Benefits Banner - Updated without percentages */}
            <section className={styles.benefitsBanner}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Results-focused <span className={styles.titleHighlight}>AI Consulting Services</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Combining our deep industry knowledge with cutting-edge AI technologies, we offer comprehensive
                        AI consulting to guide businesses in using the full potential of artificial intelligence.
                    </p>
                </div>

                <div className={styles.statsGrid}>
                    {strategicBenefits.map((benefit) => (
                        <motion.div
                            key={benefit.id}
                            className={styles.statCard}
                            style={{ backgroundColor: benefit.bgColor, borderColor: benefit.color }}
                            whileHover={{ scale: 1.05, rotateX: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={styles.statIcon} style={{ color: benefit.color }}>
                                {benefit.icon}
                            </div>
                            <h3 className={styles.statTitle}>{benefit.title}</h3>
                            <p className={styles.statDescription}>{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Main AI Services */}
            <section className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our <span className={styles.titleHighlight}>AI Consulting</span> Services
                    </h2>
                    <p className={styles.sectionDescription}>
                        As India&apos;s leading AI consulting company, we combine deep expertise with innovative
                        strategies to deliver tailored AI solutions for your business challenges.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {aiServices.map((service) => (
                        <motion.div
                            key={service.id}
                            className={styles.serviceCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                            style={{ '--service-color': service.color } as React.CSSProperties}
                        >
                            <div className={styles.serviceImageContainer}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className={styles.serviceImage}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={styles.imageOverlay}></div>

                                <div className={styles.serviceIconWrapper} style={{ backgroundColor: service.color }}>
                                    {service.icon}
                                </div>

                                <div className={styles.serviceContent}>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <div className={styles.serviceFeatures}>
                                        {service.features.map((feat, idx) => (
                                            <span key={idx} className={styles.featureTag} style={{ backgroundColor: `${service.color}20`, color: service.color }}>
                                                {feat}
                                            </span>
                                        ))}
                                    </div>

                                    <AnimatePresence>
                                        {hoveredService === service.id && (
                                            <motion.div
                                                className={styles.serviceDetails}
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p className={styles.serviceExcerpt}>{service.description}</p>
                                                <ul className={styles.detailedFeatures}>
                                                    {service.detailedFeatures.map((detail, idx) => (
                                                        <li key={idx} className={styles.detailedFeature}>
                                                            <CheckCircle className={styles.detailIcon} style={{ color: service.color }} />
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <Link href={`/services/ai/${service.id}`} className={styles.serviceLink} style={{ backgroundColor: service.color }}>
                                                    Explore Service
                                                    <ChevronRight className={styles.linkIcon} />
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* AI Technologies Stack - Redesigned Section */}
            <section className={styles.technologiesSection}>
                <div className={styles.technologiesContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitleWhite}>
                            AI Technologies <span className={styles.titleHighlightWhite}>We Master</span>
                        </h2>
                        <p className={styles.sectionDescriptionWhite}>
                            We maintain technology neutrality while leveraging cutting-edge AI frameworks, tools, and platforms
                            to build robust, scalable, and future-proof AI solutions for your business.
                        </p>
                    </div>

                    <div className={styles.technologiesGrid}>
                        {aiTechnologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                className={styles.techCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.techHeader}>
                                    <div className={styles.techIconWrapper} style={{ backgroundColor: `${tech.color}20` }}>
                                        {tech.icon}
                                    </div>
                                    <h3 className={styles.techTitle} style={{ color: tech.color }}>{tech.category}</h3>
                                </div>

                                <p className={styles.techDescription}>{tech.description}</p>

                                <div className={styles.techItems}>
                                    {tech.items.map((item, idx) => (
                                        <motion.span
                                            key={idx}
                                            className={styles.techItem}
                                            style={{ borderColor: `${tech.color}30`, color: tech.color, backgroundColor: `${tech.color}10` }}
                                            whileHover={{ scale: 1.05, backgroundColor: tech.color, color: 'white' }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whyChooseSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        India&apos;s Top <span className={styles.titleHighlight}>Artificial Intelligence Consulting Company</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Our AI consultants and development experts are committed to providing you with AI consulting
                        services tailored to your specific needs and business objectives.
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
                            style={{ borderTopColor: item.color }}
                        >
                            <div className={styles.chooseIconWrapper} style={{ color: item.color }}>
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
                            <div className={styles.statIconWrapper}>
                                {stat.icon}
                            </div>
                            <div className={styles.statValue}>{stat.value}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Industries Section with Background Images - Updated with visible header */}
            <section className={styles.industriesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Industries We <span className={styles.titleHighlight}>Cater To</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Partnering with businesses in diverse sectors to unlock new avenues for growth,
                        innovation, and competitive advantage through AI-powered transformation.
                    </p>
                </div>

                <div className={styles.industriesGrid}>
                    {industries.map((industry) => (
                        <motion.div
                            key={industry.id}
                            className={styles.industryCard}
                            onMouseEnter={() => setActiveIndustry(industry.id)}
                            onMouseLeave={() => setActiveIndustry(null)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className={styles.industryImageContainer}>
                                <Image
                                    src={industry.image}
                                    alt={industry.name}
                                    fill
                                    className={styles.industryImage}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={`${styles.industryOverlay} ${activeIndustry === industry.id ? styles.active : ''}`}></div>

                                {/* Always visible header */}
                                <div className={styles.industryHeader}>
                                    <div className={styles.industryEmoji}>{industry.icon}</div>
                                    <h3 className={styles.industryNameOverlay}>{industry.name}</h3>
                                </div>
                            </div>

                            <div className={styles.industryContent}>
                                <AnimatePresence>
                                    {activeIndustry === industry.id ? (
                                        <motion.div
                                            className={styles.industryDescriptionContainer}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p className={styles.industryDescription}>{industry.description}</p>
                                            <div className={styles.industrySolutions}>
                                                <h4 className={styles.solutionsTitle}>Key Solutions:</h4>
                                                <div className={styles.solutionsList}>
                                                    {industry.solutions.map((solution, idx) => (
                                                        <span key={idx} className={styles.solutionTag} style={{ backgroundColor: industry.color }}>
                                                            {solution}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            className={styles.industryPreview}
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <div className={styles.solutionsPreview}>
                                                {industry.solutions.slice(0, 2).map((solution, idx) => (
                                                    <span key={idx} className={styles.solutionPreview} style={{ color: industry.color }}>
                                                        {solution}
                                                    </span>
                                                ))}
                                                <span className={styles.moreIndicator} style={{ color: industry.color }}>
                                                    +{industry.solutions.length - 2} more
                                                </span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <Link href={`/industries/ai/${industry.id}`} className={styles.industryLink} style={{ backgroundColor: industry.color }}>
                                    Explore AI Solutions
                                    <ChevronRight className={styles.linkIcon} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className={styles.processSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our AI Implementation <span className={styles.titleHighlight}>Process</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We specialize in engineering custom AI solutions that are both powerful and secure,
                        using a structured, agile approach tailored to your business needs.
                    </p>
                </div>

                <div className={styles.processTimeline}>
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className={styles.processStep}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.processNumber}>0{step.id}</div>
                            <div className={styles.processIconWrapper}>
                                {step.icon}
                            </div>
                            <h3 className={styles.processTitle}>{step.title}</h3>
                            <p className={styles.processDescription}>{step.description}</p>
                            <div className={styles.processDetails}>
                                {step.details.map((detail, idx) => (
                                    <div key={idx} className={styles.processDetail}>
                                        <CheckCircle className={styles.detailIcon} />
                                        <span>{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Hiring Models Section */}
            <section className={styles.hiringSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Flexible <span className={styles.titleHighlight}>Hiring Models</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Choose from our flexible hiring models designed to fit your specific needs,
                        budget, and project requirements for AI consulting.
                    </p>
                </div>

                <div className={styles.hiringGrid}>
                    {hiringModels.map((model, index) => (
                        <motion.div
                            key={model.id}
                            className={styles.hiringCard}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ borderTopColor: model.color }}
                        >
                            <div className={styles.hiringHeader}>
                                <div className={styles.priceTag} style={{ color: model.color }}>
                                    {model.price}
                                </div>
                                <h3 className={styles.hiringTitle}>{model.title}</h3>
                                <p className={styles.hiringDescription}>{model.description}</p>
                            </div>

                            <div className={styles.hiringFeatures}>
                                <h4 className={styles.featuresTitle}>Key Features:</h4>
                                <ul className={styles.featuresList}>
                                    {model.features.map((feature, idx) => (
                                        <li key={idx} className={styles.featureItem}>
                                            <CheckCircle className={styles.featureIcon} style={{ color: model.color }} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.bestForSection}>
                                <h4 className={styles.bestForTitle}>Best For:</h4>
                                <div className={styles.bestForTags}>
                                    {model.bestFor.map((item, idx) => (
                                        <span key={idx} className={styles.bestForTag} style={{ backgroundColor: `${model.color}20`, color: model.color }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Link href="/contact" className={styles.hiringButton} style={{ backgroundColor: model.color }}>
                                Choose This Model
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
                        AI Consulting <span className={styles.titleHighlight}>FAQs</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Find answers to common questions about our AI consulting services and solutions.
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

                            <AnimatePresence>
                                {openFaq === index && (
                                    <motion.div
                                        className={styles.faqAnswer}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>Ready to Transform Your Business with AI?</h3>
                        <p className={styles.ctaDescription}>
                            Your AI vision is our next project. Tell us about your business goals,
                            and we&apos;ll show you exactly how AI can make them a reality.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Start Free AI Consultation
                                <ChevronRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="/case-studies/ai" className={styles.ctaSecondary}>
                                View AI Case Studies
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}