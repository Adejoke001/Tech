"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Code,
  Palette,
  Zap,
  Users,
  Shield,
  TrendingUp,
  CheckCircle,
  Award,
  MessageSquare,
  Sparkles,
  Cloud,
  ChevronRight,
  Globe,
  Rocket,
  HelpCircle,
  ArrowRight,
  GitBranch,
  FileText,
  HeadphonesIcon,
  RefreshCw,
  ShieldCheck,
  DownloadCloud,
  Workflow,
} from "lucide-react";
import styles from "./mobiledev.module.css";

export default function MobileAppDevelopersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
  const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null);
  const [activeTechTab, setActiveTechTab] = useState<string>(
    "programming-languages",
  );

  // Testimonial
  const testimonial = {
    name: "Jessica Chen",
    role: "Product Director, RetailTech Pro",
    content:
      "BBNTech's mobile developers delivered a cross-platform app that reduced our development time by 40% while maintaining native-like performance on both iOS and Android.",
    rating: 5,
    project: "Retail E-Commerce Platform",
  };

  // Mobile App Expertise Areas
  const mobileExpertise = [
    {
      id: 1,
      title: "Custom Mobile App Development",
      description:
        "Native Android (Kotlin/Java), Native iOS (Swift/Objective-C), and cross-platform apps using Flutter, React Native, and Xamarin.",
      icon: <Smartphone className={styles.expertiseIcon} />,
      color: "#3B82F6",
      features: [
        "Native Android development",
        "Native iOS development",
        "Flutter apps",
        "React Native apps",
        "Xamarin development",
      ],
    },
    {
      id: 2,
      title: "UI/UX Design & Mobile Product Engineering",
      description:
        "Intuitive navigation, modern design patterns, wireframing, prototyping, and adaptive layouts for all screen sizes.",
      icon: <Palette className={styles.expertiseIcon} />,
      color: "#10B981",
      features: [
        "User journey mapping",
        "Wireframing & prototyping",
        "Responsive mobile layouts",
        "Modern design patterns",
      ],
    },
    {
      id: 3,
      title: "API Development & Third-Party Integration",
      description:
        "RESTful & GraphQL API integration, real-time communication with WebSockets, and social media, payment, and map integrations.",
      icon: <GitBranch className={styles.expertiseIcon} />,
      color: "#8B5CF6",
      features: [
        "REST/GraphQL APIs",
        "WebSocket integration",
        "Payment gateway integration",
        "Social media integration",
      ],
    },
    {
      id: 4,
      title: "Mobile App Modernization",
      description:
        "Migrating legacy apps to modern tech stacks, converting hybrid apps to native or cross-platform, and updating UI/UX.",
      icon: <RefreshCw className={styles.expertiseIcon} />,
      color: "#F59E0B",
      features: [
        "Legacy app migration",
        "Hybrid to native conversion",
        "UI/UX modernization",
        "Tech stack upgrades",
      ],
    },
    {
      id: 5,
      title: "Performance Optimization",
      description:
        "CPU, GPU, memory optimization, battery & network usage tuning, faster load times, and smooth user interactions.",
      icon: <Zap className={styles.expertiseIcon} />,
      color: "#EC4899",
      features: [
        "CPU/GPU optimization",
        "Battery usage tuning",
        "Network optimization",
        "Load time improvement",
      ],
    },
    {
      id: 6,
      title: "Cloud-Connected Mobile Solutions",
      description:
        "Firebase, AWS, GCP, Azure Mobile App services, serverless architecture, and real-time sync for multi-device experiences.",
      icon: <Cloud className={styles.expertiseIcon} />,
      color: "#06B6D4",
      features: [
        "Firebase integration",
        "AWS Mobile services",
        "Serverless architecture",
        "Real-time sync",
      ],
    },
    {
      id: 7,
      title: "Mobile App Testing & QA",
      description:
        "Manual, automated & regression testing with XCTest, Espresso, Appium, Detox, and device lab testing across OS versions.",
      icon: <ShieldCheck className={styles.expertiseIcon} />,
      color: "#8B5CF6",
      features: [
        "Automated testing",
        "Device lab testing",
        "Regression testing",
        "Cross-platform QA",
      ],
    },
    {
      id: 8,
      title: "App Deployment & Management",
      description:
        "App Store & Play Store submission, compliance with Apple & Google reviews, release management, versioning & rollback strategies.",
      icon: <DownloadCloud className={styles.expertiseIcon} />,
      color: "#10B981",
      features: [
        "Store submission",
        "Compliance management",
        "Release management",
        "Version control",
      ],
    },
  ];

  const comparisonFactors = [
    "timeToHire",
    "timeToStart",
    "trainingCost",
    "scalingTime",
    "risk",
    "deliverySupport",
  ] as const;

  // Technology Stack
  const technologyStack = {
    "programming-languages": {
      title: "Programming Languages",
      color: "#3B82F6",
      technologies: [
        "Kotlin",
        "Swift",
        "Java",
        "Objective-C",
        "Dart",
        "JavaScript",
        "TypeScript",
        "C#",
      ],
    },
    "environments-frameworks": {
      title: "Environments & Frameworks",
      color: "#10B981",
      technologies: [
        "Flutter",
        "React Native",
        "Xamarin",
        "Android SDK",
        "iOS SDK",
        "Ionic",
        "NativeScript",
      ],
    },
    "data-storage": {
      title: "Data Storage & Databases",
      color: "#8B5CF6",
      technologies: [
        "Firebase/Firestore",
        "Realm",
        "Core Data",
        "SQLite",
        "MongoDB Realm",
        "AWS Amplify DataStore",
      ],
    },
    "platforms-apis": {
      title: "Platforms & APIs",
      color: "#F59E0B",
      technologies: [
        "REST APIs",
        "GraphQL",
        "Apple Pay",
        "Google Pay",
        "Apple Maps",
        "Google Maps",
        "Firebase",
        "AWS Amplify",
      ],
    },
    "qa-tools": {
      title: "QA Tools",
      color: "#EC4899",
      technologies: [
        "XCTest",
        "Espresso",
        "Appium",
        "Detox",
        "Firebase Test Lab",
        "BrowserStack",
      ],
    },
    devops: {
      title: "DevOps",
      color: "#06B6D4",
      technologies: [
        "Bitrise",
        "Codemagic",
        "GitHub Actions",
        "Jenkins",
        "Fastlane",
        "Docker",
      ],
    },
  };

  // Development Process
  const developmentProcess = [
    {
      step: 1,
      title: "Discovery & Strategy",
      description:
        "Understanding your app requirements, target audience, and platform strategy.",
      icon: <FileText />,
    },
    {
      step: 2,
      title: "UI/UX Design",
      description:
        "Creating wireframes, prototypes, and intuitive user interfaces for mobile.",
      icon: <Palette />,
    },
    {
      step: 3,
      title: "Architecture Planning",
      description:
        "Designing scalable mobile architecture and selecting appropriate tech stack.",
      icon: <Workflow />,
    },
    {
      step: 4,
      title: "Development",
      description:
        "Building native or cross-platform apps with clean, maintainable code.",
      icon: <Code />,
    },
    {
      step: 5,
      title: "Testing & QA",
      description:
        "Comprehensive testing across devices and platforms for quality assurance.",
      icon: <ShieldCheck />,
    },
    {
      step: 6,
      title: "Deployment & Launch",
      description: "App store submission, launch, and post-launch monitoring.",
      icon: <Rocket />,
    },
  ];

  // Benefits Section
  const benefits = [
    {
      title: "Cross-Platform Reach",
      description:
        "Seamless compatibility across iOS, Android, and web with single codebase solutions.",
      icon: <Globe />,
      stats: "90% Code Reuse",
    },
    {
      title: "Native-Like Performance",
      description:
        "Optimized mobile apps with smooth animations and responsive touch interactions.",
      icon: <Zap />,
      stats: "60 FPS Performance",
    },
    {
      title: "Modern Tech Stack",
      description:
        "Built with latest frameworks and tools for future-proof mobile solutions.",
      icon: <TrendingUp />,
      stats: "Latest SDKs",
    },
    {
      title: "Scalable Architecture",
      description:
        "Mobile architectures designed to grow with your user base and feature set.",
      icon: <Cloud />,
      stats: "Millions of Users",
    },
  ];

  // Pricing Plans
  const pricingPlans = [
    {
      title: "Dedicated Development Team",
      price: "$4,000 – $10,000/month",
      description:
        "Small-to-mid-size team (2-4 members) for building or scaling standard mobile applications.",
      features: [
        "2-4 dedicated developers",
        "Standard web/mobile apps",
        "Basic project management",
        "Regular code updates",
      ],
      color: "#3B82F6",
    },
    {
      title: "Team with Project Manager",
      price: "$10,000 – $25,000/month",
      description:
        "Fully managed delivery with project manager handling sprints and communication (3-8 members).",
      features: [
        "3-8 team members",
        "Dedicated project manager",
        "Agile sprints management",
        "Comprehensive documentation",
      ],
      color: "#10B981",
    },
    {
      title: "Extended Team for Scaling",
      price: "$25,000 – $35,000/month",
      description:
        "Augment your in-house capacity with 8-11 dedicated professionals for product scaling.",
      features: [
        "8-11 professionals",
        "Advanced skill sets",
        "Product scaling focus",
        "Enterprise support",
      ],
      color: "#8B5CF6",
    },
    {
      title: "Specialized Development Pods",
      price: "$35,000 – $50,000/month",
      description:
        "Cross-functional pods focused on AI/ML, data engineering, or cloud migration (11-16 members).",
      features: [
        "11-16 specialists",
        "AI/ML integration",
        "Cross-functional teams",
        "Advanced architecture",
      ],
      color: "#F59E0B",
    },
  ];

  // Hiring Models Comparison
  const hiringComparison = [
    {
      model: "In-House Team",
      timeToHire: "4-12 weeks",
      timeToStart: "2-10 weeks",
      trainingCost: "$10,000-$30,000",
      scalingTime: "4-16 weeks",
      risk: "Low",
      deliverySupport: "Some",
    },
    {
      model: "Freelancers",
      timeToHire: "1-12 weeks",
      timeToStart: "1-10 weeks",
      trainingCost: "0",
      scalingTime: "Variable",
      risk: "High",
      deliverySupport: "Limited",
    },
    {
      model: "BBNTech",
      timeToHire: "1 day - 2 weeks",
      timeToStart: "1 day - 2 weeks",
      trainingCost: "0",
      scalingTime: "48 hours - 1 week",
      risk: "Extremely Low",
      deliverySupport: "Full",
    },
  ];

  // Stats Section
  const companyStats = [
    { value: "700+", label: "Full-time Developers", icon: <Users /> },
    { value: "20+", label: "Years Experience", icon: <Award /> },
    { value: "4500+", label: "Satisfied Clients", icon: <HeadphonesIcon /> },
    { value: "98%", label: "Project Success Rate", icon: <CheckCircle /> },
  ];

  // What We Build Section
  const whatWeBuild = [
    {
      title: "High-Quality Mobile Apps",
      description:
        "Native and cross-platform applications for Android, iOS with premium user experience.",
      icon: <Smartphone />,
      examples: [
        "E-commerce apps",
        "Social media platforms",
        "Productivity tools",
        "Entertainment apps",
      ],
      color: "#3B82F6",
    },
    {
      title: "Secure Mobile Backends",
      description:
        "Robust APIs and cloud integrations with enterprise-grade security measures.",
      icon: <Shield />,
      examples: [
        "Payment processing",
        "User authentication",
        "Data synchronization",
        "Cloud storage",
      ],
      color: "#10B981",
    },
    {
      title: "Feature-Rich Applications",
      description:
        "Apps with advanced features like payments, maps, and real-time data capabilities.",
      icon: <Zap />,
      examples: [
        "Real-time chat",
        "Location services",
        "In-app purchases",
        "Push notifications",
      ],
      color: "#8B5CF6",
    },
    {
      title: "Scalable Mobile Solutions",
      description:
        "Architected for growth with ability to handle millions of users seamlessly.",
      icon: <TrendingUp />,
      examples: [
        "Scalable infrastructure",
        "Load balancing",
        "Database optimization",
        "CDN integration",
      ],
      color: "#F59E0B",
    },

    {
      title: "Cloud-Connected Mobile Solutions",
      description:
        "Firebase, AWS, GCP, Azure Mobile App services with serverless architecture and real-time sync for multi-device experiences.",
      icon: <Cloud />,
      examples: [
        "Firebase integration",
        "AWS Mobile services",
        "Serverless architecture",
        "Real-time data sync",
      ],
      color: "#0891b2",
    },
    {
      title: "API Development & Third-Party Integration",
      description:
        "RESTful & GraphQL API integration with real-time communication, social media, payment, and map integrations.",
      icon: <GitBranch />,
      examples: [
        "REST/GraphQL APIs",
        "Payment gateway integration",
        "Social media login",
        "Map service integration",
      ],
      color: "#dc2626",
    },
  ];

  // Industries Section
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
  ];

  // FAQs
  const faqs = [
    {
      question: "How quickly can I hire mobile app developers from BBNTech?",
      answer:
        "We can onboard dedicated mobile app developers in 24-48 hours. Our vetting process ensures you get pre-screened, experienced developers who match your specific mobile development requirements.",
    },
    {
      question:
        "What platforms and technologies do your developers specialize in?",
      answer:
        "Our developers are experts in iOS (Swift, Objective-C), Android (Kotlin, Java), and cross-platform frameworks like Flutter and React Native. We also work with mobile backend technologies, cloud services, and testing tools.",
    },
    {
      question: "Do you offer a trial period for hired developers?",
      answer:
        "Yes, we offer a 7-day risk-free trial period. This allows you to evaluate the developer's skills and fit with your team before making a long-term commitment.",
    },
    {
      question: "How do you ensure app quality and performance?",
      answer:
        "We follow mobile-specific best practices, conduct rigorous testing across devices, optimize for performance and battery life, and use modern tooling for continuous integration and deployment.",
    },
    {
      question: "Can your developers work with our existing backend systems?",
      answer:
        "Absolutely. Our mobile developers are experienced in API integration and can work seamlessly with your existing backend infrastructure, databases, and third-party services.",
    },
    {
      question: "What kind of support do you provide after app launch?",
      answer:
        "We provide ongoing maintenance, updates, performance monitoring, and feature enhancements. We also handle app store updates and compliance requirements.",
    },
  ];

  // Why Choose BBNTech Features
  const whyChooseFeatures = [
    "Workstatus™ powered Proof of Work",
    "Top 1% developers, rigorously vetted",
    "Dedicated project manager",
    "Flexible contracts, transparent pricing",
    "Zero hiring fee, quick onboarding",
    "Comprehensive code documentation",
    "Adherence to data security practices",
    "Language/time-zone compatible staff",
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
                <Sparkles size={18} /> Top 1% Mobile Developers
              </div>
              <h1 className={styles.mainTitle}>
                Hire Mobile App{" "}
                <span className={styles.highlight}>Developers</span>
              </h1>
              <p className={styles.subheadline}>
                Get mobile apps built faster, smarter, and exactly the way you
                envision
              </p>
              <p className={styles.heroDescription}>
                Work with India&apos;s top mobile developers, handpicked for
                quality and 5+ years of experience. Launch with confidence using
                our proven mobile development expertise across iOS, Android, and
                cross-platform solutions.
              </p>
            </motion.div>

            {/* <div className={styles.benefitsGrid}>
                            <div className={styles.benefitItem}>
                                <CheckCircle size={18} />
                                <span>Proof-of-work timesheets (Workstatus™)</span>
                            </div>
                            <div className={styles.benefitItem}>
                                <Shield size={18} />
                                <span>Full IP ownership + NDA protection</span>
                            </div>
                            <div className={styles.benefitItem}>
                                <Smartphone size={18} />
                                <span>Flexible contracts with transparent pricing</span>
                            </div>
                            <div className={styles.benefitItem}>
                                <Zap size={18} />
                                <span>7-day risk-free trial and zero hiring overhead</span>
                            </div>
                        </div> */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className={styles.buttonContainer}
            >
              <Link href="/contact" className={styles.ctaButton}>
                Hire Developers Now
                <ArrowRight className={styles.buttonIcon} />
              </Link>
              <Link href="#expertise" className={styles.secondaryButton}>
                View Our Expertise
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Testimonial Card */}
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
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
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
                    <div className={styles.ratingText}>Mobile Excellence</div>
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
            {["Microsoft", "Amazon", "Google", "IBM", "SAP", "Oracle"].map(
              (company, idx) => (
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
              ),
            )}
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE SECTION ===== */}
      <section className={styles.expertiseSection} id="expertise">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Expertise of Our{" "}
            <span className={styles.titleHighlight}>Mobile App Developers</span>
          </h2>
          <p className={styles.sectionDescription}>
            Performance-focused mobile development that strengthens user
            experience and supports scalable product growth—helping brands
            achieve higher engagement and ROI.
          </p>
        </div>

        <div className={styles.expertiseGrid}>
          {mobileExpertise.map((expertise, index) => (
            <motion.div
              key={expertise.id}
              className={`${styles.expertiseCard} ${hoveredExpertise === expertise.id ? styles.hovered : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredExpertise(expertise.id)}
              onMouseLeave={() => setHoveredExpertise(null)}
            >
              <div className={styles.expertiseHeader}>
                <div
                  className={styles.expertiseIconWrapper}
                  style={{
                    backgroundColor: `${expertise.color}20`,
                    color: expertise.color,
                  }}
                >
                  {expertise.icon}
                </div>
                <h3 className={styles.expertiseTitle}>{expertise.title}</h3>
              </div>

              <p className={styles.expertiseDescription}>
                {expertise.description}
              </p>

              <div className={styles.expertiseDetails}>
                <ul className={styles.detailsList}>
                  {expertise.features.map((feature, idx) => (
                    <li key={idx} className={styles.detailItem}>
                      <CheckCircle
                        className={styles.checkIcon}
                        style={{ color: expertise.color }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/hire/mobile/${expertise.id}`}
                  className={styles.learnMoreLink}
                >
                  Learn More
                  <ChevronRight className={styles.linkIcon} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== TECHNOLOGY STACK SECTION ===== */}
      <section className={styles.techStackSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Advanced Technologies Our{" "}
            <span className={styles.titleHighlight}>Developers Excel In</span>
          </h2>
          <p className={styles.sectionDescription}>
            Our mobile app developers specialize in the entire mobile ecosystem,
            delivering high-performing, intuitive, and scalable applications for
            iOS, Android, and cross-platform environments.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className={styles.techTabs}>
          {Object.keys(technologyStack).map((tabKey) => (
            <button
              key={tabKey}
              className={`${styles.techTab} ${activeTechTab === tabKey ? styles.active : ""}`}
              onClick={() => setActiveTechTab(tabKey)}
              style={{
                borderColor:
                  activeTechTab === tabKey
                    ? technologyStack[tabKey as keyof typeof technologyStack]
                        .color
                    : "transparent",
              }}
            >
              <span>
                {technologyStack[tabKey as keyof typeof technologyStack].title}
              </span>
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className={styles.techContent}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTechTab}
              className={styles.techGrid}
              data-tab={activeTechTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {technologyStack[
                activeTechTab as keyof typeof technologyStack
              ].technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className={styles.techItem}
                  style={{
                    backgroundColor: `${technologyStack[activeTechTab as keyof typeof technologyStack].color}15`,
                    borderColor:
                      technologyStack[
                        activeTechTab as keyof typeof technologyStack
                      ].color,
                    color:
                      technologyStack[
                        activeTechTab as keyof typeof technologyStack
                      ].color,
                  }}
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section className={styles.pricingSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Cost of Hiring{" "}
            <span className={styles.titleHighlight}>Dedicated Teams</span>
          </h2>
          <p className={styles.sectionDescription}>
            The cost of hiring a dedicated development team depends on several
            factors - team size, engagement model, management involvement, and
            project complexity.
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
              <div
                className={styles.pricingHeader}
                style={{ borderColor: plan.color }}
              >
                <h3>{plan.title}</h3>
                <div className={styles.pricingAmount}>{plan.price}</div>
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
              <Link
                href="/contact"
                className={styles.pricingButton}
                style={{ backgroundColor: plan.color }}
              >
                Get Started
                <ArrowRight className={styles.buttonIcon} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className={styles.benefitsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Why Choose Mobile App{" "}
            <span className={styles.titleHighlight}>Development?</span>
          </h2>
          <p className={styles.sectionDescription}>
            Enhance UI/UX across devices and stay ahead with mobile apps built
            on the latest technologies and frameworks by our experienced
            developers.
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
              <div className={styles.benefitStat}>{benefit.stats}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== DEVELOPMENT PROCESS ===== */}
      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Our Mobile App Development{" "}
            <span className={styles.titleHighlight}>Process</span>
          </h2>
          <p className={styles.sectionDescription}>
            A structured approach to delivering high-quality mobile solutions
            that exceed expectations across all platforms and devices.
          </p>
        </div>

        <div className={styles.processGrid}>
          {developmentProcess.map((step, index) => (
            <motion.div
              key={step.step}
              className={styles.processCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.processNumber}>0{step.step}</div>
              <div className={styles.processIcon}>{step.icon}</div>
              <h3 className={styles.processTitle}>{step.title}</h3>
              <p className={styles.processDescription}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== WHAT WE BUILD SECTION ===== */}
      <section className={styles.buildSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            What Mobile App Experts{" "}
            <span className={styles.titleHighlight}>Can Build</span>
          </h2>
          <p className={styles.sectionDescription}>
            From simple utilities to complex enterprise solutions, we deliver
            mobile applications that engage users and drive business growth.
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
              <div
                className={styles.buildIcon}
                style={{ color: project.color }}
              >
                {project.icon}
              </div>
              <h3>{project.title}</h3>
              <p className={styles.buildDescription}>{project.description}</p>
              <ul className={styles.buildExamples}>
                {project.examples.map((example, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} style={{ color: project.color }} />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== WHY CHOOSE SECTION ===== */}
      <section className={styles.whyChooseSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Why Hire Mobile App Developers{" "}
            <span className={styles.titleHighlight}>From BBNTech?</span>
          </h2>
          <p className={styles.sectionDescription}>
            ValueCoders provides remote mobile app developers for all your
            mobile app development requirements. Hiring Indian app developers
            from BBNTech is a 100% transparent process.
          </p>
        </div>

        <div className={styles.whyChooseGrid}>
          {whyChooseFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.whyChooseCard}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <CheckCircle className={styles.checkIcon} />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== HIRING COMPARISON SECTION ===== */}
      <section className={styles.comparisonSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Comparative Analysis:{" "}
            <span className={styles.titleHighlight}>
              In-House, Freelancers, or BBNTech
            </span>
          </h2>
          <p className={styles.sectionDescription}>
            We offer a dedicated team of highly skilled mobile app developers.
            Here is a quick comparison between different hiring options.
          </p>
        </div>

        <div className={styles.comparisonTable}>
          <div className={styles.tableHeader}>
            <div className={styles.headerCell}>Factor</div>
            {hiringComparison.map((model, modelIdx) => (
              <div key={modelIdx} className={styles.headerCell}>
                {model.model}
              </div>
            ))}
          </div>

          {comparisonFactors.map((factor) => (
            <div key={factor} className={styles.tableRow}>
              <div className={styles.rowHeader}>
                {factor === "timeToHire" && "Time to get right developers"}
                {factor === "timeToStart" && "Time to start a project"}
                {factor === "trainingCost" && "Recurring cost of training"}
                {factor === "scalingTime" && "Time to scale size of the team"}
                {factor === "risk" && "Project failure risk"}
                {factor === "deliverySupport" &&
                  "Developers backed by delivery team"}
              </div>
              {hiringComparison.map((model, modelIdx) => (
                <div key={modelIdx} className={styles.rowCell}>
                  {model[factor]}{" "}
                  {/* ✅ No error – factor is now a valid key */}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===== COMPANY STATS ===== */}
      <section className={styles.statsSection}>
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
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== INDUSTRIES SECTION ===== */}
      <section className={styles.industriesSection}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Industries We Cater To</h2>
            <p className={styles.sectionDescription}>
              Partnering with businesses across sectors to deliver exceptional
              mobile experiences
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
            Get answers to common questions about hiring mobile app developers
            from BBNTech.
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

        {/* Final CTA */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Build Your Mobile App?</h3>
            <p className={styles.ctaDescription}>
              Hire mobile app developers who create engaging, high-performance
              applications that transform user experiences and drive business
              growth across all platforms.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Hire Mobile Developers Now
                <ArrowRight className={styles.buttonIcon} />
              </Link>
              <Link href="/pricing" className={styles.ctaSecondary}>
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
