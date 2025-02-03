import path from "path";
import fs from "fs";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/mdx";
import MdxRenderer from "@/components/MdxRenderer";
import { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
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

export default async function BlogPost(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

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
