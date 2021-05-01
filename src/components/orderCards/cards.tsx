import * as React from 'react';
import Styles from './cards.module.css'

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
    const day: string = wordDate.toString().slice(0, 3)
    const rest: string = wordDate.toString().slice(4, 10);
    const fullDate: string = `${day}, ${rest}`

    //time
    const correctTime: string = wordDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })



    return (
        <tr className={Styles.row}>
            <td>
                <p className={Styles.text1}>{fullDate}</p>
                <p className={Styles.text2}>{correctTime}</p>
            </td>
            <td>
                <p className={Styles.text1}>{subject?.title}</p>
                <p className={Styles.text2}>{subject?.email}</p>
            </td>
            <td>
                <p className={Styles.text2}>{type}</p>
            </td>
            <td>
                <p className={Styles.text2}>{id}</p>
            </td>
            <td className={Styles.btnCont}>
                <button>RESEND</button>
            </td>
        </tr>
    )
}