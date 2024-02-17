import { LinksFunction } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react/dist/routeModules";
import { useLoaderData } from '@remix-run/react'
import { Fragment } from "react";

import { getGuitars } from "~/models/guitars.server";
import { getPosts } from '~/models/posts.server'
import { getCourse } from "~/models/course.server";

import GuitarsList from "~/components/GuitarsList";
import PostsList from "~/components/PostsList";
import Course from "~/components/Course";

import styleGuitars from '~/styles/guitars.css'
import stylePosts from '~/styles/blog.css'
import stylesCourse from '~/styles/course.css'


export const meta: MetaFunction = () => {
  return [
    { title: "GuitarLA - Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styleGuitars
  },
  {
    rel: 'stylesheet',
    href: stylePosts
  },
  {
    rel: 'stylesheet',
    href: stylesCourse
  },
]




export const loader = async () => {

  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse()
  ])
  return {
    guitars: guitars.data,
    posts: posts.data,
    course: course.data
  }
};

export default function Index() {
  const data: any = useLoaderData()

  return (
    <Fragment>
      <main className="container">
        <GuitarsList
          guitars={data.guitars}
        />
      </main>
      <Course
        course={data.course.attributes}
      />
      <section className="container">
        <PostsList
          posts={data.posts}
        />
      </section>

    </Fragment>
  );
}
