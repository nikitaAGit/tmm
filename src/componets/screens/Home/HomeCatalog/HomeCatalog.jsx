import React, { useEffect, useState } from 'react'
import s from './HomeCatalog.module.scss'
import Button from '../../../ui/Button/Button'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Navigate } from 'react-router-dom';

const HomeCatalog = () => {
    const [isRedirect, setIsRedirect] = useState(false)
    const items = [
        {
            title: 'Разработка игр',
            text: <p className={s.text}>Мы создадим игру, учитывая все ваши предпочтения, грамотно структурируя план разработки</p>,
            img: 'prog_game.jpg'
        },
        {
            title: 'Моделирование',
            text: <p className={s.text}>Создаём красивую модель 3D  тем самым улучшаем качество ваших проектов</p>,
            img: 'model.jpg'
        },
        {
            title: ' Программирование',
            text: <p className={s.text}>Поможем вам преуспеть <br />  в работе с цифровыми технологиями, реализуя ваши проекты</p>,
            img: 'programming.jpg'
        }
    ]

    const handleClick = (e) => {
        const id = e.target.id
        localStorage.removeItem('idService')
        localStorage.setItem('idService', id)
        setIsRedirect(true)
    }

    if (isRedirect) {
        return <Navigate to={`/service/${localStorage.getItem('idService')}`}></Navigate>
    }

    return (
        <div className={s.wrapper}>
            <div className="container">
                <div className={s.inner}>
                    <ul className={`${s.items}`}>
                        <Splide
                            options={{
                                // rewind: true,
                                maxWidth: '320px',
                                width: '400px',
                                perPage: 1,
                                perMove: 1,
                                gap: '1rem',
                                controls: false,
                                speed: 800,
                            }}
                        >
                            {items.map((item, index) => {
                                return (
                                    <SplideSlide key={index} style={{ margin: " 0 auto" }}>
                                        <div id={index} onClick={handleClick} to={`/service`} style={{ margin: " 0 auto" }} className={s.item}>
                                            <img id={index} className={s.img} src={item.img} alt="" />
                                            <button id={index} onClick={handleClick} className={s.buttonRedirect}></button>
                                            <div id={index} className={s.content}>
                                                <h3 id={index} className={s.title}>{item.title}</h3>
                                                <div id={index} className={s.text}>{item.text}</div>
                                                <Button id={index} styles={{ border: '2px solid #FCA311' }} buttonText={'Посмотреть'}></Button>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                )
                            })}
                        </Splide>
                    </ul>
                    <ul className={`${s.items} ${s.itemsHidden}`}>
                        {items.map((item, index) => {
                            return (
                                <div id={index} onClick={handleClick} key={index} className={s.item}>
                                    <img id={index} className={s.img} src={item.img} alt="" />
                                    <button id={index} onClick={handleClick} className={s.buttonRedirect}></button>
                                    <div id={index} className={s.content}>
                                        <h3 id={index} className={s.title}>{item.title}</h3>
                                        {item.text}
                                        <Button id={index} styles={{ border: '2px solid #FCA311' }} buttonText={'Посмотреть'}></Button>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div >
        </div >
    )
}

export default HomeCatalog