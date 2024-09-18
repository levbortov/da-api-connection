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
        logger.info('Данные пользователя извлечены')
        return response
    } catch (error) {
        logger.error(`Ошибка извлечения данных пользоваетеля: ${error.message}`)
        throw error
    }
}

export default getUserData
