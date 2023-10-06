import React from 'react'
import style from '../Bonuses.module.scss'
import s from './BonusesFree.module.scss'
const BonusesFree = () => {
    return (
        <div className={s.free}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.content}>
                        <h2 className={`${style.title} ${s.title}`}>Бесплатный заказ</h2>
                        <div className={s.textInner}>
                            <p className={`${style.text} ${s.text}`}>Вы наш постояный клиент?</p>
                            <p className={`${style.text} ${s.text}`}>Делали с нами крупный проект?</p>
                        </div>
                        <p className={`${style.text}`}>пишите обсудим)</p>
                    </div>
                    <img className={style.img} src="../../../../../public/Bonuses/bonusesVip.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default BonusesFree