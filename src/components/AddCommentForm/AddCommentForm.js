import React, { Component } from 'react'
import { Input, Label } from '../Form/Form';
import Button from '../Button/Button';
import CommentsApiService from '../../services/comments-api-service'

export class AddCommentForm extends Component {
  handleSubmit = (ev) => {
    ev.preventDefault()
    const { history } = this.props;
    history.goBack();
    //post_ID needs to be inputted instead of the 1
    //need update state with response
    const { content } = ev.target
    CommentsApiService.postComment(1, content.value)
      .then((res) => {
        content.value = ''
        console.log(res)
      })
      .catch(res => {console.log(res.error)})
  }

  render() {
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
