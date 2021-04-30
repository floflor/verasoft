import * as React from 'react';
import Styles from './ordersDashboard.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { State } from '../../reducers/index';
import { changeSentOrErrorsBtn } from '../../actions';
import {OrderCards} from '../orderCards/orderCards';

export const OrdersDashboard = () => {
    const dispatch = useDispatch();
    const sentOrErrors = useSelector((state: State) => state.btnOrder.sentOrErrors);



    return (
        <div className={Styles.container}>
            <div className={Styles.nav}>
                <div className={Styles.align}>
                <button onClick={()=>{dispatch(changeSentOrErrorsBtn('sent'))}} className={sentOrErrors === 'sent'? Styles.btnActive : Styles.btn}>SENT</button>
                <button onClick={()=>{dispatch(changeSentOrErrorsBtn('errors'))}} className={sentOrErrors === 'errors'? Styles.btnActive : Styles.btn}>ERRORS</button>
                </div>
                <span>RECENT ORDERS</span>
            </div>
            <div className={Styles.ordersContainer}>
                <div className={Styles.info}>
                    <span className={Styles.date}>DATE & TIME</span>
                    <span className={Styles.subject}>SUBJECT</span>
                    <span className={Styles.communicationType}>COMMUNICATION TYPE</span>
                    <span className={Styles.orderId}>ORDER #</span>
                </div>
            <OrderCards/>
            </div>
        </div>
    )
}