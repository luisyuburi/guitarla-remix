import { Fragment } from 'react'
import Guitar from './guitar'

const GuitarsList = (props: any) => {
    const guitars = props.guitars
    return (
        <Fragment>
            {guitars?.length && (
                <div className="guitars-grid">
                    {guitars.map((guitar: any) => (
                        <Guitar
                            key={guitar?.id}
                            guitar={guitar?.attributes}
                            id={guitar?.id}
                        />
                    ))}
                </div>
            )}
        </Fragment>
    )
}

export default GuitarsList