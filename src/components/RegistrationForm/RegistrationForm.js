import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../Button/Button'
// import './RegistrationForm.css'

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, username, password } = ev.target
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then(user => {
        name.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form
        onSubmit={this.handleSubmit}
        className='reg-form'
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <h3>Sign Up</h3>
        <div className='reg-div'>
          <Label htmlFor='registration-name-input' className='regLabel'>
            Enter your name<Required />
          </Label>
          <Input
            ref={this.firstInput}
            id='registration-name-input'
            name='name'
            className='regInput'
            required
          />
        </div>
        <div className='reg-div'>
          <Label htmlFor='registration-username-input' className='regLabel'>
            Create a username<Required />
          </Label>
          <Input
            id='registration-username-input'
            name='username'
            className='regInput'
            required
          />
        </div>
        <div className='reg-div'>
          <Label htmlFor='registration-email-input' className='regLabel'>
            Enter your email<Required />
          </Label>
          <Input
            id='registration-email-input'
            name='email'
            type='email'
            className='regInput'
            required
          />
        </div>
        <div className='reg-div'>
          <Label htmlFor='registration-password-input' className='regLabel'>
            Choose a password<Required />
          </Label>
          <Input
            id='registration-password-input'
            name='password'
            type='password'
            className='regInput'
            required
          />
        </div>
        <div className='reg-div'>
          <Label htmlFor='registration-zipcode-input' className='regLabel'>
            Enter your zipcode<Required />
          </Label>
          <Input
            id='registration-zipcode-input'
            name='zipcode'
            type='number'
            className='regInput'
            required
          />
        </div>
        <footer
          className='reg-footer'
        >
          <Button type='submit' className='regButton'>
            Submit
          </Button>
          {' '}
          <Link to='/login' className='regLink'>Already have an account?</Link>
        </footer>
      </form>
    )
  }
}

export default RegistrationForm
