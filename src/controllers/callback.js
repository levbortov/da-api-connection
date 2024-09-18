import { clientId, clientSecret, redirectUri } from '../config.js'
import getOauthData from '../api/getOauthData.js'
import logger from '../logger.js'

const callback = async (req, res) => {
    try {
        const data = await getOauthData(req, res, clientId, clientSecret, redirectUri)

        req.session.accessToken = data.access_token
        req.session.refreshToken = data.refresh_token

        res.redirect('/profile')
        logger.info('Код авторизации был обменян на токены')
    } catch (error) {
        logger.error(`Ошибка в контроллере коллбека: ${error.message}`)
        res.status(500).send('Произошла ошибка. Пожалуйста, попробуйте позже.')
    }
}

export default callback
