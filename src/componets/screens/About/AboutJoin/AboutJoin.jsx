import React from 'react'
import s from './AboutJoin.module.scss'
const AboutJoin = () => {
    return (
        <div className={s.join}>
            <div className="container">
                <h2 className={s.title}>Хотите к нам в команду?</h2>
                <div className={s.inner}>
                    <div className={s.preview} alt="" >
                        <h2 className={s.previewText}>Мы ищем амбициозных ребят, готовых к интересной и творческой работе в сфере IT! Если вы разработчик игр, моделлер, программист, умеете писать звуки, песни или музыку, умеете работать с видео, создавать сайты или имеете хороший опыт в дизайне, то у нас есть много возможностей для вас в нашей команде. Если вы готовы присоединиться к нам, то мы с нетерпением ждем вашего резюме и портфолио.</h2>
                    </div>
                    <div className={s.content}>
                        <ul className={s.items}>
                            <li className={s.item}>
                                <p className={s.itemText}>Переходите по ссылке</p>
                                <img className={s.icon} src="../../../../../public/About/about_min2.jpg" alt="" />
                            </li>
                            <li className={s.item}>
                                <img className={s.icon} src="../../../../../public/About/about_min1.jpg" alt="" />
                                <p className={s.itemText}>Оставляйте резюме</p>
                            </li>
                            <li className={s.item}>
                                <p className={s.itemText}>Проходите собеседование</p>
                                <img className={s.icon} src="../../../../../public/About/about_min2.jpg" alt="" />
                            </li>
                        </ul>
                        <a className={s.link} href="#">Мы Вконтакте</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutJoin