import * as React from 'react';
import Styles from './ordersDashboard.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../reducers/index';
import { changeSentOrErrorsBtn, getOrdersStartAction } from '../../actions';
import { OrderLoader } from '../orderLoader/orderLoader';
import { OrderCards } from '../orderCards/orderCards';

export const OrdersDashboard = () => {
    const dispatch = useDispatch();
    const sentOrErrors = useSelector((state: State) => state.btnOrder.sentOrErrors);
    const ordersActive = useSelector((state: State) => state.btnOrder.orderToggle);

    const [show, setShow] = React.useState(true)
    

    const handleClick = (btn: string, e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(getOrdersStartAction());
        dispatch(changeSentOrErrorsBtn(btn));
        if (btn === 'errors') {
            const timer = setTimeout(() => {
                setShow(false);
            }, 2000);

        }
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.nav}>
                <div className={Styles.align}>
                    <button onClick={(e) => handleClick('sent', e)} className={sentOrErrors === 'sent' ? Styles.btnActive : Styles.btn}>SENT</button>
                    <button onClick={(e) => handleClick('errors', e)} className={sentOrErrors === 'errors' ? Styles.btnActive : Styles.btn}>ERRORS</button>
                </div>
                <span>RECENT ORDERS</span>
            </div>
            {sentOrErrors === 'sent' && ordersActive === 'ordersAAA' &&
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
            {
                sentOrErrors === 'errors' && show === true &&
                <OrderLoader />
            }
            {sentOrErrors === 'errors' && show === false &&
                <div className={Styles.errorsContainer}>
                    <span className={Styles.message}>No items</span>
                </div>}
            {ordersActive !== 'ordersAAA' && sentOrErrors === 'sent' &&
            <OrderCards/>}
        </div>

    )
}