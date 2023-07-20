import styles from './Input.module.css'

export default function Input({placeholder, inputType, className, value}) {
    return (
        <input type={inputType} placeholder={placeholder} 
        className={`${styles.inputBorder} ${className}`} value={value}/>
    )
}