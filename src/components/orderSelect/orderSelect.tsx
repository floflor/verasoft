import * as React from 'react';
import Styles from './orderSelect.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../reducers/index';
import { changeBtnToggle } from '../../actions';



export const OrderSelect = () => {

    const dispatch = useDispatch();
    const btnActive = useSelector((state: State)=> state.btnOrder.orderToggle)

    
    return (
        <div className={Styles.container}>
            <div className={Styles.btnContainer}>
                <button onClick={()=> dispatch(changeBtnToggle('ordersA'))} className={btnActive === 'ordersA'? Styles.btnActive : Styles.btn}>ORDERS A</button>
                <button onClick={()=> dispatch(changeBtnToggle('ordersAA'))} className={btnActive === 'ordersAA'? Styles.btnActive : Styles.btn}>ORDERS AA</button>
                <button onClick={()=> dispatch(changeBtnToggle('ordersAAA'))} className={btnActive === 'ordersAAA'? Styles.btnActive : Styles.btn}>ORDERS AAA</button>
                <button onClick={()=> dispatch(changeBtnToggle('ordersB'))} className={btnActive === 'ordersB'? Styles.btnActive : Styles.btn}>ORDERS B</button>
                <button onClick={()=> dispatch(changeBtnToggle('ordersC'))} className={btnActive === 'ordersC'? Styles.btnActive : Styles.btn}>ORDERS C</button>
            </div>
        </div>
    )
}