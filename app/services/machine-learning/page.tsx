'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Brain,
    Cpu,
    Eye,
    Bot,
    TrendingUp,
    ChevronRight,
    Award,
    MessageSquare,
    Sparkles,
    Star,
    HelpCircle,
    CheckCircle,
    Code,
    BookOpen,
    Server,
    Zap,
    BarChart,
    Cloud,
    Target
} from 'lucide-react';
import styles from './machine.module.css';

export default function MachineLearningPage() {
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    // Hero testimonial
    const testimonial = {
        name: 'Sarah Chen',
        role: 'AI Director, TechVision Inc.',
        content: 'Their ML team delivered a predictive analytics platform that improved our operational efficiency by 65%. The models have been running flawlessly for over 18 months.',
        rating: 5,
        project: 'Enterprise Predictive Analytics'
    };

    // Main services with background images and hover effects
    const mlServices = [
        {
            id: 1,
            title: 'ML Development Solutions',
            description: 'Custom machine learning solutions tailored to your business needs, leveraging cutting-edge algorithms and data analysis techniques.',
            icon: <Brain className={styles.serviceIcon} />,
            image: '/images/mldev.jpg',
            color: '#60a5fa',
            features: ['Custom Algorithms', 'Predictive Models', 'Real-time Analytics']
        },
        {
            id: 2,
            title: 'MLOps Consulting',
            description: 'Get expert guidance on implementing MLOps practices to streamline your machine learning lifecycle, from development to deployment and maintenance.',
            icon: <Cpu className={styles.serviceIcon} />,
            image: 'https://plus.unsplash.com/premium_photo-1726079247228-993af4c05db8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjaGluZSUyMGxlYXJuaW5nJTIwY29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D',
            color: '#34d399',
            features: ['CI/CD Pipelines', 'Model Monitoring', 'Automated Deployment']
        },
        {
            id: 3,
            title: 'Computer Vision',
            description: 'Unlock the power of computer vision with our advanced solutions, enabling automated image and video analysis for diverse applications.',
            icon: <Eye className={styles.serviceIcon} />,
            image: '/images/comvision.jpg',
            color: '#8b5cf6',
            features: ['Object Detection', 'Facial Recognition', 'Quality Inspection']
        },
        {
            id: 4,
            title: 'ML Model Engineering',
            description: 'Our ML Model Engineering Services ensure the development and optimization of high-performance machine learning models for your projects.',
            icon: <TrendingUp className={styles.serviceIcon} />,
            image: 'https://plus.unsplash.com/premium_photo-1683120963435-6f9355d4a776?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D',
            color: '#f59e0b',
            features: ['Model Tuning', 'Performance Optimization', 'Scalable Architecture']
        },
        {
            id: 5,
            title: 'Robotic Process Automation',
            description: 'Automate repetitive tasks and improve process efficiency with our Robotic Process Automation services, powered by machine learning technology.',
            icon: <Bot className={styles.serviceIcon} />,
            image: 'https://images.unsplash.com/photo-1563968743333-044cef800494?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9ib3RpYyUyMHByb2Nlc3MlMjBhdXRvbWF0aW9ufGVufDB8fDB8fHww',
            color: '#ef4444',
            features: ['Process Automation', 'Intelligent Bots', 'Workflow Optimization']
        },
        {
            id: 6,
            title: 'Natural Language Processing',
            description: 'Transform unstructured text data into actionable insights with our NLP solutions, enabling sentiment analysis, chatbots, and intelligent document processing.',
            icon: <MessageSquare className={styles.serviceIcon} />,
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600',
            color: '#3b82f6',
            features: ['Sentiment Analysis', 'Chatbot Development', 'Text Classification']
        }
    ];

    // Industry solutions - no background images
    const industries = [
        {
            id: 1,
            name: 'Healthcare',
            description: 'Revolutionize healthcare delivery with machine learning solutions that facilitate disease diagnosis, medical image analysis, patient monitoring, drug discovery, and analysis of Electronic Health Records (EHR).',
            icon: '🏥',
            color: '#10b981',
            solutions: ['Disease Diagnosis', 'Medical Image Analysis', 'Drug Discovery', 'Patient Monitoring']
        },
        {
            id: 2,
            name: 'Banking & Finance',
            description: 'Empower banking and finance sectors with machine learning solutions for credit risk assessment, fraud detection, algorithmic trading, customer segmentation, and regulatory compliance.',
            icon: '💰',
            color: '#3b82f6',
            solutions: ['Fraud Detection', 'Credit Scoring', 'Algorithmic Trading', 'Risk Assessment']
        },
        {
            id: 3,
            name: 'Retail & eCommerce',
            description: 'Drive retail & eCommerce success through predictive analytics, personalized recommendations, fraud detection, and demand forecasting.',
            icon: '🛍️',
            color: '#8b5cf6',
            solutions: ['Personalized Recommendations', 'Inventory Optimization', 'Customer Sentiment', 'Demand Forecasting']
        },
        {
            id: 4,
            name: 'Education',
            description: 'Transform education systems with machine learning solutions that support personalized learning experiences, predict student performance, and provide intelligent tutoring.',
            icon: '🎓',
            color: '#f59e0b',
            solutions: ['Personalized Learning', 'Performance Analytics', 'NLP Content Analysis', 'Intelligent Tutoring']
        },
        {
            id: 5,
            name: 'Travel & Tourism',
            description: 'Transform travel and tourism with personalized recommendations, optimized routes, and predicting trends to enhance traveler experiences.',
            icon: '✈️',
            color: '#06b6d4',
            solutions: ['Personalized Itineraries', 'Demand Forecasting', 'Route Optimization', 'Trend Analysis']
        },
        {
            id: 6,
            name: 'Manufacturing',
            description: 'Boost productivity and minimize downtime with machine learning solutions that enable real-time monitoring, predictive maintenance, and data-driven production planning.',
            icon: '🏭',
            color: '#ef4444',
            solutions: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Real-time Monitoring']
        }
    ];

    // Use cases with background image section
    const useCases = [
        {
            id: 1,
            title: 'Predictive Maintenance',
            description: 'Stay ahead of equipment failures and maximize uptime by leveraging machine learning algorithms to predict maintenance needs and proactively address issues.',
            applications: ['Anomaly Detection', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Reduction']
        },
        {
            id: 2,
            title: 'Customer Analytics',
            description: 'Unlock valuable customer insights, personalize experiences, and drive targeted marketing strategies using machine learning algorithms for analyzing customer behavior and preferences.',
            applications: ['Sentiment Analysis', 'Behavior Prediction', 'Personalized Marketing', 'Churn Prediction']
        },
        {
            id: 3,
            title: 'Supply Chain Management',
            description: 'Harness the power of machine learning to optimize inventory, streamline logistics, and enhance supply chain visibility.',
            applications: ['Demand Forecasting', 'Inventory Management', 'Logistics Optimization', 'Route Planning']
        },
        {
            id: 4,
            title: 'Financial Management',
            description: 'Mitigate risks, automate financial processes, and enhance fraud detection with machine learning solutions for financial forecasting, budgeting, and real-time transaction analysis.',
            applications: ['Fraud Detection', 'Financial Forecasting', 'Risk Assessment', 'Portfolio Management']
        },
        {
            id: 5,
            title: 'Natural Language Processing',
            description: 'Leverage the power of natural language processing to enable language translation, sentiment analysis, chatbots, and voice recognition.',
            applications: ['Chatbots', 'Sentiment Analysis', 'Language Translation', 'Content Generation']
        },
        {
            id: 6,
            title: 'Operational Intelligence',
            description: 'Drive informed decision-making and optimize processes with machine learning-powered operational insights, enabling proactive problem-solving and workflow optimization.',
            applications: ['Process Optimization', 'Bottleneck Analysis', 'Performance Metrics', 'Resource Allocation']
        }
    ];

    // ML Methods
    const mlMethods = [
        {
            category: 'Non-neural Network ML',
            description: 'Traditional machine learning algorithms that excel in structured data analysis and prediction.',
            methods: [
                'Supervised Learning (Decision Trees, SVM, Linear Regression)',
                'Unsupervised Learning (Clustering, Dimensionality Reduction)',
                'Reinforcement Learning (Q-learning, SARSA)',
                'Ensemble Methods (Random Forests, Gradient Boosting)'
            ]
        },
        {
            category: 'Neural Networks & Deep Learning',
            description: 'Advanced neural architectures for complex pattern recognition and unstructured data analysis.',
            methods: [
                'Convolutional Neural Networks (CNNs) for Image Analysis',
                'Recurrent Neural Networks (RNNs, LSTMs) for Sequence Data',
                'Generative Adversarial Networks (GANs) for Data Generation',
                'Transformers & Attention Mechanisms for NLP Tasks'
            ]
        }
    ];

    // ML Technologies
    const mlTechnologies = [
        {
            category: 'ML Platforms',
            icon: <Cloud className={styles.techIcon} />,
            items: ['Azure Machine Learning', 'Amazon SageMaker', 'Google Cloud AI Platform', 'Azure Cognitive Services']
        },
        {
            category: 'ML Frameworks',
            icon: <Code className={styles.techIcon} />,
            items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'MXNet']
        },
        {
            category: 'ML Libraries',
            icon: <BookOpen className={styles.techIcon} />,
            items: ['Apache Spark MLlib', 'Theano', 'Gensim', 'spaCy', 'NLTK', 'XGBoost']
        },
        {
            category: 'Big Data',
            icon: <Server className={styles.techIcon} />,
            items: ['Hadoop', 'Apache Spark', 'Apache Kafka', 'Cassandra', 'Apache Hive', 'Apache HBase']
        },
        {
            category: 'Data Visualization',
            icon: <BarChart className={styles.techIcon} />,
            items: ['Tableau', 'Power BI', 'Grafana', 'Plotly', 'Google Charts', 'D3.js']
        },
        {
            category: 'Network Architectures',
            icon: <Zap className={styles.techIcon} />,
            items: ['ResNet', 'YOLO', 'U-Net', 'Transformers', 'Autoencoders', 'GANs']
        }
    ];

    // FAQ Section
    const faqs = [
        {
            question: 'What industries benefit most from machine learning solutions?',
            answer: 'Machine learning provides significant value across multiple industries. Healthcare benefits from improved diagnostics and personalized treatment plans. Financial services gain from fraud detection and risk assessment. Retail and e-commerce see improvements in customer personalization and inventory management. Manufacturing optimizes through predictive maintenance and quality control. Education enhances through personalized learning experiences.'
        },
        {
            question: 'How long does it take to implement a machine learning solution?',
            answer: 'Implementation timelines vary based on project complexity. Basic predictive models can be deployed in 4-6 weeks, while comprehensive enterprise solutions typically require 3-6 months. Factors affecting timeline include data availability and quality, integration requirements, model complexity, and testing needs.'
        },
        {
            question: 'What data requirements are needed for ML projects?',
            answer: 'Successful ML projects require sufficient, clean, and relevant data. We recommend historical data spanning multiple business cycles, properly labeled training data, diverse data representing various scenarios, and ongoing data collection mechanisms. Data quality is more important than quantity, with proper preprocessing being crucial for model accuracy.'
        },
        {
            question: 'How do you ensure model accuracy and reliability?',
            answer: 'We employ rigorous testing methodologies including cross-validation, A/B testing, and continuous monitoring. Our process includes data quality assessment, multiple algorithm testing, performance benchmarking, real-world scenario testing, and ongoing model maintenance with regular updates based on new data.'
        },
        {
            question: 'What is the difference between machine learning and traditional programming?',
            answer: 'Traditional programming is rule-based where developers write explicit instructions. Machine learning is data-driven where algorithms learn patterns from data to make predictions or decisions without explicit programming. ML models can adapt and improve over time with new data, while traditional programs follow fixed logic.'
        },
        {
            question: 'What are the main approaches to machine learning?',
            answer: 'The three primary approaches are: 1) Supervised Learning - training models with labeled data for prediction tasks, 2) Unsupervised Learning - finding patterns in unlabeled data, and 3) Reinforcement Learning - learning optimal actions through trial and error with rewards. Each approach has specific use cases and algorithms.'
        },
        {
            question: 'How can machine learning models be enhanced with data?',
            answer: 'Key strategies include: Data Preprocessing (cleaning, normalization, handling missing values), Feature Engineering (creating informative input features), Data Augmentation (increasing dataset diversity), and Continuous Learning (updating models with new data). Proper data preparation often has more impact on model performance than algorithm selection.'
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
                            <span className={styles.heroBadge}>AI-Powered Solutions</span>
                        </motion.div>

                        <h1 className={styles.heroTitle}>
                            Transform Your Business with <span className={styles.gradientText}>Machine Learning</span>
                        </h1>

                        <p className={styles.heroDescription}>
                            Harness the power of advanced algorithms and predictive models to enhance efficiency,
                            automate processes, and gain a competitive advantage. Partner with us for tailored ML solutions.
                        </p>

                        <div className={styles.heroButtons}>
                            <Link href="/contact" className={styles.primaryButton}>
                                Start Your ML Journey
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
                                <div className={styles.testimonialImage}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src="/images/testimonial.jpg"
                                            alt="Sarah - Client"
                                            width={100}
                                            height={100}
                                            className={styles.clientImage}
                                        />
                                    </motion.div>

                                </div>
                                <div className={styles.testimonialInfo}>
                                    <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                                    <p className={styles.testimonialRole}>{testimonial.role}</p>
                                    <div className={styles.testimonialRating}>
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className={styles.starIcon} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <MessageSquare className={styles.quoteIcon} />
                            <p className={styles.testimonialContent}>
                                {testimonial.content}
                            </p>

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
            <section className={styles.trustedSection}>
                <div className={styles.sectionHeader}>
                    <p className={styles.trustedLabel}>Trusted by startups and Fortune 500 companies</p>
                    <div className={styles.trustedLogos}>
                        {['FinTech Corp', 'HealthPlus', 'EduGlobal', 'RetailChain', 'ManufacturePro'].map((company, idx) => (
                            <div key={idx} className={styles.logoItem}>
                                <div className={styles.logoPlaceholder}>{company}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ML Services Section with Background Images */}
            <section className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our <span className={styles.titleHighlight}>Machine Learning</span> Services
                    </h2>
                    <p className={styles.sectionDescription}>
                        Drive efficiency, automate processes, and gain a competitive edge with the power of our machine learning development services.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {mlServices.map((service) => (
                        <div
                            key={service.id}
                            className={styles.serviceCard}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className={styles.serviceImage}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={styles.imageOverlay}></div>

                                <div className={styles.serviceIconWrapper} style={{ color: service.color }}>
                                    {service.icon}
                                </div>

                                <div className={styles.serviceHeader}>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <div className={styles.serviceFeatures}>
                                        {service.features.slice(0, 2).map((feat, idx) => (
                                            <span key={idx} className={styles.featureTag} style={{ backgroundColor: `${service.color}20`, color: service.color }}>
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className={`${styles.serviceHoverDescription} ${hoveredService === service.id ? styles.visible : ''}`}>
                                    <p>{service.description}</p>
                                    <Link href={`/services/${service.id}`} className={styles.serviceLink} style={{ color: service.color }}>
                                        Learn More
                                        <ChevronRight className={styles.linkIcon} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Industries Section - No Background Images */}
            <section className={styles.industriesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Industries We <span className={styles.titleHighlight}>Transform</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        With a collaborative approach and deep industry expertise, we create highly effective
                        Machine Learning applications that deliver impactful results.
                    </p>
                </div>

                <div className={styles.industriesGrid}>
                    {industries.map((industry) => (
                        <div key={industry.id} className={styles.industryCard} style={{ borderLeftColor: industry.color }}>
                            <div className={styles.industryHeader}>
                                <div className={styles.industryIcon} style={{ backgroundColor: `${industry.color}20`, color: industry.color }}>
                                    {industry.icon}
                                </div>
                                <h3 className={styles.industryName}>{industry.name}</h3>
                            </div>

                            <p className={styles.industryDescription}>{industry.description}</p>

                            <div className={styles.solutionsList}>
                                <h4 className={styles.solutionsTitle}>Key Solutions:</h4>
                                <ul className={styles.solutionsItems}>
                                    {industry.solutions.map((solution, idx) => (
                                        <li key={idx} className={styles.solutionItem}>
                                            <CheckCircle className={styles.solutionIcon} style={{ color: industry.color }} />
                                            <span>{solution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.buttonWrapper}>
                                <Link href={`/industries/${industry.id}`} className={styles.industryLink} style={{ backgroundColor: industry.color }}>
                                    Explore Solutions
                                    <ChevronRight className={styles.linkIcon} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases Section with Background Image */}
            <section className={styles.useCasesSection}>
                <div className={styles.useCasesOverlay}></div>
                <div className={styles.useCasesContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitleWhite}>
                            ML Solutions for <span className={styles.titleHighlightWhite}>Various Use Cases</span>
                        </h2>
                        <p className={styles.sectionDescriptionWhite}>
                            Harness the potential of ML solutions across diverse use cases, empowering businesses
                            with advanced analytics, automation, and intelligent insights.
                        </p>
                    </div>

                    <div className={styles.useCasesGrid}>
                        {useCases.map((useCase) => (
                            <div key={useCase.id} className={styles.useCaseCard}>
                                <div className={styles.useCaseHeader}>
                                    <Target className={styles.useCaseIcon} />
                                    <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                                </div>

                                <p className={styles.useCaseDescription}>{useCase.description}</p>

                                <div className={styles.allApplications}>
                                    <h4 className={styles.applicationsTitle}>Applications:</h4>
                                    <ul className={styles.applicationsList}>
                                        {useCase.applications.map((app, idx) => (
                                            <li key={idx} className={styles.applicationItem}>
                                                <div className={styles.applicationDot}></div>
                                                <span>{app}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ML Methods Section */}
            <section className={styles.methodsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Advanced Machine Learning <span className={styles.titleHighlight}>Methods & Techniques</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        We employ state-of-the-art machine learning methodologies and algorithms to deliver
                        accurate predictions, powerful insights, and transformative outcomes for your business.
                    </p>
                </div>

                <div className={styles.methodsGrid}>
                    {mlMethods.map((method, index) => (
                        <div key={index} className={styles.methodCard}>
                            <div className={styles.methodHeader}>
                                <Brain className={styles.methodIcon} />
                                <div>
                                    <h3 className={styles.methodTitle}>{method.category}</h3>
                                    <p className={styles.methodDescription}>{method.description}</p>
                                </div>
                            </div>
                            <ul className={styles.methodList}>
                                {method.methods.map((item, idx) => (
                                    <li key={idx} className={styles.methodItem}>
                                        <div className={styles.methodDot}></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ML Technologies Section */}
            <section className={styles.technologiesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        ML Technologies <span className={styles.titleHighlight}>We Use</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Our technology stacks encompass a comprehensive range of cutting-edge tools and frameworks,
                        enabling us to deliver robust and scalable solutions tailored to meet the unique needs of each project.
                    </p>
                </div>

                <div className={styles.technologiesGrid}>
                    {mlTechnologies.map((tech, index) => (
                        <div key={index} className={styles.techCard}>
                            <div className={styles.techHeader}>
                                <div className={styles.techIconWrapper}>
                                    {tech.icon}
                                </div>
                                <h3 className={styles.techTitle}>{tech.category}</h3>
                            </div>

                            <div className={styles.techItems}>
                                {tech.items.map((item, idx) => (
                                    <span key={idx} className={styles.techItem}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Frequently Asked <span className={styles.titleHighlight}>Questions</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Find answers to common questions about our machine learning services and solutions.
                    </p>
                </div>

                <div className={styles.faqGrid}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqCard}>
                            <button
                                className={styles.faqQuestion}
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <div className={styles.faqQuestionContent}>
                                    <HelpCircle className={styles.faqIcon} />
                                    <span>{faq.question}</span>
                                </div>
                                <span className={styles.faqToggle}>
                                    {openFaq === index ? '−' : '+'}
                                </span>
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
                        </div>
                    ))}
                </div>

                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>Ready to Unlock the Power of Machine Learning?</h3>
                        <p className={styles.ctaDescription}>
                            Discover how our state-of-the-art solutions can drive innovation and transform your business.
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