import Image from 'next/image'
import styles from './BtnStyle.module.css'
export default function BtnStyle(props) {

    return (
        <button className={`${props.className} ${styles.btnStyle} ${props.bgColor}`}>
           {props.children}
        </button>
    )
}