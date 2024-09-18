import express from 'express'
import session from 'express-session'
import path from 'path'
import { fileURLToPath } from 'url'

import { sessionSecret } from './consfig.js'

import auth from './controllers/auth.js'
import callback from './controllers/callback.js'
import getProfile from './controllers/getProfile.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use(
    session({
        secret: sessionSecret,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // В продакшене установить `secure: true`
    })
)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/auth', auth)
app.get('/callback', callback)
app.get('/profile', getProfile)

export default app
