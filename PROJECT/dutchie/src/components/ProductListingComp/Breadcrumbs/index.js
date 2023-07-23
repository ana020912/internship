import { useRouter } from 'next/router'
import styles from './Breadcrumbs.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function Breadcrumbs() {
    let currentCrumb;
    const router = useRouter();
    console.log("router", router);
    const paths = router.pathname.split('/')
        .filter(crumb => crumb !== '');
    return (
        <section className={styles.breadcrumbs}>
            <div className={styles.breadcrumbs__elements}>
                <Link href='/'>Home</Link>
                {
                    paths && paths.map(
                        crumb => (
                            currentCrumb = paths.indexOf(crumb) === paths.length - 1 ? styles.currentCrumb : '',
                            <Link href='' key={crumb} className={`${(styles.crumb)} ${currentCrumb}`}>
                                <Image
                                    src='/simple-right-arrow-dark.svg'
                                    width={14}
                                    height={14}
                                />
                                {crumb}
                            </Link>
                        )
                    )
                }
            </div>
        </section>

    )
}