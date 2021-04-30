import * as React from 'react';
import Styles from './cards.module.css';

type AppProps = {
    date?: string,
    time?: string,
    subject?: {
        title?: string,
        email?: string,
    }
    type?: string,
    id?: number
}

export const Card = ({ date, time, subject, type, id }: AppProps) => {

    // date
    const wordDate = new Date(`${date}T${time}`)
    const day : string = wordDate.toString().slice(0, 3)
    const rest : string = wordDate.toString().slice(4, 10);
    const fullDate : string = `${day}, ${rest}`

    //time
    const correctTime : string = wordDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    


    return (
        <div className={Styles.container}>
            <div className={Styles.date}>
                <span className={Styles.text1}>{fullDate}</span>
                <span className={Styles.text2}>{correctTime}</span>
            </div>
            <div className={Styles.titleEmail}>
                <span className={Styles.text1}>{subject?.title}</span>
                <span className={Styles.text2}>{subject?.email}</span>
            </div>
            <div className={Styles.type}>
                <span>{type}</span>
            </div>
            <div className={Styles.id}>
                <span>{id}</span>
            </div>
            <button>RESEND</button>
        </div>
    )
}