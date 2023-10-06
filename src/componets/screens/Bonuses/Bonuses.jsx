import React from 'react'
import s from './Bonuses.module.scss'
import Header from '../../layout/Header/Header'
import BonusesRepeat from './BonusesRepeat/BonusesRepeat'
import BonusesFree from './BonusesFree/BonusesFree'
import BonusesContests from './BonusesContests/BonusesContests'
import BonusesDiscounts from './BonusesDiscounts/BonusesDiscounts'

const Bonuses = () => {
    return (
        <div className={s.bonuses}>
            <div className={s.bonusesShadow}></div>
            <Header></Header>
            <BonusesRepeat></BonusesRepeat>
            <BonusesFree></BonusesFree>
            <BonusesContests></BonusesContests>
            <BonusesDiscounts></BonusesDiscounts>
            <h3 className={s.titleLast}>С нами интересно, скучно не будет</h3>
        </div>
    )
}

export default Bonuses