import {useSelector} from "react-redux";
import {usePostsError, usePostsFetcher, usePostsSetLoading} from "../../redux";
import React, {useEffect} from "react";


const Posts = () => {
    const {isLoading, posts, error} = useSelector(({posts}) => posts);
    const postFetcher = usePostsFetcher()
    const postLoading = usePostsSetLoading()
    const postError = usePostsError()
    const fetchPosts = async () => {
        try {
            postLoading()
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const payload = await response.json()

            postFetcher(payload)
        } catch (e) {
            console.log(e, "kurva!")
            postError("Failed to fetch data");

        }
    }
    useEffect(() => {
        fetchPosts();
    }, [])
    if (error) {
        return <h1>{error}</h1>
    }
    if (isLoading) {
        return (
            <h1>Loading</h1>
        )

    }
    return (
        <div>
            {posts.map(post => (
                <p key={post.id}>
                    {post.title} = {post.body}
                </p>
            ))}
        </div>
    )
}
