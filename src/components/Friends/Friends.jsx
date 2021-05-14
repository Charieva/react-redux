import React from 'react';
import s from './Friends.module.css';

const Friends = () => {
    return (
        <div className={s.friends}>
            <ul>
                <li>Ira</li>
                <li>Tanya</li>
                <li>Inna</li>
            </ul>
        </div>
    )
}

export default Friends;