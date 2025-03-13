"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface BlogPost {
  slug: string;
  title: string;
  date?: string;
  author?: string;
  content: string;
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/blog/${slug}`);
        if (!res.ok) {
          throw new Error("Failed to fetch blog post");
        }
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex bg-[#252525] justify-center items-center min-h-[600px]">
        <div className="w-20 h-20 bg-red-500 animate-pulse" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col bg-[#252525] text-white justify-center items-center min-h-[600px]">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
        <p className="text-gray-300">The requested blog post could not be found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-[#252525] text-white min-h-screen py-10">
      <article className="prose prose-invert lg:prose-xl max-w-4xl px-4">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        {post.date && (
          <p className="text-gray-300 mb-6">
            {post.date} {post.author && `• ${post.author}`}
          </p>
        )}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}