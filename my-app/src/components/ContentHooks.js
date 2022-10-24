import React, { useState, useEffect } from 'react'
import css from "./css/Content.module.css"
import { savedPosts } from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'

function ContentHooks() {
    const [isLoaded, setisLoaded] = useState(false)
    const [fetchedPosts, setfetchedPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setisLoaded(isLoaded => true)
            setfetchedPosts(savedPosts)
        }, 2000);
    }, [])

    const handleChange = (e) => {
        const name = e.target.value.toLowerCase()
        console.log(name)
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        setfetchedPosts(filteredPosts)
    }
    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor='searchInput'>Search:</label>
                    <input onChange={(e) => handleChange(e)} type="search" id='searchInput' placeholder='By author' />
                    <h4>posts found: {fetchedPosts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>

                {isLoaded ? <PostItem item={fetchedPosts} /> : <Loader />}

            </div>
        </div>
    )
}

export default ContentHooks