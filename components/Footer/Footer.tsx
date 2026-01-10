import React from "react";
import Link from "next/link";
import { Linkedin, Twitter, Github, Facebook, Instagram } from "lucide-react";
import styles from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Clients & Testimonials", href: "/testimonials" },
    ],
    services: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Apps", href: "/services/mobile-apps" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Consulting", href: "/services/consulting" },
    ],
    ourExpertise: [
      {
        name: "Software Product Engineering",
        href: "/expertise/product-engineering",
      },
      {
        name: "Application Development",
        href: "/expertise/application-development",
      },
      { name: "Staff Augmentation", href: "/expertise/staff-augmentation" },
      { name: "Cloud Services", href: "/expertise/cloud-services" },
      { name: "AI & ML", href: "/expertise/ai-ml" },
    ],
    hireDevelopers: [
      { name: "Hire AI Engineers", href: "/hire/ai-engineers" },
      { name: "Hire Backend Developers", href: "/hire/backend-developers" },
      { name: "Hire Frontend Developers", href: "/hire/frontend-developers" },
      {
        name: "Hire Blockchain Developers",
        href: "/hire/blockchain-developers",
      },
      { name: "Hire Mobile App Developers", href: "/hire/mobile-developers" },
    ],
    clientsWeServe: [
      { name: "For Startups", href: "/clients/startups" },
      { name: "For Enterprises", href: "/clients/enterprises" },
    ],
  };

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

        {/* Contact Info with Social Links */}
        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <span>hello@bbntech.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
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
                    /* aria-label={social.name} */
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
            © {currentYear} BBNTech. All rights reserved.
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className={styles.bottomLink}>
              Disclaimer
            </Link>
            <Link href="/terms" className={styles.bottomLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
