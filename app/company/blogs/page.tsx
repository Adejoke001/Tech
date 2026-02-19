'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, Calendar, User, Clock,
    Search, ChevronLeft, ChevronRight, Send,
    Download, 
} from 'lucide-react';
import styles from './blogs.module.css';

export default function BlogsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [email, setEmail] = useState('');
    const [downloadEmail, setDownloadEmail] = useState('');
    const [downloadName, setDownloadName] = useState('');
    const postsPerPage = 6;

    // Featured post
    const featuredPost = {
        id: 'featured-1',
        title: '10-Step Checklist for Building an MVP That Actually Succeeds',
        excerpt: 'Most startups fail not because of funding but because they build the wrong product. An MVP helps you validate demand, test assumptions, and attract early users without burning through your runway.',
        fullContent: 'This blog gives early-stage founders a practical 10-step checklist to launch a successful MVP. From defining core features to gathering user feedback, it shows you how to build smart, save costs, and impress investors with real traction, without the trial-and-error most startups go through.',
        author: 'Alex Rivera',
        authorRole: 'Senior Product Strategist',
        date: 'Feb 15, 2026',
        readTime: '8 min read',
        category: 'Software Engineering',
        tags: ['MVP', 'Startups', 'Product Development'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        slug: 'mvp-checklist-startups',
        color: '#10B981',
    };

    // All blog posts
    const allPosts = [
        {
            id: 1,
            title: 'The Rise of WebAssembly: What It Means for Web Development',
            excerpt: 'WebAssembly is changing how we build for the web. Learn why it matters and how you can leverage it today.',
            author: 'Alex Rivera',
            date: 'Feb 18, 2026',
            readTime: '8 min read',
            category: 'Software Engineering',
            tags: ['WebAssembly', 'JavaScript', 'Performance'],
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
            slug: 'rise-of-webassembly',
            color: '#3B82F6',
        },
        {
            id: 2,
            title: 'Building Scalable Microservices with Kubernetes and Istio',
            excerpt: 'A practical guide to architecting, deploying, and managing microservices at scale using modern cloud-native tools.',
            author: 'Priya Kapoor',
            date: 'Feb 15, 2026',
            readTime: '12 min read',
            category: 'Cloud Services',
            tags: ['Kubernetes', 'Istio', 'Microservices', 'Docker'],
            image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80',
            slug: 'microservices-kubernetes-istio',
            color: '#8B5CF6',
        },
        {
            id: 3,
            title: 'AI-Powered Code Generation: Boon or Bane for Developers?',
            excerpt: 'With tools like GitHub Copilot and ChatGPT, the development landscape is shifting. We explore the opportunities and challenges.',
            author: 'David Chen',
            date: 'Feb 12, 2026',
            readTime: '10 min read',
            category: 'AI & Data Solutions',
            tags: ['AI', 'Machine Learning', 'Productivity'],
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
            slug: 'ai-code-generation',
            color: '#F59E0B',
        },
        {
            id: 4,
            title: 'Mastering SwiftUI: Building Complex Interfaces with Ease',
            excerpt: 'Dive deep into SwiftUI’s advanced features – from custom layouts to animations and state management.',
            author: 'Maria Gonzalez',
            date: 'Feb 10, 2026',
            readTime: '9 min read',
            category: 'Application Development',
            tags: ['SwiftUI', 'iOS', 'Mobile'],
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
            slug: 'mastering-swiftui',
            color: '#EC4899',
        },
        {
            id: 5,
            title: 'OWASP Top 10 2025: New Threats and How to Mitigate Them',
            excerpt: 'The latest OWASP list is here. We break down the most critical web application security risks and offer actionable advice.',
            author: 'Sarah Johnson',
            date: 'Feb 8, 2026',
            readTime: '11 min read',
            category: 'Software Engineering',
            tags: ['Security', 'OWASP', 'Best Practices'],
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
            slug: 'owasp-top-10-2025',
            color: '#06B6D4',
        },
        {
            id: 6,
            title: 'The Future of Cross-Platform Development: Flutter vs. React Native',
            excerpt: 'An unbiased comparison of the two leading frameworks – performance, ecosystem, developer experience, and when to choose each.',
            author: 'Michael Brown',
            date: 'Feb 5, 2026',
            readTime: '7 min read',
            category: 'Application Development',
            tags: ['Flutter', 'React Native', 'Mobile'],
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
            slug: 'flutter-vs-react-native',
            color: '#10B981',
        },
        {
            id: 7,
            title: 'GraphQL vs. REST: Choosing the Right API Strategy',
            excerpt: 'Both have their strengths. We help you decide based on your project’s needs, team expertise, and long-term goals.',
            author: 'Emily Wilson',
            date: 'Feb 2, 2026',
            readTime: '8 min read',
            category: 'Software Engineering',
            tags: ['GraphQL', 'REST', 'API'],
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
            slug: 'graphql-vs-rest',
            color: '#3B82F6',
        },
        {
            id: 8,
            title: 'DevOps Metrics That Matter: DORA and SPACE',
            excerpt: 'Stop measuring vanity metrics. Learn how to track what truly impacts your delivery performance and team health.',
            author: 'James Smith',
            date: 'Jan 30, 2026',
            readTime: '6 min read',
            category: 'Cloud Services',
            tags: ['DevOps', 'Metrics', 'DORA'],
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
            slug: 'devops-metrics-dora-space',
            color: '#F59E0B',
        },
        {
            id: 9,
            title: 'Building Trustworthy AI: A Guide to Responsible ML',
            excerpt: 'As AI becomes pervasive, ensuring fairness, transparency, and accountability is no longer optional. Here’s how.',
            author: 'David Chen',
            date: 'Jan 28, 2026',
            readTime: '9 min read',
            category: 'AI & Data Solutions',
            tags: ['AI Ethics', 'ML', 'Governance'],
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
            slug: 'responsible-ai-guide',
            color: '#8B5CF6',
        },
        {
            id: 10,
            title: 'The Developer’s Guide to Web3 and Blockchain',
            excerpt: 'Demystifying the technologies behind dApps, smart contracts, and decentralized storage for traditional developers.',
            author: 'Priya Kapoor',
            date: 'Jan 25, 2026',
            readTime: '14 min read',
            category: 'Software Engineering',
            tags: ['Web3', 'Blockchain', 'Ethereum'],
            image: 'https://images.unsplash.com/photo-1639322537228-f71034b3c1c5?auto=format&fit=crop&w=800&q=80',
            slug: 'web3-blockchain-guide',
            color: '#EC4899',
        },
        {
            id: 11,
            title: 'Kotlin Multiplatform: Share Code, Not Headaches',
            excerpt: 'How Kotlin Multiplatform is changing the game for cross-platform development by sharing business logic across iOS and Android.',
            author: 'Maria Gonzalez',
            date: 'Jan 22, 2026',
            readTime: '7 min read',
            category: 'Application Development',
            tags: ['Kotlin', 'Mobile', 'Cross-Platform'],
            image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=800&q=80',
            slug: 'kotlin-multiplatform',
            color: '#06B6D4',
        },
        {
            id: 12,
            title: 'Zero Trust Architecture: Moving Beyond the Perimeter',
            excerpt: 'Why traditional security models fail and how to implement a zero trust strategy in your organization.',
            author: 'Sarah Johnson',
            date: 'Jan 20, 2026',
            readTime: '10 min read',
            category: 'Software Engineering',
            tags: ['Zero Trust', 'Security', 'IAM'],
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
            slug: 'zero-trust-architecture',
            color: '#3B82F6',
        },
        {
            id: 13,
            title: 'The Rise of Edge Computing: Use Cases and Architectures',
            excerpt: 'Processing data closer to the source unlocks new possibilities. Explore real-world applications and design patterns.',
            author: 'James Smith',
            date: 'Jan 18, 2026',
            readTime: '8 min read',
            category: 'Cloud Services',
            tags: ['Edge Computing', 'IoT', 'Latency'],
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
            slug: 'edge-computing-use-cases',
            color: '#F59E0B',
        },
        {
            id: 14,
            title: 'Mastering Next.js 15: What’s New and Why It Matters',
            excerpt: 'The latest version of Next.js brings exciting features. We highlight the key updates and how to use them.',
            author: 'Alex Rivera',
            date: 'Jan 15, 2026',
            readTime: '6 min read',
            category: 'Software Engineering',
            tags: ['Next.js', 'React', 'JavaScript'],
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
            slug: 'nextjs-15-guide',
            color: '#8B5CF6',
        },
        {
            id: 15,
            title: 'Ethical Hacking 101: A Developer’s Introduction to Penetration Testing',
            excerpt: 'Learn the basics of ethical hacking and how thinking like an attacker can make you a better developer.',
            author: 'Michael Brown',
            date: 'Jan 12, 2026',
            readTime: '9 min read',
            category: 'Software Engineering',
            tags: ['Penetration Testing', 'Security', 'Ethical Hacking'],
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
            slug: 'ethical-hacking-101',
            color: '#10B981',
        },
        {
            id: 16,
            title: 'From Monolith to Microservices: A Step-by-Step Migration Guide',
            excerpt: 'Breaking apart a monolith is challenging. We provide a practical roadmap to do it safely and incrementally.',
            author: 'Emily Wilson',
            date: 'Jan 10, 2026',
            readTime: '12 min read',
            category: 'Cloud Services',
            tags: ['Microservices', 'Refactoring', 'Architecture'],
            image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80',
            slug: 'monolith-to-microservices',
            color: '#EC4899',
        },
        {
            id: 17,
            title: 'Machine Learning for Developers: Getting Started with TensorFlow.js',
            excerpt: 'You don’t need a PhD to use ML. We show you how to integrate TensorFlow.js into your web apps with practical examples.',
            author: 'David Chen',
            date: 'Jan 8, 2026',
            readTime: '8 min read',
            category: 'AI & Data Solutions',
            tags: ['TensorFlow.js', 'ML', 'JavaScript'],
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
            slug: 'tensorflowjs-guide',
            color: '#06B6D4',
        },
        {
            id: 18,
            title: 'The Ultimate Guide to Code Reviews: Best Practices for Teams',
            excerpt: 'Code reviews are more than finding bugs. Learn how to make them a positive, effective part of your team culture.',
            author: 'Priya Kapoor',
            date: 'Jan 5, 2026',
            readTime: '7 min read',
            category: 'Software Engineering',
            tags: ['Code Review', 'Best Practices', 'Team Culture'],
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
            slug: 'code-review-best-practices',
            color: '#3B82F6',
        },
    ];

    // Publications for "Featured In" section
    const publications = [
        { name: 'TechCrunch', logo: '/logos/techcrunch.svg' },
        { name: 'Forbes', logo: '/logos/forbes.svg' },
        { name: 'VentureBeat', logo: '/logos/venturebeat.svg' },
        { name: 'Inc.', logo: '/logos/inc.svg' },
        { name: 'Entrepreneur', logo: '/logos/entrepreneur.svg' },
    ];

    // Filter posts based on search only
    const filteredPosts = allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    });

    // Pagination
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Recent posts for sidebar (latest 5)
    const recentPosts = [...allPosts].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    ).slice(0, 5);

    // Popular tags (unique)
    // const allTags = Array.from(new Set(allPosts.flatMap(p => p.tags))).slice(0, 12);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Subscribed with ${email}`);
        setEmail('');
    };

    const handleDownload = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Download requested for ${downloadName} at ${downloadEmail}`);
        setDownloadName('');
        setDownloadEmail('');
    };

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80"
                        alt="Blog Background"
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
                        <h1 className={styles.heroTitle}>
                            Software Innovation <span className={styles.highlight}>Starts Here</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Tap into the power of our top 1% software engineers and 675+ digital transformation experts.<br />
                            Get insights to drive your business forward in today’s competitive landscape.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ===== FEATURED IN SECTION ===== */}
            <section className={styles.featuredInSection}>
                <div className={styles.container}>
                    <p className={styles.featuredInLabel}>Featured In</p>
                    <div className={styles.featuredInLogos}>
                        {publications.map((pub, idx) => (
                            <div key={idx} className={styles.featuredInLogo}>
                                <div className={styles.logoPlaceholder}>{pub.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== MAIN LAYOUT ===== */}
            <div className={styles.mainLayout}>
                {/* ===== LEFT SIDEBAR ===== */}
                <aside className={styles.sidebar}>
                    {/* Search */}
                    <div className={styles.sidebarWidget}>
                        <h3 className={styles.widgetTitle}>Search</h3>
                        <div className={styles.searchBox}>
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.searchInput}
                            />
                            <Search size={18} className={styles.searchIcon} />
                        </div>
                    </div>

                    {/* AI & Data Solutions */}
                    <div className={styles.sidebarWidget}>
                        <div className={styles.categoryHeader}>
                            <h3 className={styles.widgetTitle}>AI & Data Solutions</h3>
                            <Link href="/blog/category/ai-data" className={styles.viewAllLink}>
                                View All <ArrowRight size={12} />
                            </Link>
                        </div>
                        <ul className={styles.categoryMiniList}>
                            <li><Link href="/blog/tag/ai">AI Solutions</Link></li>
                            <li><Link href="/blog/tag/data-analytics">Data Analytics</Link></li>
                            <li><Link href="/blog/tag/cloud">Cloud Services</Link></li>
                            <li><Link href="/blog/tag/machine-learning">Machine Learning</Link></li>
                        </ul>
                    </div>

                    {/* Software Engineering */}
                    <div className={styles.sidebarWidget}>
                        <div className={styles.categoryHeader}>
                            <h3 className={styles.widgetTitle}>Software Engineering</h3>
                            <Link href="/blog/category/software-engineering" className={styles.viewAllLink}>
                                View All <ArrowRight size={12} />
                            </Link>
                        </div>
                        <ul className={styles.categoryMiniList}>
                            <li><Link href="/blog/tag/product-development">Software Product Development</Link></li>
                            <li><Link href="/blog/tag/app-development">Application Development</Link></li>
                            <li><Link href="/blog/tag/dedicated-team">Dedicated Team</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className={styles.sidebarWidget}>
                        <h3 className={styles.widgetTitle}>Subscribe to our blog</h3>
                        <p className={styles.newsletterText}>
                            Be a part of a thriving community of 10000+ tech enthusiasts and learners.
                        </p>
                        <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={styles.newsletterInput}
                            />
                            <button type="submit" className={styles.newsletterButton}>
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </aside>

                {/* ===== MAIN CONTENT ===== */}
                <main className={styles.mainContent}>
                    {/* POPULAR POSTS SECTION */}
                    <section className={styles.popularSection}>
                        <h2 className={styles.sectionTitle}>Popular Posts</h2>
                        
                        {/* Featured Post (large) */}
                        <div className={styles.featuredPost}>
                            <div className={styles.featuredPostImageWrapper}>
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    fill
                                    className={styles.featuredPostImage}
                                />
                            </div>
                            <div className={styles.featuredPostContent}>
                                <span className={styles.featuredPostCategory} style={{ color: featuredPost.color }}>
                                    {featuredPost.category}
                                </span>
                                <h3 className={styles.featuredPostTitle}>
                                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                                </h3>
                                <p className={styles.featuredPostExcerpt}>{featuredPost.excerpt}</p>
                                <p className={styles.featuredPostFull}>{featuredPost.fullContent}</p>
                                <div className={styles.featuredPostMeta}>
                                    <span className={styles.metaItem}>
                                        <Calendar size={14} /> {featuredPost.date}
                                    </span>
                                    <span className={styles.metaItem}>
                                        <User size={14} /> {featuredPost.author}
                                    </span>
                                    <span className={styles.metaItem}>
                                        <Clock size={14} /> {featuredPost.readTime}
                                    </span>
                                </div>
                                <div className={styles.featuredPostCta}>
                                    <Link href={`/blog/${featuredPost.slug}`} className={styles.readMoreButton}>
                                        Read Full Article <ArrowRight size={16} />
                                    </Link>
                                    <span className={styles.workstatusTag}>
                                        Manage teams and projects efficiently with Workstatus.
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Posts Grid (3 items) */}
                        <div className={styles.recentGrid}>
                            {recentPosts.slice(0, 3).map((post) => (
                                <article key={post.id} className={styles.recentCard}>
                                    <div className={styles.recentCardImageWrapper}>
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className={styles.recentCardImage}
                                        />
                                    </div>
                                    <div className={styles.recentCardContent}>
                                        <span className={styles.recentCardCategory} style={{ color: post.color }}>
                                            {post.category}
                                        </span>
                                        <h4 className={styles.recentCardTitle}>
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h4>
                                        <p className={styles.recentCardExcerpt}>{post.excerpt}</p>
                                        <div className={styles.recentCardMeta}>
                                            <span><Calendar size={12} /> {post.date}</span>
                                            <span><User size={12} /> {post.author}</span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* ALL POSTS GRID */}
                    <section className={styles.postsSection}>
                        <div className={styles.postsHeader}>
                            <h2 className={styles.postsTitle}>Latest Articles</h2>
                            <span className={styles.postsCount}>{filteredPosts.length} posts</span>
                        </div>

                        {currentPosts.length > 0 ? (
                            <div className={styles.postsGrid}>
                                {currentPosts.map((post) => (
                                    <motion.article
                                        key={post.id}
                                        className={styles.postCard}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className={styles.postImageWrapper}>
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className={styles.postImage}
                                            />
                                            <span className={styles.postCategory} style={{ backgroundColor: post.color }}>
                                                {post.category}
                                            </span>
                                        </div>
                                        <div className={styles.postContent}>
                                            <h3 className={styles.postTitle}>
                                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                            </h3>
                                            <p className={styles.postExcerpt}>{post.excerpt}</p>
                                            <div className={styles.postFooter}>
                                                <div className={styles.postAuthor}>
                                                    <User size={14} />
                                                    <span>{post.author}</span>
                                                </div>
                                                <span className={styles.postDate}>
                                                    <Calendar size={14} /> {post.date}
                                                </span>
                                            </div>
                                            <div className={styles.postTags}>
                                                {post.tags.slice(0, 2).map((tag) => (
                                                    <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`} className={styles.postTag}>
                                                        {tag}
                                                    </Link>
                                                ))}
                                                {post.tags.length > 2 && (
                                                    <span className={styles.postTag}>+{post.tags.length - 2}</span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        ) : (
                            <div className={styles.noPosts}>
                                <p>No posts found matching your criteria.</p>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className={styles.pagination}>
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={styles.pageButton}
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ''}`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={styles.pageButton}
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        )}
                    </section>
                </main>
            </div>

            {/* ===== E-GUIDE DOWNLOAD SECTION ===== */}
            <section className={styles.guideSection}>
                <div className={styles.guideContainer}>
                    <div className={styles.guideContent}>
                        <h2 className={styles.guideTitle}>
                            Get Your Free <span className={styles.highlight}>Software Security Guide</span>
                        </h2>
                        <p className={styles.guideDescription}>
                            Download our step-by-step guide to strengthen security throughout your software development process.
                        </p>
                        <form onSubmit={handleDownload} className={styles.guideForm}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={downloadName}
                                onChange={(e) => setDownloadName(e.target.value)}
                                required
                                className={styles.guideInput}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={downloadEmail}
                                onChange={(e) => setDownloadEmail(e.target.value)}
                                required
                                className={styles.guideInput}
                            />
                            <button type="submit" className={styles.guideButton}>
                                Download FREE e-Guide <Download size={18} />
                            </button>
                        </form>
                    </div>
                    <div className={styles.guideImageWrapper}>
                        <div className={styles.guideImageOverlay}></div>
                        <Image
                            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
                            alt="Software Security Guide"
                            fill
                            className={styles.guideImage}
                        />
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className={styles.finalCtaSection}>
                <div className={styles.finalCtaCard}>
                    <h2 className={styles.finalCtaTitle}>Got a Project in Mind?</h2>
                    <p className={styles.finalCtaDescription}>
                        Let&apos;s embark on a journey to transform your idea into a compelling digital presence.
                    </p>
                    <Link href="/contact" className={styles.finalCtaButton}>
                        Start a Conversation <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}