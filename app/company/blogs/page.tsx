'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, Calendar, User, Clock, Tag,
    Search, Send, Download, X,
} from 'lucide-react';
import styles from './blogs.module.css';
import { featuredPost, allPosts, BlogPost } from '@/data/bbmtechBlogPosts';

export default function BlogsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [email, setEmail] = useState('');
    const [downloadEmail, setDownloadEmail] = useState('');
    const [downloadName, setDownloadName] = useState('');
    const [modalPost, setModalPost] = useState<BlogPost | null>(null);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [visiblePostsCount, setVisiblePostsCount] = useState(6);
    const POSTS_PER_PAGE = 6;

    // Filter posts based on search, tag, and category
    const filteredPosts = allPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
        const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
        return matchesSearch && matchesTag && matchesCategory;
    });

    const handleSearch = () => {
    // Reset visible posts when searching
    setVisiblePostsCount(POSTS_PER_PAGE);
    // Optional: scroll to top of results
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

    const displayedPosts = filteredPosts.slice(0, visiblePostsCount);
    const hasMorePosts = visiblePostsCount < filteredPosts.length;

    // Recent posts for the sidebar (latest 5)
    const recentPosts = [...allPosts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);

    // Unique tags and categories for filters
    const allTags = Array.from(new Set(allPosts.flatMap(p => p.tags))).slice(0, 12);
    // const allCategories = Array.from(new Set(allPosts.map(p => p.category)));

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

    // Modal handlers
    const openModal = (post: BlogPost) => {
        setModalPost(post);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalPost(null);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Custom link component that opens modal
    const BlogLink = ({ post, children, className }: {
        post: BlogPost;
        children: React.ReactNode;
        className?: string;
    }) => {
        const handleClick = (e: React.MouseEvent) => {
            e.preventDefault();
            openModal(post);
        };
        return (
            <a href={`/blog/${post.slug}`} onClick={handleClick} className={className}>
                {children}
            </a>
        );
    };

    // Clear filters
    const clearFilters = () => {
        setSelectedTag(null);
        setSelectedCategory(null);
        setSearchQuery('');
        setVisiblePostsCount(POSTS_PER_PAGE);
    };

    const loadMore = () => {
        setVisiblePostsCount(prev => prev + POSTS_PER_PAGE);
    };

    return (
        <div className={styles.pageWrapper}>
            {/* Hero section */}
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
                            BBMtech Insights <span className={styles.highlight}>For Modern Builders</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Practical advice, in‑depth tutorials, and expert perspectives from the BBMtech engineering team.<br />
                            Stay ahead in software innovation, AI, and cloud architecture.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main layout */}
            <div className={styles.mainLayout}>
                <aside className={styles.sidebar}>
                    {/* Search widget */}
                   <div className={styles.sidebarWidget}>
    <h3 className={styles.widgetTitle}>Search</h3>
    <div className={styles.searchBox}>
        <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
            <Search size={18} />
        </button>
    </div>
</div>

                    {/* Recent Posts */}
                    <div className={styles.sidebarWidget}>
                        <h3 className={styles.widgetTitle}>Recent Posts</h3>
                        <ul className={styles.recentList}>
                            {recentPosts.map(post => (
                                <li key={post.id} className={styles.recentItem}>
                                    <BlogLink post={post} className={styles.recentLink}>
                                        <span className={styles.recentTitle}>{post.title}</span>
                                        <span className={styles.recentDate}>{post.date}</span>
                                    </BlogLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tags */}
                    <div className={styles.sidebarWidget}>
                        <h3 className={styles.widgetTitle}>Popular Tags</h3>
                        <div className={styles.tagCloud}>
                            {allTags.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                                    className={`${styles.tag} ${selectedTag === tag ? styles.activeTag : ''}`}
                                >
                                    <Tag size={12} /> {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className={styles.sidebarWidget}>
                        <h3 className={styles.widgetTitle}>Subscribe to our blog</h3>
                        <p className={styles.newsletterText}>
                            Be a part of a thriving community of tech enthusiasts and learners.
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

                    {/* Clear filters button (optional) */}
                    {(selectedTag || selectedCategory || searchQuery) && (
                        <button onClick={clearFilters} className={styles.clearFiltersButton}>
                            Clear all filters
                        </button>
                    )}
                </aside>

                <main className={styles.mainContent}>
                    {/* Popular Posts Section */}
                    <section className={styles.popularSection}>
                        <h2 className={styles.sectionTitle}>Popular Posts</h2>

                        {/* Featured Post */}
                        <article className={styles.featuredPost}>
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
                                    <BlogLink post={featuredPost}>{featuredPost.title}</BlogLink>
                                </h3>
                                <p className={styles.featuredPostExcerpt}>{featuredPost.excerpt}</p>
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
                                    <BlogLink post={featuredPost} className={styles.readMoreButton}>
                                        Read Full Article <ArrowRight size={16} />
                                    </BlogLink>
                                </div>
                            </div>
                        </article>

                        {/* Two recent posts below the featured one */}
                        <div className={styles.recentGrid}>
                            {recentPosts.slice(0, 2).map(post => (
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
                                            <BlogLink post={post}>{post.title}</BlogLink>
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

                    {/* All Posts Grid */}
                    <section className={styles.postsSection}>
                        <div className={styles.postsHeader}>
                            <h2 className={styles.postsTitle}>Latest Articles</h2>
                            <span className={styles.postsCount}>{filteredPosts.length} posts</span>
                        </div>

                        {displayedPosts.length > 0 ? (
                            <>
                                <div className={styles.postsGrid}>
                                    {displayedPosts.map(post => (
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
                                                    <BlogLink post={post}>{post.title}</BlogLink>
                                                </h3>
                                                <p className={styles.postExcerpt}>{post.excerpt}</p>
                                                <div className={styles.postFooter}>
                                                    <span className={styles.postDate}>
                                                        <Calendar size={14} /> {post.date}
                                                    </span>
                                                    <span className={styles.postAuthor}>
                                                        <User size={14} /> {post.author}
                                                    </span>
                                                </div>
                                                <div className={styles.postTags}>
                                                    {post.tags.slice(0, 2).map(tag => (
                                                        <button
                                                            key={tag}
                                                            onClick={() => setSelectedTag(tag)}
                                                            className={styles.postTag}
                                                        >
                                                            {tag}
                                                        </button>
                                                    ))}
                                                    {post.tags.length > 2 && (
                                                        <span className={styles.postTag}>+{post.tags.length - 2}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.article>
                                    ))}
                                </div>
                                {hasMorePosts && (
                                    <div className={styles.loadMoreWrapper}>
                                        <button onClick={loadMore} className={styles.loadMoreButton}>
                                            Load More Posts
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className={styles.noPosts}>
                                <p>No posts found matching your criteria.</p>
                            </div>
                        )}
                    </section>
                </main>
            </div>

            {/* E‑GUIDE DOWNLOAD SECTION */}
            <section className={styles.guideSection}>
                <div className={styles.container}>
                    <div className={styles.guideGrid}>
                        <div className={styles.guideContent}>
                            <h2 className={styles.guideTitle}>
                                Get Your Free <span className={styles.highlight}>Software Development Guide</span>
                            </h2>
                            <p className={styles.guideDescription}>
                                Download our step-by-step guide to building scalable software with best practices.
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
                                    Download FREE e‑Guide <Download size={18} />
                                </button>
                            </form>
                        </div>
                        <div className={styles.guideImageWrapper}>
                            <div className={styles.guideImageOverlay}></div>
                            <Image
                                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
                                alt="Software Guide"
                                fill
                                className={styles.guideImage}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className={styles.finalCtaSection}>
                <div className={styles.container}>
                    <div className={styles.finalCtaCard}>
                        <h2 className={styles.finalCtaTitle}>Got a Project in Mind?</h2>
                        <p className={styles.finalCtaDescription}>
                            Let&apos;s embark on a journey to transform your idea into a compelling digital presence.
                        </p>
                        <Link href="/contact" className={styles.finalCtaButton}>
                            Start a Conversation <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* MODAL */}
            {modalPost && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                    }}
                    onClick={closeModal}
                >
                    <div
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: '1rem',
                            maxWidth: '800px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            position: 'relative',
                            padding: '2rem',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#666',
                            }}
                        >
                            <X size={24} />
                        </button>

                        {modalPost.image && (
                            <div style={{ marginBottom: '1.5rem' }}>
                                <Image
                                    src={modalPost.image}
                                    alt={modalPost.title}
                                    width={800}
                                    height={400}
                                    style={{ borderRadius: '0.75rem', objectFit: 'cover', width: '100%', height: 'auto' }}
                                />
                            </div>
                        )}

                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ color: modalPost.color, fontWeight: 600 }}>
                                {modalPost.category}
                            </span>
                        </div>

                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{modalPost.title}</h2>

                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', color: '#666', fontSize: '0.9rem' }}>
                            <span><Calendar size={14} style={{ display: 'inline', marginRight: '0.25rem' }} /> {modalPost.date}</span>
                            <span><User size={14} style={{ display: 'inline', marginRight: '0.25rem' }} /> {modalPost.author}</span>
                            <span><Clock size={14} style={{ display: 'inline', marginRight: '0.25rem' }} /> {modalPost.readTime}</span>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            {modalPost.tags?.map((tag: string) => (
                                <span
                                    key={tag}
                                    style={{
                                        display: 'inline-block',
                                        backgroundColor: '#f3f4f6',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        marginRight: '0.5rem',
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div style={{ lineHeight: 1.6, color: '#333' }}>
                            <p>{modalPost.fullContent}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}