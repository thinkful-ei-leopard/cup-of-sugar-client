import React from 'react';
import PostsContext from '../../contexts/PostsContext';
import PostsApiService from '../../services/posts-api-service';
import CommentsApiService from '../../services/comments-api-service';
import PostView from '../../components/PostView/PostView'

export default class PostRoute extends React.Component {
    state = {
        comments: [],
        posts: [],
        loading: true
    }
    static defaultProps = {
        history: {
            goBack: () => {}
        },
        match: {
            params: {}
        }
    }
    static contextType = PostsContext

    componentDidMount() {
        this.getPosts();
        this.getComments();
      }
    
      async getComments() {
        const comments = await CommentsApiService.getComments();
        this.context.setComments(comments);
      }
    
      async getPosts() {
        const posts = await PostsApiService.getPosts();
        this.context.setPosts(posts);
      }

    render () {
        let id = this.props.match.params.post_id
        return (
            <PostView id={id}/>
        )
    }
}