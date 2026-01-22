"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Users,
  Clock,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  ChevronRight,
  Building2,
  Briefcase,
  FileText,
  PieChart,
  GitBranch,
  MessageSquare,
  Brain,
  Link2,
  Eye,
  CpuIcon,
  Search,
  Users as UsersIcon,
  DollarSign,
  AlertTriangle,
  GitMerge,
  Target as TargetIcon,
  // TrendingUp as TrendingUpIcon,
  Plus,
  Minus,
  Heart,
  ShoppingCart,
  ShieldCheck,
  Server,
  // Smartphone as SmartphoneIcon,
} from "lucide-react";
import styles from "./product-dev.module.css";

export default function ProductDevelopment() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [openIndustryIndex, setOpenIndustryIndex] = useState<number | null>(null);

  const statsRef = useRef(null);
  const processRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Counter animation for stats
  const [expertCount, setExpertCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {
    if (isStatsInView) {
      const expertTimer = setInterval(() => {
        setExpertCount((prev) => {
          if (prev >= 675) {
            clearInterval(expertTimer);
            return 675;
          }
          return prev + 15;
        });
      }, 20);

      const yearsTimer = setInterval(() => {
        setYearsCount((prev) => {
          if (prev >= 20) {
            clearInterval(yearsTimer);
            return 20;
          }
          return prev + 1;
        });
      }, 50);

      const customerTimer = setInterval(() => {
        setCustomerCount((prev) => {
          if (prev >= 2500) {
            clearInterval(customerTimer);
            return 2500;
          }
          return prev + 50;
        });
      }, 10);

      return () => {
        clearInterval(expertTimer);
        clearInterval(yearsTimer);
        clearInterval(customerTimer);
      };
    }
  }, [isStatsInView]);

  // Toggle FAQ
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Toggle Industry
  const toggleIndustry = (index: number) => {
    setOpenIndustryIndex(openIndustryIndex === index ? null : index);
  };

  // Growth Stage Solutions
  const growthStages = [
    {
      title: "Startups",
      description:
        "For early-growth CTOs chasing funding goals or scale-stage CTOs preparing for market expansion. Reach product milestones faster with dedicated teams and agile delivery.",
      features: [
        "Rapid MVP Development",
        "Investor-ready Prototypes",
        "Scalable Architecture",
        "Agile Development Methodology",
      ],
      icon: <Rocket className={styles.stageIcon} />,
      color: "#10b981",
      link: "/solutions/startups",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      ctaText: "Launch Your Startup Idea",
    },
    {
      title: "Enterprises",
      description:
        "For CROs and technology leaders, we deliver secure, compliant, and scalable solutions that modernize operations without disrupting critical workflows.",
      features: [
        "Legacy System Modernization",
        "Enterprise Security",
        "Scalable Cloud Solutions",
        "Zero-downtime Migration",
      ],
      icon: <Building2 className={styles.stageIcon} />,
      color: "#3b82f6",
      link: "/solutions/enterprises",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      ctaText: "Modernize Your Enterprise",
    },
  ];

  // Development Process Steps
  const developmentProcess = [
    {
      step: 1,
      title: "Analysis & Discovery",
      description:
        "Gather requirements, define scope, conduct market research, and prevent scope creep through detailed analysis.",
      icon: <Search className={styles.processIcon} />,
      color: "#8b5cf6",
      duration: "1-2 Weeks",
    },
    {
      step: 2,
      title: "Resource Planning",
      description:
        "Assemble top experts, define team structure, allocate resources, and build a scalable product roadmap.",
      icon: <UsersIcon className={styles.processIcon} />,
      color: "#10b981",
      duration: "1 Week",
    },
    {
      step: 3,
      title: "Cost Estimation",
      description:
        "Generate detailed cost estimates, budget planning, ROI analysis, and optimize project expenses.",
      icon: <DollarSign className={styles.processIcon} />,
      color: "#f59e0b",
      duration: "3-5 Days",
    },
    {
      step: 4,
      title: "Risk Management",
      description:
        "Identify potential threats, create mitigation strategies, ensure compliance, and guarantee smooth development.",
      icon: <AlertTriangle className={styles.processIcon} />,
      color: "#ef4444",
      duration: "Ongoing",
    },
    {
      step: 5,
      title: "Change Management",
      description:
        "Implement structured change management processes, stakeholder communication, and keep projects on track.",
      icon: <GitMerge className={styles.processIcon} />,
      color: "#06b6d4",
      duration: "Ongoing",
    },
    {
      step: 6,
      title: "Success Review",
      description:
        "Review KPIs, performance metrics, user feedback, and gauge project health and success at each milestone.",
      icon: <TargetIcon className={styles.processIcon} />,
      color: "#8b5cf6",
      duration: "Weekly",
    },
    {
      step: 7,
      title: "Project Reporting",
      description:
        "Comprehensive project reporting with detailed performance analysis, progress tracking, and stakeholder updates.",
      icon: <PieChart className={styles.processIcon} />,
      color: "#10b981",
      duration: "Daily/Weekly",
    },
    {
      step: 8,
      title: "Collaboration",
      description:
        "Tools for seamless project collaboration, team communication, client involvement, and transparent workflows.",
      icon: <MessageSquare className={styles.processIcon} />,
      color: "#3b82f6",
      duration: "Continuous",
    },
  ];

  // Engineering Solutions
  const engineeringSolutions = [
    {
      name: "CRM Systems",
      description: "Custom Customer Relationship Management solutions",
      icon: <Users className={styles.solutionIcon} />,
      color: "#1f2937",
      link: "/solutions/crm",
    },
    {
      name: "Workforce Management",
      description: "Employee scheduling and productivity tools",
      icon: <Briefcase className={styles.solutionIcon} />,
      color: "#1f2937",
      link: "/solutions/workforce",
    },
    {
      name: "HR Management",
      description: "Human Resource and talent management systems",
      icon: <UsersIcon className={styles.solutionIcon} />,
      color: "#1f2937",
      link: "/solutions/hr",
    },
    {
      name: "Supply Chain",
      description: "End-to-end supply chain management solutions",
      icon: <GitBranch className={styles.solutionIcon} />,
      color: "#1f2937",
      link: "/solutions/supply-chain",
    },
    {
      name: "Fleet Management",
      description: "Vehicle tracking and logistics management",
      icon: <Truck className={styles.solutionIcon} />,
      color: "#1f2937",
      link: "/solutions/fleet",
    },
    {
      name: "Operations",
      description: "Business operations optimization software",
      icon: <Settings className={styles.solutionIcon} />,
      color: "#1f2937",
      link: "/solutions/operations",
    },
    {
      name: "Asset Management",
      description: "Enterprise asset tracking and maintenance",
      icon: <Package className={styles.solutionIcon} />,
      color: "#1f2937",
      link: "/solutions/assets",
    },
    {
      name: "Content Management",
      description: "Custom CMS for content publishing",
      icon: <FileText className={styles.solutionIcon} />,
      color: "#1f2937",
      link: "/solutions/cms",
    },
    {
      name: "Healthcare Systems",
      description: "Medical records and patient management",
      icon: <Heart className={styles.solutionIcon} />,
      color: "#1f2937",
      link: "/solutions/healthcare",
    },
    {
      name: "E-commerce Platforms",
      description: "Custom online store solutions",
      icon: <ShoppingCart className={styles.solutionIcon} />,
      color: "#1f2937",
      link: "/solutions/ecommerce",
    },
  ];

  // Add these with your other hooks
  const gridRef = useRef<HTMLDivElement>(null);
  const [columnCount, setColumnCount] = useState(5); // default desktop

  useEffect(() => {
    const updateColumnCount = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Small mobile
        setColumnCount(2);
      } else if (width < 768) {
        // Mobile
        setColumnCount(2);
      } else if (width < 1024) {
        // Tablet
        setColumnCount(3);
      } else {
        // Desktop
        setColumnCount(5);
      }
    };

    // Initial call
    updateColumnCount();

    // Add resize listener
    window.addEventListener("resize", updateColumnCount);

    // Cleanup
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  // Tech Trends - Updated with 6 items
  const techTrends = [
    {
      name: "Artificial Intelligence",
      description:
        "From simple chatbots to complex business automation systems, machine learning models, predictive analytics, and intelligent decision-making systems that transform business operations.",
      icon: <Brain className={styles.trendIcon} />,
      color: "#10b981",
      applications: [
        "Chatbots & Virtual Assistants",
        "Predictive Analytics",
        "Process Automation",
        "Computer Vision",
      ],
      link: "/technologies/ai-ml",
    },
    {
      name: "Blockchain",
      description:
        "Secure, scalable, and future-ready blockchain solutions tailored to your business needs. From decentralized apps to smart contracts, we ensure seamless integration and top-tier security.",
      icon: <Link2 className={styles.trendIcon} />,
      color: "#3b82f6",
      applications: [
        "Smart Contracts",
        "DeFi Applications",
        "NFT Platforms",
        "Supply Chain Tracking",
      ],
      link: "/technologies/blockchain",
    },
    {
      name: "Computer Vision",
      description:
        "Harness the power of AI-driven vision systems to automate tasks, enhance security, improve decision-making, and create immersive user experiences across various industries.",
      icon: <Eye className={styles.trendIcon} />,
      color: "#8b5cf6",
      applications: [
        "Facial Recognition",
        "Object Detection",
        "Quality Inspection",
        "Augmented Reality",
      ],
      link: "/technologies/computer-vision",
    },
    {
      name: "Internet of Things",
      description:
        "Connect and control smart devices with intelligent IoT solutions that optimize operations, enhance efficiency, enable predictive maintenance, and create smart ecosystems.",
      icon: <CpuIcon className={styles.trendIcon} />,
      color: "#f59e0b",
      applications: [
        "Smart Home Systems",
        "Industrial IoT",
        "Wearable Devices",
        "Asset Tracking",
      ],
      link: "/technologies/iot",
    },
    {
      name: "Mixed Reality",
      description:
        "Blend the digital and physical worlds with immersive AR/VR experiences for business, entertainment, training, retail, and industrial applications with 3D visualization.",
      icon: <Globe className={styles.trendIcon} />,
      color: "#ef4444",
      applications: [
        "AR Shopping",
        "VR Training",
        "3D Visualization",
        "Virtual Tours",
      ],
      link: "/technologies/mixed-reality",
    },
    {
      name: "Edge Computing",
      description:
        "Process data closer to the source with edge computing solutions that reduce latency, improve response times, enhance security, and enable real-time processing for critical applications.",
      icon: <Server className={styles.trendIcon} />,
      color: "#06b6d4",
      applications: [
        "Real-time Analytics",
        "Autonomous Systems",
        "Smart Cities",
        "Industrial Automation",
      ],
      link: "/technologies/edge-computing",
    },
  ];

  // Industries - Updated with 6 items
  const industries = [
    {
      name: "Healthcare",
      description:
        "Innovative software solutions to improve patient care, medical records management, telemedicine platforms, healthcare analytics, and medical device integration.",
      icon: "🏥",
      details: [
        "Electronic Health Records (EHR)",
        "Telemedicine Platforms",
        "Medical Billing Software",
        "Healthcare Analytics",
        "Medical Device Integration",
      ],
      link: "/industries/healthcare",
    },
    {
      name: "Media & Entertainment",
      description:
        "Engagement-focused software to enhance content delivery, streaming platforms, digital publishing, content management, and audience analytics for media companies.",
      icon: "🎬",
      details: [
        "Streaming Platforms",
        "Content Management Systems",
        "Digital Publishing",
        "Audience Analytics",
        "Advertising Platforms",
      ],
      link: "/industries/media",
    },
    {
      name: "Retail & eCommerce",
      description:
        "Scalable B2B & B2C solutions for your business including online stores, inventory management, POS systems, customer analytics, and omnichannel retail platforms.",
      icon: "🛒",
      details: [
        "E-commerce Platforms",
        "Inventory Management",
        "POS Systems",
        "Customer Analytics",
        "Omnichannel Retail",
      ],
      link: "/industries/retail",
    },
    {
      name: "FinTech",
      description:
        "Next-gen software to revolutionize financial services including banking apps, payment gateways, investment platforms, blockchain solutions, and regulatory compliance tools.",
      icon: "💰",
      details: [
        "Digital Banking Apps",
        "Payment Gateways",
        "Investment Platforms",
        "Blockchain Solutions",
        "Regulatory Compliance",
      ],
      link: "/industries/fintech",
    },
    {
      name: "Education & eLearning",
      description:
        "Custom eLearning solutions for changing needs including LMS platforms, virtual classrooms, educational apps, skill assessment tools, and corporate training systems.",
      icon: "🎓",
      details: [
        "Learning Management Systems",
        "Virtual Classrooms",
        "Educational Apps",
        "Skill Assessment",
        "Corporate Training",
      ],
      link: "/industries/education",
    },
    {
      name: "Manufacturing",
      description:
        "Industrial software solutions for smart factories, supply chain optimization, quality control, IoT integration, and predictive maintenance systems.",
      icon: "🏭",
      details: [
        "Smart Factory Solutions",
        "Supply Chain Optimization",
        "Quality Control Systems",
        "IoT Integration",
        "Predictive Maintenance",
      ],
      link: "/industries/manufacturing",
    },
  ];

  // FAQs with toggle functionality
  const faqs = [
    {
      question:
        "Why should I choose BBNTech for software engineering, consulting, and outsourcing?",
      answer:
        "We are a highly experienced and qualified team of professionals with a proven track record of delivering quality software solutions to clients. Here are a few reasons to choose us: 675+ vetted developers, expertise across 50+ tech stacks, proven delivery in complex enterprise projects, 97% client satisfaction rate, and 20+ years of industry experience.",
    },
    {
      question:
        "Can I test the services of BBNTech before committing to long-term engagement?",
      answer:
        "Yes! We offer a free trial to clients worldwide. This is to give our potential customers a risk-free way to try our software development services before committing to long-term engagement. We strongly believe in our products and services and want to allow everyone to experience firsthand the value we can bring. Just fill out a form and connect with our team.",
    },
    {
      question: "How much does outsourcing software development to India cost?",
      answer:
        "The cost of outsourcing software development depends on several factors such as: size and build of the application, features & third-party integrations, APIs, localizations, backend complexity, cross-platform requirements, platforms, and more. Share your basic idea, and we will provide you with an ETA and estimated cost. Typically, projects range from $15,000 for MVPs to $100,000+ for enterprise solutions.",
    },
    {
      question:
        "Is outsourcing software development risky? How do you ensure IP (Intellectual Property) and data protection?",
      answer:
        "Software product development outsourcing is not risky at all if you outsource your project to a reputed company. BBNTech ensures IP (Intellectual Property) & data protection in the following ways: We sign a Non-Disclosure Agreement (NDA), meet special industry regulations such as GDPR, HIPAA, etc., follow secure coding and data protection practices, establish firewalls, encryption, and VPN services to prevent online security breaches. All our employees are strictly verified before recruitment.",
    },
    {
      question:
        "How do you ensure enterprise-grade delivery across multiple time zones?",
      answer:
        "We align dedicated delivery managers and development squads to your working hours, ensuring smooth collaboration. Our teams follow strict sprint cycles, maintain overlapping work windows, and use standardized processes, CI/CD pipelines, and real-time communication tools. This setup keeps delivery predictable, transparent, and consistent, no matter where your business operates.",
    },
    {
      question: "How do you handle legacy modernization without downtime?",
      answer:
        "We migrate modules step-by-step while your legacy app keeps running. With blue-green deployments, thorough testing, and real-time monitoring, we ensure each change goes live seamlessly. This method minimizes risk, prevents service disruption, and allows continuous improvements without affecting your day-to-day operations. We've successfully modernized over 200 legacy systems with zero downtime.",
    },
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <motion.section
        className={styles.heroSection}
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className={styles.heroBackground}></div>
        <div className={styles.overlay}></div>

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Left Content - Appears first on all screens */}
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Engineer What&apos;s Next –{" "}
                <span className={styles.titleHighlight}>Faster, Smarter</span>
              </motion.h1>

              <motion.p
                className={styles.heroSubtitle}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                From agile MVPs to enterprise-grade platforms, we design,
                develop, and maintain future-ready software that delivers
                results – on time, on budget, and without compromise.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className={styles.heroStats}
              >
                <div className={styles.statMini}>
                  <div className={styles.statMiniNumber}>20+</div>
                  <div className={styles.statMiniLabel}>Years Experience</div>
                </div>
                <div className={styles.statMini}>
                  <div className={styles.statMiniNumber}>97%</div>
                  <div className={styles.statMiniLabel}>
                    Client Satisfaction
                  </div>
                </div>
                <div className={styles.statMini}>
                  <div className={styles.statMiniNumber}>4200+</div>
                  <div className={styles.statMiniLabel}>Projects</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className={styles.heroButtons}
              >
                <Link href="/contact" className={styles.linkWrapper}>
                  <motion.button
                    className={styles.primaryButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Free Consultation
                    <ArrowRight className={styles.buttonIcon} />
                  </motion.button>
                </Link>

                <Link href="/portfolio" className={styles.linkWrapper}>
                  <motion.button
                    className={styles.secondaryButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Our Portfolio
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Testimonial Card (Smaller) - Appears BELOW on mobile */}
            <motion.div
              className={styles.heroTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <div className={styles.testimonialAvatar}>
                    <Image
                      src="/images/testimonial1.jpg"
                      alt="Sarah Johnson"
                      width={50}
                      height={50}
                      className={styles.avatarImage}
                    />
                  </div>
                  <div className={styles.testimonialInfo}>
                    <h4 className={styles.testimonialName}>Sarah Johnson</h4>
                    <p className={styles.testimonialRole}>
                      CTO, TechScale Inc.
                    </p>
                    <div className={styles.testimonialRating}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={styles.starIcon}
                          fill="#fbbf24"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <Quote className={styles.quoteIcon} />
                <p className={styles.testimonialContent}>
                  &quot;BBNTech transformed our legacy system into a modern
                  cloud platform with zero downtime.&quot;
                </p>

                <div className={styles.testimonialFooter}>
                  <div className={styles.companyBadge}>
                    <Building2 className={styles.badgeIcon} />
                    Fortune 500 Company
                  </div>
                  <Link href="/testimonials" className={styles.readMoreLink}>
                    Read More
                    <ChevronRight className={styles.linkIcon} />
                  </Link>
                </div>
              </div>

              {/* Trust Badges - Smaller */}
              <div className={styles.trustBadges}>
                <div className={styles.trustBadge}>
                  <ShieldCheck className={styles.badgeIcon} />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className={styles.trustBadge}>
                  <CheckCircle className={styles.badgeIcon} />
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Growth Stage Solutions */}
      <section className={styles.growthSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>
              Engineering Solutions for Every{" "}
              <span className={styles.titleAccent}>Stage of Growth</span>
            </h2>
            <p className={styles.sectionDescription}>
              We help startups and enterprises turn ideas into powerful,
              scalable software. Whether you&apos;re building something new,
              upgrading legacy systems, or scaling complex platforms, we make it
              faster, smarter, and easier – without compromise.
            </p>
          </motion.div>

          <div className={styles.growthGrid}>
            {growthStages.map((stage, index) => (
              <motion.div
                key={stage.title}
                className={`${styles.growthCard} ${stage.bgColor}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className={styles.cardHeader}>
                  <div
                    className={styles.cardIcon}
                    style={{ color: stage.color }}
                  >
                    {stage.icon}
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>{stage.title}</h3>
                    <div
                      className={styles.cardBadge}
                      style={{ backgroundColor: `${stage.color}20` }}
                    >
                      {index === 0
                        ? "Early to Scale Stage"
                        : "Enterprise Scale"}
                    </div>
                  </div>
                </div>

                <p className={styles.cardDescription}>{stage.description}</p>

                <ul className={styles.featureList}>
                  {stage.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className={styles.featureItem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle
                        className={styles.checkIcon}
                        style={{ color: stage.color }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <Link href={stage.link} className={styles.linkWrapper}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className={styles.cardCta}
                  >
                    <button
                      className={styles.cardButton}
                      style={{ backgroundColor: stage.color }}
                    >
                      {stage.ctaText}
                      <ArrowRight className={styles.buttonIcon} />
                    </button>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className={styles.statsSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.statsContent}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.statsTitle}>
              Future-Ready Solutions That{" "}
              <span className={styles.titleAccent}>Move You Ahead</span>
            </h2>
            <p className={styles.statsDescription}>
              We engineer solutions that help your business move faster, scale
              confidently, and outpace competition. Every build is future-ready,
              designed to deliver measurable impact on your bottom line.
            </p>

            <div className={styles.statsGrid}>
              <motion.div
                className={styles.statItem}
                initial={{ scale: 0 }}
                animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              >
                <div className={styles.statIcon}>
                  <Users className={styles.statIconSvg} />
                </div>
                <div className={styles.statNumber}>
                  {expertCount}
                  <span className={styles.plus}>+</span>
                </div>
                <div className={styles.statLabel}>Expert Engineers</div>
                <div className={styles.statSubtext}>Top 1% Industry Talent</div>
              </motion.div>

              <motion.div
                className={styles.statItem}
                initial={{ scale: 0 }}
                animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              >
                <div className={styles.statIcon}>
                  <Clock className={styles.statIconSvg} />
                </div>
                <div className={styles.statNumber}>
                  {yearsCount}
                  <span className={styles.plus}>+</span>
                </div>
                <div className={styles.statLabel}>Years Experience</div>
                <div className={styles.statSubtext}>Since 2004</div>
              </motion.div>

              <motion.div
                className={styles.statItem}
                initial={{ scale: 0 }}
                animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              >
                <div className={styles.statIcon}>
                  <UsersIcon className={styles.statIconSvg} />
                </div>
                <div className={styles.statNumber}>
                  {customerCount}
                  <span className={styles.plus}>+</span>
                </div>
                <div className={styles.statLabel}>Satisfied Customers</div>
                <div className={styles.statSubtext}>
                  Startups to Fortune 500
                </div>
              </motion.div>

              <motion.div
                className={styles.statItem}
                initial={{ scale: 0 }}
                animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
              >
                <div className={styles.statIcon}>
                  <CheckCircle className={styles.statIconSvg} />
                </div>
                <div className={styles.statNumber}>97%</div>
                <div className={styles.statLabel}>Client Satisfaction</div>
                <div className={styles.statSubtext}>Repeat Business Rate</div>
              </motion.div>
            </div>

            <Link href="/about/achievements" className={styles.linkWrapper}>
              <motion.button
                className={styles.statsCtaButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Our Achievements
                <ArrowRight className={styles.buttonIcon} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Development Process */}
      <section ref={processRef} className={styles.processSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>
              Proven Processes That Turn{" "}
              <span className={styles.titleAccent}>
                Tech Projects Into Wins
              </span>
            </h2>
            <p className={styles.sectionDescription}>
              From first consultation to final deployment, we ensure every
              milestone is delivered on time, on budget, and on target. Our
              process blends strategic insight with flawless execution, so you
              see ROI from day one.
            </p>
          </motion.div>

          <div className={styles.processGrid}>
            {developmentProcess.map((process, index) => (
              <motion.div
                key={process.step}
                className={styles.processCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className={styles.processNumber}>{process.step}</div>
                <div
                  className={styles.processIconWrapper}
                  style={{ color: process.color }}
                >
                  {process.icon}
                </div>
                <h3 className={styles.processTitle}>{process.title}</h3>
                <p className={styles.processDescription}>
                  {process.description}
                </p>
                <div className={styles.processDuration}>
                  <Clock className={styles.clockIcon} />
                  {process.duration}
                </div>
              </motion.div>
            ))}
          </div>
          <div className={styles.processCta}>
            <Link href="/contact" className={styles.linkWrapper}>
              <motion.button
                className={styles.primaryButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight className={styles.buttonIcon} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Solutions with Perfect Checkerboard */}
      <section className={styles.engineeringSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>
              Engineering Solutions That Solve Your{" "}
              <span className={styles.titleAccent}>Biggest Challenges</span>
            </h2>
            <p className={styles.sectionDescription}>
              No matter the scale, our focus is simple – Measurable results,
              Delivered faster. We build custom solutions for every business
              need.
            </p>
          </motion.div>

          <div
            className={styles.engineeringGrid}
            ref={gridRef}
            style={{
              gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
            }}
          >
            {engineeringSolutions.map((solution, index) => {
              // Calculate checkerboard pattern
              const column = index % columnCount;
              const row = Math.floor(index / columnCount);

              // Perfect checkerboard formula: (row + column) % 2
              const isLight = (row + column) % 2 === 0;
              const backgroundColor = isLight ? "#fff5e6" : "#ffdc94";

              return (
                <Link
                  key={solution.name}
                  href={solution.link}
                  className={styles.linkWrapper}
                >
                  <motion.div
                    className={styles.engineeringCard}
                    style={{ backgroundColor }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ transform: "translateY(-3px)" }}
                  >
                    <div className={styles.engineeringIconWrapper}>
                      {solution.icon}
                    </div>
                    <h3 className={styles.engineeringName}>{solution.name}</h3>
                    <p className={styles.engineeringDescription}>
                      {solution.description}
                    </p>
                    <div className={styles.engineeringArrow}>
                      <ArrowRight className={styles.arrowIcon} />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          <div className={styles.engineeringCta}>
            <Link href="/solutions" className={styles.linkWrapper}>
              <motion.button
                className={styles.primaryButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse All Solutions
                <ArrowRight className={styles.buttonIcon} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      
      {/* Tech Trends - Now 6 items */}
      <section className={styles.techSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>
              Tech Trends We Follow to Build{" "}
              <span className={styles.titleAccent}>Future-ready Solutions</span>
            </h2>
            <p className={styles.sectionDescription}>
              We stay ahead so you do too – leveraging the latest in AI,
              automation, cloud-native architectures, and security-first
              development to keep your business future-proof.
            </p>
          </motion.div>

          <div className={styles.techGrid}>
            {techTrends.map((trend, index) => (
              <Link
                key={trend.name}
                href={trend.link}
                className={styles.linkWrapper}
              >
                <motion.div
                  className={styles.techCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    borderColor: trend.color,
                    boxShadow: `0 20px 40px ${trend.color}20`,
                  }}
                >
                  <div
                    className={styles.techIconWrapper}
                    style={{ color: trend.color }}
                  >
                    {trend.icon}
                  </div>
                  <h3 className={styles.techName}>{trend.name}</h3>
                  <p className={styles.techDescription}>{trend.description}</p>

                  <div className={styles.applicationsList}>
                    {trend.applications.slice(0, 3).map((app, idx) => (
                      <div key={idx} className={styles.applicationItem}>
                        <div
                          className={styles.applicationDot}
                          style={{ backgroundColor: trend.color }}
                        ></div>
                        {app}
                      </div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className={styles.techLink}
                  >
                    <span>Explore {trend.name}</span>
                    <ChevronRight className={styles.linkIcon} />
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className={styles.techCta}>
            <Link href="/technologies" className={styles.linkWrapper}>
              <motion.button
                className={styles.primaryButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Technologies
                <ArrowRight className={styles.buttonIcon} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries - Now 6 items */}
      <section className={styles.industriesSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>
              Industries We <span className={styles.titleAccent}>Cater to</span>
            </h2>
            <p className={styles.sectionDescription}>
              Get what you are looking for to fulfill your software development
              and outsourcing needs at BBNTech, with our expertise on all
              in-demand technologies & platforms.
            </p>
          </motion.div>

          <div className={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className={styles.industryCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(16, 185, 129, 0.05)",
                }}
              >
                <Link href={industry.link} className={styles.industryLink}>
                  <div className={styles.industryIcon}>{industry.icon}</div>
                  <h3 className={styles.industryName}>{industry.name}</h3>
                  <p className={styles.industryDescription}>
                    {industry.description}
                  </p>

                  <button
                    className={styles.expandButton}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleIndustry(index);
                    }}
                  >
                    {openIndustryIndex === index ? (
                      <>
                        <Minus className={styles.expandIcon} />
                        Hide Details
                      </>
                    ) : (
                      <>
                        <Plus className={styles.expandIcon} />
                        View Details
                      </>
                    )}
                  </button>
                </Link>

                {openIndustryIndex === index && (
                  <motion.div
                    className={styles.industryDetails}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className={styles.detailsList}>
                      {industry.details.map((detail, idx) => (
                        <li key={idx} className={styles.detailItem}>
                          <CheckCircle className={styles.detailIcon} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Link href={industry.link} className={styles.linkWrapper}>
                      <button className={styles.industryCtaButton}>
                        View {industry.name} Solutions
                        <ArrowRight className={styles.buttonIcon} />
                      </button>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs with Toggle */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>
              Frequently{" "}
              <span className={styles.titleAccent}>Asked Questions</span>
            </h2>
            <p className={styles.sectionDescription}>
              Have questions related to Software Engineering and IT Outsourcing?
              We have tried to address some of the common concerns of our
              clients.
            </p>
          </motion.div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className={`${styles.faqCard} ${
                  openFaqIndex === index ? styles.faqCardOpen : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  boxShadow: "0 10px 30px rgba(16, 185, 129, 0.1)",
                }}
              >
                <button
                  className={styles.faqHeader}
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <div className={styles.faqToggle}>
                    {openFaqIndex === index ? (
                      <Minus className={styles.toggleIcon} />
                    ) : (
                      <Plus className={styles.toggleIcon} />
                    )}
                  </div>
                </button>

                {openFaqIndex === index && (
                  <motion.div
                    className={styles.faqAnswerWrapper}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                    <Link href="/contact" className={styles.linkWrapper}>
                      <button className={styles.faqCtaButton}>
                        Get Specific Answer
                        <ArrowRight className={styles.buttonIcon} />
                      </button>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className={styles.faqCta}>
            <p className={styles.faqCtaText}>
              Still have questions? Our team is ready to help you 24/7.
            </p>
            <div className={styles.faqButtons}>
              <Link href="/contact" className={styles.linkWrapper}>
                <motion.button
                  className={styles.primaryButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Support
                  <MessageSquare className={styles.buttonIcon} />
                </motion.button>
              </Link>
              <Link href="/faq" className={styles.linkWrapper}>
                <motion.button
                  className={styles.secondaryButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All FAQs
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Helper components for icons
const Truck = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
    />
  </svg>
);

const Settings = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const Package = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);
