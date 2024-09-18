const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const session = require('express-session')

const getAuthorizationUrl = require('./scr/getAuthorizationUrl')
const getOauthData = require('./scr/getOauthData')
const getUser = require('./scr/getUser')

dotenv.config()
const app = express()
const port = 3000

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const redirectUri = process.env.REDIRECT_URI
const sessionSecret = process.env.SESSION_SECRET
const scope = 'oauth-user-show oauth-goal-subscribe'

app.use(express.static(path.join(__dirname, 'public')))

app.use(
    session({
        secret: sessionSecret,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // В продакшене установить `secure: true`
    })
)

app.get('/auth', async (req, res) => {
    const authorizationUrl = getAuthorizationUrl(clientId, redirectUri, scope)
    res.redirect(authorizationUrl)
})

app.get('/callback', async (req, res) => {
    try {
        const data = await getOauthData(
            req,
            res,
            clientId,
            clientSecret,
            redirectUri
        )

        req.session.accessToken = data.access_token
        req.session.refreshToken = data.refresh_token

        res.redirect('/profile')
    } catch (error) {
        res.status(500).send(`Не удалось обменять код на токен: ${error}`)
    }
})

app.get('/profile', async (req, res) => {
    if (!req.session.accessToken) {
        return res.redirect('/auth')
    }

    const token = req.session.accessToken
    const user = await getUser(res, token)

    res.send(token)
    /*
    🪲https://github.com/levbortov/da-api-connection/issues/1
     */
})

app.listen(port, () => {
    console.log(`🗄️ приложение запущено на порту ${port}`)
})
