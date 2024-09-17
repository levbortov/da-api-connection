const axios = require('axios')

async function getOauthData(req, res, clientId, clientSecret, redirectUri) {
    const authorizationCode = req.query.code  // Получаем `code` из запроса

    if (!authorizationCode) {
        return res.send('Код авторизации не найден')
    }

    try {
        // Обмениваем код на токен доступа
        const tokenResponse = await axios.post('https://www.donationalerts.com/oauth/token', {
            grant_type: 'authorization_code',
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: redirectUri,
            code: authorizationCode,
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const data = tokenResponse.data
        res.json(data)
    } catch (error) {
        console.error('Ошибка при обмене кода на токен:', error)
        res.status(500).send('Не удалось обменять код на токен')
    }
}

module.exports = getOauthData