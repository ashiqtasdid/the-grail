"use client"; // Ensure this file is treated as a client component

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXComponents } from "./MdxComponents";

interface MdxRendererProps {
  source: MDXRemoteSerializeResult;
}

export default function MdxRenderer({ source }: MdxRendererProps) {
  return <MDXRemote {...source} components={MDXComponents} />;
}
