import type { LinksFunction, MetaFunction } from "@remix-run/react/dist/routeModules";

// export const links: LinksFunction = () => [
//   {
//     rel: 'stylesheet',
//     href: 'header.css'
//   }
// ]

export const meta: MetaFunction = () => {
  return [
    { title: "About | AguitarLA" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <h1>About Us</h1>
  );
}
