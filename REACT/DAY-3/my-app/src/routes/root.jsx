import { Link } from "react-router-dom";

function Root () {
    return (
        <>
            <h1>Welcome to Dashboard</h1>
            <ul>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/todos">Todos</Link></li>
                
            </ul>
        </>
    )
}

export default Root;