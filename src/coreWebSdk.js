/* This shows how to use the npm core sdk */

import createSdk from '@reachfive/identity-core'


const sdk = createSdk({
  domain: process.env.REACT_APP_REACH5_DOMAIN,
  clientId: process.env.REACT_APP_REACH5_CLIENT_ID
})

sdk.loginWithPassword({
  email: 'hey@gmail.com',
  password: 'pwd'
})
.catch(e => e)
.then(console.log.bind(console))