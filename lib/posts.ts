import * as fs from 'node:fs';

import matter from 'gray-matter';
import path from 'path';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const postsDir = path.join(process.cwd(), 'posts');

export const getAllPosts = () => {
  const fileNames = fs.readdirSync(postsDir);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const filePath = path.join(postsDir, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { content, data } = matter(fileContents);
      return { slug, content, ...data };
    });
};

export const getAllPostsLatex = async () => {
  const fileNames = fs
    .readdirSync(postsDir)
    .filter((fileName) => fileName.endsWith('.md'));

  return Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const filePath = path.join(postsDir, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { content, data } = matter(fileContents);

      console.log(content);
      const processedContent = await unified()
        // .use(markdown)
        // .use(math)
        // .use(htmlKatex)
        // .use(html)
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeHighlight) // TODO NOT WORKING & need to find a theme (see "css") https://github.com/rehypejs/rehype-highlight
        .use(rehypeStringify)
        .process(content);
      const contentHtml = processedContent.toString();
      console.log(contentHtml);

      return { slug, contentHtml, ...data };
    }),
  );
};
