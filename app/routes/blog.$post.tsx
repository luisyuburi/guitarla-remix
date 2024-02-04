import { MetaFunction, useLoaderData } from '@remix-run/react'
import { fotmatDate } from '~/utils/helpers';
import { LinksFunction } from '@remix-run/node';

import { getPostByUrl } from '~/models/posts.server'
import styles from '~/styles/blog.css'

export const loader = async (params: any) => {
    const { post } = params.params
    const data: any = await getPostByUrl(post)
    if (!data) {
        throw new Response('Blog not found', {
            status: 404,
            statusText: 'Blog not found'
        })
    }
    return data
};

export const meta: MetaFunction = ({ data }: any) => {
    if (!data) {
        return [{
            title: 'Post not found',
            description: 'description", content: "Posts sales, music blog, learn music, Post not found'
        }]
    }
    return [
        { title: `${data?.attributes?.title} | GuitarLA` },
        { name: `description", content: "Posts sales, music blog, learn music, ${data?.attributes?.title}` },
    ];

};

export const links: LinksFunction = () => [

    {
        rel: 'stylesheet',
        href: styles
    },

];

const Post = () => {
    const post: any = useLoaderData()
    const { title, image, publishedAt, url, content } = post.attributes
    return (
        <article className="container post mt-3">
            <img src={image.data.attributes.formats.medium.url} alt={`Blog Image - ${{ title }}`} className="image" />
            <div className="content">
                <h3>{title}</h3>
                <p className="date">{fotmatDate(publishedAt)}</p>
                {content.map((desc: any) => {
                    return desc.children.map((child: { text: string }) =>
                        <p className='text'>{child.text}</p>
                    )
                })}

            </div>
        </article>
    )
}

export default Post