import Link from "next/link"

export default function User () {
    return (
        <>
            <h1>Welcome to users</h1>
            <h3><Link href='/'>Back</Link></h3>
        </>
    )
}