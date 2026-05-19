'use client';

import { useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, Calendar, User, Clock, Tag,
    Search, Send, Download,
} from 'lucide-react';
import styles from './blogs.module.css';
import { featuredPost, allPosts, BlogPost } from '../../../data/bbmcodersBlogPosts';

export default function BlogsPage() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [downloadEmail, setDownloadEmail] = useState<string>('');
    const [downloadName, setDownloadName] = useState<string>('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [visiblePostsCount, setVisiblePostsCount] = useState<number>(6);
    const POSTS_PER_PAGE = 6;

    // Filter posts based on search, tag, and category
    const filteredPosts: BlogPost[] = allPosts.filter((post: BlogPost) => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
        const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
        return matchesSearch && matchesTag && matchesCategory;
    });

    const handleSearch = () => {
        setVisiblePostsCount(POSTS_PER_PAGE);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const displayedPosts: BlogPost[] = filteredPosts.slice(0, visiblePostsCount);
    const hasMorePosts: boolean = visiblePostsCount < filteredPosts.length;

    // Recent posts for the sidebar (latest 5)
    const recentPosts: BlogPost[] = [...allPosts]
        .sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);

    // Unique tags and categories for filters
    const allTags: string[] = Array.from(new Set(allPosts.flatMap((p: BlogPost) => p.tags))).slice(0, 12);

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

    // Clear filters
    const clearFilters = () => {
        setSelectedTag(null);
        setSelectedCategory(null);
        setSearchQuery('');
        setVisiblePostsCount(POSTS_PER_PAGE);
    };

    const loadMore = () => {
        setVisiblePostsCount((prev: number) => prev + POSTS_PER_PAGE);
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
                            BBMcoders Insights <span className={styles.highlight}>For Modern Builders</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Practical advice, in‑depth tutorials, and expert perspectives from the BBMcoders engineering team.<br />
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
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSearch()}
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
                            {recentPosts.map((post: BlogPost) => (
                                <li key={post.id} className={styles.recentItem}>
                                    <Link href={`/company/blogs/${post.slug}`} className={styles.recentLink}>
                                        <span className={styles.recentTitle}>{post.title}</span>
                                        <span className={styles.recentDate}>{post.date}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tags */}
                    <div className={styles.sidebarWidget}>
                        <h3 className={styles.widgetTitle}>Popular Tags</h3>
                        <div className={styles.tagCloud}>
                            {allTags.map((tag: string) => (
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
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                required
                                className={styles.newsletterInput}
                            />
                            <button type="submit" className={styles.newsletterButton}>
                                <Send size={16} />
                            </button>
                        </form>
                    </div>

                    {/* Clear filters button */}
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
                                    <Link href={`/company/blogs/${featuredPost.slug}`} className={styles.featuredPostLink}>
                                        {featuredPost.title}
                                    </Link>
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
                                    <Link href={`/company/blogs/${featuredPost.slug}`} className={styles.readMoreButton}>
                                        Read Full Article <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </article>

                        {/* Two recent posts below the featured one */}
                        <div className={styles.recentGrid}>
                            {recentPosts.slice(0, 2).map((post: BlogPost) => (
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
                                            <Link href={`/company/blogs/${post.slug}`} className={styles.recentCardLink}>
                                                {post.title}
                                            </Link>
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
                                    {displayedPosts.map((post: BlogPost) => (
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
                                                    <Link href={`/company/blogs/${post.slug}`} className={styles.postTitleLink}>
                                                        {post.title}
                                                    </Link>
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
                                                    {post.tags.slice(0, 2).map((tag: string) => (
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

            {/* E-GUIDE DOWNLOAD SECTION */}
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
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDownloadName(e.target.value)}
                                    required
                                    className={styles.guideInput}
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={downloadEmail}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDownloadEmail(e.target.value)}
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
                        <Link href="/company/contact" className={styles.finalCtaButton}>
                            Start a Conversation <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}