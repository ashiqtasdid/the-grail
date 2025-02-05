import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

type PostSummary = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

async function getPosts(): Promise<PostSummary[]> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const source = fs.readFileSync(path.join(postsDirectory, file), 'utf8');
      const { data } = matter(source);
      return { slug, ...data } as PostSummary;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
    
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();
  
  return (
    <main className="max-w-3xl text-white mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border p-4 rounded hover:shadow">
            <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                <p>{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}