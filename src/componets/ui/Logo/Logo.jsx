import React from 'react'
import s from './Logo.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../../../public/logo.svg'

const Logo = () => {
    return (
        <Link to='/' className={s.innerImg}><img className={s.img} src={logo} alt="" /></Link>
    )
}

export default Logo