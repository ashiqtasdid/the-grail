import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

export async function GET() {
  try {
    const postsDirectory = path.join(process.cwd(), "posts");
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames
      .filter(
        (fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md")
      )
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title || slug,
          date: data.date
            ? new Date(data.date).toLocaleDateString()
            : undefined,
          author: data.author || undefined,
          description: data.description || undefined,
        };
      })
      .sort((a, b) => {
        if (a.date && b.date) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return 0;
      });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}
