"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SVGProps } from "react";
import {
  Sparkles,
  ArrowRight,
  Award,
  MessageSquare,
  HelpCircle,
  Smartphone,
  Server,
  Zap,
  BarChart3,
  Layers,
  Wallet,
  Bot,
  Handshake,
  Shield,
  Globe,
  Compass,
  Code,
  RefreshCw,
  Megaphone,
  BadgeCheck,
  Plug,
  Brain,
  Lock,
  Figma,
  Building2,
  Rocket,
  Clock,
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  Fingerprint,
  Repeat,
  Radio,
  Cloud,
  Scan,
} from "lucide-react";
import styles from "./fintech.module.css";

export default function FinTechPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  // ----- HERO TESTIMONIAL -----
  const testimonial = {
    name: "Sarah Chen",
    role: "CFO, FinScale Capital",
    content:
      "ValueCoders delivered a robust loan processing system that handles 50,000+ daily transactions with zero downtime. Their deep FinTech expertise and commitment to security exceeded our expectations.",
    rating: 5,
    project: "Enterprise Lending Platform",
  };

  // ============ FINTECH SOLUTIONS (10 cards) ============
  const fintechSolutions = [
    {
      id: 1,
      title: "Client-facing Apps",
      description:
        "Intuitive apps designed to enhance the user’s digital journey across all financial touchpoints.",
      icon: <Smartphone />,
      color: "#3B82F6",
      features: [
        "Mobile banking apps",
        "Money lending apps",
        "Payment & Buy Now Pay Later apps",
        "Insurance apps",
      ],
    },
    {
      id: 2,
      title: "Complex Processing Systems",
      description:
        "Large-scale systems with comprehensive processing engines for the BFSI segment.",
      icon: <Server />,
      color: "#10B981",
      features: [
        "Loan processing systems",
        "Mortgage systems",
        "Claim processing systems",
        "Core banking systems",
      ],
    },
    {
      id: 3,
      title: "Process Automation Solutions",
      description:
        "Streamlined operations and improved efficiency through intelligent automation.",
      icon: <Zap />,
      color: "#8B5CF6",
      features: [
        "Streamline operations",
        "Payment automation",
        "Underwriting automation",
      ],
    },
    {
      id: 4,
      title: "Data Analytics Systems",
      description:
        "Empower businesses with insights to make informed decisions and optimize financial resources.",
      icon: <BarChart3 />,
      color: "#F59E0B",
      features: [
        "Data science for finance",
        "Valuable business insights",
        "Financial optimization",
      ],
    },
    {
      id: 5,
      title: "BFSI Service Platforms",
      description:
        "Secure, scalable web platforms for multi-party financial activities and complex transactions.",
      icon: <Layers />,
      color: "#EC4899",
      features: [
        "Secure web platforms",
        "Multi-party activities",
        "Complex BFSI transactions",
      ],
    },
    {
      id: 6,
      title: "Digital Wallet Development",
      description:
        "Secure and convenient payment options – reducing the need for physical cash or cards.",
      icon: <Wallet />,
      color: "#06B6D4",
      features: [
        "Fast, secure online payments",
        "Cryptocurrency management",
        "Facilitate transactions",
      ],
    },
    {
      id: 7,
      title: "Intelligent Virtual Assistants",
      description:
        "AI-powered agents that automate tasks, answer queries, and provide personalized financial advice.",
      icon: <Bot />,
      color: "#3B82F6",
      features: [
        "AI-powered agents",
        "Personalized communication",
        "Financial advice",
      ],
    },
    {
      id: 8,
      title: "P2P Lending Platform",
      description:
        "Online platforms connecting financial service providers with individuals and SMBs.",
      icon: <Handshake />,
      color: "#10B981",
      features: [
        "P2P lending software",
        "P2P insurance platforms",
        "Crowdfunding platforms",
      ],
    },
    {
      id: 9,
      title: "Financial Fraud Detection",
      description:
        "Advanced AI-based cybersecurity tools to instantly identify and prevent malicious behavior.",
      icon: <Shield />,
      color: "#8B5CF6",
      features: [
        "AI-based cybersecurity",
        "Real-time fraud prevention",
        "Protect financial operations",
      ],
    },
    {
      id: 10,
      title: "Digital Collaboration Solutions",
      description:
        "Seamless communication and teamwork using blockchain to centralize collaboration.",
      icon: <Globe />,
      color: "#F59E0B",
      features: [
        "Blockchain collaboration",
        "BFSI provider integration",
        "Enhanced digital teamwork",
      ],
    },
  ];

  // ============ FINTECH DEVELOPMENT SERVICES (now 6 items) ============
  const fintechServices = [
    {
      title: "FinTech Consulting",
      description:
        "Navigate the evolving FinTech landscape with confidence – expert strategic guidance for operational efficiency.",
      icon: <Compass />,
      color: "#3B82F6",
      points: [
        "Expert strategic guidance",
        "Enhanced operational efficiency",
        "Mastery of emerging trends",
      ],
    },
    {
      title: "Custom FinTech Software",
      description:
        "Build financial solutions that meet the unique needs of your business with end-to-end development.",
      icon: <Code />,
      color: "#10B981",
      points: [
        "End-to-end solutions",
        "Seamless integrations",
        "Streamlined operations",
      ],
    },
    {
      title: "Legacy Modernization",
      description:
        "Revitalize and upgrade outdated systems for modern demands – cloud migration, code overhaul.",
      icon: <RefreshCw />,
      color: "#8B5CF6",
      points: [
        "Smooth cloud migration",
        "Legacy code overhaul",
        "Advanced feature additions",
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your FinTech product visibility with result-driven marketing strategies.",
      icon: <Megaphone />,
      color: "#F59E0B",
      points: [
        "SEO & content strategies",
        "Performance marketing",
        "Branding & social campaigns",
      ],
    },
    {
      title: "FinTech Integration Services",
      description:
        "Seamlessly connect your financial systems with third-party platforms, open banking APIs, and legacy cores.",
      icon: <Plug />,
      color: "#EC4899",
      points: [
        "Open Banking API integration",
        "Payment gateway connectivity",
        "Legacy system bridging",
      ],
    },
    {
      title: "FinTech Cloud & Infrastructure",
      description:
        "Scalable, secure cloud infrastructure for high-availability financial applications.",
      icon: <Cloud />,
      color: "#06B6D4",
      points: [
        "AWS/Azure/GCP architecture",
        "Auto-scaling & load balancing",
        "Disaster recovery setup",
      ],
    },
  ];

  // ============ BENEFITS OF CUSTOM FINTECH SOFTWARE ============
  const fintechBenefits = [
    {
      title: "Regulatory Compliance",
      description:
        "We adhere to laws, regulations, and guidelines relevant to your business processes while building your solution.",
      icon: <BadgeCheck />,
      color: "#3B82F6",
    },
    {
      title: "Powerful Integrations",
      description:
        "Integrate various powerful features into your solution for a rich, compact customer experience.",
      icon: <Plug />,
      color: "#10B981",
    },
    {
      title: "AI-Powered Intelligence",
      description:
        "With integrated AI, your solution becomes more intelligent, user-friendly, and ready for the next generation.",
      icon: <Brain />,
      color: "#8B5CF6",
    },
    {
      title: "Data Security & Privacy",
      description:
        "Using technologies like Blockchain, we ensure data security and privacy for all FinTech applications.",
      icon: <Lock />,
      color: "#F59E0B",
    },
    {
      title: "Automated Fraud Detection",
      description:
        "Our fraud prevention solutions streamline review processes, flag fraudulent activity, and enable rapid action.",
      icon: <Shield />,
      color: "#EC4899",
    },
    {
      title: "Immersive UX",
      description:
        "User-friendly applications that provide customers with a hassle-free digital experience.",
      icon: <Figma />,
      color: "#06B6D4",
    },
  ];

  // ============ WHY PARTNER WITH US (redesigned with background image) ============
  const whyPartner = [
    {
      text: "India’s Top 1% Software Talent",
      icon: <Award />,
      color: "#3B82F6",
    },
    {
      text: "Trusted by Startups to Fortune 500",
      icon: <Building2 />,
      color: "#10B981",
    },
    {
      text: "Idea to Deployment, We Handle All",
      icon: <Rocket />,
      color: "#8B5CF6",
    },
    {
      text: "Time-Zone Friendly: Global Presence",
      icon: <Globe />,
      color: "#F59E0B",
    },
    {
      text: "Top-tier Data Security Protocols",
      icon: <Lock />,
      color: "#EC4899",
    },
    {
      text: "On-time Delivery, No Surprises",
      icon: <Clock />,
      color: "#06B6D4",
    },
  ];

  // ============ DIGITAL BANKING TRANSFORMATION ============
  const bankingChallenges = [
    "Ensuring robust cybersecurity measures to protect customer data",
    "Achieving regulatory compliance in different jurisdictions",
    "Managing the change from traditional to digital (internal & external)",
    "Ensuring uninterrupted service availability during high traffic",
    "Maintaining and enhancing customer trust in a digital environment",
  ];

  const bankingOpportunities = [
    "Growth in NFC-enabled point-of-sale terminals",
    "Integration of loyalty programs within mobile wallets",
    "Mobile wallets evolving into comprehensive financial management tools",
  ];

  // ============ DATA SAFETY & SECURITY MEASURES ============
  const securityMeasures = [
    {
      text: "Encryption – converting data into unreadable formats",
      icon: <Lock />,
      color: "#3B82F6",
    },
    {
      text: "Multi-Factor Authentication (MFA) for user verification",
      icon: <Fingerprint />,
      color: "#10B981",
    },
    {
      text: "Compliance with GDPR, PCI DSS, and other regulations",
      icon: <BadgeCheck />,
      color: "#8B5CF6",
    },
    {
      text: "Encryption in transit and at rest",
      icon: <Shield />,
      color: "#F59E0B",
    },
    {
      text: "Regular software updates and patching",
      icon: <RefreshCw />,
      color: "#EC4899",
    },
  ];

  // ============ REGULATORY COMPLIANCE ============
  const keyRegulations = [
    "Anti-Money Laundering (AML) procedures",
    "Know Your Customer (KYC) requirements",
    "Data protection and privacy laws (GDPR, etc.)",
    "Electronic transaction authentication standards",
    "Licensing of digital payment systems",
    "Cryptocurrency regulations (including ICOs)",
  ];

  const complianceBestPractices = [
    "Regularly updating company policies",
    "Implementing robust data protection measures",
    "Conducting regular compliance training",
    "Collaborating with legal experts",
    "Utilizing technology solutions that automate compliance",
  ];

  // ============ EMERGING TECHNOLOGIES ============
  const emergingTechnologies = [
    {
      name: "AI & Machine Learning",
      desc: "Fraud detection, risk assessment, personalized recommendations",
      icon: <Brain />,
      color: "#3B82F6",
    },
    {
      name: "Blockchain & DLT",
      desc: "Cryptocurrencies, smart contracts, cross-border payments, identity",
      icon: <LinkChain />,
      color: "#10B981",
    },
    {
      name: "Robotic Process Automation (RPA)",
      desc: "Data entry, report generation, compliance checks, onboarding",
      icon: <Repeat />,
      color: "#8B5CF6",
    },
    {
      name: "Internet of Things (IoT)",
      desc: "Personalized services, behavioral risk assessment, real-time fraud monitoring",
      icon: <Radio />,
      color: "#F59E0B",
    },
    {
      name: "Cloud Computing",
      desc: "Scalable, cost-effective infrastructure and secure data storage",
      icon: <Cloud />,
      color: "#EC4899",
    },
    {
      name: "Open Banking & APIs",
      desc: "Secure data sharing, integration with banking systems",
      icon: <Plug />,
      color: "#06B6D4",
    },
    {
      name: "Biometrics",
      desc: "Fingerprint, facial recognition, voice recognition for secure authentication",
      icon: <Scan />,
      color: "#3B82F6",
    },
  ];

  // ============ PROGRAMMING LANGUAGES ============
  const programmingLanguages = [
    "Java",
    "Python",
    "C#",
    "JavaScript",
    "TypeScript",
    "Kotlin",
    "Swift",
    "Go",
    "Ruby",
    "PHP",
    "Solidity",
  ];

  // ============ TRUSTED BY ============
  const trustedCompanies = [
    "Microsoft",
    "Amazon",
    "Google",
    "IBM",
    "SAP",
    "Oracle",
  ];

  // ============ INDUSTRIES ============
  const industries = [
    {
      name: "E-Commerce & Retail",
      icon: "🛍️",
      desc: "Mobile shopping experiences, product catalogs, secure payment gateways, and personalized recommendations with seamless checkout flows.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      color: "#3B82F6",
    },
    {
      name: "FinTech & Banking",
      icon: "🏦",
      desc: "Secure mobile banking, investment platforms, digital wallets, and financial management tools with real-time transaction processing.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      color: "#10B981",
    },
    {
      name: "Healthcare & MedTech",
      icon: "🏥",
      desc: "Telemedicine platforms, patient portals, health tracking apps, and medical management systems with HIPAA-compliant security.",
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80",
      color: "#8B5CF6",
    },
    {
      name: "Media & Entertainment",
      icon: "💳",
      desc: "Engagement-focused software to enhance content delivery, streaming platforms, digital publishing, content management, and audience analytics for media companies.",
      image:
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
      color: "#F59E0B",
    },
    {
      name: "Education & eLearning",
      icon: "💰",
      desc: "Custom eLearning solutions for changing needs including LMS platforms, virtual classrooms, educational apps, skill assessment tools, and corporate training systems.",
      image:
        "https://images.unsplash.com/photo-1593444285563-4479fb28226e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVkdWNhdGlvbiUyMGFuZCUyMGUtbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
      color: "#EC4899",
    },
    {
      name: "Manufacturing",
      icon: "₿",
      desc: "Industrial software solutions for smart factories, supply chain optimization, quality control, IoT integration, and predictive maintenance systems.",
      image:
        "https://plus.unsplash.com/premium_photo-1664297997167-88170c57bc35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFudWZhY3R1cmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      color: "#06B6D4",
    },
  ];

  // ============ FAQS ============
  const faqs = [
    {
      question:
        "How do you ensure regulatory compliance across different jurisdictions?",
      answer:
        "We work closely with legal and compliance professionals to understand and implement specific requirements. Our solutions are built with compliance by design – incorporating AML/KYC procedures, data protection measures, and audit trails. We also provide regular updates to keep pace with evolving regulations.",
    },
    {
      question:
        "What security measures do you implement in FinTech applications?",
      answer:
        "We employ end-to-end encryption, multi-factor authentication, secure coding practices, regular penetration testing, and compliance with standards like PCI DSS and GDPR. For high-risk transactions, we integrate AI-based fraud detection and blockchain for immutable audit logs.",
    },
    {
      question: "Can you integrate with existing core banking systems?",
      answer:
        "Absolutely. We specialise in integrating modern FinTech applications with legacy core banking systems using secure APIs, middleware, and microservices architecture – ensuring data consistency and real-time synchronisation.",
    },
    {
      question: "What emerging technologies do you use in FinTech development?",
      answer:
        "We leverage AI/ML for fraud detection and personalization, blockchain for secure transactions, RPA for process automation, IoT for real-time data, and cloud-native architectures for scalability. Our team stays at the forefront of FinTech innovation.",
    },
    {
      question: "How quickly can you scale a FinTech development team?",
      answer:
        "We can onboard dedicated FinTech developers within 48 hours. Our flexible engagement models allow you to scale from 1 to 50+ engineers as your project grows – with no long-term commitment.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes. Every project includes post-launch support, security monitoring, performance optimisation, and regular updates. We offer SLAs tailored to your business criticality.",
    },
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
                <Sparkles size={18} /> FinTech Software Development
              </div>
              <h1 className={styles.mainTitle}>
                FinTech & Financial{" "}
                <span className={styles.highlight}>Services</span>
              </h1>
              {/* <p className={styles.subheadline}>
                A leading financial software development company, we have carved
                a niche in fintech, transitioning from basic mobile apps to
                expansive transaction networks, always emphasizing efficiency
                and security.
              </p> */}
              <p className={styles.heroDescription}>
                From client-facing apps to complex processing systems, process
                automation, and fraud detection – we deliver secure, scalable,
                and compliant FinTech solutions trusted by startups and Fortune
                500 companies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className={styles.buttonContainer}
            >
              <Link href="/contact" className={styles.ctaButton}>
                Start FinTech Solution
                <ArrowRight className={styles.buttonIcon} />
              </Link>
              <Link href="#solutions" className={styles.secondaryButton}>
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
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face"
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className={styles.clientImage}
                  />
                </div>
              </div>
              <div className={styles.testimonialContent}>
                <MessageSquare className={styles.quoteIcon} />
                <p className={styles.testimonialText}>
                  &quot;{testimonial.content}&quot;
                </p>
                <div className={styles.testimonialAuthor}>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
                <div className={styles.ratings}>
                  <div className={styles.ratingItem}>
                    <div className={styles.ratingStars}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className={styles.starIcon}>
                          ★
                        </span>
                      ))}
                    </div>
                    <div className={styles.ratingText}>FinTech Excellence</div>
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
          <p className={styles.trustedLabel}>
            Trusted by startups and Fortune 500 companies
          </p>
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
                <div className={styles.logoPlaceholder}>{company}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINTECH SOLUTIONS SECTION ===== */}
      <section className={styles.solutionsSection} id="solutions">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            FinTech Software{" "}
            <span className={styles.titleHighlight}>Solutions We Deliver</span>
          </h2>
          <p className={styles.sectionDescription}>
            From basic mobile apps to expansive transaction networks – always
            emphasizing efficiency and security.
          </p>
        </div>

        <div className={styles.solutionsGrid}>
          {fintechSolutions.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.solutionCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div
                className={styles.solutionIcon}
                style={{ color: item.color }}
              >
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p className={styles.solutionDescription}>{item.description}</p>
              <div className={styles.solutionFeatures}>
                {item.features.map((feature, idx) => (
                  <span key={idx} className={styles.solutionFeature}>
                    <CheckCircle size={12} style={{ color: item.color }} />
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FINTECH DEVELOPMENT SERVICES ===== */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            FinTech Software{" "}
            <span className={styles.titleHighlight}>Development Services</span>
          </h2>
          <p className={styles.sectionDescription}>
            We create, design, and develop software solutions for diverse
            financial institutions – building robust and competitive FinTech
            products.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {fintechServices.map((service, index) => (
            <motion.div
              key={index}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div
                className={styles.serviceIcon}
                style={{ color: service.color }}
              >
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.servicePoints}>
                {service.points.map((point, idx) => (
                  <span key={idx} className={styles.servicePoint}>
                    • {point}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className={styles.benefitsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Benefits of Custom{" "}
            <span className={styles.titleHighlight}>FinTech Software</span>
          </h2>
          <p className={styles.sectionDescription}>
            Why you should choose FinTech software development solutions for
            your next project.
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {fintechBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={styles.benefitIcon}
                style={{
                  backgroundColor: `${benefit.color}15`,
                  color: benefit.color,
                }}
              >
                {benefit.icon}
              </div>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== WHY PARTNER WITH US – REDESIGNED WITH BACKGROUND IMAGE ===== */}
      <section className={styles.partnerSection}>
        <div className={styles.partnerBackground}>
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80"
            alt="FinTech partnership background"
            fill
            className={styles.partnerBgImage}
            priority
          />
          <div className={styles.partnerOverlay}></div>
        </div>
        <div className={styles.partnerContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ color: "white" }}>
              Why Partner with{" "}
              <span className={styles.titleHighlight}>ValueCoders</span> for
              FinTech Innovation?
            </h2>
            <p
              className={styles.sectionDescription}
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              We’re not just another FinTech software development company –
              we’re your strategic ally in the rapidly evolving financial
              technology landscape.
            </p>
          </div>

          <div className={styles.partnerGrid}>
            {whyPartner.map((item, index) => (
              <motion.div
                key={index}
                className={styles.partnerCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div
                  className={styles.partnerIcon}
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIGITAL BANKING TRANSFORMATION ===== */}
      <section className={styles.transformationSection}>
        <div className={styles.transformationGrid}>
          <div className={styles.transformationContent}>
            <div
              className={styles.sectionHeader}
              style={{ textAlign: "left", marginBottom: "2rem" }}
            >
              <h2 className={styles.sectionTitle}>
                Digital Banking{" "}
                <span className={styles.titleHighlight}>Transformation</span>
              </h2>
              <p
                className={styles.sectionDescription}
                style={{ marginLeft: 0 }}
              >
                Challenges and opportunities in the rise of digital-only banks.
              </p>
            </div>
            <div className={styles.transformationLists}>
              <div className={styles.transformationCol}>
                <h3 className={styles.colTitle}>Key Challenges</h3>
                <ul className={styles.challengeList}>
                  {bankingChallenges.map((item, idx) => (
                    <li key={idx}>
                      <AlertTriangle size={16} style={{ color: "#EF4444" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.transformationCol}>
                <h3 className={styles.colTitle}>Opportunities</h3>
                <ul className={styles.opportunityList}>
                  {bankingOpportunities.map((item, idx) => (
                    <li key={idx}>
                      <TrendingUp size={16} style={{ color: "#10B981" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.transformationImageWrapper}>
            <div className={styles.transformationImageOverlay}></div>
            <Image
              src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80"
              alt="Digital banking transformation"
              fill
              className={styles.transformationImage}
            />
          </div>
        </div>
      </section>

      {/* ===== DATA SAFETY & SECURITY ===== */}
      <section className={styles.securitySection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Ensuring Data Safety &{" "}
            <span className={styles.titleHighlight}>Security in FinTech</span>
          </h2>
          <p className={styles.sectionDescription}>
            FinTech software employs several measures to ensure the safety and
            security of data.
          </p>
        </div>

        <div className={styles.securityGrid}>
          {securityMeasures.map((item, index) => (
            <motion.div
              key={index}
              className={styles.securityCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div
                className={styles.securityIcon}
                style={{ color: item.color }}
              >
                {item.icon}
              </div>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== REGULATORY COMPLIANCE ===== */}
      <section className={styles.complianceSection}>
        <div className={styles.complianceGrid}>
          <div className={styles.complianceImageWrapper}>
            <div className={styles.complianceImageOverlay}></div>
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="Regulatory compliance"
              fill
              className={styles.complianceImage}
            />
          </div>
          <div className={styles.complianceContent}>
            <div
              className={styles.sectionHeader}
              style={{ textAlign: "left", marginBottom: "2rem" }}
            >
              <h2 className={styles.sectionTitle}>
                Navigating{" "}
                <span className={styles.titleHighlight}>
                  Regulatory Compliance
                </span>{" "}
                in FinTech
              </h2>
              <p
                className={styles.sectionDescription}
                style={{ marginLeft: 0 }}
              >
                Key regulations and best practices for maintaining compliance.
              </p>
            </div>
            <div className={styles.complianceLists}>
              <div className={styles.complianceCol}>
                <h3 className={styles.colTitle}>Key Regulations</h3>
                <ul className={styles.regulationList}>
                  {keyRegulations.map((item, idx) => (
                    <li key={idx}>
                      <BadgeCheck size={16} style={{ color: "#3B82F6" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.complianceCol}>
                <h3 className={styles.colTitle}>Best Practices</h3>
                <ul className={styles.practiceList}>
                  {complianceBestPractices.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} style={{ color: "#10B981" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EMERGING TECHNOLOGIES ===== */}
      <section className={styles.techSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Emerging Technologies in{" "}
            <span className={styles.titleHighlight}>FinTech Development</span>
          </h2>
          <p className={styles.sectionDescription}>
            Several emerging technologies are shaping the landscape of fintech
            software development.
          </p>
        </div>

        <div className={styles.techGrid}>
          {emergingTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              className={styles.techCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className={styles.techIcon} style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <div className={styles.techContent}>
                <h4>{tech.name}</h4>
                <p>{tech.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== PROGRAMMING LANGUAGES ===== */}
      <section className={styles.languagesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Programming Languages for{" "}
            <span className={styles.titleHighlight}>FinTech Development</span>
          </h2>
          <p className={styles.sectionDescription}>
            We use a wide range of modern languages to build secure, scalable
            financial software.
          </p>
        </div>

        <div className={styles.languagesGrid}>
          {programmingLanguages.map((lang, index) => (
            <motion.div
              key={index}
              className={styles.languageCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
            >
              <Code size={20} style={{ color: "#3B82F6" }} />
              <span>{lang}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== INDUSTRIES SECTION ===== */}
      <section className={styles.industriesSection}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>FinTech Industries We Serve</h2>
            <p className={styles.sectionDescription}>
              Partnering with businesses across the financial sector to deliver
              innovative, compliant, and secure solutions.
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
                  <div
                    className={`${styles.industryOverlay} ${hoveredIndustry === idx ? styles.active : ""}`}
                  ></div>
                  <div className={styles.industryContent}>
                    <h4 className={styles.industryName}>{industry.name}</h4>
                    <AnimatePresence>
                      {hoveredIndustry === idx && (
                        <motion.div
                          className={styles.industryDescription}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
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
            Frequently Asked{" "}
            <span className={styles.titleHighlight}>Questions</span>
          </h2>
          <p className={styles.sectionDescription}>
            Get answers to common questions about FinTech software development
            and our expertise.
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
                  animate={{ opacity: 1, height: "auto" }}
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
            <h3 className={styles.ctaTitle}>
              Revolutionize Your FinTech Strategy
            </h3>
            <p className={styles.ctaDescription}>
              Let&apos;s collaboratively craft the future of finance, ensuring
              you stay ahead of industry shifts.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Build Your FinTech Solution
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

// Custom icon component (not in lucide-react)
const LinkChain = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
