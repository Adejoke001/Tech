'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Smartphone, Code, Zap, Users, TrendingUp,
    CheckCircle, Award, MessageSquare, Sparkles,
    Cloud, ChevronRight, HelpCircle, ArrowRight,
    GitBranch, FileText, HeadphonesIcon, RefreshCw,
    ShieldCheck, Workflow, Server, Layers, Code2, Monitor,
    CloudLightning, Shield, FileCode, GitPullRequest, TestTube,
    Database, Lock, Clock, Target, Gauge, Users as UsersIcon, Rocket,
    Calendar, Scale, Briefcase, Globe as GlobeIcon
} from 'lucide-react';
import styles from './fullstack.module.css';

export default function FullStackDevelopersPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

    // Testimonial for full-stack
    const testimonial = {
        name: 'Michael Rodriguez',
        role: 'CTO, FinTech Solutions',
        content: 'BBNTech\'s full-stack team delivered a complete web platform in 4 months that handles 50,000+ daily transactions. Their end-to-end expertise saved us 30% in development costs.',
        rating: 5,
        project: 'Enterprise Banking Platform'
    };

    // Full Stack Expertise Areas
    const fullStackExpertise = [
        {
            id: 1,
            title: 'Full Stack Web Development',
            description: 'Custom web solutions for startups, SMEs, and enterprises with end-to-end development capabilities. Our developers excel in building scalable, high-performance applications.',
            icon: <Code2 className={styles.expertiseIcon} />,
            color: '#3B82F6',
            features: ['MEAN/MERN Stack Development', 'Laravel/PHP Applications', 'Java Spring Boot Solutions', 'Complete Web Architecture'],
            details: 'End-to-end development from concept to deployment'
        },
        {
            id: 2,
            title: 'Front-end Development',
            description: 'Expertise in modern front-end frameworks including React, Vue, Angular with focus on responsive design and user experience.',
            icon: <Monitor className={styles.expertiseIcon} />,
            color: '#10B981',
            features: ['React/Vue/Angular Development', 'Responsive Web Design', 'UI/UX Implementation', 'Progressive Web Apps'],
            details: 'Creating engaging user interfaces across devices'
        },
        {
            id: 3,
            title: 'Back-end Development',
            description: 'Robust back-end development with microservices architecture, API development, and database optimization.',
            icon: <Server className={styles.expertiseIcon} />,
            color: '#8B5CF6',
            features: ['RESTful API Development', 'Database Design & Optimization', 'Server Architecture', 'Microservices Implementation'],
            details: 'Building scalable and secure server-side solutions'
        },
        {
            id: 4,
            title: 'MEAN & MERN Stack',
            description: 'Full-stack JavaScript development using MongoDB, Express, Angular/React, and Node.js for modern web applications.',
            icon: <Layers className={styles.expertiseIcon} />,
            color: '#F59E0B',
            features: ['MongoDB + Express.js', 'Angular/React.js Frontend', 'Node.js Backend', 'Real-time Applications'],
            details: 'JavaScript-based full stack solutions'
        },
        {
            id: 5,
            title: 'Support & Maintenance',
            description: 'Comprehensive support and maintenance services ensuring your applications run smoothly and securely.',
            icon: <ShieldCheck className={styles.expertiseIcon} />,
            color: '#EC4899',
            features: ['24/7 Technical Support', 'Bug Fixes & Updates', 'Performance Optimization', 'Security Patches'],
            details: 'Ongoing maintenance and support'
        },
        {
            id: 6,
            title: 'Cloud Deployment & CI/CD',
            description: 'Expert cloud deployment on AWS, Azure, GCP with automated CI/CD pipelines for seamless delivery.',
            icon: <CloudLightning className={styles.expertiseIcon} />,
            color: '#06B6D4',
            features: ['AWS/Azure/GCP Deployment', 'Docker & Kubernetes', 'CI/CD Pipelines', 'DevOps Implementation'],
            details: 'Cloud-native application deployment'
        }
    ];

    // Technology Stack - 6 categories, ALL technologies displayed
    const technologyStack = {
        'database-languages': {
            title: 'Database & Programming Languages',
            icon: <Database />,
            color: '#3B82F6',
            technologies: [
                'Oracle', 'SQL Server', 'Redis', 'MongoDB', 'PostgreSQL',
                'MySQL', 'Java', 'C#', 'Ruby', 'PHP', 'Python', 'JavaScript',
                'TypeScript', 'Go', 'Kotlin', 'Scala'
            ]
        },
        'ui-toolkits': {
            title: 'UI Frameworks & Toolkits',
            icon: <Monitor />,
            color: '#10B981',
            technologies: [
                'React Ant Design', 'Material-UI', 'Bootstrap', 'Semantic UI',
                'Pure CSS', 'Angular Material', 'Vue.js', 'Next.js', 'Gatsby',
                'UIKit', 'Foundation', 'Milligram', 'One-Nexus', 'Tailwind CSS'
            ]
        },
        'hosting-platforms': {
            title: 'Hosting & Cloud Platforms',
            icon: <Cloud />,
            color: '#8B5CF6',
            technologies: [
                'AWS EC2', 'AWS Lambda', 'Docker', 'Heroku', 'Firebase',
                'Kubernetes', 'Azure', 'Google Cloud Platform', 'RackSpace',
                'Digital Ocean', 'Linode', 'Netlify', 'Vercel'
            ]
        },
        'tools-utilities': {
            title: 'Development Tools & Utilities',
            icon: <Code />,
            color: '#F59E0B',
            technologies: [
                'NPM/Yarn', 'REST APIs', 'GraphQL', 'JSON', 'Webpack',
                'Babel', 'Jest', 'Mocha/Chai', 'ELK Stack', 'Gulp',
                'Grunt', 'ESLint', 'Prettier', 'Jenkins'
            ]
        },
        'orm-version-control': {
            title: 'ORM & Version Control',
            icon: <GitBranch />,
            color: '#EC4899',
            technologies: [
                'Mongoose', 'Sequelize', 'TypeORM', 'Prisma', 'Git',
                'GitHub/GitLab', 'SVN', 'Postman', 'Swagger', 'Xdebug',
                'Subversion', 'Mercurial', 'Bitbucket'
            ]
        },
        'mobile-cross': {
            title: 'Mobile & Cross-Platform',
            icon: <Smartphone />,
            color: '#06B6D4',
            technologies: [
                'React Native', 'Flutter', 'Ionic', 'Cordova',
                'Xamarin', 'NativeScript', 'Swift', 'Kotlin'
            ]
        }
    };

    // Development Process
    const developmentProcess = [
        {
            step: 1,
            title: 'Requirement Analysis',
            description: 'Comprehensive analysis of business needs, technical requirements, and user stories for full-stack solution.',
            icon: <FileText />,
            duration: '1-2 weeks'
        },
        {
            step: 2,
            title: 'Architecture Design',
            description: 'Designing scalable full-stack architecture with frontend, backend, database, and deployment strategy.',
            icon: <Workflow />,
            duration: '2-3 weeks'
        },
        {
            step: 3,
            title: 'Frontend Development',
            description: 'Building responsive user interfaces with modern frameworks, focusing on UX and performance.',
            icon: <Monitor />,
            duration: '4-6 weeks'
        },
        {
            step: 4,
            title: 'Backend Development',
            description: 'Developing server-side logic, APIs, database integration, and business logic implementation.',
            icon: <Server />,
            duration: '4-8 weeks'
        },
        {
            step: 5,
            title: 'Integration & Testing',
            description: 'Comprehensive testing including unit, integration, and end-to-end testing across all layers.',
            icon: <TestTube />,
            duration: '2-4 weeks'
        },
        {
            step: 6,
            title: 'Deployment & Maintenance',
            description: 'Cloud deployment with CI/CD, monitoring setup, and ongoing support and maintenance.',
            icon: <Cloud />,
            duration: 'Ongoing'
        }
    ];

    // Benefits of Hiring Full Stack Developers
    const benefits = [
        {
            title: 'Cost-effective Solutions',
            description: 'Single developers handle both frontend and backend, reducing team size and infrastructure costs significantly.',
            icon: <TrendingUp />,
            stats: '40-60% Cost Savings',
            details: ['Reduced hiring costs', 'Lower infrastructure expenses', 'Efficient resource utilization']
        },
        {
            title: 'Faster Development',
            description: 'End-to-end development reduces handoffs and communication gaps, accelerating time-to-market.',
            icon: <Zap />,
            stats: '30-50% Faster Delivery',
            details: ['Reduced handoff time', 'Quick problem solving', 'Streamlined communication']
        },
        {
            title: 'Unified Vision',
            description: 'Consistent architecture and coding patterns across entire application stack ensures maintainability.',
            icon: <Layers />,
            stats: 'Cohesive Development',
            details: ['Consistent codebase', 'Better architecture', 'Easier maintenance']
        },
        {
            title: 'Scalable Architecture',
            description: 'Designed for growth with ability to handle increasing user loads and feature additions seamlessly.',
            icon: <Cloud />,
            stats: 'High Scalability',
            details: ['Modular architecture', 'Easy scaling', 'Future-proof design']
        },
        {
            title: 'Better Communication',
            description: 'Single point of contact for both frontend and backend aspects reduces miscommunication.',
            icon: <Users />,
            stats: 'Improved Collaboration',
            details: ['Reduced meetings', 'Clear accountability', 'Streamlined updates']
        },
        {
            title: 'Versatile Problem Solving',
            description: 'Ability to troubleshoot and fix issues across the entire stack without dependency on specialists.',
            icon: <Target />,
            stats: 'Holistic Solutions',
            details: ['End-to-end debugging', 'Quick issue resolution', 'Comprehensive understanding']
        }
    ];

    // Pricing Plans
    const pricingPlans = [
        {
            title: 'Dedicated Full-Stack Developer',
            price: '$3,500 – $8,000/month',
            description: 'Individual full-stack developers for small to medium projects with end-to-end capabilities.',
            features: [
                '1-2 full-stack developers',
                'Frontend + Backend expertise',
                'Database management',
                'Basic deployment support',
                'Weekly progress reports',
                'Direct communication'
            ],
            color: '#3B82F6',
            bestFor: 'Startups & SMEs',
            timeline: '3-6 months'
        },
        {
            title: 'Full-Stack Development Team',
            price: '$8,000 – $20,000/month',
            description: 'Team of full-stack developers with complementary skills and project management.',
            features: [
                '3-5 team members',
                'Specialized skillsets',
                'Project management included',
                'Full CI/CD pipeline',
                'Daily standups',
                'Quality assurance'
            ],
            color: '#10B981',
            bestFor: 'Growing Businesses',
            timeline: '6-12 months'
        },
        {
            title: 'Enterprise Full-Stack Unit',
            price: '$20,000 – $40,000/month',
            description: 'Complete enterprise-grade development unit for large-scale, complex projects.',
            features: [
                '6-10 professionals',
                'Enterprise architecture',
                'Advanced security measures',
                '24/7 support',
                'Dedicated project manager',
                'SLA-backed delivery'
            ],
            color: '#8B5CF6',
            bestFor: 'Large Enterprises',
            timeline: '12+ months'
        },
        {
            title: 'Custom Full-Stack Solutions',
            price: 'Custom Quote',
            description: 'Tailored full-stack solutions with specific technology requirements and flexible engagement.',
            features: [
                'Custom team size',
                'Specific tech stack',
                'Dedicated PM',
                'Comprehensive SLA',
                'Flexible engagement',
                'Risk-free trial'
            ],
            color: '#F59E0B',
            bestFor: 'Special Projects',
            timeline: 'Flexible'
        }
    ];

    // What Full Stack Developers Build
    const whatWeBuild = [
        {
            title: 'Complete Web Applications',
            description: 'End-to-end web solutions with modern frontends and scalable backends for various industries.',
            icon: <Code2 />,
            examples: ['SaaS platforms', 'E-commerce websites', 'CRM systems', 'Content management systems', 'Learning management systems'],
            color: '#3B82F6',
            technologies: ['React/Next.js', 'Node.js', 'PostgreSQL', 'AWS']
        },
        {
            title: 'Enterprise APIs & Microservices',
            description: 'Robust APIs and microservices architecture for enterprise applications with high availability.',
            icon: <GitBranch />,
            examples: ['RESTful APIs', 'GraphQL endpoints', 'Microservices', 'Third-party integrations', 'Payment gateways'],
            color: '#10B981',
            technologies: ['Node.js/Express', 'GraphQL', 'Docker', 'Kubernetes']
        },
        {
            title: 'Real-time Applications',
            description: 'Applications with live data updates, notifications, and collaborative features for modern users.',
            icon: <Zap />,
            examples: ['Live dashboards', 'Chat applications', 'Collaboration tools', 'Real-time analytics', 'Stock trading platforms'],
            color: '#8B5CF6',
            technologies: ['Socket.io', 'WebSockets', 'Redis', 'React/Vue']
        },
        {
            title: 'Cloud-Native Solutions',
            description: 'Applications designed for cloud deployment with containerization, scalability, and resilience.',
            icon: <Cloud />,
            examples: ['AWS/Azure applications', 'Docker containers', 'Kubernetes clusters', 'Serverless functions', 'Cloud migrations'],
            color: '#F59E0B',
            technologies: ['AWS/Azure/GCP', 'Docker', 'Kubernetes', 'Terraform']
        },
        {
            title: 'Progressive Web Apps',
            description: 'Modern PWAs with offline capabilities, push notifications, and native app-like experience.',
            icon: <Smartphone />,
            examples: ['Offline-first apps', 'Push notifications', 'Home screen installation', 'App-like UX', 'Mobile-first solutions'],
            color: '#EC4899',
            technologies: ['PWA', 'Service Workers', 'Web App Manifest', 'React/Vue']
        },
        {
            title: 'Legacy System Modernization',
            description: 'Upgrading and modernizing outdated systems with current technologies and best practices.',
            icon: <RefreshCw />,
            examples: ['System migrations', 'Tech stack upgrades', 'Database optimization', 'UI modernization', 'Performance tuning'],
            color: '#06B6D4',
            technologies: ['Modern frameworks', 'Cloud migration', 'Database migration', 'API integration']
        }
    ];

    // Code Quality Assurance
    const codeQuality = [
        {
            title: 'Coding Best Practices',
            description: 'Following industry-standard coding practices with comprehensive documentation and clean code principles.',
            icon: <FileCode />,
            points: [
                'Clean code architecture',
                'Comprehensive documentation',
                'Code readability standards',
                'Consistent naming conventions',
                'Code comments and documentation'
            ],
            tools: ['ESLint', 'Prettier', 'JSDoc', 'Architecture Decision Records']
        },
        {
            title: 'Security & Compliance',
            description: 'Proactive security measures, vulnerability assessments, and adherence to industry compliance standards.',
            icon: <Shield />,
            points: [
                'Regular security audits and penetration testing',
                'OWASP Top 10 vulnerability scanning',
                'Secure coding practices and input validation',
                'GDPR, HIPAA, PCI-DSS compliance readiness',
                'Dependency scanning and SBOM generation'
            ],
            tools: ['OWASP ZAP', 'SonarQube', 'Snyk', 'Nessus', 'Burp Suite']
        },

        {
            title: 'Unit & Integration Testing',
            description: 'Test-driven development with comprehensive test coverage and continuous integration.',
            icon: <TestTube />,
            points: [
                'Test-driven development',
                'Automated testing pipelines',
                'Continuous integration',
                'Comprehensive test coverage',
                'End-to-end testing'
            ],
            tools: ['Jest', 'Mocha/Chai', 'Cypress', 'Selenium', 'Jenkins']
        },
        {
            title: 'Code Review Practices',
            description: 'Automated scanning and peer reviews for collaborative improvement and knowledge sharing.',
            icon: <GitPullRequest />,
            points: [
                'Peer code reviews',
                'Automated vulnerability scanning',
                'Knowledge sharing sessions',
                'Pull request guidelines',
                'Security audits'
            ],
            tools: ['GitHub/GitLab PR', 'SonarQube', 'CodeClimate', 'Snyk']
        },
        {
            title: 'Performance & Optimization',
            description: 'End-to-end performance tuning, load testing, and monitoring to ensure fast, scalable applications.',
            icon: <Gauge />,
            points: [
                'Frontend performance optimization (Core Web Vitals)',
                'Database query optimisation and indexing',
                'Caching strategies (Redis, CDN, browser cache)',
                'Load testing and bottleneck analysis',
                'Real‑time application performance monitoring'
            ],
            tools: ['Lighthouse', 'WebPageTest', 'New Relic', 'k6', 'Apache JMeter']
        },
        {
            title: 'Code Quality Metrics',
            description: 'Tracking complexity metrics and technical debt for long-term code health and maintainability.',
            icon: <TrendingUp />,
            points: [
                'Complexity metrics tracking',
                'Technical debt monitoring',
                'Performance benchmarks',
                'Code coverage reports',
                'Security compliance'
            ],
            tools: ['SonarQube', 'CodeClimate', 'Coveralls', 'Lighthouse']
        }
    ];

    // Why Hire from India
    const whyHireIndia = [
        {
            title: 'Cost-effective Talent',
            description: 'Excellent value for money with competitive rates and high-quality output, reducing development costs by 40-60%.',
            icon: '💰',
            benefit: '40-60% Cost Savings',
            details: ['Competitive hourly rates', 'High ROI', 'Reduced overhead costs']
        },
        {
            title: 'Quality Assurance',
            description: 'Rigorous quality processes ensuring high standards in every project with comprehensive testing.',
            icon: '🎯',
            benefit: '98% Quality Score',
            details: ['ISO certified processes', 'QA automation', 'Performance testing']
        },
        {
            title: 'Scalable Teams',
            description: 'Easily scale your team up or down based on project requirements with flexible engagement models.',
            icon: '📈',
            benefit: 'Flexible Scaling',
            details: ['Quick team scaling', 'Multiple engagement models', 'Resource flexibility']
        },
        {
            title: 'Faster Time to Market',
            description: 'Reduced development time through efficient processes, overlapping time zones, and agile methodologies.',
            icon: '⚡',
            benefit: '30-50% Faster Delivery',
            details: ['Agile development', 'Time zone advantage', 'Parallel development']
        },
        {
            title: 'Domain Expertise',
            description: 'Access to specialized knowledge across various industries and cutting-edge technologies.',
            icon: '🎓',
            benefit: 'Industry Expertise',
            details: ['Multiple industry experience', 'Technology specialization', 'Solution architecture']
        },
        {
            title: 'Easy Communication',
            description: 'Time-zone compatibility, excellent English communication skills, and cultural alignment.',
            icon: '💬',
            benefit: 'Seamless Communication',
            details: ['English proficiency', 'Overlapping time zones', 'Cultural compatibility']
        },
        {
            title: 'Strong Technical Education',
            description: 'Access to graduates from premier technical institutes with strong fundamentals in computer science.',
            icon: '🏫',
            benefit: 'Top Technical Talent',
            details: ['IIT/NIT graduates', 'Continuous learning', 'Technical certifications']
        },
        {
            title: 'Proven Track Record',
            description: 'Established history of successful projects for global clients across various industries.',
            icon: '📊',
            benefit: '4500+ Successful Projects',
            details: ['Global client portfolio', 'Industry recognition', 'Client testimonials']
        }
    ];

    // Hiring Models Comparison
    const hiringComparison = [
        {
            model: 'In-House Team',
            timeToHire: '6-12 weeks',
            timeToStart: '4-8 weeks',
            trainingCost: '$15,000-$40,000',
            scalingTime: '6-12 weeks',
            risk: 'Medium-High',
            deliverySupport: 'Limited',
            flexibility: 'Low',
            totalCost: '$100,000+ annually'
        },
        {
            model: 'Freelancers',
            timeToHire: '2-8 weeks',
            timeToStart: '1-6 weeks',
            trainingCost: '$0-$5,000',
            scalingTime: 'Variable',
            risk: 'High',
            deliverySupport: 'Minimal',
            flexibility: 'Medium',
            totalCost: 'Variable, often higher'
        },
        {
            model: 'BBNTech',
            timeToHire: '1-2 weeks',
            timeToStart: '1-2 weeks',
            trainingCost: '$0',
            scalingTime: '48 hours - 1 week',
            risk: 'Extremely Low',
            deliverySupport: 'Full Support',
            flexibility: 'High',
            totalCost: 'Predictable, 40-60% lower'
        }
    ];

    // Company Stats
    const companyStats = [
        { value: '700+', label: 'Full-time Developers', icon: <Users />, description: 'Dedicated development team' },
        { value: '20+', label: 'Years Experience', icon: <Award />, description: 'Industry expertise' },
        { value: '4500+', label: 'Satisfied Clients', icon: <HeadphonesIcon />, description: 'Global client base' },
        { value: '98%', label: 'Project Success Rate', icon: <CheckCircle />, description: 'Successful delivery' },
        { value: '50+', label: 'Industries Served', icon: <Briefcase />, description: 'Domain expertise' },
        { value: '24/7', label: 'Support Available', icon: <Clock />, description: 'Round-the-clock support' }
    ];

    // Industries data (exactly as original)
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

    // FAQs (original simple version)
    const faqs = [
        {
            question: 'What technologies do your full-stack developers specialize in?',
            answer: 'Our developers excel in MEAN/MERN stacks (MongoDB, Express, Angular/React, Node.js), Laravel/PHP, Java Spring Boot, Python Django, React, Vue.js, and various databases including MongoDB, PostgreSQL, MySQL, and Redis. We also have expertise in cloud platforms like AWS, Azure, and Google Cloud, along with DevOps tools like Docker and Kubernetes.'
        },
        {
            question: 'How quickly can I hire full-stack developers?',
            answer: 'We can onboard pre-vetted full-stack developers within 1-2 weeks. Our streamlined hiring process includes matching based on your specific requirements, technical assessment, and trial period. For urgent requirements, we can expedite the process to 3-5 days.'
        },
        {
            question: 'Do you offer a trial period?',
            answer: 'Yes, we offer a 7-day risk-free trial period for all our hiring models. This allows you to evaluate the developer\'s skills, work style, communication, and fit with your team before making a long-term commitment. If unsatisfied, you can request a replacement at no additional cost.'
        },
        {
            question: 'Can your developers work with our existing tech stack?',
            answer: 'Absolutely. Our developers are experienced in working with diverse technology stacks and can seamlessly integrate with your existing systems, codebase, and development workflows. We conduct thorough knowledge transfer sessions to ensure smooth integration.'
        },
        {
            question: 'How do you ensure code quality?',
            answer: 'We follow strict coding standards, conduct regular code reviews, implement comprehensive testing (unit, integration, end-to-end), and use automated tools to maintain high code quality. Our developers follow Test-Driven Development (TDD), maintain high test coverage, and undergo regular code quality audits.'
        },
        {
            question: 'What support do you provide post-launch?',
            answer: 'We provide ongoing maintenance, bug fixes, performance optimization, security updates, and feature enhancements. Our support includes regular updates, proactive monitoring, performance audits, and 24/7 technical support with SLAs based on your requirements.'
        },
        {
            question: 'What is your pricing model?',
            answer: 'We offer flexible pricing models: monthly full-time engagement, part-time contracts, project-based pricing, and dedicated team models. All pricing is transparent with no hidden costs. We also offer custom quotes for specific requirements.'
        },
        {
            question: 'How do you handle communication and project management?',
            answer: 'We use agile methodologies with daily standups, weekly progress reviews, and transparent communication channels. Each project has a dedicated project manager who ensures smooth communication, regular updates, and timely delivery using tools like Jira, Slack, and Zoom.'
        }
    ];

    // Why Choose BBNTech Features
    const whyChooseFeatures = [
        { feature: 'Workstatus™ powered Proof of Work', icon: <CheckCircle /> },
        { feature: 'Top 1% developers, rigorously vetted', icon: <Award /> },
        { feature: 'Dedicated project manager', icon: <Users /> },
        { feature: 'Flexible contracts, transparent pricing', icon: <Scale /> },
        { feature: 'Zero hiring fee, quick onboarding', icon: <Rocket /> },
        { feature: 'Comprehensive code documentation', icon: <FileText /> },
        { feature: 'Adherence to data security practices', icon: <Lock /> },
        { feature: 'Language/time-zone compatible staff', icon: <GlobeIcon /> },
        { feature: '7-day risk-free trial period', icon: <Calendar /> },
        { feature: 'IP Rights & NDA protection', icon: <Shield /> },
        { feature: 'Same-day response guarantee', icon: <Clock /> },
        { feature: 'Strict NDA, 100% confidentiality', icon: <Lock /> }
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
                                <Sparkles size={18} /> Top 1% Full-Stack Developers
                            </div>
                            <h1 className={styles.mainTitle}>
                                Hire Expert <span className={styles.highlight}>Full Stack Developers</span>
                            </h1>
                            <p className={styles.subheadline}>
                                Since 2004, providing full-stack developers who keep your website up-to-date and dynamic
                            </p>
                            <p className={styles.heroDescription}>
                                Hire our expert full-stack developers proficient in MEAN stack, MERN framework, Laravel/PHP,
                                and Java for seamless end-to-end development. Get complete web solutions with frontend and
                                backend expertise in one team.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className={styles.buttonContainer}
                        >
                            <Link href="/contact" className={styles.ctaButton}>
                                Hire Full-Stack Developers
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="#expertise" className={styles.secondaryButton}>
                                View Our Expertise
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Testimonial Card only */}
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
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
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
                                        <div className={styles.ratingText}>Full-Stack Excellence</div>
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
                        Expertise of Our <span className={styles.titleHighlight}>Full-Stack Developers</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Our full-stack software engineers are experts in all stages of software development.
                        Here are some of their core proficiencies for delivering end-to-end solutions.
                    </p>
                </div>

                <div className={styles.expertiseGrid}>
                    {fullStackExpertise.map((expertise, index) => (
                        <motion.div
                            key={expertise.id}
                            className={styles.expertiseCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredExpertise(expertise.id)}
                            onMouseLeave={() => setHoveredExpertise(null)}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.expertiseIconWrapper} style={{
                                    backgroundColor: `${expertise.color}15`,
                                    borderColor: expertise.color
                                }}>
                                    {expertise.icon}
                                </div>
                                <h3 className={styles.expertiseTitle}>{expertise.title}</h3>
                                <p className={styles.expertiseDetail}>{expertise.details}</p>
                            </div>
                            <p className={styles.expertiseDescription}>{expertise.description}</p>
                            <div className={styles.expertiseFeatures}>
                                <h4>Key Features:</h4>
                                <ul className={styles.featuresList}>
                                    {expertise.features.map((feature, idx) => (
                                        <li key={idx} className={styles.featureItem}>
                                            <CheckCircle className={styles.checkIcon} style={{ color: expertise.color }} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link href={`/hire/fullstack/${expertise.id}`} className={styles.learnMoreLink}>
                                Learn More
                                <ChevronRight className={styles.linkIcon} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== TECHNOLOGY STACK - 3x2 GRID, FULL TECHNOLOGIES ===== */}
            <section className={styles.techStackSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Technologies Our <span className={styles.titleHighlight}>Full-Stack Developers Excel In</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Our top full-stack developers work with various technologies for effective end-to-end development,
                        from frontend to backend and everything in between.
                    </p>
                </div>

                <div className={styles.techGridContainer}>
                    {Object.entries(technologyStack).map(([key, category]) => (
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

            {/* ===== WHY HIRE FROM INDIA SECTION ===== */}
            <section className={styles.benefitsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Why Hire Full Stack Developers <span className={styles.titleHighlight}>From India?</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Hiring full-stack software engineers is the need of the hour for businesses of all sizes.
                        Let's look at why you should hire full-stack programmers from India.
                    </p>
                </div>

                <div className={styles.benefitsGrid}>
                    {whyHireIndia.map((benefit, index) => (
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

            {/* ===== DEVELOPMENT PROCESS ===== */}
            <section className={styles.processSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Full Stack Development <span className={styles.titleHighlight}>Process</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        A structured approach to delivering high-quality full-stack solutions that exceed expectations
                        across frontend, backend, and deployment stages.
                    </p>
                </div>

                <div className={styles.processTimeline}>
                    {developmentProcess.map((step, index) => (
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

            {/* ===== CODE QUALITY SECTION ===== */}
            <section className={styles.qualitySection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        How We Ensure <span className={styles.titleHighlight}>Code Quality</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        At the core of our development process, we prioritize code quality, implementing stringent testing,
                        detailed reviews, and industry-best practices to deliver software that excels in both functionality and longevity.
                    </p>
                </div>

                <div className={styles.qualityGrid}>
                    {codeQuality.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.qualityCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.qualityHeader}>
                                <div className={styles.qualityIcon} style={{ color: technologyStack['database-languages'].color }}>
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                            </div>
                            <p className={styles.qualityDescription}>{item.description}</p>
                            <ul className={styles.qualityPoints}>
                                {item.points.map((point, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={16} style={{ color: technologyStack['database-languages'].color }} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.qualityTools}>
                                <strong>Tools Used:</strong>
                                <div className={styles.toolTags}>
                                    {item.tools.map((tool, idx) => (
                                        <span key={idx} className={styles.toolTag}>{tool}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== WHAT WE BUILD SECTION ===== */}
            <section className={styles.buildSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        What Full Stack Experts <span className={styles.titleHighlight}>Can Build</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        From simple websites to complex enterprise systems, we deliver complete web solutions
                        that drive business growth and user engagement.
                    </p>
                </div>

                <div className={styles.buildGrid}>
                    {whatWeBuild.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.buildCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.buildHeader}>
                                <div className={styles.buildIcon} style={{ color: project.color }}>
                                    {project.icon}
                                </div>
                                <h3>{project.title}</h3>
                            </div>
                            <p className={styles.buildDescription}>{project.description}</p>
                            <div className={styles.buildExamples}>
                                <strong>Examples:</strong>
                                <ul>
                                    {project.examples.map((example, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={14} style={{ color: project.color }} />
                                            <span>{example}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.buildTechnologies}>
                                <strong>Technologies:</strong>
                                <div className={styles.techTags}>
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className={styles.techTag}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== BENEFITS OF FULL STACK ===== */}
            <section className={styles.valueSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Benefits of Full Stack <span className={styles.titleHighlight}>Development</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Discover the advantages of working with full-stack developers who can handle
                        your entire project from concept to deployment.
                    </p>
                </div>

                <div className={styles.valueGrid}>
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className={styles.valueCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.valueIcon} style={{ background: `linear-gradient(135deg, ${technologyStack['database-languages'].color}, ${technologyStack['ui-toolkits'].color})` }}>
                                {benefit.icon}
                            </div>
                            <h3>{benefit.title}</h3>
                            <p className={styles.valueDescription}>{benefit.description}</p>
                            <div className={styles.valueStat}>{benefit.stats}</div>
                            <div className={styles.valueDetails}>
                                {benefit.details.map((detail, idx) => (
                                    <div key={idx} className={styles.valueDetailItem}>
                                        <CheckCircle size={14} />
                                        <span>{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== PRICING SECTION ===== */}
            <section className={styles.pricingSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Cost of Hiring <span className={styles.titleHighlight}>Full-Stack Teams</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Flexible pricing models based on your project requirements, team size, and duration.
                        Choose the plan that best fits your development needs.
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

            {/* ===== WHY CHOOSE BBNTECH SECTION ===== */}
            <section className={styles.whyChooseSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Why Hire Full Stack Developers <span className={styles.titleHighlight}>From BBNTech?</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Hiring full-stack developers with BBNTech is easy and transparent.
                        We follow well-defined processes on all our engagements for peace of mind.
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
                            <div className={styles.whyChooseIcon} style={{ color: technologyStack['database-languages'].color }}>
                                {item.icon}
                            </div>
                            <span>{item.feature}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== HIRING COMPARISON SECTION ===== */}
            <section className={styles.comparisonSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Comparative Analysis: <span className={styles.titleHighlight}>In-House, Freelancers, or BBNTech</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We offer a dedicated team of highly skilled full-stack developers. Here is a quick comparison
                        between different hiring options for your development needs.
                    </p>
                </div>

                <div className={styles.comparisonTableWrapper}>
                    <div className={styles.comparisonTable}>
                        <div className={styles.tableHeader}>
                            <div className={styles.headerCell}>Factor</div>
                            {hiringComparison.map((model, idx) => (
                                <div key={idx} className={styles.headerCell}>
                                    {model.model}
                                    {model.model === 'BBNTech' && (
                                        <div className={styles.bestChoiceBadge}>Best Choice</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {['timeToHire', 'timeToStart', 'trainingCost', 'scalingTime', 'risk', 'deliverySupport', 'flexibility', 'totalCost'].map((factor, idx) => (
                            <div key={idx} className={styles.tableRow}>
                                <div className={styles.rowHeader}>
                                    {factor === 'timeToHire' && 'Time to get right developers'}
                                    {factor === 'timeToStart' && 'Time to start a project'}
                                    {factor === 'trainingCost' && 'Recurring cost of training'}
                                    {factor === 'scalingTime' && 'Time to scale size of the team'}
                                    {factor === 'risk' && 'Project failure risk'}
                                    {factor === 'deliverySupport' && 'Developers backed by delivery team'}
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

            {/* ===== INDUSTRIES SECTION (EXACTLY AS ORIGINAL) ===== */}
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

            {/* ===== FAQ SECTION (ORIGINAL SIMPLE DESIGN) ===== */}
            <section className={styles.faqSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Frequently Asked <span className={styles.titleHighlight}>Questions</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Get answers to common questions about hiring full-stack developers from BBNTech.
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
                        <h3 className={styles.ctaTitle}>Ready to Build Your Full-Stack Solution?</h3>
                        <p className={styles.ctaDescription}>
                            Hire full-stack developers who create complete, scalable applications that transform
                            your business processes and drive growth across all platforms.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Hire Full-Stack Developers Now
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="/pricing" className={styles.ctaSecondary}>
                                View Pricing Plans
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