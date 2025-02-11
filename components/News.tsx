// components/News.tsx
"use client";
import React, { useEffect, useState } from "react";

interface Post {
  slug: string;
  title: string;
  date?: string;
  author?: string;
  description?: string;
}

export default function News() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/news");
        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
      }
    }
    fetchNews();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex bg-[#252525] justify-center items-center min-h-[600px]">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`w-10 h-10 bg-red-500 animate-pulse`}
              style={{
                animation: `pulse 1.5s ease-in-out ${i * 0.1}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-white bg-[#252525]">
      <div className="flex justify-center">
        <div className="text-center space-y-2">
          <h1 className="font-bold text-2xl">News</h1>
          <p className="text-gray-300">
            Stay up to date by reading the latest announcements
          </p>
        </div>
      </div>
      {/* Make posts wrap into responsive columns */}
      <div className="flex justify-center py-6">
        <div className="grid grid-cols-1 max-w-6xl sm:grid-cols-2 md:grid-cols-3 gap-6 py-6 px-4">
          {posts.map((post) => (
            <div key={post.slug}>
              <div className="relative p-6 rounded-xl overflow-hidden h-[450px]">
                <div
                  className="absolute inset-0 bg-[url('/assets/banner.jpg')] bg-cover bg-center filter blur-md"
                  aria-hidden="true"
                />
                <div className="relative z-10 h-full flex flex-col justify-between space-y-3">
                  <div>
                    <h1 className="font-bold text-2xl">{post.title}</h1>
                    <p className="font-semibold text-sm text-gray-300">
                      {post.date}
                    </p>
                    {post.description && (
                      <p className="text-gray-100">{post.description}</p>
                    )}
                  </div>
                  <div>
                    <button className="bg-gradient-to-b from-[#AA1111] to-[#8a0e0e] px-4 py-2 rounded-xl">
                      Continue Reading
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
