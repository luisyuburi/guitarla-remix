import { useLoaderData } from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/react/dist/routeModules";

import { getPosts } from '~/models/posts.server'
import Post from "~/components/post";

import styles from '~/styles/blog.css'

export const loader = async () => {
  const posts = await getPosts()
  return posts.data
};

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles
  }
]

export const meta: MetaFunction = () => {
  return [
    { title: "Blog | GuitarLA" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const posts: [] = useLoaderData()
  return (
    <main className="content">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map((post: any) =>
          <Post
            key={post.id}
            post={post.attributes}
          />
        )}
      </div>
    </main>
  );
}
