import React, { Component } from 'react'
import { Input, Label } from '../Form/Form';
import Button from '../Button/Button';
import CommentsApiService from '../../services/comments-api-service'
import PostsContext from '../../contexts/PostsContext'

export class AddCommentForm extends Component {
  static contextType = PostsContext

  handleSubmit = (ev) => {
    ev.preventDefault()
    const { history } = this.props;
    history.goBack();
    //post_ID needs to be inputted instead of the 1
    //need update state with response
    const { content } = ev.target
    CommentsApiService.postComment(this.context.currentPostId, content.value)
      .then((res) => {
        content.value = ''
        console.log(res)
      })
      .catch(res => {console.log(res.error)})
  }

  render() {
    console.log(this.context.currentPostId)

    return (
      <form onSubmit={this.handleSubmit}>
        <Label htmlFor="add-comment-content">
          Add Comment:
        </Label>
        <Input
          id='add-comment-content'
          name='content'
        />
        <Button type="submit">
            Submit
          </Button>
      </form>
    )
  }
}

export default AddCommentForm
