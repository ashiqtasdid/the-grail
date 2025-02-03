export const MDXComponents = {
  // Headings
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mt-2 text-3xl font-bold"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-2 text-2xl font-bold"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-2 text-xl font-bold"
      {...props}
    />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="mt-2 text-lg font-semibold"
      {...props}
    />
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className="mt-2 text-base font-medium"
      {...props}
    />
  ),
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className="mt-2 text-sm font-medium"
      {...props}
    />
  ),
  // Paragraph
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-4" {...props} />
  ),
  // Anchor
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-blue-600 hover:underline dark:text-blue-400"
      {...props}
    />
  ),
  // Image
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="my-4 rounded max-w-full h-auto" {...props} />
  ),
  // Lists
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc ml-6 my-4 te"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal ml-6 my-4 te"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="my-1" {...props} />
  ),
  // Blockquote
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4 "
      {...props}
    />
  ),
  // Preformatted text and Code
  pre: (props: React.HTMLAttributes<HTMLElement>) => (
    <pre
      className="bg-gray-800 text-white p-4 rounded my-4 overflow-auto shadow-lg"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-gray-200 dark:bg-gray-700 rounded px-1 py-0.5 font-mono"
      {...props}
    />
  ),
  // Table elements
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <table className="w-full text-left border-collapse my-4" {...props} />
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-gray-100 dark:bg-gray-800" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="border-t border-gray-200 dark:border-gray-700" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th className="px-4 py-2 text-gray-900 dark:text-white" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableDataCellElement>) => (
    <td className="px-4 py-2 text-gray-800 dark:text-gray-300" {...props} />
  ),
};
