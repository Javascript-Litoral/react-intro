import React from 'react'

import '../style/Form.css'

import Input from './Input'
import Loading from './Loading'

function validateEmail(value) {
  return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value)
}

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      isPristine: true,
      fields: {
        mail: {
          value: '',
          isValid: false,
          validator: validateEmail
        },
        name: {
          value: '',
          isValid: false,
          validator: (name) => !!name && true
        }
      }
    }
  }

  handleFieldChange (field, value) {
    this.setState(state => {
      state.fields[field].value = value
      state.fields[field].isValid = state.fields[field].validator(value)
      state.fields[field].isPristine = false
      return state
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({isPristine: false})
    if (this.isValid()) {
      const body = {
        mail: this.state.fields.mail.value,
        name: this.state.fields.name.value
      }
      this.props.submit(body)
    }
  }

  isValid() {
    return Object.keys(this.state.fields)
      .reduce((acc, field) => {
        return acc && this.state.fields[field].isValid
      }, true)
  }

  render () {
    const {fields, isPristine} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="info">
          <Input
            placeholder="John Doe"
            isValid={isPristine ? true : fields.name.isValid}
            value={fields.name.value}
            onChange={e => this.handleFieldChange('name', e.target.value)}
          />
          <Input
            placeholder="foo@bar.com"
            isValid={isPristine ? true : fields.mail.isValid}
            value={fields.mail.value}
            onChange={e => this.handleFieldChange('mail', e.target.value)}
          />
        </div>
        <button type="submit" disabled={this.props.isFetching}>
          {this.props.isFetching ? <Loading /> : "Subscribe"}
        </button>
        {this.props.error && <p className="form-error">{this.props.message}</p>}
      </form>
    )
  }
}
