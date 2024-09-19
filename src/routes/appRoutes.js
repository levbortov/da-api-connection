/**
 * Маршруты основного приложения.
 * @module app
 */

import express from 'express'
import path from 'path'
import getUser from '../controllers/getUser.js'
import ensureAuthenticated from '../utils/ensureAuthenticated.js'

const router = express.Router()

const getFrontend = (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
}

router.get('/', getFrontend) /** Корневой маршрут приложения */
router.get(
    '/user',
    ensureAuthenticated,
    getUser
) /** Маршрут для авторизации пользователя */

export default router
