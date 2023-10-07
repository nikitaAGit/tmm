import React from 'react'
import s from './AboutContent.module.scss'

const AboutContent = () => {
    return (
        <div className={s.aboutContent}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.header}>
                        <img className={s.headerImg} src="http://makers-kdi.ru/About/about_min2.jpg" alt="" />
                        <p className={s.text}> В работе над проектами всегда возникают сложности, связанные с техническими проблемами, сложностью программирования и изменяющимися требованиями заказчика. Мы смотрим на них как на вызов и готовы преодолеть их с помощью нашего таланта и усидчивости.</p>
                        <img className={`${s.headerImg} ${s.headerImgHidden}`} src="http://makers-kdi.ru/About/about_min2.jpg" alt="" />
                    </div>
                    <div className={s.main}>
                        <p className={s.text}>Несмотря на возникающие трудности, мы гордо можем сказать, что нашей команде удается успешно справляться со всеми поставленными задачами. Мы готовы к новым вызовам и горячо обсуждаем возникающие проблемы, чтобы обеспечить нашим клиентам самые инновационные и качественные решения в области информационных технологий.</p>
                        <img className={s.mainImg} src="http://makers-kdi.ru/About/aboutContent.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent