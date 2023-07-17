import Image from 'next/image'
import styles from './ProfilePic.module.css'
import Link from 'next/link'

export default function ProfilePic ({image}) {
    return (
        <Link href='#' className={styles.profilepic}>
            <Image 
                src={image}
                width={16}
                height={16}
                alt='profile-pic'
            />
        </Link>
    )
}