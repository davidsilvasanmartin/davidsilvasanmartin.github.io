import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/lib/markdown";

async function fetchPost(slug) {
  const posts = getAllPosts();
  console.log(posts);
  console.log(slug);
  return posts.find((post) => post.slug === slug);
}

export default async function Post({ params }: { params: any }) {
  const slug = (await params).slug;
  const post = await fetchPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1>{slug}</h1>
      <p>{post.date}</p>
      <MarkdownRenderer>{post.content}</MarkdownRenderer>
    </article>
  );
}
