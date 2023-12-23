import { getBlogPosts } from '../db/blog'

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `https://cassiorsfreitas.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt
  }))

  const routes = ['', '/blog', '/stack', '/work'].map((route) => ({
    url: `https://cassiorsfreitas.com${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes, ...blogs]
}
