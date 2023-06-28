import Link from "next/link"

export default function Dashboard({params}) {
    return (
        <>
            <h1>Welcome to Dashboard</h1>
            <h3><Link href='/'>Back</Link></h3>
            <div>
                <p><Link href='/dashboard/users'>Users</Link></p>
                <p><Link href='/dashboard/posts/[slug]'>Posts</Link></p>
                <p><Link href='/dashboard/todos/[slug]?slug=1'>Todos</Link></p>

            </div>

        </>

    )
}