import { MetaFunction } from "@remix-run/react/dist/routeModules";

export const meta: MetaFunction = () => {
  return [
    { title: "GuitarLA - Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <h1>Hola mundo en Remix</h1>
  );
}
