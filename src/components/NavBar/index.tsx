import React from "react";
import {NavLink} from "react-router-dom";
import s from './NavBar.module.scss';
import cn from "classnames";
import {GENERAL_MENU} from "../../routes";

type PropsType = {
  className: string
}

const NavBar: React.FC<PropsType> = (props) => {
  return <>
    <nav className={cn(s.root, props.className)}>
      <ul>
        {GENERAL_MENU.map(({title, link}) => (
          <li key={title}>
            <NavLink
              to={link}
              activeClassName={s.selected}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>

      {/*<ul>*/}
      {/*    <li><NavLink exact to="/" activeClassName={s.selected}>Home</NavLink></li>*/}
      {/*    <li><NavLink to="/kids" activeClassName={s.selected}>Дети</NavLink></li>*/}
      {/*    <li><NavLink to="/contracts" activeClassName={s.selected}>Путевки</NavLink></li>*/}
      {/*    <li><NavLink to="/404" activeClassName={s.selected}>Error Page</NavLink></li>*/}

      {/*</ul>*/}
    </nav>
  </>
}

export default NavBar