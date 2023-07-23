import styles from './AppliedFilters.module.css'
import FilterOption from '../FiltersList/AvailableOptions/FilterOption'

export default function AppliedFilters() {
    return (
        <section>
            <p className={styles.title}>Applied filters:</p>
            <div>
                <FilterOption 
                    name='🥖 Option 1'
                    imgposition='right'
                    imgsrc='/tick-dark.svg'
                />
                <FilterOption 
                    name='🥖 Option 1'
                    imgposition='right'
                    imgsrc='/tick-dark.svg'
                />
                <FilterOption 
                    name='🥖 Option 1'
                    imgposition='right'
                    imgsrc='/tick-dark.svg'
                />
            </div>
        </section>
    )
}