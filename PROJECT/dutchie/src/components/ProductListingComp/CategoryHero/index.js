import GridHalf from '@/components/GridHalf'
import styles from './CategoryHero.module.css'
import ItemsInfo from './ItemsInfo'
import Image from 'next/image'
import HeroLayout from '@/components/HeroLayout'

export default function CategoryHero() {
    return (
        <HeroLayout bgPoz={styles.bgPoz}>
            <div className='container'>
                <div className={styles.itemsInfoCard}>
                    <ItemsInfo title='Party items'
                        info='A party without these items is simply not a party.' />
                </div>
            </div>
        </HeroLayout>

    )
}