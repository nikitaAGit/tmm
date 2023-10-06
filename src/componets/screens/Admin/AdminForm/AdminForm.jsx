import React from 'react'
import s from './AdminForm.module.scss'

const AdminForm = () => {
    return (
        <div className={s.formInner}>
            <form className={s.form}>
                <h2 className={s.title}>Войти | Админ</h2>
                <input className={s.input} type="email" />
                <input className={s.input} type="password" />
                <button className={s.button}>Войти</button>
            </form>
        </div>
    )
}

export default AdminForm