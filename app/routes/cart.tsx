import { useEffect, useState } from 'react'
import { LinksFunction, MetaFunction } from "@remix-run/node"
import { useOutletContext } from '@remix-run/react'

import styles from '~/styles/cart.css'

export const meta: MetaFunction = () => {
    return [
        { title: "Cart | GuitarLA" },
        { name: "description", content: "Finish your purchase today" },
        { name: "keywords", content: "cart, items, guitar, music, shop" },

    ];
};

export const links: LinksFunction = () => [
    {
        rel: 'stylesheet',
        href: styles
    }
]


const Cart = () => {
    const [total, setTotal] = useState<number>(0)
    const { cart, updateQuantity, deleteGuitar } = useOutletContext<{ cart: Array<Object>, updateQuantity: (guitar: Object) => void, deleteGuitar: (id: string) => any }>();
    console.log(cart)
    useEffect(() => {

        const calculateTtotal = cart.reduce((total: any, item: any) => total + (item.quantity * item.price), 0)
        setTotal(calculateTtotal)
    }, [cart])
    return (
        <main className="container">
            <h1 className="heading">Cart</h1>
            <div className="content">
                <div className="cart">
                    <h2>Items</h2>
                    {cart?.length === 0 ? 'Cart empty' : (
                        cart?.map((item: any) => (
                            <div key={item.id} className="item">
                                <div>
                                    <img src={item.image} alt={item.name} />
                                </div>

                                <div className='item-pa'>
                                    <p className="name">{item.name}</p>
                                    <div className="quantity">
                                        <p>Quantity: </p>

                                        <select
                                            defaultValue={item.quantity}
                                            className="select"
                                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateQuantity({
                                                quantity: Number(e.target.value),
                                                id: item.id
                                            })}
                                        >
                                            {[...Array(5)].map((_, index) => (
                                                <option key={index + 1} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <p className="price">$ <span>{item.price}</span></p>
                                    <p className="subtotal">Subtotal: $ <span>{item.quantity * item.price}</span></p>
                                    <div className="options">
                                        {/* <p>Save for later</p>
                                        <p>Remove</p> */}
                                        <button onClick={() => console.log('Save for later')}>Save for later</button>
                                        <button onClick={() => deleteGuitar(item.id)}>Remove</button>
                                    </div>

                                </div>
                            </div>
                        ))
                    )}
                </div>
                <aside className="summary">
                    <h3>Purchase Summary</h3>
                    <p>Total: ${Number(Math.round(total * 100) / 100)}</p>
                </aside>
            </div>
        </main>
    )
}

export default Cart