import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

export default class LoginRoute extends React.Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => { },
        },
      }
    
      handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
      }
    
      render() {
        return (
          <section className='loginSection'>
            <h1>Cup of Sugar</h1>
            <p>When you need a helping hand.</p>
            <h2>Login</h2>
            <LoginForm
              onLoginSuccess={this.handleLoginSuccess}
            />
          </section>
        )
    }
}