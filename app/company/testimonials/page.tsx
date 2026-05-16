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

    // Testimonials
 const testimonials = [
    {
        id: 1,
        quote: "Huge thank you to BBMcoders; they have been a massive help in enabling us to start developing our project within a few weeks. There have been two small bumps in the road, but overall, it's been a great service. I have already recommended them to one of my friends.",
        name: 'Faruq',
        hasVideo: true,
        videoThumb: '/images/user.png',
    },
    {
        id: 2,
        quote: "BBMcoders is our go-to partner to help us realize our software needs; they are supportive, friendly, and always ready to help us when we face difficulties. 10/10 would recommend.",
        name: 'Angela',
        hasVideo: false,
    },
    {
        id: 3,
        quote: "BBMcoders had great technical expertise, both in front-end and back-end development. Project management was well organized. Account management was friendly and always available.",
        name: 'Damilola',
        hasVideo: true,
        videoThumb: '/images/user.png',
    },
    {
        id: 4,
        quote: "What we found with BBMcoders was they took time to really understand our project before coming up with a contract. I had reassurance from the start that they knew what I wanted and what my needs were.",
        name: 'Adams',
        hasVideo: true,
        videoThumb: '/images/user.png',
    },
    {
        id: 5,
        quote: "We have been working with BBMcoders for the last year and have deployed multiple developers at different points. We are really happy with the support we get.",
        name: 'Temitope',
        hasVideo: false,
    },
    {
        id: 6,
        quote: "Working with BBMcoders was one of the smoothest experiences we've had. They not only delivered on all fronts but elevated our project. What stood out was how quick and proactive they were. No delays, just clear communication and fast execution.",
        name: 'Fahad',
        hasVideo: true,
        videoThumb: '/images/user.png',
    },
    {
        id: 7,
        quote: "We have worked with BBMcoders for more than a year, and their skilled team has allowed us to scale up during certain projects, thereby allowing our full-time team to focus on core functionality. Recommended.",
        name: 'Winson',
        hasVideo: false,
    },
    {
        id: 8,
        quote: "The team at BBMcoders provided us with exceptional service. I was particularly impressed by how efficiently and quickly they came up with creative solutions to provide all the functionalities we requested.",
        name: 'Judith',
        hasVideo: false,
    },
    {
        id: 9,
        quote: "We got an awesome product! I would highly recommend BBMcoders for their professional attitude and customer care.",
        name: 'Mr. Samsom',
        hasVideo: false,
    },
    {
        id: 10,
        quote: "We are pleased to recommend BBMcoders for their outstanding service. Their team was responsive, reliable, and attentive to our requirements. We are fully satisfied with the quality of the work delivered.",
        name: 'Edith',
        hasVideo: false,
    },
    {
        id: 11,
        quote: "We hired BBMcoders to build our e-commerce platform, and they delivered ahead of schedule. The team was responsive, understood our requirements perfectly, and the final product has been running smoothly with zero issues. Great value for money!",
        name: 'Oluwaseun Adeyemi',
        hasVideo: false,
    },
    {
        id: 12,
        quote: "As a non-technical founder, I was nervous about outsourcing development. BBMcoders made the process transparent and easy. They explained everything clearly, met all deadlines, and built a mobile app that our users love. Will definitely work with them again.",
        name: 'Chioma Nwachukwu',
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
                            Trusted by <span className={styles.highlight}>80+</span> Happy Clients
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Since our founding in 2021, we&apos;ve been committed to delivering quality software solutions. The testimonials and feedback from our clients have been instrumental in refining our services and enhancing our ability to serve them effectively.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ===== TESTIMONIALS SECTION ===== */}
            <section className={styles.testimonialsSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
                    <p className={styles.sectionSubtitle}>
                        We&apos;ve had the pleasure of working with amazing clients. Here&apos;s what some of them have to say:
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
                                    {/* {testimonial.role && <span>{testimonial.role}</span>} */}
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
                            Get a free consultation and let us know your project idea to turn it into an amazing digital product.
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