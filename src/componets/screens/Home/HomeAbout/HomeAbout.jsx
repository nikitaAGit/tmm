import React from 'react'
import s from './HomeAbout.module.scss'
import Button from '../../../ui/Button/Button'
const HomeAbout = () => {
    return (
        <div className={s.about}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.content}>
                        <h2 className='title'>О команде:</h2>
                        <p className={s.text}>Мы - команда специалистов, способная в любой сложности работы, ощущать себя как рыба в воде. Мы стремимся к высочайшему качеству работы и активно развиваемся, шагая в ногу со временем.</p>
                        <Button buttonText={'Подробнее'}></Button>
                    </div>
                    <div className={s.logo}>
                        <img src="logo.svg" alt="" className={s.logoImg} />
                        <h2 className={s.logoTitle}>team of specialists</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout