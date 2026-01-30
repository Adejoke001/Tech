'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Database, Server, Cpu, BarChart3, LineChart,
    PieChart, Filter, Workflow, Cloud, Shield,
    Zap, Users, Clock, Award, CheckCircle,
    MessageSquare, Star, Sparkles, ChevronRight,
    GitMerge, Layers, Brain, TrendingUp,
    Target, FileText, Globe, Settings,
    RefreshCw, HardDrive, UploadCloud, Lock,
    BarChart, ShieldCheck, CpuIcon,
    Circle, Building,
    Wifi, Smartphone as MobileIcon, Target as TargetIcon,
    PieChart as PieChartIcon
} from 'lucide-react';
import styles from './dataeng.module.css';

export default function DataEngineeringAnalyticsPage() {
    const [activeService, setActiveService] = useState<string>('engineering');
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
    const [activeAnalyticsTab, setActiveAnalyticsTab] = useState<string>('business');

    const testimonial = {
        name: 'Samantha Rodriguez',
        role: 'Chief Data Officer, TechFlow Solutions',
        content: 'Outstanding results, clear communication, and a dedicated team. We\'re extremely satisfied with their data engineering and analytics services.',
        rating: 5,
        project: 'Enterprise Data Platform Migration'
    };

    // ===== COMPLETE DATA ENGINEERING SERVICES (From first website) =====
    const engineeringServices = [
        { icon: <Database />, title: 'Data Engineering Consulting', desc: 'Design scalable data architectures aligned with business objectives for optimized performance.', features: ['Better decision-making & efficiency', 'Design scalable data architectures', 'Develop customized data strategies'], color: '#3B82F6' },
        { icon: <UploadCloud />, title: 'Data Collection', desc: 'Implement custom data extraction and real-time integration methods that suit your unique needs.', features: ['Gather high-quality data', 'Utilize custom extraction methods', 'Enable real-time data integration'], color: '#10B981' },
        { icon: <Filter />, title: 'Data Cleaning and Processing', desc: 'Our expertise ensures reliable datasets, reducing errors and enabling precise analytics.', features: ['Improve data accuracy and integrity', 'Data integrity for reliable analytics', 'Standardize data formats'], color: '#8B5CF6' },
        { icon: <Workflow />, title: 'AIops, MLops, DataOps', desc: 'Integration of AI, ML, and DataOps optimizes workflows, accelerating data-driven innovations.', features: ['Automate data pipelines', 'Enhance data-driven innovations', 'Accelerate deployment cycles'], color: '#F59E0B' },
        { icon: <GitMerge />, title: 'Data Integration and Analysis', desc: 'Our ETL processes and analytical tools deliver seamless data integration and actionable insights.', features: ['Drive smarter business decisions', 'Utilize analytical tools', 'Merge disparate datasets'], color: '#EC4899' },
        { icon: <Layers />, title: 'Data Mining and Architecture', desc: 'Scalable architecture designs ensure efficient data flow, supporting advanced analytics.', features: ['Discover hidden opportunities', 'Support advanced analytics', 'Facilitate large-scale data storage'], color: '#06B6D4' },
        { icon: <PieChart />, title: 'Data Visualization', desc: 'Intuitive dashboards that simplify trends and patterns for non-technical stakeholders.', features: ['Translate complex data into meaningful insights', 'Enable quick decision-making', 'Use tools like Tableau and Power BI'], color: '#84CC16' },
        { icon: <HardDrive />, title: 'Data Management and Governance', desc: 'Implement advanced tools to manage and protect your data, upholding quality and integrity.', features: ['Ensure data compliance and accessibility', 'Use robust governance frameworks', 'Establish clear data ownership'], color: '#EF4444' },
        { icon: <Shield />, title: 'Data Security', desc: 'End-to-end encryption and monitoring solutions to protect against breaches and ensure compliance.', features: ['Use cutting-edge security protocols', 'Ensure compliance with regulations', 'Safeguard data assets'], color: '#0EA5E9' },
        { icon: <Server />, title: 'Data Migration and Warehouse', desc: 'Design centralized data warehouses, improving analytics and business intelligence capabilities.', features: ['Facilitate smooth transitions', 'Minimize data transfer downtime', 'Use business intelligence services'], color: '#14B8A6' },
        { icon: <Workflow />, title: 'Data Pipeline', desc: 'Our expertise ensures efficient extraction, transformation, and loading of data across platforms.', features: ['Use custom-built pipelines', 'Automate data workflows', 'Integrate monitoring tools'], color: '#8B5CF6' },
        { icon: <Cloud />, title: 'Cloud Transformation', desc: 'Utilize top cloud platforms like AWS and Azure to modernize your infrastructure.', features: ['Scalability and flexibility', 'Accessibility and collaboration', 'Optimize costs with cloud'], color: '#3B82F6' },
    ];

    // ===== COMPLETE DATA ANALYTICS SERVICES (From second website) =====
    const analyticsServices = [
        { icon: <BarChart3 />, title: 'Data Analytics Consulting', desc: 'Expert data strategies helping businesses maximize value from data investments.', features: ['Data roadmap development', 'Analytics use-case identification', 'Business-driven data planning'], color: '#3B82F6' },
        { icon: <LineChart />, title: 'Data Analytics Implementation', desc: 'Integrating advanced analytics seamlessly into business operations for real-time decision-making.', features: ['End-to-end implementation', 'Custom solution integration', 'Process optimization'], color: '#10B981' },
        { icon: <BarChart />, title: 'Managed Data Analysis', desc: 'End-to-end analytics services managed by experts, freeing your team to focus on core priorities.', features: ['On-demand analytics support', 'Insight generation', 'Report automation'], color: '#8B5CF6' },
        { icon: <RefreshCw />, title: 'Data Analytics Modernization', desc: 'Modernize legacy analytics systems to enhance performance, scalability, and cost efficiency.', features: ['Cloud migration support', 'Tool & tech upgrades', 'Infrastructure reengineering'], color: '#F59E0B' },
        { icon: <Database />, title: 'Data Management Services', desc: 'Comprehensive data lifecycle management ensures security, integrity, and compliance.', features: ['Data governance setup', 'Centralized storage', 'Quality assurance processes'], color: '#EC4899' },
        { icon: <Server />, title: 'Data Integration & Warehousing', desc: 'Consolidate data from various sources into a single warehouse for faster access and insights.', features: ['ETL pipeline setup', 'Unified data access', 'Scalable warehousing'], color: '#06B6D4' },
        { icon: <Cloud />, title: 'Analytics as a Service (AaaS)', desc: 'Cloud-powered analytics platform offering insights without infrastructure investment.', features: ['Subscription-based analytics', 'Instant data visualizations', 'Minimal IT involvement'], color: '#84CC16' },
        { icon: <Brain />, title: 'Predictive Analytics', desc: 'Use historical data to forecast trends, mitigate risks, and guide strategic decisions.', features: ['AI/ML-based forecasting', 'Trend prediction', 'Risk assessment models'], color: '#EF4444' },
        { icon: <Cpu />, title: 'Big Data Analytics', desc: 'Utilize large-scale data with modern platforms to unlock patterns and business-critical insights.', features: ['Data lake architecture development', 'Stream and batch data pipelines', 'Scalable data storage optimization'], color: '#0EA5E9' },
        { icon: <Brain />, title: 'AI & ML Analytics', desc: 'Enable intelligent decision-making through predictive models, classification systems, and automation.', features: ['Machine learning model deployment', 'Customer intent prediction', 'Anomaly detection models'], color: '#14B8A6' },
        { icon: <Lock />, title: 'Blockchain Analytics', desc: 'Ensure transparency, security, and compliance with real-time blockchain activity monitoring.', features: ['Transaction validation tracking', 'Smart contract audit dashboards', 'Fraud and anomaly detection'], color: '#8B5CF6' },
        { icon: <Wifi />, title: 'IoT Analytics', desc: 'Utilize sensor and edge data for smarter operations, real-time alerts, and predictive actions.', features: ['Sensor activity dashboards', 'Real-time equipment monitoring', 'Predictive maintenance for IoT devices'], color: '#3B82F6' },
    ];

    // ===== EXPANDED ANALYTICS CATEGORIES (50+ categories organized) =====
    const analyticsCategories = {
        business: [
            {
                title: 'Business & Project Management',
                icon: <TrendingUp />,
                analytics: ['Real-time KPI dashboards', 'Project health and risk analytics', 'Project timeline forecasting', 'Team productivity and utilization analytics', 'Budget adherence and cost variance tracking'],
                color: '#3B82F6'
            },
            {
                title: 'ERP Analytics',
                icon: <Settings />,
                analytics: ['Workflow performance metrics', 'Cross-departmental data synchronization', 'Real-time ERP data dashboards', 'Order-to-cash and procure-to-pay cycle analytics', 'Exception handling and error trend analysis'],
                color: '#10B981'
            },
            {
                title: 'Sourcing & Stock Management',
                icon: <Target />,
                analytics: ['AI-powered demand forecasting', 'Procurement efficiency analytics', 'Inventory turnover and reorder optimization', 'Supplier reliability and delivery performance', 'Stock-out and overstock trend analysis'],
                color: '#8B5CF6'
            },
            {
                title: 'Asset Management',
                icon: <Building />,
                analytics: ['Predictive maintenance models', 'Asset usage & depreciation tracking', 'Lifecycle cost and ROI analysis', 'Downtime and incident frequency tracking', 'Scheduled vs. unscheduled maintenance comparison'],
                color: '#F59E0B'
            },
        ],
        industry: [
            {
                title: 'Healthcare Analytics',
                icon: <ShieldCheck />,
                analytics: ['Patient history and trend dashboards', 'Predictive health risk modeling', 'Real-time bed occupancy tracking', 'Claims and billing anomaly detection', 'Diagnostic accuracy insights'],
                color: '#EC4899'
            },
            {
                title: 'Manufacturing Analytics',
                icon: <CpuIcon />,
                analytics: ['Machine performance and downtime tracking', 'Yield and scrap rate analysis', 'Process cycle time analytics', 'Quality assurance trend monitoring', 'Energy consumption efficiency'],
                color: '#06B6D4'
            },
            {
                title: 'BFSI Analytics',
                icon: <BarChart />,
                analytics: ['Credit risk scoring models', 'AI-based fraud monitoring', 'Transaction pattern recognition', 'Portfolio performance dashboards', 'KYC/AML compliance analytics'],
                color: '#84CC16'
            },
            {
                title: 'Transportation & Logistics',
                icon: <Globe />,
                analytics: ['Route efficiency heatmaps', 'Real-time fleet tracking dashboards', 'Fuel consumption trend analysis', 'Warehouse logistics dashboards', 'Shipment delay predictions'],
                color: '#EF4444'
            },
        ],
        technology: [
            {
                title: 'IoT Analytics',
                icon: <Wifi />,
                analytics: ['Sensor activity dashboards', 'Real-time equipment monitoring', 'Environmental condition tracking', 'Predictive maintenance for IoT devices', 'Device connectivity health reports'],
                color: '#0EA5E9'
            },
            {
                title: 'Big Data Analytics',
                icon: <Database />,
                analytics: ['Data lake architecture development', 'Stream and batch data pipelines', 'Scalable data storage optimization', 'Hadoop and Spark implementation', 'Enterprise-wide analytics integration'],
                color: '#14B8A6'
            },
            {
                title: 'AI & ML Analytics',
                icon: <Brain />,
                analytics: ['Machine learning model deployment', 'Customer intent prediction', 'Anomaly detection models', 'Demand forecasting engines', 'NLP-based sentiment analysis'],
                color: '#8B5CF6'
            },
            {
                title: 'Blockchain Analytics',
                icon: <Lock />,
                analytics: ['Transaction validation tracking', 'Smart contract audit dashboards', 'Crypto wallet behavior analysis', 'Blockchain data lineage mapping', 'Regulatory compliance insights'],
                color: '#3B82F6'
            },
        ]
    };

    // ===== EXPANDED COMPARISON DATA =====
    const comparisonData = [
        { aspect: 'Definition and Focus', engineering: 'Designing, constructing, and maintaining data pipelines and architectures', analytics: 'Analyzing and interpreting complex data to uncover meaningful insights' },
        { aspect: 'Primary Goal', engineering: 'Create reliable data infrastructure that enables smooth data flow and accessibility', analytics: 'Derive insights from data that can drive business decisions and strategy' },
        { aspect: 'Key Activities', engineering: 'ETL processes, data warehousing, pipeline creation, database management', analytics: 'Statistical analysis, machine learning, data visualization, reporting' },
        { aspect: 'Core Tools', engineering: 'Apache Hadoop, Apache Spark, SQL/NoSQL databases, Airflow, Kafka', analytics: 'Python/R, TensorFlow, Tableau, Power BI, statistical libraries' },
        { aspect: 'Skill Sets', engineering: 'Strong programming (Python, Java, Scala), database management, cloud technologies', analytics: 'Statistics, mathematics, programming, machine learning algorithms' },
        { aspect: 'Output/Outcome', engineering: 'Well-organized data environment, clean structured data, automated pipelines', analytics: 'Predictive models, data-driven recommendations, actionable insights' },
        { aspect: 'Business Value', engineering: 'Ensures data is accessible, reliable, and ready for analysis at scale', analytics: 'Directly impacts decision-making, identifies opportunities, optimizes operations' },
    ];

    // ===== COMPLETE PRICING DATA (5 tiers from analytics website) =====
    const pricingData = [
        { range: '$15,000 – $40,000', title: 'Basic Dashboards', description: 'To build basic dashboards for performance or sales tracking.', features: ['Standard KPI dashboards', 'Basic data visualization', 'Monthly reporting', '2-3 data sources integration'] },
        { range: '$40,000 – $70,000', title: 'Industry-Specific Analytics', description: 'To develop an industry-specific analytics solution with real-time data processing.', features: ['Real-time dashboards', 'Predictive analytics', 'Custom data models', 'Multiple system integration'] },
        { range: '$70,000 – $100,000', title: 'Custom Analytics Platform', description: 'To build a custom analytics platform with API integrations and business logic layers.', features: ['Custom data pipelines', 'Advanced ML models', 'API integrations', 'Role-based access control'] },
        { range: '$100,000 – $120,000', title: 'Enterprise BI Systems', description: 'Implement enterprise BI systems with automated reporting & custom data pipelines.', features: ['Enterprise BI systems', 'Automated reporting', 'Custom data pipelines', 'Cloud deployment'] },
        { range: '$120,000+', title: 'Full-Scale Data Ecosystem', description: 'For full-scale data lake architecture, ML analytics, predictive modeling across multiple units.', features: ['Data lake implementation', 'Advanced predictive modeling', 'ML analytics across units', 'Complete data transformation'] },
    ];

    // ===== HIRING MODELS (Complete from both websites) =====
    const hiringModels = [
        {
            title: 'Fixed Price Model',
            description: 'For businesses with well-defined project scope and requirements.',
            price: 'From $25,000',
            features: ['Simplified process', 'Higher predictability', 'Greater transparency', 'Reduced risk', 'Low management efforts'],
            color: '#10B981',
            gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
            bestFor: ['Specific Data Migration', 'Dashboard Implementation', 'Compliance Projects'],
            icon: <FileText />
        },
        {
            title: 'Dedicated Hiring Model',
            description: 'For businesses with long-term requirements or complex development process.',
            price: 'From $8,500 /month',
            features: ['Complete control', 'More flexibility', 'Focused and dedicated approach', 'Faster time to market', 'Staff Augmentation'],
            color: '#3B82F6',
            gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
            bestFor: ['Ongoing Data Management', 'Analytics Implementation', 'Continuous Optimization'],
            icon: <Users />
        },
        {
            title: 'Time & Material Model',
            description: 'For businesses looking to pay for completed project instead of committing to fixed cost.',
            price: '$75 - $200 /hour',
            features: ['Faster project start', 'Flexibility to adapt', 'Pay as you go model', 'Easy scaling', 'Transparent billing'],
            color: '#8B5CF6',
            gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
            bestFor: ['Data Consulting', 'Proof of Concepts', 'Emergency Support'],
            icon: <Clock />
        },
    ];

    // ===== KEY BENEFITS SECTION (From both websites) =====
    const keyBenefits = [
        { icon: <Zap />, title: 'Modern Data Pipelines', desc: 'Implement real-time data collection, processing, and analysis for faster decision-making' },
        { icon: <Filter />, title: 'Data Preparation & ETL/ELT', desc: 'Ensure data is clean, consistent, and ready for analysis through effective processes' },
        { icon: <Database />, title: 'Data Lake Implementation', desc: 'Store vast amounts of structured and unstructured data at scale for advanced analytics' },
        { icon: <Cloud />, title: 'Cloud Data Architecture', desc: 'Achieve scalability, flexibility, and cost-efficiency with cloud-native solutions' },
        { icon: <Globe />, title: 'Data Accessibility', desc: 'Seamless integration of various data sources for easy access and utilization' },
        { icon: <CheckCircle />, title: 'Improved Data Quality', desc: 'Robust data preparation and cleansing processes for accurate insights' },
        { icon: <Workflow />, title: 'Efficient Data Processing', desc: 'Streamline data flow from collection to analysis with reduced latency' },
        { icon: <Brain />, title: 'Support for Advanced Technologies', desc: 'Groundwork for machine learning and AI with structured, optimized data' },
    ];

    // ===== DATA PROCESS STEPS (Detailed from both websites) =====
    const processSteps = [
        { 
            id: 1, 
            title: 'Discovery & Assessment', 
            desc: 'We begin by understanding your data needs and business objectives.', 
            details: ['Business requirement analysis', 'Data source identification', 'Success metric definition', 'Stakeholder interviews'],
            icon: <FileText />,
            color: '#3B82F6',
            duration: '2-4 weeks'
        },
        { 
            id: 2, 
            title: 'Data Collection & Integration', 
            desc: 'Gather all relevant data from multiple sources for analysis.', 
            details: ['Source system analysis', 'Data extraction setup', 'Real-time integration', 'Quality checks implementation'],
            icon: <Database />,
            color: '#10B981',
            duration: '2-4 weeks'
        },
        { 
            id: 3, 
            title: 'Data Cleaning & Processing', 
            desc: 'Clean and organize data, ensuring accuracy and consistency.', 
            details: ['Data validation rules', 'Error detection & correction', 'Format standardization', 'Anomaly detection setup'],
            icon: <Filter />,
            color: '#8B5CF6',
            duration: '2-3 weeks'
        },
        { 
            id: 4, 
            title: 'Data Integration & Warehousing', 
            desc: 'Combine data from different systems into a cohesive whole.', 
            details: ['ETL/ELT pipeline development', 'Data warehouse design', 'Schema optimization', 'Performance tuning'],
            icon: <GitMerge />,
            color: '#F59E0B',
            duration: '3-5 weeks'
        },
        { 
            id: 5, 
            title: 'Analysis & Visualization', 
            desc: 'Generate actionable insights through analysis and intuitive visual tools.', 
            details: ['Statistical analysis', 'ML model development', 'Dashboard creation', 'Report automation'],
            icon: <BarChart3 />,
            color: '#EC4899',
            duration: '3-4 weeks'
        },
        { 
            id: 6, 
            title: 'Deployment & Monitoring', 
            desc: 'Deploy the solution and continuously monitor performance for optimization.', 
            details: ['Production deployment', 'Performance monitoring', 'Security validation', 'Ongoing optimization'],
            icon: <RefreshCw />,
            color: '#06B6D4',
            duration: '2-4 weeks'
        },
    ];

    // ===== INDUSTRIES (3 as requested) =====
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
            image: 'https://plus.unsplash.com/premium_photo-1664303677453-ca2ad8f7dd8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZGlhJTIwYW5kJTIwZW50ZXJ0YWlubWVudHxlbnwwfHwwfHx8MA%3D%3D',
            color: '#3B82F6' 
        },
    ];

    // ===== EXPANDED FAQ (Comprehensive from both websites) =====
    const faqs = [
        { 
            q: 'What is the difference between Data Engineering and Data Analytics?', 
            a: 'Data Engineering focuses on designing, constructing, and maintaining data pipelines and architectures - creating the infrastructure that makes data accessible and usable. Data Analytics focuses on examining this data to extract meaningful insights, patterns, and predictions. Engineering builds the highways, Analytics provides the traffic analysis and route optimization.' 
        },
        { 
            q: 'How do Data Engineering and Data Science work together?', 
            a: 'Data Engineering lays the foundation by creating reliable, structured data infrastructure. Data Science builds upon this foundation to apply statistical methods, algorithms, and machine learning techniques. Engineers ensure data is clean and accessible; scientists analyze it to uncover trends and insights that inform business strategies. They collaborate closely for production-grade AI systems.' 
        },
        { 
            q: 'What are the key benefits of implementing modern data engineering solutions?', 
            a: 'Key benefits include: 1) Real-time data processing for faster decisions, 2) Scalable infrastructure to handle growing data volumes, 3) Improved data quality and consistency, 4) Cost optimization through cloud-native solutions, 5) Enhanced security and compliance, 6) Support for advanced analytics and AI/ML workloads, 7) Reduced manual processing time by 20-40%.' 
        },
        { 
            q: 'How does Business Intelligence (BI) differ from Data Analytics?', 
            a: 'BI focuses on collecting, integrating, and presenting historical data to understand and monitor current/past business performance through descriptive analytics. Data Analytics goes further to discover patterns, trends, and future predictions through exploratory and predictive analysis. BI answers "what happened and why," while Analytics answers "what will happen and what should we do."' 
        },
        { 
            q: 'What types of data do you work with in business analytics?', 
            a: 'We work with: 1) Customer Data (purchase history, feedback, behavior), 2) Operational Data (supply chain, productivity, equipment usage), 3) Financial Data (costs, profits, budgets), 4) Sales & Marketing Data (campaign results, engagement rates), 5) Product Usage Data, 6) IoT/Sensor Data, 7) Social Media Data, 8) Transactional Data across all business functions.' 
        },
        { 
            q: 'What are common data engineering challenges and how do you overcome them?', 
            a: 'Common challenges include: 1) Data Quality Issues - overcome with robust validation and automated checks; 2) Scalability Concerns - addressed with cloud-native architecture; 3) Integration Complexity - solved with modern ETL/ELT tools; 4) Security & Compliance - managed through encryption and governance frameworks; 5) Real-time Processing - achieved with streaming technologies; 6) Legacy System Integration - handled through incremental modernization.' 
        },
        { 
            q: 'What is the typical timeline and cost for enterprise data platform implementation?', 
            a: 'Timelines: Basic dashboards (4-6 weeks, $15-40K), Industry solutions (8-12 weeks, $40-70K), Custom platforms (12-16 weeks, $70-100K), Enterprise BI systems (16-20 weeks, $100-120K), Full-scale ecosystems (20-24 weeks, $120K+). We follow agile methodology with value delivery at each phase.' 
        },
        { 
            q: 'How do you ensure data security and regulatory compliance?', 
            a: 'We implement: End-to-end encryption (AES-256/TLS 1.3), Role-Based Access Control (RBAC), data masking/anonymization, comprehensive audit logging, regular security assessments, compliance with GDPR, HIPAA, PCI-DSS, SOC2, and industry-specific regulations. All solutions follow privacy-by-design principles with clear data ownership and stewardship.' 
        },
    ];

    return (
        <div className={styles.pageContainer}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}></div>
                <div className={styles.heroContent}>
                    <motion.div className={styles.heroText} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className={styles.heroBadge}>
                            <Sparkles size={18} /> Data-Driven Decision Making
                        </div>
                        <h1 className={styles.heroTitle}>
                            Data <span className={styles.heroTitleHighlight}>Engineering</span> & <span className={styles.heroTitleHighlight}>Analytics</span>
                        </h1>
                        
                        <p className={styles.heroDescription}>
                            Unlock the true value of your data with scalable engineering pipelines and actionable analytics insights. We build modern data architectures that empower smarter decisions, operational efficiency, and accelerated business growth.
                        </p>
                        <div className={styles.heroCta}>
                            <Link href="/contact" className={styles.ctaButtonPrimary}>
                                Start Data Journey <ChevronRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                    
                    {/* Testimonial Card */}
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
                                        src="https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZSUyMHdvbWFufGVufDB8fDB8fHww"
                                        alt={testimonial.name}
                                        fill
                                        className={styles.testimonialImg}
                                        sizes="400px"
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
                            <p className={styles.testimonialText}>"{testimonial.content}"</p>
                            <div className={styles.testimonialProject}>
                                <Award size={16} /> {testimonial.project}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== TRUSTED BY ===== */}
            <section className={styles.trustedBy}>
                <div className={styles.sectionContent}>
                    <p className={styles.trustedLabel}>Trusted by Startups and Fortune 500 Companies</p>
                    <div className={styles.trustedLogos}>
                        {['Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle', 'SAP', 'Salesforce', 'Intel'].map((logo, i) => (
                            <div key={i} className={styles.logoItem}>{logo}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== COMPLETE SERVICES SECTION ===== */}
            <section id="services" className={styles.servicesSection}>
                <div className={styles.sectionBackground}></div>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>Comprehensive Data Engineering & Analytics Services</h2>
                        <p>End-to-end solutions ensuring high data quality, seamless integration, predictive analytics readiness, and maximum security</p>
                    </div>

                    {/* <div className={styles.servicesTabs}>
                        <button 
                            className={`${styles.serviceTab} ${activeService === 'engineering' ? styles.active : ''}`}
                            onClick={() => setActiveService('engineering')}
                        >
                            <Database /> Data Engineering Services
                        </button>
                        <button 
                            className={`${styles.serviceTab} ${activeService === 'analytics' ? styles.active : ''}`}
                            onClick={() => setActiveService('analytics')}
                        >
                            <BarChart3 /> Data Analytics Services
                        </button>
                    </div> */}

                    <div className={styles.servicesGrid}>
                        {(activeService === 'engineering' ? engineeringServices : analyticsServices).map((service, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.serviceCard}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                style={{ '--service-color': service.color } as React.CSSProperties}
                            >
                                <div className={styles.serviceIcon}>
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <ul className={styles.serviceFeatures}>
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx}><CheckCircle size={14} /> {feature}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== KEY BENEFITS SECTION ===== */}
            <section className={styles.benefitsSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>Key Benefits of Modern Data Engineering & Analytics</h2>
                        <p>Transform your data into a strategic asset that drives innovation and competitive advantage</p>
                    </div>

                    <div className={styles.benefitsGrid}>
                        {keyBenefits.map((benefit, idx) => (
                            <div key={idx} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>{benefit.icon}</div>
                                <h4>{benefit.title}</h4>
                                <p>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== EXPANDED ANALYTICS CATEGORIES ===== */}
            <section className={styles.categoriesSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>50+ Data Analytics Categories We Specialize In</h2>
                        <p>Transform your raw data from disparate sources into strategic assets across every business function</p>
                    </div>

                    <div className={styles.categoriesTabs}>
                        <button 
                            className={`${styles.categoryTab} ${activeAnalyticsTab === 'business' ? styles.active : ''}`}
                            onClick={() => setActiveAnalyticsTab('business')}
                        >
                            By Business Function
                        </button>
                        <button 
                            className={`${styles.categoryTab} ${activeAnalyticsTab === 'industry' ? styles.active : ''}`}
                            onClick={() => setActiveAnalyticsTab('industry')}
                        >
                            By Industry Specifics
                        </button>
                        <button 
                            className={`${styles.categoryTab} ${activeAnalyticsTab === 'technology' ? styles.active : ''}`}
                            onClick={() => setActiveAnalyticsTab('technology')}
                        >
                            By Technology
                        </button>
                    </div>

                    <div className={styles.categoriesGrid}>
                        {analyticsCategories[activeAnalyticsTab as keyof typeof analyticsCategories]?.map((category, idx) => (
                            <div key={idx} className={styles.categoryCard} style={{ borderTopColor: category.color }}>
                                <div className={styles.categoryIcon} style={{ color: category.color }}>
                                    {category.icon}
                                </div>
                                <h4>{category.title}</h4>
                                <ul className={styles.categoryFeatures}>
                                    {category.analytics.map((item, aIdx) => (
                                        <li key={aIdx}>
                                            <Circle size={6} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== COMPLETE COMPARISON SECTION ===== */}
            <section className={styles.comparisonSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>Data Engineering vs. Data Analytics vs. Data Science</h2>
                        <p>Understanding the complementary roles and specialized focus areas in your data ecosystem</p>
                    </div>

                    <div className={styles.comparisonTable}>
                        <div className={styles.tableHeader}>
                            <div className={styles.headerCell}>Aspect</div>
                            <div className={styles.headerCell}>
                                <div className={styles.headerIcon}><Database /></div>
                                <span>Data Engineering</span>
                            </div>
                            <div className={styles.headerCell}>
                                <div className={styles.headerIcon}><BarChart3 /></div>
                                <span>Data Analytics</span>
                            </div>
                            <div className={styles.headerCell}>
                                <div className={styles.headerIcon}><Brain /></div>
                                <span>Data Science</span>
                            </div>
                        </div>

                        {comparisonData.map((row, idx) => (
                            <div key={idx} className={styles.tableRow}>
                                <div className={styles.rowLabel}>{row.aspect}</div>
                                <div className={styles.rowValue}>{row.engineering}</div>
                                <div className={styles.rowValue}>{row.analytics}</div>
                                <div className={styles.rowValue}>
                                    {row.aspect === 'Definition and Focus' ? 'Applying scientific methods, algorithms, and systems to extract insights from data' :
                                     row.aspect === 'Primary Goal' ? 'Build predictive models and advanced algorithms for complex problem-solving' :
                                     row.aspect === 'Key Activities' ? 'Algorithm development, statistical modeling, machine learning research' :
                                     row.aspect === 'Core Tools' ? 'Python/R, TensorFlow, PyTorch, Jupyter, ML libraries' :
                                     row.aspect === 'Skill Sets' ? 'Advanced statistics, machine learning, deep learning, research methodology' :
                                     row.aspect === 'Output/Outcome' ? 'Predictive models, AI algorithms, research findings, automation systems' :
                                     'Enables advanced AI capabilities, automation, and innovative product development'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== DETAILED PROCESS SECTION ===== */}
            <section className={styles.processSection}>
                <div className={styles.sectionBackground}></div>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>Our Proven Data Engineering Process</h2>
                        <p>A comprehensive, 6-phase workflow ensuring your data initiatives deliver maximum business value</p>
                    </div>

                    <div className={styles.processSteps}>
                        {processSteps.map((step, idx) => (
                            <div key={step.id} className={styles.processStep}>
                                <div className={styles.stepHeader}>
                                    <div className={styles.stepNumber}>0{step.id}</div>
                                    <div className={styles.stepDuration}>{step.duration}</div>
                                </div>
                                <div className={styles.stepContent}>
                                    <div className={styles.stepIcon} style={{ backgroundColor: step.color }}>
                                        {step.icon}
                                    </div>
                                    <h4>{step.title}</h4>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                    <ul className={styles.stepDetails}>
                                        {step.details.map((detail, dIdx) => (
                                            <li key={dIdx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                                {idx < processSteps.length - 1 && (
                                    <div className={styles.stepArrow}>
                                        <ChevronRight size={24} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== COMPLETE PRICING SECTION ===== */}
            <section className={styles.pricingSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>Cost of Data Analytics Services</h2>
                        <p>Transparent pricing based on data volume, industry use case, complexity, and integration requirements</p>
                    </div>

                    <div className={styles.pricingGrid}>
                        {pricingData.map((tier, idx) => (
                            <div key={idx} className={styles.pricingCard}>
                                <div className={styles.pricingHeader}>
                                    <h3>{tier.title}</h3>
                                    <div className={styles.pricingRange}>{tier.range}</div>
                                </div>
                                <p className={styles.pricingDesc}>{tier.description}</p>
                                <ul className={styles.pricingFeatures}>
                                    {tier.features.map((feature, fIdx) => (
                                        <li key={fIdx}><CheckCircle size={16} /> {feature}</li>
                                    ))}
                                </ul>
                                <Link href="/contact" className={styles.pricingCta}>
                                    Get Detailed Quote <ChevronRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HIRING MODELS SECTION ===== */}
            <section className={styles.hiringSection}>
                <div className={styles.sectionBackground}></div>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>Our Custom Hiring Models</h2>
                        <p>Choose from flexible hiring models designed to fit your specific needs, budget, and project requirements</p>
                    </div>

                    <div className={styles.hiringGrid}>
                        {hiringModels.map((model, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.hiringCard}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className={styles.modelHeader} style={{ background: model.gradient }}>
                                    <div className={styles.modelIcon}>{model.icon}</div>
                                    <div className={styles.modelPrice}>{model.price}</div>
                                    <h3>{model.title}</h3>
                                </div>
                                <div className={styles.modelBody}>
                                    <p className={styles.modelDesc}>{model.description}</p>
                                    <ul className={styles.modelFeatures}>
                                        {model.features.map((feature, fIdx) => (
                                            <li key={fIdx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <div className={styles.modelBestFor}>
                                        <strong>Best For:</strong>
                                        <div className={styles.bestForTags}>
                                            {model.bestFor.map((item, bIdx) => (
                                                <span key={bIdx} className={styles.bestForTag}>{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <Link href="/contact" className={styles.modelCta} style={{ backgroundColor: model.color }}>
                                        Choose This Model
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== INDUSTRIES SECTION (3 as requested) ===== */}
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

            {/* ===== COMPANY STATS ===== */}
            {/* <section className={styles.statsSection}>
                <div className={styles.sectionBackground}></div>
                <div className={styles.sectionContent}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <h3>700+</h3>
                            <p>Full-time Staff</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>20+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>4500+</h3>
                            <p>Satisfied Customers</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>50+</h3>
                            <p>Analytics Categories</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* ===== COMPREHENSIVE FAQ SECTION ===== */}
            <section className={styles.faqSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>A Comprehensive Guide to Data Engineering & Analytics</h2>
                        <p>Data engineering forms the backbone of every analytics, automation, and AI initiative. Get answers to common questions.</p>
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
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaBackground}></div>
                <div className={styles.ctaContent}>
                    <h2>Ready to Transform Your Data into Business Value?</h2>
                    <p>Partner with us to build scalable data infrastructure and uncover actionable insights that drive growth and innovation</p>
                    <div className={styles.ctaButtons}>
                        <Link href="/contact" className={styles.ctaButtonPrimary}>
                            Start Your Data Journey <ChevronRight size={20} />
                        </Link>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}