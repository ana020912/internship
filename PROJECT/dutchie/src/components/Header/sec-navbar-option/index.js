import styles from './NavbarOption.module.css'

export default function NavbarOption ({optionName, Class, click}) {
    return (
        <a onClick={click} className={Class}>{optionName}</a>
    )
}