import { notFound } from 'next/navigation';
import { allPosts, featuredPost, BlogPost } from '@/data/bbmcodersBlogPosts';
import BlogPostClient from './BlogPostClient';

// Generate static params for ALL blog posts (including featured post)
export function generateStaticParams() {
  // Safeguard: Ensure data exists
  if (!allPosts || allPosts.length === 0) {
    console.warn('⚠️ No posts found in allPosts');
    return [];
  }
  
  // Build slugs from posts
  const allSlugs = [
    ...allPosts.map((post: BlogPost) => ({
      slug: post.slug,
    })),
    // Include featured post if it exists and has a slug
    ...(featuredPost?.slug ? [{ slug: featuredPost.slug }] : []),
  ];
  
  // Remove duplicates
  const uniqueSlugs = Array.from(
    new Map(allSlugs.map(item => [item.slug, item])).values()
  );
  
  console.log(`✅ Built ${uniqueSlugs.length} blog pages:`, uniqueSlugs.map(s => s.slug));
  
  return uniqueSlugs;
}

// Disable dynamic params for unknown slugs (404 for non-generated pages)
export const dynamicParams = false;

// For Next.js 15 - params is a Promise
export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  // Search in both allPosts and featuredPost
  const post = allPosts?.find((p: BlogPost) => p.slug === slug) 
    || (featuredPost?.slug === slug ? featuredPost : null);
  
  if (!post) {
    notFound();
  }
  
  return <BlogPostClient initialPost={post} />;
}