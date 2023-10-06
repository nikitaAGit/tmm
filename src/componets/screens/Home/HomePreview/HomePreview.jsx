import React, { useEffect, useState } from 'react'
import s from './HomePreview.module.scss'
const HomePreview = (props) => {
    const [styles, setStyles] = useState({})
    useEffect(() => {
        const isAnim = () => { setStyles({ transform: 'none' }) }
        isAnim()
        console.log('1')
    }, [])
    if (props.title) {
        return (
            <div className={s.preview}>
                <div className="container">
                    <div style={styles} className={s.inner}>
                        <h1 className={s.title}>{props.title}</h1>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={s.preview}>
            <div className="container">
                <div style={styles} className={s.inner}>
                    <h1 className={s.title}><span>T</span>eam | <span>M</span>omentum&nbsp;<span>M</span>akers </h1>
                </div>
            </div>
        </div>
    )
}

export default HomePreview