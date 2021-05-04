import * as React from 'react';
import { State } from '../../reducers/index';
import { useSelector } from 'react-redux';
import { Card } from './cards';
import Styles from './orderCards.module.css';

type AppProps = {
    sort: string,
    type: string
}
type arrayObjects = {
    id: number,
    order_id: number,
    sent_dt: string,
    sent_tm: string,
    subject: {
        title: string,
        email: string,
    },
    type: string
}
export const OrderCards = ({ sort, type }: AppProps) => {

    React.useEffect(() => { }, [sort, type])

    const orders = useSelector((state: State) => state.orderState.info);
    const btnActive = useSelector((state: State) => state.btnOrder.orderToggle)

    //HANDLE SORT SCENARIOS
    let sorted: Array<arrayObjects> = [];
    if (sort === 'asc' && type === 'communication') {
        sorted = orders.orders_AAA.sent.sort((a, b) => {
            return a.type.localeCompare(b.type)
        })

    }
    else if (sort === 'desc' && type === 'communication') {
        sorted = orders.orders_AAA.sent.sort((a, b) => {
            return b.type.localeCompare(a.type)
        })

    }
    else if (sort === 'asc' && type === 'orderId') {
        sorted = orders.orders_AAA.sent.sort((a, b) => {
            return a.id.toString().localeCompare(b.id.toString())
        })

    }
    else if (sort === 'desc' && type === 'orderId') {
        sorted = orders.orders_AAA.sent.sort((a, b) => {
            return b.id.toString().localeCompare(a.id.toString())
        })

    }
    else if (sort === 'asc' && type === 'subject') {
        sorted = orders.orders_AAA.sent.sort((a, b) => {
            return a.subject.title.localeCompare(b.subject.title)
        })

    }
    else if (sort === 'desc' && type === 'subject') {
        sorted = orders.orders_AAA.sent.sort((a, b) => {
            return b.subject.title.localeCompare(a.subject.title)
        })

    }

    else if (sort === 'asc' && type === 'date'){
        sorted = orders.orders_AAA.sent.sort((a,b) =>{
            let date1 = new Date(`${a.sent_dt}T${a.sent_tm}`);
            let date2 = new Date(`${b.sent_dt}T${b.sent_tm}`);
            return date1.valueOf() - date2.valueOf();

        })
    }
    else if (sort === 'desc' && type === 'date'){
        sorted = orders.orders_AAA.sent.sort((a,b) =>{
            let date1 = new Date(`${a.sent_dt}T${a.sent_tm}`);
            let date2 = new Date(`${b.sent_dt}T${b.sent_tm}`);
            return date2.valueOf() - date1.valueOf();
            
        })
    }
    const displayOrders = (btnA: string) => {
        if (btnA === 'ordersAAA' && orders.orders_AAA?.sent?.length > 0 && !type) {
            return (
                orders.orders_AAA?.sent?.map(c =>
                    <Card
                        key={c.id}
                        date={c.sent_dt}
                        time={c.sent_tm}
                        subject={c.subject}
                        type={c.type}
                        id={c.order_id}
                    />
                )
            )
        }
        else if (btnA === 'ordersAAA' && sorted.length > 0 && type) {
            return (
                sorted.map(c =>
                    <Card
                        key={c.id}
                        date={c.sent_dt}
                        time={c.sent_tm}
                        subject={c.subject}
                        type={c.type}
                        id={c.order_id}
                    />
                )
            )
        }

        else if (btnA === 'ordersAA' || btnA === 'ordersA' || btnA === 'ordersB' || btnA === 'ordersC') {
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