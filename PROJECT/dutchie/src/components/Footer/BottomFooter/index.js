import Logo from '@/components/logo'
import styles from './BottomFooter.module.css'
import Rights from '../Rights'

export default function BottomFooter() {
    return(
        <section className={styles.bottomfooter}>
            <div className='container'>
                <div className={styles.bottomfooter__container}>
                    <Logo source='/logo-white.svg'/>
                    <Rights rights={`Bionic Wireframe Kit 2020\xAE All rights reserved`}/>
                </div>
            </div>        
        </section>
    )
}