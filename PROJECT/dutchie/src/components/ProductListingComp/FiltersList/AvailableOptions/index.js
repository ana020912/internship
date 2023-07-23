import Button from '@/components/Button'
import styles from './AvailableOptions.module.css'

export default function AvailableOptions({ name, displayStyle }) {
    return (
        <div className={`${styles.availableOptions} ${displayStyle}`}>
            <Button
                className={`option btnDark`}
                text={name}
            />
            <Button
                className={`option btnDark`}
                text={name}
            />
            <Button
                className={`option btnDark`}
                text={name}
            />
            <Button
                className={`option btnDark`}
                text={name}
            />
            <Button
                className={`option btnDark`}
                text={name}
            />
        </div>
    )
}