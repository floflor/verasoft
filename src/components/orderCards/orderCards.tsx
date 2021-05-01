import * as React from 'react';
import { State } from '../../reducers/index';
import { useSelector } from 'react-redux';
import { Card } from './cards';


export const OrderCards = () => {

    const orders = useSelector((state: State) => state.orderState.info);
    const btnActive = useSelector((state: State) => state.btnOrder.orderToggle)


    const displayOrders = (type: string) => {
        if (type === 'ordersAAA') {
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
    }

    return (
        <>
            {displayOrders(btnActive)}
        </>
    )
}