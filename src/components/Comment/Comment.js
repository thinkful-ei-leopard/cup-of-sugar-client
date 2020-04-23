import React from 'react';
import Button from '../Button/Button'

export default class Comment extends React.Component {
    render() {
        const comment = this.props.comment;
        return (
            <li className='commentLi'>
                <h3>{comment.name} ({comment.user_name})</h3>
                <p>{comment.content}</p>
                <Button type='delete'>Delete</ Button>
            </li>
        )
    }
}