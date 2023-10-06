import React from 'react'
import s from './Header.module.scss'
import Logo from '../../ui/Logo/Logo'
import { Turn as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import vk_icon from '../../../../public/vk_icon.jpg'
const Header = () => {
    const [styles, setStyles] = useState({})
    const [isVisible, setIsVisible] = useState(false)
    const [isOpen, setOpen] = useState()
    const handleClick = () => {
        console.log('click')
        if (isVisible === false) {
            setStyles({
                height: innerHeight,
                visibility: "visible",
                transform: "none"
            })
            setIsVisible(true)
        }
        else {
            setStyles({})
            setIsVisible(false)
        }
    }
    const handleCLickLink = () => {
        if (window.innerWidth <= 600) {
            setIsVisible(false)
            setStyles({})
            setOpen(false)
        }
    }

    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.inner}>
                    <Logo></Logo>
                    <nav style={styles} className={s.nav}>
                        <ul className={s.navItems}>
                            <li className={s.navItem}> <Link onClick={handleCLickLink} className={s.navLink} to='/about'>О команде</Link> </li>
                            <li className={s.navItem}> <a onClick={handleCLickLink} className={s.navLink} href="#"> Услуги</a> </li>
                            <li className={s.navItem}> <Link to='/bonuses' onClick={handleCLickLink} className={s.navLink}>Акции</Link> </li>
                            <li className={s.navItem}> <a onClick={handleCLickLink} className={`${s.navLink} ${s.navLinkHidden}`} href="#"><img style={{ width: '45px' }} src={vk_icon} alt="" /></a> </li>
                        </ul>
                    </nav>
                    <a className={s.navVk} href="#"><img style={{ width: '45px' }} src={vk_icon} alt="" /></a>
                    <div onClick={handleClick} className={s.navButton}><Hamburger toggled={isOpen} toggle={setOpen} ></Hamburger></div>
                </div>
            </div>
        </header>
    )
}

export default Header