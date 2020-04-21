import React from 'react';
import PostsContext from '../../contexts/PostsContext';
import Comment from '../../components/Comment/Comment'

export default class PostRoute extends React.Component {
    static defaultProps = {
        history: {
            goBack: () => {}
        },
        match: {
            params: {}
        }
    }
    render () {
        return (
          <PostsContext.Consumer>
              {value => {
                  const post = value.posts.find(post => post.id === this.props.match.params.post_id);
                  const comments = value.comments.filter(comment => comment.post_id === this.props.match.params.post_id)
              return (
            <section className='postSection'>
                <h1 className='postType'>{post.type}</h1>
                <h2 className='postName'>{post.name} ({post.user_name})</h2>
                <p className='postDate'>{post.date_modified}</p>
                <p className='postTitle'>{post.title}</p>
                <p className='postDescription'>{post.description}</p>
                <ul>
                    <h3>Comments</h3>
                    {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
                </ul>
            </section>
            )}}
          </PostsContext.Consumer>
        )
    }
}