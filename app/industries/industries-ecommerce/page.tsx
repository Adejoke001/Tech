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
  CheckCircle,
  Users,
  Lock,
  Clock,
  ShoppingCart,
  CreditCard,
  Truck,
  BarChart3,
  Scan,
  Shield,
  Smartphone,
  Database,
  Brain,
  Box,
  Radio,
  Cpu,
  Compass,
  Workflow,
  Code,
  Layout,
  GitBranch,
  RefreshCw,
  Eye,
  Shield as ShieldIcon,
  TrendingUp,
  Grid,
  Menu,
  DollarSign,
  Headphones,
  Palette,
  Search,
  FolderOpen,
  Tag,
  Package,
  RefreshCw as RefreshIcon,
  Wallet,
  Key,
  Fingerprint,
  Truck as TruckIcon,
  RefreshCw as ReturnIcon,
  MessageCircle,
  Building2,
  Rocket,
  Globe as GlobeIcon,
  Lock as LockIcon2,
  Clock as ClockIcon,
  Award as AwardIcon,
  ShoppingBag,
} from "lucide-react";
import styles from "./ecommerce.module.css";

export default function ECommercePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  // ----- HERO TESTIMONIAL (unchanged) -----
  const testimonial = {
    name: "Michael Chen",
    role: "CEO, StyleHub Retail",
    content:
      "ValueCoders built our multi-vendor E-Commerce platform from scratch – it handles 100,000+ daily transactions with zero downtime. Their deep retail expertise and commitment to quality exceeded our expectations.",
    rating: 5,
    project: "Multi-Vendor Marketplace",
  };

  // ============ CORE SOLUTIONS (expanded from original 6) ============
  const coreSolutions = [
    {
      title: "Customer Experience Solutions",
      description:
        "Deliver seamless omni-channel experiences with CRM, loyalty programs, and in-store enhancements that boost retention.",
      icon: <Users />,
      color: "#3B82F6",
      stats: "30% higher retention",
      features: [
        "CRM & Marketing Automation",
        "Loyalty Programs",
        "In-store Enhancements",
      ],
    },
    {
      title: "E-Commerce Platforms",
      description:
        "Robust, scalable online stores with advanced shopping carts, system integrations, and mobile-optimized experiences.",
      icon: <ShoppingCart />,
      color: "#10B981",
      stats: "99.9% uptime",
      features: [
        "E-stores",
        "Shopping Cart",
        "System Integration",
        "mCommerce",
      ],
    },
    {
      title: "Supply Chain Management",
      description:
        "Real-time visibility from production to point-of-sale with private label management and trade promotion.",
      icon: <Truck />,
      color: "#8B5CF6",
      stats: "25% cost reduction",
      features: [
        "Supply Chain",
        "Private Label",
        "Trade Promotion",
        "E-collaboration",
      ],
    },
    {
      title: "Data Analytics & BI",
      description:
        "Empower decisions with data warehousing, predictive analytics, and custom reporting dashboards.",
      icon: <BarChart3 />,
      color: "#F59E0B",
      stats: "2x faster decisions",
      features: ["Data Warehousing", "Reporting UI", "Predictive Analytics"],
    },
    {
      title: "Computer Vision",
      description:
        "Enhance in-store experiences with facial and emotion recognition for personalized service.",
      icon: <Scan />,
      color: "#EC4899",
      stats: "40% engagement boost",
      features: ["Facial Recognition", "Emotion Recognition"],
    },
    {
      title: "Information Security",
      description:
        "Enterprise-grade security with SIEM, IAM, and penetration testing to protect your business and customers.",
      icon: <Shield />,
      color: "#06B6D4",
      stats: "Zero breaches",
      features: ["SIEM", "Identity Management", "Penetration Testing"],
    },
  ];

  // ============ SPECIALIZED OFFERINGS (expanded to 8 cards) ============
  const specializedOfferings = [
    {
      title: "Technology & Market Entry Consulting",
      description:
        "In-depth market analysis and platform recommendations to ensure successful market entry.",
      icon: <Compass />,
      color: "#3B82F6",
      points: [
        "Market analysis",
        "Entry complexities",
        "Platform recommendations",
      ],
    },
    {
      title: "Business Workflow Optimization",
      description:
        "Streamline cross-system integration and data management for maximum efficiency.",
      icon: <Workflow />,
      color: "#10B981",
      points: [
        "Cross-system integration",
        "Data management",
        "Digital experience review",
      ],
    },
    {
      title: "Retail Software Development",
      description:
        "Custom POS, inventory tracking, CRM, and supply chain solutions tailored to your business.",
      icon: <Code />,
      color: "#8B5CF6",
      points: [
        "POS systems",
        "Inventory tracking",
        "CRM platforms",
        "Supply chain",
      ],
    },
    {
      title: "Webstore Setup",
      description:
        "End-to-end webstore creation with front-end design, back-end development, and mobile optimization.",
      icon: <Layout />,
      color: "#F59E0B",
      points: ["Front-end design", "Back-end development", "Mobile-optimized"],
    },
    {
      title: "E-Commerce Software Development",
      description:
        "Cutting-edge solutions with simplified carts, secure payments, and easy product management.",
      icon: <ShoppingBag />,
      color: "#EC4899",
      points: ["Shopping carts", "Payment integrations", "Product management"],
    },
    {
      title: "E-Commerce Integration & Testing",
      description:
        "Seamless ERP integration, thorough testing, and SEO enhancement for maximum visibility.",
      icon: <GitBranch />,
      color: "#06B6D4",
      points: ["ERP integration", "Testing", "SEO enhancement"],
    },
    {
      title: "Composable & Headless Commerce",
      description:
        "Flexible, scalable digital experiences with CMS, PIM, and search integration.",
      icon: <Layers />,
      color: "#3B82F6",
      points: [
        "Modular setup",
        "CMS/PIM integration",
        "Performance optimization",
      ],
    },
    {
      title: "Platform Migration & Replatforming",
      description:
        "Future-ready commerce stack migration with minimal disruption and full SEO preservation.",
      icon: <RefreshCw />,
      color: "#10B981",
      points: ["Data mapping", "SEO preservation", "Quality checks"],
    },
  ];

  // ============ TECHNOLOGY EXPERTISE (expanded) ============
  const techExpertise = [
    {
      title: "AI & Machine Learning",
      description:
        "Personalized recommendations, chatbots, and demand forecasting.",
      icon: <Brain />,
      color: "#3B82F6",
    },
    {
      title: "AR & VR",
      description:
        "Virtual try-ons, 360° product views, and immersive showrooms.",
      icon: <Box />,
      color: "#10B981",
    },
    {
      title: "IoT",
      description: "Smart shelves, connected devices, and proximity marketing.",
      icon: <Radio />,
      color: "#8B5CF6",
    },
    {
      title: "RPA",
      description:
        "Automated order processing, inventory updates, and invoicing.",
      icon: <Cpu />,
      color: "#F59E0B",
    },
    {
      title: "Blockchain",
      description:
        "Decentralized marketplaces, secure payments, and supply chain traceability.",
      icon: <LinkChain />,
      color: "#EC4899",
    },
    {
      title: "Compliance",
      description:
        "GDPR, PCI-DSS, and HIPAA-compliant data storage and processing.",
      icon: <ShieldIcon />,
      color: "#06B6D4",
    },
  ];

  // ============ PLATFORM SELECTION FACTORS ============
  const platformFactors = [
    {
      text: "Scalability – handles growth",
      icon: <TrendingUp />,
      color: "#3B82F6",
    },
    {
      text: "Ease of Use – intuitive interface",
      icon: <Menu />,
      color: "#10B981",
    },
    { text: "Features & Functionality", icon: <Grid />, color: "#8B5CF6" },
    {
      text: "Payment Options – multiple gateways",
      icon: <DollarSign />,
      color: "#F59E0B",
    },
    { text: "Integration Capabilities", icon: <GitBranch />, color: "#EC4899" },
    { text: "Customer Support", icon: <Headphones />, color: "#06B6D4" },
    {
      text: "Cost – setup, transactions, subscriptions",
      icon: <CreditCard />,
      color: "#3B82F6",
    },
  ];

  // ============ DESIGN ELEMENTS ============
  const designElements = [
    {
      text: "User Experience – intuitive navigation",
      icon: <Users />,
      color: "#3B82F6",
    },
    {
      text: "Responsive Design – mobile-first",
      icon: <Smartphone />,
      color: "#10B981",
    },
    {
      text: "Product Presentation – high-quality images",
      icon: <Eye />,
      color: "#8B5CF6",
    },
    {
      text: "Checkout Process – streamlined, minimal steps",
      icon: <ShoppingCart />,
      color: "#F59E0B",
    },
    {
      text: "Branding – consistent identity",
      icon: <Palette />,
      color: "#EC4899",
    },
    {
      text: "Search & Filters – robust discovery",
      icon: <Search />,
      color: "#06B6D4",
    },
    { text: "Security – SSL, encryption", icon: <Lock />, color: "#3B82F6" },
  ];

  // ============ INVENTORY & FULFILLMENT PRACTICES ============
  const inventoryPractices = [
    {
      text: "Organized Catalogs – categories, tags",
      icon: <FolderOpen />,
      color: "#3B82F6",
    },
    { text: "Accurate Product Information", icon: <Tag />, color: "#10B981" },
    {
      text: "Variant Management – sizes, colors",
      icon: <Layers />,
      color: "#8B5CF6",
    },
    {
      text: "Real-time Inventory Tracking",
      icon: <Package />,
      color: "#F59E0B",
    },
    {
      text: "Stock Synchronization across channels",
      icon: <RefreshIcon />,
      color: "#EC4899",
    },
    {
      text: "Backorder & Preorder Management",
      icon: <Clock />,
      color: "#06B6D4",
    },
  ];

  const fulfillmentPractices = [
    { text: "Order Management System", icon: <Database />, color: "#3B82F6" },
    {
      text: "Efficient Picking & Packing",
      icon: <Package />,
      color: "#10B981",
    },
    {
      text: "Shipping Carrier Integration",
      icon: <TruckIcon />,
      color: "#8B5CF6",
    },
    {
      text: "Real-time Tracking for Customers",
      icon: <MapPin />,
      color: "#F59E0B",
    },
    {
      text: "Automated Returns & Exchanges",
      icon: <ReturnIcon />,
      color: "#EC4899",
    },
    {
      text: "Proactive Customer Communication",
      icon: <MessageCircle />,
      color: "#06B6D4",
    },
  ];

  // ============ PAYMENT & SECURITY PRACTICES ============
  const paymentPractices = [
    { text: "Reputable Payment Gateways", icon: <Wallet />, color: "#3B82F6" },
    { text: "SSL Encryption", icon: <Lock />, color: "#10B981" },
    { text: "PCI Compliance", icon: <BadgeCheck />, color: "#8B5CF6" },
    { text: "Tokenization", icon: <Key />, color: "#F59E0B" },
    {
      text: "Fraud Prevention – AVS, CVV, 3D Secure",
      icon: <Fingerprint />,
      color: "#EC4899",
    },
    {
      text: "Multiple Payment Methods",
      icon: <CreditCard />,
      color: "#06B6D4",
    },
  ];

  // ============ WHY PARTNER WITH US ============
  const whyPartner = [
    {
      text: "India’s Top 1% Software Talent",
      icon: <AwardIcon />,
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
      icon: <GlobeIcon />,
      color: "#F59E0B",
    },
    {
      text: "Top-tier Data Security Protocols",
      icon: <LockIcon2 />,
      color: "#EC4899",
    },
    {
      text: "On-time Delivery, No Surprises",
      icon: <ClockIcon />,
      color: "#06B6D4",
    },
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

  // ============ INDUSTRIES (unchanged) ============
  const industries = [
    {
      name: "Fashion & Apparel",
      icon: "👕",
      desc: "Online clothing stores, virtual try-on, size recommendations, and trend-driven merchandising.",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
      color: "#3B82F6",
    },
    {
      name: "Electronics & Gadgets",
      icon: "📱",
      desc: "High-tech product catalogs, specifications management, warranty tracking, and accessory cross-selling.",
      image:
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80",
      color: "#10B981",
    },
    {
      name: "Grocery & Essentials",
      icon: "🥕",
      desc: "Quick-commerce platforms, subscription boxes, real-time inventory, and route-optimized delivery.",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      color: "#8B5CF6",
    },
    {
      name: "Home & Furniture",
      icon: "🛋️",
      desc: "AR-based room planning, configurable products, white-glove delivery scheduling, and assembly services.",
      image:
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
      color: "#F59E0B",
    },
    {
      name: "Beauty & Cosmetics",
      icon: "💄",
      desc: "Virtual try-on, skin analysis AI, subscription refills, and loyalty-driven reorder systems.",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      color: "#EC4899",
    },
    {
      name: "B2B & Wholesale",
      icon: "📦",
      desc: "Bulk pricing, quote management, corporate accounts, and seamless ERP integration.",
      image:
        "https://plus.unsplash.com/premium_photo-1664300442121-794e137b141c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGIyYiUyMGFuZCUyMHdob2xlc2FsZXxlbnwwfHwwfHx8MA%3D%3D",
      color: "#06B6D4",
    },
  ];

  // ============ FAQS (unchanged) ============
  const faqs = [
    {
      question:
        "How do you choose the right E-Commerce platform for my business?",
      answer:
        "We conduct a thorough analysis of your business requirements, budget, scalability needs, and technical preferences. We then recommend platforms like Shopify, Magento, WooCommerce, or custom solutions – ensuring the best fit for your specific use case.",
    },
    {
      question:
        "Can you integrate my E-Commerce store with my existing ERP or CRM?",
      answer:
        "Absolutely. We specialise in seamless integrations with popular ERPs (SAP, Oracle, Microsoft Dynamics) and CRMs (Salesforce, HubSpot). We ensure real-time data synchronisation for inventory, orders, and customer information.",
    },
    {
      question: "What payment gateways do you support?",
      answer:
        "We integrate all major payment gateways including Stripe, PayPal, Braintree, Authorize.net, and region-specific providers. We also support digital wallets (Apple Pay, Google Pay) and buy-now-pay-later options.",
    },
    {
      question: "How do you ensure my E-Commerce store is secure?",
      answer:
        "We implement SSL encryption, PCI DSS compliance, regular security audits, penetration testing, and secure coding practices. For high-risk transactions, we add multi-factor authentication and fraud detection algorithms.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes. Every project includes post-launch support, security monitoring, performance optimisation, and regular updates. We offer SLAs tailored to your business criticality.",
    },
    {
      question: "Can you build a headless or composable commerce solution?",
      answer:
        "Absolutely. We specialise in headless architectures using modern front-end frameworks (React, Next.js) and back-end commerce engines (CommerceTools, Shopify Plus). This gives you complete flexibility over customer experiences.",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* ===== HERO SECTION (unchanged) ===== */}
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
                <Sparkles size={18} /> Retail & E-Commerce Solutions
              </div>
              <h1 className={styles.mainTitle}>
                Retail & E-Commerce{" "}
                <span className={styles.highlight}>Software Development</span>
              </h1>
              <p className={styles.subheadline}>
                We build next-gen, feature-rich, and scalable E-Commerce
                solutions to empower B2B & B2C businesses.
  
              </p>
              <p className={styles.heroDescription}>
                From customer experience solutions to supply chain management,
                data analytics, and cutting-edge AI/AR integrations – we deliver
                secure, scalable E-Commerce platforms trusted by startups and
                Fortune 500 companies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className={styles.buttonContainer}
            >
              <Link href="/contact" className={styles.ctaButton}>
                Build Your E-Commerce Solution
                <ArrowRight className={styles.buttonIcon} />
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
                    <div className={styles.ratingText}>
                      E-Commerce Excellence
                    </div>
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

      {/* ===== CORE SOLUTIONS SECTION (new design) ===== */}
      <section className={styles.coreSolutionsSection} id="solutions">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Core{" "}
            <span className={styles.titleHighlight}>E-Commerce Solutions</span>
          </h2>
          <p className={styles.sectionDescription}>
            Comprehensive, scalable solutions that power the world&apos;s
            leading retail and E-Commerce businesses.
          </p>
        </div>

        <div className={styles.coreSolutionsGrid}>
          {coreSolutions.map((item, index) => (
            <motion.div
              key={index}
              className={styles.coreCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.coreCardHeader}>
                <div className={styles.coreIcon} style={{ color: item.color }}>
                  {item.icon}
                </div>
                <div
                  className={styles.coreStat}
                  style={{
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  {item.stats}
                </div>
              </div>
              <h3>{item.title}</h3>
              <p className={styles.coreDescription}>{item.description}</p>
              <div className={styles.coreFeatures}>
                {item.features.map((feature, idx) => (
                  <span key={idx} className={styles.coreFeature}>
                    <CheckCircle size={12} style={{ color: item.color }} />
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== SPECIALIZED OFFERINGS SECTION ===== */}
      <section className={styles.offeringsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Specialized{" "}
            <span className={styles.titleHighlight}>Development Offerings</span>
          </h2>
          <p className={styles.sectionDescription}>
            Tailored solutions designed to address the unique tech needs of
            modern retail.
          </p>
        </div>

        <div className={styles.offeringsGrid}>
          {specializedOfferings.map((item, index) => (
            <motion.div
              key={index}
              className={styles.offeringCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div
                className={styles.offeringIcon}
                style={{ color: item.color }}
              >
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p className={styles.offeringDescription}>{item.description}</p>
              <div className={styles.offeringPoints}>
                {item.points.map((point, idx) => (
                  <span key={idx} className={styles.offeringPoint}>
                    • {point}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== TECHNOLOGY EXPERTISE SECTION ===== */}
      <section className={styles.techSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Technology <span className={styles.titleHighlight}>Expertise</span>
          </h2>
          <p className={styles.sectionDescription}>
            Harness cutting-edge technologies to deliver unmatched shopping
            experiences.
          </p>
        </div>

        <div className={styles.techGrid}>
          {techExpertise.map((item, index) => (
            <motion.div
              key={index}
              className={styles.techCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.techIcon} style={{ color: item.color }}>
                {item.icon}
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== PLATFORM SELECTION & STORE DESIGN (redesigned) ===== */}
      <section className={styles.platformDesignSection}>
        <div className={styles.platformDesignContainer}>
          <div className={styles.platformCard}>
            <div className={styles.platformHeader}>
              <div
                className={styles.platformIconWrapper}
                style={{ backgroundColor: "#3B82F615" }}
              >
                <ShoppingCart
                  className={styles.platformIcon}
                  style={{ color: "#3B82F6" }}
                />
              </div>
              <h3 className={styles.platformTitle}>
                Choosing the Right{" "}
                <span className={styles.titleHighlight}>Platform</span>
              </h3>
            </div>
            <p className={styles.platformDescription}>
              Selecting the best eCommerce platform is critical for your
              business success. Consider these key factors:
            </p>
            <div className={styles.platformGrid}>
              {platformFactors.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.platformFactorItem}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <div
                    className={styles.platformFactorIcon}
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div className={styles.platformFactorContent}>
                    <h4>{item.text.split("–")[0]}</h4>
                    <p>
                      {item.text.split("–")[1] || "Essential consideration"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.designCard}>
            <div className={styles.designHeader}>
              <div
                className={styles.designIconWrapper}
                style={{ backgroundColor: "#10B98115" }}
              >
                <Palette
                  className={styles.designIcon}
                  style={{ color: "#10B981" }}
                />
              </div>
              <h3 className={styles.designTitle}>
                Effective{" "}
                <span className={styles.titleHighlight}>Store Design</span>
              </h3>
            </div>
            <p className={styles.designDescription}>
              Create engaging, conversion-optimized online stores that delight
              customers and drive sales.
            </p>
            <div className={styles.designGrid}>
              {designElements.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.designFactorItem}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <div
                    className={styles.designFactorIcon}
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div className={styles.designFactorContent}>
                    <h4>{item.text.split("–")[0]}</h4>
                    <p>{item.text.split("–")[1] || "Best practice"}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== INVENTORY MANAGEMENT (redesigned) ===== */}
      <section className={styles.inventorySection}>
        <div className={styles.splitGrid}>
          <div className={styles.splitContent}>
            <span
              className={styles.sectionTag}
              style={{ backgroundColor: "#3B82F615", color: "#3B82F6" }}
            >
              <Package size={16} /> Inventory Management
            </span>
            <h2 className={styles.sectionTitle}>
              Master Your{" "}
              <span className={styles.titleHighlight}>Inventory</span>
            </h2>
            <p className={styles.splitDescription}>
              Efficiently manage product catalogs, variants, and stock levels
              with real-time synchronization across all channels.
            </p>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>99.5%</div>
                <div className={styles.statLabel}>Inventory Accuracy</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>3x</div>
                <div className={styles.statLabel}>Faster Replenishment</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>100%</div>
                <div className={styles.statLabel}>Order Sync</div>
              </div>
            </div>
          </div>
          <div className={styles.splitImageWrapper}>
            <div className={styles.splitImageOverlay}></div>
            <Image
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
              alt="Inventory management"
              fill
              className={styles.splitImage}
            />
          </div>
        </div>

        <div className={styles.featureGrid}>
          {inventoryPractices.map((item, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.featureIcon} style={{ color: item.color }}>
                {item.icon}
              </div>
              <h4>{item.text}</h4>
              <p>
                Streamline your operations with automated inventory tracking and
                management.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* ===== ORDER FULFILLMENT (redesigned) ===== */}
      <section className={styles.fulfillmentSection}>
        <div className={styles.splitGridReverse}>
          <div className={styles.splitImageWrapper}>
            <div className={styles.splitImageOverlay}></div>
            <Image
              src="https://plus.unsplash.com/premium_photo-1661411073939-e7207087fa75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFjaGlldmVtZW50fGVufDB8fDB8fHww"
              alt="Order fulfillment"
              fill
              className={styles.splitImage}
            />
          </div>
          <div className={styles.splitContent}>
            <span
              className={styles.sectionTag}
              style={{ backgroundColor: "#10B98115", color: "#10B981" }}
            >
              <Truck size={16} /> Order Fulfillment
            </span>
            <h2 className={styles.sectionTitle}>
              Seamless{" "}
              <span className={styles.titleHighlight}>Fulfillment</span>
            </h2>
            <p className={styles.splitDescription}>
              Deliver exceptional post-purchase experiences with efficient
              processing, shipping, and real-time tracking.
            </p>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>24h</div>
                <div className={styles.statLabel}>Avg. Processing</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>200+</div>
                <div className={styles.statLabel}>Carriers</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>99%</div>
                <div className={styles.statLabel}>On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.featureGrid}>
          {fulfillmentPractices.map((item, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.featureIcon} style={{ color: item.color }}>
                {item.icon}
              </div>
              <h4>{item.text}</h4>
              <p>
                Automate and optimize every step of the fulfillment journey.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* ===== PAYMENT & SECURITY (redesigned) ===== */}
      <section className={styles.paymentSection}>
        <div className={styles.splitGrid}>
          <div className={styles.splitContent}>
            <span
              className={styles.sectionTag}
              style={{ backgroundColor: "#8B5CF615", color: "#8B5CF6" }}
            >
              <Shield size={16} /> Secure Payments
            </span>
            <h2 className={styles.sectionTitle}>
              Safe & Seamless{" "}
              <span className={styles.titleHighlight}>Transactions</span>
            </h2>
            <p className={styles.splitDescription}>
              Build trust with your customers through enterprise-grade payment
              security and frictionless checkout.
            </p>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>100+</div>
                <div className={styles.statLabel}>Payment Gateways</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>99.99%</div>
                <div className={styles.statLabel}>Uptime</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>0</div>
                <div className={styles.statLabel}>Breaches</div>
              </div>
            </div>
          </div>
          <div className={styles.splitImageWrapper}>
            <div className={styles.splitImageOverlay}></div>
            <Image
              src="https://plus.unsplash.com/premium_photo-1663050633678-e0c3d2066cf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhbnNhY3Rpb25zfGVufDB8fDB8fHww"
              alt="Secure payment"
              fill
              className={styles.splitImage}
            />
          </div>
        </div>

        <div className={styles.featureGrid}>
          {paymentPractices.map((item, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.featureIcon} style={{ color: item.color }}>
                {item.icon}
              </div>
              <h4>{item.text}</h4>
              <p>
                Implement best-in-class security and payment methods for global
                customers.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== WHY PARTNER WITH US – BACKGROUND IMAGE SECTION ===== */}
      <section className={styles.partnerSection}>
        <div className={styles.partnerBackground}>
          <Image
            src="https://images.unsplash.com/photo-1556740714-d1c44a10060a?auto=format&fit=crop&w=1920&q=80"
            alt="E-Commerce partnership background"
            fill
            className={styles.partnerBgImage}
            priority
          />
          <div className={styles.partnerOverlay}></div>
        </div>
        <div className={styles.partnerContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ color: "white" }}>
              Why Partner With{" "}
              <span className={styles.titleHighlight}>BBNTech</span>?
            </h2>
            <p
              className={styles.sectionDescription}
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              We understand the dynamic nature of retail and E-Commerce. Our
              expertise drives growth and customer engagement.
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

      {/* ===== INDUSTRIES SECTION (unchanged) ===== */}
      <section className={styles.industriesSection}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Industries We Serve</h2>
            <p className={styles.sectionDescription}>
              Partnering with businesses across the retail sector to deliver
              innovative, engaging, and scalable solutions.
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

      {/* ===== FAQ SECTION (unchanged) ===== */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Frequently Asked{" "}
            <span className={styles.titleHighlight}>Questions</span>
          </h2>
          <p className={styles.sectionDescription}>
            Get answers to common questions about retail and E-Commerce software
            development.
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
              Unleash the Power of Modern Retail!
            </h3>
            <p className={styles.ctaDescription}>
              Embrace the future of shopping with our advanced E-Commerce
              development expertise. Let&apos;s build your next-generation
              online store together.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Build Your E-Commerce Solution
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

// Custom icon components

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

const BadgeCheck = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Layers = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const MapPin = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
