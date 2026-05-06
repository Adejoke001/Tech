import React from "react";
import Link from "next/link";
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import styles from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/company/about" },
      { name: "Case Studies", href: "/company/case-studies" },
      { name: "Blog", href: "/company/blogs" },
      { name: "Clients & Testimonials", href: "/company/testimonials" },
    ],
    services: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Apps", href: "/services/mobile-development" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "Consulting", href: "/services/qa-consulting" },
    ],
    ourExpertise: [
      {
        name: "Software Product Engineering",
        href: "/services/software-development",
      },
      {
        name: "Application Development",
        href: "/services/application-development",
      },
      { name: "Cloud Services", href: "/services/cloud-devops-services" },
      { name: "AI & ML", href: "/services/machine-learning" },
    ],
    hireDevelopers: [
      { name: "Hire AI Engineers", href: "/services/ai-automation-consulting" },
      { name: "Hire Backend Developers", href: "/hire-developers/backend-developers" },
      { name: "Hire Frontend Developers", href: "/hire-developers/frontend-developers" },
      { name: "Hire Mobile App Developers", href: "/hire-developers/mobile-developers" },
    ],
    clientsWeServe: [
      { name: "For Startups", href: "/solutions/solutions-startups" },
      { name: "For Enterprises", href: "/solutions/solutions-enterprises" },
    ],
  };

  // Office Locations (4 grids)
  const officeLocations = [
    {
      country: "Nigeria (Lagos)",
      address: "Lagos, Nigeria",
    },
    {
      country: "United States (New York)",
      address: "xyzcity",
    },
    {
      country: "United Kingdom (London)",
      address: "xyzcity",
    },
    {
      country: "India (Bangalore)",
      address: "xyzcity",
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Links Sections */}
          <div className={styles.linksSections}>
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Company</h3>
              <ul className={styles.linksList}>
                {footerLinks.company.map((link) => (
                  <li key={link.name} className={styles.linkItem}>
                    <Link href={link.href} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Services</h3>
              <ul className={styles.linksList}>
                {footerLinks.services.map((link) => (
                  <li key={link.name} className={styles.linkItem}>
                    <Link href={link.href} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Our Expertise</h3>
              <ul className={styles.linksList}>
                {footerLinks.ourExpertise.map((link) => (
                  <li key={link.name} className={styles.linkItem}>
                    <Link href={link.href} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Hire Developers</h3>
              <ul className={styles.linksList}>
                {footerLinks.hireDevelopers.map((link) => (
                  <li key={link.name} className={styles.linkItem}>
                    <Link href={link.href} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Clients We Serve</h3>
              <ul className={styles.linksList}>
                {footerLinks.clientsWeServe.map((link) => (
                  <li key={link.name} className={styles.linkItem}>
                    <Link href={link.href} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Address Section (4 grids) */}
        <div className={styles.addressSection}>
          <div className={styles.addressGrid}>
            {officeLocations.map((location, index) => (
              <div key={index} className={styles.addressCard}>
                <h4 className={styles.addressCountry}>{location.country}</h4>
                <p className={styles.addressText}>{location.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info with Social Links */}
        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <div className={styles.contactDetails}>
              {/* Email - with Mail SVG icon */}
              <div className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <a href="mailto:hello@bbmcoders.com" className={styles.contactLink}>
                  hello@bbmcoders.com
                </a>
              </div>
              {/* Phone - with Phone SVG icon */}
              <div className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                <a href="tel:+15551234567" className={styles.contactLink}>
                  +1 (555) 123-4567
                </a>
              </div>
              {/* Address - with MapPin SVG icon */}
              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <span>123 Business District, Tech City</span>
              </div>
            </div>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={styles.socialLink}
                    aria-label={`Follow us on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {currentYear} BBMcoders. All rights reserved.
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/company/privacy-policy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <Link href="/company/disclaimer" className={styles.bottomLink}>
              Disclaimer
            </Link>
            <Link href="/company/terms-of-service" className={styles.bottomLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;