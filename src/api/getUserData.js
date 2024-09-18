import axios from 'axios'

async function getUserData(token) {
    try {
        return await axios.get(
            'https://www.donationalerts.com/api/v1/user/oauth',
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        )
    } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error)
        throw error
    }
}

export default getUserData
