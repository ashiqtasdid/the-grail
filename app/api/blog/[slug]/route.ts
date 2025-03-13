import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Helper function to convert markdown to HTML
async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Update the type declaration to match what Next.js expects
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  // Now we need to await params since it's typed as a Promise
  const { slug } = await params;

  const postsDirectory = path.join(process.cwd(), "posts");

  // Check both .md and .mdx extensions
  let fullPath;
  if (fs.existsSync(path.join(postsDirectory, `${slug}.md`))) {
    fullPath = path.join(postsDirectory, `${slug}.md`);
  } else if (fs.existsSync(path.join(postsDirectory, `${slug}.mdx`))) {
    fullPath = path.join(postsDirectory, `${slug}.mdx`);
  } else {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const contentHtml = await markdownToHtml(content);

  const post = {
    slug,
    title: data.title || slug,
    date: data.date ? new Date(data.date).toLocaleDateString() : undefined,
    author: data.author || undefined,
    content: contentHtml,
  };

  return NextResponse.json(post);
}