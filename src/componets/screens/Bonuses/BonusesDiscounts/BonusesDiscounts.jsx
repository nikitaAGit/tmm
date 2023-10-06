import React from 'react'
import style from '../Bonuses.module.scss'
import s from './BonusesDiscounts.module.scss'

const BonusesDiscounts = () => {
    return (
        <div className={s.discount}>
            <div className="container">
                <div className={s.inner}>
                    <h2 className={style.title}>Скидки - куда же без них</h2>
                    <p className={s.comment}>на скдики могу расчитывать те те те
                        ........ ....... ... ......... ...</p>
                    <p style={{ color: '#E25500', fontSize: '24px' }} className={style.text}>Виды скидок</p>
                    <ul className={s.items}>
                        <li className={s.item}><p className={s.itemTitle}>название</p></li>
                        <li className={s.item}><p className={s.itemTitle}>название</p></li>
                        <li className={s.item}><p className={s.itemTitle}>название</p></li>
                        <li className={s.item}><p className={s.itemTitle}>название</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BonusesDiscounts