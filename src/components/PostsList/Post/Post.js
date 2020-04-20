import React from 'react'

export default class Post extends React.Component {
    render() {
        return (
            <li>
                <span className='post-title-span'>{this.props.post.title}</span>
                <span className='post-description-span'>{this.props.post.description}</span>
                <span className='post-type-span'>{this.props.post.type}</span>
                <span className='post-comments-span'>{this.props.post.comments}</span>
                <span className='post-user_name-span'>{this.props.post.user_name}</span>
                <span className='post-date-span'>{this.props.post.date_modified}</span>
            </li>
        )
    }
}