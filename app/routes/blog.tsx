import { Outlet } from "@remix-run/react"
import styles from "~/styles/blog.css"
import { useOutletContext } from "@remix-run/react"

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

function Blog() {

    return (
        <div className="container">
            <Outlet
                context={useOutletContext()}
            />
        </div>
    )
}

export default Blog