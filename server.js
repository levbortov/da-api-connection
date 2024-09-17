const express = require('express')
const dotenv = require('dotenv')

const getAuthorizationUrl = require('./scr/getAuthorizationUrl')

dotenv.config()
const app = express()
const port = 3000

const clientId = process.env.CLIENT_ID;
const redirectUri = process.env.REDIRECT_URI;
const scope = 'oauth-user-show oauth-goal-subscribe';

app.get('/', (req, res) => {
    res.send('Donation Alerts API connection')
})

app.get('/auth', (req, res) => {
    const authorizationUrl = getAuthorizationUrl(clientId, redirectUri, scope)
    res.redirect(authorizationUrl)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})