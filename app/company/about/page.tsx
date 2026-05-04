'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Sparkles, ArrowRight, Award, MessageSquare,
    Users, Shield,
    Heart, Target, Star,
} from 'lucide-react';
import styles from './about.module.css';

export default function AboutPage() {
    // ----- CORE VALUES -----
    const coreValues = [
        {
            title: 'Respect',
            description: 'Set trends for your peers and the industry in general to follow.',
            icon: <Heart />,
            color: '#3B82F6',
        },
        {
            title: 'Exceptional Value',
            description: 'Understand and exceed customer\'s expectations all the time.',
            icon: <Star />,
            color: '#10B981',
        },
        {
            title: 'Authenticity',
            description: 'Be sincere, honest, and open in dealings to ensure trustworthiness.',
            icon: <Shield />,
            color: '#8B5CF6',
        },
        {
            title: 'Leadership',
            description: 'Lead by example, drive innovation, and create positive change across teams.',
            icon: <Target />,
            color: '#F59E0B',
        },
    ];

    // ----- TEAM MEMBERS (with image placeholder) 
    const teamMembers = [
        {
            name: 'Ben',
            role: 'Chief Executive Officer',
            bio: 'An entrepreneur at heart with love for technology, Ben uniquely blends business analysis, strategy, targeted objectives, and ROI with IT solutions.',
            image: '/images/user.png', 
        },
        {
            name: 'Precious',
            role: 'Software Engineer',
            bio: 'Precious oversees BBMcoders\'s vast engineering organization, which drives the company\'s core programming.',
            image: '/images/user.png',
        },
        {
            name: 'Adejoke',
            role: 'Frontend Developer',
            bio: 'Adejoke heads the frontend development department, where she manages the entire frontend team.',
            image: '/images/user.png',
        },
        {
            name: 'Stephen',
            role: 'Software Engineer',
            bio: 'Stephen leads the Mobile App team, responsible for the company\'s mobile app development.',
            image: '/images/user.png',
        },
        // {
        //     name: 'Ngozi Eze',
        //     role: 'Head Of Resourcing & Partnerships',
        //     bio: 'Ngozi is a strategist and digital thought leader who bridges technology and client satisfaction.',
        //     image: '/images/user.png',
        // },
        // {
        //     name: 'Tunde Balogun',
        //     role: 'Technical Manager',
        //     bio: 'With a solid technical background, Tunde manages client communication, project management, and deliveries.',
        //     image: '/images/user.png',
        // },
        // {
        //     name: 'Yemi Adesina',
        //     role: 'VP - Business Development',
        //     bio: 'More than 15 years experience of background trading with emerging technologies; helps startups and SMEs build their co-branded teams.',
        //     image: '/images/user.png',
        // },
        // {
        //     name: 'Kemi Akintola',
        //     role: 'Sr. IT Executive',
        //     bio: 'Leads IT Department and responsible for providing high-quality technical services and finding appropriate tools to automate and accomplish jobs timely.',
        //     image: '/images/user.png',
        // },
    ];

    // ----- TIMELINE -----
    const timeline = [
        { year: '2004', event: 'BBMcoders was founded in Lagos, Nigeria, with a vision to deliver IT outsourcing services worldwide.' },
        { year: '2010', event: 'Expanded operations to serve clients across Africa, Europe, and North America.' },
        { year: '2015', event: 'Reached 500+ skilled professionals and launched dedicated development centers.' },
        { year: '2020', event: 'Celebrated 16 years of excellence with 2500+ successful projects delivered globally.' },
        { year: '2024', event: '20+ years of proud existence, trusted by startups to Fortune 500 companies.' },
        { year: '2026', event: 'Accelerated digital transformation services with AI-driven solutions and strengthening global partnerships.' }
    ];

    // ----- AWARDS & RECOGNITIONS (placeholder) -----
    const awards = [
        { name: 'Great Place to Work', year: '2023', logo: '🏆' },
        { name: 'Top Software Developer', year: '2022', logo: '⭐' },
        { name: 'Best IT Employer', year: '2021', logo: '🎖️' },
        { name: 'Fastest Growing Tech Company', year: '2020', logo: '🚀' },
    ];

    // ----- CLIENT TESTIMONIALS (with image placeholder) -----
    const testimonials = [
    {
        name: 'Daniel',
        // role: 'CEO, BrightPath Solutions',
        content: 'Working with BBMcoders was a smooth experience from start to finish. Their team quickly understood our requirements and delivered exactly what we envisioned, on time and within budget.',
        image: '/images/user.png',
    },
    {
        name: 'Morris',
        // role: 'Product Manager, NexaCore',
        content: 'The level of professionalism and communication from BBMcoders stood out. They kept us informed throughout the project and handled every challenge with confidence.',
        image: '/images/user.png',
    },
    {
        name: 'Samuel Okoye',
        // role: 'Founder, AgroLink Africa',
        content: 'BBMcoders helped us turn our idea into a fully functional platform in record time. Their technical knowledge and commitment made a huge difference for our startup.',
        image: '/images/user.png',
    },
    {
        name: 'Laura',
        // role: 'Operations Lead, FinEdge Group',
        content: 'We were impressed by how detail-oriented the BBMcoders team is. They delivered a reliable and scalable solution that exceeded our expectations.',
        image: '/images/user.png',
    },
    {
        name: 'Michael',
        // role: 'Director, UrbanTech Labs',
        content: 'From design to deployment, BBMcoders demonstrated real expertise. Their ability to translate our ideas into a clean, user-friendly product was outstanding.',
        image: '/images/user.png',
    },
    {
        name: 'Fatima Bello',
        // role: 'Co-founder, HealthBridge Nigeria',
        content: 'Choosing BBMcoders was one of the best decisions we made. Their support, speed, and quality of work have been exceptional throughout our collaboration.',
        image: '/images/user.png',
    },
    ];

    // ----- COMPANY STATS -----
    const companyStats = [
        { value: '700+', label: 'Full-time Staff', icon: <Users />, description: 'Top 1% industry talent' },
        { value: '20+', label: 'Years Experience', icon: <Award />, description: 'Since 2004' },
        { value: '4500+', label: 'Satisfied Clients', icon: <MessageSquare />, description: 'Global client base' },
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
                        alt="About BBMcoders"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroInner}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.heroBadge}>
                            <Sparkles size={16} /> About BBMcoders
                        </div>
                        <h1 className={styles.heroTitle}>
                            We Are – Software Development Company <span className={styles.highlight}>Since 2004</span>
                        </h1>
                        <p className={styles.heroDescription}>
                            We combine business domain knowledge, proven methodologies, and the technology expertise of 700+ skilled software professionals to yield high-quality solutions that add value to businesses.
                        </p>
                        <Link href="/contact" className={styles.heroButton}>
                            Start a Conversation <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ===== MISSION SECTION ===== */}
            <section className={styles.missionSection}>
                <div className={styles.container}>
                    <div className={styles.missionGrid}>
                        <div className={styles.missionContent}>
                            <h2 className={styles.missionTitle}>Our Mission</h2>
                            <p className={styles.missionText}>
                                We drive business success through innovative digital solutions, enhancing efficiency, fostering growth, and providing a competitive edge for businesses of all sizes, everywhere.
                            </p>
                            <p className={styles.missionText}>
                                We help businesses unveil and satisfy demand for digital transformation by providing engineering and consulting services that foster competitiveness and innovation.
                            </p>
                            <div className={styles.missionFounder}>
                                {/* <div className={styles.founderAvatar}>
                                    <Image src="/images/user.png" alt="Adebayo Ogunlesi" width={60} height={60} className={styles.avatarImage} />
                                </div> */}
                                  <div className={styles.founderAvatar} style={{ backgroundColor: '#3B82F6', color: 'white' }}>
                                    BE
                                </div>
                                <div className={styles.founderInfo}>
                                    <h4>Ben</h4>
                                    <p>CEO, BBMcoders</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.missionImage}>
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="Our Team"
                                fill
                                className={styles.missionImg}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CORE VALUES SECTION ===== */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Our <span className={styles.titleHighlight}>Core Values</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            We embrace a well-established set of cultural and professional values which represent our highest aspirations for how we engage as colleagues, fellows, alumni, partners, and board members.
                        </p>
                    </div>
                    <div className={styles.valuesGrid}>
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={index}
                                className={styles.valueCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.valueIcon} style={{ color: value.color }}>
                                    {value.icon}
                                </div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TIMELINE SECTION ===== */}
            <section className={styles.timelineSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            20+ Years of <span className={styles.titleHighlight}>Proud Existence</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            BBMcoders set its first stone down in 2004 in Lagos, Nigeria, and has been thriving ever since. We deliver exceptional technology solutions for world-class businesses in every industry – from dynamic startups and SMBs to Fortune 500 companies.
                        </p>
                    </div>
                    <div className={styles.timelineGrid}>
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.timelineCard}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.timelineYear}>{item.year}</div>
                                <div className={styles.timelineEvent}>{item.event}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== AWARDS SECTION ===== */}
            <section className={styles.awardsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Awards & <span className={styles.titleHighlight}>Recognitions</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            In the last 20 years, we have been acknowledged by prestigious organizations and awarded for our work.
                        </p>
                    </div>
                    <div className={styles.awardsGrid}>
                        {awards.map((award, index) => (
                            <motion.div
                                key={index}
                                className={styles.awardCard}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.awardLogo}>{award.logo}</div>
                                <h3 className={styles.awardName}>{award.name}</h3>
                                <p className={styles.awardYear}>{award.year}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TEAM SECTION ===== */}
            <section className={styles.teamSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Our <span className={styles.titleHighlight}>Team</span>
                        </h2>
                        <p className={styles.sectionDescription}>
                            Our team members have respect, trust & care for each other. Our greatest strength is team spirit & dedication toward the common goal of client satisfaction.
                        </p>
                    </div>
                    <div className={styles.teamGrid}>
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className={styles.teamCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.teamAvatar}>
                                    <Image src={member.image} alt={member.name} width={120} height={120} className={styles.teamImage} />
                                </div>
                                <h3 className={styles.teamName}>{member.name}</h3>
                                <p className={styles.teamRole}>{member.role}</p>
                                <p className={styles.teamBio}>{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== COMPANY STATS ===== */}
            <section className={styles.statsSection}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        {companyStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className={styles.statCard}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.statIcon}>{stat.icon}</div>
                                <div className={styles.statValue}>{stat.value}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                                <div className={styles.statDescription}>{stat.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS SECTION ===== */}
            <section className={styles.testimonialsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            What Our <span className={styles.titleHighlight}>Clients Say</span>
                        </h2>
                    </div>
                    <div className={styles.testimonialsGrid}>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className={styles.testimonialCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.testimonialHeader}>
                                    <div className={styles.testimonialAvatar}>
                                        <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className={styles.testimonialImage} />
                                    </div>
                                    <div>
                                        <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                                        {/* <p className={styles.testimonialRole}>{testimonial.role}</p> */}
                                    </div>
                                </div>
                                <p className={styles.testimonialContent}>&quot;{testimonial.content}&quot;</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Let&apos;s Build Something Great Together</h2>
                        <p className={styles.ctaDescription}>
                            Get a free consultation and let us know your project idea to turn it into an amazing digital product.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Start a Conversation <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}