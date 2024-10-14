import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Fetchindata1() {

    const [posts, setPosts] = useState([])
    useEffect(() => {


        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)

            })
            .catch(err => {
                console.log(err);

            })
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(posts => <li key={posts.id}>{posts.title}</li>)
                }

            </ul>

        </div>
    )
}

export default Fetchindata1
