import * as React from 'react';
import Styles from './dashboard.module.css';
import user from '../../assets/user.svg';
import userColor from '../../assets/userColor.svg';
import smartphone from '../../assets/smartphone.svg';
import office from '../../assets/office-building.svg';
import home from '../../assets/home.svg';
import at from '../../assets/at.svg';

import { useSelector } from 'react-redux';
import { State } from '../../reducers/index';


export const Dashboard = () => {
    const userData = useSelector((state: State) => state.userInfo.info)
   
    
    const getAge = (birthday: any) => {
        let today: any = new Date();
        let birthDate: any = new Date(birthday);
        let age: any = today.getFullYear() - birthDate.getFullYear();
        let m: any = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    
    // date
    const wordDate = new Date(userData.carrier_status.since)
    const year: string = wordDate.toString().slice(11,15)
    const rest: string = wordDate.toString().slice(4, 10);
    const fullDate: string = `SINCE ${rest.toUpperCase()}, ${year}`


    return (
        <div className={Styles.container}>
            <div className={Styles.user}>
                <div className={Styles.imgContainer}>
                    <img src={user} alt="User Icon" />
                </div>
                <span>{userData.gender? `${userData.gender?.toUpperCase()} - ${getAge(userData.birth_date)}`: ''}</span>
            </div>
            <div className={Styles.userInfo}>
                <div>
                    <img src={userColor} alt="User Icon" />
                    <span>{userData.id}</span>
                </div>
                <div>
                    <img src={smartphone} alt="Mobile Icon" />
                    <span>{userData.mobile_phone}</span>
                </div>
                <div>
                    <img src={office} alt="Office Icon" />
                    <span>{userData.work_phone}</span>
                </div>
                <div>
                    <img src={home} alt="Home Icon" />
                    <span>{userData.home_phone}</span>
                </div>
                <div>
                    <img src={at} alt="At Icon" />
                    <span>{userData.email}</span>
                </div>
            </div>
            <div className={Styles.activity}>
                <p className={Styles.title}>90-DAY COMMUNICATION ACTIVITY</p>
                <div className={Styles.row}>
                    <div className={Styles.card}>
                        <span>{userData.activity?.sms}</span>
                        <p>SMS</p>
                    </div>
                    <div className={Styles.card}>
                        <span>{userData.activity?.email}</span>
                        <p>EMAIL</p>
                    </div>
                    <div className={Styles.card2}>
                        <span>{userData.activity?.orders}</span>
                        <p>ORDERS</p>
                    </div>
                </div>
            </div>
            <div className={Styles.status}>
                <p className={Styles.title}>SMS CARRIER STATUS</p>
                <span>{userData.carrier_status?.status}</span>
                <p className={Styles.since}>{fullDate}</p>
            </div>
        </div>
    )
}