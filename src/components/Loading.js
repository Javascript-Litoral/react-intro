import React from 'react'

export default class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Loading'
    }
    this.interval = this.animate()
  }

  animate() {
    let i = 0
    return setInterval(() => {
      this.setState({
        message: `Loading${Array(i).fill('.').join('')}`
      })
      i = i++ === 4 ? 0 : i
    }, 250);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <span>{this.state.message}</span>
    )
  }
}
