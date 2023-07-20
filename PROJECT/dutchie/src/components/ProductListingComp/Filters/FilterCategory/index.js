import Title from '@/components/Title'
import styles from './FilterCategory.module.css'
import { useState } from 'react'
import AvailableOptions from '../AvailableOptions';

export default function FilterCategory({ name }) {
    let arrow = styles.filterCategory__downarrow;
    const [arrowState, setArrowState] = useState(false);
    function changeArrowState() {
        setArrowState(!arrowState);
        if (arrowState === false) {
            arrow = styles.filterCategory__downarrow
        
        } else {
            arrow = styles.filterCategory__downarrow
          ;
        }
    }
    return (
        <div>
            <div onClick={changeArrowState} className={`${styles.filterCategory} ${arrowState ? styles.filterCategory__uparrow : styles.filterCategory__downarrow}`}>
                <Title level='h6'>{name}</Title>
            </div>
            <AvailableOptions displayStyle={arrowState? 'displayFlex': 'displayNone'} name='🥖 Selected (78)' />
        </div>

    )
}