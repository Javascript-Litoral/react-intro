import React, { Component } from 'react'

import Alert from './Alert'
import Form from './Form'

class NewsletterSubscription extends Component {
  constructor(props) {
    super(props)
    this.subscribe = this.subscribe.bind(this)
    this.restore = this.restore.bind(this)
    this.state = {
      didSubscribe: false
    }
  }

  subscribe() {
    this.setState({
      didSubscribe: true
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
                Brace yourself the spam is comming!
              </Alert>
            : <Form submit={this.subscribe} />
        }
      </div>
    )
  }
}

export default NewsletterSubscription
