import { ReactNode } from "react";
import { useState, useEffect } from 'react'
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
  Link
} from "@remix-run/react";
import styles from '~/styles/index.css'
import Header from "~/components/header";
import Footer from "~/components/footer";


interface Props {
  children?: ReactNode
  // any props that come into the component
}

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com"',
    crossOrigin: "anonymous"
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
  },
  {
    rel: 'stylesheet',
    href: styles
  },

];

export default function App() {
  const [cart, setCart] = useState<Object[]>(typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("cart") ?? '[]') : null);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addCart = (guitar: any) => {
    if (cart.some((guitarState: any) => guitarState.id === guitar.id)) {
      // Iterate the array and identify the duplicate element
      const updatedCart = cart.map((guitarState: any) => {
        if (guitarState.id === guitar.id) {
          //Overwrite the quantity
          guitarState.quantity = guitar.quantity
        }
        return guitarState
      })
      // Add item to cart
      setCart(updatedCart)
    }
    else {
      setCart([...cart, guitar])
    }
  }

  const updateQuantity = (guitar: any) => {
    const cartUpdated = cart.map((guitarState: any) => {
      if (guitarState.id === guitar.id) {
        guitarState.quantity = guitar.quantity
      }
      return guitarState
    })
    setCart(cartUpdated)
  }

  const deleteGuitar = (id: string) => {
    const cartUpdated = cart.filter((guitarState: any) => guitarState.id !== id)
    setCart(cartUpdated)
  }
  return (
    <Document>
      <Outlet
        context={{
          addCart,
          cart,
          updateQuantity,
          deleteGuitar
        }}
      />
    </Document>
  );
}

function Document({ children, ...props }: Props) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload port={3000} />
      </body>
    </html>
  )
}

/** Errors handling */

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <html>
        <head>
          <title>404 - {error.data}</title>
          <Meta />
          <Links />
        </head>
        <body>
          <Header />
          <p className='error'>{error.status} {error.data}</p>
          <Link className='error-enlace' to="/">Tal vez quieras volvera a la página principal</Link>
          <Footer />
          <Scripts />
          <LiveReload port={3000} />
        </body>
      </html>
    )
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}