/* This shows how to use the npm core sdk */

import Client from '@reachfive/identity-core'

const client = Client({
  domain: process.env.REACT_APP_REACH5_DOMAIN,
  clientId: process.env.REACT_APP_REACH5_CLIENT_ID
})

client.loginWithPassword({
  email: 'hey@gmail.com',
  password: 'pwd'
})
.catch(e => e)
.then(console.log.bind(console))