import React from 'react'
import style from '../Bonuses.module.scss'
import s from './BonusesRepeat.module.scss'

const BonusesRepeat = () => {
    return (
        <div className={s.repeat}>
            <div className="container">
                <div className={s.inner}>
                    <img className={style.img} src="../../../../../public/Bonuses/bonuses1.svg" alt="" />
                    <div className={s.content}>
                        <h2 className={style.title}>Хотите сделать повторный заказ?</h2>
                        <p style={{ maxWidth: '390px' }} className={style.text}>При повторном заказе мы должны учесть наше предыдущее сотруднечество с вами и порадовать вас подарком, бывают редкие случаи когда вам стоит напомнить нам о вашем бонусе</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BonusesRepeat