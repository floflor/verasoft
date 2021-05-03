import * as React from 'react';
import { State } from '../../reducers/index';
import { useSelector } from 'react-redux';
import { Card } from './cards';
import Styles from './orderCards.module.css';


export const OrderCards = () => {

    const orders = useSelector((state: State) => state.orderState.info);
    const btnActive = useSelector((state: State) => state.btnOrder.orderToggle)


    const displayOrders = (type: string) => {
        if (type === 'ordersAAA' && orders.orders_AAA?.sent?.length > 0) {
            return (
                orders.orders_AAA?.sent?.map(c =>
                    <Card
                        date={c.sent_dt}
                        time={c.sent_tm}
                        subject={c.subject}
                        type={c.type}
                        id={c.order_id}
                    />
                )
            )
        }

        else if (type === 'ordersAA' || type === 'ordersA' || type === 'ordersB' || type === 'ordersC') {
            return (
                <div className={Styles.container}>
                    <span className={Styles.message}>No items</span>
                </div>
            )
        }
        else {
            return (
                <div className={Styles.container}>
                    <span className={Styles.message}>No items</span>
                </div>
            )
        }
    }

    return (
        <>
            {displayOrders(btnActive)}
        </>
    )
}