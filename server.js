const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

const getAuthorizationUrl = require('./scr/getAuthorizationUrl')
const getOauthData = require('./scr/getOauthData')

dotenv.config()
const app = express()
const port = 3000

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const redirectUri = process.env.REDIRECT_URI
const scope = 'oauth-user-show oauth-goal-subscribe'

// Указываем Express, что папка public будет содержать статические файлы
app.use(express.static(path.join(__dirname, 'public')))

app.get('/auth', (req, res) => {
    const authorizationUrl = getAuthorizationUrl(clientId, redirectUri, scope)
    res.redirect(authorizationUrl)
})

app.get('/callback', (req, res) => {
    const data = getOauthData(req, res, clientId, clientSecret, redirectUri)
})

app.listen(port, () => {
    console.log(`🗄️ приложение запущено на порту ${port}`)
})
