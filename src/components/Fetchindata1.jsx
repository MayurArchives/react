import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Fetchindata1() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts') // Correct API URL
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>) // Correct variable name for each post
                }
            </ul>
        </div>
    )
}

export default Fetchindata1
