/**
 * Контроллер авторизации.
 * @module oauth
 */

import getAuthorizationUrl from '../utils/getAuthorizationUrl.js'
import { clientId, redirectUri, scope } from '../config.js'
import logger from '../logger.js'

const auth = async (req, res) => {
    try {
        const authorizationUrl = getAuthorizationUrl(clientId, redirectUri, scope)
        res.redirect(authorizationUrl)
        logger.info('Перенаправлен на URL-адрес авторизации')
    } catch (error) {
        logger.error(`Ошибка в контроллере авторизации: ${error.message}`)
        res.status(500).send('Произошла ошибка. Пожалуйста, попробуйте позже.')
    }
}

export default auth
