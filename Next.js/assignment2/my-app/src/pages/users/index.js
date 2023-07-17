import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10');
    const data = await res.json();
    return {
        props: {postsData: data}
    };
}

export default function Posts ({postsData}) {
    return (
        <>
            <p><Link href='/dashboard'>Back</Link></p>
            <h1>Welcome to users</h1>
            <ul>
                {
                    postsData.map(elem => (
                        <li key={elem.id}><Link href={`/users/${elem.id}`}>{elem.title}</Link></li>
                    ))
                }
            </ul>
        </>
    )
}