import React from 'react'
import s from './ServiceFeedback.module.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide'

const ServiceFeedback = (props) => {

    return (
        <div className={s.feedback}>
            <div className="container">
                <div className={s.inner}>
                    <h2 className={s.title}>Отзывы</h2>

                    <div className={s.images}>
                        <img className={s.img} src={`http://makers-kdi.ru/Feedbacks/feedback${props.idService}_1.jpg`} alt="" />
                        <img style={{ flex: "end" }} className={s.img} src={`http://makers-kdi.ru/Feedbacks/feedback${props.idService}_2.jpg`} alt="" />
                        <img className={s.img} src={`http://makers-kdi.ru/Feedbacks/feedback${props.idService}_3.jpg`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceFeedback