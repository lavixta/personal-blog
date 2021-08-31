import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Home() {
  return <Layout>Hello</Layout>;
}
export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markDownFile = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontMatter } = matter(markDownFile);
    return {
      slug,
      frontMatter,
    };
  });
  return {
    props: {},
  };
}
