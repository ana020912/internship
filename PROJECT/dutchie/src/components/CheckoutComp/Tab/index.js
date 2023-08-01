import styles from './Tab.module.css'

export default function Tab({text, handleClick, isActive}) {
  return (
    <div onClick={handleClick} className={ isActive? styles.activeTab : styles.tab}>
        {text}
    </div>
  )
}
