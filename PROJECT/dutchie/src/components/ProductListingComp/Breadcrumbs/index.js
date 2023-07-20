import { useRouter } from 'next/router'
import styles from './Breadcrumbs.module.css'

export default function Breadcrumbs() {
    const router = useRouter();
    console.log("router", router);
    const paths = router.pathname.split('/')
        .filter(crumb => crumb !== '');
    return (
        <>
            {
                paths.map(
                    crumb => (
                        <span className={styles.crumb}>{crumb}</span>
                    )
                )
            }


        </>

    )
}