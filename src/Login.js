import React, { Component } from 'react'


class Login extends Component {

  componentWillUnmount() {
    if (this.widget)
      this.widget.destroy()
  }

  installWidget = container => {
     if (!container) return

    const { reach5 } = this.props

    reach5('showAuth', {
      container: container.id,
      onReady: widget => { this.widget = widget }
    })

    reach5('on', 'authenticated', this.onAuthenticated)
  }

  onAuthenticated = result => {
    const { reach5 } = this.props

    reach5('off', 'authenticated', this.onAuthenticated)
    this.props.onAuthenticated(result.accessToken)
  }

  render() {
    return (
      <div id="loginContainer" ref={this.installWidget}></div>
    )
  }
}

export default Login