import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'
import WithReachFiveSDK from './WithReachFiveSDK'
import Login from './Login'
import ProfileEditor from './ProfileEditor'
import './coreWebSdk'


class App extends Component {

  state = {
    accessToken: localStorage.getItem('accessToken')
  }

  onAuthenticated = accessToken => {
    localStorage.setItem('accessToken', accessToken)
    this.setState({ accessToken })
  }

  logout = () => {
    localStorage.removeItem('accessToken')
    window.reach5('logout', {
      redirectTo: window.location.href
    })
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React sandbox</h1>
          <button id="logout" onClick={ this.logout }>Logout</button>
        </header>

        <main>
          <WithReachFiveSDK>
            { this.routeChild }
          </WithReachFiveSDK>
        </main>
      </div>
    )
  }

  routeChild = reach5 => {
    const { accessToken } = this.state

    if (accessToken) return (
      <ProfileEditor
        reach5={ reach5 }
        accessToken={ accessToken }
        />
    )
    else return (
      <Login
        reach5={ reach5 }
        onAuthenticated={ this.onAuthenticated }
        />
    )
  }
}

export default App