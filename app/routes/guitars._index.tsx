import { MetaFunction } from "@remix-run/react/dist/routeModules";
import type { LinksFunction, LoaderFunction } from '@remix-run/node'; // or "@remix-run/cloudflare"
import { useLoaderData, Outlet } from '@remix-run/react'
import { getGuitars } from '~/models/guitars.server'
import GuitarsList from "~/components/GuitarsList";
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


export const meta: MetaFunction = () => {
  return [
    { title: "Shop | GuitarLA" },
    { name: "description", content: "Find the best guitars at the best price!" },
  ];
};

export default function Index() {
  const guitars: any = useLoaderData()
  return (
    <main className="container">
      <GuitarsList
        key={guitars?.id}
        guitars={guitars} />

    </main >
  )
}
