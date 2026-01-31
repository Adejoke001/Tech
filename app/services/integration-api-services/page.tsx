'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code, GitMerge, Shield, Zap, Cloud, Server,
    Database, Award, CheckCircle,
    MessageSquare, Star, Sparkles, ChevronRight,
    Lock, Globe, Workflow, RefreshCw, Wifi,
    FileText, PieChart,
    BarChart, Bell, Network, Smartphone,
    Circle, Terminal,
    ShieldCheck, TrendingUp, Target, GitBranch,
    Webhook, Key as KeyIcon,
    Globe as GlobeIcon
} from 'lucide-react';
import styles from './apiDevelop.module.css';

export default function ApiDevelopmentPage() {
    const [activeTab, setActiveTab] = useState<string>('development');
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

    const testimonial = {
        name: 'Jonathan Miller',
        role: 'CTO, TechFlow Solutions',
        content: 'Their API development team delivered robust, scalable solutions that perfectly integrated with our existing systems. Exceptional communication and technical expertise.',
        rating: 5,
        project: 'Enterprise API Ecosystem'
    };

    // ===== API DEVELOPMENT SERVICES =====
    const apiDevelopmentServices = [
        {
            icon: <Code />,
            title: 'Custom API Development',
            desc: 'Build secure, scalable, and high-performance custom APIs tailored to your business requirements.',
            features: ['RESTful API design', 'GraphQL implementation', 'API versioning strategy', 'Performance optimization'],
            color: '#3B82F6'
        },
        {
            icon: <GitMerge />,
            title: 'API Integration',
            desc: 'Seamlessly integrate third-party APIs and legacy systems with your modern applications.',
            features: ['Third-party API integration', 'Legacy system modernization', 'Real-time data synchronization', 'Error handling & logging'],
            color: '#10B981'
        },
        {
            icon: <Shield />,
            title: 'API Security',
            desc: 'Implement enterprise-grade security measures to protect your APIs from vulnerabilities.',
            features: ['OAuth 2.0 & JWT implementation', 'Rate limiting & throttling', 'API gateway security', 'Security testing & audits'],
            color: '#8B5CF6'
        },
        {
            icon: <Zap />,
            title: 'API Performance Optimization',
            desc: 'Optimize API response times, throughput, and reliability for high-demand applications.',
            features: ['Response time optimization', 'Caching strategies', 'Load balancing', 'Database query optimization'],
            color: '#F59E0B'
        },
        {
            icon: <Cloud />,
            title: 'Cloud API Development',
            desc: 'Develop cloud-native APIs using AWS, Azure, or Google Cloud for maximum scalability.',
            features: ['AWS API Gateway', 'Azure API Management', 'Google Cloud Endpoints', 'Serverless API architecture'],
            color: '#06B6D4'
        },
        {
            icon: <Database />,
            title: 'Database API Development',
            desc: 'Create efficient APIs for database operations with optimized queries and transactions.',
            features: ['SQL/NoSQL database APIs', 'ORM implementation', 'Query optimization', 'Transaction management'],
            color: '#EC4899'
        },
        {
            icon: <Workflow />,
            title: 'Microservices API',
            desc: 'Design and implement APIs for microservices architecture with service discovery and communication.',
            features: ['Service mesh implementation', 'API gateway setup', 'Inter-service communication', 'Load balancing'],
            color: '#84CC16'
        },
        {
            icon: <Smartphone />,
            title: 'Mobile API Development',
            desc: 'Build APIs specifically optimized for mobile applications with offline capabilities.',
            features: ['Mobile-first API design', 'Push notification APIs', 'Offline synchronization', 'Battery optimization'],
            color: '#EF4444'
        },
        {
            icon: <Webhook />,
            title: 'Webhook Implementation',
            desc: 'Implement reliable webhook systems for real-time event notifications and data streaming.',
            features: ['Event-driven architecture', 'Webhook security', 'Retry mechanisms', 'Payload validation'],
            color: '#0EA5E9'
        },
        {
            icon: <BarChart />,
            title: 'API Analytics & Monitoring',
            desc: 'Implement comprehensive monitoring, analytics, and reporting for your APIs.',
            features: ['Real-time API monitoring', 'Usage analytics dashboards', 'Performance metrics', 'Alerting systems'],
            color: '#14B8A6'
        },
        {
            icon: <GitBranch />,
            title: 'API Versioning & Lifecycle',
            desc: 'Manage API versions, deprecation strategies, and complete API lifecycle management.',
            features: ['Version control strategies', 'Backward compatibility', 'Deprecation policies', 'Lifecycle automation'],
            color: '#8B5CF6'
        },
        {
            icon: <Lock />,
            title: 'API Gateway Implementation',
            desc: 'Deploy and configure API gateways for traffic management, security, and analytics.',
            features: ['Kong/Apigee setup', 'Traffic routing', 'Authentication/authorization', 'Analytics integration'],
            color: '#3B82F6'
        },
    ];

    // ===== API INTEGRATION SERVICES =====
    const apiIntegrationServices = [
        {
            title: 'Third-Party API Integration',
            icon: <Globe />,
            desc: 'Integrate popular third-party services like payment gateways, messaging, and cloud services.',
            integrations: ['Payment gateways (Stripe, PayPal)', 'Communication APIs (Twilio, SendGrid)', 'Social media APIs', 'Cloud storage APIs'],
            color: '#3B82F6'
        },
        {
            title: 'Legacy System Integration',
            icon: <Server />,
            desc: 'Connect legacy systems with modern applications through secure API bridges.',
            integrations: ['Mainframe integration', 'ERP/CRM system APIs', 'Database migration APIs', 'File system integration'],
            color: '#10B981'
        },
        {
            title: 'Cloud Service Integration',
            icon: <Cloud />,
            desc: 'Integrate with cloud platforms and services for enhanced functionality.',
            integrations: ['AWS services integration', 'Azure cloud services', 'Google Cloud APIs', 'SaaS platform integration'],
            color: '#8B5CF6'
        },
        {
            title: 'IoT & Device Integration',
            icon: <Wifi />,
            desc: 'Connect IoT devices and hardware through robust API interfaces.',
            integrations: ['Sensor data APIs', 'Device management APIs', 'Real-time telemetry', 'Firmware update APIs'],
            color: '#F59E0B'
        },
        {
            title: 'E-Commerce Integration',
            icon: <ShoppingBag />,
            desc: 'Integrate e-commerce platforms, payment systems, and inventory management.',
            integrations: ['Shopping cart APIs', 'Payment processing', 'Inventory management', 'Shipping & logistics APIs'],
            color: '#EC4899'
        },
        {
            title: 'Data & Analytics Integration',
            icon: <PieChart />,
            desc: 'Connect data sources and analytics platforms through standardized APIs.',
            integrations: ['Business intelligence tools', 'Data warehouse APIs', 'Real-time analytics', 'Reporting systems'],
            color: '#06B6D4'
        },
    ];

    // ===== API TYPES WE DEVELOP =====
    const apiTypes = [
        {
            type: 'REST APIs',
            icon: <GlobeIcon />,
            desc: 'Representational State Transfer APIs following REST architectural principles.',
            features: ['Standard HTTP methods', 'Stateless communication', 'JSON/XML responses', 'Resource-based URLs'],
            bestFor: ['Web applications', 'Mobile backends', 'Public APIs', 'Microservices'],
            color: '#3B82F6'
        },
        {
            type: 'GraphQL APIs',
            icon: <GitMerge />,
            desc: 'Query language for APIs providing clients with exactly the data they request.',
            features: ['Single endpoint', 'Flexible queries', 'Real-time subscriptions', 'Type system'],
            bestFor: ['Complex data requirements', 'Mobile applications', 'Real-time applications', 'Multi-platform systems'],
            color: '#10B981'
        },
        {
            type: 'SOAP APIs',
            icon: <ShieldCheck />,
            desc: 'Simple Object Access Protocol for structured information exchange.',
            features: ['XML-based messaging', 'WS-Security standards', 'ACID compliance', 'Enterprise features'],
            bestFor: ['Enterprise applications', 'Financial services', 'Government systems', 'Legacy integration'],
            color: '#8B5CF6'
        },
        {
            type: 'gRPC APIs',
            icon: <Zap />,
            desc: 'High-performance Remote Procedure Call framework using HTTP/2 and Protocol Buffers.',
            features: ['Binary serialization', 'HTTP/2 transport', 'Bidirectional streaming', 'Language agnostic'],
            bestFor: ['Microservices communication', 'Real-time streaming', 'Mobile applications', 'High-performance systems'],
            color: '#F59E0B'
        },
        {
            type: 'WebSocket APIs',
            icon: <Network />,
            desc: 'Real-time, bidirectional communication between clients and servers.',
            features: ['Full-duplex communication', 'Low latency', 'Persistent connections', 'Real-time updates'],
            bestFor: ['Chat applications', 'Live dashboards', 'Gaming applications', 'Collaboration tools'],
            color: '#EC4899'
        },
        {
            type: 'Webhook APIs',
            icon: <Bell />,
            desc: 'Event-driven APIs that send real-time notifications to subscribed endpoints.',
            features: ['Event-driven architecture', 'HTTP callbacks', 'Retry mechanisms', 'Payload customization'],
            bestFor: ['Notifications systems', 'CI/CD pipelines', 'Order processing', 'Real-time updates'],
            color: '#06B6D4'
        },
    ];

    // ===== API DEVELOPMENT PROCESS =====
    const developmentProcess = [
        {
            step: 1,
            title: 'Requirements Analysis',
            desc: 'Understand business needs and technical requirements',
            activities: ['Stakeholder interviews', 'API specification analysis', 'Security requirements', 'Performance expectations'],
            icon: <FileText />,
            color: '#3B82F6'
        },
        {
            step: 2,
            title: 'API Design',
            desc: 'Design API architecture and specifications',
            activities: ['Endpoint design', 'Data models definition', 'Authentication strategy', 'Error handling design'],
            icon: <Code />,
            color: '#10B981'
        },
        {
            step: 3,
            title: 'Development',
            desc: 'Implement API endpoints and business logic',
            activities: ['Backend development', 'Database integration', 'Business logic implementation', 'Unit testing'],
            icon: <Terminal />,
            color: '#8B5CF6'
        },
        {
            step: 4,
            title: 'Testing',
            desc: 'Comprehensive testing for quality assurance',
            activities: ['Integration testing', 'Performance testing', 'Security testing', 'Load testing'],
            icon: <CheckCircle />,
            color: '#F59E0B'
        },
        {
            step: 5,
            title: 'Deployment',
            desc: 'Deploy APIs to production environment',
            activities: ['CI/CD pipeline setup', 'Environment configuration', 'API gateway setup', 'Monitoring setup'],
            icon: <Cloud />,
            color: '#EC4899'
        },
        {
            step: 6,
            title: 'Maintenance',
            desc: 'Ongoing support and optimization',
            activities: ['Performance monitoring', 'Security updates', 'Version management', 'Documentation updates'],
            icon: <RefreshCw />,
            color: '#06B6D4'
        },
    ];

    // ===== TECHNOLOGIES WE USE =====
    const technologies = [
        {
            category: 'Backend Frameworks',
            techs: ['Node.js', 'Python Django', 'Java Spring Boot', '.NET Core', 'Ruby on Rails', 'Go'],
            color: '#3B82F6',
            icon: <Server />
        },
        {
            category: 'API Specifications',
            techs: ['OpenAPI/Swagger', 'GraphQL Schema', 'RAML', 'AsyncAPI', 'Postman Collections'],
            color: '#10B981',
            icon: <FileText />
        },
        {
            category: 'Authentication',
            techs: ['OAuth 2.0', 'JWT', 'API Keys', 'OpenID Connect', 'SAML'],
            color: '#8B5CF6',
            icon: <KeyIcon />
        },
        {
            category: 'API Gateways',
            techs: ['Kong', 'Apigee', 'AWS API Gateway', 'Azure API Management', 'Tyk'],
            color: '#F59E0B',
            icon: <GitBranch />
        },
        {
            category: 'Testing Tools',
            techs: ['Postman', 'JMeter', 'SoapUI', 'Karate', 'RestAssured'],
            color: '#EC4899',
            icon: <CheckCircle />
        },
        {
            category: 'Monitoring',
            techs: ['Datadog', 'New Relic', 'Prometheus', 'Grafana', 'ELK Stack'],
            color: '#06B6D4',
            icon: <BarChart />
        },
    ];

    // ===== INDUSTRIES =====
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

    // ===== BENEFITS OF API DEVELOPMENT =====
    const benefits = [
        {
            title: 'Improved Efficiency',
            desc: 'Automate processes and reduce manual work through API automation.',
            icon: <Zap />
        },
        {
            title: 'Enhanced Integration',
            desc: 'Connect disparate systems and applications seamlessly.',
            icon: <GitMerge />
        },
        {
            title: 'Scalability',
            desc: 'Build systems that can grow with your business needs.',
            icon: <TrendingUp />
        },
        {
            title: 'Security',
            desc: 'Implement robust security protocols and access controls.',
            icon: <Shield />
        },
        {
            title: 'Cost Reduction',
            desc: 'Reduce development costs through reusable API components.',
            icon: <Target />
        },
        {
            title: 'Innovation Enablement',
            desc: 'Create new business opportunities through API ecosystems.',
            icon: <Sparkles />
        },
    ];

    // ===== FAQ =====
    const faqs = [
        {
            q: 'What is API development and why is it important for businesses?',
            a: 'API (Application Programming Interface) development involves creating software interfaces that allow different applications to communicate with each other. It\'s crucial for businesses because it enables system integration, facilitates data exchange, supports mobile applications, allows third-party integrations, and creates new revenue streams through API monetization. APIs serve as the building blocks of modern digital ecosystems.'
        },
        {
            q: 'What are the different types of APIs you develop?',
            a: 'We develop various API types including: 1) REST APIs for web services using HTTP methods, 2) GraphQL APIs for flexible data querying, 3) SOAP APIs for enterprise-grade applications with strict standards, 4) gRPC APIs for high-performance microservices, 5) WebSocket APIs for real-time bidirectional communication, and 6) Webhook APIs for event-driven architectures. We choose the right type based on your specific requirements.'
        },
        {
            q: 'How do you ensure API security and compliance?',
            a: 'We implement multiple security layers: authentication (OAuth 2.0, JWT), authorization (role-based access), encryption (TLS 1.3), rate limiting, input validation, and regular security audits. For compliance, we follow standards like GDPR, HIPAA, PCI-DSS, and implement audit logging, data masking, and compliance monitoring based on industry requirements.'
        },
        {
            q: 'What is the typical timeline for API development projects?',
            a: 'Timelines vary based on complexity: Simple APIs (2-4 weeks), Medium complexity (4-8 weeks), Complex enterprise APIs (8-16 weeks), Complete API ecosystems (16-24 weeks). We follow agile methodology with 2-week sprints, delivering working APIs incrementally. Each phase includes planning, development, testing, and deployment with continuous feedback.'
        },
        {
            q: 'How do you handle API versioning and backward compatibility?',
            a: 'We implement semantic versioning (v1, v2, etc.) with clear deprecation policies. Strategies include URI versioning (/api/v1/resource), header versioning, and parameter versioning. We maintain backward compatibility through careful design, version negotiation, and providing migration paths. Deprecated versions are supported for a defined period with clear communication to clients.'
        },
        {
            q: 'What support and maintenance do you provide after API deployment?',
            a: 'We offer comprehensive post-deployment support: 24/7 monitoring, performance optimization, security updates, bug fixes, documentation updates, and capacity planning. Our maintenance packages include regular health checks, security audits, performance reports, and version updates. We also provide developer support and training for your team.'
        },
        {
            q: 'Can you integrate with our existing systems and legacy applications?',
            a: 'Yes, we specialize in integrating with existing systems including legacy applications, databases, ERP/CRM systems, and third-party services. We use various integration patterns: API gateways, message queues, data transformation layers, and custom connectors. We ensure minimal disruption and maintain data integrity throughout the integration process.'
        },
        {
            q: 'What are your API documentation and testing practices?',
            a: 'We create comprehensive API documentation using OpenAPI/Swagger specifications, including endpoints, parameters, responses, authentication, and code examples. For testing, we implement unit tests, integration tests, performance tests, security tests, and load tests. We use tools like Postman, JMeter, and custom test automation frameworks to ensure API reliability.'
        },
    ];

    // ===== PRICING =====
    // const pricingTiers = [
    //     {
    //         title: 'Basic API Development',
    //         price: '$15,000 - $35,000',
    //         desc: 'For simple APIs with limited endpoints and standard features.',
    //         features: ['Up to 10 API endpoints', 'Basic authentication', 'Standard documentation', 'Basic testing'],
    //         bestFor: ['Startups', 'Proof of concepts', 'Simple integrations'],
    //         color: '#10B981'
    //     },
    //     {
    //         title: 'Enterprise API Suite',
    //         price: '$35,000 - $75,000',
    //         desc: 'Comprehensive API development with advanced features and integrations.',
    //         features: ['Up to 50 API endpoints', 'Advanced security', 'Comprehensive documentation', 'Performance testing'],
    //         bestFor: ['Medium businesses', 'Complex integrations', 'Mobile backends'],
    //         color: '#3B82F6'
    //     },
    //     {
    //         title: 'API Ecosystem',
    //         price: '$75,000 - $150,000+',
    //         desc: 'Complete API platform with microservices, gateways, and extensive integrations.',
    //         features: ['Unlimited endpoints', 'Enterprise security', 'API gateway setup', '24/7 monitoring'],
    //         bestFor: ['Large enterprises', 'Digital transformation', 'API-first companies'],
    //         color: '#8B5CF6'
    //     },
    // ];

    return (
        <div className={styles.pageContainer}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}></div>
                <div className={styles.heroContent}>
                    <motion.div className={styles.heroText} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className={styles.heroBadge}>
                            <Sparkles size={18} /> Scalable & Secure APIs
                        </div>
                        <h1 className={styles.heroTitle}>
                            API <span className={styles.heroTitleHighlight}>Development</span> & <span className={styles.heroTitleHighlight}>Integration</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Connect, Scale, and Transform Your Digital Ecosystem
                        </p>
                        <p className={styles.heroDescription}>
                            Build robust, scalable APIs that power your applications, enable seamless integrations, and create new business opportunities. Our expert developers deliver secure, high-performance API solutions.
                        </p>
                        <div className={styles.heroCta}>
                            <Link href="/contact" className={styles.ctaButtonPrimary}>
                                Start Your API Project <ChevronRight size={20} />
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
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
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
                <div className={styles.sectionContent}>
                    <p className={styles.trustedLabel}>Trusted by Industry Leaders</p>
                    <div className={styles.trustedLogos}>
                        {['Microsoft', 'Google', 'Amazon', 'IBM', 'Salesforce', 'Stripe'].map((logo, i) => (
                            <div key={i} className={styles.logoItem}>{logo}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES OVERVIEW ===== */}
            <section className={styles.servicesOverview}>
                <div className={styles.sectionBackground}></div>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>Comprehensive API Services</h2>
                        <p>End-to-end API development and integration solutions tailored to your business needs</p>
                    </div>

                    <div className={styles.servicesTabs}>
                        <button
                            className={`${styles.serviceTab} ${activeTab === 'development' ? styles.active : ''}`}
                            onClick={() => setActiveTab('development')}
                        >
                            <Code /> API Development
                        </button>
                        <button
                            className={`${styles.serviceTab} ${activeTab === 'integration' ? styles.active : ''}`}
                            onClick={() => setActiveTab('integration')}
                        >
                            <GitMerge /> API Integration
                        </button>
                    </div>

                    {activeTab === 'development' && (
                        <div className={styles.servicesGrid}>
                            {apiDevelopmentServices.map((service, idx) => (
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
                                            <li key={fIdx}>
                                                <Circle size={6} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'integration' && (
                        <div className={styles.integrationGrid}>
                            {apiIntegrationServices.map((service, idx) => (
                                <div key={idx} className={styles.integrationCard} style={{ borderTopColor: service.color }}>
                                    <div className={styles.integrationIcon} style={{ color: service.color }}>
                                        {service.icon}
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <div className={styles.integrationList}>
                                        <strong>Common Integrations:</strong>
                                        <ul>
                                            {service.integrations.map((item, iIdx) => (
                                                <li key={iIdx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ===== API TYPES ===== */}
            <section className={styles.apiTypesSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>API Types We Develop</h2>
                        <p>Specialized expertise across all major API architectures and protocols</p>
                    </div>

                    <div className={styles.apiTypesGrid}>
                        {apiTypes.map((api, idx) => (
                            <div key={idx} className={styles.apiTypeCard} style={{ borderColor: api.color }}>
                                <div className={styles.apiTypeHeader}>
                                    <div className={styles.apiTypeIcon} style={{ backgroundColor: api.color }}>
                                        {api.icon}
                                    </div>
                                    <h3>{api.type}</h3>
                                </div>
                                <p className={styles.apiTypeDesc}>{api.desc}</p>
                                <div className={styles.apiTypeFeatures}>
                                    <strong>Key Features:</strong>
                                    <ul>
                                        {api.features.map((feature, fIdx) => (
                                            <li key={fIdx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.apiTypeBestFor}>
                                    <strong>Best For:</strong>
                                    <div className={styles.bestForTags}>
                                        {api.bestFor.map((item, bIdx) => (
                                            <span key={bIdx} className={styles.bestForTag} style={{ backgroundColor: `${api.color}15` }}>
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== DEVELOPMENT PROCESS ===== */}
            <section className={styles.processSection}>
                <div className={styles.sectionBackground}></div>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>Our API Development Process</h2>
                        <p>A systematic approach ensuring quality, security, and scalability at every stage</p>
                    </div>

                    <div className={styles.processTimeline}>
                        {developmentProcess.map((step, idx) => (
                            <div key={step.step} className={styles.processStep}>
                                <div className={styles.stepIndicator}>
                                    <div className={styles.stepNumber}>0{step.step}</div>
                                    <div className={styles.stepIcon} style={{ backgroundColor: step.color }}>
                                        {step.icon}
                                    </div>
                                </div>
                                <div className={styles.stepContent}>
                                    <h4>{step.title}</h4>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                    <div className={styles.stepActivities}>
                                        <strong>Key Activities:</strong>
                                        <ul>
                                            {step.activities.map((activity, aIdx) => (
                                                <li key={aIdx}>{activity}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {idx < developmentProcess.length - 1 && (
                                    <div className={styles.stepConnector}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TECHNOLOGIES SECTION ===== */}
            <section className={styles.technologiesSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>Technologies We Use</h2>
                        <p>Cutting-edge tools and frameworks for building robust, scalable APIs</p>
                    </div>

                    <div className={styles.technologiesGrid}>
                        {technologies.map((tech, idx) => (
                            <div key={idx} className={styles.techCategory} style={{ borderColor: tech.color }}>
                                <div className={styles.techHeader}>
                                    <div className={styles.techIcon} style={{ color: tech.color }}>
                                        {tech.icon}
                                    </div>
                                    <h4>{tech.category}</h4>
                                </div>
                                <div className={styles.techList}>
                                    {tech.techs.map((item, tIdx) => (
                                        <span key={tIdx} className={styles.techItem} style={{ backgroundColor: `${tech.color}10` }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== BENEFITS SECTION ===== */}
            <section className={styles.benefitsSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>Benefits of Professional API Development</h2>
                        <p>Transform your business with well-designed APIs that deliver tangible value</p>
                    </div>

                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    {benefit.icon}
                                </div>
                                <h4>{benefit.title}</h4>
                                <p>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRICING SECTION ===== */}
            {/* <section className={styles.pricingSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>API Development Pricing</h2>
                        <p>Transparent pricing based on complexity, features, and integration requirements</p>
                    </div>

                    <div className={styles.pricingGrid}>
                        {pricingTiers.map((tier, idx) => (
                            <div key={idx} className={styles.pricingCard} style={{ borderTopColor: tier.color }}>
                                <div className={styles.pricingHeader}>
                                    <h3>{tier.title}</h3>
                                    <div className={styles.pricingAmount}>{tier.price}</div>
                                </div>
                                <p className={styles.pricingDesc}>{tier.desc}</p>
                                <ul className={styles.pricingFeatures}>
                                    {tier.features.map((feature, fIdx) => (
                                        <li key={fIdx}>
                                            <CheckCircle size={16} color={tier.color} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className={styles.pricingBestFor}>
                                    <strong>Ideal For:</strong>
                                    <div className={styles.bestForList}>
                                        {tier.bestFor.map((item, bIdx) => (
                                            <div key={bIdx} className={styles.bestForItem}>{item}</div>
                                        ))}
                                    </div>
                                </div>
                                <Link href="/contact" className={styles.pricingCta} style={{ backgroundColor: tier.color }}>
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* ===== INDUSTRIES SECTION ===== */}
            <section className={styles.industriesSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>Industries We Serve</h2>
                        <p>Domain-specific API solutions for diverse business sectors</p>
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
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2>API Development Guide</h2>
                        <p>Answers to common questions about API development and integration</p>
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

            {/* ===== CTA SECTION ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaBackground}></div>
                <div className={styles.ctaContent}>
                    <h2>Ready to Build Powerful APIs?</h2>
                    <p>Connect your systems, enable integrations, and create new opportunities with our expert API development services</p>
                    <div className={styles.ctaButtons}>
                        <Link href="/contact" className={styles.ctaButtonPrimary}>
                            Start Your API Project <ChevronRight size={20} />
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
}

// Add missing ShoppingBag icon import
function ShoppingBag(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
    );
}