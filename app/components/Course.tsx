interface CourseData {
    title: string;
    content: CourseContentData[],
    image: {
        data: {
            attributes: {
                url: string;
            }
        }
    };
}

interface CourseContentData {
    children: Array<Object>
}


interface Props {
    course: CourseData;
}


const Course: React.FC<Props> = ({ course }) => {
    const { title, content, image } = course

    const description = content.map((data: CourseContentData) => data.children.map((child: any) => {
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