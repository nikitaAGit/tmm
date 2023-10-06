import React, { useEffect } from 'react'
import Header from '../../layout/Header/Header'
import HomePreview from './HomePreview/HomePreview'
import HomeAbout from './HomeAbout/HomeAbout'
import HomeQuestions from './HomeQuestions/HomeQuestions'
import Footer from '../../layout/Footer/Footer'
import HomeLast from './HomeLast/HomeLast'
import HomeCatalog from './HomeCatalog/HomeCatalog'

import s from './Home.module.scss'
const Home = () => {
    return (
        <div className={s.inner}>
            <Header></Header>
            <HomePreview></HomePreview>
            <HomeAbout></HomeAbout>
            <HomeCatalog></HomeCatalog>
            <HomeQuestions></HomeQuestions>
            <HomeLast></HomeLast>
            <Footer></Footer>
        </div>
    )
}

export default Home