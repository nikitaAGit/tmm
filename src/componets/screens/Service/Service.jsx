import React, { useEffect, useState } from 'react'
import s from './Service.module.scss'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import Preview from '../../layout/Preview/Preview'
import ServiceProjects from './ServiceProjects/ServiceProjects'
import ServiceFeedback from './ServiceFeedback/ServiceFeedback'
import Form from '../../layout/Form/Form'
import { useParams } from 'react-router-dom'

const Service = () => {
    const params = useParams()
    const id = params.id
    const [service, setService] = useState({})
    useEffect(() => {
        if (id == 1) {
            setService({
                title: 'Моделирование',
                video: 'http://makers-kdi.ru/model.mp4',
            })
        }
        else if (id == 2) {
            setService({
                title: 'Программирование',
                video: 'http://makers-kdi.ru/programming.mp4',
            })
        }

        else if (id == 0) {
            setService({
                title: 'Разработка Игр',
                video: 'http://makers-kdi.ru/gaming.mp4',
            })
        }
    }, [])

    return (
        <div className={s.wrapper}>
            <Header></Header>
            <Preview title={service.title}>  </Preview>
            <div className={s.videoInner}>
                <div className="container">
                    <video className={s.video} muted='muted' controls='controls' loop='loop' autoPlay="autoplay" src={service.video}>
                        <source src={service.video} />
                    </video>
                </div>
            </div>
            <ServiceProjects idService={id}></ServiceProjects>
            <ServiceFeedback idService={id}></ServiceFeedback>
            <Form></Form>
            <Footer></Footer>
        </div>
    )
}

export default Service