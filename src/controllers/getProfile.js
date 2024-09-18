import getUserData from '../api/getUserData.js'

const getProfile = async (req, res) => {
    if (!req.session.accessToken) {
        return res.redirect('/auth')
    }

    const token = req.session.accessToken
    try {
        const userResponse = await getUserData(token)
        res.send(userResponse.data)
    } catch (error) {
        console.error('Ошибка при получении профиля пользователя:', error)
        res.status(500).send('Произошла ошибка. Пожалуйста, попробуйте позже.')
    }
}

export default getProfile
