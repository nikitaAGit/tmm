import React from 'react'
import s from './AboutFeedback.module.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide'

const AboutFeedback = () => {
    return (
        <div className={s.feedback}>
            <div className="container">
                <div className={s.inner}>
                    <h2 className={s.title}>Отзывы о команде</h2>
                    <div className={`${s.images} ${s.imagesHidden}`}>
                        <Splide
                            options={{
                                // rewind: true,
                                maxWidth: '320px',
                                width: '400px',
                                perPage: 1,
                                perMove: 1,
                                gap: '1rem',
                                controls: false,
                                speed: 800,
                            }}>
                            <SplideSlide style={{ margin: " 0 auto" }}><img className={s.img} src="../../../../../public/aboutContent.png" alt="" /></SplideSlide>
                            <SplideSlide style={{ margin: " 0 auto" }}><img className={s.img} src="../../../../../public/aboutContent.png" alt="" /></SplideSlide>
                            <SplideSlide style={{ margin: " 0 auto" }}> <img className={s.img} src="../../../../../public/aboutContent.png" alt="" /></SplideSlide>
                        </Splide>
                    </div>
                    <ul className={s.images}>
                        <li className={s.item}><img className={s.img} src="../../../../../public/aboutContent.png" alt="" /></li>
                        <li className={s.item}>
                            <h2 className={s.title}>Отзывы о команде</h2>
                            <img className={s.img} src='../../../../../public/aboutContent.png' alt="" />
                        </li>
                        <li className={s.item}><img className={s.img} src="../../../../../public/aboutContent.png" alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutFeedback