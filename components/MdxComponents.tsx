import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import React from 'react';

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string }) => {
  const { href, children, ...rest } = props;
  // Internal links use Next.js Link
  if (href && href.startsWith('/')) {
    return (
      <Link href={href}>
        <a {...rest} className="text-blue-600 hover:underline">
          {children}
        </a>
      </Link>
    );
  }
  // External links open in new tab
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
      className="text-blue-600 hover:underline"
    >
      {children}
    </a>
  );
};

export const mdxComponents: MDXComponents = {
  a: CustomLink,
  // Override additional elements if needed (e.g., h1, h2, etc.)
};