import getAuthorizationUrl from '../helpers/getAuthorizationUrl.js'
import { clientId, redirectUri, scope } from '../consfig.js'

const auth = async (req, res) => {
    const authorizationUrl = getAuthorizationUrl(clientId, redirectUri, scope)
    res.redirect(authorizationUrl)
}

export default auth
