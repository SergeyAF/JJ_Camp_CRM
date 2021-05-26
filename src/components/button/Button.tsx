import React from "react";
import cn from "classnames";
import s from './Button.module.scss'

interface IButton {
  size?: 'wideBtn' | 'smallBtn' | 'roundAdd'
  type?: 'button' | 'submit'
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({children, onClick = undefined, size, type = 'button'}) => {
  return (
    <button type={type} className={cn(s.root, size?s[size]:null)} onClick={onClick}>{size === 'roundAdd' ? '+' : children}</button>
  )
}

export default Button