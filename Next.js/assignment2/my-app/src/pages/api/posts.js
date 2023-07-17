export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10');
    const data = await res.json();
    return {
        props: {postsData: data}
    };
}