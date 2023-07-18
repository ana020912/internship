import styles from './CategoryGrid.module.css'
import LargeCategory from './LargeCategory'
import SmallCategory from './SmallCategory'

export default function CategoryGrid() {
    return (
        <section>
            <div className='container'>
                <div className={styles.cardsLayout}>
                    <LargeCategory info='Lorem ipsum dolor sit amet, consectetur' />
                    <div className={styles.smallCardsLayout}>
                        <SmallCategory info='Lorem ipsum dolor sit amet, consectetur' btnStyle='dark' />
                        <SmallCategory info='Lorem ipsum dolor sit amet, consectetur' btnStyle='light' />
                        <SmallCategory info='Lorem ipsum dolor sit amet, consectetur' btnStyle='dark' />
                        <SmallCategory info='Lorem ipsum dolor sit amet, consectetur' btnStyle='light' />
                    </div>
                </div>
            </div>
        </section>
    )
}