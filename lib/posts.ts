import path from 'path';
import * as fs from 'node:fs';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export const getAllPosts = () => {
  const fileNames = fs.readdirSync(postsDir);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const filePath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContents);
    return { slug, content, ...data };
  });
};
