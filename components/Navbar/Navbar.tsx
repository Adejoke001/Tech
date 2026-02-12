"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

// Simple icons
const MenuIcon = () => <span className="text-3xl">☰</span>;
const CloseIcon = () => <span className="text-3xl">✕</span>;

// Dropdown icons
const ProductIcon = () => <span className={styles.dropdownIcon}>📦</span>;
const SoftwareIcon = () => <span className={styles.dropdownIcon}>💻</span>;
const QAIcon = () => <span className={styles.dropdownIcon}>🔍</span>;
const ConsultingIcon = () => <span className={styles.dropdownIcon}>💡</span>;
const DesignIcon = () => <span className={styles.dropdownIcon}>🛠️</span>;
const AIIcon = () => <span className={styles.dropdownIcon}>🤖</span>;
const AutomationIcon = () => <span className={styles.dropdownIcon}>⚡</span>;
const EnterpriseIcon = () => <span className={styles.dropdownIcon}>🏢</span>;
const SecurityIcon = () => <span className={styles.dropdownIcon}>🛡️</span>;
const DataIcon = () => <span className={styles.dropdownIcon}>📊</span>;
const CloudIcon = () => <span className={styles.dropdownIcon}>☁️</span>;
const APIIcon = () => <span className={styles.dropdownIcon}>🔗</span>;

const FrontendIcon = () => <span className={styles.dropdownIcon}>🎨</span>;
const BackendIcon = () => <span className={styles.dropdownIcon}>⚙️</span>;
const MobileIcon = () => <span className={styles.dropdownIcon}>📱</span>;
const InfrastructureIcon = () => (
  <span className={styles.dropdownIcon}>🖥️</span>
);
const QADevIcon = () => <span className={styles.dropdownIcon}>✅</span>;
const DataAIIcon = () => <span className={styles.dropdownIcon}>🧠</span>;

const StartupIcon = () => <span className={styles.dropdownIcon}>🚀</span>;
const ScaleupIcon = () => <span className={styles.dropdownIcon}>📈</span>;
const EnterpriseSolIcon = () => <span className={styles.dropdownIcon}>🏛️</span>;
const ComplianceIcon = () => <span className={styles.dropdownIcon}>🔒</span>;

const FintechIcon = () => <span className={styles.dropdownIcon}>💰</span>;
const MediaIcon = () => <span className={styles.dropdownIcon}>🎬</span>;
const EcommerceIcon = () => <span className={styles.dropdownIcon}>🛒</span>;
const EducationIcon = () => <span className={styles.dropdownIcon}>🎓</span>;

