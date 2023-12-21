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
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </section>
  )
}
