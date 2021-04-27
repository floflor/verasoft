import * as React from 'react';
import { Header } from '../components/header/header';
import { Dashboard } from '../components/dashboard/dashboard';
import Styles from './main.module.css';
import { useDispatch } from 'react-redux';
import {getUserInfoStartAction} from '../actions';

export const Main = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getUserInfoStartAction())
    })
    return (
        <div className={Styles.container}>
            <Header />
            <Dashboard />
        </div>
    )
}
