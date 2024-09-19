/**
 * Запрос на получение или обновление OAuth-токена.
 * @module oauth
 */

import axios from 'axios'
import logger from '../logger.js'

import { clientId, clientSecret, redirectUri, scope } from '../config.js'

async function getAuthData(req, res) {
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    let data = {
        grant_type: req.grantType,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
    }

    logger.info(`Сессия: ${req.session}`)

    if (req.grantType === 'authorization_code') {
        data.code = req.query.code
        logger.info('Запрос на обмен кода на токен принят')
    } else if (req.grantType === 'refresh_token') {
        data.refresh_token = req.session.refreshToken
        data.scope = scope
        logger.info('Запрос на обновление токена принят')
    } else {
        logger.error(
            `Поступил запрос на получение токена, 
            но грант не указан или указан неверно. grantType: ${req.grantType}`
        )
        return res.status(400).send('Ошибка на стороне клиента')
    }

    try {
        const tokenResponse = await axios.post(
            'https://www.donationalerts.com/oauth/token',
            data,
            { headers: headers }
        )
        logger.info('OAuth-данные получены')
        return tokenResponse.data
    } catch (error) {
        logger.error(`Ошибка доставки OAuth-данных: ${error.message}`)
        throw error
    }
}

export default getAuthData
