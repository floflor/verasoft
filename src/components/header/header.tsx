import * as React from 'react';
import Star from '../../assets/star.svg';
import Styles from './header.module.css';

export const Header = () => {

    return (
        <div className={Styles.container}>
            <div className={Styles.user}>
                <img src={Star} alt="Star icon"/>
                <span>Nombre</span>
            </div>
            <button className={Styles.btn}>New Order</button>
        </div>
    )
}