import Button from '@/components/Button';
import styles from './product-card-small.module.css';
// import ButtonAdd from '@/components/buttons/button-add';
import Image from 'next/image';

export default function ProductCardSmall({price}) {
    return (
        <div className={styles.wrapper_card}>
            <div className={styles.wrapper_image}>
                <Image src="/img-icon.svg" alt="image" width={56} height={56} />
            </div>
            <div className={styles.card_bottom}>
                <span className={styles.price}>{price}</span>
                <Button btncolor="dark" />
            </div>
        </div>
    )
}