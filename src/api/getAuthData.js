import axios from 'axios'
import logger from '../logger.js'

async function getAuthData(req, res, clientId, clientSecret, redirectUri) {
    const authorizationCode = req.query.code
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

    if (!authorizationCode) {
        logger.warn('Код авторизации не найден')
        logger.debug('Переадресация на /auth')
        return res.redirect('/auth')
    }

    try {
        const tokenResponse = await axios.post(
            'https://www.donationalerts.com/oauth/token',
            {
                grant_type: 'authorization_code',
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                code: authorizationCode,
            },
            {
                headers: headers,
            }
        )
        logger.info('OAuth-данные получены')
        return tokenResponse.data
    } catch (error) {
        logger.error(`Ошибка доставки OAuth-данных: ${error.message}`)
        throw error
    }
}

export default getAuthData
