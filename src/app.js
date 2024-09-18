import express from 'express'
import session from 'express-session'

import { sessionSecret } from './consfig.js'

import auth from './controllers/auth.js'
import callback from './controllers/callback.js'
import getProfile from './controllers/getProfile.js'

const app = express()

app.use(express.json())
app.use(express.static('public'))

app.use(
    session({
        secret: sessionSecret,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // В продакшене установить `secure: true`
    })
)

app.get('/auth', auth)

app.get('/callback', callback)

app.get('/profile', getProfile)

export default app
