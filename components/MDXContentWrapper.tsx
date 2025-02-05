import dynamic from "next/dynamic";

const MDXContentNoSSR = dynamic(() => import("./MdxContent"), { ssr: false });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MDXContentWrapper(props: any) {
  return <MDXContentNoSSR {...props} />;
}
