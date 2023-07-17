import Link from "next/link";
import getStaticProps from '../api/posts'


export default function Posts ({postsData}) {
    const data = getStaticProps;
    console.log('Data ' + data);
    return (
        <>
            <p><Link href='/dashboard'>Back</Link></p>
            <h1>Welcome to posts</h1>
            <ul>
                {
                    data.map(elem => (
                        <li key={elem.id}><Link href={`/posts/${elem.id}`}>{elem.title}</Link></li>
                    ))
                }
            </ul>
        </>
    )
}