import { getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import MarkdownIt from 'markdown-it';
import { MarkdownRenderer } from '@/lib/markdown';

async function fetchPost(slug) {
  const posts = getAllPosts();
  console.log(posts);
  console.log(slug);
  return posts.find((post) => post.slug === slug);
}

const md = new MarkdownIt();

export default async function Post({ params }) {
  const slug = (await params).slug;
  const post = await fetchPost(slug);
  if (!post) {
    notFound();
  }

  const htmlConverter = md.render(post.content);

  return (
    <article>
      <h1>{slug}</h1>
      <p>{post.date}</p>
      <MarkdownRenderer>{post.content}</MarkdownRenderer>
    </article>
  );
}
