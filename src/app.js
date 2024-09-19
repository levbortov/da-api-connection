import express from 'express'
import exSession from 'express-session'
import path from 'path'
import { fileURLToPath } from 'url'

import { sessionSecret } from './config.js'

import appRoutes from './appRoutes.js'
import authRoutes from './authRoutes.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const session = exSession({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // TODO: в продакшене установить `secure: true`
})

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session)
app.use('/', appRoutes)
app.use('/auth', authRoutes)

export default app
