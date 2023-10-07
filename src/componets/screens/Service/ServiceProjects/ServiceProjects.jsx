import React, { useState } from 'react'
import s from './ServiceProjects.module.scss'
const ServiceProjects = (props) => {
    const [styleActive, setStyleActive] = useState({})
    const [textButton, setTextButton] = useState('показать еще')
    const handleClick = () => {
        if (textButton == 'показать еще') {
            setStyleActive({ display: 'flex' })
            setTextButton("скрыть")
        }
        else {
            setStyleActive({})
            setTextButton('показать еще')
        }
    }
    return (
        <div className={s.wrapper}>
            <div className="container">
                <div className={s.inner}>
                    <h2 className={s.title}>Наши работы </h2>
                    <div className={s.images}>
                        <img className={s.img} src={`http://makers-kdi.ru/Projects/project${props.idService}_1.jpg`} alt="" />
                        <img className={s.img} src={`http://makers-kdi.ru/Projects/project${props.idService}_2.jpg`} alt="" />
                        <img style={styleActive} className={`${s.img} ${s.imgHidden}`} src={`http://makers-kdi.ru/Projects/project${props.idService}_3.jpg`} alt="" />
                        <img style={styleActive} className={`${s.img} ${s.imgHidden}`} src={`http://makers-kdi.ru/Projects/project${props.idService}_4.jpg`} alt="" />
                        <button className={`${s.button} ${s.buttonHidden}`} onClick={handleClick}>{textButton}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceProjects