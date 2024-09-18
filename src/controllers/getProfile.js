import getUserData from '../api/getUserData.js'
import logger from '../logger.js'

const getProfile = async (req, res) => {
    if (!req.session.accessToken) {
        return res.redirect('/auth')
    }

    const token = req.session.accessToken
    try {
        const userResponse = await getUserData(token)
        res.send(userResponse.data)
        logger.info('Извлечены данные профиля пользователя')
    } catch (error) {
        logger.error(`Ошибка в контроллере getProfile: ${error.message}`)
        res.status(500).send('Произошла ошибка. Пожалуйста, попробуйте позже.')
    }
}

export default getProfile
