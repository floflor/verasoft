import * as React from 'react';
import { Header } from '../components/header/header';
import { Dashboard } from '../components/dashboard/dashboard';
import { OrderSelect } from '../components/orderSelect/orderSelect';
import Styles from './main.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {State} from '../reducers/index';
import { getUserInfoStartAction } from '../actions';
import { getOrdersStartAction} from '../actions';
import { OrdersDashboard } from '../components/ordersDashboard/ordersDashboard';
import { Modal } from '../components/modalNewOrder/modal';

export const Main = () => {
    const dispatch = useDispatch()
    const modal = useSelector((state: State)=> state.btnOrder.newOrder);

    React.useEffect(() => {
        dispatch(getUserInfoStartAction())
        dispatch(getOrdersStartAction())
    })
   
    return (
        <div className={Styles.container}>
            {modal ? <Modal/> : null}
            <div className={modal ? Styles.blur : Styles.main}>
            <Header />
            <Dashboard />
            <OrderSelect/>
            <OrdersDashboard/>
            </div>
        </div>
    )
}
