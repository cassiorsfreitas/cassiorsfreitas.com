import Link from 'next/link'

import { getBlogPosts } from '@/db/blog'

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.'
}

export default function BlogPage() {
  const allBlogs = getBlogPosts()

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-gradient-cyan to-gradient-green">
        .read my blog
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Browse through my articles on web development, software engineering,
          and navigating tech careers, available in English and Portuguese.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      </div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <p className="text-grey tracking-tight">
                {post.metadata.summary}
              </p>
            </div>
          </Link>
        ))}
    </section>
  )
}
