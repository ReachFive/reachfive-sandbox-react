import React, { Component } from 'react'
import './App.css'
import Loader from './Loader'


class WithReachFiveSDK extends Component {

  state = { loading: true }

  componentWillMount() {
    window.reach5('on', 'ready', this.onSdkReady)
  }

  componentWillUnmount() {
    window.reach5('off', 'ready', this.onSdkReady)
  }

  onSdkReady = () => {
    this.setState({ loading: false })
  }

  render() {
    const { children } = this.props
    const { loading } = this.state

    return loading
      ? <Loader/>
      : children(window.reach5)
  }
}


export default WithReachFiveSDK