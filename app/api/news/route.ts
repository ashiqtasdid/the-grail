
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const postsDirectory = path.join(process.cwd(), "posts");

    const filenames = await fs.readdir(postsDirectory);

    const posts = await Promise.all(
      filenames.map(async (filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = await fs.readFile(filePath, "utf8");
        const { data } = matter(fileContents);

        const slug = filename.replace(/\.mdx$/, "");

        return {
          slug,
          title: data.title || "Untitled Post",
          date: data.date || "",
          author: data.author || "Unknown Author",
          description: data.description || "",
        };
      })
    );

    posts.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });

    const latestPosts = posts.slice(0, 3);

    return NextResponse.json(latestPosts);
  } catch (error) {
    console.error("Error reading posts:", error);
    return NextResponse.error();
  }
}