const MethodologyIcon = () => <span className={styles.dropdownIcon}>📐</span>;
const PartnershipIcon = () => <span className={styles.dropdownIcon}>🤝</span>;
const CareersIcon = () => <span className={styles.dropdownIcon}>⭐</span>;
const CaseStudiesIcon = () => <span className={styles.dropdownIcon}>📚</span>;
const BlogIcon = () => <span className={styles.dropdownIcon}>✍️</span>;
const TestimonialsIcon = () => <span className={styles.dropdownIcon}>💬</span>;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null
  );

  const toggleMobileMenu = (menuName: string) => {
    setExpandedMobileMenu(expandedMobileMenu === menuName ? null : menuName);
  };

  // Updated dropdown data with icons
  const dropdowns = {
    services: {
      title: "Services",
      href: "/services",
      items: [
        {
          name: "Product Development",
          href: "/services/product-development",
          icon: <ProductIcon />,
        },
        {
          name: "Software Development",
          href: "/services/software-development",
          icon: <SoftwareIcon />,
        },
        {
          name: "Quality Assurance & Testing",
          href: "/services/quality-assurance-testing",
          icon: <QAIcon />,
        },
        {
          name: "QA Strategy Consulting",
          href: "/services/qa-consulting",
          icon: <ConsultingIcon />,
        },
        {
          name: "UI/UX Design Services",
          href: "/services/ui-ux-design",
          icon: <DesignIcon />,
        },
        {
          name: "Machine Learning",
          href: "/services/machine-learning",
          icon: <AIIcon />,
        },
        {
          name: "AI & Automation Consulting",
          href: "/services/ai-automation-consulting",
          icon: <AutomationIcon />,
        },
        {
          name: "Enterprise Software Development",
          href: "/services/enterprise-software-development",
          icon: <EnterpriseIcon />,
        },
        {
          name: "Cybersecurity Services",
          href: "/services/cybersecurity-services",
          icon: <SecurityIcon />,
        },
        {
          name: "Data Engineering & Analytics",
          href: "/services/data-engineering-analytics",
          icon: <DataIcon />,
        },
        {
          name: "Cloud & DevOps Services",
          href: "/services/cloud-devops-services",
          icon: <CloudIcon />,
        },
        {
          name: "Integration & API Services",
          href: "/services/integration-api-services",
          icon: <APIIcon />,
        },
      ],
    },
    hire: {
      title: "Hire Developers",
      href: "/hire-developers",
      items: [
        {
          name: "Frontend",
          href: "/hire-developers/frontend-developers",
          icon: <FrontendIcon />,
        },
        {
          name: "Backend",
          href: "/hire-developers/backend-developers",
          icon: <BackendIcon />,
        },
        {
          name: "Mobile App",
          href: "/hire-developers/mobile-developers",
          icon: <MobileIcon />,
        },
        {
          name: "Full Stack",
          href: "/hire-developers/fullstack-developers",
          icon: <InfrastructureIcon />,
        },
        {
          name: "QA & Testing",
          href: "/hire-developers/qa-developers",
          icon: <QADevIcon />,
        },
        
      ],
    },
    solutions: {
      title: "Solutions",
      href: "/solutions",
      items: [
        {
          name: "Startups",
          href: "/solutions/solutions-startups",
          icon: <StartupIcon />,
        },
        {
          name: "Scale-ups",
          href: "/solutions/solutions-scale-ups",
          icon: <ScaleupIcon />,
        },
        {
          name: "Enterprises",
          href: "/solutions/solutions-enterprises",
          icon: <EnterpriseSolIcon />,
        },
        {
          name: "Specialized Solutions",
          href: "/solutions/specialized-solutions",
          icon: <ComplianceIcon />,
        },
      ],
    },
    industries: {
      title: "Industries",
      href: "/industries",
      items: [
        {
          name: "Fintech & Financial Services",
          href: "/industries/industries-fintech",
          icon: <FintechIcon />,
        },
        {
          name: "Media & Entertainment Technology",
          href: "/industries/industries-media",
          icon: <MediaIcon />,
        },
        {
          name: "E-commerce & Retail Solutions",
          href: "/industries/industries-ecommerce",
          icon: <EcommerceIcon />,
        },
        {
          name: "Education & Edtech Solutions",
          href: "/industries/industries-education",
          icon: <EducationIcon />,
        },
      ],
    },
    company: {
      title: "Company",
      href: "company",
      items: [
        // Company section
        {
          name: "Our Development Methodology",
          href: "/company/methodology",
          icon: <MethodologyIcon />,
        },
        {
          name: "Partnerships & Certifications",
          href: "/company/partnerships",
          icon: <PartnershipIcon />,
        },
        {
          name: "Careers & Company Culture",
          href: "/company/careers",
          icon: <CareersIcon />,
        },
        {
          name: "Success Stories & Case Studies",
          href: "/company/case-studies",
          icon: <CaseStudiesIcon />,
        },
        // Resources section
        { name: "Blog & Insights", href: "/company/blog", icon: <BlogIcon /> },
        {
          name: "Clients & Testimonials",
          href: "/company/testimonials",
          icon: <TestimonialsIcon />,
        },
      ],
    },
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  return (
    <nav
      className={`${styles.navbar} ${isNavbarHovered ? styles.navbarHovered : ""
        }`}
      onMouseEnter={() => setIsNavbarHovered(true)}
      onMouseLeave={() => setIsNavbarHovered(false)}
    >
      <div className={styles.container}>
        {/* Main Navbar */}
        <div className={styles.mainNav}>
          {/* Logo */}
          <Link
            href="/"
            className={`${styles.logo} ${isNavbarHovered ? styles.logoHovered : ""
              }`}
            onClick={closeAll}
          >
            BBNTech
          </Link>

          {/* Desktop Menu - Exact ValueCoders Structure */}
          <div className={styles.desktopMenu}>
            {/* Services Dropdown */}
            <div className={styles.dropdownContainer}>
              <button
                className={`${styles.dropdownButton} ${isNavbarHovered ? styles.dropdownButtonHovered : ""
                  }`}
              >
                Services
              </button>

              <div className={styles.dropdownMenu}>
                {dropdowns.services.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={styles.dropdownLink}
                    onClick={closeAll}
                  >
                    <span className={styles.dropdownLinkContent}>
                      {item.icon}
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Hire Developers Dropdown */}
            <div className={styles.dropdownContainer}>
              <button
                className={`${styles.dropdownButton} ${isNavbarHovered ? styles.dropdownButtonHovered : ""
                  }`}
              >
                Hire Developers
              </button>

              <div className={styles.dropdownMenu}>
                {dropdowns.hire.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={styles.dropdownLink}
                    onClick={closeAll}
                  >
                    <span className={styles.dropdownLinkContent}>
                      {item.icon}
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className={styles.dropdownContainer}>
              <button
                className={`${styles.dropdownButton} ${isNavbarHovered ? styles.dropdownButtonHovered : ""
                  }`}
              >
                Solutions
              </button>

              <div className={styles.dropdownMenu}>
                {dropdowns.solutions.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={styles.dropdownLink}
                    onClick={closeAll}
                  >
                    <span className={styles.dropdownLinkContent}>
                      {item.icon}
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className={styles.dropdownContainer}>
              <button
                className={`${styles.dropdownButton} ${isNavbarHovered ? styles.dropdownButtonHovered : ""
                  }`}
              >
                Industries
              </button>

              <div className={styles.dropdownMenu}>
                {dropdowns.industries.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={styles.dropdownLink}
                    onClick={closeAll}
                  >
                    <span className={styles.dropdownLinkContent}>
                      {item.icon}
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Dropdown */}
            <div className={styles.dropdownContainer}>
              <button
                className={`${styles.dropdownButton} ${isNavbarHovered ? styles.dropdownButtonHovered : ""
                  }`}
              >
                Company
              </button>

              <div className={styles.dropdownMenu}>
                {dropdowns.company.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={styles.dropdownLink}
                    onClick={closeAll}
                  >
                    <span className={styles.dropdownLinkContent}>
                      {item.icon}
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Pricing Link (No dropdown) */}
            <Link
              href="/pricing"
              className={`${styles.navLink} ${isNavbarHovered ? styles.navLinkHovered : ""
                }`}
            >
              Pricing
            </Link>
          </div>

          {/* Contact Us Button */}
          {/* <button className={`${styles.contactButton} ${isNavbarHovered ? styles.contactButtonHovered : 'rounded-md'}`}>
            <Link href="/contact">
            CONTACT US
            </Link>
          </button> */}

          <Link
            href="/contact"
            className={`${styles.contactButton} ${isNavbarHovered ? styles.contactButtonHovered : "rounded-md"
              }`}
          >
            CONTACT US
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.mobileMenuButton} ${isNavbarHovered ? styles.mobileMenuButtonHovered : ""
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            {/* Services Dropdown */}
            <div className={styles.mobileDropdownContainer}>
              <button
                className={styles.mobileDropdownButton}
                onClick={() => toggleMobileMenu("services")}
              >
                Services
                <span className={styles.dropdownArrow}>
                  {expandedMobileMenu === "services" ? "▲" : "▼"}
                </span>
              </button>
              {expandedMobileMenu === "services" && (
                <div className={styles.mobileDropdownMenu}>
                  {dropdowns.services.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={styles.mobileDropdownLink}
                      onClick={closeAll}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Hire Developers Dropdown */}
            <div className={styles.mobileDropdownContainer}>
              <button
                className={styles.mobileDropdownButton}
                onClick={() => toggleMobileMenu("hire")}
              >
                Hire Developers
                <span className={styles.dropdownArrow}>
                  {expandedMobileMenu === "hire" ? "▲" : "▼"}
                </span>
              </button>
              {expandedMobileMenu === "hire" && (
                <div className={styles.mobileDropdownMenu}>
                  {dropdowns.hire.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={styles.mobileDropdownLink}
                      onClick={closeAll}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className={styles.mobileDropdownContainer}>
              <button
                className={styles.mobileDropdownButton}
                onClick={() => toggleMobileMenu("solutions")}
              >
                Solutions
                <span className={styles.dropdownArrow}>
                  {expandedMobileMenu === "solutions" ? "▲" : "▼"}
                </span>
              </button>
              {expandedMobileMenu === "solutions" && (
                <div className={styles.mobileDropdownMenu}>
                  {dropdowns.solutions.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={styles.mobileDropdownLink}
                      onClick={closeAll}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className={styles.mobileDropdownContainer}>
              <button
                className={styles.mobileDropdownButton}
                onClick={() => toggleMobileMenu("industries")}
              >
                Industries
                <span className={styles.dropdownArrow}>
                  {expandedMobileMenu === "industries" ? "▲" : "▼"}
                </span>
              </button>
              {expandedMobileMenu === "industries" && (
                <div className={styles.mobileDropdownMenu}>
                  {dropdowns.industries.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={styles.mobileDropdownLink}
                      onClick={closeAll}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className={styles.mobileDropdownContainer}>
              <button
                className={styles.mobileDropdownButton}
                onClick={() => toggleMobileMenu("company")}
              >
                Company
                <span className={styles.dropdownArrow}>
                  {expandedMobileMenu === "company" ? "▲" : "▼"}
                </span>
              </button>
              {expandedMobileMenu === "company" && (
                <div className={styles.mobileDropdownMenu}>
                  {dropdowns.company.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={styles.mobileDropdownLink}
                      onClick={closeAll}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className={styles.mobileLink}
              onClick={closeAll}
            >
              Pricing
            </Link>

            <button className={styles.mobileContactButton}>Contact Us</button>
          </div>
        )}
      </div>
    </nav>
  );
}
