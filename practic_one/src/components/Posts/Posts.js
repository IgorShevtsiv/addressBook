import {useEffect, useState} from "react";
import Post from "../Post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value =>
                setPosts([...value])
            )
    }, [])
    return (
        <div>
            {
                posts.map(value => <Post
                    key={value.id}
                    item={value}
                />)
            }
        </div>
    )
}