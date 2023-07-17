import styles from './InputBar.module.css'

export default function Searchbar({ inputBar, inputType, inputHolder}) {
    return (
        <input className={inputBar} type={inputType} placeholder={inputHolder}></input>
    )
}