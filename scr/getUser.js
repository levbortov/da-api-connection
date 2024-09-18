const axios = require('axios')

async function getUser(token) {
    try {
        return await axios.get('https://www.donationalerts.com/api/v1/user/oauth', {
            headers: { Authorization: `Bearer ${token}` },
        })
    } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error)
        throw error
    }
}

module.exports = getUser
