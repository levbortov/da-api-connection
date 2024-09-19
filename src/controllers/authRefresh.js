/**
 * Контроллер обновления токена авторизации.
 * @module oauth
 */

import getAuthData from '../api/getAuthData.js'
import logger from '../logger.js'

const authRefresh = async (req, res) => {
    try {
        req.grantType = 'refresh_token'
        const data = await getAuthData(req, res)

        req.session.accessToken = data.access_token
        req.session.refreshToken = data.refresh_token

        res.redirect('/')
        logger.info('Код авторизации был обновлен')
    } catch (error) {
        logger.error(`Ошибка при обновлении токена: ${error.message}`)
        res.status(500).send('Произошла ошибка во время обновления доступа.')
    }
}

export default authRefresh
