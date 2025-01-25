import { notFound } from "next/navigation";

import { APP_NAME } from "@/lib/constants";
import { getAllPostsLatex } from "@/lib/posts";

// async function fetchPost(slug) {
//   const posts = getAllPosts();
//   console.log(posts);
//   console.log(slug);
//   return posts.find((post) => post.slug === slug);
// }
//
// export default async function Post({ params }: { params: any }) {
//   const slug = (await params).slug;
//   const post = await fetchPost(slug);
//   if (!post) {
//     notFound();
//   }
//
//   return (
//     <article>
//       <h1>{slug}</h1>
//       <p>{post.date}</p>
//       <MarkdownRenderer>{post.content}</MarkdownRenderer>
//     </article>
//   );
// }

// async function fetchPost(slug) {
//   const posts = getAllPosts();
//   console.log(posts);
//   console.log(slug);
//   return posts.find((post) => post.slug === slug);
// }

async function fetchPost(slug: string) {
  const posts = await getAllPostsLatex();
  console.log(posts);
  console.log(slug);
  return posts.find((post) => post.slug === slug);
}

const generateStaticParams = async () => {
  const posts = await getAllPostsLatex();
  return {
    params: {
      slug: posts[0].slug,
    },
  };
};

const generateMetadata = async ({ params, searchParams }) => {
  const id = params.slug ? " - " + params.slug.replaceAll("-", " ") : "";
  return {
    title: APP_NAME + id,
  };
};

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
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
