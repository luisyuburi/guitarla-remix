import { useState } from 'react'
import { useLoaderData, useOutletContext } from '@remix-run/react'
import { MetaFunction, LinksFunction } from "@remix-run/react/dist/routeModules";
import { GuitarInterface } from '~/interfaces/guitar.interface'
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
    const [quantity, setQuantity] = useState(0)
    const { addCart } = useOutletContext<{ addCart: (guitar: any) => void }>();
    const guitar: any = useLoaderData()
    const { name, description, image, price } = guitar?.attributes
    const content = description.map((desc: any) => {
        return desc.children.map((child: { text: string }) => child.text)
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (quantity < 1) {
            alert("Debes seleccionar una cantidad")
            return
        }
        const guitarSelected = {
            id: guitar.id,
            image: image.data.attributes.url,
            name, price, quantity
        }
        addCart(guitarSelected)
    }
    return (
        <main className="container guitar">
            <img src={image.data.attributes.url} alt={`Guitar ${name}`} className="image" />
            <div className="content">
                <h3>{name}</h3>
                <p className="text">
                    {content}
                </p>
                <p className="price">
                    {price}$
                </p>
                <form action="" className='form' onSubmit={handleSubmit}>
                    <label htmlFor="quantity">Quantity</label>

                    <select
                        name=""
                        id="quantity"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setQuantity(Number(e.target.value))}
                    >
                        <option value="0">-- Select --</option>
                        {[...Array(5)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>{index + 1}</option>
                        ))}
                    </select>

                    <input
                        type='submit'
                        value='Add to cart'
                    />
                </form>
            </div>
        </main>
    )
}

export default Guitar