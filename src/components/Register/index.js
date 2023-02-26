import {Component} from 'react'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {username: '', topic: topicsList[0].id, status: false}

  onName = event => {
    this.setState({username: event.target.value})
  }

  changeTopic = event => {
    this.setState({topic: event.target.value})
  }

  renderRegister = event => {
    event.preventDefault()
    const {history} = this.props
    const {username} = this.state
    if (username !== '') {
      history.replace('/')
    } else {
      this.setState({status: true})
    }
  }

  renderForm = () => {
    const {status, topic} = this.state

    return (
      <div className="register-form">
        <form onSubmit={this.renderRegister}>
          <h1>Let us join</h1>
          <div className="col-con">
            <label htmlFor="name"> NAME</label>

            <input
              type="text"
              placeholder="Your name"
              id="name"
              onChange={this.onName}
            />
          </div>
          <div className="col-con">
            <label htmlFor="topics">TOPICS</label>

            <select value={topic} onChange={this.changeTopic} id="topics">
              {topicsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Register Now</button>
          {status && <p className="error">Please enter your name</p>}
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="register-container">
        <div className="register-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
            className="reg-img"
          />
          {this.renderForm()}
        </div>
      </div>
    )
  }
}

export default Register
