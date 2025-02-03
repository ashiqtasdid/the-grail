import path from "path";
import fs from "fs";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/mdx";
import MdxRenderer from "@/components/MdxRenderer";
import { Metadata } from "next";

// Update the props so that params is a Promise resolving to an object with slug.
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  // Await the asynchronous params
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    if (!post || !post.source) {
      return notFound();
    }

    return (
      <div className="flex py-10 bg-[#252525] justify-center items-center">
        <article className="prose text-white prose-lg mx-auto my-8">
          <h1>{post.frontMatter.title ?? "Untitled Post"}</h1>
          <MdxRenderer source={post.source} />
        </article>
      </div>
    );
  } catch (error) {
    console.error("Error loading post:", error);
    return notFound();
  }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const slugs = filenames
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));

  return slugs.map((slug) => ({ slug }));
}

// Update generateMetadata to treat params as a Promise and fix the template literal syntax.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.frontMatter?.title) {
    return {
      title: "Blog - The Grail",
      description:
        "Get latest news and updates from The Grail. Stay up to date with the latest announcements.",
    };
  }

  return {
    title: `${post.frontMatter.title} - The Grail`,
    description:
      post.frontMatter.description ||
      "Get latest news and updates from The Grail. Stay up to date with the latest announcements.",
  };
}
