import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc"; // or "next-mdx-remote" if not using RSC
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { mdxComponents } from "./MdxComponents";

interface MdxRendererProps {
  source: MDXRemoteSerializeResult;
}

export default function MdxRenderer({ source }: MdxRendererProps) {
  return <MDXRemote source={source} components={mdxComponents} />;
}
