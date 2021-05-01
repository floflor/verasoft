import * as React from 'react';
import Styles from './ordersDashboard.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../reducers/index';
import { changeSentOrErrorsBtn } from '../../actions';
import { OrderCards } from '../orderCards/orderCards';

export const OrdersDashboard = () => {
    const dispatch = useDispatch();
    const sentOrErrors = useSelector((state: State) => state.btnOrder.sentOrErrors);



    return (
        <div className={Styles.container}>
            <div className={Styles.nav}>
                <div className={Styles.align}>
                    <button onClick={() => { dispatch(changeSentOrErrorsBtn('sent')) }} className={sentOrErrors === 'sent' ? Styles.btnActive : Styles.btn}>SENT</button>
                    <button onClick={() => { dispatch(changeSentOrErrorsBtn('errors')) }} className={sentOrErrors === 'errors' ? Styles.btnActive : Styles.btn}>ERRORS</button>
                </div>
                <span>RECENT ORDERS</span>
            </div>
            {sentOrErrors === 'sent' &&
                <table className={Styles.table}>
                    <tr className={Styles.row}>
                        <th>DATA & TIME</th>
                        <th>SUBJECT</th>
                        <th>COMMUNICATION TYPE</th>
                        <th>ORDER #</th>
                        <th></th>
                    </tr>
                    <OrderCards />
                </table>
            }
        </div>

    )
}