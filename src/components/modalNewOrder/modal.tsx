import Styles from './modal.module.css';
import Close from '../../assets/close.svg';
import { showModal } from '../../actions';
import { useDispatch } from 'react-redux';
type AppProps = {
    main: boolean
}
export const Modal = ({ main }: AppProps) => {
    const dispatch = useDispatch();
    if (main) {
        return (
            <div className={Styles.container}>

                <div className={Styles.loadingCont}>
                    <div className={Styles.spinner}></div>
                    <span>Loading</span>
                </div>
            </div>
        )
    }
    else return (

        <div className={Styles.container}>
            <button onClick={() => dispatch(showModal(false))} className={Styles.btn}>
                <img src={Close} alt='Close' />
            </button>
            <div className={Styles.loadingCont}>
                <div className={Styles.spinner}></div>
                <span>Processing</span>
            </div>
        </div>
    )
}