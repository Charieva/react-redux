import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Friends = (props) => {
  return (
    <div className={s.friends + ' ' + s.active}> {/* указала активно нажатую ссылку*/}
    <div className={s.img}>
      <img src="https://i.insider.com/5cb8b133b8342c1b45130629?width=700" />
    </div>
    <NavLink to={"/friends/" + props.id} activeClassName={s.activeLink}>{props.name}{/* указала инф, которая будет вставляться*/}</NavLink>
  </div>
  )
}
const Navbar = () => {
	return    (
        <nav className={s.nav}>
          <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
          </div> 
          <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
          </div> 
          <div className={s.item}>
            <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
            <Friends name="Ira" id="1"/>
            <Friends name="Tanya" id="2"/>
            <Friends name="Inna" id="3"/>
          </div>
        </nav>
  )
}

export default Navbar;