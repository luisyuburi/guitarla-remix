import type { LinksFunction, MetaFunction } from "@remix-run/react/dist/routeModules";
import image from '../../public/img/nosotros.jpg'
import Footer from "~/components/footer";
import styles from '~/styles/about.css'
export const meta: MetaFunction = () => {
    return [
        { title: "About | GuitarLA" },
        { name: "description", content: "Guitar sales, music blog" },
        { name: "keywords", content: "guitar, music, shop" },

    ];
};
export const links: LinksFunction = () => [

    {
        rel: 'stylesheet',
        href: styles
    },
    {
        rel: 'preload',
        href: image,
        as: 'image'
    },

];

export default function About() {
    return (
        <main className="container about">
            <h2 className="heading">About</h2>
            <div className="content">
                <img src={image} alt="About Us - image" />
                <div className="">
                    <p>
                        Integer a purus vel metus ullamcorper sollicitudin. Curabitur congue mattis est sit amet congue. Curabitur efficitur odio vitae mollis facilisis. Quisque malesuada ligula eu suscipit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ullamcorper velit in odio eleifend, et eleifend dolor ultrices. Phasellus viverra venenatis enim sit amet pulvinar. Fusce vitae blandit magna, et cursus massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <p>            Duis pharetra non nulla quis luctus. Mauris vehicula auctor velit, eu feugiat leo malesuada vel. Sed malesuada sem erat, non iaculis ligula gravida in. Cras tincidunt risus sit amet velit imperdiet vulputate. Integer placerat varius est, id tincidunt nisl faucibus et. Quisque laoreet augue rhoncus nisi rhoncus, quis ultricies risus ultricies. Curabitur nec ultricies nibh. Vestibulum vehicula metus ut vehicula pretium.
                    </p>
                </div>
            </div>
        </main>
    );
}
