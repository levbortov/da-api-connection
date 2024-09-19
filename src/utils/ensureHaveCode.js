/**
 * Мидлвар-проверка на наличие кода доступа
 * @module middleware
 */

import logger from '../logger.js'

const ensureHaveCode = (req, res, next) => {
    if (!req.query.code) {
        logger.warn('Отсутствует код авторизации')
        logger.debug('Переадресация на /auth')
        return res.redirect('/auth')
    }
}

export default ensureHaveCode
