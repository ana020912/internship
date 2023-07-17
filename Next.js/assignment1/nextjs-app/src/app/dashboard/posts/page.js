import Link from "next/link"

export default function Post ({params}) {
    return (
        <>
            <h1>Welcome to posts</h1>
            <p><Link href={`/dashboards/posts/${params.id}}`}>Children</Link></p>
            
            <h3><Link href='/'>Back</Link></h3>

        </>
    )
}