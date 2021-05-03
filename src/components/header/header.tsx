import * as React from 'react';
import Star from '../../assets/star.svg';
import Styles from './header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {State} from '../../reducers/index';
import { showModal } from '../../actions';

export const Header = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state: State ) => state.userInfo.info)
    const modal = useSelector((state: State) => state.btnOrder.newOrder);
    
    const handleClick = (e : React.MouseEvent) =>{
      if(modal === false){
          dispatch(showModal(true));
      }
    }
    return (
        <div className={Styles.container}>
            <div className={Styles.user}>
                <img src={Star} alt="Star icon"/>
                <span>{userData.first_name ? `${userData.first_name} ${userData.last_name}`: ''}</span>
            </div>
            <button className={Styles.btn} onClick={(e)=>handleClick(e)}>New Order</button>
        </div>
    )
}