import styles from './SocialMedia.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function SocialMedia({image}) {
    return (
        <Link href='#' className={styles.media}>
        <Image 
            src={image}
            width={16}
            height={16}
            alt='profile-pic'
        />
    </Link>
    )
}