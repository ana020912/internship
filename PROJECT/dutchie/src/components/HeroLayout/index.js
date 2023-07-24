import styles from './HeroLayout.module.css'

export default function HeroLayout({children, bgPoz}) {
    return (
        <section className={`${styles.heroLayout} ${bgPoz}`}>
            {children}
        </section>

    )
}