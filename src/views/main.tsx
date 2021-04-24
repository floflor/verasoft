import * as React from 'react';
import { Header } from '../components/header/header';
import { Dashboard } from '../components/dashboard/dashboard';
import Styles from './main.module.css';

export const Main = () => {

    return (
        <div className={Styles.container}>
            <Header/>
            <Dashboard/>
        </div>
    )
}
