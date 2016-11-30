import React, { Component } from 'react'

import Alert from './Alert'
import Form from './Form'

import {apiPostSubscription} from '../api'

class NewsletterSubscription extends Component {
  constructor(props) {
    super(props)
    this.subscribe = this.subscribe.bind(this)
    this.restore = this.restore.bind(this)
    this.state = {
      didSubscribe: false,
      isFetching: false,
      error: false,
      message: ''
    }
  }

  subscribe(body) {
    this.setState({isFetching: true})
    return apiPostSubscription(body)
      .then(({message}) => {
        this.setState({
          didSubscribe: true,
          isFetching: false,
          message
        })
      })
      .catch(({message}) => {
        this.setState({
          isFetching: false,
          error: true,
          message
        })
        return Promise.reject()
      })
  }

  restore() {
    this.setState({
      didSubscribe: false
    })
  }

  render() {
    return (
      <div className="newsletter-meetup">
        <h1>Spam Bots Newsletter</h1>
        <p>No spam, unsubscribe at any time.</p>
        {
          this.state.didSubscribe
            ? <Alert type="success" dismiss={this.restore}>
                {this.state.message}
              </Alert>
            : <Form
                submit={this.subscribe}
                message={this.state.message}
                isFetching={this.state.isFetching}
                error={this.state.error}
              />
        }
      </div>
    )
  }
}

export default NewsletterSubscription
