import React, { useEffect, useState } from 'react'
import s from "./Preview.module.scss"

const Preview = (props) => {
    const [height, setHeight] = useState()
    useEffect(() => {
        setHeight(window.innerHeight)
    }, [])

    return (
        <div className={s.wrapper}>
            <div className="container">
                <div style={{ height: height, }} className={s.inner}>
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>

    )
}

export default Preview