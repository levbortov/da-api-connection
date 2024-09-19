/**
 * Мидлвар-проверка на наличие токена обновления
 * @module middleware
 */

import logger from '../logger.js'

const ensureHaveRefreshToken = (req, res, next) => {
    if (!req.session.refresh_token) {
        logger.warn('Отсутствует токен обновления')
        logger.debug('Переадресация на /auth')
        return res.redirect('/auth')
    }
    logger.info('Токен обновления в наличии')
    next()
}

export default ensureHaveRefreshToken
