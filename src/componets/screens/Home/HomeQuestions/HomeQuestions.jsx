import React, { useState } from 'react'
import s from './HomeQuestions.module.scss'
import Button from '../../../ui/Button/Button'
const HomeQuestions = () => {
    const [answer, setAnswer] = useState('Кликните на вопрос и получите ответ на волнующий вас вопрос, если вашего вопроса нет в списке оставьте заявку, и мы обязательно вам ответим в ближайшее время ')
    const [isMobileAnswer, setIsMobileAnswer] = useState(false)
    const [questions] = useState([
        {
            id: 1,
            title: 'Какой опыт у вашей команды в разработке игр?',
        },
        {
            id: 2,
            title: 'Какие услуги вы предоставляете в сфере моделирования программирования?',
        },
        {
            id: 3,
            title: 'Какими языками программирования вы владеете?',
        },
        {
            id: 4,
            title: 'Сколько времени занимает разработка игры?',
        },
        {
            id: 5,
            title: 'Какие методы оплаты вы принимаете?',
        }
    ])
    const handleHover = (e) => {
        if (window.innerWidth <= 600) {
            setIsMobileAnswer(true)
        }
        if (e.target.id == 1) {
            setAnswer('Наша команда имеет многолетний опыт (более 10 лет) в разработке игр. Мы успешно создали и запустили несколько проектов, получив положительные отзывы от наших клиентов.')
        }
        else if (e.target.id == 2) {
            setAnswer('Мы предоставляем широкий спектр услуг в сфере моделирования, программирования. Наша команда может помочь вам с созданием моделей персонажей, объектов, окружения и многое другое, чтобы ваша игра выглядела неповторимо.')
        }
        else if (e.target.id == 3) {
            setAnswer(<div>Мы владеем различными языками программирования, включая C#, Python, C++,  JavaScript и др. <br /> <br />Это позволяет нам выбрать наиболее подходящий язык для реализации ваших идей и требований.</div>)
        }
        else if (e.target.id == 4) {
            setAnswer(<div>Время разработки игры зависит от множества факторов, включая ее сложность, размер команды разработчиков и доступные ресурсы. <br /> Обычно процесс разработки может занять от нескольких месяцев до нескольких лет.  <br /><br /> Чтобы оценить точное время разработки для вашего проекта, нам потребуется более подробная информация о требованиях и области разработки. Мы готовы обсудить эти вопросы с вами и предложить реалистичные сроки на основе вашего проекта и доступных ресурсов.</div>)
        }
        else if (e.target.id == 5) {
            setAnswer(<div>Мы принимаем различные методы оплаты, удобные нашим клиентам, включая: <br /> <br /> <span>Банковский перевод</span> <br />  <span> Все виды карты </span> <br /> <span>Электронные кошельки</span>   <br /> <span> И др</span> </div>)
        }
    }

    const handleClick = () => {
        setIsMobileAnswer(false)
    }
    if (isMobileAnswer) {
        return (
            <div className={s.inner}>
                <div className="container">
                    <div className={`${s.answer}  ${s.answerMobile}`}>
                        <div onClick={handleClick} className={s.button}><Button buttonText={'Закрыть'}></Button></div>
                        <div className={s.answerInner}>
                            <p className={s.answerText}>{answer} </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={s.wpapper}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.content}>
                        <h2 className="title">Частые вопросы</h2>
                        <ul className={s.questions}>
                            {questions.map((item, index) => {
                                return (
                                    <li onClick={handleHover} id={item.id} key={index} className={s.question}><p id={item.id}>{item.title}</p></li>
                                )
                            })}
                        </ul>
                        <p className={s.comment}></p>
                    </div>
                    <div className={s.answer}>
                        <div className={s.answerInner}>
                            <p className={s.answerText}>{answer} </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeQuestions