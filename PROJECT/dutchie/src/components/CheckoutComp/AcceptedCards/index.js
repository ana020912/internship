import Image from 'next/image'
import styles from './AceeptedCards.module.css'

export default function AcceptedCards() {
  return (
    <div className={styles.acceptedCards}>
        <p>We accept these cards:</p>
        <div className={styles.cards}>
            <Image
                src='/card-provider.svg'
                width={32}
                height={21}
            />
            <Image
                src='/card-provider.svg'
                width={32}
                height={21}
            />
            <Image
                src='/card-provider.svg'
                width={32}
                height={21}
            />
        </div>
    </div>
  )
}
