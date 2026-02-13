"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Layout,
  Smartphone,
  Cloud,
  Users,
  Zap,
  TrendingUp,
  CheckCircle,
  Award,
  MessageSquare,
  Sparkles,
  Activity,
  ChevronRight,
  Palette,
  Globe,
  Rocket,
  HelpCircle,
  ArrowRight,
  GitBranch,
  BarChart,
  FileText,
  HeadphonesIcon,
  ShoppingBag,
  CreditCard,
} from "lucide-react";
import styles from "./frontend.module.css";

export default function FrontendDevelopersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
  const [activeTechTab, setActiveTechTab] = useState<string>("core-stack");

  // Testimonial matching your page layout
  const testimonial = {
    name: "Michael Rodriguez",
    role: "Head of Product, TechScale Inc.",
    content:
      "The frontend developers from BBNTech delivered pixel-perfect interfaces 50% faster than our estimates. Their expertise in React and performance optimization transformed our user experience.",
    rating: 5,
    project: "Enterprise SaaS Dashboard",
  };

  const comparisonFactors = [
    "timeToHire",
    "timeToStart",
    "trainingCost",
    "scalingTime",
    "risk",
    "deliverySupport",
  ] as const;

  // Frontend Expertise Areas
  const frontendExpertise = [
    {
      id: 1,
      title: "Web Application Interfaces",
      description:
        "Fast-loading SPAs & PWAs using React, Angular, or Vue with secure API-driven dynamic content.",
      icon: <Layout className={styles.expertiseIcon} />,
      color: "#3B82F6",
      features: [
        "Single Page Applications",
        "Progressive Web Apps",
        "Secure API integration",
        "Dynamic content rendering",
      ],
    },
    {
      id: 2,
      title: "Hybrid & Cross-Platform UI",
      description:
        "Consistent UI across iOS, Android & Web with smooth multi-device performance.",
      icon: <Smartphone className={styles.expertiseIcon} />,
      color: "#10B981",
      features: [
        "React Native development",
        "Ionic frameworks",
        "Consistent design systems",
        "Native-like performance",
      ],
    },
    {
      id: 3,
      title: "Cloud-Integrated Front Ends",
      description:
        "Real-time UI updates and scalable architecture optimized for AWS, Azure & serverless backends.",
      icon: <Cloud className={styles.expertiseIcon} />,
      color: "#8B5CF6",
      features: [
        "AWS Amplify integration",
        "Azure Static Web Apps",
        "Serverless architectures",
        "Real-time updates",
      ],
    },
    {
      id: 4,
      title: "SaaS & Multi-Tenant Interfaces",
      description:
        "Seamless dashboards, portals & workflows with scalable UI and role-based access control.",
      icon: <Users className={styles.expertiseIcon} />,
      color: "#F59E0B",
      features: [
        "Multi-tenant dashboards",
        "Role-based interfaces",
        "Workflow automation",
        "Scalable component libraries",
      ],
    },
    {
      id: 5,
      title: "UI Performance & Accessibility",
      description:
        "WCAG-compliant experiences with lazy loading, performance tuning, and SEO-friendly interfaces.",
      icon: <Zap className={styles.expertiseIcon} />,
      color: "#EC4899",
      features: [
        "WCAG 2.1 compliance",
        "Performance optimization",
        "SEO-friendly rendering",
        "Accessibility auditing",
      ],
    },
    {
      id: 6,
      title: "Component-Driven Architecture",
      description:
        "Reusable UI components for faster builds and consistent brand experience across your product.",
      icon: <GitBranch className={styles.expertiseIcon} />,
      color: "#06B6D4",
      features: [
        "Storybook integration",
        "Design systems",
        "Reusable components",
        "Consistent UX patterns",
      ],
    },
  ];

  // Technology Stack (categorized as per ValueCoders)
  const technologyStack = {
    "core-stack": {
      title: "Core Stack",
      color: "#3B82F6",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "TypeScript",
        "SASS/SCSS",
        "Tailwind CSS",
      ],
    },
    "ui-frameworks": {
      title: "UI Frameworks & Libraries",
      color: "#10B981",
      technologies: [
        "React.js",
        "Angular",
        "Vue.js",
        "Next.js",
        "Material UI",
        "Ant Design",
        "Chakra UI",
        "Bootstrap",
      ],
    },
    tooling: {
      title: "Build, Tooling & Performance",
      color: "#8B5CF6",
      technologies: [
        "Webpack",
        "Vite",
        "Babel",
        "ESLint",
        "Prettier",
        "Rollup",
        "Parcel",
        "ESBuild",
      ],
    },
    testing: {
      title: "Testing & QA Tools",
      color: "#F59E0B",
      technologies: [
        "Jest",
        "Cypress",
        "Puppeteer",
        "Playwright",
        "Mocha",
        "Storybook",
        "React Testing Library",
      ],
    },
    design: {
      title: "Design & Prototyping Tools",
      color: "#EC4899",
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Zeplin",
        "InVision",
        "Photoshop",
        "Illustrator",
      ],
    },
    collaboration: {
      title: "Project Management & Collaboration",
      color: "#06B6D4",
      technologies: [
        "Jira",
        "Trello",
        "Asana",
        "ClickUp",
        "Notion",
        "Slack",
        "Microsoft Teams",
      ],
    },
  };

  // Development Process
  const developmentProcess = [
    {
      step: 1,
      title: "Discovery & Planning",
      description:
        "Understanding your requirements, target audience, and project goals.",
      icon: <FileText />,
    },
    {
      step: 2,
      title: "UI/UX Design",
      description:
        "Creating wireframes, prototypes, and visual designs for user approval.",
      icon: <Palette />,
    },
    {
      step: 3,
      title: "Component Architecture",
      description:
        "Building reusable components and establishing design patterns.",
      icon: <GitBranch />,
    },
    {
      step: 4,
      title: "Development & Integration",
      description: "Coding interfaces and integrating with backend APIs.",
      icon: <Code />,
    },
    {
      step: 5,
      title: "Testing & Optimization",
      description:
        "Performance testing, cross-browser testing, and optimization.",
      icon: <CheckCircle />,
    },
    {
      step: 6,
      title: "Deployment & Support",
      description: "Launching and providing ongoing maintenance and updates.",
      icon: <Rocket />,
    },
  ];

  // Benefits Section
  const benefits = [
    {
      title: "Blazing-Fast Performance",
      description:
        "Engineered interfaces with 50% faster load times through performance-first coding practices.",
      icon: <Zap />,
      stats: "50% faster load times",
    },
    {
      title: "Pixel-Perfect UI",
      description:
        "Precision-crafted interfaces that elevate user experience and drive engagement.",
      icon: <Layout />,
      stats: "95% client satisfaction",
    },
    {
      title: "Scalable Architecture",
      description:
        "Future-proof frontend architecture built for long-term growth and maintenance.",
      icon: <TrendingUp />,
      stats: "Scalable for 1M+ users",
    },
    {
      title: "Cross-Platform Excellence",
      description:
        "Native-like experiences across web, mobile, and desktop platforms.",
      icon: <Globe />,
      stats: "100% platform coverage",
    },
  ];

  // Hiring Models Comparison
  const hiringComparison = [
    {
      model: "In-House Team",
      timeToHire: "6-12 weeks",
      timeToStart: "8-12 weeks",
      trainingCost: "High",
      scalingTime: "Slow",
      risk: "Medium",
      deliverySupport: "None",
    },
    {
      model: "Freelancers",
      timeToHire: "2-4 weeks",
      timeToStart: "1-2 weeks",
      trainingCost: "Medium",
      scalingTime: "Variable",
      risk: "High",
      deliverySupport: "Limited",
    },
    {
      model: "BBNTech",
      timeToHire: "24-72 hours",
      timeToStart: "4-7 days",
      trainingCost: "None",
      scalingTime: "Immediate",
      risk: "Low",
      deliverySupport: "Full",
    },
  ];

  // Stats Section
  const companyStats = [
    { value: "700+", label: "Full-time Developers", icon: <Users /> },
    { value: "20+", label: "Years Experience", icon: <Award /> },
    { value: "4500+", label: "Satisfied Clients", icon: <HeadphonesIcon /> },
    { value: "95%", label: "Project Success Rate", icon: <CheckCircle /> },
  ];

  // What We Build Section - Added 2 more items
  const whatWeBuild = [
    {
      title: "E-Commerce Platforms",
      description:
        "Scalable online stores with seamless checkout and personalized shopping.",
      icon: <ShoppingBag />,
      examples: ["Online marketplaces", "Product catalogs", "Shopping carts"],
      color: "#EC4899",
    },
    {
      title: "FinTech & Banking Dashboards",
      description:
        "Secure financial interfaces with real-time data visualization and analytics.",
      icon: <CreditCard />,
      examples: ["Banking portals", "Investment platforms", "Payment gateways"],
      color: "#10B981",
    },
    {
      title: "High-Performance Applications",
      description:
        "Enterprise-grade dashboards and data-intensive applications.",
      icon: <Activity />,
      examples: [
        "Financial dashboards",
        "Analytics platforms",
        "Real-time monitoring tools",
      ],
      color: "#3B82F6",
    },
    {
      title: "Cross-Platform Mobile UIs",
      description: "Native-like mobile experiences for iOS and Android.",
      icon: <Smartphone />,
      examples: ["E-commerce apps", "Social platforms", "Productivity tools"],
      color: "#8B5CF6",
    },
    {
      title: "Interactive Data Visualizations",
      description: "Advanced interfaces for complex data representation.",
      icon: <BarChart />,
      examples: [
        "Charting libraries",
        "Interactive graphs",
        "Real-time data feeds",
      ],
      color: "#F59E0B",
    },
    {
      title: "Conversion-Focused Experiences",
      description:
        "User interfaces designed to maximize engagement and conversions.",
      icon: <TrendingUp />,
      examples: ["Landing pages", "Product showcases", "Customer portals"],
      color: "#06B6D4",
    },
  ];

  // Industries Section (Matching your layout)
  const industries = [
    {
      name: "E-Commerce & Retail",
      icon: "🛍️",
      desc: "High-conversion online stores, product catalogs, shopping carts, and personalized shopping experiences with seamless checkout flows.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      color: "#3B82F6",
    },
    {
      name: "FinTech & Banking",
      icon: "🏦",
      desc: "Secure banking interfaces, financial dashboards, payment gateways, and investment platforms with real-time data visualization.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      color: "#10B981",
    },
    {
      name: "Healthcare & MedTech",
      icon: "🏥",
      desc: "Patient portals, telemedicine platforms, medical dashboards, and healthcare management systems with HIPAA-compliant interfaces.",
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80",
      color: "#8B5CF6",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "How quickly can I hire frontend developers from BBNTech?",
      answer:
        "We can onboard dedicated frontend developers in 24-48 hours. Our vetting process is streamlined to provide you with pre-screened, experienced developers who match your specific requirements.",
    },
    {
      question:
        "What frameworks and technologies do your developers specialize in?",
      answer:
        "Our developers are experts in React, Angular, Vue.js, Next.js, TypeScript, and modern CSS frameworks like Tailwind CSS. We also work with testing tools, build systems, and design tools for complete frontend solutions.",
    },
    {
      question: "Do you offer a trial period for hired developers?",
      answer:
        "Yes, we offer a 7-day risk-free trial period. This allows you to evaluate the developer's skills and fit with your team before making a long-term commitment.",
    },
    {
      question: "How do you ensure code quality and best practices?",
      answer:
        "We follow strict coding standards, conduct regular code reviews, implement comprehensive testing (unit, integration, E2E), and use modern tooling for linting, formatting, and performance optimization.",
    },
    {
      question:
        "Can your frontend developers work with our existing backend team?",
      answer:
        "Absolutely. Our developers are experienced in API integration and collaboration with backend teams. We use standard communication protocols and can adapt to your existing workflows and tools.",
    },
    {
      question: "What kind of support and project management do you provide?",
      answer:
        "We provide dedicated project managers, daily stand-ups, sprint planning, and transparent communication through your preferred tools (Slack, Teams, Jira, etc.). We also offer ongoing maintenance and support.",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* ===== HERO SECTION (Matching your layout) ===== */}
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
                <Sparkles size={18} /> Expert Frontend Development
              </div>
              <h1 className={styles.mainTitle}>
                Hire Frontend{" "}
                <span className={styles.highlight}>Developers</span>
              </h1>
              <p className={styles.subheadline}>
                Build interfaces 2X faster with flawless code and pixel-perfect
                UI
              </p>
              <p className={styles.heroDescription}>
                Get frontend developers who turn your product vision into fast,
                intuitive, and visually polished interfaces. Scalable code,
                polished layouts, and seamless user flows built with modern
                frameworks.
              </p>
            </motion.div>

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
                    <div className={styles.ratingText}>Frontend Excellence</div>
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
            Front-End Development{" "}
            <span className={styles.titleHighlight}>Expertise</span>
          </h2>
          <p className={styles.sectionDescription}>
            Get dedicated frontend developers who turn your product vision into
            fast, intuitive, and visually polished interfaces across all
            platforms.
          </p>
        </div>

        <div className={styles.expertiseGrid}>
          {frontendExpertise.map((expertise, index) => (
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
                  href={`/hire/frontend/${expertise.id}`}
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
            Technologies We Hold{" "}
            <span className={styles.titleHighlight}>Expertise In</span>
          </h2>
          <p className={styles.sectionDescription}>
            Our dedicated frontend developers work with modern frameworks, UI
            libraries, tooling systems, and performance technologies to build
            fast, scalable, and visually consistent user interfaces.
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

      {/* ===== BENEFITS SECTION ===== */}
      <section className={styles.benefitsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Why Choose Front-End Development{" "}
            <span className={styles.titleHighlight}>With Us?</span>
          </h2>
          <p className={styles.sectionDescription}>
            We deliver exceptional frontend solutions that drive engagement,
            performance, and business growth.
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
            Our Frontend Development{" "}
            <span className={styles.titleHighlight}>Process</span>
          </h2>
          <p className={styles.sectionDescription}>
            A structured approach to delivering high-quality frontend solutions
            that exceed expectations.
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
            What Our Front-End Experts{" "}
            <span className={styles.titleHighlight}>Can Build</span>
          </h2>
          <p className={styles.sectionDescription}>
            From enterprise applications to consumer-facing experiences, we
            deliver interfaces that engage and convert.
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

      {/* ===== HIRING COMPARISON SECTION ===== */}
      <section className={styles.comparisonSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Hiring Comparison:{" "}
            <span className={styles.titleHighlight}>
              In-House vs Freelancers vs BBNTech
            </span>
          </h2>
          <p className={styles.sectionDescription}>
            Make an informed decision by comparing different hiring options for
            your frontend development needs.
          </p>
        </div>

        <div className={styles.comparisonTable}>
          <div className={styles.tableHeader}>
            <div className={styles.headerCell}>Factor</div>
            {hiringComparison.map((model, idx) => (
              <div key={idx} className={styles.headerCell}>
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
                  {model[factor]}
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

      {/* ===== INDUSTRIES SECTION (Exactly matching your layout) ===== */}
      <section className={styles.industriesSection}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Industries We Cater To</h2>
            <p className={styles.sectionDescription}>
              Partnering with businesses across sectors to deliver exceptional
              frontend experiences
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
            Get answers to common questions about hiring frontend developers
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
            <h3 className={styles.ctaTitle}>
              Ready to Launch Features 2X Faster?
            </h3>
            <p className={styles.ctaDescription}>
              Hire frontend developers who create reusable UI patterns that
              dramatically accelerate your development cycles and release
              timelines.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Hire Developers Now
                <ArrowRight className={styles.buttonIcon} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
