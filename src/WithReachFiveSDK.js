import React, { Component } from 'react'
import './App.css'
import Loader from './Loader'


/**
 * This shows one way to wait for the <script> based sdk to load before using it.
 */
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