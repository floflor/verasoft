import * as React from 'react';
import { Header } from '../components/header/header';
import { Dashboard } from '../components/dashboard/dashboard';
import { OrderSelect } from '../components/orderSelect/orderSelect';
import Styles from './main.module.css';
import { useDispatch } from 'react-redux';
import { getUserInfoStartAction } from '../actions';
import { getOrdersStartAction} from '../actions';
import { OrdersDashboard } from '../components/ordersDashboard/ordersDashboard';

export const Main = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getUserInfoStartAction())
        dispatch(getOrdersStartAction())
    })
    return (
        <div className={Styles.container}>
            <Header />
            <Dashboard />
            <OrderSelect/>
            <OrdersDashboard/>
        </div>
    )
}
