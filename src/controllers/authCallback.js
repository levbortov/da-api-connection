/**
 * Контроллер callback’а OAuth авторизации.
 * @module oauth
 */

import getAuthData from '../api/getAuthData.js'
import logger from '../logger.js'

const authCallback = async (req, res) => {
    try {
        req.grantType = 'authorization_code'
        const data = await getAuthData(req, res)

        req.session.accessToken = data.access_token
        req.session.refreshToken = data.refresh_token

        res.redirect('/user')
        logger.info('Код авторизации был обменян на токены')
    } catch (error) {
        logger.error(`Не удалось обменять код авторизации на токен: ${error.message}`)
        res.status(500).send('Произошла ошибка. Пожалуйста, попробуйте позже.')
    }
}

export default authCallback
