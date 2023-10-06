import React from 'react'
import s from './About.module.scss'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import AboutContent from './AboutContent/AboutContent'
import AboutOwner from './AboutOwner/AboutOwner'
import AboutJoin from './AboutJoin/AboutJoin'
import Form from '../../layout/Form/Form'
import HomePreview from '../Home/HomePreview/HomePreview'

const About = () => {
    return (
        <div className={s.about}>
            <Header></Header>
            <HomePreview title='О команде'></HomePreview>
            <AboutContent></AboutContent>
            <AboutOwner></AboutOwner>

            <AboutJoin></AboutJoin>
            <Form></Form>
            <Footer></Footer>
        </div>
    )
}

export default About