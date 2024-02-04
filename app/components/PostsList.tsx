import { Fragment } from "react"
import Post from "./post"

const PostsList = (props: any) => {
    const { posts } = props

    return (
        <Fragment>
            <h2 className="heading">Blog</h2>
            <div className="blog">
                {posts.map((post: any) =>
                    <Post
                        key={post.id}
                        post={post.attributes}
                    />
                )}
            </div>
        </Fragment>
    )
}

export default PostsList