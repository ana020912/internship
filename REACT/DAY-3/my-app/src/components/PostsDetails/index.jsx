import { useLoaderData } from "react-router-dom";

function PostDetails () {

    const details = useLoaderData();

    return (
        <>
           <p>{details.body}</p>
        </>
    )
}

export default PostDetails;