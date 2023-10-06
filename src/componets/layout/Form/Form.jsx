import React from 'react'
import s from './Form.module.scss'
import logo from '../../../../public/form.jpg'

const Form = () => {
    return (
        <form style={{ background: `url(${logo})` }} className={s.form}>
            <h2 className={s.title}>Заказать</h2>
            <input className={s.input} type="text" value={'Введите Имя'} />
            <input className={s.input} type="text" value={'E-mail'} />
            <select className={s.input} type="text" placeholder='Тема' name="" id="">
                <option style={{ marginTop: '100px' }} value="Моделирование">Моделирование</option>
                <option value="Програмирование">Програмирование</option>
                <option value="Разработка игр">Разработка игр</option>
            </select>
            <button className={s.button}>Подтвердить заявку</button>
        </form>
    )
}

export default Form