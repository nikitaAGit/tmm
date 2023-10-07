import React from 'react'
import s from './AboutOwner.module.scss'
const AboutOwner = () => {
    return (
        <div className={s.owner}>
            <div className="container">
                <div className={s.inner}>
                    <img className={s.img} src="http://makers-kdi.ru/About/aboutOwner.jpg" alt="" />
                    <div className={s.content}>
                        <h2 className={s.title}>Денис Калинин</h2>
                        <p className={s.text}>я владелец команды «Momentum Makers». <br /> В области информационных технологий у меня огромный опыт и познания. Моделирование и программирование - это мои сильные стороны. Кроме того, я страстно увлекаюсь дизайном и создал уже более 25 игр, которые приносят мне радость и доход.</p>
                        <div className={s.line} ></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutOwner