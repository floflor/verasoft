import * as React from 'react';
import Styles from './dashboard.module.css';
import user from '../../assets/user.svg';
import userColor from '../../assets/userColor.svg';
import smartphone from '../../assets/smartphone.svg';
import office from '../../assets/office-building.svg';
import home from '../../assets/home.svg';
import at from '../../assets/at.svg';


export const Dashboard = () => {
    

    return (
        <div className={Styles.container}>
           <div className={Styles.user}>
               <div className={Styles.imgContainer}>
               <img src={user} alt="User Icon"/>
               </div>
               <span>SEXO - 33</span>
           </div>
           <div className={Styles.userInfo}>
               <div>
                   <img src={userColor} alt="User Icon"/>
                   <span>#12345678</span>
               </div>
               <div>
                   <img src={smartphone} alt="Mobile Icon"/>
                   <span>248-555-1000</span>
               </div>
               <div>
                   <img src={office} alt="Office Icon"/>
                   <span>248-555-1000 ext 1023</span>
               </div>
               <div>
                   <img src={home} alt="Home Icon"/>
                   <span>248-555-1000</span>
               </div>
               <div>
                   <img src={at} alt="At Icon"/>
                   <span>joe.smith@testemail.com</span>
               </div>
           </div>
           <div className={Styles.activity}>
               <p className={Styles.title}>90-DAY COMMUNICATION ACTIVITY</p>
               <div className={Styles.row}>
                   <div className={Styles.card}>
                       <span>6</span>
                       <p>SMS</p>
                   </div>
                   <div className={Styles.card}>
                       <span>4</span>
                       <p>EMAIL</p>
                   </div>
                   <div className={Styles.card2}>
                       <span>2</span>
                       <p>ORDERS</p>
                   </div>
               </div>
           </div>
           <div className={Styles.status}>
               <p className={Styles.title}>SMS CARRIER STATUS</p>
               <span>IN</span>
               <p className={Styles.since}>SINCE JUN 3, 2016</p>
           </div>
        </div>
    )
}