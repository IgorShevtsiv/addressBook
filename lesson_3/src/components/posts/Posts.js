import {useEffect, useState} from 'react'
import Post from "../Post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [singlePost, setSinglePost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value])
            })
    }, [])

    const searchPost = (id) => {
        let findPosts = posts.find(value => value.id === id);
        console.log(findPosts)
        setSinglePost(findPosts);
    }
    return (
        <div className={'wrapper'}>
            <div className={'users-info'}>
                {
                    posts.map((value) => <Post
                        key={value.id}
                        id={value.id}
                        title={value.title}
                        searchPost={searchPost}
                    />)
                }
            </div>
            <div className={'single-user-info'}>
                {
                    singlePost ? <p> {singlePost.title}</p> : <h5>Post is not defined</h5>
                }
            </div>


        </div>
    )
}

