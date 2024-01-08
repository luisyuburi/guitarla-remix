import type { MetaFunction } from "@remix-run/react/dist/routeModules";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog | AguitarLA" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <h1>Blog</h1>
  );
}
