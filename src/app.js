/**
 * Главный файл приложения Express.
 * @module app
 */

import express from 'express'
import exSession from 'express-session'
import path from 'path'
import { fileURLToPath } from 'url'

import { sessionSecret } from './config.js'

import appRoutes from './routes/appRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express()

/** Получает текущее имя файла и директорию */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** Конфигурация сессий */
const session = exSession({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // TODO: в продакшене установить `secure: true`
})

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session)

app.use('/', appRoutes) /** Основные маршруты приложения */
app.use('/auth', authRoutes) /** Маршруты для авторизации */

export default app
