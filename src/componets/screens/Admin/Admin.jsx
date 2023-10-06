import React, { useState } from 'react'
import s from './Admin.module.scss'
import AdminForm from './AdminForm/AdminForm'


const Admin = () => {
    const [isActiveAccount, setIsActiveAccount] = useState()

    if (isActiveAccount) {
        return (
            <div className={s.admin}>
                <AdminHome></AdminHome>
            </div>
        )
    }
    return (
        <div className={s.admin}>
            <AdminForm></AdminForm>
        </div>
    )
}

export default Admin