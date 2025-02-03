import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date?: string;
  author?: string;
  description?: string;
}

export default async function BlogList() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = await fs.readdir(postsDirectory);

  // Process all markdown files concurrently
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

  return (
    <div className="min-h-screen bg-[#252525] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-2">Blog Posts</h1>
          <p className="text-lg text-gray-300">
            Discover the latest articles and insights.
          </p>
        </header>
        <ul className="divide-y divide-gray-700">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="py-6 hover:bg-[#2b2b2b] transition duration-200 border border-gray-700 rounded-lg p-4 mb-4"
            >
              <Link legacyBehavior href={`/blog/${post.slug}`}>
                <a className="block">
                  <h2 className="text-2xl font-bold mb-2 hover:underline">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-gray-400 mb-4">{post.description}</p>
                  )}
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>by {post.author}</span>
                    {post.date && (
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    )}
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
