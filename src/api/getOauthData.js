import axios from 'axios'
import logger from '../logger.js'

async function getOauthData(req, res, clientId, clientSecret, redirectUri) {
    const authorizationCode = req.query.code
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

    if (!authorizationCode) {
        logger.warn('Код авторизации не найден')
        return res.send('Не авторизован')
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
        logger.info('OAuth-данные извелчены')
        return tokenResponse.data
    } catch (error) {
        logger.error(`Ошибка извлечения OAuth-данных: ${error.message}`)
        throw error
    }
}

export default getOauthData
