/**
 * Мидлвар-проверка на наличие токена доступа
 * @module middleware
 */

import logger from '../logger.js'

const ensureAuthenticated = (req, res, next) => {
    if (!req.session.accessToken) {
        logger.warn('Отсутствует токен авторизации')
        logger.debug('Переадресация на /auth')
        return res.redirect('/auth')
    }
    next()
}

export default ensureAuthenticated
