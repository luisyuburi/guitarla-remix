// Import External modules
import React from "react"
import { LinksFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"

// Import Interfaces
import { GuitarInterface } from "~/interfaces/guitar.interface"

// Import Internal Modules
// import styles from '~/styles/guitars.css'

// export const links: LinksFunction = () => [
//     {
//         rel: 'stylesheet',
//         href: styles
//     }
// ]

const Guitar: React.FC<GuitarInterface> = (props: GuitarInterface) => {
    const { name, description, price, image, url } = props.guitar
    console.log(props.guitar)
    const content = description.map((desc: any) => {
        return desc.children.map((child: { text: string }) => child.text)
    })
    console.log(image.data.attributes)
    return (
        <div className="guitar">
            <img src={image.data.attributes.formats.small.url} alt={`Image Guitar ${image.data.attributes.name}`} />
            <div className="content">
                <h3>{name}</h3>
                <p className="description">{content}</p>
                <p className="price">${price}</p>
                <Link className="link" to={`/guitars/${url}`}>View Product</Link>
            </div>
        </div>
    )
}

export default Guitar