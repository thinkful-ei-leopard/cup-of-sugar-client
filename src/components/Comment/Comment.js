import React from 'react';
import Button from '../Button/Button'

export default class Comment extends React.Component {
    render() {
        const comment = this.props.comment;
        return (
            <li className='commentLi'>
                <p>{comment.content}</p>
                <Button type='delete'>Delete</ Button>
            </li>
        )
    }
}