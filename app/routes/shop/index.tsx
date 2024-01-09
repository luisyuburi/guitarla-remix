import { MetaFunction } from "@remix-run/react/dist/routeModules";
import type { LinksFunction, LoaderFunction } from '@remix-run/node'; // or "@remix-run/cloudflare"
import { useLoaderData } from '@remix-run/react'
import { getGuitars } from '~/models/guitars.server'
import Guitar from "~/components/guitar";
// Import Internal Modules
import styles from '~/styles/guitars.css'

export const links: LinksFunction = () => [
  {
      rel: 'stylesheet',
      href: styles
  }
]

export const loader = async () => {
  const guitar = await getGuitars()
  return guitar.data
};

interface GuitarInterface {
  attributes: any
  id: any

}

export const meta: MetaFunction = () => {
  return [
    { title: "Shop | AguitarLA" },
    { name: "description", content: "Find the best guitars at the best price!" },
  ];
};

export default function Index() {
  const guitars: [] = useLoaderData()
  return (
    <main className="container">
      <h2 className="heading">Our Guitars</h2>
      {guitars.length && (
        <div className="guitars-grid">
          {guitars.map((guitar: GuitarInterface) => (
            <Guitar
              key={guitar?.id}
              guitar={guitar?.attributes} />
          ))}
        </div>
      )}
    </main>
  );
}
