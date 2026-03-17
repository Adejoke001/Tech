'use client';

// import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Sparkles, ArrowRight, Play, Quote,
} from 'lucide-react';
import styles from './testimonials.module.css';

export default function TestimonialsPage() {
    // Client logos (placeholders – replace with actual logo images)
    const clients = [
        { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=150&h=150&fit=crop' },
        { name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=150&h=150&fit=crop' },
        { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=150&h=150&fit=crop' },
        { name: 'IBM', logo: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=150&h=150&fit=crop' },
        { name: 'SAP', logo: 'https://plus.unsplash.com/premium_photo-1668612061259-1650cc1427dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JhY2xlfGVufDB8fDB8fHww' },
        { name: 'Oracle', logo: 'https://images.unsplash.com/photo-1554774853-719586f82d77?w=150&h=150&fit=crop' },
        // { name: 'Salesforce', logo: 'https://images.unsplash.com/photo-1557832935-74e5b484a9f8?w=150&h=150&fit=crop' },
        // { name: 'Adobe', logo: 'https://images.unsplash.com/photo-1579403124614-197f69f818d8?w=150&h=150&fit=crop' },
    ];

    // Testimonials data (from the reference site)
    const testimonials = [
        {
            id: 1,
            quote: "Huge thank you to BBMTech; they have been a massive help in enabling us to start developing our project within a few weeks, so it's been great! There have been two small bumps in the road, but overall, It's been a fantastic service. I have already recommended it to one of my friends.",
            name: 'Mohammed Mirza',
            role: 'Director, LOCALMASTERCHEFS LTD',
            hasVideo: true,
            videoThumb: '/images/user.png',
        },
        {
            id: 2,
            quote: "BBMTech is our go-to partner to help us realize our software needs; they are supportive, friendly, and always ready to help us when we face difficulties in the project. 10/10 would recommend.",
            name: 'Michelle Fno',
            role: 'CEO, Miscato Limited',
            hasVideo: false,
        },
        {
            id: 3,
            quote: "BBMTech had great technical expertise, both in front-end and back-end development. Other project management was well organized. Account management was friendly and always available. I would give BBMTech ten out of ten!",
            name: 'Kris Bruynson',
            role: 'Director, Storloft',
            hasVideo: true,
            videoThumb: '/images/user.png',
        },
        {
            id: 4,
            quote: "Our internal development team was looking to partner with full stack experts that could lend a hand with a major project we were constructing. Value Coders is a great service and team of professionals that have proven to be knowledgeable and efficient in program development. Rohan S. was a key developer we worked with, highly skilled, providing recommendations to build out a production ready program.",
            name: 'William Francis',
            role: 'Upthinity',
            hasVideo: false,
        },
        {
            id: 5,
            quote: "What we found with BBMTech was they took time. The Project managers took a lot of time to start, to really understand our project before coming up with a contract or what they thought we needed. I had the reassurance from the start that the project Managers knew what type of project I wanted and what my needs were. I find that reassuring and that's really why we chose BBMTech.",
            name: 'James Kelly',
            role: 'Co-founder, Miracle Choice',
            hasVideo: true,
            videoThumb: '/images/user.png',
        },
        {
            id: 6,
            quote: "We have been working with BBMTech for the last year now and have deployed multiple developers at different points in time. We are really happy with the support we get from BBMTech and the resources they provide.",
            name: 'Ramanshu Mahaur',
            role: 'Founder & CTO @Spinny',
            hasVideo: false,
        },
        {
            id: 7,
            quote: "Working with Rinky and her team was one of the smoothest experiences we've had. We had a fairly complex website in mind, with a lot of moving parts like custom layouts, animations, responsive design, content blocks, and backend logic. They not only delivered on all fronts, but elevated it. Every section felt sharp and well thought out. The layout adjustments, font choices, transitions, mobile responsiveness were all perfect. Even things we didn't mention got handled without being asked. What stood out was how quick and proactive they were. No delays, just clear communication and fast execution. Design tweaks, structural changes, last minute edits were all done smoothly. Despite a tight deadline and modest budget, they delivered above expectation, and made the handover process feel effortless. We'd work with them again without a second thought, and strongly recommend them to anyone looking for quality without hassle.",
            name: 'Fahad',
            role: 'Resolute Dynamics',
            hasVideo: true,
            videoThumb: '/images/user.png',
        },
        {
            id: 8,
            quote: "We have worked with BBMTech for more than a year, and their skilled team has allowed us to scale up during certain projects, thereby allowing our full-time team to focus on core platform functionality. Recommended.",
            name: 'Adam Watts',
            role: 'President & COO, Fintex Advisors',
            hasVideo: false,
        },
        {
            id: 9,
            quote: "The team at ValueCoder really has provided us with exceptional services in creating this one-of-a-kind portal, and it has been a fantastic experience. I was particularly impressed how efficiently and quickly the team always came up with creative solutions to provide us with all the functionalities within the portal we had requested.",
            name: 'Judith Mueller',
            role: 'Executive Director, Mueller Health Foundation',
            hasVideo: false,
        },
        {
            id: 10,
            quote: "BBMTech has accelerated our project and brought a talented developer to our team. We worked with a back-end coder with many years of experience that understood integrations, business strategy and brought new ideas to the table that boosted our UI/UX. I highly recommend connecting with BBMTech and meeting their team, interviewing a couple of coders, and picking the best one for your project. Thank you for the great work over the last several months!",
            name: 'Michelle Fno',
            role: 'Founder/CEO, Navor LLC',
            hasVideo: true,
            videoThumb: '/images/user.png',
        },
        {
            id: 11,
            quote: "We got an awesome product! I would highly recommend BBMTech to anyone for their professional attitude & customer care. Hope success to them!",
            name: 'Mr. Savarni',
            role: 'Founder, sbspco.com',
            hasVideo: false,
        },
        {
            id: 12,
            quote: "We had the opportunity to work with BBMTech on our website development. They demonstrated a very good understanding of the work scope, and assembled the team quickly. Challenges are a part of any development process, but BBMTech tackled them in the right way, and involved their experts in the process. They approached each problem with professionalism and creativity, ensuring the project remained on track without compromising on quality. BBMTech has met our expectations. Their dedication, expertise, and commitment to our project were evident throughout the process. I would recommend BBMTech to anyone in need of improving or developing software product. This might have been our first project with them, but it won't be our last.",
            name: 'Mohammad Bdair',
            role: 'Infinite Inventions LLC',
            hasVideo: false,
        },
        {
            id: 13,
            quote: "We are pleased to recommend BBMTech for their outstanding services. The company has successfully developed our website, demonstrating exceptional technical expertise, professionalism, and commitment throughout the entire process. Their team was responsive, reliable, and attentive to our requirements. We are fully satisfied with the quality of the work delivered and the overall collaboration.",
            name: 'Normah Edith',
            role: 'CMT Valencia',
            hasVideo: false,
        },
        {
            id: 14,
            quote: "I wanted to take a moment to appreciate the incredible work BBMTech' team has done in creating the ORA wireframe. It is evident that a lot of thought, creativity, and precision have gone into this work, and it truly reflects in team's dedication and skill. The wireframe not only meets but exceeds our expectations, and we are deeply grateful for the contribution.",
            name: 'ORA Team',
            role: 'ORA World School',
            hasVideo: false,
        },
        {
            id: 15,
            quote: "We outsourced our website development and coding to BBMTech, and we are super happy with their services. We'd recommend them for any website development service for business development.",
            name: 'Jame Thompson',
            role: 'edinstitute.com.au',
            hasVideo: false,
        },
        {
            id: 16,
            quote: "The team at BBMTech has been a fantastic asset within our startup business. The senior management provides great support, guidance, and advice to get you up and running with your team. They provided flexible services with both fully retained staff members to join our team and also really flexible resources that we pull in at short notice to help out on specific skills/projects. We had the option to interview all the people working on our business and get to know them before they joined the team. It gave us great confidence that the people joining had already been part of BBMTech for some time, and their capabilities were known.",
            name: 'Andrew North',
            role: 'Managing Director, BlueLane Holdings Ltd.',
            hasVideo: true,
            videoThumb: '/images/user.png',
        },
        {
            id: 17,
            quote: "I can't praise the development team at BBMTech enough! They tackled every challenge I threw their way with ease. Their dedication and ability to think outside the box exceeded my expectations. Communication was excellent, with regular updates and quick responses to my queries. Their problem-solving skills and commitment to our success were remarkable. I highly recommend BBMTech as a development partner.",
            name: 'Akshay',
            role: 'SD Advisors',
            hasVideo: false,
        },
        {
            id: 18,
            quote: "BBMTech is a very professional development team. I used their expertise in the building of an online comparison tool. We defined a clear scope, and the team designed mock-ups first. With the help of online project tools and Skype Q&A sessions, you can really work together despite the great geographical distance. I would highly recommend the services of BBMTech as they go the extra mile to deliver a good product.",
            name: 'Gerald van Kooten',
            role: 'Partner at Anders Invest B.V.',
            hasVideo: true,
            videoThumb: '/images/user.png',
        },
        {
            id: 19,
            quote: "We have been working with BBMTech since the start of 2020. After using BBMTech for one project, we decided to outsource our entire development team to BBMTech. We really like the flexibility and different skills that BBMTech offers. We can quickly scale up and down as required. Since outsourcing to BBMTech, our productivity has substantially increased. I appreciate the way that we have been able to outsource to BBMTech but still maintain direct communications with the developers and control over their work. Thank you, BBMTech!",
            name: 'Karl Turnbull',
            role: 'IT Director, Community Systems Foundation.',
            hasVideo: false,
        },
        {
            id: 20,
            quote: "We’ve been very pleased with the services provided by BBMTech. Team members are prompt, kind, and deliver fantastic work. The new invoice styles have been great and help us to stay more organized. It’s been a reliable system for our team!",
            name: 'Daymoon Team',
            role: '',
            hasVideo: false,
        },
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
                        alt="Testimonials Background"
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
                            <Sparkles size={16} /> Client Success Stories
                        </div>
                        <h1 className={styles.heroTitle}>
                            Trusted by <span className={styles.highlight}>6800+</span> Happy Clients
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Since our inception in 2004, the journey has been nothing short of incredible. The testimonials, feedback, and valuable insights from our clients have been instrumental in refining our services and enhancing our ability to serve them more effectively.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ===== OUR KEY CLIENTS SECTION ===== */}
            <section className={styles.clientsSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Our Key Clients</h2>
                    <p className={styles.sectionSubtitle}>
                        We have an array of clients across different regions worldwide, from Europe to Asia Pacific, and the USA. They keep coming back to us for the high-quality service we offer.
                    </p>
                    <div className={styles.clientsGrid}>
                        {clients.map((client, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.clientCard}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.clientLogoWrapper}>
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        fill
                                        className={styles.clientLogo}
                                    />
                                </div>
                                <p className={styles.clientName}>{client.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS SECTION ===== */}
            <section className={styles.testimonialsSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Customer Success Stories</h2>
                    <p className={styles.sectionSubtitle}>
                        We have 6800+ happy clients across the globe. Have a look at some success stories of our clients:
                    </p>

                    <div className={styles.testimonialsGrid}>
                        {testimonials.map((testimonial, idx) => (
                            <motion.div
                                key={testimonial.id}
                                className={styles.testimonialCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <Quote className={styles.quoteIcon} size={32} />
                                {testimonial.hasVideo && (
                                    <div className={styles.videoThumbnail}>
                                        <Image
                                            src={testimonial.videoThumb!}
                                            alt={`${testimonial.name} video thumbnail`}
                                            fill
                                            className={styles.thumbnailImage}
                                        />
                                        <div className={styles.playButton}>
                                            <Play size={24} fill="white" />
                                        </div>
                                    </div>
                                )}
                                <p className={styles.testimonialQuote}>&quot;{testimonial.quote}</p>
                                <div className={styles.testimonialAuthor}>
                                    <strong>{testimonial.name}</strong>
                                    {testimonial.role && <span>{testimonial.role}</span>}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Let&apos;s Discuss Your Project</h2>
                        <p className={styles.ctaDescription}>
                            Get free consultation and let us know your project idea to turn it into an amazing digital product.
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Start a Conversation <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}