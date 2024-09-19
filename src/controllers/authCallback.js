import { clientId, clientSecret, redirectUri } from '../config.js'
import getAuthData from '../api/getAuthData.js'
import logger from '../logger.js'

const authCallback = async (req, res) => {
    try {
        const data = await getAuthData(req, res, clientId, clientSecret, redirectUri)

        req.session.accessToken = data.access_token
        req.session.refreshToken = data.refresh_token

        res.redirect('/user')
        logger.info('Код авторизации был обменян на токены')
    } catch (error) {
        logger.error(`Ошибка в контроллере коллбека: ${error.message}`)
        res.status(500).send('Произошла ошибка. Пожалуйста, попробуйте позже.')
    }
}

export default authCallback
