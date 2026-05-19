'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, Bookmark, Heart } from 'lucide-react';
import { allPosts, BlogPost } from '@/data/bbmcodersBlogPosts';
import styles from './blogPost.module.css';

interface BlogPostClientProps {
  initialPost: BlogPost;
}

export default function BlogPostClient({ initialPost }: BlogPostClientProps) {
  const post = initialPost;
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // Find related posts (same category, excluding current)
    const related = allPosts
      .filter(p => p.category === post.category && p.slug !== post.slug)
      .slice(0, 3);
    setRelatedPosts(related);

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [post.category, post.slug]);

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <Link href="/company/blogs" className={styles.backLink}>
            <ArrowLeft size={18} /> Back to Blog
          </Link>
          
          <div className={styles.categoryWrapper}>
            <span className={styles.postCategory} style={{ backgroundColor: post.color }}>
              {post.category}
            </span>
          </div>
          
          <h1 className={styles.postTitle}>{post.title}</h1>
          <div className={styles.postMeta}>
            <span className={styles.metaItem}>
              <Calendar size={16} /> {post.date}
            </span>
            <span className={styles.metaItem}>
              <User size={16} /> {post.author}
            </span>
            <span className={styles.metaItem}>
              <Clock size={16} /> {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.contentWrapper}>
          <article className={styles.mainContent}>
            <div className={styles.postContent}>
              {post.fullContent.split('\n\n').map((paragraph: string, idx: number) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h2 key={idx} className={styles.contentHeading}>
                      {paragraph.replace(/\*\*/g, '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter((item: string) => item.startsWith('- '));
                  return (
                    <ul key={idx} className={styles.contentList}>
                      {items.map((item: string, i: number) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className={styles.contentParagraph}>
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <div className={styles.tagsSection}>
              <div className={styles.tagsHeader}>
                <Tag size={18} />
                <span>Tags:</span>
              </div>
              <div className={styles.tagsList}>
                {post.tags.map((tag: string) => (
                  <Link key={tag} href={`/company/blogs?tag=${encodeURIComponent(tag)}`} className={styles.tag}>
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.actionButtons}>
              <button 
                onClick={() => setIsLiked(!isLiked)} 
                className={`${styles.actionButton} ${isLiked ? styles.activeLike : ''}`}
              >
                <Heart size={18} fill={isLiked ? '#ef4444' : 'none'} />
                {isLiked ? 'Liked' : 'Like'}
              </button>
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)} 
                className={`${styles.actionButton} ${isBookmarked ? styles.activeBookmark : ''}`}
              >
                <Bookmark size={18} fill={isBookmarked ? '#3B82F6' : 'none'} />
                {isBookmarked ? 'Saved' : 'Save'}
              </button>
              <button 
                onClick={() => navigator.clipboard.writeText(window.location.href)} 
                className={styles.actionButton}
              >
                <Share2 size={18} />
                Share
              </button>
            </div>

            <div className={styles.authorBio}>
              <div className={styles.authorAvatar}>
                <div className={styles.authorInitial}>
                  {post.author.charAt(0)}
                </div>
              </div>
              <div className={styles.authorInfo}>
                <h4>{post.author}</h4>
                <p>Software engineer and technical writer at BBMcoders. Passionate about building scalable systems and sharing knowledge with the developer community.</p>
              </div>
            </div>
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarWidget}>
              <h3>About BBMcoders</h3>
              <p>We&apos;re a software development company passionate about building scalable solutions and sharing knowledge with the developer community.</p>
              <Link href="/company/about" className={styles.learnMoreLink}>Learn more →</Link>
            </div>

            <div className={styles.sidebarWidget}>
              <h3>Recent Posts</h3>
              <ul className={styles.recentList}>
                {allPosts.slice(0, 4).map((recentPost: BlogPost) => (
                  <li key={recentPost.id}>
                    <Link href={`/company/blogs/${recentPost.slug}`} className={styles.recentLink}>
                      <span className={styles.recentTitle}>{recentPost.title}</span>
                      <span className={styles.recentDate}>{recentPost.date}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.sidebarWidget}>
              <h3>Share This Post</h3>
              <div className={styles.shareOptions}>
                <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}>
                  Twitter
                </button>
                <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}>
                  LinkedIn
                </button>
                <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}>
                  Facebook
                </button>
              </div>
            </div>
          </aside>
        </div>

        {relatedPosts.length > 0 && (
          <div className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>Related Articles</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((relatedPost: BlogPost) => (
                <Link key={relatedPost.id} href={`/company/blogs/${relatedPost.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImageWrapper}>
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className={styles.relatedImage}
                    />
                  </div>
                  <div className={styles.relatedContent}>
                    <span className={styles.relatedCategory} style={{ color: relatedPost.color }}>
                      {relatedPost.category}
                    </span>
                    <h3>{relatedPost.title}</h3>
                    <div className={styles.relatedMeta}>
                      <span>{relatedPost.date}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className={styles.newsletterCta}>
          <div className={styles.newsletterContent}>
            <h3>Never miss a post</h3>
            <p>Get the latest articles straight to your inbox. No spam, ever.</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}