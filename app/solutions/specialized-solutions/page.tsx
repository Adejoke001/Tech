'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SVGProps } from 'react';
import {
    Smartphone, Code, Zap, Users, TrendingUp, 
    CheckCircle, Award, MessageSquare, Sparkles, 
    Cloud, ChevronRight, HelpCircle, ArrowRight, 
    FileText, RefreshCw, Workflow, Server, Layers, Code2, Monitor,
    Shield, TestTube, Database, Globe, Lock, Clock, Target,
    Rocket, Wallet, Scale, Briefcase, Lightbulb, Compass,
    Palette, Search, Presentation, HeartHandshake, Gauge,
    AlertTriangle, Building2, Zap as ZapIcon, Repeat,
    Cpu as CpuChip, Brain, Sliders, Box, ShoppingCart,
    Headphones, PenTool, Figma, Megaphone, Plug, Key, Radio,  
    FileJson, Braces, Lock as LockIcon, PlugZap, BadgeCheck, Store,
    Settings as SettingsIcon, Briefcase as BriefcaseBusiness, 
    Shield as ShieldIcon2, Repeat as RepeatIcon, Fingerprint, Bot,
    Radio as RadioIcon, Handshake, Package, UsersRound, Microchip, Scan
} from 'lucide-react';
import styles from './specialized.module.css';

export default function SpecializedSolutionsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [activePillar, setActivePillar] = useState<string>('isv');

    // ----- HERO TESTIMONIAL -----
    const testimonial = {
        name: 'Samantha',
        role: 'CTO, TechFlow Innovations',
        content: 'A seamless experience from start to finish. Their attention to detail is unmatched! From ISV product strategy to white label delivery and API integration – they handled it all.',
        rating: 5,
        project: 'Enterprise Platform Transformation'
    };

    const Wordpress = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 3h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    <path d="M8 9h8" />
    <path d="M8 13h4" />
  </svg>
);

const Factory = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M17 18h1" />
    <path d="M12 18h1" />
    <path d="M7 18h1" />
  </svg>
);

const BoxIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="M3.3 7 12 12l8.7-5" />
    <path d="M12 22V12" />
  </svg>
);


    // ============ ISV & PRODUCT DEVELOPMENT PILLAR ============
    const isvExpertise = [
        {
            id: 1,
            title: 'AR/VR Based Apps',
            description: 'Elevate user experience with interactive UI driven by Machine Learning and cloud computing.',
            icon: <BoxIcon />,
            color: '#3B82F6',
            features: [
                'Real estate and navigation apps',
                'Interior design experiences with VR',
                'AR/VR-based publishing apps'
            ]
        },
        {
            id: 2,
            title: 'On-Demand Applications',
            description: 'Custom UI, robust admin dashboards, and powerful analytics for modern on-demand platforms.',
            icon: <ZapIcon />,
            color: '#10B981',
            features: [
                'Music & live video streaming',
                'Video conferencing for remote work',
                'Taxi booking & listing apps'
            ]
        },
        {
            id: 3,
            title: 'ML Based Apps',
            description: 'Enhance user experiences through Machine Learning – manage data, streamline operations, boost productivity.',
            icon: <Brain />,
            color: '#8B5CF6',
            features: [
                'Data cleaning & storage management',
                'HR & accounts productivity apps',
                'Predictive analytics'
            ]
        },
        {
            id: 4,
            title: 'Enterprise Grade Solutions',
            description: 'Expert solutions designed for digital product companies, ISVs, and large enterprises.',
            icon: <Building2 />,
            color: '#F59E0B',
            features: [
                'CRM & brand management apps',
                'Secure payment gateways',
                'Event & HR process management'
            ]
        },
        {
            id: 5,
            title: 'ERP Based Solutions',
            description: 'Convenient service and support through ERP-based applications for data, budget, and workflow.',
            icon: <Database />,
            color: '#EC4899',
            features: [
                'Data & budget management',
                'Vehicle fleet tracking & invoicing',
                'Transportation workflow automation'
            ]
        },
        {
            id: 6,
            title: 'AI-Powered Chatbots',
            description: 'Intelligent chatbots that improve customer interactions over time, across web and social platforms.',
            icon: <MessageSquare />,
            color: '#06B6D4',
            features: [
                'Web chatbots for customer service',
                'Facebook Messenger service bots',
                'Employee support automation'
            ]
        }
    ];

    const isvServices = [
        {
            title: 'Product Consulting',
            description: 'Strategic guidance for product development and adaptation to evolving market demands.',
            icon: <Compass />,
            color: '#3B82F6',
            points: ['Comprehensive product roadmap', 'Configuration & customisation', 'Expert guidance']
        },
        {
            title: 'Product Enhancement & Support',
            description: 'Elevate product competitiveness and quality with the latest tools and technologies.',
            icon: <TrendingUp />,
            color: '#10B981',
            points: ['Incorporate latest tech', 'High-quality performance', 'Continuous improvement']
        },
        {
            title: 'Product Development',
            description: 'Scalable, modern product solutions for a competitive edge – with AI/ML integration.',
            icon: <Code2 />,
            color: '#8B5CF6',
            points: ['Expertise & modern tech', 'AI/ML integration', 'Innovative solutions']
        },
        {
            title: 'Product Testing',
            description: 'Top-notch product quality and performance, tailored to project needs and industry standards.',
            icon: <TestTube />,
            color: '#F59E0B',
            points: ['High-quality assurance', 'Multiple testing types', 'Tailored solutions']
        },
        {
            title: 'Product UI/UX Design',
            description: 'Intuitive, user-centered designs that enhance engagement, adoption, and satisfaction.',
            icon: <Figma />,
            color: '#EC4899',
            points: ['Visually compelling experiences', 'UI/UX best practices', 'Improved usability']
        },
        {
            title: 'Digital Marketing',
            description: 'Result-driven digital growth strategies – SEO, lead generation, and content positioning.',
            icon: <Megaphone />,
            color: '#06B6D4',
            points: ['SEO & performance campaigns', 'B2B lead generation for SaaS', 'Content marketing']
        }
    ];

    const isvProcess = [
        { step: 1, title: 'Idea & Planning', description: 'Validate concepts, define scope, and align with business goals.', icon: <Lightbulb />, color: '#3B82F6' },
        { step: 2, title: 'Requirements Analysis', description: 'Deep dive into functional and technical specifications.', icon: <FileText />, color: '#10B981' },
        { step: 3, title: 'Design', description: 'Architecture, UI/UX, and system design for scalability.', icon: <PenTool />, color: '#8B5CF6' },
        { step: 4, title: 'Development', description: 'Agile sprints with modern stacks and continuous integration.', icon: <Code2 />, color: '#F59E0B' },
        { step: 5, title: 'Testing & QA', description: 'Comprehensive validation – functional, performance, security.', icon: <TestTube />, color: '#EC4899' },
        { step: 6, title: 'Deployment & Support', description: 'Release, monitor, and continuously improve.', icon: <Cloud />, color: '#06B6D4' }
    ];

    // ----- Integrating Modern Software with Legacy Systems: Challenges -----
    const legacyChallenges = [
        {
            title: 'Compatibility Issues',
            description: 'Modern software solutions may not be inherently compatible with older legacy systems. Legacy systems often lack necessary interfaces and protocols for seamless integration.',
            icon: <AlertTriangle />,
            color: '#EF4444',
            points: ['Protocol mismatches', 'Outdated infrastructure', 'Vendor lock-in']
        },
        {
            title: 'Data Silos & Inefficiencies',
            description: 'Inadequate integration can lead to data silos, where information is trapped in separate systems, resulting in operational inefficiencies, data redundancy, and decision-making difficulties.',
            icon: <Database />,
            color: '#F59E0B',
            points: ['Fragmented data', 'Manual reconciliation', 'Delayed insights']
        }
    ];

    const integrationSolutions = [
        { text: 'Middleware Solutions – Bridge between new apps and legacy systems', icon: <Workflow />, color: '#3B82F6' },
        { text: 'API Development – Well-defined interfaces for data exchange', icon: <Plug />, color: '#10B981' },
        { text: 'Data Migration Tools – Secure, efficient data transfer', icon: <Database />, color: '#8B5CF6' }
    ];

    // ----- Security Best Practices -----
    const securityPractices = [
        { text: 'Encryption – Robust methods to protect data at rest and in transit', icon: <Lock />, color: '#3B82F6' },
        { text: 'Regular Audits – Frequent security audits to identify and rectify vulnerabilities', icon: <Search />, color: '#10B981' },
        { text: 'Multi‑factor Authentication – Extra layers of security for user access', icon: <Fingerprint />, color: '#8B5CF6' }
    ];

    // ----- Software Compatibility Solutions -----
    const compatibilitySolutions = [
        { text: 'Responsive Design – Adapt to various screen sizes and resolutions', icon: <Monitor />, color: '#3B82F6' },
        { text: 'Cross‑Platform Development Tools – React Native, Flutter', icon: <Smartphone />, color: '#10B981' },
        { text: 'Regular Testing – Comprehensive testing across devices and OS', icon: <TestTube />, color: '#8B5CF6' }
    ];

    // ----- Agile Methodologies Benefits -----
    const agileBenefits = [
        { text: 'Adaptability – Respond quickly to changing requirements', icon: <RefreshCw />, color: '#3B82F6' },
        { text: 'Faster Time‑to‑Market – Incremental development, regular delivery', icon: <Rocket />, color: '#10B981' },
        { text: 'Customer‑Centricity – Frequent customer interactions', icon: <HeartHandshake />, color: '#8B5CF6' },
        { text: 'Team Collaboration – Cross‑functional teamwork, transparency', icon: <Users />, color: '#F59E0B' }
    ];

    // ----- Expanded Advanced Technologies (12 items) -----
    const isvAdvancedTech = [
        { text: 'AI/ML – Predictive features, chatbots, analytics', icon: <Brain />, color: '#3B82F6' },
        { text: 'Big Data – Real-time processing, trend analysis', icon: <Database />, color: '#10B981' },
        { text: 'IoT – Sensor data, predictive maintenance', icon: <Radio />, color: '#8B5CF6' },
        { text: 'Blockchain – Data integrity, secure transactions', icon: <Lock />, color: '#F59E0B' },
        { text: 'AR/VR – Immersive experiences, training', icon: <Box />, color: '#EC4899' },
        { text: 'RPA – Automate repetitive tasks', icon: <Repeat />, color: '#06B6D4' },
        { text: 'Edge Computing – Real-time at the edge', icon: <CpuChip />, color: '#3B82F6' },
        { text: 'NLP – Sentiment analysis, chatbots', icon: <MessageSquare />, color: '#10B981' },
        { text: 'Biometrics – Facial recognition, security', icon: <Scan />, color: '#8B5CF6' },
        { text: 'Robotics – Control and manage physical devices', icon: <Bot />, color: '#F59E0B' },
        { text: '5G – High-speed, low-latency communication', icon: <RadioIcon />, color: '#EC4899' },
        { text: 'Quantum Computing – Advanced computational capabilities', icon: <Microchip />, color: '#06B6D4' }
    ];

    // ============ WHITE LABEL SERVICES PILLAR ============
    const whiteLabelAudiences = [
        { title: 'Product Companies', description: 'Seamlessly plug into your projects with agile development – we adapt to your branding and workflow.', icon: <Building2 />, color: '#3B82F6' },
        { title: 'Digital Agencies', description: 'Deliver turnkey projects on time and within budget. Specialised talent in AdTech, EdTech, and online video.', icon: <Store />, color: '#10B981' },
        { title: 'Technological Evangelists', description: 'Spread the word on game-changing technology. Together, we shape sustainable futures.', icon: <Rocket />, color: '#8B5CF6' }
    ];

    const whiteLabelServices = [
        { title: 'Frontend Development', description: 'Full control over look and feel – we use your tools and frameworks.', icon: <Monitor />, color: '#3B82F6' },
        { title: 'CMS Development', description: 'WordPress, headless CMS – you manage content effortlessly.', icon: <FileText />, color: '#10B981' },
        { title: 'Custom Software', description: 'Tailored applications for your unique business needs.', icon: <Code2 />, color: '#8B5CF6' },
        { title: 'Web App Development', description: 'From concept to deployment – responsive, scalable web apps.', icon: <Globe />, color: '#F59E0B' },
        { title: 'Mobile App Development', description: 'Native or cross-platform – we build and rebrand.', icon: <Smartphone />, color: '#EC4899' },
        { title: 'WordPress Development', description: 'Custom themes, plugins, and fully functional sites.', icon: <Wordpress />, color: '#06B6D4' },
        { title: 'eCommerce Development', description: 'Robust online stores, payment gateways, inventory.', icon: <ShoppingCart />, color: '#3B82F6' },
        { title: 'Staff Augmentation', description: 'Your dedicated team – without the overhead.', icon: <Users />, color: '#10B981' }
    ];

    // ----- Benefits of White Label Services (detailed) -----
    const whiteLabelBenefitsDetailed = [
        {
            title: 'Increased Product Range',
            description: 'Quickly increase your range of products without spending time in R&D or manufacturing new ones yourself.',
            icon: <Package />,
            color: '#3B82F6'
        },
        {
            title: 'Streamlined Brand Management',
            description: 'Better control over your brand image, marketing strategies, and customer service standards.',
            icon: <Palette />,
            color: '#10B981'
        },
        {
            title: 'Cost Savings',
            description: 'Significant savings on labor costs with outsourced production – ideal for small business owners.',
            icon: <Wallet />,
            color: '#8B5CF6'
        },
        {
            title: 'Reduced Risk & Improved QA',
            description: 'No additional CAPEX/OPEX; partner warranties cover workmanship and materials.',
            icon: <Shield />,
            color: '#F59E0B'
        },
        {
            title: 'Scalability & Flexibility',
            description: 'Access specialised skills when needed – especially useful for seasonal demand surges.',
            icon: <Scale />,
            color: '#EC4899'
        },
        {
            title: 'Competitive Edge',
            description: 'Flexible responses to market changes, helping retain a competitive edge.',
            icon: <Target />,
            color: '#06B6D4'
        }
    ];

    // ----- Types of White Label Partnerships -----
    const whiteLabelPartnerships = [
        {
            title: 'Private Labeling',
            description: 'Partner creates branded products with customised content, features, and packaging using your technology platform.',
            icon: <Briefcase />,
            color: '#3B82F6'
        },
        {
            title: 'Reseller Partnerships',
            description: 'Sell existing products under your own brand – ideal for agencies expanding service offerings.',
            icon: <UsersRound />,
            color: '#10B981'
        },
        {
            title: 'Technology Partnerships',
            description: 'Integrate and co‑develop platforms with shared IP and go‑to‑market strategies.',
            icon: <Handshake />,
            color: '#8B5CF6'
        }
    ];

    const whiteLabelBenefits = [
        { title: 'Easy Communication', description: 'Chat with our PM team anytime – even weekends. 24/7 availability.', icon: <MessageSquare />, color: '#3B82F6' },
        { title: 'Transparent & Affordable', description: 'Competitive rates, stage-wise progress updates, no hidden costs.', icon: <Wallet />, color: '#10B981' },
        { title: 'Robust Market Research', description: 'Data analysis, consultation – we help you decide.', icon: <Search />, color: '#8B5CF6' },
        { title: 'Flexible Workflow', description: 'Adapt to your process – same PM and developers throughout.', icon: <Workflow />, color: '#F59E0B' },
        { title: 'Pre-sales Assistance', description: 'FREE support for tenders, proposals, RFP, RFI.', icon: <Presentation />, color: '#EC4899' },
        { title: 'Scalable Solutions', description: 'Dynamic resource pool to meet your changing needs.', icon: <Scale />, color: '#06B6D4' }
    ];

    // ============ API DEVELOPMENT PILLAR ============
    const apiExpertise = [
        {
            title: 'API Consulting',
            description: 'Strategic technology guidance for robust and scalable API architecture.',
            icon: <Compass />,
            color: '#3B82F6',
            features: ['Technology stack analysis', 'Architecture recommendation', 'Strategic roadmap']
        },
        {
            title: 'API Design & Implementation',
            description: 'Cutting-edge API solutions tailored to complex business requirements.',
            icon: <FileJson />,
            color: '#10B981',
            features: ['Custom API architecture', 'Performance-driven design', 'Scalable integration patterns']
        },
        {
            title: 'API Security Testing',
            description: 'Comprehensive security validation for critical API infrastructure.',
            icon: <ShieldIcon2 />,
            color: '#8B5CF6',
            features: ['Penetration testing', 'Vulnerability assessment', 'Compliance validation']
        },
        {
            title: 'API Integration',
            description: 'Seamless connectivity bridging diverse software systems.',
            icon: <PlugZap />,
            color: '#F59E0B',
            features: ['Smooth system connections', 'Protocol standardisation', 'Interoperability design']
        },
        {
            title: 'API Automation',
            description: 'Advanced automation for complex API workflows and deployment.',
            icon: <RepeatIcon />,
            color: '#EC4899',
            features: ['CI/CD pipelines', 'Automated testing frameworks', 'Deployment acceleration']
        },
        {
            title: 'API Management',
            description: 'Intelligent governance for optimal performance and lifecycle management.',
            icon: <Sliders />,
            color: '#06B6D4',
            features: ['Centralised control', 'Performance monitoring', 'Governance framework']
        },
        {
            title: 'API Configuration',
            description: 'Precision tuning for optimised, customisable API ecosystems.',
            icon: <SettingsIcon />,
            color: '#3B82F6',
            features: ['Environment-specific tuning', 'Parameter optimisation', 'Flexible configuration']
        },
        {
            title: 'API Support & Maintenance',
            description: 'Dedicated technical support for continuous reliability and peak performance.',
            icon: <Headphones />,
            color: '#10B981',
            features: ['Smooth deployment', 'Proactive issue resolution', 'Continuous improvement']
        }
    ];

    const apiBusinessUseCases = [
        { function: 'Product & Engineering', desc: 'Backend API layers, platform extensibility', icon: <Code2 />, color: '#3B82F6' },
        { function: 'Operations', desc: 'Workflow automation, data synchronisation', icon: <Workflow />, color: '#10B981' },
        { function: 'IT & Infrastructure', desc: 'Legacy integration, microservices enablement', icon: <Server />, color: '#8B5CF6' },
        { function: 'Healthcare', desc: 'Patient data integration, secure API access', icon: <HeartHandshake />, color: '#F59E0B' },
        { function: 'Retail & E-commerce', desc: 'Inventory, order, payment, logistics APIs', icon: <ShoppingCart />, color: '#EC4899' },
        { function: 'Manufacturing', desc: 'ERP integration, plant data exchange', icon: <Factory />, color: '#06B6D4' },
        { function: 'Enterprises & SaaS', desc: 'Public/private APIs, multi-tenant platforms', icon: <Building2 />, color: '#3B82F6' }
    ];

    const apiProtocols = [
        { name: 'REST', icon: <Braces />, color: '#3B82F6' },
        { name: 'GraphQL', icon: <FileJson />, color: '#10B981' },
        { name: 'Event-driven APIs', icon: <Radio />, color: '#8B5CF6' },
        { name: 'OAuth 2.0 / JWT', icon: <Key />, color: '#F59E0B' },
        { name: 'Role-based Access', icon: <LockIcon />, color: '#EC4899' },
        { name: 'Compliance-ready', icon: <BadgeCheck />, color: '#06B6D4' }
    ];

    const apiProcess = [
        { step: 1, title: 'Discovery & Planning', description: 'Define API goals, consumers, and success metrics.', icon: <Search />, color: '#3B82F6' },
        { step: 2, title: 'Architecture & Design', description: 'Design contracts, data models, and security layers.', icon: <PenTool />, color: '#10B981' },
        { step: 3, title: 'Development & Integration', description: 'Build and integrate APIs across systems.', icon: <Code2 />, color: '#8B5CF6' },
        { step: 4, title: 'Testing & Deployment', description: 'Validate performance, security, and reliability.', icon: <TestTube />, color: '#F59E0B' },
        { step: 5, title: 'Optimization & Support', description: 'Continuous monitoring, enhancement, and scaling.', icon: <Gauge />, color: '#EC4899' }
    ];

    // ----- Latest Trends in API Development -----
    const apiTrends = [
        { text: 'Microservices Architecture – Modular, independently scalable services', icon: <Layers />, color: '#3B82F6' },
        { text: 'Serverless Computing – Event-driven, auto-scaling, reduced ops', icon: <Cloud />, color: '#10B981' },
        { text: 'AI/ML Integration – Pre-trained models, intelligent data processing', icon: <Brain />, color: '#8B5CF6' },
        { text: 'Event-Driven Designs – Real-time, asynchronous communication', icon: <Radio />, color: '#F59E0B' },
        { text: 'Low-Code Development – Pre-built integrations, rapid prototyping', icon: <Zap />, color: '#EC4899' }
    ];

    // ----- Considerations for Choosing an API Development Company -----
    const apiConsiderations = [
        { title: 'Technical Expertise', description: 'Relevant technology experience, programming languages, frameworks.', icon: <Code />, color: '#3B82F6' },
        { title: 'Performance Capabilities', description: 'Scalability track record, load handling, optimisation skills.', icon: <Gauge />, color: '#10B981' },
        { title: 'Security Standards', description: 'Authentication, encryption, compliance, certifications.', icon: <Shield />, color: '#8B5CF6' },
        { title: 'Support Quality', description: 'Documentation, response time, issue resolution process.', icon: <Headphones />, color: '#F59E0B' },
        { title: 'Integration Expertise', description: 'System compatibility, third-party integration, future-proofing.', icon: <Plug />, color: '#EC4899' },
        { title: 'Cost Considerations', description: 'Pricing transparency, maintenance costs, scaling fees.', icon: <Wallet />, color: '#06B6D4' },
        { title: 'References & Reviews', description: 'Client testimonials, case studies, industry reputation.', icon: <Award />, color: '#3B82F6' }
    ];

    // ============ CLIENT TESTIMONIALS ============
    const testimonials = [
        {
            name: 'James Kelly',
            role: 'Co-founder, Miracle Choice',
            content: 'The Project managers took a lot of time to understand our project before coming up with a contract or what they thought we needed. I had the reassurance from the start that the project managers knew what type of project I wanted and what my needs were.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        },
        {
            name: 'Samantha',
            role: 'CTO, TechFlow Innovations',
            content: 'A seamless experience from start to finish. Their attention to detail is unmatched! From ISV product strategy to white label delivery and API integration – they handled it all.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
        },
        {
            name: 'Kris Bruynson',
            role: 'Director, Storloft',
            content: 'ValueCoders had great technical expertise, both in front-end and back-end development. Other project management was well organized. Account management was friendly and always available. I would give ValueCoders ten out of ten!',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        },
        {
            name: 'Judith Mueller',
            role: 'Executive Director, Mueller Health Foundation',
            content: 'The team at ValueCoders has provided us with exceptional services in creating this one-of-a-kind portal, and it has been a fantastic experience. I was particularly impressed by how efficiently and quickly the team always came up with creative solutions.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face'
        }
    ];

    // ============ INDUSTRIES ============
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

    // ============ FAQS ============
    const faqs = [
        {
            question: 'What is the difference between ISV product development and white label services?',
            answer: 'ISV (Independent Software Vendor) development focuses on building your own software product from the ground up – you own the IP, roadmap, and go-to-market. White label services are for agencies and consultancies: we build software that you rebrand and resell as your own. Both are complementary and we excel at both.'
        },
        {
            question: 'How do you ensure API security and compliance?',
            answer: 'We follow OWASP standards, implement OAuth 2.0/JWT, conduct regular penetration testing, and ensure compliance with GDPR, HIPAA, and PCI-DSS as required. Our APIs are built with security at every layer.'
        },
        {
            question: 'Can you white label an existing product we already have?',
            answer: 'Absolutely. We can take your existing codebase, refactor it if needed, and prepare it for white labelling – including custom theming, multi-tenant architecture, and partner portals.'
        },
        {
            question: 'What advanced technologies do you use for ISV products?',
            answer: 'We specialise in AI/ML, AR/VR, IoT, Blockchain, RPA, Edge Computing, Biometrics, Robotics, 5G, and Quantum Computing. Our team has 4+ years average experience in these domains and has delivered 50+ successful ISV products.'
        },
        {
            question: 'How quickly can you scale a white label team?',
            answer: 'We can onboard dedicated white label developers within 48 hours. Our flexible staffing model allows you to scale from 1 to 50+ engineers as your client base grows.'
        },
        {
            question: 'Do you provide API documentation and post-launch support?',
            answer: 'Yes. Every API project includes comprehensive OpenAPI/Swagger documentation, Postman collections, and 6 months of dedicated support. Extended maintenance plans are available.'
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
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
                                <Sparkles size={18} /> Specialized Solutions
                            </div>
                            <h1 className={styles.mainTitle}>
                                ISV, White Label & <span className={styles.highlight}>API Development</span>
                            </h1>
                            <p className={styles.subheadline}>
                                Three specialized pillars. One trusted partner. From product strategy to white label delivery and API integration – we accelerate your entire software ecosystem.
                            </p>
                            <p className={styles.heroDescription}>
                                Whether you&apos;re an ISV building the next generation of AI-powered applications, a digital agency scaling through white label partnerships, or an enterprise modernising with APIs – we provide the expertise, speed, and quality you need.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className={styles.buttonContainer}
                        >
                            <Link href="/contact" className={styles.ctaButton}>
                                Discuss Your Project
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="#pillars" className={styles.secondaryButton}>
                                Explore Solutions
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
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
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
                                        <div className={styles.ratingText}>End-to-End Excellence</div>
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

            {/* ===== PILLAR NAVIGATION ===== */}
            <section className={styles.pillarNavSection} id="pillars">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Three Pillars of <span className={styles.titleHighlight}>Specialized Solutions</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Choose the engagement model that fits your business – or combine all three for a complete software ecosystem.
                    </p>
                </div>

                <div className={styles.pillarTabs}>
                    <button 
                        className={`${styles.pillarTab} ${activePillar === 'isv' ? styles.active : ''}`}
                        onClick={() => setActivePillar('isv')}
                    >
                        <Building2 className={styles.pillarIcon} />
                        <span>ISV & Product Development</span>
                    </button>
                    <button 
                        className={`${styles.pillarTab} ${activePillar === 'white-label' ? styles.active : ''}`}
                        onClick={() => setActivePillar('white-label')}
                    >
                        <BriefcaseBusiness className={styles.pillarIcon} />
                        <span>White Label Services</span>
                    </button>
                    <button 
                        className={`${styles.pillarTab} ${activePillar === 'api' ? styles.active : ''}`}
                        onClick={() => setActivePillar('api')}
                    >
                        <Plug className={styles.pillarIcon} />
                        <span>API Development</span>
                    </button>
                </div>
            </section>

            {/* ===== PILLAR 1: ISV & PRODUCT DEVELOPMENT ===== */}
            {activePillar === 'isv' && (
                <>
                    {/* ISV Expertise Cards */}
                    <section className={styles.pillarSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                ISV & Product <span className={styles.titleHighlight}>Development Solutions</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                Through our collaborative approach, we ensure not only to meet your needs but also to exceed your expectations with innovative, customer-centric solutions.
                            </p>
                        </div>

                        <div className={styles.expertiseGrid}>
                            {isvExpertise.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    className={styles.expertiseCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -6 }}
                                >
                                    <div className={styles.expertiseGlass} style={{ borderTopColor: item.color }}>
                                        <div className={styles.expertiseIconWrapper} style={{ color: item.color }}>
                                            {item.icon}
                                        </div>
                                        <h3 className={styles.expertiseTitle}>{item.title}</h3>
                                        <p className={styles.expertiseDescription}>{item.description}</p>
                                        <div className={styles.expertiseFeatures}>
                                            <h4>Key applications</h4>
                                            <ul className={styles.featuresList}>
                                                {item.features.map((feature, idx) => (
                                                    <li key={idx} className={styles.featureItem}>
                                                        <CheckCircle size={14} style={{ color: item.color }} />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* ISV Services */}
                    <section className={styles.servicesSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                End-to-End <span className={styles.titleHighlight}>ISV Services</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                Our team of talented ISV and product development experts have an average of 4+ years of experience in building software solutions based on specific client needs.
                            </p>
                        </div>

                        <div className={styles.servicesGrid}>
                            {isvServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.serviceCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -4 }}
                                >
                                    <div className={styles.serviceIcon} style={{ color: service.color }}>
                                        {service.icon}
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p className={styles.serviceDescription}>{service.description}</p>
                                    <div className={styles.servicePoints}>
                                        {service.points.map((point, idx) => (
                                            <span key={idx} className={styles.servicePoint}>• {point}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* ISV Process */}
                    <section className={styles.processSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                Software Development <span className={styles.titleHighlight}>Process for ISVs</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                A structured, agile approach from idea to deployment and beyond.
                            </p>
                        </div>

                        <div className={styles.processGrid}>
                            {isvProcess.map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    className={styles.processCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.processNumber} style={{ color: `${step.color}20` }}>0{step.step}</div>
                                    <div className={styles.processIcon} style={{ backgroundColor: step.color }}>
                                        {step.icon}
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Integrating Modern Software with Legacy Systems */}
                    <section className={styles.dualGridSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                Integrating Modern Software <span className={styles.titleHighlight}>with Legacy Systems</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                Challenges and proven solutions for seamless integration.
                            </p>
                        </div>

                        <div className={styles.dualGrid}>
                            <div className={styles.gridCol}>
                                <h3 className={styles.colTitle}>Key Challenges</h3>
                                {legacyChallenges.map((item, idx) => (
                                    <div key={idx} className={styles.legacyCard}>
                                        <div className={styles.legacyHeader} style={{ color: item.color }}>
                                            {item.icon}
                                            <h4>{item.title}</h4>
                                        </div>
                                        <p>{item.description}</p>
                                        <ul className={styles.legacyPoints}>
                                            {item.points.map((point, i) => (
                                                <li key={i}>
                                                    <AlertTriangle size={12} style={{ color: item.color }} />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.gridCol}>
                                <h3 className={styles.colTitle}>Integration Solutions</h3>
                                <div className={styles.solutionsGrid}>
                                    {integrationSolutions.map((item, idx) => (
                                        <div key={idx} className={styles.solutionCard} style={{ borderColor: item.color }}>
                                            <div className={styles.solutionIcon} style={{ color: item.color }}>
                                                {item.icon}
                                            </div>
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <h3 className={styles.colTitle} style={{ marginTop: '2rem' }}>Security Best Practices</h3>
                                <div className={styles.solutionsGrid}>
                                    {securityPractices.map((item, idx) => (
                                        <div key={idx} className={styles.solutionCard} style={{ borderColor: item.color }}>
                                            <div className={styles.solutionIcon} style={{ color: item.color }}>
                                                {item.icon}
                                            </div>
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <h3 className={styles.colTitle} style={{ marginTop: '2rem' }}>Cross-Platform Compatibility</h3>
                                <div className={styles.solutionsGrid}>
                                    {compatibilitySolutions.map((item, idx) => (
                                        <div key={idx} className={styles.solutionCard} style={{ borderColor: item.color }}>
                                            <div className={styles.solutionIcon} style={{ color: item.color }}>
                                                {item.icon}
                                            </div>
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Agile Methodologies */}
                    <section className={styles.agileSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                Role of <span className={styles.titleHighlight}>Agile Methodologies</span> in Product Development
                            </h2>
                            <p className={styles.sectionDescription}>
                                Agile provides a flexible, iterative approach that is highly relevant to ISVs and product development.
                            </p>
                        </div>

                        <div className={styles.benefitsGrid}>
                            {agileBenefits.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.benefitCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.benefitIcon} style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <h4>{item.text}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* ISV Advanced Technologies */}
                    <section className={styles.techGridSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                Advanced <span className={styles.titleHighlight}>Technologies</span> for ISVs
                            </h2>
                            <p className={styles.sectionDescription}>
                                Leverage cutting-edge tech to innovate, improve user experiences, and stay competitive.
                            </p>
                        </div>

                        <div className={styles.techClusterGrid}>
                            {isvAdvancedTech.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.techClusterItem}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.03 }}
                                    viewport={{ once: true }}
                                    style={{ borderColor: tech.color }}
                                >
                                    <div className={styles.techClusterIcon} style={{ color: tech.color }}>
                                        {tech.icon}
                                    </div>
                                    <span>{tech.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </>
            )}

            {/* ===== PILLAR 2: WHITE LABEL SERVICES ===== */}
            {activePillar === 'white-label' && (
                <>
                    {/* White Label Audiences */}
                    <section className={styles.pillarSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                White Label Services <span className={styles.titleHighlight}>Are Best Suited For</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                Partner with our white label software engineering company to increase your agency capabilities and offer your clients robust software solutions – under your brand.
                            </p>
                        </div>

                        <div className={styles.audienceGrid}>
                            {whiteLabelAudiences.map((audience, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.audienceCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -6 }}
                                >
                                    <div className={styles.audienceIcon} style={{ color: audience.color }}>
                                        {audience.icon}
                                    </div>
                                    <h3>{audience.title}</h3>
                                    <p>{audience.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* White Label Services */}
                    <section className={styles.servicesSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                Comprehensive <span className={styles.titleHighlight}>White Label Services</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                We offer a comprehensive suite of white label development services tailored to your specific needs – all while you maintain full control over branding and client relationships.
                            </p>
                        </div>

                        <div className={styles.whiteLabelGrid}>
                            {whiteLabelServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.whiteLabelCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.03 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.whiteLabelIcon} style={{ color: service.color }}>
                                        {service.icon}
                                    </div>
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Benefits of White Label Services (Detailed) */}
                    <section className={styles.benefitsSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                Benefits of <span className={styles.titleHighlight}>White Label Services</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                White label services offer several advantages over traditional approaches – especially for small-scale businesses.
                            </p>
                        </div>

                        <div className={styles.benefitsGrid}>
                            {whiteLabelBenefitsDetailed.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.benefitCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.benefitIcon} style={{ backgroundColor: `${benefit.color}15`, color: benefit.color }}>
                                        {benefit.icon}
                                    </div>
                                    <h4>{benefit.title}</h4>
                                    <p>{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Types of White Label Partnerships */}
                    <section className={styles.partnershipSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                Types of <span className={styles.titleHighlight}>White Label Partnerships</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                Understand the different models available to grow your business.
                            </p>
                        </div>

                        <div className={styles.partnershipGrid}>
                            {whiteLabelPartnerships.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.partnershipCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.partnershipIcon} style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Why Partner with Us */}
                    <section className={styles.benefitsSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                Why Partner with Us for <span className={styles.titleHighlight}>White Label</span>?
                            </h2>
                            <p className={styles.sectionDescription}>
                                ValueCoders: A perfect fit for white label software design & development services.
                            </p>
                        </div>

                        <div className={styles.benefitsGrid}>
                            {whiteLabelBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.benefitCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.benefitIcon} style={{ backgroundColor: `${benefit.color}15`, color: benefit.color }}>
                                        {benefit.icon}
                                    </div>
                                    <h4>{benefit.title}</h4>
                                    <p>{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </>
            )}

            {/* ===== PILLAR 3: API DEVELOPMENT ===== */}
            {activePillar === 'api' && (
                <>
                    {/* API Expertise */}
                    <section className={styles.pillarSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                API Development Services Designed for <span className={styles.titleHighlight}>Enterprise Outcomes</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                Launch secure, maintainable APIs that lower technical debt, accelerate time-to-market, and support continuous business transformation.
                            </p>
                        </div>

                        <div className={styles.apiExpertiseGrid}>
                            {apiExpertise.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.apiCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -4 }}
                                >
                                    <div className={styles.apiIcon} style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p className={styles.apiDescription}>{item.description}</p>
                                    <ul className={styles.apiFeatures}>
                                        {item.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <CheckCircle size={12} style={{ color: item.color }} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* API Business Use Cases */}
                    <section className={styles.useCasesSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                50+ Business Use Cases <span className={styles.titleHighlight}>Enabled with APIs</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                Connect systems, products, and partners through reliable APIs that enable integration, application backends, partner access, data sharing, and automation.
                            </p>
                        </div>

                        <div className={styles.useCasesGrid}>
                            {apiBusinessUseCases.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.useCaseCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.useCaseIcon} style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.useCaseContent}>
                                        <h4>{item.function}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* API Protocols & Security */}
                    <section className={styles.apiProtocolsSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                API Styles, Protocols & <span className={styles.titleHighlight}>Security</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                We build APIs using modern standards with enterprise-grade security baked in.
                            </p>
                        </div>

                        <div className={styles.protocolsGrid}>
                            {apiProtocols.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.protocolCard}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    style={{ borderColor: item.color }}
                                >
                                    <div className={styles.protocolIcon} style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <span>{item.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* API Process */}
                    <section className={styles.processSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                Our API <span className={styles.titleHighlight}>Development Process</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                A structured approach focused on reliable integration and long-term maintainability.
                            </p>
                        </div>

                        <div className={styles.apiProcessGrid}>
                            {apiProcess.map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    className={styles.apiProcessCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.apiProcessStep} style={{ backgroundColor: `${step.color}15`, color: step.color }}>
                                        {step.step}
                                    </div>
                                    <div className={styles.apiProcessIcon} style={{ color: step.color }}>
                                        {step.icon}
                                    </div>
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Latest Trends in API Development */}
                    <section className={styles.trendsSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                Latest Trends in <span className={styles.titleHighlight}>API Development</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                API development continues to evolve with technological advancements and changing market demands.
                            </p>
                        </div>

                        <div className={styles.trendsGrid}>
                            {apiTrends.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.trendCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.trendIcon} style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <span>{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Considerations for Choosing an API Development Company */}
                    <section className={styles.considerationsSection}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                Choosing an <span className={styles.titleHighlight}>API Development Company</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                Finding the right API development partner requires evaluating both technical expertise and business alignment.
                            </p>
                        </div>

                        <div className={styles.considerationsGrid}>
                            {apiConsiderations.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.considerationCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.considerationIcon} style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.considerationContent}>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </>
            )}

            {/* ===== ELEVATE YOUR ISV JOURNEY – Shared Value Proposition ===== */}
            <section className={styles.elevateSection}>
                <div className={styles.elevateBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80"
                        alt="Collaboration background"
                        fill
                        className={styles.elevateBgImage}
                    />
                    <div className={styles.elevateOverlay}></div>
                </div>
                <div className={styles.elevateContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle} style={{ color: 'white' }}>
                            Elevate Your <span className={styles.titleHighlight}>ISV Journey</span> with Our Expertise
                        </h2>
                        <p className={styles.sectionDescription} style={{ color: 'rgba(255,255,255,0.9)' }}>
                            ValueCoders stands out as a trusted name in software development, specializing in catering to Independent Software Vendors (ISVs), product companies, and digital agencies.
                        </p>
                    </div>

                    <div className={styles.elevateGrid}>
                        <div className={styles.elevateItem}>
                            <BadgeCheck className={styles.elevateIcon} style={{ color: '#3B82F6' }} />
                            <span>Trusted by Startups to Fortune 500</span>
                        </div>
                        <div className={styles.elevateItem}>
                            <Rocket className={styles.elevateIcon} style={{ color: '#10B981' }} />
                            <span>Idea to Deployment – We Handle All</span>
                        </div>
                        <div className={styles.elevateItem}>
                            <Globe className={styles.elevateIcon} style={{ color: '#8B5CF6' }} />
                            <span>Time-Zone Friendly: Global Presence</span>
                        </div>
                        <div className={styles.elevateItem}>
                            <Shield className={styles.elevateIcon} style={{ color: '#F59E0B' }} />
                            <span>Top-tier Data Security Protocols</span>
                        </div>
                        <div className={styles.elevateItem}>
                            <Clock className={styles.elevateIcon} style={{ color: '#EC4899' }} />
                            <span>On-time Delivery, No Surprises</span>
                        </div>
                        <div className={styles.elevateItem}>
                            <Target className={styles.elevateIcon} style={{ color: '#06B6D4' }} />
                            <span>First Time Right Process</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CLIENT TESTIMONIALS CAROUSEL ===== */}
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

            {/* ===== INDUSTRIES SECTION (EXACT HOVER ANIMATION) ===== */}
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

            {/* ===== FAQ SECTION ===== */}
            <section className={styles.faqSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Frequently Asked <span className={styles.titleHighlight}>Questions</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Get answers to common questions about ISV development, white label partnerships, and API integration.
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
                        <h3 className={styles.ctaTitle}>Ready to Innovate?</h3>
                        <p className={styles.ctaDescription}>
                            Let&apos;s co-create groundbreaking products together, merging your vision with our expertise for unparalleled results. Whether you need an ISV product, white label delivery, or API integration – we&apos;re ready when you are.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Discuss Your Project
                                <ArrowRight className={styles.buttonIcon} />
                            </Link>
                            <Link href="/calculator" className={styles.ctaSecondary}>
                                Estimate Your Cost
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

