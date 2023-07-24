import styles from './Criteria.module.css'
import Criterion from './Criterion'

export default function Criteria({criteriaStyle}) {
    return (
        <div className={criteriaStyle}>
            <Criterion text='A-Z'/>
            <Criterion text='Z-A'/>
            <Criterion text='Price'/>
            <Criterion text='Relevance'/>
        </div>
    )
}