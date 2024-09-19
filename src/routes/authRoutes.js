/**
 * Маршруты для OAuth авторизации.
 * @module oauth
 */

import express from 'express'
import auth from '../controllers/auth.js'
import authCallback from '../controllers/authCallback.js'
import ensureHaveCode from '../utils/ensureHaveCode.js'
import ensureHaveRefreshToken from '../utils/ensureHaveRefreshToken.js'
import authRefresh from '../controllers/authRefresh.js'

const router = express.Router()

router.get('/', auth) /** Маршрут для начала авторизации */
router.get(
    '/callback',
    ensureHaveCode,
    authCallback
) /** Маршрут для callback’а авторизации */
router.get(
    '/refresh',
    ensureHaveRefreshToken,
    authRefresh
) /** Маршрут для запроса на обновление токена */

export default router
