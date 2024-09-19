/**
 * Маршруты для OAuth авторизации.
 * @module oauth
 */

import express from 'express'
import auth from '../controllers/auth.js'
import authCallback from '../controllers/authCallback.js'
import ensureHaveCode from '../utils/ensureHaveCode.js'

const router = express.Router()

router.get('/', auth) /** Маршрут для начала авторизации */
router.get(
    '/callback',
    ensureHaveCode,
    authCallback
) /** Маршрут для callback’а авторизации */

export default router
