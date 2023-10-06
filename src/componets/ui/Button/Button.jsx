import React from 'react'
import s from './Button.module.scss'
const Button = (props) => {
    return (
        <button style={props.styles} className={s.button}>{props.buttonText}</button>
    )
}

export default Button