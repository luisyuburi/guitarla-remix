import { LinksFunction } from '@remix-run/node'
import React from 'react'

import stylesCourse from '~/styles/course.css'


const Course = (props: any) => {
    const { title, content, image } = props.course

    const description = content.map((data: any) => data.children.map((child: any) => {
        return child.text
    }))

    return (
        <section className="course">
            <style jsx={"true"}>{`
            .course {
                background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${image.data.attributes.url})
            }
            `}</style>
            <div className="container course-grid">
                <div className="content">
                    <h2 className="heading">{title}</h2>
                    <p className="text">{description}</p>
                </div>
            </div>
        </section>
    )
}

export default Course