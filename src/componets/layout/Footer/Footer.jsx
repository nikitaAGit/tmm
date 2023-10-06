import React from 'react'
import s from './Footer.module.scss'
import Logo from '../../ui/Logo/Logo'
const Footer = () => {
    return (
        <footer className={s.header}>
            <div className={s.container}>
                <div className={s.inner}>
                    <nav className={s.nav}>
                        <ul className={s.navItems}>
                            <li className={s.navItem}> <a className={s.navLink} href="#">О команде</a> </li>
                        </ul>
                    </nav>
                    <Logo></Logo>
                    <ul className={s.navItems}>
                        <li className={s.navItem}> <a className={s.navLink} href="#">Акции</a> </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer