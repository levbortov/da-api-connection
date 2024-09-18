import { clientId, clientSecret, redirectUri } from '../consfig.js'
import getOauthData from '../api/getOauthData.js'

const callback = async (req, res) => {
    try {
        const data = await getOauthData(
            req,
            res,
            clientId,
            clientSecret,
            redirectUri
        )

        req.session.accessToken = data.access_token
        req.session.refreshToken = data.refresh_token

        res.redirect('/profile')
    } catch (error) {
        res.status(500).send('Произошла ошибка. Пожалуйста, попробуйте позже.')
    }
}

export default callback
