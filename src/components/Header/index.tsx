import React from "react";
import s from './Header.module.scss'
import cn from "classnames";
import logo from './assets/jj_logo.png'

interface Iprops{
    className?: string
}
const Header:React.FC<Iprops> = ({className}) => {
    return <div className={cn(className,s.content)}>
        <div><img src={logo} alt="JJ Camp Logo"/></div>
        <div>Auth...</div>
    </div>
}

export default Header