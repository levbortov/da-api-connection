import getUserData from '../api/getUserData.js'
import logger from '../logger.js'

const getUser = async (req, res) => {
    const token = req.session.accessToken

    try {
        const userResponse = await getUserData(token)
        res.send(userResponse.data)
        logger.info('Данные пользователя извелчены')
    } catch (error) {
        logger.error(`Ошибка в контроллере getUser: ${error.message}`)
        res.status(500).send('Произошла ошибка. Пожалуйста, попробуйте позже.')
    }
}

export default getUser
