import React from 'react'
import style from '../Bonuses.module.scss'
import s from '../BonusesRepeat/BonusesRepeat.module.scss'
const BonusesContests = () => {
    return (
        <div className={s.contest}>
            <div className="container">
                <div style={{ marginTop: '200px' }} className={s.inner}>
                    <img className={style.img} src="../../../../../public/Bonuses/bonusesContest.svg" alt="" />
                    <div className={s.content}>
                        <h2 className={style.title}>Розыгрыши - может выйграть любой!</h2>
                        <p style={{ maxWidth: '390px' }} className={style.text}>у нас проходят такие такие такие розыгрыши   ......</p>
                        <p style={{ maxWidth: '390px', color: '#E25500' }} className={style.text}>приз может быть как ... так и ...</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BonusesContests