import * as React from 'react';
import Star from '../../assets/star.svg';
import Styles from './header.module.css';
import { useSelector } from 'react-redux';
import {State} from '../../reducers/index';

export const Header = () => {
    const userData = useSelector((state: State ) => state.userInfo.info)
    
    return (
        <div className={Styles.container}>
            <div className={Styles.user}>
                <img src={Star} alt="Star icon"/>
                <span>{`${userData.first_name} ${userData.last_name}`}</span>
            </div>
            <button className={Styles.btn}>New Order</button>
        </div>
    )
}