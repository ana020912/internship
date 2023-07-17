import styles from './Ads.module.css'
export default function Ads({part1, part2}) {
    return (
        <p className={styles.ads}><strong>{part1}</strong> {part2}</p>
    )
}