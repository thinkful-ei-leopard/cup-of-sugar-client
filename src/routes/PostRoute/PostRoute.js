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
        console.log('mounted')
        this.getPosts();
        this.getComments();
        this.getPostId()
      }
    
    // componentDidUpdate() {
    //     console.log('updating', this.state.posts.length)
    //     console.log(this.context)
    //     if(this.state.posts.length < 1) {
    //         console.log('setting')
    //         let comments = this.context.comments
    //         let posts = this.context.posts
    //         this.setState({comments: comments,
    //         posts: posts})
    //     }
    //     console.log(this.state)
    // }
    
      async getComments() {
        const comments = await CommentsApiService.getComments();
        this.context.setComments(comments);
      }
    
      async getPosts() {
        const posts = await PostsApiService.getPosts();
        this.context.setPosts(posts);
      }

      getPostId = () => {
        this.context.setPostId(this.props.match.params.post_id)
      }

      //save context in componentWillUnmount or componentDidUpdate

    render () {
        // let posts = this.state.posts
        // let comments = this.state.comments
        // console.log(this.context.posts.length)
        // // console.log(this.state)
        // // if(this.context.posts.length > 0) {
        // //     posts = this.context.posts
        // //     comments = this.context.comments
        // // }
        let id = this.props.match.params.post_id
        // console.log(this.state.loading)
        // if(this.state.loading === true) {
        //     return (
        //         <></>
        //     )
        // }
        return (
            <PostView id={id}/>
        )
    }
}