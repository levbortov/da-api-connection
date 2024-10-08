/**
 * Запрос на получение данных пользователя через API DonationAlerts.
 * @module user
 */

import axios from 'axios'
import logger from '../logger.js'

async function getUserData(token) {
    try {
        const response = await axios.get(
            'https://www.donationalerts.com/api/v1/user/oauth',
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        )
        logger.info('Данные пользователя получены')
        return response
    } catch (error) {
        logger.error(`Ошибка доставки данных пользоваетеля: ${error.message}`)
        throw error
    }
}

export default getUserData
