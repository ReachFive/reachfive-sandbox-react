import React, { Component } from 'react'


class ProfileEditor extends Component {

  componentWillUnmount() {
    if (this.widget)
      this.widget.destroy()
  }

  installWidget = container => {
    if (!container) return

    const { reach5, accessToken } = this.props

    reach5('showProfileEditor', {
      container,
      accessToken,
      fields: [
        'given_name',
        'family_name',
        'birthdate'
      ],
      onReady: widget => { this.widget = widget },
      onSuccess: () => alert('Updated!'),
      onError: () => alert('Error')
    })
  }

  render() {
    return (
      <div ref={this.installWidget}></div>
    )
  }
}

export default ProfileEditor