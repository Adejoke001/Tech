import { notFound } from 'next/navigation';
import { allPosts, BlogPost } from '@/data/bbmcodersBlogPosts';
import BlogPostClient from './BlogPostClient';

// Generate static params for all blog posts
export function generateStaticParams() {
  return allPosts.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

// For Next.js 15 - params is a Promise
export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Await the params Promise
  const { slug } = await params;
  
  const post = allPosts.find((p: BlogPost) => p.slug === slug);
  
  if (!post) {
    notFound();
  }
  
  return <BlogPostClient initialPost={post} />;
}