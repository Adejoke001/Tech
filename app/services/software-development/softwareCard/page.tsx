import React, { useEffect, useRef, useState } from 'react';
import styles from './softwarecard.module.css';
import { 
  ArrowRight, 
  Lightbulb, 
  Palette, 
  Rocket, 
  Cloud, 
  TestTube, 
  RefreshCw, 
  TrendingUp, 
  Settings, 
  Wrench 
} from 'lucide-react';
import Booking from '@/components/Booking/Booking';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';

const SoftwareDevelopmentServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Product Ideation & Consulting",
      description: "Validate ideas, build prototypes, and define the right tech stack.",
      features: [
        "Conduct market research to assess feasibility",
        "Develop a strategic product roadmap",
        "Create prototypes for early validation"
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Design intuitive, engaging interfaces for seamless user experiences.",
      features: [
        "Research user behavior for optimized design",
        "Ensure smooth navigation and accessibility",
        "Maintain design consistency across platforms"
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "MVP Development",
      description: "Build functional MVPs to test ideas with minimal investment.",
      features: [
        "Prioritize core features for market readiness",
        "Gather early user feedback for improvements",
        "Manage resources for cost-efficient development"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "SaaS Development",
      description: "Create scalable SaaS solutions with seamless upgrades.",
      features: [
        "Implement cloud-based architecture easily",
        "Integrate tools like Slack and Google Analytics",
        "Ensure easy maintenance & continuous updates"
      ]
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "QA & Testing",
      description: "Ensure critical aspects of production functioning, performance, & security.",
      features: [
        "Use manual and automated testing for reliability",
        "Improve security, performance, and usability",
        "Identify and fix vulnerabilities as soon as they're caught"
      ]
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Migration & Modernization",
      description: "We upgrade legacy systems with zero downtime.",
      features: [
        "Migrate apps to the cloud for better scalability",
        "Modernize software with the latest technologies",
        "Integrate seamlessly with existing systems"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Drive business growth with artificial intelligence, cloud, and automation.",
      features: [
        "Use modern tech for fast operations",
        "Automate workflows for efficiency",
        "Enable data-driven decision-making"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "DevOps",
      description: "Optimize software development with DevOps practices.",
      features: [
        "Implement CI/CD for faster releases",
        "Automate infrastructure management",
        "Improve team collaboration"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Support & Maintenance",
      description: "Provide technical assistance and continuous improvements for existing software.",
      features: [
        "Proactive issue detection",
        "Performance monitoring services",
        "System upgrade planning"
      ]
    },
  ];

  const stats = [
    { value: 675, suffix: "+", label: "Full-time Staff" },
    { value: 20, suffix: "+", label: "Years Experience" },
    { value: 2500, suffix: "+", label: "Satisfied", description: "Customers" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <>
     <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Software Product Development Services <span className={styles.titleAccent}>We Offer</span>
          </h2>
          <p className={styles.sectionDescription}>
            We provide end-to-end software development services tailored to your business needs, 
            leveraging cutting-edge technologies and industry best practices.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon} style={{ color: '#10b981' }}>
                {service.icon}
              </div>
              
              <h3 className={styles.serviceTitle}>
                {service.title}
              </h3>
              
              <p className={styles.serviceDescription}>
                {service.description}
              </p>
              
              <div className={styles.featuresList}>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={styles.featureItem}>
                    <div className={styles.featureDot}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <a href="#" className={styles.learnMoreLink}>
                Know More
                <ArrowRight className={`${styles.arrow} w-4 h-4`} />
              </a>
            </div>
          ))}
        </div>


        {/* Vision to Reality Card */}
        <div className={styles.visionCardSection}>
          <div className={styles.visionCardContainer}>
            <div className={styles.visionCardContent}>
              <div className={styles.visionTextContent}>
                <h3 className={styles.visionTitle}>From Vision to Reality. Let&apos;s Build Faster & Smarter!</h3>
                <p className={styles.visionDescription}>
                  Turn your innovative ideas into a powerful software product. We provide expert development services to bring your vision to life.
                </p>
                <button className={styles.visionCtaButton}>
                  Book a Free Consultation
                </button>
              </div>
              <div className={styles.visionImageContainer}>
                <Image
                  src="/images/workforce.jpg"
                  alt="Software Development Vision to Reality"
                  fill
                  className={styles.visionImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scale with Confidence Card */}
        <div className={styles.scaleCardSection}>
          <div className={styles.scaleCardContainer}>
            <div className={styles.scaleCardContent}>
              <div className={styles.scaleTextContent}>
                <h3 className={styles.scaleTitle}>Scale with Confidence, Innovate with Speed</h3>
                <p className={styles.scaleDescription}>
                  From ideation to deployment, we handle it all. We craft powerful software solutions that capture markets and win customers.
                </p>
                <button className={styles.scaleCtaButton}>
                  Contact Us
                </button>
              </div>
              <div className={styles.statsGrid} ref={statsRef}>
                {stats.map((stat, index) => (
                  <div key={index} className={styles.statCircle}>
                    <div className={styles.circleContainer}>
                      <svg className={styles.circleSvg} viewBox="0 0 100 100">
                        <circle
                          className={styles.circleBackground}
                          cx="50"
                          cy="50"
                          r="45"
                        />
                        <circle
                          className={`${styles.circleProgress} ${isVisible ? styles.animate : ''}`}
                          cx="50"
                          cy="50"
                          r="45"
                          style={{ animationDelay: `${index * 0.3}s` }}
                        />
                      </svg>
                      <div className={styles.statContent}>
                        <div className={styles.statValue}>
                          {stat.value}<span className={styles.statSuffix}>{stat.suffix}</span>
                        </div>
                        <div className={styles.statLabel}>{stat.label}</div>
                        <div className={styles.statDescription}>{stat.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Booking />
    <Footer/>

    </>
  );
};

export default SoftwareDevelopmentServices;