import React from 'react'
import { Link } from '@remix-run/react'
import { PostInterface } from '~/interfaces/post.interface'
import { fotmatDate } from '~/utils/helpers'
const Post: React.FC<PostInterface> = (props: PostInterface) => {
    const { title, image, url, publishedAt, content } = props.post
    const description = content.map((desc: any) => {
        return desc.children.map((child: { text: string }) => child.text)
    })
    return (
        <article className='post'>
            <img src={image.data.attributes.formats.small.url} alt={`Blog Image - ${{ title }}`} className="image" />
            <div className="content">
                <h3>{title}</h3>
                <p className="date">{fotmatDate(publishedAt)}</p>
                <p className='summary'>{description}</p>
                <Link className="link" to={`/posts/${url}`}>Read post</Link>
            </div>
        </article>
    )
}

export default Post