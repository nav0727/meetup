import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class Home extends Component {
  onRegister = () => {
    const {history} = this.props
    history.replace('/register')
  }

  render() {
    return (
      <div>
        <nav>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
        </nav>
        <div className="body">
          <h1>Welcome to Meetup</h1>
          <p>Please register for the topic </p>
          <Link to="/register" style={{textDecoration: 'none'}}>
            <button type="button" onClick={this.onRegister}>
              Register
            </button>
          </Link>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default Home
