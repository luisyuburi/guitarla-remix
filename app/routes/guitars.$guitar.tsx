
import { useLoaderData } from '@remix-run/react'
import { MetaFunction, LinksFunction } from "@remix-run/react/dist/routeModules";

import { getGuitarByUrl } from '~/models/guitars.server'
import styles from '~/styles/guitars.css'


export const loader = async (request: any, params?: any) => {
    const { guitar } = await request.params
    const data = await getGuitarByUrl(guitar)
    if (!data) {
        throw new Response("Guitar not found", {
            status: 404,
        });
    }
    return data
}


export const meta: MetaFunction = ({ data }: any) => {

    if (!data) {
        return [{
            title: 'Guitar not found',
            description: 'description", content: "Guitars sales, music blog, learn music, guitar not found'
        }]
    }
    return [
        { title: `${data?.attributes?.name} | Special Offer ${data?.attributes?.price}$` },
        { name: `description", content: "Guitars sales, music blog, learn music, ${data?.attributes?.name}` },
    ];

};


export const links: LinksFunction = () => [
    {
        rel: 'stylesheet',
        href: styles
    }
]

const Guitar = () => {
    const guitar: any = useLoaderData()
    const { name, description, image, price } = guitar?.attributes

    const content = description.map((desc: any) => {
        return desc.children.map((child: { text: string }) => child.text)
    })

    return (
        <main className="container guitar">
            <img src={image.data.attributes.url} alt={`Guitar image ${name}`} className="image" />
            <div className="content">
                <h3>{name}</h3>
                <p className="text">
                    {content}
                </p>
                <p className="price">
                    {price}$
                </p>
            </div>
        </main>
    )
}

export default Guitar