import { useState } from 'react'
import styles from './SortBy.module.css'
import Criteria from '../Criteria';

export default function SortBy() {
    const [btnState, setBtnState] = useState(true);

    function changeBtn() {
        setBtnState(!btnState);
    }

    return (
        <section className={styles.sortBy}>
            <div onClick={changeBtn} className={`${styles.sortByText}`}>
                Sort by
            </div>
            <div>
                {btnState && <Criteria criteriaStyle={styles.criteriaStyle} />}
            </div>
        </section>


    )
}