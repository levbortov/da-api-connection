const axios = require('axios')

function getUser(res, token) {
    try {
        return axios.get('https://www.donationalerts.com/api/v1/user/oauth', {
            headers: { Authorization: `Bearer ${token}` },
        })
    } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error)
        res.status(500).send('Ошибка при получении данных пользователя')
    }
}

module.exports = getUser
