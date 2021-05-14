import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <div className={s.item}>
            <img src='https://oper.ru/static/data/gallery/l1048753984.jpg' />
        </div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default DialogItem;