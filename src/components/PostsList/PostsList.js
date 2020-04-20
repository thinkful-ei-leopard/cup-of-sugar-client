import React from 'react'
import Post from './Post/Post'

export default class PostsList extends React.Component {
    static contextType = PostsContext
    render() {
        return (
            <ul>
                { PostsContext.posts.map(post => <Post post={post}/>) }
            </ul>
        )
    }
}