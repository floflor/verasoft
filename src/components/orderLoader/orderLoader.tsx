import * as React from 'react';
import Styles from './orderLoader.module.css';

export const OrderLoader = () => {
    return (
        <div className={Styles.overlay}>
            <div className={Styles.spinner}>
                <div className={Styles.dot1}></div>
                <div className={Styles.dot2}></div>
                <div className={Styles.dot3}></div>
            </div>
        </div>
    )
}