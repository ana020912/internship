import Link from "next/link"

export default function Dashboard({params}) {
    return (
        <section>
            <h1>Welcome to Dashboard</h1>
            <h3><Link href='/'>Back</Link></h3>
            <div>
                <p><Link href='/dashboard/users'>Users</Link></p>
                <p><Link href='/dashboard/posts'>Posts</Link></p>
                <p><Link href='/dashboard/todos'>Todos</Link></p>

            </div>

        </section>

    )
}