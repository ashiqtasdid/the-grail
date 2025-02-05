import { MDXRemote } from 'next-mdx-remote';

export default function MDXContent({
  compiledSource,
  scope,
}: {
  compiledSource: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scope?: Record<string, any>;
}) {
  return <MDXRemote compiledSource={compiledSource} scope={scope} frontmatter={undefined} />;
}