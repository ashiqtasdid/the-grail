import React from "react";
import matter from "gray-matter";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import BlogList from "@/app/blog/page";

interface Post {
  slug: string;
  title: string;
  date?: string;
  author?: string;
  description?: string;
}

export default async function News() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = await fs.readdir(postsDirectory);

  const posts: Post[] = await Promise.all(
    filenames
      .filter((name) => name.endsWith(".mdx"))
      .map(async (name) => {
        const slug = name.replace(/\.mdx$/, "");
        const filePath = path.join(postsDirectory, name);
        const fileContents = await fs.readFile(filePath, "utf8");
        const { data } = matter(fileContents);
        return {
          slug,
          title: data.title || "Untitled Post",
          date: data.date || "",
          author: data.author || "Unknown Author",
          description: data.description || "",
        };
      })
  );

  // Sort posts by date (most recent first)
  posts.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });

  const latestPosts = posts.slice(0, 3);

  return (
    // ...existing code...
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
          {latestPosts.map((post) => (
            <div key={post.slug} className="bg-[#313131]  p-6 rounded-xl">
              <div className="space-y-3">
                <h1 className="font-bold text-2xl">{post.title}</h1>
                <p className="font-semibold text-sm text-gray-300">
                  {post.date}
                </p>
                {post.description && (
                  <p className="text-gray-100">{post.description}</p>
                )}
                <Link legacyBehavior href={`/blog/${post.slug}`}>
                  <button className="bg-gradient-to-b from-[#AA1111] to-[#8a0e0e] px-4 py-2 rounded-xl">
                    Continue Reading
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
