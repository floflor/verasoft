import * as React from 'react';
import { State } from '../../reducers/index';
import { useSelector } from 'react-redux';
import { Card } from './cards';
import CSS from 'csstype';

const divStyles : CSS.Properties = {
    width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
}

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
        <div style={divStyles}>
         {displayOrders(btnActive)}
        </div>
    )
}